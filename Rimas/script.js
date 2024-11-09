document.addEventListener('DOMContentLoaded', () => {
    const playSoundButton = document.getElementById('play-sound');
    const imagesContainer = document.getElementById('images');
    const feedbackElement = document.getElementById('feedback');
    const correctCountElement = document.getElementById('correct-count');
    const errorCountElement = document.getElementById('error-count');
    const timerElement = document.getElementById('timer');
    const popupElement = document.getElementById('popup');
    const finalCorrectCountElement = document.getElementById('final-correct-count');
    const finalErrorCountElement = document.getElementById('final-error-count');
    const restartButton = document.getElementById('restart-button');
    const closeButton = document.getElementById('close-button');
    const gameContainer = document.getElementById('game-container');

    const words = [
        { audio: 'audio/gato.mp3', correct: 'PATO', options: ['PATO', 'BOLA', 'ASA'], images: ['imagens/pato.png', 'imagens/bola.png', 'imagens/asa.png'] },
        { audio: 'audio/escola.mp3', correct: 'BOLA', options: ['GATO', 'BOLA', 'ASA'], images: ['imagens/gato.png', 'imagens/bola.png', 'imagens/asa.png'] },
        { audio: 'audio/casa.mp3', correct: 'ASA', options: ['PATO', 'ASA', 'OVELHA'], images: ['imagens/pato.png', 'imagens/asa.png', 'imagens/ovelha.png'] },
        { audio: 'audio/abelha.mp3', correct: 'OVELHA', options: ['CASA', 'ESCOLA', 'OVELHA'], images: ['imagens/casa.png', 'imagens/escola.png', 'imagens/ovelha.png'] },
        { audio: 'audio/pao.mp3', correct: 'MÃO', options: ['MÃO', 'RUA', 'BICO'], images: ['imagens/mao.png', 'imagens/rua.png', 'imagens/bico.png'] },
        { audio: 'audio/lua.mp3', correct: 'RUA', options: ['MÃO', 'RUA', 'PENTE'], images: ['imagens/mao.png', 'imagens/rua.png', 'imagens/pente.png'] },
        { audio: 'audio/fada.mp3', correct: 'ESTRADA', options: ['MÃO', 'GATO', 'ESTRADA'], images: ['imagens/mao.png', 'imagens/gato.png', 'imagens/estrada.png'] },
        { audio: 'audio/sol.mp3', correct: 'FAROL', options: ['FACA', 'FAROL', 'RUA'], images: ['imagens/faca.png', 'imagens/farol.png', 'imagens/rua.png'] },
        { audio: 'audio/vaca.mp3', correct: 'FACA', options: ['DADO', 'FACA', 'QUADRADO'], images: ['imagens/dado.png', 'imagens/faca.png', 'imagens/quadrado.png'] },
        { audio: 'audio/dado.mp3', correct: 'QUADRADO', options: ['VASSOURA', 'QUADRADO', 'FACA'], images: ['imagens/vassoura.png', 'imagens/quadrado.png', 'imagens/faca.png'] },
        { audio: 'audio/tesoura.mp3', correct: 'VASSOURA', options: ['VASSOURA', 'GATO', 'ESCOLA'], images: ['imagens/vassoura.png', 'imagens/gato.png', 'imagens/escola.png'] },
        { audio: 'audio/fogo.mp3', correct: 'JOGO', options: ['JOGO', 'CASA', 'ASA'], images: ['imagens/jogo.png', 'imagens/casa.png', 'imagens/asa.png'] },
        { audio: 'audio/coroa.mp3', correct: 'LAGOA', options: ['PATO', 'LAGOA', 'OVELHA'], images: ['imagens/pato.png', 'imagens/lagoa.png', 'imagens/ovelha.png'] },
        { audio: 'audio/aviao.mp3', correct: 'BALÃO', options: ['BALÃO', 'BICO', 'ESTRADA'], images: ['imagens/balao.png', 'imagens/bico.png', 'imagens/estrada.png'] },
        { audio: 'audio/jacare.mp3', correct: 'PICOLÉ', options: ['PICOLÉ', 'FAROL', 'FACA'], images: ['imagens/picole.png', 'imagens/farol.png', 'imagens/faca.png'] },
        { audio: 'audio/papel.mp3', correct: 'ANEL', options: ['ANEL', 'QUADRADO', 'FACA'], images: ['imagens/anel.png', 'imagens/quadrado.png', 'imagens/faca.png'] },
        { audio: 'audio/nariz.mp3', correct: 'FELIZ', options: ['VASSOURA', 'FELIZ', 'GATO'], images: ['imagens/vassoura.png', 'imagens/feliz.png', 'imagens/gato.png'] },
        { audio: 'audio/pente.mp3', correct: 'DENTE', options: ['JOGO', 'DENTE', 'ASA'], images: ['imagens/jogo.png', 'imagens/dente.png', 'imagens/asa.png'] },
        { audio: 'audio/rico.mp3', correct: 'BICO', options: ['PATO', 'BICO', 'OVELHA'], images: ['imagens/pato.png', 'imagens/bico.png', 'imagens/ovelha.png'] },
        { audio: 'audio/rio.mp3', correct: 'NAVIO', options: ['BALÃO', 'NAVIO', 'ESTRADA'], images: ['imagens/balao.png', 'imagens/navio.png', 'imagens/estrada.png'] },
        { audio: 'audio/touro.mp3', correct: 'OURO', options: ['PICOLÉ', 'OURO', 'FAROL'], images: ['imagens/picole.png', 'imagens/ouro.png', 'imagens/farol.png'] },
        { audio: 'audio/pipoca.mp3', correct: 'FOCA', options: ['ANEL', 'FOCA', 'FELIZ'], images: ['imagens/anel.png', 'imagens/foca.png', 'imagens/feliz.png'] },
        { audio: 'audio/pato.mp3', correct: 'GATO', options: ['GATO', 'AVIÃO', 'VASSOURA'], images: ['imagens/gato.png', 'imagens/aviao.png', 'imagens/vassoura.png'] },
        { audio: 'audio/bola.mp3', correct: 'ESCOLA', options: ['PAPEL', 'FOGO', 'ESCOLA'], images: ['imagens/papel.png', 'imagens/fogo.png', 'imagens/escola.png'] },
        { audio: 'audio/asa.mp3', correct: 'CASA', options: ['JACARÉ', 'CASA', 'COROA'], images: ['imagens/jacare.png', 'imagens/casa.png', 'imagens/coroa.png'] },
        { audio: 'audio/ovelha.mp3', correct: 'ABELHA', options: ['RICO', 'RIO', 'ABELHA'], images: ['imagens/rico.png', 'imagens/rio.png', 'imagens/abelha.png'] },
        { audio: 'audio/mao.mp3', correct: 'PÃO', options: ['PENTE', 'PÃO', 'PAPEL'], images: ['imagens/pente.png', 'imagens/pao.png', 'imagens/papel.png'] },
        { audio: 'audio/rua.mp3', correct: 'LUA', options: ['ESCOLA', 'LUA', 'PIPOCA'], images: ['imagens/escola.png', 'imagens/lua.png', 'imagens/pipoca.png'] },
        { audio: 'audio/estrada.mp3', correct: 'FADA', options: ['FADA', 'GATO', 'NARIZ'], images: ['imagens/fada.png', 'imagens/gato.png', 'imagens/nariz.png'] },
        { audio: 'audio/farol.mp3', correct: 'SOL', options: ['PÃO', 'PIPOCA', 'SOL'], images: ['imagens/pao.png', 'imagens/pipoca.png', 'imagens/sol.png'] },
        { audio: 'audio/faca.mp3', correct: 'VACA', options: ['VACA', 'PENTE', 'FADA'], images: ['imagens/vaca.png', 'imagens/pente.png', 'imagens/fada.png'] },
        { audio: 'audio/quadrado.mp3', correct: 'DADO', options: ['CASA', 'SOL', 'DADO'], images: ['imagens/casa.png', 'imagens/sol.png', 'imagens/dado.png'] },
        { audio: 'audio/vassoura.mp3', correct: 'TESOURA', options: ['DADO', 'TESOURA', 'RIO'], images: ['imagens/dado.png', 'imagens/tesoura.png', 'imagens/rio.png'] },
        { audio: 'audio/jogo.mp3', correct: 'FOGO', options: ['FOGO', 'FADA', 'VACA'], images: ['imagens/fogo.png', 'imagens/fada.png', 'imagens/vaca.png'] },
        { audio: 'audio/lagoa.mp3', correct: 'COROA', options: ['COROA', 'TESOURA', 'GATO'], images: ['imagens/coroa.png', 'imagens/tesoura.png', 'imagens/gato.png'] },
        { audio: 'audio/balao.mp3', correct: 'AVIÃO', options: ['TOURO', 'ABELHA', 'AVIÃO'], images: ['imagens/touro.png', 'imagens/abelha.png', 'imagens/aviao.png'] },
        { audio: 'audio/picole.mp3', correct: 'JACARÉ', options: ['JACARÉ', 'VACA', 'RICO'], images: ['imagens/jacare.png', 'imagens/vaca.png', 'imagens/rico.png'] },
        { audio: 'audio/anel.mp3', correct: 'PAPEL', options: ['TESOURA', 'PAPEL', 'LUA'], images: ['imagens/tesoura.png', 'imagens/papel.png', 'imagens/lua.png'] },
        { audio: 'audio/feliz.mp3', correct: 'NARIZ', options: ['SOL', 'NARIZ', 'CASA'], images: ['imagens/sol.png', 'imagens/nariz.png', 'imagens/casa.png'] },
        { audio: 'audio/dente.mp3', correct: 'PENTE', options: ['PENTE', 'DADO', 'JACARÉ'], images: ['imagens/pente.png', 'imagens/dado.png', 'imagens/jacare.png'] },
        { audio: 'audio/bico.mp3', correct: 'RICO', options: ['AVIÃO', 'RICO', 'PÃO'], images: ['imagens/aviao.png', 'imagens/rico.png', 'imagens/pao.png'] },
        { audio: 'audio/navio.mp3', correct: 'RIO', options: ['LUA', 'RIO', 'PENTE'], images: ['imagens/lua.png', 'imagens/rio.png', 'imagens/pente.png'] },
        { audio: 'audio/ouro.mp3', correct: 'TOURO', options: ['TOURO', 'NARIZ', 'FOGO'], images: ['imagens/touro.png', 'imagens/nariz.png', 'imagens/fogo.png'] },
        { audio: 'audio/foca.mp3', correct: 'PIPOCA', options: ['ABELHA', 'PIPOCA', 'COROA'], images: ['imagens/abelha.png', 'imagens/pipoca.png', 'imagens/coroa.png'] 
        },
    ];

    let currentIndex = 0;
    let correctCount = 0;
    let errorCount = 0;
    let timer = 0;
    let timerInterval;
    const totalExercises = 10;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startTimer() {
        timer = 0;
        timerElement.textContent = timer;
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timer++;
            timerElement.textContent = timer;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function loadNextWord() {
        if (currentIndex >= totalExercises) {
            showPopup();
            return;
        }
        
        const word = words[currentIndex];
        playSoundButton.onclick = () => {
            const audio = new Audio(word.audio);
            audio.play();
        };

        imagesContainer.innerHTML = '';
        const optionsWithImages = word.options.map((option, index) => ({
            option,
            image: word.images[index]
        }));
        shuffle(optionsWithImages);

        optionsWithImages.forEach(({ option, image }) => {
            const imageElement = document.createElement('div');
            imageElement.className = 'image';
            const img = document.createElement('img');
            img.src = image;
            img.alt = option;
            imageElement.appendChild(img);
            const textElement = document.createElement('p');
            textElement.textContent = option;
            imageElement.appendChild(textElement);
            imageElement.onclick = () => checkAnswer(option, word.correct);
            imagesContainer.appendChild(imageElement);
        });

        feedbackElement.textContent = '';
    }

    function checkAnswer(selected, correct) {
        if (selected === correct) {
            feedbackElement.textContent = 'Correto!';
            feedbackElement.style.color = 'green';
            correctCount++;
        } else {
            feedbackElement.textContent = 'Tente novamente.';
            feedbackElement.style.color = 'red';
            errorCount++;
        }

        correctCountElement.textContent = correctCount;
        errorCountElement.textContent = errorCount;

        currentIndex++;
        setTimeout(loadNextWord, 1000);
    }

    function showPopup() {
        finalCorrectCountElement.textContent = correctCount;
        finalErrorCountElement.textContent = errorCount;
        popupElement.classList.remove('hidden');
        stopTimer();
    }

    restartButton.onclick = () => {
        shuffle(words); // Embaralhar as palavras
        currentIndex = 0;
        correctCount = 0;
        errorCount = 0;
        correctCountElement.textContent = correctCount;
        errorCountElement.textContent = errorCount;
        popupElement.classList.add('hidden');
        loadNextWord();
        startTimer();
    };

    closeButton.onclick = () => {
        popupElement.classList.add('hidden');
        gameContainer.innerHTML='<img src="../logo.jpeg"> </img>';
    };

    shuffle(words); // Embaralhar as palavras inicialmente
    loadNextWord();
    startTimer();
});


