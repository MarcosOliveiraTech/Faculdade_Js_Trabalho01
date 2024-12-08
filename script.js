// script.js
document.getElementById('gerar-tabuada').addEventListener('click', function () {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero) || numero < 1 || numero > 10) {
        resultadoDiv.textContent = "Por favor, insira um número válido entre 1 e 10.";
        return;
    }

    let tabuada = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    resultadoDiv.textContent = tabuada;
});
