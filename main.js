import './CSS/style.css'
import {productSlider} from './components/product-slider';
import {heroSlider,SelectedImage, SelectPrev, SelectNext} from './components/heroSlider';
import { subscribeForm, addSubs} from './components/subscribe-form';


document.querySelector('#app').innerHTML = heroSlider();

document.querySelector('#app').innerHTML += `<!-- NAVBAR -->
    <nav class="navbar">

        <img src="https://media.istockphoto.com/id/931785704/vector/paw_print.jpg?s=612x612&w=0&k=20&c=CXBPHlf7XHdJiiOULJrI9nGZjVNAj7cqnkM_eDyDdCU=" alt="paw-icon">

        <ul>
            <li>Comprar</li>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
        </ul>

    </nav>`
document.querySelector('#app').innerHTML += productSlider();
document.querySelector('#app').innerHTML += subscribeForm();

    //SLIDER 
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')

    //RIGHT ARROW

    SelectNext()

    SelectPrev()

    SelectedImage()

    setInterval(() => {
        SelectNext();
    },5000);

    //LEFT ARROW
    
    next.addEventListener('click', SelectNext)
    prev.addEventListener('click', SelectPrev)

    //SUBSCRIBE-FORM
    document.querySelector('.subscribe-form').addEventListener('submit', addSubs)

