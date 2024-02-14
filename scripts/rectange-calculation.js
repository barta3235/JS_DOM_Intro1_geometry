function calculateRectangleArea(){
    //length
    const rectangleAreaLength=document.getElementById('rectangle-length');
    const rectangleAreaLengthText= rectangleAreaLength.value;
    const length= parseFloat(rectangleAreaLengthText);
    console.log(length);


    const rectangleAreaWidth=document.getElementById('rectangle-width');
    const rectangleAreaWidthText= rectangleAreaWidth.value;
    const width= parseFloat(rectangleAreaWidthText);
    console.log(width);


    const area=  length * width;
    console.log(area);

    //display area
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=area;

}