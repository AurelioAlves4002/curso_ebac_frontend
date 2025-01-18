// Elementos do Formulário

const submitButton = document.getElementById('submitBtn');
const resultadoDiv = document.getElementById('resultado');

// Evento de clique no botão

submitButton.addEventListener('click', () => {
    // Valores dos campos
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Verificar se os valores são validos 
    if (isNaN(number1) || isNaN(number2)) {
        resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira números válidos!</p>';
        resultadoDiv.className = '';
        resultadoDiv.style.display = 'block';
        return;
    }

    // Comparação dos numeros e exibir a mensagem
    if (number2 > number1) {
        resultadoDiv.innerHTML = `<p>Número 2 (<strong>${number2}</strong>) é maior que Número 1 (<strong>${number1}</strong>). Boa escolha!</p>`;
        resultadoDiv.className = 'positivo';
    } else {
        resultadoDiv.innerHTML = `<p>Número 2 (<strong>${number2}</strong>) é menor ou igual a Número 1 (<strong>${number1}</strong>). Tente novamente.</p>`;
        resultadoDiv.className = 'negativo'
    };

    resultadoDiv.style.display = 'block';
});

