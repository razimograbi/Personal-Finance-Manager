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
          <a href="userHome.html" class="hover:text-gray-300">Home</a>
          <a href="budgetTracking.html" class="hover:text-gray-300">Budget Tracker</a>
          <a href="goals.html" class="hover:text-gray-300">Goals</a>
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
          class="z-40 justify-start gap-4 hidden sm:hidden absolute bg-blue-400 width-[70px] top-[60px] rounded-lg left-0 right-0 p-4 pb-6 border-black shadow"
        >
          <a href="userHome.html" class="text-white hover:text-gray-300 block">Home</a>
          <a href="budgetTracking.html" class="text-white hover:text-gray-300 block" >Budget Tracker</a>
          <a href="goals.html" class="text-white hover:text-gray-300 block">Goals</a>
          <a href="contactUs.html" class="text-white hover:text-gray-300 block" >Contact Us</a>
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

    const sunIcon = document.querySelector(".sun");
    const moonIcon = document.querySelector(".moon");

    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    //toggle light/dark mode function
    const iconToggle = () => {
      moonIcon.classList.toggle("display-none");
      sunIcon.classList.toggle("display-none");
    };

    const themeCheck = () => {
      if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
      }
      sunIcon.classList.add("display-none");
    };

    const themeSwitch = () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
      }
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      iconToggle();
    };

    sunIcon.addEventListener("click", () => {
      themeSwitch();
    });

    moonIcon.addEventListener("click", () => {
      themeSwitch();
    });

    themeCheck();
  }

  function insertFooterBar() {
    const footerHTML = `
    <footer class="bg-white dark:bg-gray-900 w-full mt-10">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="dark:text-white text-black font-bold text-xl">Budget Buddy</a>

          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Resources
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline"
                  >Budget Buddy</a
                >
              </li>
              <li>
                <a href="#" class="hover:underline"
                  >Tailwind CSS</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Follow us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a
                  href="https://github.com/razimograbi/Personal-Finance-Manager"
                  class="hover:underline"
                  >Github</a
                >
              </li>
              <li>
                <a
                  href=""
                  class="hover:underline"
                  >Discord</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024
          <a href="" class="hover:underline">Budget Buddy™</a
          >. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns=""
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns=""
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path
                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
              />
            </svg>
            <span class="sr-only">Discord community</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns=""
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns=""
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns=""
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
        `;

    document.getElementById("footer_container").innerHTML = footerHTML;
  }
  // Call the function to insert the navigation bar
  //insertFooterBar();
  // Call the function to insert the navigation bar
  insertNavigationBar();
});
