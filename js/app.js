var themeLink = document.getElementById('theme-link'),
    themeSelect = document.getElementsByName('themeSelect')[0],
    fileInput = document.getElementById('fileInput'),
    numberInput = document.forms[0].number,
    checkboxes = document.querySelectorAll('input[type="checkbox"]'),
    translationBlocks = document.getElementsByClassName('translation');

for (var i = 0; i < translationBlocks.length; i++) {
    translationBlocks[i].style.display = checkboxes[i].checked ? "" : "none";
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onchange = function() {
        if (this.checked) {
            document.getElementById('translation_' + this.value).textContent = translateNumber(numberInput.value, this.value);
            document.getElementById('block-' + this.value).style.display = "";
        } else {
            document.getElementById('block-' + this.value).style.display = "none";
        }
    }
}

numberInput.oninput = function() {
    var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkedCheckboxes.length; i++) {
        document.getElementById('translation_' + checkedCheckboxes[i].value).textContent = translateNumber(this.value, checkedCheckboxes[i].value); 
    }
    if (typeof Number(this.value) === 'number' &&  this.value != localStorage.number) {
        localStorage.number = this.value;
    }
}

if (localStorage.number) {
    numberInput.value = localStorage.number;
    numberInput.oninput();
}

themeSelect.onchange = function() {
    themeLink.href = 'vendor/' + this.value + '-theme.css';
    if (this.value != localStorage.theme) {
        localStorage.theme = this.value;
    }
}

if (localStorage.theme) {
    themeSelect.value = localStorage.theme;
    themeSelect.onchange();
}

fileInput.onchange = function() {
    if (this.files[0] && this.files[0].type === "text/plain") {
        var reader = new FileReader();

        reader.onload = function() {
            var result = reader.result;
            numberInput.value = result;
            numberInput.oninput();
        }

        reader.readAsText(this.files[0]);
    }
}
