<template>
    <header>
        <div class="shell">
            <div class="content__nav__bar">
                <router-link to="/products" class="logo">
                    <img src="@/assets/logo.svg" alt="Logo" />
                </router-link>

                <nav>
                    <router-link to="/products" class="link">
                        Produtos
                    </router-link>
                    <router-link to="/cart" class="cart">
                        <img src="@/assets/cart.svg" alt="Cart" />

                        <div class="total" v-if="cartProducts.length">
                            {{ cartProducts.length }}
                        </div>
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'TheHeader',
    computed: {
        ...mapGetters({
            cartProducts: 'GET_PRODUCTS_CART',
        }),
    },
};
</script>

<style lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: $white;
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.1);
    width: 100%;
    z-index: 9;

    .content__nav__bar {
        height: 8.0625rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media ($mobile) {
            height: 6rem;
        }

        nav {
            display: flex;
            align-items: center;

            .link {
                color: $text;
                text-decoration: none;
                @include font-source(1rem, 700, 0);
                margin-right: 1.5rem;
            }

            .cart {
                position: relative;
                display: flex;
                align-items: flex-end;
                width: auto;

                .total {
                    height: 1rem;
                    bottom: 0;
                    right: 0;
                    width: 1rem;
                    background-color: $red;
                    border-radius: 100%;
                    color: $white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @include font-source(0.625rem, 700, 0);
                }
            }
        }
    }
}
</style>
