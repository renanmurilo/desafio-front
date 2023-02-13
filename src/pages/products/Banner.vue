<template>
    <div class="banners">
        <VueSlickCarousel class="slider" v-bind="settings">
            <div class="image">
                <img src="@/assets/banner.png" alt="" />
            </div>
            <div class="image">
                <img src="@/assets/banner.png" alt="" />
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
export default {
    name: 'TheBanners',
    data() {
        return {
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
            },
        };
    },
};
</script>

<style lang="scss">
.banners {
    width: 100%;

    .slider {
        width: 100%;

        .image {
            width: 100%;
            height: 100%;

            img {
                height: 27.75rem;
                width: 100%;
                object-fit: cover;

                @media ($tabletMax) {
                    height: 100%;
                }

                @media ($mobile) {
                    height: 100%;
                }
            }
        }
        .slick-dots {
            display: flex !important;
            justify-content: center;
            width: 100%;
            margin-top: 1.25rem;

            li {
                width: 1.625rem;
                height: 1.625rem;
                border: none;
                border: 2px solid #a6a6a6;
                border-radius: 100%;
                background: transparent;
                display: flex;
                justify-content: center;
                margin: 0 0.75rem;

                @media ($tabletMax) {
                    width: 1rem;
                    height: 1rem;
                }

                @media ($mobile) {
                    width: 1rem;
                    height: 1rem;
                }

                & > button {
                    width: 1.625rem;
                    height: 1.625rem;
                    border: none;
                    background: transparent;
                    font-size: 0;

                    @media ($tabletMax) {
                        width: 1rem;
                        height: 1rem;
                    }

                    @media ($mobile) {
                        width: 1rem;
                        height: 1rem;
                    }
                }

                &.slick-active {
                    border: 0.125rem solid $primary;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    & > button {
                        width: 0.875rem;
                        height: 0.875rem;
                        background-color: $primary;
                        border-radius: 100%;

                        @media ($tabletMax) {
                            width: 0.5rem;
                            height: 0.5rem;
                        }

                        @media ($mobile) {
                            width: 0.5rem;
                            height: 0.5rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
