const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const stripe = require('../stripe');

const mutations = {
  async createItem(parent, args, ctx, info) {
    // Make sure they are signed in
    const { userId } = ctx.request;
  
    if (!userId) {
      throw new Error('You must be signed in');
    }

    // Check if they have the permission
    const hasPermission = ctx.request.user.permissions.some(permission =>
      ['ADMIN', 'ITEMCREATE'].includes(permission));

    if (!hasPermission) {
      throw new Error("You don't have permission to do that!");
    }

    const item = ctx.prisma.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  },
  async updateItem(parent, args, ctx, info) {
    // Make sure they are signed in
    const { userId } = ctx.request;
  
    if (!userId) {
      throw new Error('You must be signed in');
    }

    // Check if they have the permission
    const hasPermission = ctx.request.user.permissions.some(permission =>
      ['ADMIN', 'ITEMUPDATE'].includes(permission));

    if (!hasPermission) {
      throw new Error("You don't have permission to do that!");
    }

    // take a copy of the updates
    const updates = { ...args };

    // remove ID from the updates
    delete updates.id;

    //run the update method
    return ctx.prisma.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info);
  },
  async deleteItem(parent, args, ctx, info) {
     // Make sure they are signed in
     const { userId } = ctx.request;
    
     if (!userId) {
       throw new Error('You must be signed in');
     }

    const where = {
      id: args.id
    };

    // Check if they have the permission
    const hasPermission = ctx.request.user.permissions.some(permission =>
      ['ADMIN', 'ITEMDELETE'].includes(permission));

    if (!hasPermission) {
      throw new Error("You don't have permission to do that!");
    }

    return ctx.prisma.mutation.deleteItem({ where }, info)
  },
  async signup(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    args.email = args.email.toLowerCase();

    if (!args.email.length || !args.username.length || !args.password.length) {
      throw new Error("Error! Please fill all fields");
    }

    // check if username exist
    const usernameExists = await ctx.prisma.exists.User({
      username: args.username
    });
    if (usernameExists) {
      throw new Error("Sorry! Username already Exist");
    }

    // check if email exist
    const emailExists = await ctx.prisma.exists.User({
      email: args.email
    });
    if (emailExists) {
      throw new Error("Email already Exist");
    }

    // hash password
    const password = await bcrypt.hash(args.password, 10);

    // create user
    const user = await ctx.prisma.mutation.createUser({
      data: {
        ...args,
        password,
        permissions: { set: ['USER'] }
      }
    }, info);

    // create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // set the jwt data as cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });

    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // check empty fields
    if (!email.length || !password.length) {
      throw new Error("Enter email and password");
    }

    // check if there is a user with that email
    const user = await ctx.prisma.query.user({ where: { email }});
    if (!user) {
      throw new Error(`No user with such email`);
    }
    // check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password!');
    }
    // generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge:  1000 * 60 * 60 * 24 * 365,
    });
    // return the user
    return user;
  }, 
  async updateUserInfo(parent, args, ctx, info) {
    // Make sure they are signed in
    const { userId } = ctx.request;
    
    if (!userId) {
      throw new Error('You must be signed in');
    }

    if (args.username) {
        const updates = { 
          ...args,
          username: args.username
        };
      
        return ctx.prisma.mutation.updateUser({
          data: updates,
          where: {
            id: userId
          }
        }, info);
    }

    // get user data
    const user = await ctx.prisma.query.user({ where: {
      id: userId
    }}, `{ password }`);
    
    // compare old password with input
    const valid = await bcrypt.compare(args.oldPassword, user.password);

    if (!valid) {
      throw new Error('Old password not correct!');
    } 

    // hash password
    const newPassword = await bcrypt.hash(args.newPassword, 10);

    const updates = { 
      ...args,
      password: newPassword,
    };

    delete updates.oldPassword;
    delete updates.newPassword;

    return ctx.prisma.mutation.updateUser({
      data: updates,
      where: {
        id: userId
      }
    }, info);
    
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'logged out successfully'}
  },
  async addToWishList(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('Sorry, You must be signed in');
    }
    // 2. Query the users wishlist
    const [existingWishList] = await ctx.prisma.query.wishListItems({
      where: {
        user: {id: userId},
        item: {id: args.id},
      }
    });
    // 3. Check if that item is already in their wishlist
    if (existingWishList) {
      return ctx.prisma.mutation.deleteWishListItem({
        where: {
          id: existingWishList.id
        }
      });
    }
    // 4. if its not, create add the Item for that user!
    return ctx.prisma.mutation.createWishListItem({
      data: {
        user: {
          connect: { id: userId },
        },
        item: {
          connect: { id: args.id }
        }
      }
    });
  },
  async addToCart(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request; 
    if (!userId) {
      throw new Error('Sorry, You must be signed in');
    }
    // 2. Query the users current cart
    const [existingCartItem] = await ctx.prisma.query.cartItems({
      where: {
        user: {id: userId},
        item: {id: args.id},
      }
    });
    
    // 3. Check if that item is already in their cart
    if (existingCartItem) {
      return ctx.prisma.mutation.updateCartItem({
        where: {
          id: existingCartItem.id
        },
        data: { quantity: existingCartItem.quantity + 1 }
      });
    }
    // 4. if its not, create a fresh CartItem for that user!
    return ctx.prisma.mutation.createCartItem({
      data: {
        user: {
          connect: { id: userId },
        },
        item: {
          connect: { id: args.id }
        }
      }
    });
  },
  async removeFromCart(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.prisma.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },`{id, user { id }}`
    );

    // 2 Make sure we found an Item
    if (!cartItem) throw new Error('No CartItem Found!');
    
    // 3. Make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('Sorry you can\'t remove another users cart Item');
    }

    // 4. Delete that cart item
    return ctx.prisma.mutation.deleteCartItem({
      where: {
        id: args.id
      }
    }, info);
    
  },
  async increaseItem(parent, args, ctx, info) {
      // 1. Make sure they are signed in
      const { userId } = ctx.request;
      if (!userId) {
        throw new Error('Sorry, You must be signed in');
      }
      // 2. Query the users current cart
      const [existingCartItem] = await ctx.prisma.query.cartItems({
        where: {
          user: {id: userId},
          item: {id: args.id},
        }
      });
      
      // 3. Check if that item is already in their cart
      if (existingCartItem) {
        return ctx.prisma.mutation.updateCartItem({
          where: {
            id: existingCartItem.id
          },
          data: { quantity: existingCartItem.quantity + 1 }
        });
      } 
  },
  async decreaseItem(parent, args, ctx, info) {
      console.log(args);
      // 1. Make sure they are signed in
      const { userId } = ctx.request;
      if (!userId) {
        throw new Error('You must be signed in');
      }
      // 2. Query the users current cart
      const [existingCartItem] = await ctx.prisma.query.cartItems({
        where: {
          user: {id: userId},
          item: {id: args.id},
        }
      });
      
      // 3. Check if that item is already in their cart
      if (existingCartItem && existingCartItem.quantity !== 1) {
        return ctx.prisma.mutation.updateCartItem({
          where: {
            id: existingCartItem.id
          },
          data: { quantity: existingCartItem.quantity - 1 }
        });
      } 

      if (existingCartItem.quantity === 1) {
        throw new Error("Sorry, You can't go below 1");
      }
  },
  async moveItemToCart(parent, args, ctx, info) {
       // 1. Make sure they are signed in
       const { userId } = ctx.request;
       if (!userId) {
         throw new Error('You must be signed in');
       }

      // 2. remove Item from wishlist
      await ctx.prisma.mutation.deleteWishListItem({
        where: {
          id: args.wishListItemId
        }, 
      });

      // 3. create a fresh CartItem for that user!
      return ctx.prisma.mutation.createCartItem({
        data: {
          user: {
            connect: { id: userId },
          },
          item: {
            connect: { id: args.id }
          }
        }
      }, info);
  },
  async createOrder(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },`{id, user { id }}`
    );

    // 1.5 Make sure we found an Item
    if (!cartItem) throw new Error('No CartItem Found!');
    // 2. Make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('Error Occured!');
    }
    // 3. Delete that cart item
    return ctx.db.mutation.deleteCartItem({
      where: {
        id: args.id
      }
    }, info);
  },
  async createOrder(parent, args, ctx, info) {
    //1. make sure they are logged in
      const { userId } = ctx.request;
      if (!userId) throw new Error('You must be signed in to make this order.');
      const user = await ctx.prisma.query.user({
        where: {
          id: userId
        }
      }, `{
        id 
        username
        email 
        cart {
          id 
          quantity 
          item {
            id 
            itemName 
            newPrice
            description 
            image1
          }
        }
      }`)
      //2. recalculate the total for the price
      const amount = user.cart.reduce((tally, cartItem) => tally + cartItem.item.newPrice * cartItem.quantity, 0);
      //3. Create the stripe charge
      const charge = await stripe.charges.create({
        amount, 
        currency: 'USD', 
        source: args.token,  
      });
      //4. Convert the cartItems to orderItems
        const orderItems = user.cart.map(cartItem => {
          const orderItem = {
            ...cartItem.item,
            quantity: cartItem.quantity,
            user: { connect: { id: userId }},
          };
          delete orderItem.id;
          return orderItem;
        });
      //5. Create the Order
        const order = await ctx.prisma.mutation.createOrder({
          data: {
            total: charge.amount,
            charge: charge.id,
            items: { create: orderItems },
            user: { connect: { id: userId }}
          },
        });
      //6. Clean up - clear the users cart, delete cartItems
        const cartItemIds = user.cart.map(cartItem => cartItem.id);
        await ctx.prisma.mutation.deleteManyCartItems({
          where: {
            id_in: cartItemIds
          }
        });
      //7. Return the order to the client
        return order;
  }
};
 
module.exports = mutations;