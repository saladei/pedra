document.getElementById('btnRegistrar').addEventListener('click', function () {
  window.location.href = 'registro.html';
});
document.getElementById('btnLogin').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Verifica se já tem uma conta salva no localStorage
  const contaSalva = JSON.parse(localStorage.getItem('usuario'));

  if (!contaSalva) {
    alert('Nenhuma conta encontrada. Por favor, registre-se primeiro.');
    return;
  }

  // Verifica se o email e senha batem
  if (email === contaSalva.email && senha === contaSalva.senha) {
    // Redireciona para a página inicial
    window.location.href = 'inicio.html';
  } else {
    alert('E-mail ou senha incorretos.');
  }
});
document.getElementById('btnLogin').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const contaSalva = JSON.parse(localStorage.getItem('usuario'));

  if (!contaSalva) {
    alert('Nenhuma conta registrada. Vá para "Registrar" primeiro.');
    return;
  }

  if (email === contaSalva.email && senha === contaSalva.senha) {
    alert('Login bem-sucedido!');
    window.location.href = 'inicio.html'; // Redirecione para sua página inicial
  } else {
    alert('E-mail ou senha incorretos.');
  }
});

// Redirecionar para a página de registro se quiser adicionar isso
document.getElementById('btnRegistrar').addEventListener('click', function () {
  window.location.href = 'registro.html';
});


