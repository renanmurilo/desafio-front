export default {
    methods: {
        limitLetter(str, quantity) {
            return str.length > quantity
                ? `${str.substring(0, quantity)} ...`
                : str.substring(0, quantity);
        },
    },
};
