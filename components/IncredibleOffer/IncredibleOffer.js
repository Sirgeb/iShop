import IncredibleOfferStyles from './IncredibleOfferStyles';
import IncredibleOfferButtonLink from './IncredibleOfferButtonLink';

const IncredibleOffer = () => (
  <>
  <IncredibleOfferStyles>
      <div className="card">
          <div className="image-box">
            <img src="./static/images/items/8.png" alt="" />
          </div>
          <div className="content">
            <div className="discount-percent">25% discount</div>
            <div className="item-name">Women Top</div>
            <div className="amount"><s>$4500</s></div>
            <div className="discount-amount">$3000</div>
          </div>
      </div>

      <div className="card">
          <div className="image-box">
            <img src="./static/images/items/5.jpg" alt="" />
          </div>
          <div className="content">
            <div className="discount-percent">25% discount</div>
            <div className="item-name">Women Top</div>
            <div className="amount"><s>$4500</s></div>
            <div className="discount-amount">$3000</div>
          </div>
      </div>

      <div className="card">
          <div className="image-box">
            <img src="./static/images/items/1.jpg" alt="" />
          </div>
          <div className="content">
            <div className="discount-percent">25% discount</div>
            <div className="item-name">Women Top</div>
            <div className="amount"><s>$4500</s></div>
            <div className="discount-amount">$3000</div>
          </div>
      </div>

      <div className="card">
        <div className="image-box">
          <img src="./static/images/items/2.jpg" alt="" />
        </div>
        <div className="content">
          <div className="discount-percent">25% discount</div>
          <div className="item-name">Women Top</div>
          <div className="amount"><s>$4500</s></div>
          <div className="discount-amount">$3000</div>
        </div>
      </div>
  </IncredibleOfferStyles>
  <IncredibleOfferButtonLink />
  </>
);

export default IncredibleOffer;
