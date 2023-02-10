<template>
    <div class="checkout">
        <div class="shell">
            <div class="content__checkout">
                <form
                    action=""
                    class="form__class"
                    @submit.stop.prevent="sendCart"
                >
                    <div class="form__row">
                        <div class="form__controls">
                            <label class="label__field"> Nome* </label>

                            <input type="text" class="field" />
                        </div>

                        <div class="form__controls">
                            <label class="label__field"> Cep* </label>

                            <input type="text" class="field" />
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__controls">
                            <label class="label__field"> E-mail* </label>

                            <input type="email" class="field" />
                        </div>

                        <div class="form__controls w30">
                            <label class="label__field"> Endereço* </label>

                            <input type="text" class="field" />
                        </div>

                        <div class="form__controls w10">
                            <label class="label__field"> Numero* </label>

                            <input type="text" class="field" />
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__controls">
                            <label class="label__field"> CPF* </label>

                            <input type="text" class="field" />
                        </div>

                        <div class="form__controls w25">
                            <label class="label__field"> Complemento* </label>

                            <input type="text" class="field" />
                        </div>

                        <div class="form__controls w25">
                            <label class="label__field"> Bairro* </label>

                            <input type="text" class="field" />
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__controls w25">
                            <label class="label__field">
                                Data de nascimento*
                            </label>

                            <input type="text" class="field" />
                        </div>

                        <div class="form__controls w25">
                            <label class="label__field"> Telefone* </label>

                            <input type="text" class="field" />
                        </div>

                        <div class="form__controls w30">
                            <label class="label__field"> Cidade* </label>

                            <input type="text" class="field" />
                        </div>

                        <div class="form__controls w10">
                            <label class="label__field"> Estado* </label>

                            <input type="text" class="field" />
                        </div>
                    </div>

                    <div class="form__row button">
                        <button type="submit" class="btn btn__primary">
                            Concluir compra
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCheckout',
    methods: {
        sendCart() {
            this.$router.push('/cart');
        },
    },
};
</script>

<style lang="scss">
.checkout {
    padding: 5.625rem 0 10rem;
    width: 100%;

    .content__checkout {
        width: 100%;

        .form__class {
            width: 100%;

            .form__row {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;

                &.button {
                    justify-content: flex-end;
                    margin-top: 0.3125rem;

                    .btn__primary {
                        width: 22.3125rem;
                        height: 3.25rem;
                        font-size: 1.125rem;
                    }
                }

                .form__controls {
                    display: flex;
                    flex-direction: column;
                    width: 49%;
                    margin-bottom: 2.1875rem;

                    &.w25 {
                        width: 16.375rem;
                    }

                    &.w30 {
                        width: 22.3125rem;
                    }

                    &.w10 {
                        width: 10.4375rem;
                    }

                    .label__field {
                        @include font-source(1.125rem, 400, 0);
                        line-height: 1.4144rem;
                        color: $text-dark;
                        margin-bottom: 0.375rem;
                    }

                    .field {
                        @include font-source(1rem, 400, 0);
                        color: $text-dark;
                        height: 2.8125rem;
                        width: 100%;
                        border-radius: 0.1875rem;
                        border: 0.0938rem solid $text;
                        padding-left: 1rem;
                        background-color: transparent;
                    }
                }
            }
        }
    }
}
</style>
