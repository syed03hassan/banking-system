'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
  login: 'Bilal',
  id: 1111,
  email: 'bilal@mailinator.com',
};

const account2 = {
  login: 'Ali',
  id: 2222,
  email: 'ali@mailinator.com',
};

const account3 = {
  login: 'Wali',
  id: 3333,
  email: 'wali@mailinator.com',
};
const account4 = {
  login: 'Zafar',
  id: 4444,
  email: 'zafar@mailinator.com',
};
const account5 = {
  login: 'Hammad',
  id: 5555,
  email: 'hammad@mailinator.com',
};
const account6 = {
  login: 'Muhammad Imran Khan',
  id: 6666,
  email: 'imran@mailinator.com',
};
const account7 = {
  login: 'Yashwa',
  id: 7777,
  email: 'yashwa@mailinator.com',
};
const account8 = {
  login: 'Saymoon',
  id: 8888,
  email: 'saymoon@mailinator.com',
};
const account9 = {
  login: 'Hassan',
  id: 9999,
  email: 'hassan@mailinator.com',
};
const account10 = {
  login: 'Tanzeela Zuhaib',
  id: 1010,
  email: 'tanzeela@mailinator.com',
};
const account11 = {
  login: 'Awais Bariro',
  id: 1020,
  email: 'awais@mailinator.com',
};
const account12 = {
  login: 'Wamiq Wasi',
  id: 1030,
  email: 'wamiq@mailinator.com',
};
const account13 = {
  login: 'Nabeela Khan',
  id: 1040,
  email: 'nabeela@mailinator.com',
};
const account14 = {
  login: 'Talal Chaudri',
  id: 1050,
  email: 'talal@mailinator.com',
};
const account15 = {
  login: 'Ammar Ahmed',
  id: 1060,
  email: 'ammar@mailinator.com',
};

//const accounts = [account1, account2, account3, account4, account5, account6, account7, account8, account9, account10, account11, account12, account13, account14, account15];

// Elements
const labelWelcome = document.querySelector('.welcome');
const user_exists = document.querySelector('.user_exists');
const try_again = document.querySelector('.try_again');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const formLogin = document.querySelector('.login');
const formLogout = document.querySelector('.logout');
const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.logout__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const signupBlockin = document.querySelector('.signup-block');
const signupArea = document.querySelector('.signup');
const signupButton = document.querySelector('.signup__btn');
const signupLogin = document.querySelector('.signup__input--username');
const signupEmail = document.querySelector('.signup__input--email');
const signupPassword = document.querySelector('.signup__input--password');
const signupConfirmPassword = document.querySelector(
  '.signup__input--confirm-password'
);
const usersList = document.querySelector('.login__select--user');
const usersList02 = document.querySelector('.form__input--to');

//Signup Validation

let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
let curlog = JSON.parse(localStorage.getItem('loggedIn')) || [];
let selectedText;
let selectedText02;

const addUsers = function () {
  usersList.innerHTML = '';

  accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  const ulist = accounts.map(acc => acc.login);
  console.log(ulist);
  ulist.forEach((acc, i, arr) => {
    const optHtml = `<option value="${acc}">${acc}</option>`;
    usersList.insertAdjacentHTML('afterbegin', optHtml);
  });
};
addUsers();

const addUsers02 = function () {
  usersList02.innerHTML = '';
  accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  const ulist02 = accounts.map(acc => acc.login);
  console.log(ulist02);
  ulist02.forEach((acc, i, arr) => {
    const optHtml02 = `<option value="${acc}">${acc}</option>`;

    usersList02.insertAdjacentHTML('afterbegin', optHtml02);
  });
};
addUsers02();

usersList.addEventListener('click', function () {
  selectedText = usersList.value;
  console.log('Users', selectedText);
});

usersList02.addEventListener('click', function () {
  selectedText02 = usersList02.value;
  console.log('Users', selectedText02);
});

let currentAccount;
let currentLoggedin;
//let transfeeAccount = '';

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const userListName = selectedText;
  const userinput = inputLoginUsername.value;
  const pininput = Number(inputLoginPin.value);
  //const str = localStorage.getItem('accounts');
  const allAccounts = JSON.parse(localStorage.getItem('accounts'));

  const curLogedin = allAccounts.find(acc => {
    return acc.email === userinput;
  });
  curLogedin.status = true;
  if (userinput === '') {
    alert('Please Write Email Address');
    inputLoginUsername.focus();
    return false;
  }

  console.log(curLogedin, 'New Look');
  //currentLoggedin = currentAccount.loggedIn = currentAccount.email;
  const currLogedin = JSON.stringify(curLogedin);
  localStorage.setItem('loggedIn', currLogedin);
  //currentLoggedin = currentAccount

  currentAccount = JSON.parse(localStorage.getItem('loggedIn'));

  // const currentAccount = JSON.parse(localStorage.getItem('accounts'));

  if (
    currentAccount?.id == pininput &&
    currentAccount?.login == userListName &&
    currentAccount?.email == userinput
  ) {
    mainDisplay(currentAccount);
  } else {
    labelWelcome.textContent = `User Id and Password are not matched`;
    containerApp.style.opacity = 0;
    inputLoginUsername.focus();
    // inputLoginUsername.value = '';
    // inputLoginPin.value = '';
  }
});

const displayMovements = function (account, sorts = false) {
  containerMovements.innerHTML = '';

  //const movs = sorts ? account.movements.slice().sort((a, b) => { return a - b }) : account.movements.slice().reverse();
  const movs = sorts
    ? account.movements.slice().reverse()
    : account.movements.slice();
  movs.forEach((mov, i, arr) => {
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${
      mov.amount > 0 ? 'deposit' : 'withdrawal'
    }">${i + 1} - ${mov.amount > 0 ? 'deposit' : 'withdrawal'}</div>
    <div class="movements__date">${mov.depositor}</div>          
      <div class="movements__value">${Math.abs(mov.amount)} €</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Displaying Current Balance.
const calcDisplayBalance = function (account) {
  // const str = localStorage.getItem("loggedIn");
  // const allAccounts = JSON.parse(str);
  // const curaccount = allAccounts.find(acc => acc.login == account.login);

  account.balance = account.movements
    .map((mov, i, arr) => {
      return mov.amount;
    })
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  //account.balance = account.movements.amount.reduce((acc, mov, i, arr) => acc + mov, 0);
  labelBalance.textContent = account.balance + '€';

  console.log(account.balance, 'Ye bjhi');
  // return account.balance
  // const allAcc = JSON.stringify(accounts);
  // localStorage.setItem("accounts", allAcc);
  //allAccounts.push(balance)
  //return curaccount.balance;
  // const allAcc = JSON.stringify(accounts);
  // localStorage.setItem("accounts", allAcc);
  //console.log(curaccount, "New Current Accc")
  // updateUI(curaccount);

  const curLogedin = JSON.parse(localStorage.getItem('loggedIn'));
  curLogedin.balance = account.balance;

  const allAcc = JSON.stringify(curLogedin);
  localStorage.setItem('loggedIn', allAcc);
};

//Display all Summary
const calcDisplaySummary = function (account) {
  //Display summary of all deposit
  const depositVal = account.movements
    .filter(mov => mov.amount > 0)
    .map((mov, i, arr) => {
      return mov.amount;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = depositVal + '€';

  //Display summery of all withdrawls
  const withdrawalVal = account.movements
    .filter(mov => mov.amount < 0)
    .map((mov, i, arr) => {
      return mov.amount;
    })
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = Math.abs(Number(withdrawalVal)) + '€';
};

const updateUI = function (acc) {
  //For Display movements now.
  displayMovements(acc, false);

  //for Display Balance
  calcDisplayBalance(acc);

  //for Display Summary
  calcDisplaySummary(acc);
};

const mainDisplay = function (ca) {
  containerApp.style.opacity = 1;
  labelWelcome.textContent = `Welcome ${ca.login}`;
  updateUI(ca);
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  formLogin.style.display = 'none';
  formLogout.style.display = 'block';
  signupBlockin.style.display = 'none';
};
if (curlog.status) {
  console.log(curlog, 'after refresh');
  mainDisplay(curlog);
}

// console.log(currentLoggedin, "New Try")

// Transfer the Amount from current Account to Other
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // const transferToInput = inputTransferTo.value;
  const transferToInput = selectedText02;
  const transferAmount = Number(inputTransferAmount.value);
  const str = localStorage.getItem('accounts');
  const allAccounts = JSON.parse(str);
  const receiverAccount = allAccounts.find((acc, i, arr) => {
    return acc.login === transferToInput;
  });

  const curClient = JSON.parse(localStorage.getItem('loggedIn'));
  // const pA = allAccounts.find((acc, i, arr) => {
  //   return acc.login === currentAccount.login;
  // });
  //updateUI(pA);
  const pA = curClient;
  console.log(pA, 'New Try');
  console.log(pA.balance);

  if (
    pA.balance > 0 &&
    transferAmount > 0 &&
    receiverAccount &&
    pA.balance >= transferAmount &&
    pA?.login !== receiverAccount.login
  ) {
    receiverAccount.movements.push({
      amount: transferAmount,
      depositor: 'Received from: ' + currentAccount.login,
    });
    //receiverAccount.movements.push(transferAmount);
    pA.movements.push({
      amount: -transferAmount,
      depositor: 'Sent to: ' + transferToInput,
    });
    //currentAccount.movements.push(-transferAmount);

    const allAcc = JSON.stringify(allAccounts);
    localStorage.setItem('accounts', allAcc);

    const currClientAfter = JSON.stringify(pA);
    localStorage.setItem('loggedIn', currClientAfter);

    updateUI(pA);

    inputTransferTo.value = '';
    inputTransferAmount.value = '';
  } else {
    alert('Balance is in sufficiant');
  }
});

//Remove the Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const accountToRemove = inputCloseUsername.value;
  const accToremovePin = Number(inputClosePin.value);

  const str = localStorage.getItem('accounts');
  const allAccounts = JSON.parse(str);

  const closeAccount = allAccounts.find(acc => acc.login === accountToRemove);

  const pA = allAccounts.find((acc, i, arr) => {
    return acc.login === currentAccount.login;
  });

  console.log(closeAccount);

  if (
    accToremovePin !== '' &&
    accountToRemove !== '' &&
    pA.id === accToremovePin
  ) {
    const caIndex = allAccounts.findIndex(acc => acc.login === pA.login);
    allAccounts.splice(caIndex, 1);

    containerApp.style.opacity = 0;
    formLogin.style.display = 'block';
    formLogout.style.display = 'none';

    labelWelcome.textContent = `${pA.login}'s Account has been removed`;
    signupBlockin.style.display = 'block';

    const allAcc = JSON.stringify(allAccounts);
    localStorage.setItem('accounts', allAcc);
    addUsers();

    // updateUI(pA);

    inputCloseUsername.value = inputClosePin.value = '';
  } else {
    const allAcc = JSON.stringify(allAccounts);
    localStorage.setItem('accounts', allAcc);
    updateUI(pA);

    inputCloseUsername.value = inputClosePin.value = '';
  }

  updateUI(pA);
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

//Deposit Loan to Current Account
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const depositAmount = Number(inputLoanAmount.value);
  const str = localStorage.getItem('loggedIn');
  const ppA = JSON.parse(str);

  // const pA = allAccounts.find((acc, i, arr) => {
  //   return acc.login === currentAccount.login;
  // });

  if (depositAmount !== '' && depositAmount > 0) {
    ppA.movements.push({ amount: depositAmount, depositor: 'Received Loan' });
    //currentAccount.movements.push(depositAmount);

    const allAcc = JSON.stringify(ppA);
    localStorage.setItem('loggedIn', allAcc);

    updateUI(ppA);
    inputLoanAmount.value = '';
  }
  updateUI(pA);
  inputLoanAmount.value = '';
});

//logout
btnLogout.addEventListener('click', function (e) {
  e.preventDefault();

  const curLogedin = JSON.parse(localStorage.getItem('loggedIn'));
  console.log(curLogedin);

  curLogedin.status = false;
  const allAccs = JSON.parse(localStorage.getItem('accounts'));
  console.log(allAccs);

  const cIndex = allAccs.findIndex(acc => acc.login == curLogedin.login);

  console.log(cIndex, 'IndexNum');

  const newRec = allAccs.splice(cIndex, 1, curLogedin);
  console.log(allAccs, 'updated Recordss');
  localStorage.setItem('accounts', JSON.stringify(allAccs));
  containerApp.style.opacity = 0;
  formLogin.style.display = 'block';
  formLogout.style.display = 'none';
  signupBlockin.style.display = 'block';
  labelWelcome.textContent = `See you soon ${curLogedin.login}`;
  window.localStorage.removeItem('loggedIn');
});

//Sorting

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  const str = localStorage.getItem('loggedIn');
  const currentClient = JSON.parse(str);

  //console.log(currentAccount, sorted)

  displayMovements(currentClient, !sorted);

  sorted = !sorted;

  if (sorted) {
    btnSort.innerHTML = '&uparrow;' + 'SORT';
  } else {
    btnSort.innerHTML = '&downarrow;' + 'SORT';
  }
});
//Currtent Date

const date = new Date();

document.querySelector('.date').textContent = date;

//signup
signupBlockin.addEventListener('click', function (e) {
  e.preventDefault();
  if (signupArea.style.display === 'table') {
    signupArea.style.display = 'none';
    formLogin.style.display = 'block';
    formLogout.style.display = 'none';
  } else {
    signupArea.style.display = 'table';
    containerApp.style.opacity = 0;
    formLogin.style.display = 'none';
    formLogout.style.display = 'none';
  }
  signupLogin.value = '';
  signupEmail.value = '';
  signupPassword.value = '';
  signupConfirmPassword.value = '';
});

signupButton.addEventListener('click', function (e) {
  e.preventDefault();

  const userlogin = signupLogin.value;
  const userEmail = signupEmail.value;
  const userPassword = Number(signupPassword.value);
  const userconfirmedPassword = Number(signupConfirmPassword.value);
  if (userlogin === '') {
    alert('Please Write the User Name');
    //userlogin.focus();
    return false;
  }

  if (
    userPassword === userconfirmedPassword &&
    userEmail !== '' &&
    userlogin !== ''
  ) {
    if (allLetter(userlogin)) {
      if (validateEmail(userEmail)) {
        accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        const checkEmail = accounts.find(acc => acc.email === userEmail);
        if (!checkEmail) {
          const move = {
            amount: 100,
            depositor: 'Self',
          };
          const movements = [move];

          let objectlast = {
            login: userlogin,
            id: userPassword,
            email: userEmail,
            movements: movements,
            status: false,
          };

          accounts.push(objectlast);

          console.log('these are accounts', accounts);
          // addMovements(accounts);

          // signupLogin.value = signupEmail.value = '';
          // signupPassword.value = '';
          // signupConfirmPassword.value = '';
          signupArea.style.display = 'none';
          formLogin.style.display = 'block';
          localStorage.setItem('accounts', JSON.stringify(accounts));
          labelWelcome.textContent = `To get started login`;
          addUsers();
          addUsers02();
        }
      }
    } else {
      labelWelcome.textContent = `Sorry User is already Exists`;

      // signupLogin.value = '';
      // signupEmail.value = '';
      // signupPassword.value = '';
      // signupConfirmPassword.value = '';
      addUsers();
      addUsers02();
    }
  } else {
    labelWelcome.textContent = `Try Again`;
  }
});

function allLetter(uname) {
  console.log('check');
  //var letters = /^[A-Za-z]+$/;
  var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
  //var letters = isNaN(parseInt(uname))
  if (uname.match(letters)) {
    return true;
  } else {
    alert('Username must have alphabet characters only');
    username.focus();
    return false;
  }
}

function validateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.match(mailformat)) {
    return true;
  } else {
    alert('You have entered an invalid email address!');
    signupEmail.focus();
    return false;
  }
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
accounts = JSON.parse(localStorage.getItem('accounts')) || [];
const bankDepositSum = accounts.map(acc => acc.movements);

console.log(bankDepositSum);

/////////////////////////////////////////////////
