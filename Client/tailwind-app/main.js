document.addEventListener("DOMContentLoaded", function () {
  // Function to insert navigation bar
  function insertNavigationBar() {
    const navHTML = `
              <nav class="bg-blue-500 p-4">
                  <div class="container mx-auto flex justify-between items-center">
                      <a href="#" class="text-white font-bold text-xl">Budget Buddy</a>
                      <div class="container mx-auto flex items-center justify-between relative">
                          <button id="menuBtn" class="block sm:hidden bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 ml-auto">
                              &#9776; <!-- Hamburger Icon -->
                          </button>
                          <div class="sm:flex space-x-4 hidden">
                              <a href="mainuser.html" class="hover:text-gray-300">Home</a>
                              <a href="#features" class="hover:text-gray-300">Features</a>
                              <a href="/pages/aboutUs.html" class="hover:text-gray-300">About Us</a>
                              <a href="/pages/contactUs.html" class="hover:text-gray-300">Contact Us</a>
                          </div>
                          <div class="items-center sm:flex hidden">
                              <a href="/pages/login.html" class="mr-4 bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 block">Login</a>
                              <a href="/pages/register.html" class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 block">Register</a>
                          </div>
                          <div id="popupmenu" class="justify-start z-40 gap-4 hidden sm:hidden absolute bg-slate-600 width-[70px] top-[60px] rounded-lg left-0 right-0 p-4 pb-6">
                              <a href="mainuser.html" class="hover:text-gray-300 block">Home</a>
                              <a href="#features" class="hover:text-gray-300 block">Features</a>
                              <a href="/pages/aboutUs.html" class="hover:text-gray-300 block">About Us</a>
                              <a href="/pages/contactUs.html" class="hover:text-gray-300 block">Contact Us</a>
                              <a href="/pages/login.html" class="mr-4 bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 block my-2">Login</a>
                              <a href="/pages/register.html" class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 block">Register</a>
                          </div>
                      </div>
                  </div>
              </nav>
          `;

    // Insert navigation bar HTML into the element with id "navbar-container"
    document.getElementById("navbar-container").innerHTML = navHTML;

    const menuButton = document
      .getElementById("menuBtn")
      .addEventListener("click", () => {
        document.getElementById("popupmenu").classList.toggle("hidden");
      });
  }

  // Call the function to insert the navigation bar
  insertNavigationBar();
});

// Fake data for financial goals
const goals = [
  { name: "Buy a BMW", goalAmount: 50000, amountSaved: 25000 },
  { name: "Vacation in Hawaii", goalAmount: 100000, amountSaved: 2000 },
  // Add more goals as needed
];

// Function to generate HTML for a financial goal
const goalRow = (goal) => {
  const percentage = (goal.amountSaved / goal.goalAmount) * 100;
  const remaining = goal.goalAmount - goal.amountSaved;
  const dasharray = `${percentage} 100`;

  return `
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="bg-blue-700 dark:bg-blue-500 text-white p-4 mb-4 flex items-center">
      <div class="flex-grow">
          <h2 class="text-xl font-bold">${goal.name}</h2>
          <p>Goal Amount: $${goal.goalAmount}</p>
          <p>Amount Saved: $${goal.amountSaved}</p>
          <p>Remaining: $${remaining}</p>
      </div>
      <div class="relative w-20 h-20">
          <svg viewBox="0 0 36 36" class="circular-chart">
              <path class="circle-bg" fill="white" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path class="circle" fill="white" stroke-dasharray="${
                (goal.amountSaved / goal.goalAmount) * 100
              }, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" stroke="black"/>
              <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="0.4rem" fill="black">${(
                (goal.amountSaved / goal.goalAmount) *
                100
              ).toFixed(2)}%</text>
          </svg>
      </div>
    </div>
  </div>
  
  

    `;
};

// Function to create the goals section
const createGoalsSection = () => {
  const goalsContainer = document.getElementById("goalsContainer");
  goals.forEach((goal) => {
    goalsContainer.insertAdjacentHTML("beforeend", goalRow(goal));
  });
};
