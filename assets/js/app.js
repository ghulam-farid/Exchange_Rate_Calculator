const currency_ele_one = document.querySelector("#currency-one");
const amount_ele_one = document.querySelector("#amount-one");

const currency_ele_two = document.querySelector("#currency-two");
const amount_ele_two = document.querySelector("#amount-two");

const swap = document.querySelector("#swap-btn");
const rate_ele = document.querySelector("#rate");

const calculate = () => {
  const currency_one = currency_ele_one.value;
  const currency_two = currency_ele_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rate_ele.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amount_ele_two.value = (amount_ele_one.value * rate).toFixed(2);
    });
};

const swapCurrency = () => {
  const temp = currency_ele_one.value;
  currency_ele_one.value = currency_ele_two.value;
  currency_ele_two.value = temp;
  calculate();
};

currency_ele_one.addEventListener("change", calculate);
amount_ele_one.addEventListener("input", calculate);
currency_ele_two.addEventListener("change", calculate);
amount_ele_two.addEventListener("input", calculate);
swap.addEventListener("click", swapCurrency);

calculate();
