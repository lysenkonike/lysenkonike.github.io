var elementTheme = document.getElementById('theme-link');
var selectTheme = document.getElementsByName('selectTheme')[0];
var fileInput = document.getElementById('fileInput');
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var translationBlocks = document.getElementsByClassName('translation');

for (var i = 0; i < translationBlocks.length; i++) {
    translationBlocks[i].style.display = checkboxes[i].checked ? "" : "none";
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onchange = function() {
        var number = document.forms[0].number.value;
        if (this.checked) {
            document.getElementById('translation_' + this.value).textContent = translateNumber(number, this.value);
            document.getElementById('translation_' + this.value).style.display = "";
        } else {
            document.getElementById('translation_' + this.value).style.display = "none";
        }
    }
}

document.forms[0].number.oninput = function() {
    var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkedCheckboxes.length; i++) {
        document.getElementById('translation_' + checkedCheckboxes[i].value).textContent = translateNumber(this.value, checkedCheckboxes[i].value); 
    }
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

fileInput.onchange = function() {
    if (this.files[0] && this.files[0].type === "text/plain") {
        var reader = new FileReader();

        reader.onload = function() {
            var result = reader.result;
            document.forms[0].number.value = result;
            document.forms[0].number.oninput();
        }

        reader.readAsText(this.files[0]);
    }
}
