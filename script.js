var input = document.getElementById('display');
let display = '';

const handleEvents = (e) => {
    const target = e.target;
    
    if (target.id === 'display') {

    } else if (target.id === "output") {
        var calculation;
        
        try {
            eval(display); 
            calculation = eval(display);
            display = calculation;
            input.value = display;
        } catch (e) {
            input.value = "Error!";
        }

    } else if (target.id === 'ac' || target.id === 'clear') {
        display = '';
        input.value = display;

    } else if (target.id === 'del') {
        display = display.substring(0, display.length - 1);
        input.value = display;

    } else if (target.id !== '=') {
        display += target.id;
        input.value = display;
    } 
}

document.addEventListener('click', handleEvents);