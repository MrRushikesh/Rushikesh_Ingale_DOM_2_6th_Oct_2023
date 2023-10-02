const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

async function fetchData() {
    try {
        const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
                const data = await response.json();
                return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


function populateTable(data) {
    const tableBody = document.querySelector('tbody');
        
    data.forEach(coin => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td ><img src="${coin.image}" alt="${coin.name}" width="18"><span class="nameBody">${coin.name}</span></td>
            <td class="symbolBody">${coin.symbol}</td>
            <td class="imgBody"><img src="${coin.image}" alt="${coin.name}" width="30"></td>
            <td class="priceBody">$${coin.current_price.toFixed(2)}</td>
            <td class="priceBody">${coin.ath_change_percentage}%</td>
            <td class="valueBody">$${coin.total_volume.toFixed(2)}</td>
        `;
    });
}

fetchData().then(data => {
    populateTable(data);
});


