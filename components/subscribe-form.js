export const subscribeForm= ()=>{
    return `<!-- SUBSCRIBIRSE -->
    <section class="subscribe">
        <div class="subBox">
            <img src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1724886591/DOM-perritos/ljttpq3fnj70o4ognffz.jpg" alt="Perrito-cartero" class=""/>

            <form class="subscribe-form" action="" autocomplete="on">
                <h2>¡Subscríbete para obtener las mejores ofertas!</h2>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Escribe tu nombre">

                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Correo Electronico">

                <input type="submit" id="submit" value="Enviar">
            </form>
        </div>
    </section>`
}

export const addSubs = (event)=>{

    let suscriptores = []
    event.preventDefault()
    alert('formulario enviado')
     const nombre= document.getElementById('nombre').value
     const email= document.getElementById('email').value

     const subs={
        nombre: nombre,
        email: email
      }
      suscriptores.push(subs)
      console.log(suscriptores)
}