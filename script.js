let ultimaBatida = 'Saída';

function registrarPonto(){
    const agora = new Date();
    const data = agora.toLocaleDateString();
    const hora = agora.toLocaleTimeString();
    const tipo = ultimaBatida === 'Entrada' ? 'Saída' : 'Entrada';

    const tabela = document.getElementById('tabelaPontos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    novaLinha.innerHTML = 
        `<td>${data}</td>
        <td>${hora}</td>
        <td>${tipo}</td>`;

    ultimaBatida = tipo;
}