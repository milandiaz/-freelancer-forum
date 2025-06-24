/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  // TODO
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE[
      Math.floor(Math.random() * (MAX_RATE - MIN_RATE + 1)) + MIN_RATE
    ];

  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

function averageRate(freelancers) {
  const rateSum = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  const average = (rateSum / freelancers.length).toFixed(5);

  return average;
}

const avrgRate = averageRate(freelancers);

function freelancerRow(freelancer) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>$${freelancer.rate}</td>
  `;

  return tr;
}

function FreelancerRows() {}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <p>The average rate is $${avrgRate}.</p>
  <table>
  <thead>
  <tr>
  <th>NAME</th>
  <th>OCCUPATION</th>
  <th>RATE</th>
  </tr>
  </thead>
  <tbody id="FreelancerRows"></tbody>
  </table>

`;
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();
