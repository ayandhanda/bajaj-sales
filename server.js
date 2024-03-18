const axios = require('axios');

async function createAccount() {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name: 'Ayan Dhanda',
      email: 'ayan0330.be21@chitkara.edu.in',
      rollNumber: '2110990330',
      phone: '9416017087'
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
