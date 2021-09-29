const bankRequest = (balance, requests) => {
  let index = 1;
  for (let request of requests) {
    let queryList = request.split(" ");

    let type = queryList[0];
    let operation = bankOperationSelector(type);

    if (queryList.length <= 3) {
      let acc = Number(queryList[1]) - 1;
      let amount = Number(queryList[2]);
      //   console.log(queryList);

      //checking for invalid account
      if (!accCheck(acc, balance)) {
        return [-index];
      }

      balance = operation(balance, acc, amount);
    } else {
      let accFrom = Number(queryList[1]) - 1;
      let accTo = Number(queryList[2]) - 1;

      //checking for invalid from account
      if (!accCheck(accFrom, balance)) {
        return [-index];
      }
      //checking for invalid To account
      if (!accCheck(accTo, balance)) {
        return [-index];
      }

      let amount = Number(queryList[3]);
      balance = operation(balance, accFrom, accTo, amount);
    }

    // if operation fails, then we return the position from which it failed.
    if (balance === "invalid") {
      return [-index];
    }

    index++;
  }
  return balance;
};

// checks for the valid account and returns true, else false;
const accCheck = (acc, balance) => {
  if (acc >= balance.length) return false;
  return true;
};

const withdraw = (balance, acc, amt) => {
  //   console.log("withdraw : ", balance);
  balance[acc] -= amt;

  // when value of any account goes to negative numbers, then we consider it as invalid transaction.
  if (balance[acc] < 0) {
    return "invalid";
  }
  return balance;
};

const deposit = (balance, acc, amt) => {
  //   console.log("deposit : ", balance);
  balance[acc] += amt;
  if (balance[acc] < 0) {
    return "invalid";
  }
  return balance;
};

const transfer = (balance, accFrom, accTo, amt) => {
  //   console.log("transfer : ", balance, accFrom, accTo);
  balance[accFrom] -= amt;
  balance[accTo] += amt;
  if (balance[accTo] < 0 || balance[accFrom] < 0) {
    return "invalid";
  }
  return balance;
};

const bankOperationSelector = (operation) => {
  switch (operation) {
    case "transfer":
      return transfer;
    case "withdraw":
      return withdraw;
    case "deposit":
      return deposit;
  }
};

console.time("start");
console.log(
  bankRequest(
    [10, 100, 20, 50, 30],
    ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"]
  )
);
// console.timeEnd("start");
// console.time("start");
console.log(
  bankRequest(
    [20, 1000, 500, 40, 90],
    ["deposit 3 400", "transfer 1 2 30", "withdraw 4 50"]
  )
);
console.timeEnd("start");
