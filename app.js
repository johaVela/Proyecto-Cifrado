
function cifrarTexto() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText);
    document.getElementById('outputText').value = encryptedText;
}

function decifrarTexto() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText);
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        document.getElementById('outputText').value = 'Error: Texto no válido para desencriptar';
    }
}

function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado: ' + outputText.value);
}

function validateInput() {
/*    const inputText = document.getElementById('inputText');
    const originalValue = inputText.value;
    const filteredValue = originalValue.replace(/[^a-z\s]/g, '');
    if (originalValue !== filteredValue) {
        alert('No se permiten letras mayúsculas ni caracteres especiales.');
    }
    inputText.value = filteredValue;*/
}