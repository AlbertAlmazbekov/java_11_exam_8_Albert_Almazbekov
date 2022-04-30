const search = document.querySelector(".search");
const input = document.querySelector(".input");
const result = document.querySelector(".result");

search.addEventListener("click", () => {
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
      .then((res) => res.json())
      .then((data) => displayCountries(data));
    try {
        (country.name != input)
        alert("no such search was found");
    }catch(e){
        displayCountries(data);
    }
});

input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        search.click();
    }
})

const displayCountries = (data) => {
    result.innerHTML = "";
    data.forEach((country) => {
        const div = document.createElement("div");
        div.className = "card m-5 d-flex shadow";
        div.style.width = "18rem";
        let link = 'https://www.google.com/search?q=' + country.name.common + "&oq=ee&aqs=chrome..69i57j46i199i465i512j46i175i199i512j0i512l2j46i1i10i512j46i512j0i512l3.732j0j4&sourceid=chrome&ie=UTF-8"
        div.innerHTML = `
            <img src="${country.flags.svg}" class="card-img-top" alt="">
                <div class="card-body">
                    <h6 class="card-text">name: ${country.name.common}</h6>
                    <h6 class="card-text">capital: ${country.capital}</h6>
                    <h6 class="card-text">currency: ${JSON.stringify(country.currencies)}</h6>
                    <h6 class="card-text">region: ${country.region}</h6>
                    <a href="${link}">Link to the page</a>
                </div>
        `;
        result.appendChild(div);
        console.log(data);
    });
};