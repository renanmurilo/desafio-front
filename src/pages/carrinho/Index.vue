<template>
    <div class="carrinho">
        <div class="shell">
            <div class="content__carrinho">
                <div class="row__wrapper">
                    <h2>PRODUTOS</h2>
                    <h2>QUANTIDADE</h2>
                    <h2>VALOR UNITÁRIO</h2>
                    <h2>TOTAL</h2>
                </div>

                <div class="grid__wrapper">
                    <div class="description">
                        <a href="" class="trash">
                            <img src="@/assets/trash.svg" alt="" />
                        </a>

                        <div class="text">
                            <h5>Eletrônicos</h5>
                            <h2>Notebook Acer Aspire 3 A315</h2>
                        </div>
                    </div>

                    <div class="quantity">
                        <form class="item__quantity">
                            <a href="" class="minus">-</a>
                            <input type="tel" class="qtd" disabled />
                            <a href="" class="plus">+</a>
                        </form>
                    </div>

                    <div class="price">
                        <h4 class="bestPrice">
                            <span>R$ 1.500,00</span> à vista
                        </h4>
                        <h4 class="descount">ou 10x R150,00</h4>
                    </div>

                    <div class="totals">
                        <h4 class="bestPrice">
                            <span>R$ 1.500,00</span> à vista
                        </h4>
                        <h4 class="descount">ou 10x R150,00</h4>
                    </div>
                </div>

                <div class="sumary__total">
                    <div class="total__confirmation">
                        <div class="total__vista">
                            <h2>Total à vista</h2>

                            <h4>R$ 3.000</h4>
                        </div>

                        <div class="total__parcelado">
                            <h2>TOTAL PARCELADO</h2>

                            <h4>
                                em até <span>10x R$ 300,00</span> (Total
                                R$3.000,00)
                            </h4>
                        </div>
                    </div>
                </div>

                <div class="finish__buy">
                    <a href="" class="close__all">
                        <img src="@/assets/trash.svg" alt="" />
                        <p>Limpar carrinho</p>
                    </a>

                    <div class="row__buttons">
                        <router-link to="/products" class="btn btn__gray">
                            Continuar comprando
                        </router-link>
                        <a href="" class="btn btn__primary">Concluir compra</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCarrinho',
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

            h2 {
                @include font-source(1.125rem, 700, 0);
                color: $text-dark;
                text-transform: uppercase;
                margin-right: 12.25rem;

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

            .description {
                position: relative;
                width: 12.0625rem;
                display: flex;
                align-items: center;
                margin-right: 5.8125rem;
                .trash {
                    width: 1.875rem;
                    position: relative;
                    top: 0.625rem;
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    margin-left: 1.25rem;

                    h5 {
                        @include font-source(0.875rem, 700, 0);
                        color: $primary;
                        margin-bottom: 0.75rem;
                    }

                    h2 {
                        @include font-source(1.125rem, 700, 0);
                        color: $text-dark;
                        line-height: 1.4625rem;
                    }
                }
            }

            .quantity {
                width: 6.0625rem;
                margin-right: 12.8125rem;

                .item__quantity {
                    height: 2.125rem;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    border-radius: 3px;
                    border: 1px solid #999999;

                    .minus,
                    .plus {
                        width: 1.4375rem;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        @include font-source(1.2rem, 700, 0);
                        color: $text-dark;
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
                    }
                }
            }

            .price,
            .totals {
                margin-right: 10.625rem;
                width: 10.0625rem;

                .bestPrice {
                    @include font-source(1.125rem, 400, 0);
                    color: $text-dark;
                    line-height: 1.4625rem;

                    span {
                        font-weight: 700;
                    }
                }

                .descount {
                    @include font-source(1.125rem, 400, 0);
                    color: $text-dark;
                    line-height: 1.4625rem;
                }
            }

            .totals {
                margin-right: 0;
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

                .total__vista {
                    display: flex;
                    align-items: center;
                    margin-bottom: 3.125rem;
                    margin-right: 5rem;

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
                    }
                }
            }
        }

        .finish__buy {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-top: 3.125rem;

            .close__all {
                display: flex;
                width: 11.4375rem;
                align-items: center;

                p {
                    @include font-source(1.125rem, 400, 0);
                    color: $text-dark;
                    margin-left: 1rem;
                }
            }

            .row__buttons {
                display: flex;
                align-items: center;

                .btn__primary {
                    width: 16.375rem;
                    height: 3.25rem;
                    margin-left: 1.5rem;
                }
            }
        }
    }
}
</style>
