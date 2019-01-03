const playButton = document.querySelector(".playBut");
let rickYeah = new Audio('media/oh_yeah.mp3');
playButton.addEventListener('click', () =>{
    rickYeah.play();
})


