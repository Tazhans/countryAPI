console.log(axios.get(`https://restcountries.com/v3.1/all`))
const countriesDiv = document.getElementsByClassName("countries")

    const getCountries = async() => {
    const countries = await axios.get(`https://restcountries.com/v3.1/all`)
    console.log(countries.data)
    const countryNames = countries.data

    for(const country of countryNames) {
        const div = document.createElement('div')
        div.classList.add("country")

        const cFlagElement = document.createElement('img')
        cFlagElement.src = country.flags.png
        div.appendChild(cFlagElement)
        cFlagElement.classList.add("flag")

        const cNameElement = document.createElement("p")
        cNameElement.textContent = "Name: " + country.name.common
        div.appendChild(cNameElement)

        const cPopulationElement = document.createElement("p")
        cPopulationElement.textContent = "Population: " + country.population
        div.appendChild(cPopulationElement)

        const cRegionElement = document.createElement("p")
        cRegionElement.textContent = "Country: " + country.region
        div.appendChild(cRegionElement)

        const cCapitalElement = document.createElement("p")
        cCapitalElement.textContent = "Capital: " + country.capital
        div.appendChild(cCapitalElement)
         
         countriesDiv[0].append(div)
    }
}

let countriesFunction = await getCountries();

export default countriesFunction;