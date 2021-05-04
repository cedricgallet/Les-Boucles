
    /*Si l’année est divisible par 4, passez à l’étape 2. Sinon, passez à l’étape 5.
    Si l’année est divisible par 100, passez à l’étape 3. Sinon, passez à l’étape 4.
    Si l’année est divisible par 400, passez à l’étape 4. Sinon, passez à l’étape 5.
    L’année est une année bissextile (elle compte 366 jours).
    L’année n’est pas une année bissextile (elle compte 365 jours).*/

    

    
    function IsLeapYear(Year) {
     return (((Year & 3) == 0) && ((Year % 100 != 0) || (Year % 400 == 0)));
    }
     
    for(I=2020;I<=2030;I++) {
     if(IsLeapYear(I)) console.console.log(I+" est une année bissextile<BR>");
    }
    

