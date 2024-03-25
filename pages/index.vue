<template>

    <Header />


    <div class="filterList" style="cursor: grab;">
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-1.svg"
                    alt="Top Offers">
            </div>
            <div class="text">Top Offers</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-2.svg"
                    alt="Mobile & Tablets">
            </div>
            <div class="text">Mobile & Tablets</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-3.svg"
                    alt="Electronics">
            </div>
            <div class="text">Electronics</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-1.svg"
                    alt="TV & Appliances">
            </div>
            <div class="text">TV & Appliances</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-2.svg"
                    alt="Fashion">
            </div>
            <div class="text">Fashion</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-3.svg"
                    alt="Beauty">
            </div>
            <div class="text">Beauty</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-1.svg"
                    alt="Home & Kitchen">
            </div>
            <div class="text">Home & Kitchen</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-2.svg"
                    alt="Furniture">
            </div>
            <div class="text">Furniture</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-3.svg"
                    alt="Rice">
            </div>
            <div class="text">Rice</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-1.svg"
                    alt="Aata">
            </div>
            <div class="text">Aata</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-2.svg"
                    alt="Oil">
            </div>
            <div class="text">Oil</div>
        </div>
        <div class="item">
            <div class="image">
                <img src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703829021/moma/image/filter-img-3.svg"
                    alt="Aata">
            </div>
            <div class="text">Aata</div>
        </div>
    </div>


    <!-- slider  -->
    <div class="bannerSliderContainer">
        <div class="bannerSlider" style="transform: translateX(-977px);">
            <div class="slide"><img
                    src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-2.jpg"
                    alt="Banner"></div>
            <div class="slide"><img
                    src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-1.jpg"
                    alt="Banner"></div>
            <div class="slide"><img
                    src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-2.jpg"
                    alt="Banner"></div>
            <div class="slide"><img
                    src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-1.jpg"
                    alt="Banner"></div>
        </div>
        <button class="prev">❮</button>
        <button class="next">❯</button>
        <div class="indicators">
            <div class="indicator"></div>
            <div class="indicator active"></div>
            <div class="indicator"></div>
            <div class="indicator"></div>
        </div>
    </div>

    <!-- cat cards  -->
    <div class="categoryFilter">
        <div class="box">
            <div>
                <span>Pickup & Drop</span>
                <button><img src="/images/dropdown-icon.svg" alt=""></button>
            </div>
            <img src="/images/pickup-&-drop-img.svg" alt="" class="image">
        </div>
        <div class="box">
            <div>
                <span>Meat & Fish</span>
                <button><img src="/images/dropdown-icon.svg" alt=""></button>
            </div>
            <img src="/images/meat-&-fish-img.svg" alt="" class="image">
        </div>
        <div class="box">
            <div>
                <span>Fruits & Vegetables</span>
                <button><img src="/images/dropdown-icon.svg" alt=""></button>
            </div>
            <img src="/images/fruits-&-vegetables-img.svg" alt="" class="image">
        </div>
        <div class="box">
            <div>
                <span>Medicines & Masks</span>
                <button><img src="/images/dropdown-icon.svg" alt=""></button>
            </div>
            <img src="/images/medicines-&-masks-img.svg" alt="" class="image">
        </div>
    </div>

    <!-- product -->
    <div class="flexCenterSB mt4 mb1 mobMt2 mobMb0">
        <h3 class="fs20 fw500 mobFs16">Trending Near You</h3>
        <button class="seeAllBtn">See all <img src="/images/dropdown-icon.svg" alt=""></button>
    </div>
    <div class="scrollContainer">
        <div class="slider">
            <div class="productCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826699/moma/image/product-img-1.jpg"
                        alt="Image"></div>
                <div class="text">
                    <p class="para">Shelcal 500mg Bottle Of 40 Tablets</p>
                    <div>
                        <select>
                            <option value="2 pack">2 pack</option>
                            <option value="5 pack">5 pack</option>
                            <option value="10 pack">10 pack</option>
                        </select>
                    </div>
                    <div class="flexCenterSB">
                        <div>
                            <h3><span>₹</span>1000</h3>
                            <p class="fs16 opa0p7 mobFs14">MRP <span class="lineThrough">₹1200</span> (10%)</p>
                        </div>
                        <button>
                            <span class="mobNone">Add</span>
                            <span class="none mobBlock">+</span>
                        </button>
                    </div>
                </div>
                <div class="offPrice"><span>13% OFF</span></div>
            </div>
            <!-- Repeat productCard divs for each product -->
        </div>
        <button class="prevBtn"><img src="/images/dropdown-icon.svg" alt=""></button>
        <button class="nextBtn"><img src="/images/dropdown-icon.svg" alt=""></button>
    </div>

    <!-- upcomming products  -->
    <div class="flexCenterSB mt4 mb1 mobMt2 mobMb0">
        <h3 class="fs20 mobFs16 fw500">Best Mobile</h3>
        <button class="seeAllBtn">See all <img src="/images/dropdown-icon.svg" alt=""></button>
    </div>
    <div class="scrollContainer">
        <div class="slider">
            <div class="commonCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826697/moma/image/mob-img-1.svg"
                        alt="Mobile Image"></div>
                <div class="text">
                    <p class="para">Samsung s22 5G</p>
                    <span>Incl of offers</span>
                </div>
            </div>
            <div class="commonCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826697/moma/image/mob-img-2.svg"
                        alt="Mobile Image"></div>
                <div class="text">
                    <p class="para">Google Pixel 8</p>
                    <span>Incl of offers</span>
                </div>
            </div>
            <div class="commonCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826697/moma/image/mob-img-3.svg"
                        alt="Mobile Image"></div>
                <div class="text">
                    <p class="para">Redmi 12</p>
                    <span>Incl of offers</span>
                </div>
            </div>
            <div class="commonCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826697/moma/image/mob-img-4.svg"
                        alt="Mobile Image"></div>
                <div class="text">
                    <p class="para">Motorola Edge 40</p>
                    <span>Incl of offers</span>
                </div>
            </div>
            <!-- Repeat commonCard divs for each product -->
        </div>
        <button class="prevBtn"><img src="/images/dropdown-icon.svg" alt=""></button>
        <button class="nextBtn"><img src="/images/dropdown-icon.svg" alt=""></button>
    </div>



    <!-- banners  -->
    <div class="flexCenterSB mt4 mb1 mobMt2 mobMb0">
        <h3 class="fs20 mobFs16 fw500">Featured Brands</h3>
        <button class="seeAllBtn">See all <img src="/images/dropdown-icon.svg" alt=""></button>
    </div>
    <div class="scrollContainer">
        <div class="slider">
            <div class="featuredCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-1.jpg"
                        alt="Image"></div>
                <div class="flexCenterSB p1 mobP0p7">
                    <span class="fs16 fw400 mobFs14">Up to 70% off</span>
                    <img src="/images/dropdown-icon.svg" alt="" class="arrowIcon">
                </div>
            </div>
            <div class="featuredCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-2.jpg"
                        alt="Image"></div>
                <div class="flexCenterSB p1 mobP0p7">
                    <span class="fs16 fw400 mobFs14">Up to 50% off</span>
                    <img src="/images/dropdown-icon.svg" alt="" class="arrowIcon">
                </div>
            </div>
            <div class="featuredCard">
                <div class="image"><img
                        src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-3.jpg"
                        alt="Image"></div>
                <div class="flexCenterSB p1 mobP0p7">
                    <span class="fs16 fw400 mobFs14">Just ₹999</span>
                    <img src="/images/dropdown-icon.svg" alt="" class="arrowIcon">
                </div>
            </div>
            <!-- Repeat featuredCard divs for each brand -->
        </div>
        <button class="prevBtn"><img src="/images/dropdown-icon.svg" alt=""></button>
        <button class="nextBtn"><img src="/images/dropdown-icon.svg" alt=""></button>
    </div>


    <!-- cta section  -->
    <div class="plusMember">
        <div class="heading">
            <h1>Become a <img src="/images/plus-img.svg" alt=""> Member</h1>
            <p>And enjoy extra savings on every order</p>
            <div class="mobText">Save 5% on all orders, 50% on 1st order every &amp; get FREE delivery with PLUS
                membership.</div>
            <button>Explore Now <img src="/images/dropdown-icon.svg" alt=""></button>
        </div>
        <div class="image"><img src="/images/family-img.svg" alt=""></div>
        <div class="text">Save 5% on all orders, 50% on 1st order every &amp; get FREE delivery with PLUS membership.
        </div>
    </div>



    <Footer />

</template>

<style>
.filterList {

    padding: 2rem;
}
</style>