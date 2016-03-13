document.forms[0].number.oninput = function (){
    document.getElementById('translation_ru').textContent = translateNumber (this.value, 'ru');
    document.getElementById('translation_uk').textContent = translateNumber (this.value, 'uk');
    document.getElementById('translation_en_us').textContent = translateNumber (this.value, 'en-us');
    document.getElementById('translation_en').textContent = translateNumber (this.value, 'en');

}
