let year;

for (year = 2020; year < 2030; year++) {

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        document.write(`<div class="color1">${year}</div>`);
    } else {
        document.write(`<div class="color">${year}</div>`);
    }
}