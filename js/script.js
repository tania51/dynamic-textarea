const text = document.getElementById('text-area').style;
// font bold
function textStyleChange() {
    text.fontWeight = 'bold';
    return;
}

function textStyleNormal() {
    text.fontWeight = 'normal';
    return;
}

// font italic
function fontItalick() {
    text.fontStyle = 'italic';
    return;
}

function fontNormal() {
    text.fontStyle = 'normal';
    return;
}

// font underline
function fontUnderline() {
    text.textDecoration = 'underline';
    return;
}


function fontUnderlineChange() {
    text.textDecoration = 'none';
    return;
}


// text align
function textAlignDefault() {
    text.textAlign = 'left';
    return;
}
function textAlignCenter() {
    text.textAlign = 'center';
    return;
}

function textAlignRight() {
    text.textAlign = 'right';
    return;
}

function textAlignJustify() {
    text.textAlign = 'justify';
}

// font size
function fontSize() {
    const inputFieldString = document.getElementById('font-size').value;
    const inputFieldValue = parseInt(inputFieldString);

    text.fontSize = inputFieldValue + 'px';
    return;
}

// text case
function textUpperCase() {
    text.textTransform = 'uppercase';
    return;
}
function textLowerCase() {
    text.textTransform = 'lowercase';
    return;
}


function colorPicker() {
    const color = document.getElementById('color-picker').value;
    text.color = color;
    return;
}
