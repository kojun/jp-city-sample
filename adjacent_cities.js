const {City} = require("jp-city-lookup")
const allCities = require("jp-city-lookup/dist/city.json").city

Object.keys(allCities).forEach(function(cityCode) {
    const adjacentCities = City.lookup({neighboring: cityCode})
    console.log(cityCode + " " + City.name(cityCode) + " " + adjacentCities.join(" "))
})
