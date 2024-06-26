const form = document.querySelector('form#form-inputs')
const input_text: HTMLInputElement | null = document.querySelector('input#cidade_digitada')
const button = document.querySelector("button#btn_pesquisar_cidade")
const apresentacao = document.querySelector('section#apresentarDados')

form?.addEventListener("submit", async (evento) => {
    // evita o recarregamento da pagina
    evento.preventDefault()
    // Se input nao for encontrado returna
    if (!input_text || !apresentacao) return 
    // se nao
    const localizacao = input_text.value
    if (localizacao.length === 0){
        window.alert("Digite o nome da cidade")
        return
    }
   
    try{  // se der certo
        const reposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=390cb8c8fb7ea2e4f3023ae18eda0de2&lang=pt_br&units=metric`)
    
        const dados = await reposta.json()
    
        console.log(dados)
    
        const infos= {
            temperatura: Math.round(dados.main.temp),
            cidade: dados.name,
            descricao: dados.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    
        }
        
        // console.log(infos)
        apresentacao.innerHTML= 
        `
        <div class="dados-temperatura">
        <p class="cidade">${infos.cidade}</p>
        <h2 class="temp"> ${infos.temperatura}°C </h2>
        </div>
        <div class="img">
            <p class="img_descricao">${infos.descricao}</p>
            <img class="imgIcon" src="${infos.icon}">
        </div>
        
        `
        let alterarTema = dados.weather[0].main
        backgroundBody(alterarTema)
        
    } catch (err){ // se der erro
        window.alert("Por favor, digite uma cidade!")
        console.log("Erro: ", err)

    }

    

})

function backgroundBody(img: string) {
    let backgroundImage: string;

    switch (img) {
        case 'Clear':
            backgroundImage = 'imagens/ceu-limpo.jpg'; // Caminho da imagem de sol
            break;
        case 'Clouds':
            backgroundImage = 'imagens/Nuvens-quebradas.jpg'; // Caminho da imagem de chuva
            break;
        case 'rain':
            backgroundImage = 'imagens/chuva.jpg'
            break;
        default:
            backgroundImage = 'imagens/Poucas-nuvens.jpg'; // Caminho da imagem padrão
            break;
    }

    // Altera o estilo do body para usar a nova imagem de fundo
    document.body.style.backgroundImage = `url(${backgroundImage})`;
}