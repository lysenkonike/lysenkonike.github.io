var themeLink = document.getElementById('theme-link'),
    themeSelect = document.getElementsByName('themeSelect')[0],
    fileInput = document.getElementById('fileInput'),
    numberInput = document.forms[0].number,
    checkboxes = document.querySelectorAll('input[type="checkbox"]'),
    radio = document.querySelectorAll('input[type="radio"]'),
    radioLang = document.querySelector('input[type="radio"]:checked').value;
    contentFile = document.getElementById('contentFile'),
    translationBlocks = document.getElementsByClassName('translation'),
    translationFileBlock = document.getElementById('translationFile');

for (var i = 0; i < translationBlocks.length; i++) {
    translationBlocks[i].style.display = checkboxes[i].checked ? "" : "none";
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onchange = function() {
        if (this.checked) {
            document.getElementById('translation_' + this.value).textContent = translateNumber(numberInput.value, this.value);
            document.getElementById('translation_' + this.value).style.display = "";
        } else {
            document.getElementById('translation_' + this.value).style.display = "none";
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
            contentFile.textContent = result;
            translationFileBlock.textContent = translateNumber(result, radioLang);
        }

        reader.readAsText(this.files[0]);
    }
}

var tabs = document.querySelectorAll('a[data-toggle="tab"]');
var checkboxDiv = document.querySelectorAll('div.checkbox');
var radioDiv = document.querySelectorAll('div.radio');

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
        if(/online$/.test(this.href)){
            for (var i = 0; i < radioDiv.length; i++) {
                radioDiv[i].style.display = "none";
                checkboxDiv[i].style.display = "";
            }
        } else if (/file$/.test(this.href)) {
            for (var i = 0; i < checkboxDiv.length; i++) {
                checkboxDiv[i].style.display = "none";
                radioDiv[i].style.display = "";
            }
        }
    }
}

for (var i = 0; i < radio.length; i++) {
    radio[i].onchange = function() {
        if (this.checked) {
            translationFileBlock.textContent = translateNumber(contentFile.textContent, this.value)
        }
    }
}
