function checkCashRegister(price, cash, cid) {
    let register = { status: "OPEN", change: []};
    var secondCid = cid;
    let c2gib = cash-price;
    let totalcash = 0;
    
    const currency = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
    
    let emptyCid = cid.slice();
    for (let i = 0; i < secondCid.length; i++) {
      totalcash += secondCid[i][1];
    }
  
    for (let i = 0; i < secondCid.length; i++) {
        emptyCid[i][1] = 0;
    }
  
    if (totalcash < c2gib) {
      register.status = "INSUFFICIENT_FUNDS";
      secondCid = [];
      register.change = secondCid;
      return register;
    }
    else if (totalcash === c2gib) {
      register.status = "CLOSED";
      register.change = secondCid;
      return register;
    }
    else {
      let z = secondCid.length;
      console.log(secondCid[z][0]);
      while (c2gib > 0 || z != 0) {
        if (checkChangeAvailable(c2gib,secondCid,z,currency)) {
          c2gib -= currency[secondCid[z][0]];
          emptyCid[z][1] += currency[secondCid[z][0]];
          secondCid[z][1] -= currency[secondCid[z][0]];
        }
        else {
          z--;
        }
      }
      if (c2gib != 0) {
        register.status = "INSUFFICIENT_FUNDS";
        register.change = [];
        return register;
      }
  
    }
    for (let i = 0; i < emptyCid.length; i++){
      if (emptyCid[i][1] === 0){
        emptyCid.splice(i-1, 1);
      }
    }
  
    console.log(emptyCid);
    register.change = secondCid;
    console.log(register);
  return register;
  
  }
  
  function checkChangeAvailable(c2gib, secondCid, z, currency){
  return (c2gib > currency[secondCid[z][0]] && secondCid[z][1] >= currency[secondCid[z][0]]);
  }
  checkCashRegister(19.5, 20, [["PENNY", 0.05], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) function checkCashRegister(price, cash, cid) {
  let register = { status: "OPEN", change: []};
  let secondCid = cid;
  const currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let totalcash = 0;

  for (let i = 0; i < secondCid.length; i++) {
    totalcash += secondCid[i][1];
  }

  if (totalcash < cash - price) {
    register.status = "INSUFFICIENT_FUNDS";
    secondCid = [];
    register.change = secondCid;
    return register;
  }
  else if (totalcash === cash - price) {
    register.status = "CLOSED";
    for (let i = 0; i < secondCid.length; i++) {
      secondCid[i][1] = 0;
    }
    register.change = secondCid;
    return register;
  }
  else {
    let c2gib = cash - price;
    let i = secondCid.length;
    while (c2gib != 0 || i != 0) {
      if (c2gib > secondCid[i][1] - currency[secondCid[i][0]]) {
        c2gib -= secondCid[i][1] - currency[secondCid[i][0]];
        secondCid[i][1] -= currency[secondCid[i][0]];
      }
      else {
        i--;
      }
    }
    if (c2gib != 0) {
      register.status = "INSUFFICIENT_FUNDS";
      register.change = [];
      return register;
    }

  }
  register.change = secondCid;
  console.log(register);
return register;


}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);