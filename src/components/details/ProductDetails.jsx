import React from "react";

const ProductDetails = () => {
  const specificationList = [
    {
      id: "1",
      heading: "Manufacturer",
      text: "The Face Shop",
    },
    {
      id: "2",
      heading: "Country of Origin",
      text: "Republic of Korea",
    },
    {
      id: "3",
      heading: "Quantity",
      text: "50",
    },
    {
      id: "4",
      heading: "Ideal for",
      text: "All",
    },
    {
      id: "5",
      heading: "Facewash type",
      text: "Foam",
    },
    {
      id: "6",
      heading: "Skin Type",
      text: "All skin types",
    },
    {
      id: "7",
      heading: "Container Type",
      text: "Tube",
    },
    {
      id: "8",
      heading: "Pattern",
      text: "Solid",
    },
    {
      id: "9",
      heading: "Benefits",
      text: "Controls excess oil, skin brightening",
    },
  ];

  return (
    <>
      <img
        src="/public/images/oneplus phone.jpg"
        className="productThumb"
        alt=""
        srcset=""
      />

      <h3 className="fs22 fw500 mt2 mb1">Product details</h3>
      <p className="fs14 lh18 opa0p7">
        The first Galaxy S with embedded S Pen. Write comfortably like pen on
        paper, turn quick notes into legible text and use Air Actions to control
        your phone remotely. Improved latency in Samsung Notes makes every pen
        stroke feel as natural as ink on paper - and you can convert those
        hastily written ideas into legible text.5G Ready powered by Galaxys
        first 4nm processor. Our fastest, most powerful chip ever. That means, a
        faster CPU and GPU compared to Galaxy S21 Ultra. Its an epic leap for
        smartphone technology. The Dynamic AMOLED 2x display improves outdoor
        visibility with up to 1750 Nits in peak brightness. And the 120Hz
        adaptive refresh rate keeps the scroll smooth, adjusting to what's on
        screen for an optimized view. Our most advanced Pro-grade Camera yet,
        packing the power of a professional's kit in one handheld device. Also
        lets you make your nights epic with Nightography: The sensor pulls in
        more light, the Super Clear Lens tones down lens flare, and fast-acting
        AI delivers near-instant intelligent processing.
      </p>

      <div className="mt2 opa0p7 fs14">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
        repellendus magnam natus consequuntur mollitia doloremque quasi enim
        corrupti, quam incidunt sint error facilis eligendi ad hic nisi dolores
        a optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Provident sit, accusantium exercitationem dolorum vero tempora in
        nesciunt id dicta possimus aut et tenetur libero pariatur eaque rerum,
        dignissimos eos incidunt nisi repellat necessitatibus aliquam sunt ad
        asperiores. Esse et expedita, nesciunt accusamus tempore fugiat eaque
        est quaerat ea. Sed quae non natus? Cumque optio vel, minus voluptates
        omnis molestiae iure? Harum, tempora laboriosam beatae reiciendis nisi
        similique velit facilis! Inventore laborum architecto nemo voluptatem
        odit nihil vitae illo earum cumque debitis nulla adipisci voluptas
        voluptates cum, doloremque, quam perferendis animi! Labore nobis illo,
        soluta quidem perspiciatis incidunt nostrum quod corrupti tempore nam
        ipsam, iure blanditiis animi accusantium, a magni dolor vero magnam
        tenetur! Consequuntur minima libero quisquam, quibusdam maxime
        reprehenderit exercitationem esse explicabo dolore a inventore qui? Unde
        provident alias laborum eius nesciunt cumque rem deleniti maiores veniam
        corrupti et dignissimos labore quibusdam, delectus quaerat saepe nobis!
        Id, accusamus placeat earum magni magnam consectetur iure pariatur non
        nisi alias commodi quia asperiores aperiam quaerat eveniet incidunt
        dicta. Itaque vel iste dicta illo dignissimos laboriosam hic nisi
        tenetur, explicabo iure optio tempore labore sapiente quod! Iure
        temporibus voluptates nihil ut nemo ipsa facilis nobis accusamus,
        nostrum voluptatibus totam beatae? Optio distinctio, doloribus,
        excepturi saepe fugit rerum voluptates architecto dicta mollitia modi
        perferendis commodi atque officia aperiam? Recusandae placeat aperiam,
        in magni quo doloribus necessitatibus est vitae quam voluptatibus
        perspiciatis ex non! Vero animi neque ad ducimus consequuntur ipsa
        voluptatibus minus veniam aut, optio, rem modi eveniet eaque maiores
        deleniti, facere pariatur provident quidem eos? Consequatur deleniti ab
        assumenda facilis impedit amet alias libero deserunt, laborum cumque
        magni repudiandae. Ipsum non, deserunt iure minima saepe nobis, alias
        officia quaerat laudantium cum nesciunt, itaque ducimus ab? Odio,
        officia deleniti sapiente laudantium consequuntur itaque. Enim quis
        dolorem dolore delectus voluptas, qui esse ipsam.
      </div>

      <div className="specifications">
        <h3>Specifications</h3>
        <div className="list">
          {specificationList.map(function (listItem) {
            return (
              <div className="item" key={listItem.id}>
                <span>{listItem.heading}</span>
                <span>{listItem.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
