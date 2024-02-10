//we need to add the navigationUserScreen.js file
// Razi, rearrange it with applyDarkTheme and expensesAddition.
// You need to separate the navigation script from the page script.
//

document.addEventListener("DOMContentLoaded", function () {
  // Function to insert navigation bar
  function insertNavigationBar() {
    const navHTML = `
    <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-white font-bold text-xl">Budget Buddy</a>
      <div
        class="container mx-auto flex items-center justify-between gap-8 relative"
      >
        <button
          id="menuBtn"
          class="block sm:hidden bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 ml-auto"
        >
          &#9776;
          <!-- Hamburger Icon -->
        </button>
        <div class="sm:flex space-x-4 hidden">
          <a href="#" class="hover:text-gray-300">Home</a>
          <a href="features.html" class="hover:text-gray-300">Features</a>
          <a href="aboutUs.html" class="hover:text-gray-300">About Us</a>
          <a href="contactUs.html" class="hover:text-gray-300"
            >Contact Us</a
          >
        </div>

        <div class="items-center sm:flex mr-2">
          <button
            type="button"
            id="profile-pic-button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full"
              src="../Images/avatar-anisha.png"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            id="profile-pic-dropdown"
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-11 right-1"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white"
                >Bonnie Green</span
              >
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >razi@mograbi.net</span
              >
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="../index.html"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</a
                >
              </li>
              <li>
                <button
                  type="button"
                  data-toggle-dark="dark"
                  class="flex items-center ml-2 mt-1 w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-700 rounded-lg hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    data-toggle-icon="moon"
                    class="moon w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path
                      d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"
                    ></path>
                  </svg>
                  <svg
                    data-toggle-icon="sun"
                    class="sun w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"
                    ></path>
                  </svg>
                  <span class="sr-only">Toggle dark/light mode class</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="popupmenu"
          class="justify-start gap-4 hidden sm:hidden absolute bg-blue-400 width-[70px] top-[60px] rounded-lg left-0 right-0 p-4 pb-6 border-black shadow"
        >
          <a href="#" class="text-white hover:text-gray-300 block">Home</a>
          <a href="#features" class="text-white hover:text-gray-300 block"
            >Features</a
          >
        </div>
      </div>
    </div>
  </nav>
          `;

    // Insert navigation bar HTML into the element with id "navbar-container"
      document.getElementById("navbar-container").innerHTML = navHTML;

    const profilePictureButton = document.getElementById("profile-pic-button");
    profilePictureButton.addEventListener("click", () => {
      document
        .getElementById("profile-pic-dropdown")
        .classList.toggle("hidden");
    });

    const menuButton = document
        .getElementById("menuBtn")
        .addEventListener("click", () => {
          document.getElementById("popupmenu").classList.toggle("hidden");
});

/*
this file handles the logic behind setting a dark mode/light mode on the website.

To Use It : you must have a clickable dom object(button,div,anything) with a class of sun
and another clickable dom object(button,div,anything) with a class of moon.

If the sun object is clicked a light mode will be toggled,
if the moon object is clicked a drark mode will be toggeld.

*/

const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');


const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

//toggle light/dark mode function
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck = () =>{
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};


const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};


sunIcon.addEventListener("click", () =>{
    themeSwitch();
});

moonIcon.addEventListener("click", () =>{
    themeSwitch();
});

themeCheck();


  }

  // Call the function to insert the navigation bar
  insertNavigationBar();
});
