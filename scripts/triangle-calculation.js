// Step-1: get base value of the triangle
//step-2: added an id in the base input field
//step-3 use get ElementByID to access the input field
//step-4: get value from the input field (it is in string)
//step-5: convert the value to a number, use parseFloat




function calculateTriangleArea(){
    //base
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText);
    console.log(base);

    //height
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText);
    console.log(height);

    const area= 0.5 * base * height;
    console.log(area);

    //display triangle area
    const triangleAreaSpan= document.getElementById('triangle-area');
    triangleAreaSpan.innerText=area;
}