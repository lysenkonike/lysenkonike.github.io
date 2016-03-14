var i = localStorage.number_theme ? localStorage.number_theme : 0;
var theme = document.getElementsByTagName('link')[1];
var arrayThemes = ['vendor/bootstrap-theme.css',
    'vendor/bootstrap-theme1.css',
    'vendor/bootstrap-theme2.css',
    'vendor/bootstrap-theme3.css',
    'vendor/bootstrap-theme4.css',
    'vendor/bootstrap-theme5.css',
    'vendor/bootstrap-theme6.css',
    'vendor/bootstrap-theme7.css',
    'vendor/bootstrap-theme8.css',
    'vendor/bootstrap-theme9.css'
];

document.forms[0].number.oninput = function() {
    document.getElementById('translation_ru').textContent = translateNumber(this.value, 'ru');
    document.getElementById('translation_uk').textContent = translateNumber(this.value, 'uk');
    document.getElementById('translation_en_us').textContent = translateNumber(this.value, 'en-us');
    document.getElementById('translation_en').textContent = translateNumber(this.value, 'en');
    localStorage.num = this.value;

}

window.onload = function() {
    theme.href = arrayThemes[i];

    if(localStorage.num){
        document.forms[0].number.value = localStorage.num;
    }

    document.getElementById('translation_ru').textContent = translateNumber(localStorage.num, 'ru');
    document.getElementById('translation_uk').textContent = translateNumber(localStorage.num, 'uk');
    document.getElementById('translation_en_us').textContent = translateNumber(localStorage.num, 'en-us');
    document.getElementById('translation_en').textContent = translateNumber(localStorage.num, 'en');
}

document.getElementById('next_theme').onclick = function() {
    i++;
    if(i == 10) i = 0;
    theme.href = arrayThemes[i];
    localStorage['number_theme'] = i;
}
