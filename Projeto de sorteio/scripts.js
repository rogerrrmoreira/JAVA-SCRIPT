function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);
    const resul = Math.floor(Math.random() * (max - min + 1)) + min;
    const btnSortear = document.querySelector('#btnSortear');
    const resultadoOutput = document.querySelector('.result');

  }

  const resultadoOutput = document.querySelector('.result');

  btnSortear.addEventListener('click', () => {
    
     const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);
    
    if (isNaN(min) || isNaN(max)) {
      resultadoOutput.value = 'Por favor, insira números válidos.';
      return;
    }

    if (min > max) {
      resultadoOutput.value = 'O mínimo deve ser menor ou igual ao máximo.';
      return;
    }

    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    resultadoOutput.value = numeroAleatorio;
  });
