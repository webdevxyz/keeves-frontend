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
            <h3 className="fs22 fw500 mt4 mb1">Product details</h3>
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
