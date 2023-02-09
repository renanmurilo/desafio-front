<template>
    <div class="products">
        <Banner />

        <div class="shell">
            <div class="content__products">
                <div class="search__products"></div>

                <div class="inner__products"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from './Banner.vue';

export default {
    name: 'TheProducts',
    components: { Banner },
};
</script>

<style lang="scss">
</style>
