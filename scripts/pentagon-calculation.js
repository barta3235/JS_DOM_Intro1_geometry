function calculatePenArea(){
    const perimeter=getInputValues('pentagon-p');
    const apothem=getInputValues('pentagon-a');

    const area= 0.5 *perimeter* apothem;

    setInner('pentagon-area',area);
}


function getInputValues(inputId){
   const inputFeild=document.getElementById(inputId);
   const inputText=inputFeild.value;
   const value=parseFloat(inputText);
   return value;
}

function setInner(areaId,areaValue){
     const x= document.getElementById(areaId);
     x.innerText=areaValue;
}