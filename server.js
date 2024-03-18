const axios = require('axios');

async function createAccount() {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name: 'Your Full Name',
      email: 'your_colle@example.com',
      rollNumber: 'Your Roll Number',
      phone: 'Your Phone Number'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Account Created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error Creating Account:', error);
  }
}

async function buyStocks(accountNumber, company, currentPrice, githubRepoLink) {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
      company: company,
      currentPrice: currentPrice,
      accountNumber: accountNumber,
      githubRepoLink: githubRepoLink
    }, {
      headers: {
        'Content-Type': 'application/json',
        'bfhl-auth': 'Your Roll Number'
      }
    });

    console.log('Stocks Bought:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error Buying Stocks:', error);
  }
}

async function main() {
  const account = await createAccount();
  const accountNumber = account.accountNumber;



  // Buy Stocks
  await buyStocks(accountNumber, 'Bajaj Finserv', 12000, 'https://github.com/your-github-username');
}

main();
