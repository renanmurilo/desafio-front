<template>
    <transition name="modal">
        <div class="modal__mask" v-if="showModal">
            <div class="modal__wrapper">
                <div class="modal__container">
                    <div class="content__justify">
                        <h2>Pedido Concluido com sucesso!</h2>

                        <a @click.stop.prevent="close" class="btn btn__primary">
                            Fechar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'pedidoConcluido',
    computed: {
        ...mapGetters({
            showModal: 'GET_MODAL',
        }),
    },
    methods: {
        close() {
            localStorage.clear();
            window.location.reload();

            setTimeout(() => {
                this.$store.commit('SET_MODAL', !this.showModal);
                this.$router.push('/products');
            }, 1500);
        },
    },
};
</script>

<style lang="scss">
.modal__mask {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: table;
    transition: opacity 0.3s ease;

    &.modal-enter {
        opacity: 0;

        .modal__container {
            transform: scale(1.1);
        }
    }

    &.modal-leave-active {
        opacity: 0;

        .modal__container {
            transform: scale(1.1);
        }
    }

    .modal__wrapper {
        display: table-cell;
        vertical-align: middle;
        overflow-y: auto;

        .modal__container {
            width: 37.5rem;
            height: 18.75rem;
            margin: 0px auto;
            background-color: $white;
            transition: all 0.3s ease;
            position: relative;
            border-radius: 10px;
            padding: 1.25rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            @media (max-width: 767px) {
                width: 95%;
                margin: auto;
                height: 21.875rem;
                padding: 0.625rem;
            }

            .content__justify {
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;

                h2 {
                    @include font-source(1.875rem, 600, 0);
                    color: $primary;
                    text-align: center;
                }

                .btn__primary {
                    width: 12.5rem;
                    margin-top: 3.125rem;
                }
            }
        }
    }
}
</style>
