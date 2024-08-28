import './CSS/style.css'
import {productSlider} from './components/product-slider';
import {heroSlider,SelectedImage, SelectPrev, SelectNext} from './components/heroSlider';
import { subscribeForm, addSubs} from './components/subscribe-form';
import { navMenu} from './components/navMenu';


document.querySelector('#app').innerHTML = heroSlider();
document.querySelector('#app').innerHTML += navMenu();
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

    //NAVIGATION

    const navigation = document.querySelector('.navigation');
    const menuToggle = document.querySelector('.menuToggle');

    const switchStyle = () => {
        navigation.classList.toggle('activeEm');
        menuToggle.classList.toggle('activeMe');
    }

    menuToggle.addEventListener('click',switchStyle)

    //SUBSCRIBE-FORM
    document.querySelector('.subscribe-form').addEventListener('submit', addSubs)