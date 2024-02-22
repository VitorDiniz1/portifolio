let trilho = document.getElementById('trilho')

let body = document.querySelector('body')

trilho.addEventListener('click',()=>{
    trilho.classList.toggle('ligth')
    body.classList.toggle('ligth')
})