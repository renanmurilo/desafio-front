<template>
    <div class="products">
        <Banner />

        <div class="shell">
            <div class="content__products">
                <div class="search__products">
                    <p>Encontre seu produto</p>

                    <form
                        action=""
                        class="form__search"
                        @submit.stop.prevent="filteredProducts()"
                    >
                        <div class="form__row">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                class="field"
                                v-model="searchProduto"
                            />

                            <button type="submit" class="btn__search">
                                <img src="@/assets/lupa.svg" alt="" />
                            </button>
                        </div>
                    </form>
                </div>

                <div class="inner__products" v-if="filteredProducts().length">
                    <ProductItem :products="filteredProducts()" />
                </div>

                <div class="products__empty" v-else>
                    <h2>não existem mais produtos</h2>
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
    data() {
        return {
            searchProduto: '',
            types: [],
        };
    },
    created() {
        this.$store.dispatch('FETCH_PRODUCTS');
    },
    mounted() {
        this.filteredProducts();
    },
    methods: {
        // função para buscar os produtos na api
        filteredProducts() {
            let products = this.products.filter((item) => {
                let match = item.name
                    .toLowerCase()
                    .match(this.searchProduto.toLowerCase());

                if (this.types.length && item) {
                    return match && this.types.includes(item.toLowerCase());
                }

                return match;
            });

            return products;
        },
        noResults() {
            return this.filteredProducts.length === 0;
        },
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
            position: relative;
            flex-wrap: wrap;

            @media ($tabletMax) {
                justify-content: center;
                width: 100%;
                padding: 0 1.25rem;
            }

            @media ($mobile) {
                width: 100%;
                padding: 0 1.25rem;
            }

            p {
                @include font-source(1.25rem, 700, 0);
                color: $text;
                margin-right: 3.0625rem;

                @media ($tabletMax) {
                    margin-right: 0;
                }

                @media ($mobile) {
                    margin-right: 0;
                }
            }

            .form__search {
                width: 48.6875rem;

                @media (tabletmax) {
                    width: 100%;
                }

                @media ($mobile) {
                    width: 100%;
                }

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

        .products__empty {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;

            h2 {
                @include font-source(3.125rem, 600, 0);
                color: $primary;
            }
        }
    }
}
</style>
