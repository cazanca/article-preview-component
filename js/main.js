const social = document.querySelector('.social')
const shareOpen = document.querySelector('.share svg')
const share = document.querySelector('.share')
const shareClose = document.querySelector('.share__icon svg')
shareOpen.addEventListener('click', () => {
    social.classList.toggle('hidden')
    share.classList.toggle('change')
    shareOpen.style.fill = "#fff";
})

if(shareClose){
    shareClose.addEventListener('click', () => {
        social.classList.add('hidden')
    })
}
