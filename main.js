const app = document.getElementById('app')

app.innerHTML = 
`<!-- SLIDER -->
    <section class="slider">
        <h1>Bienvenid@</h1>
        <img id="perrito1" class="slider-img" src="https://www.rover.com/blog/wp-content/uploads/2018/11/golden-retriever-2061715_1920.jpg" alt="imagen-perrito">
        <img id="perrito2" class="hidden" src="https://arquivet.com/img/cms/De%20que%20esta%20hecho%20el%20pienso%20para%20perros.jpg" alt="imagen-perrito">
        <img id="perrito3" class="hidden" src="https://www.puppyschool.co.uk/media/bb89e57566a1e3ef6e76318ee3139adc/terrier-puppy-running-on-grass-outside.jpg" alt="imagen-perrito">
        <img id="perrito4" class="hidden" src="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/1598895444938-PBYFU3BBS0V2CM2PQU6Z/r-d-smith-mwzVasRlDpc-unsplash.jpg" alt="imagen-perrito">


        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="next" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="prev" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        
    </section>

    <!-- NAVBAR -->
    <nav class="navbar">

        <img src="https://media.istockphoto.com/id/931785704/vector/paw_print.jpg?s=612x612&w=0&k=20&c=CXBPHlf7XHdJiiOULJrI9nGZjVNAj7cqnkM_eDyDdCU=" alt="paw-icon">

        <ul>
            <li>Comprar</li>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
        </ul>

    </nav>

    <!-- SUBSCRIBIRSE -->
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


/* SLIDER */
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')

    //RIGHT ARROW
    var selected = [1,2,4]
    function SelectNext(){
    
        //'selected' yet initialized
        var selectorCurrent = document.getElementById(String(`perrito${selected[0]}`))
        var selectorNext = document.getElementById(String(`perrito${selected[1]}`))
    
        //hide current image
        selectorCurrent.classList.remove("slider-img")
        selectorCurrent.classList.add("hidden")
    
        //display next image
        selectorNext.classList.remove("hidden")
        selectorNext.classList.add("slider-img")
    
        //'selected' now has the next position
        selected[0]++
        selected = SelectedImage()
    }

    function SelectPrev(){
    
        //'selected' yet initialized
        var selectorCurrent = document.getElementById(String(`perrito${selected[0]}`))
        var selectorNext = document.getElementById(String(`perrito${selected[2]}`))
    
        //hide current image
        selectorCurrent.classList.remove("slider-img")
        selectorCurrent.classList.add("hidden")
    
        //display prev image
        selectorNext.classList.remove("hidden")
        selectorNext.classList.add("slider-img")
    
        //'selected' now has the next position
        selected[0]--
        selected = SelectedImage()
    }

    function SelectedImage(){
    
        switch(selected[0]){
            case 0:
                selected = [4,1,3]
                break
            case 1:
                selected = [1,2,4]
                break
            case 2:
                selected = [2,3,1]
                break
    
            case 3:
                selected = [3,4,2]
                break
    
            case 4:
                selected = [4,1,3]
                break
    
            case 5:
                selected = [1,2,4]
                break
    
        }

        return selected
    }

    //LEFT ARROW
    
    next.addEventListener('click', SelectNext)
    prev.addEventListener('click', SelectPrev)
