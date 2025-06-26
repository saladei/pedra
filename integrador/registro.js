document.addEventListener('DOMContentLoaded', function () {
  const voltarBtn = document.getElementById('voltarLogin');
  if (voltarBtn) {
    voltarBtn.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }
});
// Botão para registrar o usuário
document.getElementById('btnRegistrar').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const senha = document.getElementById('senha').value;

  if (!email || !username || !senha) {
    alert('Preencha todos os campos para registrar.');
    return;
  }

  // Cria objeto do usuário
  const usuario = {
    email: email,
    username: username,
    senha: senha
  };

  // Salva no localStorage
  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Usuário registrado com sucesso!');

  // Redireciona para a página de login
  window.location.href = 'login.html';
});

// Botão para voltar sem registrar
document.getElementById('voltarLogin').addEventListener('click', function () {
  window.location.href = 'login.html';
});

