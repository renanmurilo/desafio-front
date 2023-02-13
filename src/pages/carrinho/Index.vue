<template>
    <div class="carrinho">
        <div class="shell">
            <div class="content__carrinho" v-if="products.length">
                <div class="row__wrapper">
                    <h2>PRODUTOS</h2>
                    <h2>QUANTIDADE</h2>
                    <h2>VALOR UNITÁRIO</h2>
                    <h2>TOTAL</h2>
                </div>

                <div
                    class="grid__wrapper"
                    v-for="(product, index) in products"
                    :key="index"
                >
                    <div class="description">
                        <a
                            @click.stop.prevent="deleteProduct(index)"
                            class="trash"
                        >
                            <img src="@/assets/trash.svg" alt="" />
                        </a>

                        <div class="text">
                            <h5>{{ product.category }}</h5>
                            <h2>{{ product.name }}</h2>
                        </div>
                    </div>

                    <div class="quantity">
                        <form class="item__quantity">
                            <a
                                @click.stop.prevent="
                                    quantityUpdated(
                                        product.id,
                                        product.quantity,
                                        'minus'
                                    )
                                "
                                class="minus"
                            >
                                -
                            </a>

                            <input
                                type="tel"
                                v-model="product.quantity"
                                class="qtd"
                                disabled
                            />

                            <a
                                @click.stop.prevent="
                                    quantityUpdated(
                                        product.id,
                                        product.quantity,
                                        'plus'
                                    )
                                "
                                class="plus"
                            >
                                +
                            </a>
                        </form>
                    </div>

                    <div class="price">
                        <h4 class="bestPrice">
                            <span>{{
                                formatMoney(
                                    product.price * product.quantity,
                                    2,
                                    ',',
                                    '.',
                                    'R$'
                                )
                            }}</span>
                            à vista
                        </h4>
                        <h4 class="descount">
                            ou 10x
                            {{
                                formatMoney(
                                    (product.price * product.quantity) / 10,
                                    2,
                                    ',',
                                    '.',
                                    ' '
                                )
                            }}
                        </h4>
                    </div>

                    <div class="totals">
                        <h4 class="bestPrice">
                            <span>{{
                                formatMoney(
                                    product.price * product.quantity,
                                    2,
                                    ',',
                                    '.',
                                    'R$'
                                )
                            }}</span>
                            à vista
                        </h4>

                        <h4 class="descount">
                            ou 10x
                            {{
                                formatMoney(
                                    (product.price * product.quantity) / 10,
                                    2,
                                    ',',
                                    '.',
                                    ' '
                                )
                            }}
                        </h4>
                    </div>
                </div>

                <div class="sumary__total">
                    <div class="total__confirmation">
                        <div class="total__vista">
                            <h2>Total à vista</h2>

                            <h4>
                                {{
                                    formatMoney(
                                        products.length ? totalPrice : '0',
                                        2,
                                        ',',
                                        '.',
                                        'R$'
                                    )
                                }}
                            </h4>
                        </div>

                        <div class="total__parcelado">
                            <h2>TOTAL PARCELADO</h2>

                            <h4>
                                em até
                                <span
                                    >10x
                                    {{
                                        formatMoney(
                                            products.length
                                                ? totalPrice / 10
                                                : '0',
                                            2,
                                            ',',
                                            '.',
                                            ' '
                                        )
                                    }}</span
                                >
                                (Total
                                {{
                                    formatMoney(
                                        products.length ? totalPrice : '0',
                                        2,
                                        ',',
                                        '.',
                                        'R$'
                                    )
                                }})
                            </h4>
                        </div>
                    </div>
                </div>

                <div class="finish__buy">
                    <a @click.stop.prevent="clearCheckout" class="close__all">
                        <img src="@/assets/trash.svg" alt="" />
                        <p>Limpar carrinho</p>
                    </a>

                    <div class="row__buttons">
                        <router-link to="/products" class="btn btn__gray">
                            Continuar comprando
                        </router-link>

                        <a
                            @click.stop.prevent="sendCheckout"
                            class="btn btn__primary"
                        >
                            Concluir compra
                        </a>
                    </div>
                </div>
            </div>

            <div class="products__empty" v-else>
                <h2>Carrinho vazio</h2>
                <router-link to="/products" class="btn btn__primary">
                    Escolher produtos
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import formatMoney from '@/utils/formatMoney';

export default {
    mixins: [formatMoney],
    name: 'TheCarrinho',
    data() {
        return {
            products: [],
            totalPrice: '',
        };
    },
    created() {
        // buscar objeto do localStorage
        let products = localStorage.products;

        if (products) {
            this.products = JSON.parse(products);
            this.getTotal(this.products);
            this.$store.commit('SET_PRODUCTS_CART', this.products);
        }
    },
    methods: {
        deleteProduct(i) {
            this.products.splice(i, 1);

            localStorage.products = JSON.stringify(this.products);
            window.location.reload();
        },
        quantityUpdated(id, quantity, tapy) {
            quantity = tapy === 'plus' ? quantity + 1 : quantity - 1;

            if (quantity < 1) {
                return false;
            }

            let products = this.products.filter((item) => {
                if (item.id === id) {
                    return (item.quantity = quantity);
                }
            });

            this.products.filter((product) => {
                if (product.id === id) {
                    return {
                        category: product.category,
                        description: product.description,
                        id: product.id,
                        imageUrl: product.imageUrl,
                        name: product.name,
                        price: product.price,
                        quantity: products[0].quantity,
                    };
                }
            });

            this.getTotal(this.products);
            localStorage.products = JSON.stringify(this.products);
        },
        sendCheckout() {
            this.$router.push('/checkout');
        },
        getTotal(products) {
            this.totalPrice = products.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },
        clearCheckout() {
            localStorage.clear();
            window.location.reload();
        },
    },
};
</script>

<style lang="scss">
.carrinho {
    padding: 5.625rem 0 10rem;

    .content__carrinho {
        width: 100%;

        .row__wrapper {
            display: flex;
            width: 100%;
            padding-bottom: 2.0625rem;
            border-bottom: 0.0625rem solid $border;
            flex-wrap: wrap;

            @media ($tabletMax) {
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem 1.5rem;
            }

            @media ($mobile) {
                justify-content: space-between;
                align-items: center;
                padding-bottom: 1rem;
            }

            h2 {
                @include font-source(1.125rem, 700, 0);
                color: $text-dark;
                text-transform: uppercase;
                margin-right: 12.25rem;

                @media ($tabletMax) {
                    font-size: 0.875rem;
                    margin-right: 0;
                }

                @media ($mobile) {
                    font-size: 0.875rem;
                    margin-right: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }

        .grid__wrapper {
            display: flex;
            width: 100%;
            align-items: center;
            margin-top: 2.5rem;
            padding-bottom: 2.5rem;
            border-bottom: 0.0625rem solid $border;

            @media ($tabletMax) {
                flex-wrap: wrap;
                position: relative;
                align-items: flex-start;
                justify-content: space-between;
            }

            @media ($mobile) {
                flex-wrap: wrap;
                position: relative;
                align-items: flex-start;
                justify-content: space-between;
            }

            .description {
                position: relative;
                width: 12.1625rem;
                display: flex;
                align-items: center;
                margin-right: 5.8125rem;

                @media ($tabletMax) {
                    margin-right: 0;
                    position: initial;
                    width: 25%;
                    margin-left: 1rem;
                }

                @media ($mobile) {
                    margin-right: 0;
                    position: initial;
                    width: 24%;
                }

                .trash {
                    width: 10%;
                    position: relative;
                    top: 0.625rem;

                    img {
                        width: 1.875rem;
                        @media ($tabletMax) {
                            width: 1.3rem;
                        }

                        @media ($mobile) {
                            width: 1.3rem;
                        }
                    }

                    @media ($tabletMax) {
                        position: absolute;
                        top: 5rem;
                    }

                    @media ($mobile) {
                        position: absolute;
                        top: 5rem;
                        right: 0;
                    }
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    margin-left: 1.25rem;
                    width: 90%;

                    @media ($tabletMax) {
                        width: 100%;
                        margin-left: 0;
                    }

                    @media ($mobile) {
                        width: 80%;
                        margin-left: 0;
                    }

                    h5 {
                        @include font-source(0.875rem, 700, 0);
                        color: $primary;
                        margin-bottom: 0.75rem;

                        @media ($mobile) {
                            font-size: 0.75rem;
                        }
                    }

                    h2 {
                        @include font-source(1.125rem, 700, 0);
                        color: $text-dark;
                        line-height: 1.4625rem;

                        @media ($mobile) {
                            font-size: 1rem;
                            line-height: 1rem;
                        }
                    }
                }
            }

            .quantity {
                width: 6.0625rem;
                margin-right: 12.8125rem;

                @media ($tabletMax) {
                    width: 22%;
                    margin: 0 0 0 auto;
                }

                @media ($mobile) {
                    width: 25%;
                    margin: 0 0 0 auto;
                }

                .item__quantity {
                    height: 2.125rem;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    border-radius: 3px;
                    border: 1px solid #999999;

                    @media ($tabletMax) {
                        width: 50%;
                        align-items: flex-start;
                    }

                    @media ($mobile) {
                        width: 65%;
                        align-items: flex-start;
                    }

                    .minus,
                    .plus {
                        width: 1.4375rem;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        @include font-source(1.2rem, 700, 0);
                        color: $text-dark;

                        @media ($mobile) {
                            width: 1rem;
                        }
                    }

                    .qtd {
                        width: 3.125rem;
                        border: none;
                        background-color: transparent;
                        border: 1px solid $border;
                        height: 100%;
                        border-top: 0;
                        border-bottom: 0;
                        text-align: center;

                        @media ($mobile) {
                            width: 2rem;
                        }
                    }
                }
            }

            .price,
            .totals {
                margin-right: 10.625rem;
                width: 10.0625rem;

                @media ($tabletMax) {
                    width: 19%;
                    margin: 0 auto auto;
                }

                @media ($mobile) {
                    width: 22%;
                    margin: 0 auto auto;
                }

                .bestPrice {
                    @include font-source(1.125rem, 400, 0);
                    color: $text-dark;
                    line-height: 1.4625rem;

                    span {
                        font-weight: 700;
                    }

                    @media ($tabletMax) {
                        text-align: center;
                        font-size: 0.95rem;
                    }

                    @media ($mobile) {
                        text-align: center;
                        font-size: 0.75rem;
                    }
                }

                .descount {
                    @include font-source(1.125rem, 400, 0);
                    color: $text-dark;
                    line-height: 1.4625rem;

                    @media ($tabletMax) {
                        font-size: 0.825rem;
                        text-align: center;
                    }

                    @media ($mobile) {
                        text-align: center;
                        font-size: 0.625rem;
                        line-height: 0.75rem;
                    }
                }
            }

            .totals {
                margin-right: 0;

                @media ($tabletMax) {
                    margin: 0;
                }
            }
        }

        .sumary__total {
            width: 100%;
            margin-top: 2.8125rem;
            padding-bottom: 2.5rem;
            border-bottom: 0.0625rem solid $border;

            .total__confirmation {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                @media ($mobile) {
                    align-items: flex-start;
                    flex-wrap: wrap;
                    width: 100%;
                }

                .total__vista {
                    display: flex;
                    align-items: center;
                    margin-bottom: 3.125rem;
                    margin-right: 5rem;

                    @media ($mobile) {
                        width: 100%;
                        justify-content: space-between;
                        margin: auto 0 2rem;
                    }

                    h2 {
                        @include font-source(1.125rem, 700, 0);
                        color: $text-dark;
                        line-height: 1.4625rem;
                        text-transform: uppercase;
                    }

                    h4 {
                        margin-left: 3.8125rem;
                        @include font-source(1.625rem, 700, 0);
                        color: $primary;
                    }
                }

                .total__parcelado {
                    display: flex;
                    margin-right: 1rem;

                    @media ($mobile) {
                        width: 100%;
                        justify-content: space-between;
                        margin: auto;
                    }

                    h2 {
                        @include font-source(1.125rem, 700, 0);
                        color: $text-dark;
                        line-height: 1.4625rem;
                        text-transform: uppercase;
                    }

                    h4 {
                        margin-left: 3.8125rem;
                        @include font-source(1.125rem, 400, 0);
                        color: $text-dark;
                        max-width: 10.25rem;
                        line-height: 1.4625rem;

                        span {
                            font-weight: 700;
                        }

                        @media ($mobile) {
                            max-width: 40%;
                            margin: auto 0 auto auto;
                        }
                    }
                }
            }
        }

        .finish__buy {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-top: 3.125rem;
            flex-wrap: wrap;

            .close__all {
                display: flex;
                width: 11.4375rem;
                align-items: center;

                @media ($mobile) {
                    width: 95%;
                    margin-bottom: 3.125rem;
                }

                p {
                    @include font-source(1.125rem, 400, 0);
                    color: $text-dark;
                    margin-left: 1rem;
                }
            }

            .row__buttons {
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                @media ($mobile) {
                    width: 100%;
                    justify-content: center;

                    .btn__gray {
                        width: 95%;
                        margin: auto;
                    }
                }

                .btn__primary {
                    width: 16.375rem;
                    height: 3.25rem;
                    margin-left: 1.5rem;

                    @media ($mobile) {
                        margin: auto;
                        width: 95%;
                        margin-top: 1.25rem;
                    }
                }
            }
        }
    }

    .products__empty {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h2 {
            @include font-source(3.125rem, 600, 0);
            color: $primary;
        }

        .btn__primary {
            width: 15.625rem;
            margin-top: 3.125rem;
        }
    }
}
</style>
