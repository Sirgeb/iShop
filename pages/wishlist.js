import WishlistComponent from '../components/Wishlist/Wishlist';
import SigninAuth from '../components/Signin/SigninAuth';

const Wishlist = () => {

  return (
    <SigninAuth>
      <WishlistComponent />
    </SigninAuth>
  );
}

export default Wishlist;
