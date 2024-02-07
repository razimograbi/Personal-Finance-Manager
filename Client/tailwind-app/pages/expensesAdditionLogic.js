const categoryButton = document.getElementById('categoryButton');
const dropdown = document.getElementById('dropdown');
const questionMark = document.getElementById('questionMark');
const infoMessage = document.getElementById('infoMessage');
const moneyLabel = document.getElementById('money-label');
const hamburgButton = document.getElementById('hamburg-button');
const navbarUser = document.getElementById('navbar-user');
const profilePictureButton = document.getElementById('profile-pic-button');
const dropdownLinks = document.querySelectorAll('.dropdown-link');



// handling hovering over the question mark
questionMark.addEventListener('mouseover', ()=>{
    infoMessage.classList.remove('hidden');
});
// handling hovering out of the question mark
questionMark.addEventListener('mouseout', ()=>{
    infoMessage.classList.add('hidden');
});

const toggleCategoryList = () => dropdown.classList.toggle('hidden');

//handling category
categoryButton.addEventListener('click', toggleCategoryList);


dropdownLinks.forEach(link => {
    link.addEventListener('click', (e)=>{
      
      e.preventDefault(); // to make sure that the link doesnt activate when clicked

      categoryButton.innerHTML = link.textContent + `<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>`
      toggleCategoryList();

        if(link.textContent === "Loan"){
            moneyLabel.textContent = "Amount Of Borrowed Money"
        }else{
            moneyLabel.textContent = "Amount Spent";
        }

    });
});


// hamburg button handle

hamburgButton.addEventListener('click', () =>{
    navbarUser.classList.toggle('hidden');
});


//profile picture click
profilePictureButton.addEventListener('click', () =>{
    document.getElementById('profile-pic-dropdown').classList.toggle('hidden');
});

