const {City} = require("jp-city-lookup");

cityCode="13112"

console.log(City.name(cityCode) + "と隣接している市区郡町村")

result=City.lookup({neighboring: cityCode})
result.forEach(function(adjacentCityCode) {
   console.log(" " + adjacentCityCode + ": " + City.name(adjacentCityCode))
});