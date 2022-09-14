'use strict';

const e = React.createElement;

const btc_api_url = 'https://api.cryptonator.com/api/ticker/btc-usd';
const btcHttpObject =() => {
  try {
     return new XMLHttpRequest();
  } catch (error) {}
};
const btcGetData = () => {
  var request = btcHttpObject();
  request.open('GET', btc_api_url, false);
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  request.send(null);
  return request.responseText;
};
const btcDataHandler = ()  => {
  var raw_data_string = btcGetData();
  var data = JSON.parse(raw_data_string);
  var price = data.ticker.price;
  return price;
}

const Bitcoin = () => {
    const price = React.useMemo(() => btcDataHandler(), [btcDataHandler]);
    console.log(price);
    const [showPrice, setShowPrice] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(0);

    const amountBtc = React.useMemo(() => inputValue / price, [inputValue, price]);


    return React.createElement("div", {
  className: "card"
}, /*#__PURE__*/React.createElement("div", {
  className: "card-header"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-50 h-50 mx-auto"
}, /*#__PURE__*/React.createElement("img", {
  src: "./images/btc.jpg",
  className: "h-100 w-100"
}))), /*#__PURE__*/React.createElement("div", {
  className: "card-body"
}, /*#__PURE__*/React.createElement("h5", {
  className: "card-title"
}, "Welcome to my simple app to see bitcoin changes"), /*#__PURE__*/React.createElement("div", {
  className: "card d-flex justify-content-between flex-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "card-body"
}, /*#__PURE__*/React.createElement("h5", {
  className: "card-title"
}, "What is Bitcoin price today?"), /*#__PURE__*/React.createElement("h6", {
  className: "card-subtitle text-muted mb-2"
}, "Click below to see last price"), /*#__PURE__*/React.createElement("div", {
  className: "d-flex justify-content-between flex-row"
}, /*#__PURE__*/React.createElement("a", {
  onClick: function onClick() {
    setShowPrice(true);
  },
  className: "btn btn-primary"
}, "Check Price"), showPrice && /*#__PURE__*/React.createElement("div", {
  className: "card-title"
}, price))), /*#__PURE__*/React.createElement("div", {
  className: "card-body"
}, /*#__PURE__*/React.createElement("h5", {
  className: "card-title"
}, "Let's check your BTC amount"), /*#__PURE__*/React.createElement("div", {
  className: "form-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "usd"
}, "How much dollars do you have?"), /*#__PURE__*/React.createElement("input", {
  onChange: function onChange(event) {
    return setInputValue(event.target.value);
  },
  type: "number",
  className: "form-control",
  id: "usd",
  placeholder: "USD"
}), /*#__PURE__*/React.createElement("small", {
  className: "form-text text-muted"
}, "You have ", amountBtc, " BTC"))))));
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Bitcoin));
