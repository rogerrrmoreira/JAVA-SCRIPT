function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);
    const resul = Math.floor(Math.random() * (max - min + 1)) + min;
    const btnSortear = document.querySelector('#btnSortear');  
  }
 
  ///////BOTAO SORTEAR/////
    const resultadoOutput = document.querySelector('.result');
    const dataAtualP = document.querySelector('.data-atual');

  btnSortear.addEventListener('click', () => { // Adiciona um evento de clique ao botão de sorteio para gerar um número aleatório quando clicado
    
     const minStr = document.querySelector('.input-min').value;
     const maxStr = document.querySelector('.input-max').value;

    if (minStr.trim() === '' || maxStr.trim() === '') {
    resultadoOutput.value = 'Por favor, preencha ambos os campos.';
    alert(resultadoOutput.value);
    refazerSorteio();
    return;
    }

    const min = Math.ceil(Number(minStr));
    const max = Math.floor(Number(maxStr));


    if (isNaN(min) || isNaN(max)) { // Verifica se os valores de entrada são números válidos
      resultadoOutput.value = 'Por favor, insira números válidos. Tente novamente.';
      alert(resultadoOutput.value);
      refazerSorteio()
      return; // Exibe um alerta para o usuário
    }

    if (min > max) {
      resultadoOutput.value = 'O mínimo deve ser menor ou igual ao máximo. Tente novamente.';
      alert(resultadoOutput.value);
      refazerSorteio()
      return; // Exibe um alerta para o usuário
    }

    
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    resultadoOutput.value = numeroAleatorio;
    dataAtualP.textContent = `Data do sorteio: ${getDataFormatada()}`;
    

  });

  //////FUNÇAO PARA PEGAR A DATA //////

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

/////BOTAO REFAZER/////
function refazerSorteio() {
  const min = document.querySelector('.input-min');
  const max = document.querySelector('.input-max');
  const resultadoOutput = document.querySelector('.result');
  const dataAtualP = document.querySelector('.data-atual');
  min.value = '';
  max.value = '';
  resultadoOutput.value = '';
  dataAtualP.textContent = '';
}

btnRefazer.addEventListener('click', refazerSorteio);