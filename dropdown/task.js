const dropValue = document.querySelector(".dropdown__value")
const dropList = document.querySelector(".dropdown__list")
const dropLink = document.querySelectorAll(".dropdown__link")

function dropListActive () {
    dropList.classList.add('dropdown__list_active')
};

function dropListClose (item) {
    item.preventDefault();
    dropValue.textContent = this.textContent;
    dropList.classList.remove('dropdown__list_active')
};

dropValue.addEventListener('click', dropListActive);

for (let p = 0; p < dropLink.length; p++) {
    dropLink[p].addEventListener('click', dropListClose)
};