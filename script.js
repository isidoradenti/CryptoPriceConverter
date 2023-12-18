function getCryptoPrice() {
    const inputAmount = document.getElementById("cryptoInput").value;

    if (!inputAmount || isNaN(inputAmount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const bitcoinPrice = data.bitcoin.usd;
            const convertedAmount = inputAmount * bitcoinPrice;
            const resultText = `${inputAmount} BTC is approximately ${convertedAmount.toFixed(2)} USD`;
            document.getElementById("cryptoResult").innerText = resultText;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("Error fetching data. Please try again later.");
        });
}
