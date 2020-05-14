export default {
    formatCurrency:function(num){
        return 's' + Number(num,toFixed(2)).toLocaleString() + '';
    }
}