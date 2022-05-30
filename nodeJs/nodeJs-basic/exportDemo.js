/**
 * export 方式引用外部程序
 */
const currency = require('./lib/currency');
console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));
console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));

/**
 * module.export 方式引用外部程序
 */
const Currency = require('./lib/currencyV2');
var currencyV2 = new Currency(0.8);
console.log(currencyV2.canadianToUS(50));
console.log(currencyV2.USToCanadian(50));
