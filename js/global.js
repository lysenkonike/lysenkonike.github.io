var languages = {
    'ru':[['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'], 
            ['', '', 'двадцать','тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'], 
            ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
            ['тысячa', 'тысячи', 'тысяч'],
            ['одна' , 'две']],

    'uk':[['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять', 'десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'], 
            ['', '', 'двадцять','тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'], 
            ['', 'сто', 'двісті', 'триста', 'чотириста', 'п\'ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев\'ятсот'],
            ['тисяча', 'тисячі', 'тисяч'],
            ['однa' , 'двi']],

    'en':[['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], 
            ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'], 
            ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
            ['thousand', 'thousands', 'thousand',],// тоже не знаю слогать
            ['one' , 'two']] // на гонево похоже )), а че делать
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

function translateAllNumbers(number, lang){
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
        translation += ' ' + declofNum(numArray[0], words[3]) + ' ';
        translation += translateThreeDigitNumber(numArray[1], lang);
        translation = translation.replace(words[0][1]+ ' ', words[4][0]+ ' ');
        translation = translation.replace(words[0][2]+ ' ', words[4][1]+ ' ');
    } else translation = '';

    return translation;
}

function declofNum(number, titles){ // перевод тысяча, тысячи, тысяч ....
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20) ? 2 :
    cases[(number%10<5) ? number%10 : 5] ];
}

