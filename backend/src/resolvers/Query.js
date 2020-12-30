const { forwardTo } = require('prisma-binding');

const Query = {
  item: forwardTo('prisma'),
  async searchItems(parent, args, ctx, info) {
    
    if (args.where.itemName_contains.trim().length === 0) {
      return [];
    }

    const opArgs = {};

    if (args.where) {
      opArgs.where = {
        OR: [ 
          {
            itemName_contains: args.where.itemName_contains.toLowerCase()
          },
          {
            description_contains: args.where.itemName_contains.toLowerCase()
          }
        ]
      }            
    }

    return ctx.prisma.query.items(opArgs, info);
  },
  async items(parent, args, ctx, info) {
    const opArgs = {};

    if (args.where) {
      opArgs.where = {
        OR: [ 
          {
            category: args.where.category
          },
          {
            discountPercent_gt: args.where.discountPercent_gt
          }
        ]
      }            
    }

    return ctx.prisma.query.items(opArgs, info);
  },
  async currentItem(parent, args, ctx, info){
    const opArgs = {};

    if (args.where) {
      opArgs.where = {
        category: args.where.category
      }
    }

    return ctx.prisma.query.items(opArgs, info);
  },
  async itemsInStore(parent, args, ctx, info) {
    const opArgs = {};

    if (args.where) {
      opArgs.where = {
        discountPercent_gt: args.where.discountPercent_gt
      }
    }

    return ctx.prisma.query.items(opArgs, info);
  },
  itemsConnection: forwardTo('prisma'),
  async me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null
    }

    return ctx.prisma.query.user({
      where: {
        id: ctx.request.userId
      }
    }, info);
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) { 
      throw new Error('you must be signed in!');
    }

    return ctx.prisma.query.orders({
      where: {
        user: { 
          id: userId
        }
      }
    }, info);
  }
};

module.exports = Query;
