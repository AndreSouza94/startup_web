// Função para o Cronômetro de 24h (Hero/Oferta Principal)
function startTimer(duration) {
    let timer = duration;
    
    // Seleciona os elementos individualmente conforme o seu HTML
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const countdown = setInterval(function () {
        let hours = parseInt(timer / 3600, 10);
        let minutes = parseInt((timer % 3600) / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        // Formata com zero à esquerda (ex: 09)
        if (hoursEl) hoursEl.textContent = hours < 10 ? "0" + hours : hours;
        if (minutesEl) minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
        if (secondsEl) secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = duration; // Reinicia ao zerar
        }
    }, 1000);
}

// Inicialização dentro do DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // 24 horas em segundos (86400)
    const vinteQuatroHoras = 24 * 60 * 60;
    startTimer(vinteQuatroHoras);
    // 1. Inicializar Animações AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // 2. Localizar o elemento do Timer (ajuste o ID conforme seu HTML)
    // No seu index.html ele deve ter o id="timer" ou id="countdown"
    const timerDisplay = document.querySelector('#timer') || document.querySelector('.timer-display');
    
    if (timerDisplay) {
        const vinteQuatroHoras = 24 * 60 * 60; // 86400 segundos
        startTimer(vinteQuatroHoras, timerDisplay);
    }

    // 3. Lógica do Checkbox de Preço (Order Bump)
    const checkbox = document.getElementById('orderBump');
    const priceDisplay = document.getElementById('totalPrice');

    if (checkbox && priceDisplay) {
        checkbox.addEventListener('change', function() {
            priceDisplay.textContent = this.checked ? 'R$ 57,80' : 'R$ 37,90';
        });
    }
});