<template>
    <div class="home">
        <Header />

        <main class="content__home">
            <router-view />
        </main>

        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'HomeView',
    components: { Header, Footer },
};
</script>

<style lang="scss">
.home {
    padding-top: 8.0625rem;
    background-color: $background-light;

    @media ($mobile) {
        padding-top: 6rem;
    }
}
</style>
