//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('Main JS loaded successfully 👍🏽!');
});

//Varible "body" used in diferente functions
const body = document.querySelector('body');



//-------------------- Modal functions

//#region Overlay Estudio de crédito
function showModalStudy(){
    document.querySelector('#StudyProcess').classList.add('contStudyProcess--isShow');
    body.classList.add('is--scrollLocked');
}
//#endregion Overlay Estudio de crédito


//#region PopUp
function showModal(id){
    document.querySelector('#modalDefault'+id).classList.add('contModal--isShow');
    body.classList.add('is--scrollLocked');
}

function hideModal(id){
    document.querySelector('#modalDefault'+id).classList.remove('contModal--isShow');
    body.classList.remove('is--scrollLocked');
}
//#endregion PopUp


//#region Kangaroo
function showKangaroo(id){
    document.querySelector('#contCanguro'+id).classList.add('contCanguroMain--isShow');
    body.classList.add('is--scrollLocked');
}

function hideKangaroo(id){
    document.querySelector('#contCanguro'+id).classList.remove('contCanguroMain--isShow');
    body.classList.remove('is--scrollLocked');
}
//#endregion Kangaroo


//#region OTP "atención en línea" Button
function focusIn(){
    if (screen.width<800){
        //console.log('Focus In');
        document.querySelector('.support').style.display = 'none';
    }else{
        document.querySelector('.support').style.display = '';
    }
}

function focusOut(){
    if (screen.width<800){
        //console.log('Focus Out');
        document.querySelector('.support').style.display = '';
    }else{
        document.querySelector('.support').style.display = '';
    }
}
//#endregion OTP "atención en línea" Button



//-------------------- General functions

//#region Funciones generales JS
//Variables
const containerMain = document.querySelector('.container');

//Eventos
containerMain.addEventListener('click', generalFunctions);


function generalFunctions(event){
    const item = event.target;
    //console.log(event.target);

    //See more info
    if(item.classList[0] === 'optionCard__seeMore'){
        const itemMain = item.parentElement;
        const column = itemMain.querySelectorAll('.column--hidden');
        //console.log(column);

        itemMain.querySelector('.dataCredit--hidden').classList.toggle('dataCredit--isShow');
        item.classList.toggle('expanded');

        if (item.querySelector('span').innerHTML === 'Ver más información'){
            item.querySelector('span').innerHTML = 'Ver menos información'
            for (i = 0; i < column.length; i++) {
                column[i].classList.add('column--isShow');
            }
        }else{
            item.querySelector('span').innerHTML = 'Ver más información'
            for (i = 0; i < column.length; i++) {
                column[i].classList.remove('column--isShow');
            }
        }
    }

    //Edit inputs
    if(item.classList[0] === 'input__buttonAction'){
        const itemMain = item.parentElement;
        item.style.display = "none";
        itemMain.querySelector('input').disabled = false;
        itemMain.querySelector('input').focus();
        itemMain.querySelector('input').select();
    }
    
    //See more info confirmations/results
    if(item.classList[0] === 'toggleButton'){
        const itemMain = item.parentElement;

        itemMain.querySelector('.resultConfir__item--hidden').classList.toggle('resultConfir__item--isShow');

        if (item.querySelector('.resultConfirButton--more').innerHTML === 'Más detalles'){
            item.querySelector('.resultConfirButton--more').innerHTML = 'Menos detalles'
            item.querySelector('.resultConfirButton--icon').classList.remove('icon-dv-showMore');
            item.querySelector('.resultConfirButton--icon').classList.add('icon-dv-showLess');
        }else{
            item.querySelector('.resultConfirButton--more').innerHTML = 'Más detalles'
            item.querySelector('.resultConfirButton--icon').classList.add('icon-dv-showMore');
            item.querySelector('.resultConfirButton--icon').classList.remove('icon-dv-showLess');
        }
    }

    //See more info radiocards
    if(item.classList[0] === 'radioCard__toggle'){
        const itemMain = item.parentElement.parentElement;

        itemMain.querySelector('.radioCard__extraInfo--hidden').classList.toggle('radioCard__extraInfo--isShow');
        if (item.querySelector('span:last-of-type').innerHTML === 'Ver más'){
            item.querySelector('span:last-of-type').innerHTML = 'Ver menos'
            item.querySelector('span:first-of-type').classList.toggle('icon-rotate');
        }else{
            item.querySelector('span:last-of-type').innerHTML = 'Ver más'
            item.querySelector('span:first-of-type').style.transformX = "0deg";
            item.querySelector('span:first-of-type').classList.toggle('icon-rotate');
        }

    }
    
}
//#endregion Funciones generales JS



//#region Change placeholder input-date
function changePlaceholder(){
    event.target.classList.add('visited');
}
//#endregion Change placeholder input-date



//#region Init icon inputs
function hideBgIcon(){
    const input = event.target.parentElement.querySelector('input');
    input.classList.add('visited');
    input.classList.remove('editable');
}
//#endregion Init icon inputs



//#region Notch dropdown accounts
const dropdownAccounts = document.querySelector('#accounts');
const dropdownNotch = dropdownAccounts.parentElement.querySelector('.notchBalance');

dropdownAccounts.addEventListener('change', notchAccounts);

function notchAccounts(){
    if(dropdownAccounts.value == 1){
        dropdownNotch.classList.remove('notchBalance--hidden');
    }else{
        dropdownNotch.classList.add('notchBalance--hidden');
    }
}
//#endregion Notch dropdown accounts



//#region changeColorDropdown
function colorDropdown(){
    event.target.classList.remove('notChange');
}
//#endregion changeColorDropdown



//#region changeAddress
function changeAddress(){
    const addressInput = event.target.parentElement.querySelector('.input--fluidBigger');
    const inputToHidde = event.target.parentElement.querySelector('input');
    addressInput.classList.add('mb-15px');
    addressInput.style.display = '';
    inputToHidde.style.display = 'none';
    document.querySelector('#editData').style.display = '';
    document.querySelector('#editCity').style.display = '';
}
//#endregion changeAddress



//#region limitLength - OTP
function limitLength(object) {
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength)
    }
}
    
function limitNumbers (event) {
    var eventListener = event || window.event;
    var key = eventListener.keyCode || eventListener.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
        eventListener.returnValue = false;
        if(eventListener.preventDefault) eventListener.preventDefault();
    }
}
//#endregion limitLength - OTP



//#region Mask currency
/*function currencyMask(){
    const input = document.querySelector('.currency');
    if(input.value.length == 3){
        input.value += "."
    }
    if(input.value.length == 7){
        input.value += "."
    }
    if(input.value.length == 11){
        input.value += "."
    }
}*/
function currencyMask(){
    const input = document.querySelector('.currency');
    const inputValue = input.value;
    var num = new Intl.NumberFormat("es-CO",{
        style: "currency",
        currency: "COP"
    })
    input.value = (num.format(inputValue));
}
currencyMask();
//#endregion