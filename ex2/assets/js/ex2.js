let number;

for (number = 0; number < 101; number++) {

    if (number %15 == 0) {
        document.write(`<div>...</div>`);
    } else {
        document.write(`<div>${number}</div>`);
    }
}