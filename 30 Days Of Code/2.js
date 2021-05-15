function solve(meal_cost, tip_percent, tax_percent) {
  let tip = (tip_percent / 100) * meal_cost;
  //   console.log(tip);

  let tax = (tax_percent / 100) * meal_cost;
  //   console.log(tax);

  return Math.round(meal_cost + tip + tax);
}
console.log(solve(12.0, 20, 8));
