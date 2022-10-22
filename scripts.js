function validateForm() {
  const form = document.getElementById;
  let a = form["uname"].textContent;
  if (a.length < 6) {
    console.log("Your username is unavailable!!");
    return false;
  }
  let h = form["password"].value;
  if (h.length < 8) {
    console.log("Password must be more than 8 letters!!");
    return false;
  }
  let i = form["repword"].value;
  if (i !== h) {
    console.log("Your password not matching!!");
    return false;
  }
  let j = form["age"].value;
  if (j < 18) {
    console.log("Your should be 18+!!");
    return false;
  }
  let b = form["email"].value;
  if (b === null) {
    console.log("Your email is wrong !!");
    return false;
  }
  let c = form["message"].value;
  if (c.length < 10) {
    console.log("this message is too small !!");
    return false;
  }
  let d = form["fname"].value;
  if (d === null) {
    console.log("You must fill all sections !!");
    return false;
  }
  let e = form["fname"].value;
  if (e === null) {
    console.log("You must fill all sections !!");
    return false;
  }
  let f = form["fname"].value;
  if (f === null) {
    console.log("You must fill all sections !!");
    return false;
  }
  let g = form["fname"].value;
  if (g === null) {
    console.log("You must fill all sections !!");
    return false;
  }
}

function tipCalculator() {
  let billPay = {
    bill: [],
    tip: [],
    final: [],
    callTip: function () {
      let i;
      for (i = 0; i < this.bill.length; i++) {
        let tp;
        if (this.bill[i] < 1000) {
          tp = 20 / 100;
        } else if (this.bill[i] < 1500 && this.bill[i] >= 1000) {
          tp = 15 / 100;
        } else {
          tp = 10 / 100;
        }
        this.tip[i] = this.bill[i] * tp;
        this.final[i] = this.bill[i] + this.tip[i];
      }
    },
  };
  for (i = 0; i < 5; i++) {
    let x = prompt("Enter bill amount: ");
    billPay.bill[i] = parseInt(x);
    if (x === null) {
      return alert("Successfully cancelled !!");
    } else if (isNaN(billPay.bill[i])) {
      alert("Plz input a valid numbers !!");
    }
  }
  billPay.callTip();
  console.log(billPay);
  alert("final amounts are " + billPay.final);
}

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("bodyid").style.backgroundColor = "#" + randomColor;
}

function clickEvent() {
  document.getElementById("pid").textContent = "Shaka Boom !!!";
}
