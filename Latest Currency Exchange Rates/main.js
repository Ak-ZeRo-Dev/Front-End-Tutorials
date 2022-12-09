const apiKey = `f8758839819e4a7699023fbcc61b17cf`;
const api = `https://api.currencyfreaks.com/latest?apikey=${apiKey}`;

const curr = document.querySelector(`#curr`);
const currType = document.querySelector(`#currType`);
const result = document.querySelector(`#result`);
let currencies = {};

(async function getData() {
  const res = await fetch(api);
  const data = await res.json();
  currencies = { ...data.rates };
  makeOptions(Object.keys(data.rates));
})();

function makeOptions(options) {
  options.forEach((e) => {
    currType.innerHTML += `<option>${e}</option>`;
  });
}

curr.addEventListener(`keyup`, () => {
  result.value = (currencies[currType.value] * curr.value).toFixed(2);
});

currType.addEventListener(`change`, () => {
  result.value = (currencies[currType.value] * curr.value).toFixed(2);
});
