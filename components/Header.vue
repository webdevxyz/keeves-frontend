<template>
    <header>
        <nav>
            <div class="flexCenter">
                <button class="menuBtn">
                    <img src="/images/menu-icon.svg" alt="">
                </button>
                <div class="logo">
                    <img src="/images/logo.svg" alt="Logo">
                </div>
            </div>
            <div class="flex w60 meadiaPosition">

                <div class="box">
                    <form action="" id="searchContainer">
                        <input type="text" placeholder="Search for products, Brands, Markets & more" value="">
                        <button type="submit">
                            <img src="/images/search-icon.svg" alt="search-icon">
                        </button>
                        <div id="suggestionList" style="display: none;"></div>
                    </form>
                </div>
            </div>
            <div class="flexCenter gap3 mobGap0p5">

                <button class="cartBtn">
                    <img src="/images/call-icon.svg" alt="">
                    <span>Contact</span>
                </button>
            </div>
        </nav>
    </header>

</template>


<script setup>
import "../css/header.css"
</script>