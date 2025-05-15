let ultimaBatida = 'Saída';

function registrarPonto() {
  const agora = new Date();
  const data = agora.toLocaleDateString('pt-BR');
  const hora = agora.toLocaleTimeString('pt-BR');
  const tipo = ultimaBatida === 'Entrada' ? 'Saída' : 'Entrada';

  const tabela = document.getElementById('tabelaPontos').getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();

  // Celulas criadas com insertCell
  const celData = novaLinha.insertCell();
  const celHora = novaLinha.insertCell();
  const celTipo = novaLinha.insertCell();

  celData.textContent = data;
  celHora.textContent = hora;

  // Cria o ícone Font Awesome para tipo
  const icone = document.createElement('i');
  icone.className = tipo === 'Entrada' ? 'fa-solid fa-user-check' : 'fa-solid fa-user-times';
  icone.style.color = tipo === 'Entrada' ? 'green' : 'red';
  icone.style.marginRight = '6px';

  // Adiciona ícone + texto na célula
  celTipo.appendChild(icone);
  celTipo.appendChild(document.createTextNode(tipo));

  ultimaBatida = tipo;
}
