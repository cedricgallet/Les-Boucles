let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
days.forEach(Element => {

    if (element == days[5] || days[6] == Dimanche) {
        document.write(`<strong style="font-weight:bold">${element}</strong>`);
    } 
    else {
        document.write(element);
    }
})