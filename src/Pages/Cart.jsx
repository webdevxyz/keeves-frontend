import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import PriceDetails from "../components/Cart/PriceDetails";
import cartEmptyImage from "/svg/empty-cart-img.svg";
import { trendingNearYouList, wishListData } from "../lib/data/CartData";
import CartOtherProducts from "../components/Cart/CartOtherProducts";
import ProductCardSlider from "../components/ui/ProductCardSlider";
import FilterList from "../components/ui/FilterList";


const Cart = () => {
  const [cartProductsList, setCartProductsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCartProductsList([

        {
          id: "1",
          image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826698/moma/image/mouse-img-2.jpg",
          text: "Logitech B100 Wired USB Mouse, 3 yr Warranty, 800 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Black",
          colour: "Graphite",
          otherVariant: "Pattern Name",
          otherVariantText: "Small-Medium Hands",
          price: "2,699.00"
        }, {
          id: "2",
          image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826698/moma/image/mouse-img-1.jpg",
          text: "Logitech Signature M650 Wireless Mouse - for Small to Medium Sized Hands, 2-Year Battery, Silent Clicks, BMac/…",
          colour: "Graphite",
          otherVariant: "Pattern Name",
          otherVariantText: "Small-Medium Hands",
          price: "240.00"
        }, {
          id: "3",
          image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826704/moma/image/astronaut-img.jpg",
          text: "LAMRON I am the Astronaut Wall Decoration Art Framed Poster, 12 Inch x 18 Inch, Glass with 0.5 Inch Black...",
          colour: "Graphite",
          otherVariant: "Size",
          otherVariantText: "Essential (12 X 18 Inches)",
          price: "862.00"
        },

      ]);
      setLoading(false);
    }, 500);
  }, []);

  const location = useLocation();
  const navigateHome = useNavigate();
  const goToHome = () => {
    if (location.pathname !== "/") {
      navigateHome("/");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }



  // empty page here //

  if (cartProductsList.length === 0) {
    return (
      <>
        <div className="bgLightShadeBlue ptb5 mobPtb3">
          <div className="container">
            <div className="w70 mAuto flexCenter gap2 mobColumn mobW90">
              <div className="cartEmptyImg">
                <img src={cartEmptyImage} alt="" />
              </div>
              <div className="w70 mobW100 mobTextCenter">
                <h1 className="fs36 fw500 lh55 mobLh40 mobFs30">
                  <span>OPPS!!</span>
                  <br />
                  <span>YOU’VE NOTHING IN YOUR CART</span>
                </h1>
                <button className="BrowseNowBtn" onClick={goToHome}>Browse now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt4 mb5 mobMt2 mobMb2">

          <FilterList />

          <ProductCardSlider
            heading="You may like this"
            productData={trendingNearYouList}
          />
          <ProductCardSlider
            heading="Similar Items"
            productData={trendingNearYouList}
          />
        </div>

      </>
    );
  }

  return (
    <>
      <div className="bgLightShadeBlue2 pb5 pt1 mobPb2">
        <div className="container">
          <div className="mb1 flex gap1 mobColumn">
            <div className="w70 mobW100">
              <div className="bgWhite br10 veryLightBorder w100">
                <div className="flexCenterSB p1 lightBorderBottom2">
                  <h3 className="fs20 fw400 mobFs18">
                    Shopping Cart (<span>{cartProductsList.length}</span> Items)
                  </h3>
                  <span className="fs14 fe400 opa0p7 mobNone">Price</span>
                </div>

                <div className="cartList">
                  {cartProductsList.map(function (cartItem) {
                    return <CartItem cartItem={cartItem} key={cartItem.id} />;
                  })}
                </div>
              </div>
            </div>

            <PriceDetails />
          </div>

          <CartOtherProducts
            heading={"Wishlist and Saved Items"}
            CartOtherProductsData={wishListData}
          />
          <CartOtherProducts
            heading={"Best Discounts for you today"}
            CartOtherProductsData={wishListData}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
