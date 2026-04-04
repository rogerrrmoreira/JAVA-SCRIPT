const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select-to-convert');
const currencySelectFrom = document.querySelector('.currency-select-from-convert');

async function convertValues (){ //essa função tem a função de converter os valores, utilizando o valor do input e o valor da moeda selecionada para converter o valor, além de formatar os valores para o formato de moeda
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector('.currency-value');
    const currencyValueConverted = document.querySelector('.currency-value-to-convert');

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL')
    .then(response => response.json())
    
    console.log(currencySelect.value + ' to ' + currencySelectFrom.value); // essa linha é apenas para verificar se o valor da moeda selecionada está sendo capturado corretamente, ela pode ser removida depois de verificar isso
        const dolarToday = data.USDBRL.high;
        const euroToday = data.EURBRL.high;
        const libraToday = data.GBPBRL.high;
        const bitcoinToday = data.BTCBRL.high;
        const realToday = 1.0; // essa linha é apenas para verificar se o valor do real está sendo capturado corretamente, ela pode ser removida depois de verificar isso   
         
    if(currencySelectFrom.value === 'USD'){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency'
        , currency: 'USD'
        }).format(inputCurrencyValue);
    }
    if(currencySelectFrom.value === 'EUR'){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency'
        , currency: 'EUR' 
        }).format(inputCurrencyValue);
    }
    if(currencySelectFrom.value === 'GBP'){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency'
        , currency: 'GBP'
        }).format(inputCurrencyValue);
    }
    if(currencySelectFrom.value === 'BTC'){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency'
        , currency: 'BTC'
        }).format(inputCurrencyValue);   
    }
    if(currencySelectFrom.value === 'BRL'){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency'
        , currency: 'BRL'
        }).format(inputCurrencyValue);  // essa linha é apenas para formatar o valor do input para o formato de moeda brasileira, ela pode ser removida depois de verificar isso
    }


 ///////////////////// //TROCA O VALOR DA FOI CONVERTIDA
    if(currencySelect.value === 'USD'){

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency'
        , currency: 'USD'
        }).format(inputCurrencyValue / dolarToday);
    }   

    if(currencySelect.value === 'EUR'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency'
        , currency: 'EUR'
        }).format(inputCurrencyValue / euroToday);
    }

    if(currencySelect.value === 'GBP'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency'
        , currency: 'GBP'
        }).format(inputCurrencyValue / libraToday);
    }

    if(currencySelect.value === 'BTC'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency'
        , currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday);   
    }

    if(currencySelect.value === 'BRL'){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency'
        , currency: 'BRL'
    }).format(inputCurrencyValue / realToday); // essa linha é apenas para formatar o valor do input para o formato de moeda brasileira, ela pode ser removida depois de verificar isso
    }
    
}

function changeCurrency(){ //essa função tem a função de mudar o nome da moeda e a imagem da moeda, além de chamar a função de converter os valores para atualizar a conversão
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.querySelector('.currency-img');
    const currencyNameFrom = document.getElementById('currency-name-from');
    const currencyImgFrom = document.querySelector('.currency-img-from');
    


    if(currencySelectFrom.value === 'USD'){
        currencyNameFrom.innerHTML = 'Dólar Americano';
        currencyImgFrom.src = './assets/dolar.png';
    }
    if(currencySelectFrom.value === 'EUR'){
        currencyNameFrom.innerHTML = 'Euro';
        currencyImgFrom.src = './assets/euro.png';
    }
    if(currencySelectFrom.value === 'GBP'){
        currencyNameFrom.innerHTML = 'Libra Esterlina';
        currencyImgFrom.src = './assets/libra.png';
    }
    if(currencySelectFrom.value === 'BTC'){
        currencyNameFrom.innerHTML = 'Bitcoin';
        currencyImgFrom.src = './assets/bitcoin.png';
    }
    if(currencySelectFrom.value === 'BRL'){
        currencyNameFrom.innerHTML = 'Real Brasileiro';
        currencyImgFrom.src = './assets/real.png';
    }
 ////TROCA A IMAGEM E NOMENCLATURA DA MOEDA A SER CONVERTIDA
    if(currencySelect.value === 'USD'){ //essa linha é apenas para verificar se o valor da moeda selecionada está sendo capturado corretamente, ela pode ser removida depois de verificar isso

    currencyName.innerHTML = 'Dólar Americano';
    currencyImg.src = './assets/dolar.png';
} 
    if(currencySelect.value === 'EUR'){

    currencyName.innerHTML = 'Euro';
    currencyImg.src = './assets/euro.png';
}
    if(currencySelect.value === 'GBP'){

    currencyName.innerHTML = 'Libra Esterlina';
    currencyImg.src = './assets/libra.png';
}
    if(currencySelect.value === 'BTC'){

    currencyName.innerHTML = 'Bitcoin';
    currencyImg.src = './assets/bitcoin.png';
}
    if(currencySelect.value === 'BRL'){

    currencyName.innerHTML = 'Real Brasileiro';
    currencyImg.src = './assets/real.png';
}
    convertValues();
} 



currencySelect.addEventListener('change', changeCurrency);

currencySelectFrom.addEventListener('change', changeCurrency);

convertButton.addEventListener('click', convertValues);