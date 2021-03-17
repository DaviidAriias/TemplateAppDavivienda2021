document.addEventListener("DOMContentLoaded", function() {
    console.log('Ranger slider JS - loaded successfully 🛠!');
    
    //----- Add Min & Max values
    const range = document.querySelectorAll('input[type="range"]');
    
    //----- Add Min values
    const valueMin = [].map.call(range, function(range){
        const rangeContainer = range.parentElement;
        rangeContainer.querySelector('.helper .min').innerHTML += range.min;
        //console.log('- Min values assigned.');
        //console.log(range.min);
    });

    //----- Add Max values
    const valueMax = [].map.call(range, function(range){
        const rangeContainer = range.parentElement;
        rangeContainer.querySelector('.helper .max').innerHTML += range.max;
        //console.log('- Max values assigned.');
        //console.log(range.max);
    });

    //----- Ubicate initial bubble
    const value = [].map.call(range, function(range){
        const rangeContainer = range.parentElement;
        const bubble = rangeContainer.querySelector('#bubble');
        var min = range.min,
            max = range.max;
        const defaultVal = range.defaultValue;
        const value =  `${Math.ceil((defaultVal - min) * 100 / (max - min))}`;
        const total = parseFloat((defaultVal - min) * 100 / (max - min));
        

        range.style.backgroundSize = value + '% 100%';
        bubble.style.transform = 'translate(' + total + '%)';
        bubble.querySelector('.bubbleValue').innerHTML += new Intl.NumberFormat().format(defaultVal);

        //console.log('- Range values assigned.');
        //console.log(defaultVal);

        //----- Init opacity values
        if(defaultVal == min){
            rangeContainer.querySelector('.helper .min').style.opacity = '10%';
            rangeContainer.querySelector('.helper .max').style.opacity = '100%';
        }else if(defaultVal == max){
            rangeContainer.querySelector('.helper .max').style.opacity = '10%';
            rangeContainer.querySelector('.helper .min').style.opacity = '100%';
        }
    });

});

const rangeSlider = (data) =>{

    const range = data.parentElement;
    const bubble = data.parentElement.querySelector('#bubble');
                
    var min = data.min,
        max = data.max,
        val = data.value;
    
    //const value =  `${Math.round((val - min) * 100 / (max - min))}`;
    const value = parseFloat((val - min) * 100 / (max - min));
    data.style.backgroundSize = value + '% 100%';

    
    //console.log(value);

    //----- Bubble control
    bubble.style.transform = 'translate(' + value + '%)';
    range.querySelector('.bubbleValue').innerHTML = new Intl.NumberFormat().format(val);

    //----- Opacity Max & Min
    if(data.value == data.min){
        range.querySelector('.helper .min').style.opacity = '10%';
        range.querySelector('.helper .max').style.opacity = '100%';
        //console.log('Min');
    }else if(data.value == data.max){
        range.querySelector('.helper .max').style.opacity = '10%';
        range.querySelector('.helper .min').style.opacity = '100%';
        //console.log('Max');
    } 
    
    if(data.value != data.min){
        range.querySelector('.helper .min').style.opacity = '100%';
    }
    if(data.value != data.max){
        range.querySelector('.helper .max').style.opacity = '100%';
    }

}