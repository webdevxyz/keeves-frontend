import Banner from "../components/ui/Banner";
import ProductCardSlider from "../components/ui/ProductCardSlider";

import {
  recentlyViewedProducts,
  bestMobile,
  trendingNeraProducts,
  shopByStoreList1,
  shopByStoreList2,
  topDealsList,
  healthyOilList,
  snackData,
  topElectroinDealsList,
  furnitureDataList,
  freshFriday,
} from "../lib/data/HomeData";

import dropdownIcon from "/icon/dropdown-icon.svg";
import pickupDrop from "/svg/pickup-&-drop-img.svg";
import meatFish from "/svg/meat-&-fish-img.svg";
import fruitsVegetables from "/svg/fruits-&-vegetables-img.svg";
import medicinesMasks from "/svg/medicines-&-masks-img.svg";
import plusImage from "/svg/plus-img.svg";
import familyImage from "/svg/family-img.svg";

import CommonCardSlider from "../components/Home/CommonCardSlider";
import ShopByStore from "../components/Home/ShopByStore";
import FeaturedBrands from "../components/Home/FeaturedBrands";
import PopularMarkets from "../components/Home/PopularMarkets";
import FilterList from "../components/ui/FilterList";

const Home = () => {
  // category filter data starts here //
  const categoryFilter = [
    {
      id: "1",
      text: "Pickup & Drop",
      imageSrc: pickupDrop,
      alt: "",
    },
    {
      id: "2",
      text: "Meat & Fish",
      imageSrc: meatFish,
      alt: "",
    },
    {
      id: "3",
      text: "Fruits & Vegetables",
      imageSrc: fruitsVegetables,
      alt: "",
    },
    {
      id: "4",
      text: "Medicines & Masks",
      imageSrc: medicinesMasks,
      alt: "",
    },
  ];
  // category filter data end here //

  return (
    <>
      <div className="container mt2 mb5 mobMb2">
        <FilterList />

        <Banner />

        {/* <!-- category filter starts here --> */}

        <div className="categoryFilter">
          {categoryFilter.map(function (category) {
            return (
              <div className="box" key={category.id}>
                <div>
                  <span>{category.text}</span>
                  <button>
                    <img src={dropdownIcon} alt="" />
                  </button>
                </div>
                <img
                  src={category.imageSrc}
                  alt={category.alt}
                  className="image"
                />
              </div>
            );
          })}
        </div>

        {/* <!-- category filter end here --> */}

        <ProductCardSlider
          heading="Trending Products"
          productData={trendingNeraProducts}
        />

        <CommonCardSlider heading="All" cardData={bestMobile} />

        {/* shop by store starts here */}
        {/* <div className="flexCenterSB mt4 mb1 mobMt2">
          <h3 className="fs20 mobFs16 fw500">Shop By Store</h3>
          <button className="seeAllBtn">
            See all <img src={dropdownIcon} alt="" />
          </button>
        </div> */}

        {/* <ShopByStore shopData={shopByStoreList1} />

        <ShopByStore otherClass={"mt2 mobMt1"} shopData={shopByStoreList2} /> */}

        {/* shop by store end here */}

        {/* <CommonCardSlider heading="Top Deals" cardData={topDealsList} />

        <ProductCardSlider heading="Healthy Oil" productData={healthyOilList} /> */}

        {/* <FeaturedBrands />

        <PopularMarkets />

        <Banner /> */}

        {/* <ProductCardSlider
          heading="Snacks Made Delicious"
          productData={snackData}
        />

        <CommonCardSlider
          heading="Top Deals on Electronics"
          cardData={topElectroinDealsList}
        />

        <CommonCardSlider
          heading="Offers on Furniture"
          cardData={furnitureDataList}
        /> */}
      </div>

      {/* <!-- Become a plus Member starts here --> */}
      <div className="plusMember">
        <div className="heading">
          <h1>
            Become a <img src={plusImage} alt="" /> Member
          </h1>
          <p>And enjoy extra savings on every order</p>
          <div className="mobText">Save 5% on all orders, 50% on 1st order every & get FREE delivery
            with PLUS membership.</div>
          <button>
            Explore Now <img src={dropdownIcon} alt="" />
          </button>
        </div>
        <div className="image">
          <img src={familyImage} alt="" />
        </div>
        <div className="text">
          Save 5% on all orders, 50% on 1st order every & get FREE delivery
          with PLUS membership.
        </div>
      </div>
      {/* <!-- Become a plus Member end here --> */}
      {/* <div className="container mb5 mobMb2">
        <ProductCardSlider heading="Fresh Friday" productData={freshFriday} />
        <Banner />
        <ProductCardSlider
          heading="Recently Viewed"
          productData={recentlyViewedProducts}
        />
      </div> */}
    </>
  );
};

export default Home;
