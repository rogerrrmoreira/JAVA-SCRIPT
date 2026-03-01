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
    dataAtualP.textContent = `Data do sorteio: ${getDataFormatada()}`;
  });

  //////FUNÇAO PARA DARA //////

  const zeroEsquerda = num => (num < 10 ? '0' + num : num);

function getDataFormatada() {
  const agora = new Date();

  const dia = zeroEsquerda(agora.getDate());
  const mes = zeroEsquerda(agora.getMonth() + 1);
  const ano = agora.getFullYear();
  const hora = zeroEsquerda(agora.getHours());
  const minutos = zeroEsquerda(agora.getMinutes());
  const segundos = zeroEsquerda(agora.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const dataAtualP = document.querySelector('.data-atual');