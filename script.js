// Hey Guys's Let s build a simple project of DOM JavaScript
// Digital Clock

// Let's Start

// Okay now let's call over content on our displat to 
// easily style it

function displayTime() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const time =   `${hours}:${minutes}:${seconds}`;


    const digitalClock = document.getElementById('clock');

    digitalClock.textContent = time;
}

setInterval(displayTime, 1000);