var languages = {
    'ru': {
        'words': [
            ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
            ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
            ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
            ['', '', 'тысяча', 'миллион', 'миллиард', 'триллион']
        ]
    },

    'uk': {
        'words': [
            ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять', 'десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'],
            ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'],
            ['', 'сто', 'двісті', 'триста', 'чотириста', 'п\'ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев\'ятсот'],
            ['', '', 'тисяча', 'мільйон', 'мільярд', 'трильйон']
        ]
    },

    'en': {
        'words': [
            ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
            ['', '', 'thousand', 'million', 'billion', 'trillion']
        ]
    }
}



function translateNumber(number, lang) {
    if (!isValid(number) || number.toString().length > 15) {
        return '';
    }

    if (Object.keys(languages).indexOf(lang) !== -1) {
        words = languages[lang].words;
    }

    var translation = '';
    number = parseInt(number).toString();
    var numArray = splitNumber(number);

    for (var i = 0; i < numArray.length; i++) {
        translation += translateThreeDigitNumber(numArray[i], lang);
        translation += numArray[i] !== '000' ? ' ' + words[3][numArray.length - i] + ' ' : '';
    }

    return translation;
}

