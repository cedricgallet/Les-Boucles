let year;

for (year = 2020; year <= 2030; year++) {


    if (year % 4 == 0) {
        document.write(`<span style="color:red">${year}</span>`);
    } 
    else {
        document.write(year);
    }
}