if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
const userPassword = prompt("შეიყვანეთ პაროლი");

if (userPassword === "geolabreact123") {
  console.log("წვდომა დაშვებულია");
} else {
  console.log("წვდომა აკრძალულია");
}

let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("20-მდე ლუწი რიცხვების ჯამია: ", sum);

let balance = 1000;
let userChoice;
do {
  userChoice = prompt(
    "აირჩიე ოპერაცია:\n1 - შეამოწმე ბალანსი\n2 - შეტანა\n3 - გატანა\n4 - გამოსვლა",
  );
  switch (Number(userChoice)) {
    case 1:
      alert("შენი ბალანსია: " + balance);
      break;
    case 2:
      let depositAmount = +prompt("შეიყვანეთ დასამატებელი თანხა:");
      balance += depositAmount;
      alert("განახლებული ბალანსი: " + balance);
      break;
    case 3:
      let creditAmount = +prompt("შეიყვანეთ გასატანი თანხა:");
      if (creditAmount > balance) {
        alert("ბალანსზე არაა საკმარისი თანხა");
      } else {
        balance -= creditAmount;
        alert("განახლებული ბალანსი: " + balance);
      }
      break;
    case 4:
    case 0:
      break;
    default:
      alert("შეყვანილი მონაცემი არაზუსტია");
  }
} while (Number(userChoice) !== 4 && userChoice !== null);
