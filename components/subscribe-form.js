export const subscribeForm= ()=>{
    return `<!-- SUBSCRIBIRSE -->
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
}

export const addSubs = (event)=>{

    var suscriptores = []
    event.preventDefault()
    console.log('formulario enviado')
     const nombre= document.getElementById('nombre').value
     const email= document.getElementById('email').value

     const subs={
        nombre: nombre,
        email: email
      }
      suscriptores.push(subs)
      console.log(suscriptores)
}