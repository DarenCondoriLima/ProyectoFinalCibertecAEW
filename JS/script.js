
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
        var text = cardSelect(numberCard);
        text.style.display = 'none';
    }else{
        newSvg.innerHTML = `
            <circle cx="50" cy="50" r="45" stroke="black" stroke-width="6" fill="none" />
            <rect x="20" y="45" width="60" height="10" rx="5" ry="5" fill="black" />
        `;
        iconPreguntaAdd = false;
        var text = cardSelect(numberCard);
        text.style.display = 'block';
    }
    //Asignamos el nuevo valor de estado del icono a las variables de almacenamiento
    cardSelectSave(numberCard);
    //Añadimos el svg
    iconDiv.appendChild(newSvg);
}

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

function cardSelectSave(numberCard){
    switch(numberCard){
        case 1:
                iconPreguntaAdd1 = iconPreguntaAdd;
                console.log('1'+iconPreguntaAdd1)
            break;
        case 2:
                iconPreguntaAdd2 = iconPreguntaAdd;
                console.log('2'+iconPreguntaAdd2)
            break;
        case 3:
                iconPreguntaAdd3 = iconPreguntaAdd;
                console.log('3'+iconPreguntaAdd3)
            break;
        case 4:
                iconPreguntaAdd4 = iconPreguntaAdd;
                console.log('4'+iconPreguntaAdd4)
            break;
        case 5:
                iconPreguntaAdd5 = iconPreguntaAdd;
                console.log('5'+iconPreguntaAdd5)
            break;
    }
}