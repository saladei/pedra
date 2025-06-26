document.getElementById('btnRegistrar').addEventListener('click', function () {
  window.location.href = 'registro.html';
});
document.getElementById('btnLogin').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

 
  const contaSalva = JSON.parse(localStorage.getItem('usuario'));

  if (!contaSalva) {
    alert('Nenhuma conta encontrada. Por favor, registre-se primeiro.');
    return;
  }

 
  if (email === contaSalva.email && senha === contaSalva.senha) {
 
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
    window.location.href = 'inicio.html';  
  } else {
    alert('E-mail ou senha incorretos.');
  }
});

 
document.getElementById('btnRegistrar').addEventListener('click', function () {
  window.location.href = 'registro.html';
});



