const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',

    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}


document.querySelectorAll('.tag').forEach(elemento => { /*Pegando todos os elementos da pagina com a classe tag*/
    const tagName = elemento.tagName.toLowerCase() /*transformando todos os nomes das tags em minusculo */
    elemento.style.borderColor = colors.get(tagName);/*definindo cor da borda da borda*/

    if(!elemento.classList.contains('nolabel')){ /*se o elemento nao estiver marcado com o no label*/
        const label = document.createElement('label') /* criando um documento label */
        label.style.backgroundColor = colors.get(tagName); /* definindo a cor do fundo desse elemento */
        label.innerHTML = tagName /* inserindo o label no html com o valor do nome da tag*/
        elemento.insertBefore(label,elemento.childNodes[0]) /* insere o label antes do primeiro elemento filho presente na tag*/
        
    }
});