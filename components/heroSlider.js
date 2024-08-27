export const heroSlider = () => {
    return `<!-- SLIDER -->
    <section class="slider">
        <div class='heroStatement'>
            <img class='logo' src='https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724793820/DOM-perritos/mgrq5oehokgfcwzubtxr.png'>
            <h4>Porque tu peludo <br>merece lo mejor</h4>
        </div>
        <img id="perrito1" class="slider-img" src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724785598/DOM-perritos/hsrdkxoojgrexzgrmewz.jpg" alt="imagen-perrito">
        <img id="perrito2" class="hidden" src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724785884/DOM-perritos/q5wtggbroq03qgslpyg1.jpg" alt="imagen-comida-perrito">
        <img id="perrito3" class="hidden" src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724786480/DOM-perritos/xnpcrd3fst2v0qbhhwyg.jpg" alt="imagen-perrito">
        <img id="perrito4" class="hidden" src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724788208/DOM-perritos/nurfvcv4r7qrzng2kvov.jpg" alt="imagen-perrito">


        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="next" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="prev" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        
    </section>`
}

var selected = [1,2,4]

export function SelectNext(){

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

export function SelectPrev(){

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

export function SelectedImage(){

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