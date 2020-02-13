export default {
    formatCurrency: function (num) {
        return 'Rupees ' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}