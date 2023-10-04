# CryptoMarket Dashboard Documentation

1. Project Overview -: 

- The CryptoMarket Dashboard is a web application that fetches cryptocurrency market data from the CoinGecko API and displays it in a user-friendly table format on a webpage. This project demonstrates the use of promises and the async-await method in JavaScript to handle API requests and display data. It also includes styling based on a provided sample image from Figma.

2. Project Description -: 

The CryptoMarket Dashboard is designed to fetch cryptocurrency market data from the CoinGecko API, store it in an array, and display it on a webpage in the form of a table. It employs JavaScript promises (using the .then method) and async-await methods for handling API requests. Additionally, the displayed data adheres to specific styling guidelines as per a provided sample image from Figma.

3. Fetching Data from the API -: 

- The project demonstrates two methods for fetching data from the API: using promises with the .then method and using async-await.

- Promises (.then Method) -:
The .fetch method is used to make a GET request to the CoinGecko API.

- .then is used to handle the response and parse it into JSON format.

- Async-Await Method -: 
An async function is created to handle API requests.

- The await keyword is used to wait for the API response.

4. Data Storage -: 

- The fetched data is stored in an array, with each object containing the following fields:

        1. Name
        2. ID
        3. Image URL
        4. Symbol
        5. Current Price
        6. Total Volume

5. Displaying Data -:

- HTML Table
An HTML table is created to display the cryptocurrency market data.

- Populating the Table
JavaScript is used to dynamically populate the table rows with data from the array.

- Styling
CSS styles are applied to the table to match the provided sample image from Figma.

6. Additional Features -: 

- Coin Icons and Names
- Coin icons and names are displayed together in the table.
- Percentage Change Color
- The percentage change is displayed in green for positive values and red for negative values.
- Dollar Sign ($)
- Dollar signs ($) are added to numerical values (current price and total volume) as shown in the sample image.

7. Live Link -: 

<a href="https://mrrushikesh.github.io/Rushikesh_Ingale_DOM_2_6th_Oct_2023/" alt="Loading..">Click Here</a>