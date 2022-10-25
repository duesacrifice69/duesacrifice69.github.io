function validateForm() {
  let uname = document.getElementById("uname").value;
  let pw = document.getElementById("password").value;
  let pwc = document.getElementById("cpword").value;
  let dob = document.getElementById("bday").value;
  //let a = document.getElementById("myForm").value;  
  if (uname.length < 6) {
    document.getElementById("umessage").innerHTML = "**Username must be more than 6 letters";
  } else
    document.getElementById("umessage").innerHTML = "";

  if (pwc !== pw) {
    document.getElementById("cpmessage").innerHTML = "**Password doesn't match";
  } else
    document.getElementById("cpmessage").innerHTML = "";

  let age = Math.abs(new Date(Date.now() - new Date(dob).getTime()).getUTCFullYear() - 1970);

  if (age < 18) {
    document.getElementById("bdaymsg").innerHTML = "**You must be 18+";
  } else
    document.getElementById("bdaymsg").innerHTML = "";

  if ((uname.length < 6) || (pwc !== pw) || (age < 18))
    return false;
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
    if (x === null)
      return alert("Successfully cancelled !!");
    if (isNaN(billPay.bill[i]))
      alert("Plz input a valid numbers !!");

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
var chirath = {
  name: ["CSS"],
  Age: [17],
}

var fullName = ["chirath", "timodh", "rajapaksha"];
var j;
for (j of fullName) {
  console.log(j);
}