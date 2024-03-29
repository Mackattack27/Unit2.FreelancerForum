// const freelancers = [
//     { name: "Dr. Slice", price: 25, occupation: "gardener" },
//     { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//     { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//     { name: "Prof. Prism", price: 81, occupation: "teacher" },
//     { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//     { name: "Prof. Spark", price: 76, occupation: "programmer" },
//     { name: "Dr. Wire", price: 47, occupation: "teacher" },
//     { name: "Prof. Goose", price: 72, occupation: "driver" },

// ];

const freelancers = [];

function calculateAveragePrice() {
  let total = 0;
  for (const freelancer of freelancers) {
    total += freelancer.startingPrice;
  }
  const averagePrice = total / freelancers.length;
  return averagePrice.toFixed(2); // Round to 2 decimal places
}

function displayFreelancers() {
  const freelancersList = document.getElementById("freelancers-list");
  freelancersList.innerHTML = ""; // Clear previous list

  freelancers.forEach((freelancer) => {
    const freelancerItem = document.createElement("div");
    freelancerItem.classList.add("freelancer");
    freelancerItem.innerHTML = `
          <p>Name: ${freelancer.name}</p>
          <p>Occupation: ${freelancer.occupation}</p>
          <p>Starting Price: $${freelancer.startingPrice}</p>
      `;
    freelancersList.appendChild(freelancerItem);
  });
}

function displayAveragePrice() {
  const averagePriceElement = document.getElementById("average-price-value");
  averagePriceElement.textContent = "$" + calculateAveragePrice();
}

function addFreelancer(name, occupation, startingPrice) {
  const newFreelancer = { name, occupation, startingPrice };
  freelancers.push(newFreelancer);
  displayFreelancers();
  displayAveragePrice();
}

// Initial freelancers
addFreelancer("Alice", "Writer", 30);
addFreelancer("Bob", "Teacher", 50);

// New freelancers (sample data)
setTimeout(() => {
  addFreelancer("Carol", "Programmer", 70);
}, 2000);

// const root = document.createElement("div");

//  document.body.appendChild(root);

//  freelancers.forEach(element => {

//     root.innerHTML="Hello";

//  })

// root

//Parans are for parameters and using functions

//console.log("Hello")

// curlies {} are for going into the logic of a for loop, if statement,

// or function

//for(let i =0 ; i < 3; i++){

//console.log(i)

//}

//brackets are for arrays

//const arr = [1,2,3,4]

//arr[0]
