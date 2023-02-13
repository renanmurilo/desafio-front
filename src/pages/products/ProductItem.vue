<template>
    <div class="products">
        <div
            class="product__item"
            v-for="(product, index) in products"
            :key="index"
        >
            <div class="product__image">
                <img :src="product.imageUrl" alt="" />
            </div>

            <div class="product__description">
                <h5>{{ product.category }}</h5>
                <h3>{{ product.name }}</h3>
                <p>{{ limitLetter(product.description, 70) }}</p>
                <h4>{{ formatMoney(product.price, 2, ',', '.', 'R$') }}</h4>
            </div>

            <a
                @click.stop.prevent="addToCart(product)"
                class="btn btn__outline__primary"
            >
                Adicionar ao Carrinho
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import formatMoney from '@/utils/formatMoney';
import limitLetter from '@/utils/limitLetter';

export default {
    mixins: [formatMoney, limitLetter],
    props: ['products'],
    computed: {
        ...mapGetters({
            cartProducts: 'GET_PRODUCTS_CART',
        }),
    },
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        let products = localStorage.products;

        if (products) {
            this.items = JSON.parse(products);
            this.$store.commit('SET_PRODUCTS_CART', this.items);
        }
    },
    methods: {
        addToCart(product) {
            product['quantity'] = 1;
            this.items = [...this.items, product];

            this.items = this.items.filter((item) => item.id !== product.id);

            this.items = [...this.items, product];

            this.$store.commit('SET_PRODUCTS_CART', this.items);
            localStorage.products = JSON.stringify(this.items);
        },
    },
};
</script>

<style lang="scss">
.products {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 1030px) {
        justify-content: center;
    }

    .product__item {
        width: 22.25rem;
        min-height: 32.75rem;
        background-color: $white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1.5rem;
        margin-bottom: 3.875rem;
        box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
        transform: scale(1);
        transition: all 0.4s;

        &:nth-child(3n) {
            margin-right: 0;

            @media ($tabletMax) {
                margin-right: 1.5rem;
            }

            @media ($mobile) {
                margin: auto auto 3.875rem;
            }
        }

        &:nth-child(2n) {
            @media ($tabletMax) {
                margin-right: 0;
            }

            @media ($mobile) {
                margin: auto auto 3.875rem;
            }
        }

        @media ($desktopLarge) {
            &:hover {
                transform: scale(1.02);
                transition: all 0.4s;
            }
        }

        @media ($mobile) {
            width: 95%;
            margin: auto auto 3.875rem;
        }

        .product__image {
            width: 100%;
            height: 15.625rem;
            margin: auto;

            img {
                object-fit: cover;
                max-width: 100%;
                height: 15.625rem;
                width: 80%;
            }
        }

        .product__description {
            padding: 1.9375rem;
            border-bottom: 0.0625rem solid #aaaaaa;

            h5 {
                @include font-source(0.875rem, 700, 0);
                color: $primary;
                margin-bottom: 0.625rem;
            }

            h3 {
                @include font-source(1.125rem, 700, 0);
                color: $text-dark;
                margin-bottom: 0.625rem;
                min-height: 2.8125rem;
            }

            p {
                @include font-source(1rem, 400, 0);
                color: $text-dark;
                margin-bottom: 1.25rem;
                line-height: 1.4038rem;
            }

            h4 {
                @include font-source(1.5625rem, 700, 0);
                color: $text-dark;
            }
        }

        .btn__outline__primary {
            font-weight: 700;
            text-transform: uppercase;
        }
    }
}
</style>
