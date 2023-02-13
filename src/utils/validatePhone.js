export default {
    methods: {
        isValidPhone(phone) {
            var regex = new RegExp('^\\([1-9]{2}\\) (?:[2-8]|9[1-9])[0-9]{3}\\-[0-9]{4}$');
            return regex.test(phone);
        }
    }
}