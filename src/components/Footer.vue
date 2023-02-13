<template>
    <footer>
        <div class="logo">
            <img src="@/assets/logo-footer.svg" alt="" />
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
};
</script>

<style lang="scss">
footer {
    width: 100%;
    height: 7.5rem;
    background-color: $background;

    @media ($mobile) {
        height: 5.5rem;
    }

    .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
    }
}
</style>
