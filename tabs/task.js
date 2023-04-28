const tabs = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

function switching () {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].className === "tab tab_active") {
            tabs[i].className = "tab";
            tabContent[i].className = "tab__content"
        }
    }
    this.className = "tab tab_active";
    tabContent[tabs.indexOf(this)].className = "tab__content tab__content_active"
}

tabs.forEach((item) => {
    item.addEventListener("click", switching)
});