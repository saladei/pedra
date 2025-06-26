document.addEventListener('DOMContentLoaded', function () {
  const voltarBtn = document.getElementById('voltarLogin');
  if (voltarBtn) {
    voltarBtn.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }
});
