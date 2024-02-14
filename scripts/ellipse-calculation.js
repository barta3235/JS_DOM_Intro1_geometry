function calculateEllipseArea(){
    const a= getInputValueById('ellipse-a');
    console.log(a);
    const b= getInputValues('ellipse-b');
    console.log(b);
    const area= 3.14 * a * b;

    setInner('ellipse-area',area);
}