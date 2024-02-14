function calculateParaArea(){
    
     const base= getInputValueById('parallelogram-base');
     console.log(base);

     const height= getInputValueById('parallelogram-height');
     console.log(height);

     const area= base*height;
     console.log(area);

     setInnerTextById('parallelogram-area',area);
}


function getInputValueById(inputFeildId){
     const inputFeild=document.getElementById(inputFeildId);
     console.log(inputFeild);
     const inputValueText=inputFeild.value;
     const inputValue=parseFloat(inputValueText);
     return inputValue;

}

function setInnerTextById(areaId,areaValue){
    const element=document.getElementById(areaId);
    element.innerText=areaValue;
}
