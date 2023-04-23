const tab = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener ('click', () => {
        
        const tabActive = document.querySelector('.tab_active')
        const tabContentActive = document.querySelector('.tab__content_active')

        tab[i].classList.add('tab_active')
        tabActive.classList.remove('tab_active')

        tabContent[tab.indexOf(tab[i])].classList.add('tab__content_active')
        tabContentActive.classList.remove('tab__content_active')
    })
};