$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

export const productSlider = () => {
    return `<section>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#94d364"></stop><stop offset="95%" stop-color="#64d3a9"></stop></linearGradient></defs><path d="M 0,400 L 0,75 C 85.82142857142858,80.78571428571428 171.64285714285717,86.57142857142857 301,96 C 430.35714285714283,105.42857142857143 603.25,118.5 726,104 C 848.75,89.5 921.3571428571429,47.42857142857143 1032,38 C 1142.642857142857,28.57142857142857 1291.3214285714284,51.785714285714285 1440,75 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#94d364"></stop><stop offset="95%" stop-color="#64d3a9"></stop></linearGradient></defs><path d="M 0,400 L 0,175 C 113.10714285714286,160.14285714285714 226.21428571428572,145.28571428571428 333,153 C 439.7857142857143,160.71428571428572 540.25,191.00000000000003 667,194 C 793.75,196.99999999999997 946.7857142857142,172.7142857142857 1080,165 C 1213.2142857142858,157.2857142857143 1326.607142857143,166.14285714285717 1440,175 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#94d364"></stop><stop offset="95%" stop-color="#64d3a9"></stop></linearGradient></defs><path d="M 0,400 L 0,275 C 150.8214285714286,281.3928571428571 301.6428571428572,287.7857142857143 424,284 C 546.3571428571428,280.2142857142857 640.2499999999998,266.25 747,255 C 853.7500000000002,243.74999999999997 973.3571428571429,235.2142857142857 1091,239 C 1208.642857142857,242.7857142857143 1324.3214285714284,258.89285714285717 1440,275 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path></svg>
    <div class="productContainer">
    <!--slider-box-->
        <ul id="autoWidth" class="cs-hidden">
            <li class="item-a">
                <div class="box">
                    <p class="card-title">Purina ONE</p>
                    <!--model-->
                    <img src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724640552/DOM-perritos/obyxe7isfs9gpwhnaajn.png" class="model">
                    <!--product-details-->
                    <p class="description">High Protein Senior Dog Food 31.1lb</p>
                </div>
            </li>
            <li class="item-b">
                <div class="box">
                    <p class="card-title">IAMS</p>
                    <!--model-->
                    <img src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724640551/DOM-perritos/a1j8jkfxwomwnsmsqt5y.png" class="model">
                    <!--product-details-->
                    <p class="description">High Protein Senior Dog Food 31.1lb</p>
                </div>
            </li>
            <li class="item-c">
                <div class="box">
                    <p class="card-title">Pedigree</p>
                    <!--model-->
                    <img src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724640552/DOM-perritos/jodfkbf5jrikynzcp0mi.png" class="model">
                    <!--product-details-->
                    <p class="description">High Protein Senior Dog Food 31.1lb</p>
                </div>
            </li>
            <li class="item-d">
                <div class="box">
                    <p class="card-title">WAG</p>
                    <!--model-->
                    <img src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724640552/DOM-perritos/uupp9os83u4rkivrsjia.png" class="model">
                    <!--product-details-->
                    <p class="description">High Protein Senior Dog Food 31.1lb</p>
                </div>
            </li>
            <li class="item-e">
                <div class="box">
                    <p class="card-title">Kibbles'n Bits</p>
                    <!--model-->
                    <img src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724640552/DOM-perritos/irg9uow4hbyvsyqubcrw.png" class="model">
                    <!--product-details-->
                    <p class="description">High Protein Senior Dog Food 31.1lb</p>
                </div>
            </li>
            <li class="item-f">
                <div class="box">
                    <p class="card-title">Blue Buffalo</p>
                    <!--model-->
                    <img src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724640553/DOM-perritos/f9kinlhxbrurmxprkccw.png" class="model">
                    <!--product-details-->
                    <p class="description">High Protein Senior Dog Food 31.1lb</p>
                </div>
            </li>
        </ul>
    </div></section>`
}
