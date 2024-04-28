// import DetailMainImage from "../components/DetailsMainImage";
import ProductDetails from "../components/details/ProductDetails";
import ProductCardSlider from "../components/ui/ProductCardSlider";
import { smilerItemList } from "../lib/data/DetailsPageData";
import ProductNamePrice from "../components/details/ProductNamePrice";
import RatingsReviews from "../components/details/RatingsReviews";
import SortByReviews from "../components/details/SortByReviews";
import FromTheManufacturer from "../components/details/FromTheManufacturer";
import CustomerReviews from "../components/details/CustomerReviews";

const Details = () => {
  const aboutProduct = [
    {
      id: "1",
      heading: "Country of Origin",
      text: "India",
    },
    {
      id: "2",
      heading: "Shelf Life",
      text: "180 days",
    },
    {
      id: "3",
      heading: "Manufacturer name",
      text: "Indian Shell Pvt Ltd.",
    },
  ];

  return (
    <>
      <div className="container mt2 mb3 flex gap3">
        <div className="w100">
          {/* <DetailMainImage /> */}
          <ProductDetails />
          <FromTheManufacturer />
        </div>

        <div className="w100">
          <ProductNamePrice />

          <div>
            <h3 className="fs16 fw400 opa0p9 mb1">About product</h3>
            {aboutProduct.map(function (aboutData) {
              return (
                <div className="flexCenter  gap0p5 mb0p5" key={aboutData.id}>
                  <span className="fs16 fw500">{aboutData.heading}:</span>
                  <span className="fs16 opa0p8">{aboutData.text}</span>
                </div>
              );
            })}
          </div>

          <div className="divHR mtb2"></div>

          <div>
            <h3 className="fs14 fw500 mb1">Delivery to</h3>
            <input
              type="text"
              placeholder="Enter Pin code"
              className="enterPinCodeInput"
              autoComplete="off"
            />
            <p className="fs12 fw400 opa0p6 mt0p5 mb1">
              Enter Pin code to check estimated delivery date{" "}
            </p>
            <p className="fs16 mb0p5">
              <span className="opa0p7">Delivery by</span> <b>Sun, 10th Jan</b>
            </p>
            <p className="fs16 mb0p5 opa0p7">
              10 Days return & Exchange available
            </p>
            <p className="fs16 mb0p5 opa0p7">Cash on Delivery Available</p>
          </div>

          <div className="divHR mtb2"></div>

          <RatingsReviews />

          <SortByReviews />

          <CustomerReviews />
        </div>
      </div>

      <div className="container mb5">
        <ProductCardSlider
          heading="You may like this"
          productData={smilerItemList}
        />
        <ProductCardSlider
          heading="Similar Items"
          productData={smilerItemList}
        />
      </div>
    </>
  );
};

export default Details;
