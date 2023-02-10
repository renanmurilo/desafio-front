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
                        <a href="" class="trash"></a>

                        <div class="text">
                            <h5>Eletrônicos</h5>
                            <h2>Notebook Acer Aspire 3 A315</h2>
                        </div>
                    </div>

                    <div class="quantity">
                        <form class="item__quantity">
                            <a href="" class="minus"></a>
                            <input type="tel" />
                            <a href="" class="plus"></a>
                        </form>
                    </div>

                    <div class="price">
                        <h4 class="bestPrice"></h4>
                        <h4 class="descount"></h4>
                    </div>

                    <div class="totals">
                        <h4 class="bestPrice"></h4>
                        <h4 class="descount"></h4>
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

                            <h4>em até 10x R$ 300,00</h4>
                            <p>(Total R$3.000,00)</p>
                        </div>
                    </div>
                </div>

                <div class="finish__buy">
                    <a href="" class="close__all">
                        <img src="" alt="" />
                        <p>Limpar carrinho</p>
                    </a>

                    <div class="row__buttons">
                        <a href="" class="btn btn__gray">Continuar comprando</a>
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

<style>
</style>
