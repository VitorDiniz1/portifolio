let trilho = document.getElementById('trilho')

let body = document.querySelector('body')

trilho.addEventListener('click',()=>{
    trilho.classList.toggle('ligth')
    body.classList.toggle('ligth')
})


function aparecerMenu(){
    let menuMobile = document.querySelector('.menu-mobile')

    if(menuMobile.classList.contains('abrir')){
        menuMobile.classList.remove('abrir')
        document.querySelector('.icon').src="Menu_icon_icon-icons.com_71858.png"
    }else{
        menuMobile.classList.add('abrir')
        document.querySelector('.icon').src="x.webp"
    }
}