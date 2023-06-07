//Declarando Variaveis

const cont1 = document.getElementById("img1");
const cont2 = document.getElementById("img2");
const cont3 = document.getElementById("img3");
const cont4 = document.getElementById("img4");
const cont5 = document.getElementById("img5");
const cont6 = document.getElementById("img6");
const cont7 = document.getElementById("img7");
const cont8 = document.getElementById("img8");

const cont9 = document.getElementById("img9");
const cont10 = document.getElementById("img10");
const cont11 = document.getElementById("img11");
const cont12 = document.getElementById("img12");
const cont13 = document.getElementById("img13");
const cont14 = document.getElementById("img14");
const cont15 = document.getElementById("img15");
const cont16 = document.getElementById("img16");
const cont17 = document.getElementById("img17");

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
const video_play = document.getElementById("video-play");
const video = document.getElementById("video");
const chat_open = document.getElementById("chat");
const notific = document.getElementById("notific");

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

cont1.innerHTML = `<img class="cont-img-fit" src="${images1[0]}" alt="">`
cont2.innerHTML = `<img class="cont-img-fit" src="${images1[1]}" alt="">`
cont3.innerHTML = `<img class="cont-img-fit" src="${images1[2]}" alt="">`
cont4.innerHTML = `<img class="cont-img-fit" src="${images1[3]}" alt="">`
cont5.innerHTML = `<img class="cont-img-fit" src="${images1[4]}" alt="">`
cont6.innerHTML = `<img class="cont-img-fit" src="${images1[5]}" alt="">`
cont7.innerHTML = `<img class="cont-img-fit" src="${images1[6]}" alt="">`
cont8.innerHTML = `<img class="cont-img-fit" src="${images1[7]}" alt="">`


cont9.innerHTML = `<img class="cont-img-fit" src="${images2[0]}" alt="">`
cont10.innerHTML = `<img class="cont-img-fit" src="${images2[1]}" alt="">`
cont11.innerHTML = `<img class="cont-img-fit" src="${images2[2]}" alt="">`
cont12.innerHTML = `<img class="cont-img-fit" src="${images2[3]}" alt="">`
cont13.innerHTML = `<img class="cont-img-fit" src="${images2[4]}" alt="">`
cont14.innerHTML = `<img class="cont-img-fit" src="${images2[5]}" alt="">`
cont15.innerHTML = `<img class="cont-img-fit" src="${images2[6]}" alt="">`
cont16.innerHTML = `<img class="cont-img-fit" src="${images2[7]}" alt="">`
cont17.innerHTML = `<img class="cont-img-fit" src="${images2[8]}" alt="">`

var num = 0
var num2 = 0
var i = 0
function next1(){

    if(num == 0){
        cont5.innerHTML = `<img class="cont-img-fit" src="${images1[0]}" alt="">`
        cont6.innerHTML = `<img class="cont-img-fit" src="${images1[1]}" alt="">`
        cont7.innerHTML = `<img class="cont-img-fit" src="${images1[2]}" alt="">`
        cont8.innerHTML = `<img class="cont-img-fit" src="${images1[3]}" alt="">`
        
        cont1.innerHTML = `<img class="cont-img-fit" src="${images1[4]}" alt="">`
        cont2.innerHTML = `<img class="cont-img-fit" src="${images1[5]}" alt="">`
        cont3.innerHTML = `<img class="cont-img-fit" src="${images1[6]}" alt="">`
        cont4.innerHTML = `<img class="cont-img-fit" src="${images1[7]}" alt="">`
        
        
        cont1.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont2.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont3.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont4.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont5.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont6.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont7.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont8.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });

        num = 1
    }
    else if(num == 1){
        cont5.innerHTML = `<img class="cont-img-fit" src="${images1[4]}" alt="">`
        cont6.innerHTML = `<img class="cont-img-fit" src="${images1[5]}" alt="">`
        cont7.innerHTML = `<img class="cont-img-fit" src="${images1[6]}" alt="">`
        cont8.innerHTML = `<img class="cont-img-fit" src="${images1[7]}" alt="">`
        
        cont1.innerHTML = `<img class="cont-img-fit" src="${images1[0]}" alt="">`
        cont2.innerHTML = `<img class="cont-img-fit" src="${images1[1]}" alt="">`
        cont3.innerHTML = `<img class="cont-img-fit" src="${images1[2]}" alt="">`
        cont4.innerHTML = `<img class="cont-img-fit" src="${images1[3]}" alt="">`
        
        
        cont1.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont2.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont3.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont4.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont5.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont6.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont7.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont8.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        num = 0
    }

}
function prev1(){

    if(num == 0){
        cont5.innerHTML = `<img class="cont-img-fit" src="${images1[0]}" alt="">`
        cont6.innerHTML = `<img class="cont-img-fit" src="${images1[1]}" alt="">`
        cont7.innerHTML = `<img class="cont-img-fit" src="${images1[2]}" alt="">`
        cont8.innerHTML = `<img class="cont-img-fit" src="${images1[3]}" alt="">`
        
        cont1.innerHTML = `<img class="cont-img-fit" src="${images1[4]}" alt="">`
        cont2.innerHTML = `<img class="cont-img-fit" src="${images1[5]}" alt="">`
        cont3.innerHTML = `<img class="cont-img-fit" src="${images1[6]}" alt="">`
        cont4.innerHTML = `<img class="cont-img-fit" src="${images1[7]}" alt="">`
        
        
        cont1.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont2.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont3.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont4.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont5.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont6.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont7.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont8.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });

        num = 1
    }
    else if(num == 1){
        cont5.innerHTML = `<img class="cont-img-fit" src="${images1[4]}" alt="">`
        cont6.innerHTML = `<img class="cont-img-fit" src="${images1[5]}" alt="">`
        cont7.innerHTML = `<img class="cont-img-fit" src="${images1[6]}" alt="">`
        cont8.innerHTML = `<img class="cont-img-fit" src="${images1[7]}" alt="">`
        
        cont1.innerHTML = `<img class="cont-img-fit" src="${images1[0]}" alt="">`
        cont2.innerHTML = `<img class="cont-img-fit" src="${images1[1]}" alt="">`
        cont3.innerHTML = `<img class="cont-img-fit" src="${images1[2]}" alt="">`
        cont4.innerHTML = `<img class="cont-img-fit" src="${images1[3]}" alt="">`
        
        
        cont1.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont2.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont3.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont4.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont5.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont6.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont7.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont8.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        num = 0
    }

}
function next2(){
    
    if(num == 0){
        cont13.innerHTML = `<img class="cont-img-fit" src="${images2[0]}" alt="">`
        cont14.innerHTML = `<img class="cont-img-fit" src="${images2[1]}" alt="">`
        cont15.innerHTML = `<img class="cont-img-fit" src="${images2[2]}" alt="">`
        cont16.innerHTML = `<img class="cont-img-fit" src="${images2[3]}" alt="">`

        cont17.innerHTML = `<img class="cont-img-fit" src="${images2[4]}" alt="">`
        cont9.innerHTML = `<img class="cont-img-fit" src="${images2[5]}" alt="">`
        cont10.innerHTML = `<img class="cont-img-fit" src="${images2[6]}" alt="">`
        cont11.innerHTML = `<img class="cont-img-fit" src="${images2[7]}" alt="">`

        cont12.innerHTML = `<img class="cont-img-fit" src="${images2[8]}" alt="">`
        
        cont9.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont10.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont11.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont12.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont13.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont14.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont15.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont16.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont17.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });

        num = 1
    }
    else if(num == 1){
        cont14.innerHTML = `<img class="cont-img-fit" src="${images2[5]}" alt="">`
        cont15.innerHTML = `<img class="cont-img-fit" src="${images2[6]}" alt="">`
        cont16.innerHTML = `<img class="cont-img-fit" src="${images2[7]}" alt="">`
        cont17.innerHTML = `<img class="cont-img-fit" src="${images2[8]}" alt="">`
        
        cont9.innerHTML = `<img class="cont-img-fit" src="${images2[0]}" alt="">`
        cont10.innerHTML = `<img class="cont-img-fit" src="${images2[1]}" alt="">`
        cont11.innerHTML = `<img class="cont-img-fit" src="${images2[2]}" alt="">`
        cont12.innerHTML = `<img class="cont-img-fit" src="${images2[3]}" alt="">`

        cont13.innerHTML = `<img class="cont-img-fit" src="${images2[4]}" alt="">`
        
        
        cont9.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont10.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont11.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont12.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont13.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont14.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont15.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont16.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont17.animate([
            {transform: "translateX(40em)"},
            {transform: "translateX(-40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        num = 0
    }
}
function prev2(){
    
    if(num == 0){
        cont13.innerHTML = `<img class="cont-img-fit" src="${images2[i]}" alt="">`
        cont14.innerHTML = `<img class="cont-img-fit" src="${images2[i+1]}" alt="">`
        cont15.innerHTML = `<img class="cont-img-fit" src="${images2[i+2]}" alt="">`
        cont16.innerHTML = `<img class="cont-img-fit" src="${images2[i+3]}" alt="">`

        cont17.innerHTML = `<img class="cont-img-fit" src="${images2[i+4]}" alt="">`
        cont9.innerHTML = `<img class="cont-img-fit" src="${images2[i+5]}" alt="">`
        cont10.innerHTML = `<img class="cont-img-fit" src="${images2[i+6]}" alt="">`
        cont11.innerHTML = `<img class="cont-img-fit" src="${images2[i+7]}" alt="">`

        cont12.innerHTML = `<img class="cont-img-fit" src="${images2[i+8]}" alt="">`
        
        
        cont9.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont10.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont11.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont12.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont13.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont14.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont15.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont16.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont17.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });

        num = 1
        i = 0
    }
    else if(num == 1){
        cont14.innerHTML = `<img class="cont-img-fit" src="${images2[i+5]}" alt="">`
        cont15.innerHTML = `<img class="cont-img-fit" src="${images2[i+6]}" alt="">`
        cont16.innerHTML = `<img class="cont-img-fit" src="${images2[i+7]}" alt="">`
        cont17.innerHTML = `<img class="cont-img-fit" src="${images2[i+8]}" alt="">`
        
        cont9.innerHTML = `<img class="cont-img-fit" src="${images2[i]}" alt="">`
        cont10.innerHTML = `<img class="cont-img-fit" src="${images2[i+1]}" alt="">`
        cont11.innerHTML = `<img class="cont-img-fit" src="${images2[i+2]}" alt="">`
        cont12.innerHTML = `<img class="cont-img-fit" src="${images2[i+3]}" alt="">`

        cont13.innerHTML = `<img class="cont-img-fit" src="${images2[i+4]}" alt="">`
        
        
        cont9.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont10.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont11.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont12.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        cont13.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont14.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont15.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont16.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        cont17.animate([
            {transform: "translateX(-40em)"},
            {transform: "translateX(40em)",
            transition: "all 0.3s ease-in-out"}
        ], {
            duration: 400,
        });
        
        num = 0
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

// Função para abrir janela do vídeo
function play_video(){
    video_play.style.visibility = "visible"
    video.setAttribute('src', "https://www.youtube.com/embed/NLcTcsdO86U")
}
// Função para fechar janela do Vídeo
function close_video(){
    video_play.style.visibility = "hidden"
    video.setAttribute('src', "")
}

// SCRIPT PARA ELEMENTOS DA TELA APARECEREM COM SCROLL DO MOUSE 

// Procura pelos elementos '[data-anime]'
const target = document.querySelectorAll('[data-anime]'); 
// Cria uma classe 'animated'
const animationClass = 'animated';

function animeScroll(){
    // Cria variavel para ver localização do Scroll do mouse
    const windowTop = window.pageYOffset + (window.innerHeight * 3)/4;
    // Para cada elemento do target execute:
    target.forEach(function(element){
        // Se a localização do scroll for maior que a localização do elemento:
        if(windowTop > element.offsetTop){
            // Adiciona a classe criada
            element.classList.add(animationClass);
        }else{
            // Remove a classe criada
            element.classList.remove(animationClass);
        }
    })
}

// Se existir algum elemento execute:
if(target.length){
    // Adicionando evento listener para scroll do mouse
    window.addEventListener('scroll', function(){
        // Chama a função
        animeScroll();
    })
}


// Função para abrir chat
function chat(){
    chat_open.style.transform = "translateY(0em)"
    notific.style.visibility = "hidden"
}
function close_chat(){
    chat_open.style.transform = "translateY(35em)"
    notific.style.visibility = "visible"
}
