const counterSteps = document.querySelector('.loader__counter p span');
const counterTexts = document.querySelector('.loader__text p');

const loaderProgress = document.querySelector(".loader__progress");
const loaderRadius = loaderProgress.r.baseVal.value;
const loaderCircumference = loaderRadius * 2 * Math.PI;
loaderProgress.style.strokeDasharray = loaderCircumference;

var counter = 0;


function showLoaderShops(){
    document.querySelector('#loaderShops').classList.add('contLoaderShops--isShow');
    body.classList.add('is--scrollLocked');
    completeAnimation();
}


//Init 0 progress
function initProgress(percent) {
    loaderProgress.style.strokeDashoffset = loaderCircumference - (percent / 100) * loaderCircumference;
}
initProgress(0);

//Execute complete animation
function completeAnimation(){
    //Main animation
    function animationProgress(){
        setTimeout(() => {
            function initProgress(percent) {
                loaderProgress.style.strokeDashoffset = loaderCircumference - (percent / 100) * loaderCircumference;
            }
            loaderProgress.style.transitionDuration = "20s"
            initProgress(100);
            //console.log('Init');
            counter++;
        }, 1000);
    }
    animationProgress();

    //Reset 0 progress
    setInterval(function(){
        loaderProgress.style.transitionDuration = ".2s"
        initProgress(1);
        //console.log('Cada 20 seg')
    }, 20000);
    
    //Execute again animation
    setInterval(function(){
        if(counter === 1){
            counterSteps.innerHTML = 2;
            counterTexts.innerHTML = "Afiliando su negocio...";
            animationProgress();


        }else if (counter === 2){
            counterSteps.innerHTML = 3;
            counterTexts.innerHTML = "Activando sus soluciones <br> de venta...";
            animationProgress();


        }else if(counter === 3){
            initProgress(100);
            location.reload();

            return;
        }

    }, 20000);

}