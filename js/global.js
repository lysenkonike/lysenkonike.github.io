var elementTheme = document.getElementById('theme-link');
var selectTheme = document.getElementsByName('selectTheme')[0];

document.forms[0].number.oninput = function() {
    document.getElementById('translation_ru').textContent = translateNumber(this.value, 'ru');
    document.getElementById('translation_uk').textContent = translateNumber(this.value, 'uk');
    document.getElementById('translation_en_us').textContent = translateNumber(this.value, 'en-us');
    document.getElementById('translation_en').textContent = translateNumber(this.value, 'en');
    if (typeof Number(this.value) === 'number' &&  this.value != localStorage.number) {
        localStorage.number = this.value;
    }
}

if (localStorage.number) {
    document.forms[0].number.value = localStorage.number;
    document.forms[0].number.oninput();
}

selectTheme.onchange = function() {
    elementTheme.href = 'vendor/' + this.value + '-theme.css';
    if (this.value != localStorage.actualTheme) {
        localStorage.actualTheme = this.value;
    }
}

if (localStorage.actualTheme) {
    selectTheme.value = localStorage.actualTheme;
    selectTheme.onchange();
}
