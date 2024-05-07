function pad(num) {
    return num.toString().padStart(2, '0');
}

setInterval(() => {
    const date = new Date();
    const dayContainer = document.querySelector("#day > div");
    const timeContainer = document.querySelector("#time > div");
    const dateContainer = document.querySelector("#date > div");

    dayContainer.innerHTML = date.toLocaleString('en-us', {weekday: 'short'});
    timeContainer.innerHTML = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    dateContainer.innerHTML = `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}, 1000);