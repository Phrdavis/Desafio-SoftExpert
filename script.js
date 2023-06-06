//Declarando Variaveis

const cont = document.getElementById("img");
const cont2 = document.getElementById("img2");
const arrow = document.getElementById("arrow-des");
const lendo_txt = document.getElementById("continuar-lendo");
arrow.style.transform = "rotate(-90deg)"

const up = document.getElementById("up");
const seta = document.getElementById("seta");
const seta_link = document.getElementById("seta-link");
const modal = document.getElementById("modal");
const modal_body = document.getElementById("modal-body")
const email = document.getElementById("email");
const nome = document.getElementById("name");
const labels_ocult = document.querySelectorAll(".ocult");
const labels = document.querySelectorAll(".label");
const inputs = document.querySelectorAll(".modal-input");
const solucao = document.getElementById("solucao");

// Declarando Lista de imagens 1
const images1 = [
    "images/rolagem 1.1.png",
    "images/rolagem 1.2.png",
    "images/rolagem 1.3.png",
    "images/rolagem 1.4.png",
    "images/rolagem 1.5.png",
    "images/rolagem 1.6.png",
    "images/rolagem 1.7.png",
    "images/rolagem 1.8.png"
]
// Declarando Lista de imagens 2
const images2 = [
    "images/rolagem 2.1.png",
    "images/rolagem 2.2.png",
    "images/rolagem 2.3.png",
    "images/rolagem 2.4.png",
    "images/rolagem 2.5.png",
    "images/rolagem 2.6.png",
    "images/rolagem 2.7.png",
    "images/rolagem 2.8.png",
    "images/rolagem 2.9.png"
]

// Dispor screenshots na tela
for(let i = 0; i <= images1.length -1; i++){
    cont.innerHTML += `<img class="slider-img" src="${images1[i]}" alt="Screemshot${i}"></img>`
}
for(let i = 0; i <= images2.length -1; i++){
    cont2.innerHTML += `<img class="slider-img2" src="${images2[i]}" alt="Screemshot${i}"></img>`
}

// Declarando variaveis para slides
let rol = 1320;
let num = 0
let num2 = 0

// Função proxima seção slides 1
function next(){
    if(num == 0){
        cont.style.transform += `translateX(-${rol}px)`
        num = 1
    }
    else{
        cont.style.transform += `translateX(${rol}px)`
        num = 0
    }
}

// Função proxima seção slides 2
function next2(){
    if(num2 == 0){
        cont2.style.transform += `translateX(-${rol}px)`
        num2 = 1
    }
    else if(num2 == 1){
        cont2.style.transform += `translateX(-${rol}px)`
        num2 = 2
    }
    else{
        cont2.style.transform += `translateX(${num2 * rol}px)`
        num2 = 0
    }
}
// Função para seção Continuar lendo
function continuos(){
    if(arrow.style.transform == "rotate(-90deg)"){
        arrow.style.transform = "rotate(0deg)"
        lendo_txt.innerHTML += "<p class='txt-des'>Pressões por preço, aumento de maturidade dos produtos e serviços, e inovações tecnológicas são obstáculos presentes no sucesso do negócio, onde apenas um destes itens isoladamente não mais mantém a fidelidade dos seus clientes e mercados de atuação.</p>"
        lendo_txt.innerHTML += "<p class='txt-des'>Diante destas pressões de ordem econômica e de mercado, os líderes da organizações enfrentam continuamente muitas questões complicadas. Como maximizar os lucros da organização sem sacrificar um nível diferenciado de atendimento aos clientes? Como aumentar ao mesmo tempo a satisfação dos clientes e dos funcionários? Como atender as exigências regulamentares eficazmente sem prejudicar a produtividade das operações? Como recrutar e reter os profissionais talentosos? Como assegurar que as metas da organização são perseguidas por cada individuo na organização?</p>"
        lendo_txt.innerHTML += "<p class='txt-des'>O Modelo de Excelência em Gestão é o uso sistemático das práticas e ferramentas chaves na gestão do negócio, com o objetivo de elevar o desempenho em todas as áreas e operações da organização fundamentado nos princípios da melhoria contínua, gestão preventiva e foco em resultados. Entre as ferramentas aplicadas estão o Balanced Scorecard (BSC), gestão por processos, GRC, qualidade total (TQM), Lean Six Sigma, gestão de projetos, e diversas outras.</p>"
    }
    else{
        arrow.style.transform = "rotate(-90deg)"
        lendo_txt.innerHTML = ""
    }
    
}


// Função para Modal aparecer na tela
function modal_email(){
    if(modal.style.visibility == "visible"){
        modal.style.visibility = "hidden"
    }else{
        modal.style.visibility = "visible"
    }
}

// Função para fechar modal
function close_modal(){
    modal.style.visibility = "hidden"
    for(var i = 0; i <= inputs.length; i++){
        inputs[i].value = ""
    }
    for(var i = 0; i <= labels.length; i++){
        labels[i].value = ""
    }
}

// Adicionando evento de scroll para botão de voltar ao topo
document.addEventListener("scroll", function(){
    var posicionY = window.pageYOffset;
    
    if(posicionY > 600){
        seta.style.position = "fixed"
        seta.style.bottom = "5em"
        seta.style.zIndex = "30"
        seta.style.transform = 'rotate(180deg)'
        seta_link.href = "#navbar"
    }
    else{
        seta.style.position = "absolute"
        seta.style.zIndex = "30"
        seta.style.transform = 'rotate(0deg)'
        seta_link.href = "#logo-soft"
    }
})

//Fazendo função com evento de mousemove para extender o modal
function modal_extend(){

    document.addEventListener("mousemove", ()=>{
        if(nome.value != ""){
            for(var i = 0; i <= labels_ocult.length; i++){
                labels_ocult[i].style.visibility = "visible"
                modal.style.height = "800px"
                modal_body.style.height = "1000px"
                modal_body.style.transform = "translatey(250px)"
                modal.style.overflowY = "scroll"
            }
        }
        else{
            for(var i = 0; i <= labels_ocult.length; i++){
                labels_ocult[i].style.visibility = "hidden"
                modal.style.height = "450px"
                modal_body.style.height = "auto"
                modal_body.style.transform = "translatey(420px)"
                modal.style.overflowY = "hidden"
            }
        }
    })
}

