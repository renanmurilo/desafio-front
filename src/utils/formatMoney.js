export default {
    methods: {
        formatMoney(number, decimals, decPoint, thousandsSep, symbol) {
            if (!number || !decimals || !decPoint || !thousandsSep || !symbol)
                return false;

            number = `${number}`.replace(',', '').replace(' ', '');

            const n = !Number.isFinite(+number) ? 0 : +number;
            const prec = !Number.isFinite(+decimals) ? 0 : Math.abs(decimals);
            const sep =
                typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
            const dec = typeof decPoint === 'undefined' ? '.' : decPoint;
            let s = '';

            const toFixedFix = (n, prec) => {
                // eslint-disable-next-line no-restricted-properties
                const k = Math.pow(10, prec);
                return `${Math.round(n * k) / k}`;
            };

            s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }

            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }

            return `${symbol} ${s.join(dec)}`;
        },
    },
};
