const btn = document.getElementById('btn');
btn.addEventListener('click', criar);


function criar() {
    const select = document.getElementById('cor');
    const largura = document.getElementById('larg').value;
    const altura = document.getElementById('alt').value;
    const qtd = document.getElementById('numObj').value;
    const opcao = select.options[select.selectedIndex].text;


    console.log(opcao);
    // const opcao="#000";


   
    for (let i = 0; i < qtd; i++) {
        const objeto = document.createElement('div');
        document.body.appendChild(objeto);
        objeto.style.width = largura;
        objeto.style.height = altura;
        objeto.style.backgroundColor = opcao;
        // objeto.style.margin ="30px";
   

    }
}