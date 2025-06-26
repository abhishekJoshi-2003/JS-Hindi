function handleCalculation(){
    const w = Number(document.querySelector('#weight').value);
    const h = Number(document.querySelector('#height').value);
    if(w&&h)
    {
        const BMI = w/(h*h);
        // console.log(w);
        // console.log(h);
        // console.log(BMI);
        document.querySelector('#result').innerHTML = `Your BMI is ${BMI}`;
    }
    else
    {
        document.querySelector('#result').innerHTML = "";
    }
}

document.querySelector('.calcBut').addEventListener('click',handleCalculation);