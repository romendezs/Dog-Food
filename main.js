import './CSS/style.css'
import {productSlider} from './components/product-slider';
import {heroSlider,SelectedImage, SelectPrev, SelectNext} from './components/heroSlider';


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
document.querySelector('#app').innerHTML += `<!-- SUBSCRIBIRSE -->
    <section class="subscribe">
        <h2>¡Subscríbete para obtener las mejores ofertas!</h2>

        <form class="subscribe-form" action="">
            <label for="Name">Nombre:</label>
            <input type="text" id="nombre" placeholder="Escribe tu nombre">

            <label for="Email">Email:</label>
            <input type="email" id="email" placeholder="Correo Electronico">

            <input type="submit" id="submit" value="Enviar">
        </form>
    </section>`

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