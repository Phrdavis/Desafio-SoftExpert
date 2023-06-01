const img = document.querySelectorAll("#img img");


function prev(){

    for(let i = 0; i <= img.length - 1; i++){

        img[i].style.transform = `translate(${i * 100}px)`

    }
    
}


function next(){

    for(let i = 0; i <= img.length - 1; i++){

        img[i].style.transform = `translate(-${i * 100}px)`

    }
    
}