
fetch("https://api.wallex.ir/v1/markets")
  .then((response) => response.json())
  .then((data) => {
    data = data.result.symbols;

    var coins = [
      "BTCUSDT",
      "ETHUSDT",
      "LTCUSDT",
      "DASHUSDT",
      "ADAUSDT",
      "CAKEUSDT",
      "ATOMUSDT",
      "BCHUSDT",
      "BNBUSDT",
      "EOSUSDT",
      "LINKUSDT",
      "SANDUSDT",
    ];

    coins = coins.map((coin) => {
      return {
        name: data[coin].faBaseAsset,
        price: "$ " + Math.round(data[coin].stats.bidPrice) ,
        high: "$ " + Math.round(data[coin].stats["24h_highPrice"]),
        low: "$ " + Math.round(data[coin].stats["24h_lowPrice"]),
      };
    });

    coins.forEach((coin) => {
      var tag = createTag(coin);
      document.querySelector("table tbody").appendChild(tag);
    });

  });

function createTag(coin) {
  var newTr = document.createElement("tr");
  Object.values(coin).forEach((element) => {
    var newTd = document.createElement("td");
    newTd.innerHTML = element;
    newTr.appendChild(newTd);
  });
  return newTr;
};
