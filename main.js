
const arrProducts = [
    {img: "imgs/01.png", price: "R$ 50,00"},
    {img: "imgs/02.png", price: "R$ 50,00"},
    {img: "imgs/03.png", price: "R$ 50,00"},
    {img: "imgs/04.png", price: "R$ 50,00"}
]

const fundo = document.querySelector('.modal-full');
const fundoFalso = document.querySelector('.close');
const listaPrices = document.querySelectorAll('.li-modal');
const contModal = document.querySelector('.modalCont');

const imgModal = document.querySelector('.modalCont img');
const priceModal = document.querySelector('.modalCont section p');


fundoFalso.addEventListener('click', () => {
    fundo.style.display = 'none';
})

for(const li of listaPrices) {
    li.addEventListener('click', function() {
        const idProduct = li.getAttribute('data');

        imgModal.removeAttribute('src')
        imgModal.setAttribute('src', arrProducts[idProduct].img);

        priceModal.innerHTML = arrProducts[idProduct].price;

        fundo.style.display = 'block'
        
    })
}