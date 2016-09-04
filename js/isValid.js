function isValid(number) {
    if (isNaN(parseInt(number)) || number === null || number === true || number === false) {
        return false;
    } else {
        return true;
    }
}
