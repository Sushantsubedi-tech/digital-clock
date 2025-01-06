function updateClock() {
    // Get the current time in UTC and add 5 hours and 45 minutes for Nepal Standard Time
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const nst = new Date(utc + 5 * 60 * 60 * 1000 + 45 * 60 * 1000);

    const hours = nst.getHours();
    const minutes = nst.getMinutes();
    const seconds = nst.getSeconds();

    // Convert to 12-hour format and determine AM/PM
    const isPM = hours >= 12;
    const displayHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    const morEve = isPM ? "PM" : "AM";

    // Update the clock elements
    document.querySelector(".hour").textContent = displayHours;
    document.querySelector(".minute").textContent = minutes.toString().padStart(2, '0');
    document.querySelector(".second").textContent = seconds.toString().padStart(2, '0');
    document.querySelector(".mor-eve").textContent = morEve;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function initially to avoid delay
updateClock();
