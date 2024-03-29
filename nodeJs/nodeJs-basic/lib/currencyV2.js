class Currency {
  constructor(canadianDollar) {
    this.canadianDollar = canadianDollar;
  }
  roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }
  canadianToUS(canadian) {
    return this.roundTwoDecimals(canadian * this.canadianDollar);
  }
  USToCanadian(us) {
    return this.roundTwoDecimals(us / this.canadianDollar);
  }
}
// exports = Currency; // Node 不允许重写exports
module.exports = Currency; // Node 不允许重写exports

