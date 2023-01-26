const botaoTrailer = document.querySelector('.botao-trailer');
const fechar = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const link_video = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
   alternarModal()
    video.setAttribute("src", link_video)
})


fechar.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src","")
    
})

