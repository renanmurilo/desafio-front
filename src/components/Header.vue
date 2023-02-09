<template>
    <header>
        <div class="shell">
            <div class="content__nav__bar">
                <router-link to="/home" class="logo">
                    <img src="@/assets/logo.svg" alt="" />
                </router-link>

                <nav>
                    <router-link to="/home" class="link">Produtos</router-link>
                    <router-link to="/checkout">
                        <img src="@/assets/cart.svg" alt="" />
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
};
</script>

<style lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: $white;
    border-bottom: 1px solid #ededed;
    width: 100%;

    .content__nav__bar {
        height: 8.0625rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        nav {
            .link {
                color: $text;
                text-decoration: none;
                @include font-inter(1rem, 700, 0);
                margin-right: 1.5rem;
            }
        }
    }
}
</style>
