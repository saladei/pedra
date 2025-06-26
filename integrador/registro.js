document.addEventListener('DOMContentLoaded', function () {
  const voltarBtn = document.getElementById('voltarLogin');
  if (voltarBtn) {
    voltarBtn.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }
});
 
document.getElementById('btnRegistrar').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const senha = document.getElementById('senha').value;

  if (!email || !username || !senha) {
    alert('Preencha todos os campos para registrar.');
    return;
  }

 
  const usuario = {
    email: email,
    username: username,
    senha: senha
  };

 
  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Usuário registrado com sucesso!');

 
  window.location.href = 'login.html';
});

 
document.getElementById('voltarLogin').addEventListener('click', function () {
  window.location.href = 'login.html';
});

