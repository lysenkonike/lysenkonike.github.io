function translateNumber(number, lang) {
    if (!isValid(number) || number.toString().length > 24 || /^0+/.test(number) || /^[' ']+/.test(number)) {
        return '';
    }

    if (Object.keys(languages).indexOf(lang) !== -1) {
        var words = languages[lang].words;
        if (Object.keys(languages[lang]).indexOf('fixCases') !== -1) {
            var fixCases = languages[lang].fixCases;
        }
    }

    var translation = '';
    var numArray = splitNumber(number);

    for (var i = 0; i < numArray.length; i++) {
        translation += translateThreeDigitNumber(numArray[i], lang);
        translation += numArray[i] !== '000' && numArray[i+1] ? ' ' + words[3][numArray.length - i] + ' ' : '';
        if(lang === 'en') {
            translation += numArray[i+1] && numArray[i+1] !== '000' &&  numArray[i+1] < 100 ? ' and ' : '';
        }
    }

    if (fixCases) {
        translation = fixCases(translation);
    }

    return translation;
}
