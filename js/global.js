var languages = {
    ru: {
        words: [
            ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
            ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
            ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
            ['', '', 'тысяч', 'миллионов', 'миллиардов', 'триллионов']
        ],
        fixCases: function(translation) {
            translation = translation.replace('один тысяч', 'одна тысяча').replace('два тысяч', 'две тысячи').replace('три тысяч', 'три тысячи').replace('четыре тысяч', 'четыре тысячи');
            translation = translation.replace('один миллионов', 'один миллион').replace('два миллионов', 'два миллиона').replace('три миллионов', 'три миллиона').replace('четыре миллионов', 'четыре миллиона');
            translation = translation.replace('один миллиардов', 'один миллиард').replace('два миллиардов', 'два миллиарда').replace('три миллиардов', 'три миллиарда').replace('четыре миллиардов', 'четыре миллиарда');
            translation = translation.replace('один триллионов', 'один триллион').replace('два триллионов', 'два триллиона').replace('три триллионов', 'три триллиона').replace('четыре триллионов', 'четыре триллиона');
            return translation;
        }
    },
    uk: {
        words: [
            ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять', 'десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'],
            ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'],
            ['', 'сто', 'двісті', 'триста', 'чотириста', 'п\'ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев\'ятсот'],
            ['', '', 'тисяч', 'мільйонів', 'мільярдів', 'трильйонів']
        ],
        fixCases: function(translation) {
            translation = translation.replace('один тисяч', 'одна тисяча').replace('два тисяч', 'дві тисячі').replace('три тисяч', 'три тисячі').replace('чотири тисяч', 'чотири тисячі');
            translation = translation.replace('один мільйонів', 'один мільйон').replace('два мільйонів', 'два мільйони').replace('три мільйонів', 'три мільйони').replace('чотири мільйонів', 'чотири мільйони');
            translation = translation.replace('один мільярдів', 'один мільярд').replace('два мільярдів', 'два мільярди').replace('три мільярдів', 'три мільярди').replace('чотири мільярдів', 'чотири мільярди');
            translation = translation.replace('один трильйонів', 'один трильйон').replace('два трильйонів', 'два трильйони').replace('три трильйонів', 'три трильйони').replace('чотири трильйонів', 'чотири трильйони');
            return translation;
        }
    },
    en: {
        words: [
            ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
            ['', '', 'thousand', 'million', 'billion', 'trillion']
        ]
    },
    gb: {
        words: [
            ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            ['', 'one hundred and', 'two hundred and', 'three hundred and', 'four hundred and', 'five hundred and', 'six hundred and', 'seven hundred and', 'eight hundred and', 'nine hundred and'],
            ['', '', 'thousand and', 'million and', 'billion and', 'trillion and']
        ],
        fixCases: function(translation) {
            translation = translation.replace(/and  thousand/, 'thousand').replace(/and  million/, 'million').replace(/and  billion/, 'billion').replace(/and  trillion/, 'trillion');
            translation = translation.replace(/thousand and one hundred/, 'thousand one hundred').replace(/thousand and two hundred/, 'thousand two hundred').replace(/thousand and three hundred/, 'thousand three hundred').replace(/thousand and four hundred/, 'thousand four hundred').replace(/thousand and five hundred/, 'thousand five hundred').replace(/thousand and six hundred/, 'thousand six hundred').replace(/thousand and seven hundred/, 'thousand seven hundred').replace(/thousand and eight hundred/, 'thousand eight hundred').replace(/thousand and nine hundred/, 'thousand nine hundred');
            translation = translation.replace(/million and one hundred/, 'million one hundred').replace(/million and two hundred/, 'million two hundred').replace(/million and three hundred/, 'million three hundred').replace(/million and four hundred/, 'million four hundred').replace(/million and five hundred/, 'million five hundred').replace(/million and six hundred/, 'million six hundred').replace(/million and seven hundred/, 'million seven hundred').replace(/million and eight hundred/, 'million eight hundred').replace(/million and nine hundred/, 'million nine hundred');
            translation = translation.replace(/billion and one hundred/, 'billion one hundred').replace(/billion and two hundred/, 'billion two hundred').replace(/billion and three hundred/, 'billion three hundred').replace(/billion and four hundred/, 'billion four hundred').replace(/billion and five hundred/, 'billion five hundred').replace(/billion and six hundred/, 'billion six hundred').replace(/billion and seven hundred/, 'billion seven hundred').replace(/billion and eight hundred/, 'billion eight hundred').replace(/billion and nine hundred/, 'billion nine hundred');
            translation = translation.replace(/trillion and one hundred/, 'trillion one hundred').replace(/trillion and two hundred/, 'trillion two hundred').replace(/trillion and three hundred/, 'trillion three hundred').replace(/trillion and four hundred/, 'trillion four hundred').replace(/trillion and five hundred/, 'trillion five hundred').replace(/trillion and six hundred/, 'trillion six hundred').replace(/trillion and seven hundred/, 'trillion seven hundred').replace(/trillion and eight hundred/, 'trillion eight hundred').replace(/trillion and nine hundred/, 'trillion nine hundred');
            translation = translation.replace(/ and $/, '');
            
            return translation;
        }
    }
}



function translateNumber(number, lang) {
    if (!isValid(number) || number.toString().length > 15) {
        return '';
    }

    if (Object.keys(languages).indexOf(lang) !== -1) {
        var words = languages[lang].words;
        if (Object.keys(languages[lang]).indexOf('fixCases') !== -1) {
            var fixCases = languages[lang].fixCases;
        }
    }

    var translation = '';
    number = parseInt(number).toString();
    var numArray = splitNumber(number);

    for (var i = 0; i < numArray.length; i++) {
        translation += translateThreeDigitNumber(numArray[i], lang);
        translation += numArray[i] !== '000' && numArray[i+1] ? ' ' + words[3][numArray.length - i] + ' ' : '';
    }

    if (fixCases) {
        translation = fixCases(translation);
    }

    return translation;
}

