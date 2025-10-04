// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// ===== Injetar CSS =====
const style = document.createElement('style');
style.textContent = `
:root {
  --bg-light: #FFFFFF;
  --bg-dark: #363636;
  --purple-primary: #A77BC6;
  --purple-dark: #542E6F;
  --purple-medium: #915FB5;
  --text-light: #FFFFFF;
  --text-dark: #363636;
  --border-color: rgba(167, 123, 198, 0.2);
  --error-color: #FF0000;
  --shadow-soft: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-deep: 0 10px 30px rgba(0, 0, 0, 0.15);
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: var(--bg-light);
  min-height: 100vh;
  overflow: auto;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 900px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
}

.logo {
  display: block;
  margin: 0 auto 30px;
  width: 180px;
}

.bottom-logo {
  display: block;
  margin: 30px auto 0;
  width: 120px;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.loader {
  border: 5px solid rgba(167, 123, 198, 0.2);
  border-top: 5px solid var(--purple-primary);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite, scaleIn 0.5s forwards;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes scaleIn {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

.loading-text {
  margin-top: 25px;
  font-size: 20px;
  color: var(--purple-dark);
  text-align: center;
  font-weight: 500;
}

#verification-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background: rgba(54, 54, 54, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  animation: fadeIn 0.6s ease forwards;
}

#verification-popup-box {
  background: var(--bg-light);
  max-width: 550px;
  width: 95%;
  padding: 30px 25px;
  border-radius: 18px;
  box-shadow: var(--shadow-deep);
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  z-index: 9999;
  position: relative;
}

#verification-popup-box h2 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(90deg, var(--purple-primary), var(--purple-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#camera-container {
  position: relative;
  width: 100%;
  max-width: 360px;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

#cameraPreview {
  width: 100%;
  height: auto;
  aspect-ratio: 3/4;
  border-radius: 16px;
  border: 4px solid rgba(167, 123, 198, 0.5);
  background: var(--bg-dark);
  object-fit: cover;
  display: block;
  transform: scaleX(-1);
}

#face-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  height: 85%;
  border: 6px dashed var(--purple-medium);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: none;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
  100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
}

.verification-status {
  margin-top: 20px;
}

.verification-status-top {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--purple-dark);
  opacity: 0;
  animation: fadeIn 0.6s forwards;
}

.verification-status-bottom {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-dark);
  opacity: 0;
  animation: fadeIn 0.6s forwards;
}

#loadingCircle {
  width: 45px;
  height: 45px;
  border: 5px solid rgba(167, 123, 198, 0.3);
  border-top: 5px solid var(--purple-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

#center-face-overlay, #failure-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(54, 54, 54, 0.75);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: var(--text-light);
  padding: 25px;
  box-sizing: border-box;
  animation: fadeIn 0.4s forwards;
}

#center-face-overlay h3, #failure-overlay h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px 0;
}

#center-face-overlay p, #failure-overlay p {
  font-size: 15px;
  font-weight: 400;
  margin: 0 0 20px 0;
  text-align: center;
}

#understand-btn, #cancel-btn {
  background: linear-gradient(135deg, var(--purple-primary), var(--purple-dark));
  color: var(--text-light);
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
  transition: transform 0.3s, opacity 0.3s;
}

#understand-btn:hover, #cancel-btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

#logo-watermark {
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 60px;
  opacity: 0.85;
}

.form-container {
  display: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: var(--shadow-deep);
  width: 100%;
  animation: fadeIn 0.6s;
}

.form-row {
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--purple-dark);
}

.form-group input, .form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  color: var(--text-dark);
  background: var(--bg-light);
}

.form-group input:focus, .form-group select:focus {
  border-color: var(--purple-primary);
  box-shadow: 0 0 6px rgba(167, 123, 198, 0.4);
}

.form-group select {
  appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path fill="%23A77BC6" d="M0 0l7 7 7-7z"/></svg>') no-repeat right 12px center / 14px;
}

.form-group.invalid input, .form-group.invalid select {
  border-color: var(--error-color);
}

.error-message {
  color: var(--error-color);
  font-size: 13px;
  margin-top: 6px;
}

.checkbox-group {
  margin-bottom: 20px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: var(--text-dark);
  font-weight: 500;
}

.checkbox-group input {
  margin-right: 12px;
  accent-color: var(--purple-primary);
}

.checkbox-group a {
  color: var(--purple-primary);
  text-decoration: underline;
}

.submit-btn {
  background: linear-gradient(135deg, var(--purple-primary), var(--purple-dark));
  color: var(--text-light);
  border: none;
  padding: 14px 25px;
  border-radius: 14px;
  font-size: 17px;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.3s, transform 0.3s;
  font-weight: 600;
}

.submit-btn:hover {
  transform: scale(1.02);
  opacity: 0.95;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.privacy-text {
  font-size: 13px;
  text-align: center;
  margin-top: 15px;
  color: var(--text-dark);
  font-weight: 400;
}

.privacy-text a {
  color: var(--purple-primary);
  text-decoration: underline;
}

/* Responsividade */
@media (max-width: 600px) {
  .container {
    max-width: 100%;
    padding: 15px;
  }

  .logo {
    width: 140px;
  }

  .bottom-logo {
    width: 100px;
  }

  .form-container {
    padding: 20px;
    border-radius: 16px;
  }

  .form-row {
    flex-direction: column;
    gap: 15px;
  }

  .form-group input, .form-group select {
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
  }

  .submit-btn {
    padding: 12px 20px;
    font-size: 16px;
  }

  .privacy-text {
    font-size: 12px;
  }

  #verification-popup-box {
    padding: 20px 15px;
    border-radius: 14px;
  }

  #camera-container {
    max-width: 300px;
  }

  #cameraPreview {
    border-radius: 12px;
    border-width: 3px;
  }

  #verification-popup-box h2 {
    font-size: 20px;
  }

  .verification-status-top {
    font-size: 15px;
  }

  .verification-status-bottom {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 900px;
    padding: 40px;
  }
}
`;
document.head.appendChild(style);

// ===== Injetar HTML Estrutura =====
const appHTML = `
<div class="container">
  <img class="logo" src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame Logo">
  <div class="form-container"></div>
  <img class="bottom-logo" src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame Logo">
</div>

<div class="loading-overlay">
  <div class="loader"></div>
  <p class="loading-text">Iniciando verificação de administrador...</p>
</div>

<div id="verification-popup-overlay">
  <div id="verification-popup-box">
    <h2>Verificação de Identidade do Administrador</h2>
    <div id="camera-container">
      <video id="cameraPreview" autoplay playsinline muted></video>
      <div id="face-overlay"></div>
      <div id="loadingCircle"></div>
      <div id="center-face-overlay">
        <h3>Posicione seu Rosto</h3>
        <p>Centralize seu rosto no círculo para uma verificação precisa.</p>
      </div>
      <div id="failure-overlay">
        <h3>Falha na Verificação</h3>
        <p>Não foi possível confirmar sua identidade como administrador devido a problemas de qualidade na imagem. Verifique a iluminação, a câmera e tente novamente.</p>
        <button id="understand-btn">Entendi, retornar ao login</button>
        <button id="cancel-btn">Cancelar e sair</button>
      </div>
      <img id="logo-watermark" src="https://framerusercontent.com/images/ezLmAEgBsxPYSfavvu3Z8skoE.png" alt="Frame Watermark">
    </div>
    <div class="verification-status">
      <div class="verification-status-top">Iniciando verificação...</div>
      <div class="verification-status-bottom">Aguardando acesso à câmera para autenticação segura.</div>
    </div>
  </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', appHTML);

// Elementos
const loadingOverlay = document.querySelector('.loading-overlay');
const formContainer = document.querySelector('.form-container');
const bottomLogo = document.querySelector('.bottom-logo');
const verificationOverlay = document.getElementById('verification-popup-overlay');
const statusTop = document.querySelector('.verification-status-top');
const statusBottom = document.querySelector('.verification-status-bottom');
const loadingCircle = document.getElementById('loadingCircle');
const failureOverlay = document.getElementById('failure-overlay');
const centerFaceOverlay = document.getElementById('center-face-overlay');
const cameraPreview = document.getElementById('cameraPreview');
const faceOverlay = document.getElementById('face-overlay');

// Funções de máscara
function maskCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

function maskPhone(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

// Validação de CPF
function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0, rest;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

// Lógica de Verificação Facial (sempre falha no final)
function startFacialVerification() {
  verificationOverlay.style.display = 'flex';
  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    cameraPreview.srcObject = stream;
    statusTop.textContent = "Verificação biométrica em progresso...";
    statusBottom.textContent = "Câmera ativada. Siga as instruções para autenticação como administrador.";
    loadingCircle.style.display = "block";
    
    setTimeout(() => {
      loadingCircle.style.display = "none";
      centerFaceOverlay.style.display = "flex";
      faceOverlay.style.display = "block";

      setTimeout(() => {
        centerFaceOverlay.style.display = "none";
        faceOverlay.style.display = "none";
        statusTop.textContent = "Analisando dados biométricos...";
        statusBottom.textContent = "Processando características faciais...";
        loadingCircle.style.display = "block";

        setTimeout(() => {
          loadingCircle.style.display = "none";
          statusTop.textContent = "Confirmando identidade do administrador...";
          statusBottom.textContent = "Verificando contra registros da empresa...";
          loadingCircle.style.display = "block";

          setTimeout(() => {
            loadingCircle.style.display = "none";
            statusTop.textContent = "Avaliando qualidade da captura...";
            statusBottom.textContent = "Garantindo precisão da verificação...";
            loadingCircle.style.display = "block";

            setTimeout(() => {
              loadingCircle.style.display = "none";
              failureOverlay.style.display = "flex";
              statusTop.textContent = "Falha na autenticação";
              statusBottom.textContent = "Não foi possível prosseguir com o cadastro.";
            }, 3500);
          }, 3500);
        }, 3500);
      }, 1500);
    }, 1500);
  }).catch(function() {
    statusTop.textContent = "Acesso à câmera negado";
    statusBottom.textContent = "Recarregue a página para tentar novamente.";
  });
}

// Botões da falha
document.getElementById('understand-btn').addEventListener('click', () => {
  window.location.href = '/home';
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  window.location.href = 'https://frameag.com/login';
});

// Renderizar Form de Cadastro de Funcionário
function renderEmployeeForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label for="employee-name">Nome Completo do Funcionário</label>
        <input type="text" id="employee-name" placeholder="Digite o nome..." required aria-required="true">
      </div>
      <div class="form-group">
        <label for="employee-cpf">CPF</label>
        <input type="text" id="employee-cpf" placeholder="000.000.000-00" required aria-required="true">
        <span class="error-message"></span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="employee-email">E-mail Corporativo</label>
        <input type="email" id="employee-email" placeholder="funcionario@empresa.com.br" required aria-required="true">
        <span class="error-message"></span>
      </div>
      <div class="form-group">
        <label for="employee-phone">Telefone</label>
        <input type="tel" id="employee-phone" placeholder="(11) 99999-9999" required aria-required="true">
        <span class="error-message"></span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="employee-department">Departamento</label>
        <select id="employee-department" required aria-required="true">
          <option value="">Selecione...</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Vendas">Vendas</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Riscos">Riscos / Fraude</option>
          <option value="Marketing">Marketing</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      <div class="form-group">
        <label for="employee-position">Cargo</label>
        <input type="text" id="employee-position" placeholder="Digite o cargo..." required aria-required="true">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="employee-access-level">Nível de Acesso</label>
        <select id="employee-access-level" required aria-required="true">
          <option value="">Selecione...</option>
          <option value="Basico">Básico (Visualização apenas)</option>
          <option value="Intermediario">Intermediário (Edição limitada)</option>
          <option value="Avancado">Avançado (Acesso total)</option>
          <option value="Admin">Administrador (Gerenciamento de usuários)</option>
        </select>
      </div>
    </div>
    <div class="checkbox-group">
      <label>
        <input type="checkbox" required aria-required="true">
        Confirmo que este funcionário está autorizado a acessar a plataforma da empresa e concordo com os termos de uso e privacidade.
      </label>
    </div>
    <button type="submit" class="submit-btn" disabled>Cadastrar Funcionário</button>
    <p class="privacy-text">Todos os dados são processados de forma segura conforme nossa <a href="#">Política de Privacidade</a> e LGPD.</p>
  `;
  formContainer.appendChild(form);

  // Máscaras
  const cpfInput = form.querySelector('#employee-cpf');
  cpfInput.addEventListener('input', (e) => {
    e.target.value = maskCPF(e.target.value);
  });

  const phoneInput = form.querySelector('#employee-phone');
  phoneInput.addEventListener('input', (e) => {
    e.target.value = maskPhone(e.target.value);
  });

  // Validação CPF
  cpfInput.addEventListener('blur', () => {
    const group = cpfInput.closest('.form-group');
    const error = group.querySelector('.error-message');
    const cpf = cpfInput.value.replace(/\D/g, '');
    if (!validateCPF(cpf)) {
      group.classList.add('invalid');
      error.textContent = 'CPF inválido.';
    } else {
      group.classList.remove('invalid');
      error.textContent = '';
    }
  });

  // Validação Email
  const emailInput = form.querySelector('#employee-email');
  emailInput.addEventListener('input', () => {
    const group = emailInput.closest('.form-group');
    const error = group.querySelector('.error-message');
    if (!emailInput.validity.valid) {
      group.classList.add('invalid');
      error.textContent = 'E-mail inválido.';
    } else {
      group.classList.remove('invalid');
      error.textContent = '';
    }
  });

  // Habilitar botão de submit
  const checkbox = form.querySelector('input[type="checkbox"]');
  const submitBtn = form.querySelector('.submit-btn');
  checkbox.addEventListener('change', () => {
    submitBtn.disabled = !checkbox.checked;
  });

  // Submissão do form (simulada)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (document.querySelectorAll('.invalid').length === 0) {
      loadingOverlay.style.display = 'flex';
      loadingOverlay.querySelector('.loading-text').textContent = 'Cadastrando funcionário...';
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
        alert('Funcionário cadastrado com sucesso! (Simulação)');
        form.reset();
        submitBtn.disabled = true;
      }, 2000);
    } else {
      alert('Por favor, corrija os erros no formulário.');
    }
  });
}

// Início: Mostrar loading, depois verificação facial (que falha), mas para prosseguir, assumimos que após falha, o form é mostrado? Não, como sempre falha, talvez o form seja mostrado após o usuário clicar em entender ou cancelar, mas conforme pedido, mantenho a falha.
// Mas para completar, inicio com verificação, e no botão entender, mostro o form em vez de redirect.

document.getElementById('understand-btn').addEventListener('click', () => {
  verificationOverlay.style.display = 'none';
  formContainer.style.display = 'block';
  bottomLogo.style.display = 'block';
  renderEmployeeForm();
});

// Simulate initial loading and start verification
setTimeout(() => {
  loadingOverlay.style.display = 'none';
  startFacialVerification();
}, 2000);