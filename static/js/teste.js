function chageGame(subject) {
    const displayGame = document.getElementById('display-image');
    displayGame.style.opacity = 50;
    
    setTimeout(() => {
        switch(subject) {
            case 'alfabeto':
                displayGame.src="./ligarPontos/index.html";
                displayGame.alt = "Alfabeto Divertido";
                break;
            case 'rimas':
                displayGame.src="./rimas/index.html";
                displayGame.alt = "Rimas";
                break;
            case 'memoria':
                displayGame.src = "./memoria/index.html";
                displayGame.alt = "Cute scientist characters conducting experiments";
                break;
            case 'math':
                displayGame.src = "math.webp";
                displayGame.alt = "Matemática";
                break;
            case 'reading':
                displayGame.src = "reading.webp";
                displayGame.alt = "Literatura";
                break;
            case 'science':
                displayGame.src = "science.webp";
                displayGame.alt = "Ciência";
                break;
            default:
                displayGame.src = "logo.jpeg";
                displayGame.alt = "Learning with Fun logo, colorful letters forming a smiling face";
        }
        displayGame.style.opacity = 1;
        displayGame.classList.add('bouncing');
        setTimeout(() => {
            displayGame.classList.remove('bouncing');
        }, 2000);
    }, 1000);
}
