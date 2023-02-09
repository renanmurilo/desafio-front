<template>
    <div class="products">
        <Banner />

        <div class="shell">
            <div class="content__products">
                <div class="search__products">
                    <p>Encontre seu produto</p>

                    <form action="" class="form__search">
                        <div class="form__row">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                class="field"
                            />

                            <button type="submit" class="btn__search">
                                <img src="@/assets/lupa.svg" alt="" />
                            </button>
                        </div>
                    </form>
                </div>

                <div class="inner__products">
                    <ProductItem :products="products" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Banner from './Banner.vue';
import ProductItem from './ProductItem.vue';

export default {
    name: 'TheProducts',
    components: { Banner, ProductItem },
    computed: {
        ...mapGetters({
            products: 'GET_PRODUCTS',
        }),
    },
    created() {
        this.$store.dispatch('FETCH_PRODUCTS');
    },
};
</script>

<style lang="scss">
.products {
    width: 100%;

    .content__products {
        width: 100%;
        margin: 6.25rem auto 5.3125rem;

        .search__products {
            display: flex;
            height: 7.375rem;
            width: 100%;
            box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.1);
            padding: 0 3.375rem 0 2.8125rem;
            align-items: center;
            margin-bottom: 5.0625rem;

            p {
                @include font-source(1.25rem, 700, 0);
                color: $text;
                margin-right: 3.0625rem;
            }

            .form__search {
                width: 48.6875rem;
                .form__row {
                    width: 100%;
                    display: flex;
                    position: relative;

                    .field {
                        height: 2.875rem;
                        width: 100%;
                        padding-left: 1.125rem;
                        border: 0.0625rem solid $text;
                        border-radius: 0.1875rem;
                        @include font-source(1rem, 400, 0);
                        color: $text-light;
                    }

                    .btn__search {
                        position: absolute;
                        right: 0;
                        border: none;
                        width: 3.25rem;
                        height: 2.875rem;
                        border-top-right-radius: 0.1875rem;
                        border-bottom-right-radius: 0.1875rem;
                        background-color: $primary;
                    }
                }
            }
        }

        .inner__products {
            width: 100%;
        }
    }
}
</style>
