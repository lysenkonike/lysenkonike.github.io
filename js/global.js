document.forms[0].number.oninput = function() {
    document.getElementById('translation_ru').textContent = translateNumber(this.value, 'ru');
    document.getElementById('translation_uk').textContent = translateNumber(this.value, 'uk');
    document.getElementById('translation_en_us').textContent = translateNumber(this.value, 'en-us');
    document.getElementById('translation_en').textContent = translateNumber(this.value, 'en');

}

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
]
var i = localStorage.number_theme ? localStorage.number_theme : 0;
var theme = document.getElementsByTagName('link')[1];

window.onload = function() {
    theme.href = arrayThemes[i];
}

document.getElementById('next_theme').onclick = function() {
    i++;
    i == 10 ? i = 0 : false;
    theme.href = arrayThemes[i];
    localStorage.setItem('number_theme', i);
}
