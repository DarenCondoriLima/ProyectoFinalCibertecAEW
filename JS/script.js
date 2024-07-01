/*Iniciar sesión*/
//Guardamos el dato en el localStorage del usuario
var alreadyLoggedIn = JSON.parse(localStorage.getItem('alreadyLoggedIn')) || false;
function login(){
    //Seleccionamos los datos del inico de sesión
    var user = document.getElementById('loginUser');
    var password = document.getElementById('loginPassword');
    //Seleccionamos los dos cotenedores de la barra de menú
    var login = document.getElementById('menuLogin');
    var profile = document.getElementById('menuUser');
    //Si el usuario no se ha logueado antes.
    if(alreadyLoggedIn == false){
        var valueUser = user.value;
        var valuePassword = password.value;
        //Se verifica los datos de logueo.
        if(valueUser == "admin" && valuePassword == "admin"){
            login.style.display = 'none';
            profile.style.display = 'flex';
            alreadyLoggedIn = true;
            //Guardamos en el localStorange que el usiario si se logueo
            localStorage.setItem('alreadyLoggedIn', JSON.stringify(alreadyLoggedIn));
            //Redireccionamos a la página principal
            window.location.href = '../HTML/home.html';
        }
    }
}
//Si el usuario ya se logueo, se muestra en el menu, el contenedor del usuario
document.addEventListener('DOMContentLoaded', function() {
    if (alreadyLoggedIn) {
        var login = document.getElementById('menuLogin');
        var profile = document.getElementById('menuUser');
        login.style.display = 'none';
        profile.style.display = 'flex';
    }
});

/*Cerrar sesión*/
function singOut(){
    alreadyLoggedIn = false;
    localStorage.setItem('alreadyLoggedIn', JSON.stringify(alreadyLoggedIn));
    var login = document.getElementById('menuLogin');
    var profile = document.getElementById('menuUser');
    login.style.display = 'flex';
    profile.style.display = 'none';
}

/*Carrusel Home*/
document.addEventListener('DOMContentLoaded', function() {
    //Se selecciona las imagenes
    var carouselImages = document.querySelector('.carousel-images');
    var images = document.querySelectorAll('.carousel-images a');
    //Se selecciona las flechas
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    //Variables extra
    var currentIndex = 0;/*Guarda la posición de la imagen mostrada*/
    var interval;

    function showImage(index) {
        var offset = -index * 100; 
        //Desplaza la imagen horizontalamente
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function startCarousel() {
        interval = setInterval(function() {
            currentIndex = (currentIndex + 1) % images.length;//actualiza la posición de la imagen
            showImage(currentIndex);
        }, 3000); // Cambia cada 3 segundos
    }

    function stopCarousel() {
        clearInterval(interval);//Limpia el intervalo, esto para que se rinicie el contador
    }

    prevButton.addEventListener('click', function() {
        stopCarousel();//Reinicia el contador
        //Optiene la posición de la imagen anterior
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);//Cambia a la imagen anterior
        startCarousel();//Inicia el carrusel
    });

    nextButton.addEventListener('click', function() {
        stopCarousel();//Reinicia el contador
        //Optiene la posición de la imagen siguiente
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        startCarousel();//Inicia el carrusel
    });
    //Inicia el carrusel
    startCarousel();

});

/*Cambiar icono preguntas frecuentes*/
//Creamos variables para almacenar el estado del icono de cada tarjeta
var iconPreguntaAdd1 = true; 
var iconPreguntaAdd2 = true; 
var iconPreguntaAdd3 = true; 
var iconPreguntaAdd4 = true; 
var iconPreguntaAdd5 = true; 
var iconPreguntaAdd = true;
function changeIcon(numberCard){
    const iconDiv = document.getElementById(`icon${numberCard}`);
    // Asignamos el valor del icono de la tarjeta seleccionada
    cardSelectState(numberCard);
    // Elimina el SVG actual
    iconDiv.innerHTML = '';

    // Crea el nuevo SVG
    const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newSvg.setAttribute('viewBox', '0 0 100 100');
    //depede al valor del icono se cambia el icono y se muestra u oculta el texto
    if(iconPreguntaAdd == false){
        newSvg.innerHTML = `
            <circle cx="50" cy="50" r="45" stroke="black" stroke-width="6" fill="none" />
            <rect x="45" y="20" width="10" height="60" rx="5" ry="5" fill="black" />
            <rect x="20" y="45" width="60" height="10" rx="5" ry="5" fill="black" />
        `; 
        iconPreguntaAdd = true;
        var text = cardSelect(numberCard);//Selecciona la tarjeta
        text.style.display = 'none';
    }else{
        newSvg.innerHTML = `
            <circle cx="50" cy="50" r="45" stroke="black" stroke-width="6" fill="none" />
            <rect x="20" y="45" width="60" height="10" rx="5" ry="5" fill="black" />
        `;
        iconPreguntaAdd = false;
        var text = cardSelect(numberCard);//Selecciona la tarjeta
        text.style.display = 'block';
    }
    //Asignamos el nuevo valor de estado del icono a las variables de almacenamiento
    cardSelectSave(numberCard);
    //Añadimos el svg
    iconDiv.appendChild(newSvg);
}
//Guarda el valor del icono de cada tarjeta
function cardSelectState(numberCard){
    switch(numberCard){
        case 1:
            if(iconPreguntaAdd1 != iconPreguntaAdd){
                iconPreguntaAdd = iconPreguntaAdd1;
            }
            break;
        case 2:
            if(iconPreguntaAdd2 != iconPreguntaAdd){
                iconPreguntaAdd = iconPreguntaAdd2;
            }
            break;
        case 3:
            if(iconPreguntaAdd3 != iconPreguntaAdd){
                iconPreguntaAdd = iconPreguntaAdd3;
            }
            break;
        case 4:
            if(iconPreguntaAdd4 != iconPreguntaAdd){
                iconPreguntaAdd = iconPreguntaAdd4;
            }
            break;
        case 5:
            if(iconPreguntaAdd5 != iconPreguntaAdd){
                iconPreguntaAdd = iconPreguntaAdd5;
            }
            break; 
    }
}
//Selecciona la tarjeta clickeada
function cardSelect(numberCard){
    switch(numberCard){
        case 1:
            return document.getElementById('textCard1');
        case 2: 
            return document.getElementById('textCard2');
        case 3: 
            return document.getElementById('textCard3');
        case 4: 
            return document.getElementById('textCard4');
        case 5: 
            return document.getElementById('textCard5');
    }
}
//Guarda el nuevo valor de tarjeta
function cardSelectSave(numberCard){
    switch(numberCard){
        case 1:
                iconPreguntaAdd1 = iconPreguntaAdd;
            break;
        case 2:
                iconPreguntaAdd2 = iconPreguntaAdd;
            break;
        case 3:
                iconPreguntaAdd3 = iconPreguntaAdd;
            break;
        case 4:
                iconPreguntaAdd4 = iconPreguntaAdd;
            break;
        case 5:
                iconPreguntaAdd5 = iconPreguntaAdd;
            break;
    }
}

/*Muestra el nombre del archivo seleccionado en registrarse*/
document.getElementById('fileInput').addEventListener('change', function() {
    var fileName = this.files[0].name;
    document.getElementById('fileName').textContent = fileName;
});

/*Editar datos usuario*/
function editDataUser(){
    //Selecciona todos los contenedores de datos usuario
    var datosUser = document.querySelectorAll('.datoUser');
    //Obtiene los inputs de edición
    var datoUserInput = document.querySelectorAll('.datoUserInput');
    //Obtiene los datos del usuario
    var nameUser = document.getElementById('datoUserName').textContent;
    var lastnameUser = document.getElementById('datoUserLastname').textContent;
    var emailUser = document.getElementById('datoUserEmail').textContent;
    var passwordUser = document.getElementById('datoUserPassword').textContent;
    //Selecciona los botones de usuario
    var buttonsEdit = document.querySelectorAll('.buttonEdit');
    //Oculta los datos del usuario
    datosUser.forEach((data) => {
        data.style.display = 'none';
    });
    //Muestra los inputs de edición
    datoUserInput.forEach((data,index) => {
        data.style.display = 'block';
        if(index == 0){
            data.value = nameUser;
        }
        if(index == 1){
            data.value = lastnameUser;
        }
        if(index == 2){
            data.value = emailUser;
        }
        if(index == 3){
            data.value = passwordUser;
        }
    });
    //Muestra los botones de edición
    buttonsEdit.forEach((data) => {
        data.style.display = 'block';
    });
}
//Guardamos los datos editados
function saveDataUser(){
    //Selecciona todos los contenedores de datos usuario
    var datosUser = document.querySelectorAll('.datoUser');
    //Obtiene los inputs de edición
    var datoUserInput = document.querySelectorAll('.datoUserInput');
    //Selecciona los botones de usuario
    var buttonsEdit = document.querySelectorAll('.buttonEdit');
    //Mostramos los datos del usuario
    datosUser.forEach((data) => {
        data.style.display = 'block';
    });
    datoUserInput.forEach((input, index) => {
        //Ocultamos los inputs de edición
        input.style.display = 'none';
        //Reemplazamos los datos del usuario, por los editados
        if (index == 0) {
            document.getElementById('datoUserName').textContent = input.value;
        }
        if (index == 1) {
            document.getElementById('datoUserLastname').textContent = input.value;
        }
        if (index == 2) {
            document.getElementById('datoUserEmail').textContent = input.value;
        }
        if (index == 3) {
            document.getElementById('datoUserPassword').textContent = input.value;
        }
    });
    //Ocultamos los botones de edición
    buttonsEdit.forEach((data) => {
        data.style.display = 'none';
    });
}
function cancelDataUser(){
    //Selecciona todos los contenedores de datos usuario
    var datosUser = document.querySelectorAll('.datoUser');
    //Obtiene los inputs de edición
    var datoUserInput = document.querySelectorAll('.datoUserInput');
    //Selecciona los botones de edición
    var buttonsEdit = document.querySelectorAll('.buttonEdit');
    //Mostramos los datos del usuario
    datosUser.forEach((data) => {
        data.style.display = 'block';
    });
    //Ocultamos los inputs de edición
    datoUserInput.forEach((data) => {
        data.style.display = 'none';
    });
    //Ocultamos los botones de edición
    buttonsEdit.forEach((data) => {
        data.style.display = 'none';
    });
}