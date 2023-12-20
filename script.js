function toggleMode() {
    const html = document.documentElement;
    const imagem = document.querySelector(".userImage");
    
    html.classList.toggle("light"); //Modo 1

    //Pegar a tag img e substituir a imagem baseada no modo de cor;
    if (html.classList.contains("light")) {
        imagem.setAttribute("src", "./assets/avatar-light.png");
    } else {
        imagem.setAttribute("src", "./assets/avatar.png");
    }

    //Modo 2   
    // if (html.classList.contains("light")) {
    //     html.classList.remove("light");
    // }
    // else {
    //     html.classList.add("light");
    // }
    
    
}