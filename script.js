let countries = {
    Indiea: ["Adoni",
        "Amaravati",
        "Anantapur",
        "Chandragiri",
        "Chittoor",
        "Dowlaiswaram",
        "Eluru",
        "Guntur",
        "Kadapa",
        "Kakinada",
        "Kurnool",
        "Machilipatnam",
        "Nagarjunakoṇḍa",
        "Rajahmundry",
        "Srikakulam",
    ],
    Iran: ["Tehran",
        "Mashhad",
        "Isfahan",
        "Karaj",
        "Tabriz",
        "Shiraz",
        "Qom",
        "Ahvaz",
        "Pasragad",
        "Kahriz",
        "Kermanshah"],
    Italy: [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
    ],
}
let countriesElement = document.getElementById('countries');
let citiesElement = document.getElementById("cities");
let countriesIndex = Object.keys(countries);
let citiesValue = Object.values(countries);

countriesIndex.forEach((country) => {
    let option = document.createElement("option");
    option.value = country;
    option.text = country;
    countriesElement.append(option);
});
countriesElement.addEventListener("change", () => {
    citiesElement.innerHTML = "";
    let selectedCountry = countriesElement.value;
    let cities = countries[selectedCountry];
    cities.forEach((city) => {
        let node = document.createElement("option");
        node.value = city;
        node.text = city;
        citiesElement.append(node);
    });
});


