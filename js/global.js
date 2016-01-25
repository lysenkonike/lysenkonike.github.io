var languages = {
    'ru':[['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'], 
            ['', '', 'двадцать','тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'], 
            ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
            ['тысяч', 'миллионов']],

    'uk':[['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять', 'десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'], 
            ['', '', 'двадцять','тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'], 
            ['', 'сто', 'двісті', 'триста', 'чотириста', 'п\'ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев\'ятсот'],
            ['тисяч', 'мільйонів']],

    'en':[['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], 
            ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'], 
            ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
            ['thousand', 'millions']]
}

function translateThreeDigitNumber(number, lang){
    if (!(number > 0 && number < 1000) || isNaN(parseInt(number)) || number === null || number === true || number === false){
        return '';
    }

    var translation = '';
    var words = [];
    number = parseInt(number).toString();
    
    switch (lang){
        case 'ru':
           words = languages.ru;
        break;
        case 'en':
            words = languages.en;
        break;
        case 'uk':
            words = languages.uk;
        break;
    }

    if (number < 20){
        translation = words[0][number];
    } else if (number > 19 && number < 100){
        translation = words[1][number[0]] + ' ' + words[0][number[1]];
    } else if (number > 99 && number%100 < 20){
        translation = words[2][number[0]] + ' ' + words[0][number%100];
    } else if (number > 99 && number%100 > 19){
        translation = words[2][number[0]] + ' ' + words[1][number[1]] + ' ' + words[0][number[2]];
    }

    return translation;
}

function splitNumber(number){
    return (number+'').split(/(?=(?:\d{3})+(?!\d))/);
}

function translateAllNumbers(number, lang){ // Еще одно гонево ))
    if (isNaN(parseInt(number)) || number === null || number === true || number === false){
        return '';
    }

    switch (lang){
        case 'ru':
           words = languages.ru;
        break;
        case 'en':
            words = languages.en;
        break;
        case 'uk':
            words = languages.uk;
        break;
    }

    number = parseInt(number).toString();
    var translation = '';
    var numArray = splitNumber(number);

    if (numArray.length == 1){
        translation = translateThreeDigitNumber(numArray[0], lang);
    } else if (numArray.length == 2) {
        translation = translateThreeDigitNumber(numArray[0], lang);
        translation += ' ' + words[3][0] + ' ';
        translation += translateThreeDigitNumber(numArray[1], lang);
    } else if (numArray.length == 3) {
        translation = translateThreeDigitNumber(numArray[0], lang);
        translation += ' ' + words[3][1] + ' ';
        translation += translateThreeDigitNumber(numArray[1], lang);
        translation += ' ' + words[3][0] + ' ';
        translation += translateThreeDigitNumber(numArray[2], lang);
    } else translation = '';

    return translation;
}
