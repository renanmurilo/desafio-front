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

                            <input
                                type="text"
                                v-model="nome"
                                :class="{ erro: erroName }"
                                class="field"
                                @click.stop.prevent="clear"
                            />
                        </div>

                        <div class="form__controls">
                            <label class="label__field"> Cep* </label>

                            <input
                                type="text"
                                @change="validarCep"
                                v-model="cep"
                                class="field"
                                @click.stop.prevent="clear"
                                v-mask="'#####-###'"
                                :class="{ erro: erro || erroCep }"
                            />
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__controls">
                            <label class="label__field"> E-mail* </label>

                            <input
                                type="email"
                                v-model="email"
                                @change="changeValidator"
                                ref="email"
                                class="field"
                                @click.stop.prevent="clear"
                                :class="{ erro: erroEmailInvalido }"
                            />
                        </div>

                        <div class="form__controls w30">
                            <label class="label__field"> Endereço* </label>

                            <input
                                type="text"
                                v-model="endereco"
                                disabled
                                class="field"
                            />
                        </div>

                        <div class="form__controls w10">
                            <label class="label__field"> Numero* </label>

                            <input
                                type="text"
                                v-model="numero"
                                @click.stop.prevent="clear"
                                oninput="this.value=this.value.replace(/[^0-9]+/g,'');"
                                class="field"
                                :class="{ erro: erroNumero }"
                            />
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__controls">
                            <label class="label__field"> CPF* </label>

                            <input
                                type="text"
                                v-model="cpf"
                                @change="changeValidator"
                                ref="cpf"
                                @click.stop.prevent="clear"
                                class="field"
                                v-mask="'###.###.###-##'"
                                :class="{ erro: erroCpfInvalido || erroCpf }"
                            />
                        </div>

                        <div class="form__controls w25">
                            <label class="label__field"> Complemento* </label>

                            <input
                                type="text"
                                v-model="complemento"
                                class="field"
                                @click.stop.prevent="clear"
                                :class="{ erro: erroComplemento }"
                            />
                        </div>

                        <div class="form__controls w25">
                            <label class="label__field"> Bairro* </label>

                            <input
                                type="text"
                                v-model="bairro"
                                disabled
                                class="field"
                            />
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__controls w25">
                            <label class="label__field">
                                Data de nascimento*
                            </label>

                            <input
                                type="text"
                                v-model="dataNascimento"
                                class="field"
                                v-mask="'##/##/####'"
                                placeholder="__/__/____"
                                @click.stop.prevent="clear"
                                :class="{ erro: erroData }"
                            />
                        </div>

                        <div class="form__controls w25">
                            <label class="label__field"> Telefone* </label>

                            <input
                                type="text"
                                v-model="telefone"
                                class="field"
                                @click.stop.prevent="clear"
                                v-mask="'(##) #####-####'"
                                @change="changeValidator"
                                ref="telefone"
                                :class="{ erro: erroTelefoneInvalid }"
                            />
                        </div>

                        <div class="form__controls w30">
                            <label class="label__field"> Cidade* </label>

                            <input
                                type="text"
                                v-model="cidade"
                                disabled
                                class="field"
                            />
                        </div>

                        <div class="form__controls w10">
                            <label class="label__field"> Estado* </label>

                            <input
                                type="text"
                                v-model="estado"
                                disabled
                                class="field"
                            />
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
        <Modal />
    </div>
</template>

<script>
import viacep from '@/api/viacep';
import validateCpf from '@/utils/validateCpf';
import validateEmail from '@/utils/validateEmail';
import validatePhone from '@/utils/validatePhone';
import Modal from '@/components/Modal.vue';

export default {
    name: 'TheCheckout',
    mixins: [validateCpf, validateEmail, validatePhone],
    components: { Modal },
    data() {
        return {
            nome: '',
            cep: '',
            email: '',
            endereco: '',
            numero: '',
            cpf: '',
            complemento: '',
            bairro: '',
            dataNascimento: '',
            telefone: '',
            cidade: '',
            estado: '',
            erro: false,
            erroCep: false,
            erroCpf: false,
            erroTelefoneInvalid: false,
            erroEmailInvalido: false,
            erroCpfInvalido: false,
            erroName: false,
            erroNumero: false,
            erroData: false,
            erroComplemento: false,
        };
    },
    created() {
        // buscar objeto do localStorage
        let products = localStorage.products;

        if (products) {
            products = JSON.parse(products);
            this.$store.commit('SET_PRODUCTS_CART', products);
        }
    },
    methods: {
        clear() {
            this.erro = false;
            this.erroCep = false;
            this.erroCpf = false;
            this.erroTelefoneInvalid = false;
            this.erroEmailInvalido = false;
            this.erroCpfInvalido = false;
            this.erroName = false;
            this.erroNumero = false;
            this.erroData = false;
            this.erroComplemento = false;
        },
        changeValidator() {
            //validar cpf
            if (this.$refs.cpf.value.length === 14) {
                this.erroCpf = false;
                if (!this.isValidCPF(this.cpf)) {
                    this.erroCpfInvalido = true;
                } else {
                    this.erroCpfInvalido = false;
                }
            }

            //validar email
            if (this.$refs.email.value.length) {
                if (!this.isEmail(this.email)) {
                    this.erroEmailInvalido = true;
                } else {
                    this.erroEmailInvalido = false;
                }
            }

            //validar telefone
            if (this.$refs.telefone.value.length === 15) {
                if (!this.isValidPhone(this.telefone)) {
                    this.erroTelefoneInvalid = true;
                } else {
                    this.erroTelefoneInvalid = false;
                }
            }
        },
        async validarCep() {
            const { data } = await viacep.get(`/ws/${this.cep}/json/`);

            if (data.erro) {
                this.erro = data.erro;
            } else {
                this.erro = false;
                this.endereco = data.logradouro;
                this.bairro = data.bairro;
                this.cidade = data.localidade;
                this.estado = data.uf;
            }
        },
        sendCart() {
            if (!this.nome || this.nome < 3) {
                this.erroName = true;
                return;
            }

            if (!this.cep) {
                this.erroCep = true;
                return;
            }

            if (!this.email || !this.isEmail(this.email)) {
                this.erroEmail = true;
                return;
            }

            if (!this.numero) {
                this.erroNumero = true;
                return;
            }

            if (!this.cpf || !this.isValidCPF(this.cpf)) {
                this.erroCpf = true;
                return;
            }

            if (!this.complemento) {
                this.erroComplemento = true;
                return;
            }

            if (!this.dataNascimento) {
                this.erroData = true;
                return;
            }

            if (!this.telefone || !this.isValidPhone(this.telefone)) {
                this.erroTelefone = true;
                return;
            }

            this.$store.commit('SET_MODAL', true);
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

                @media ($tabletMax) {
                    width: 95%;
                    margin: auto;
                }

                &.button {
                    justify-content: flex-end;
                    margin-top: 0.3125rem;

                    @media ($mobile) {
                        justify-content: center;
                    }

                    .btn__primary {
                        width: 22.3125rem;
                        height: 3.25rem;
                        font-size: 1.125rem;

                        @media ($mobile) {
                            width: 95%;
                        }
                    }
                }

                .form__controls {
                    display: flex;
                    flex-direction: column;
                    width: 49%;
                    margin-bottom: 2.1875rem;

                    @media ($tabletMax) {
                        width: 49%;
                        flex-wrap: wrap;
                    }

                    @media ($mobile) {
                        width: 95%;
                        margin: auto auto 1.1875rem;
                    }

                    &.w25 {
                        width: 16.375rem;

                        @media ($tabletMax) {
                            width: 23%;
                        }

                        @media ($mobile) {
                            width: 95%;
                        }
                    }

                    &.w30 {
                        width: 22.3125rem;

                        @media ($tabletMax) {
                            width: 30%;
                        }

                        @media ($mobile) {
                            width: 95%;
                        }
                    }

                    &.w10 {
                        width: 10.4375rem;

                        @media ($tabletMax) {
                            width: 16%;
                        }

                        @media ($mobile) {
                            width: 95%;
                        }
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

                        &.erro {
                            border-color: $red;
                        }
                    }
                }
            }
        }
    }
}
</style>
