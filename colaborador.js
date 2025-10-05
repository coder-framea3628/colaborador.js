// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// ===== Injetar CSS =====
const style = document.createElement('style');
style.textContent = `
:root{
  --bg-1: #915FB5;
  --bg-2: #542E6F;
  --accent: #A77BC6;
  --dark: #363636;
  --white: #FFFFFF;
  --input-bg: rgba(255,255,255,0.12);
  --glass: rgba(255,255,255,0.06);
  --success: #2ecc71;
  --danger: #e74c3c;
  --radius: 999px;
  --card-radius: 12px;
  --shadow: 0 8px 24px rgba(0,0,0,0.35);
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: "Montserrat", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: var(--white);
  background: linear-gradient(135deg, var(--bg-2) 0%, var(--bg-1) 70%);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  min-height:100vh;
}

/* Container */
.container{
  width:100%;
  max-width:420px;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.06));
  border-radius: 18px;
  padding:28px;
  box-shadow: var(--shadow);
  position:relative;
  overflow:hidden;
  min-height:640px;
  transition: all 0.5s ease;
}

/* Top logo */
.logo{
  display:flex;
  justify-content:flex-end;
  margin-bottom:6px;
}
.logo img{height:36px;}

h1{
  font-size:32px;
  margin:8px 0 6px 0;
  letter-spacing: -0.02em;
  font-weight:700;
}
p.lead{
  color: rgba(255,255,255,0.85);
  margin:0 0 18px 0;
  font-size:14px;
  font-weight:500;
}

/* Form card */
form{display:flex; flex-direction:column; gap:12px}
label{font-size:12px; color: rgba(255,255,255,0.85); font-weight:600}
.input{
  background: var(--input-bg);
  border:1px solid rgba(255,255,255,0.07);
  padding:12px 14px;
  border-radius:10px;
  color:var(--white);
  font-size:16px; /* IMPORTANT - avoid mobile zoom */
  outline:none;
  width:100%;
  transition: all 0.3s ease;
}
.input::placeholder{color: rgba(255,255,255,0.6)}
.row{
  display:flex; gap:10px;
}
.row .input{flex:1}

.btn{
  margin-top:10px;
  background: var(--white);
  color: var(--bg-2);
  border:none;
  padding:14px 18px;
  font-size:16px;
  border-radius: 999px;
  cursor:pointer;
  font-weight:600;
  box-shadow: 0 6px 18px rgba(0,0,0,0.28);
  transition: all 0.3s ease;
}
.btn:active{transform:translateY(1px)}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.muted{font-size:13px; color: rgba(255,255,255,0.7)}

/* Small note */
.footnote{margin-top:8px; font-size:13px; color: rgba(255,255,255,0.7)}

/* Hide camera view initially */
.camera-stage{
  display:none;
  flex-direction:column;
  gap:12px;
  align-items:center;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Preview box */
.preview-wrap{
  position:relative;
  width:100%;
  padding-top:133%; /* 4:3 ratio on mobile - tall box */
  border-radius:12px;
  overflow:hidden;
  background:var(--glass);
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.5s ease;
}
video#preview{
  position:absolute;
  top:0; left:0; width:100%; height:100%; object-fit:cover;
  transform: scaleX(-1); /* mirror for selfie */
}

/* Circle overlay for face centering */
.face-overlay{
  position:absolute;
  left:50%;
  top:42%;
  width:56%;
  aspect-ratio:1/1;
  transform:translate(-50%,-50%);
  border-radius:50%;
  border: 3px dashed rgba(255,255,255,0.5);
  display:flex;
  align-items:center;
  justify-content:center;
  pointer-events:none;
  backdrop-filter: blur(2px);
  animation: fadeIn 0.5s ease forwards;
}
.face-overlay small{
  display:block;
  position:absolute;
  bottom:-26px;
  color:rgba(255,255,255,0.9);
  font-size:13px;
  font-weight:600;
}

/* Spinning border for face detection */
.face-overlay.detected {
  border: 5px solid rgba(167,123,198,0.8);
  animation: spinBorder 2s linear infinite;
}
@keyframes spinBorder {
  0% { border-color: rgba(167,123,198,0.8) rgba(167,123,198,0.2) rgba(167,123,198,0.2) rgba(167,123,198,0.2); }
  25% { border-color: rgba(167,123,198,0.2) rgba(167,123,198,0.8) rgba(167,123,198,0.2) rgba(167,123,198,0.2); }
  50% { border-color: rgba(167,123,198,0.2) rgba(167,123,198,0.2) rgba(167,123,198,0.8) rgba(167,123,198,0.2); }
  75% { border-color: rgba(167,123,198,0.2) rgba(167,123,198,0.2) rgba(167,123,198,0.2) rgba(167,123,198,0.8); }
  100% { border-color: rgba(167,123,198,0.8) rgba(167,123,198,0.2) rgba(167,123,198,0.2) rgba(167,123,198,0.2); }
}

/* Capture button under preview */
.capture-row{display:flex; gap:10px; align-items:center; justify-content:center; width:100%; display:none;}
.capture-btn{
  background: linear-gradient(90deg,var(--accent),var(--bg-1));
  color:var(--white);
  padding:12px 18px;
  border:none;
  border-radius:999px;
  font-weight:700;
  cursor:pointer;
  transition: all 0.3s ease;
}
.capture-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.small-btn{
  background:transparent;
  border:1px solid rgba(255,255,255,0.12);
  padding:10px 14px;
  border-radius:999px;
  color: rgba(255,255,255,0.95);
  cursor:pointer;
  transition: all 0.3s ease;
}
.small-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Messages / status */
.status-panel{
  margin-top:8px;
  width:100%;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.05));
  border-radius:10px;
  padding:12px;
  font-size:14px;
  color: rgba(255,255,255,0.95);
  display:none;
  animation: fadeIn 0.5s ease forwards;
}
.progress-dot{
  display:inline-block;
  width:8px;height:8px;border-radius:50%;
  background: rgba(255,255,255,0.15);
  margin-right:8px;
}
.progress-dot.active{background: var(--white)}

/* Error screen */
.result{
  display:none;
  flex-direction:column;
  gap:14px;
  align-items:center;
  justify-content:center;
  text-align:center;
  display:none;
  animation: fadeIn 0.5s ease forwards;
}
.result .big{
  font-size:20px;
  font-weight:700;
}
.result .desc{color: rgba(255,255,255,0.9)}

/* Responsive for larger screens */
@media(min-width:880px){
  body{padding:40px}
  .container{
    max-width:880px;
    display:grid;
    grid-template-columns: 1fr 420px;
    gap:28px;
    min-height:540px;
    align-items:center;
  }
  .container.verification{
    max-width:600px;
    grid-template-columns: 1fr;
  }
  .left{
    padding:28px;
  }
  .right{
    padding:28px;
  }
  .logo img{height:44px}
  .preview-wrap{padding-top:80%}
  form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:12px 20px;
  }
  form .row{
    grid-column: span 2;
  }
}

/* Accessibility focus */
.input:focus{box-shadow:0 0 0 3px rgba(167,123,198,0.18); border-color: rgba(255,255,255,0.18)}
.btn:focus, .capture-btn:focus, .small-btn:focus{outline:3px solid rgba(167,123,198,0.15); outline-offset:2px}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255,255,255,0.3);
  border-top: 4px solid var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--glass);
  color: var(--white);
  padding: 12px 20px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s;
  z-index: 1000;
}
.toast.active {
  opacity: 1;
  transform: translateY(0);
}
.toast.error {
  background: var(--danger);
}
.toast.success {
  background: var(--success);
}

#loadingOverlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 100;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  color: var(--white);
  font-size: 20px;
  backdrop-filter: blur(4px);
  transition: opacity 0.5s ease;
}

#permissionPopup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  color: var(--bg-2);
  padding: 20px;
  border-radius: 14px;
  box-shadow: var(--shadow);
  text-align: center;
  z-index: 101;
  max-width: 80%;
  animation: fadeIn 0.5s ease forwards;
}
#permissionPopup h2 {
  font-size: 18px;
  margin-bottom: 10px;
}
#permissionPopup p {
  font-size: 14px;
  margin-bottom: 16px;
}
#permissionPopup button {
  background: var(--accent);
  color: var(--white);
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
`;
document.head.appendChild(style);

// ===== Injetar HTML Estrutura =====
const appHTML = `
<div id="loadingOverlay">
  <div class="loading-spinner"></div>
  <p>Carregando verificação...</p>
</div>
<div class="container" id="app">
  <!-- Left: description / form (mobile stacks everything) -->
  <div class="left">
    <div class="logo">
      <img src="https://framerusercontent.com/images/ezLmAEgBsxPYSfavvu3Z8skoE.png" alt="Frame">
    </div>

    <h1>Registrar<br><span style="font-weight:300">colaborador</span></h1>
    <p class="lead">Após digitar as informações do colaborador, um administrador deverá efetivar a verificação facial.</p>

    <!-- FORM -->
    <form id="registerForm" autocomplete="off">
      <div class="row">
        <div>
          <label for="cpf">Digite o CPF do colaborador</label>
          <input id="cpf" name="cpf" class="input" type="text" inputmode="numeric" placeholder="000.000.000-00" required aria-required="true" aria-label="CPF do colaborador">
        </div>
        <div>
          <label for="name">Nome completo do colaborador</label>
          <input id="name" name="name" class="input" type="text" placeholder="Nome completo" required aria-required="true" aria-label="Nome completo do colaborador">
        </div>
      </div>

      <div class="row">
        <div>
          <label for="cargo">Cargo</label>
          <input id="cargo" name="cargo" class="input" type="text" placeholder="Ex.: Analista" required aria-required="true" aria-label="Cargo do colaborador">
        </div>
        <div>
          <label for="phone">Telefone</label>
          <input id="phone" name="phone" class="input" type="tel" placeholder="(DDD) 0000-0000" aria-label="Telefone do colaborador">
        </div>
      </div>

      <div class="row">
        <div>
          <label for="email">E-mail</label>
          <input id="email" name="email" class="input" type="email" placeholder="nome@dominio.com.br" aria-label="E-mail do colaborador">
        </div>
        <div>
          <label for="password">Senha</label>
          <input id="password" name="password" class="input" type="password" placeholder="••••••••" autocomplete="new-password" aria-label="Senha do colaborador">
        </div>
      </div>

      <button class="btn" id="startBtn" type="button" aria-label="Iniciar verificação facial">Iniciar verificação</button>
      <p class="footnote muted">Ao prosseguir, solicitaremos permissão para usar a câmera do seu dispositivo.</p>
    </form>
  </div>

  <!-- Right: camera / steps / result (will show/hide depending on state) -->
  <div class="right camera-stage" id="cameraStage" aria-hidden="true">
    <div style="width:100%; display:flex; justify-content:flex-end;">
      <img src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame" style="height:28px; opacity:0.95">
    </div>

    <div class="preview-wrap" id="previewWrap">
      <video id="preview" autoplay muted playsinline></video>
      <div class="face-overlay" id="faceOverlay">
        <small>Centralize seu rosto</small>
      </div>
    </div>

    <div class="capture-row" id="captureRow">
      <button class="small-btn" id="switchCamBtn" type="button" title="Trocar câmera (se suportado)" aria-label="Trocar câmera">Trocar câmera</button>
      <button class="capture-btn" id="manualCaptureBtn" style="display:none;" aria-label="Capturar imagem manualmente">Capturar</button>
    </div>

    <div class="status-panel" id="statusPanel" style="display:none;">
      <div id="statusList"></div>
    </div>

    <div class="result" id="resultScreen" style="display:none;"></div>
  </div>

  <div class="toast" id="toast"></div>
</div>
<div id="permissionPopup">
  <h2>Permissão para câmera negada</h2>
  <p>Para prosseguir com a verificação facial, permita o acesso à câmera. Clique no botão abaixo para recarregar a página e tentar novamente.</p>
  <button id="reloadBtn" aria-label="Recarregar página">Recarregar</button>
</div>
`;
document.body.innerHTML = appHTML;

// ===== Lógica do Script =====
const loadingOverlay = document.getElementById('loadingOverlay');
const container = document.getElementById('app');
const left = document.querySelector('.left');
const startBtn = document.getElementById('startBtn');
const cameraStage = document.getElementById('cameraStage');
const preview = document.getElementById('preview');
const previewWrap = document.getElementById('previewWrap');
const faceOverlay = document.getElementById('faceOverlay');
const switchCamBtn = document.getElementById('switchCamBtn');
const manualCaptureBtn = document.getElementById('manualCaptureBtn');
const captureRow = document.getElementById('captureRow');
const statusPanel = document.getElementById('statusPanel');
const resultScreen = document.getElementById('resultScreen');
const registerForm = document.getElementById('registerForm');
const toast = document.getElementById('toast');
const permissionPopup = document.getElementById('permissionPopup');
const reloadBtn = document.getElementById('reloadBtn');

let stream = null;
let usingFacingMode = 'user';
let devices = [];
let currentDeviceId = null;
let detecting = false;
let faceDetector = null;
let failureCount = parseInt(localStorage.getItem('failureCount')) || 0;
let lastFailureTime = parseInt(localStorage.getItem('lastFailureTime')) || 0;

// Utility: sleep
const wait = ms => new Promise(r => setTimeout(r, ms));

// Utility: show toast
function showToast(message, type = 'info') {
  toast.textContent = message;
  toast.classList.remove('error', 'success');
  if (type === 'error') toast.classList.add('error');
  if (type === 'success') toast.classList.add('success');
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}

// Check attempt limit
function checkAttemptLimit() {
  const now = Date.now();
  if (failureCount >= 3 && now - lastFailureTime < 24 * 60 * 60 * 1000) {
    showToast('Muitas tentativas falhas. Tente novamente em 24 horas.', 'error');
    return true;
  }
  return false;
}

// Increment failure
function incrementFailure() {
  failureCount++;
  lastFailureTime = Date.now();
  localStorage.setItem('failureCount', failureCount);
  localStorage.setItem('lastFailureTime', lastFailureTime);
}

// Reset failures on success (but since always fails in demo, not used)
function resetFailures() {
  failureCount = 0;
  localStorage.setItem('failureCount', 0);
}

// Form validation
function validateForm() {
  const cpf = document.getElementById('cpf').value.trim();
  const name = document.getElementById('name').value.trim();
  const cargo = document.getElementById('cargo').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!cpf || !name || !cargo || !password) {
    showToast('Preencha todos os campos obrigatórios.', 'error');
    return false;
  }
  if (!validateCPF(cpf)) {
    showToast('CPF inválido. Verifique e tente novamente.', 'error');
    return false;
  }
  if (email && !/\S+@\S+\.\S+/.test(email)) {
    showToast('E-mail inválido.', 'error');
    return false;
  }
  if (phone && phone.length < 10) {
    showToast('Telefone inválido.', 'error');
    return false;
  }
  if (password.length < 8) {
    showToast('Sua senha deve ter no mínimo 8 caracteres.', 'error');
    return false;
  }
  return true;
}

// CPF validation
function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0, remainder;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
  remainder = (sum * 10) % 11;
  if ((remainder === 10) || (remainder === 11)) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
  remainder = (sum * 10) % 11;
  if ((remainder === 10) || (remainder === 11)) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

// Start verification
startBtn.addEventListener('click', async () => {
  if (!validateForm()) return;
  if (checkAttemptLimit()) return;

  loadingOverlay.style.display = 'flex';
  startBtn.disabled = true;

  await wait(1000);

  loadingOverlay.style.display = 'none';
  left.style.display = 'none';
  container.classList.add('verification');
  cameraStage.style.display = 'flex';
  cameraStage.setAttribute('aria-hidden', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  startBtn.disabled = false;

  await startCamera();
});

// Start camera
async function startCamera() {
  try {
    stopStream();

    const constraints = {
      audio: false,
      video: {
        facingMode: usingFacingMode,
        width: { ideal: 1280 },
        height: { ideal: 960 }
      }
    };

    stream = await navigator.mediaDevices.getUserMedia(constraints);
    preview.srcObject = stream;
    await preview.play();

    const all = await navigator.mediaDevices.enumerateDevices();
    devices = all.filter(d => d.kind === 'videoinput');

    const track = stream.getVideoTracks()[0];
    currentDeviceId = track.getSettings().deviceId || currentDeviceId;

    detecting = true;
    faceOverlay.style.display = 'flex';
    captureRow.style.display = 'flex';
    if ('FaceDetector' in window) {
      faceDetector = new window.FaceDetector({ fastMode: true });
      detectFace();
    } else {
      showToast('Detecção facial não disponível. Use o botão para capturar manualmente.', 'info');
      manualCaptureBtn.style.display = 'inline-block';
    }
  } catch (err) {
    console.error('Erro ao acessar sua câmera:', err);
    if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
      permissionPopup.style.display = 'block';
    } else {
      showToast('Erro ao acessar a câmera. Verifique as permissões.', 'error');
    }
  }
}

// Stop stream
function stopStream() {
  detecting = false;
  if (stream) {
    stream.getTracks().forEach(t => t.stop());
    stream = null;
    preview.srcObject = null;
  }
}

// Face detection loop
const detectionCanvas = document.createElement('canvas');
detectionCanvas.style.display = 'none';
document.body.appendChild(detectionCanvas);

async function detectFace() {
  if (!detecting || !preview.videoWidth) return;

  detectionCanvas.width = preview.videoWidth;
  detectionCanvas.height = preview.videoHeight;
  const ctx = detectionCanvas.getContext('2d');
  ctx.drawImage(preview, 0, 0);

  try {
    const detections = await faceDetector.detect(detectionCanvas);
    if (detections.length > 0) {
      const box = detections[0].boundingBox;
      const centerX = preview.videoWidth / 2;
      const centerY = preview.videoHeight / 2;
      const faceCenterX = box.x + box.width / 2;
      const faceCenterY = box.y + box.height / 2;
      const distance = Math.sqrt(Math.pow(faceCenterX - centerX, 2) + Math.pow(faceCenterY - centerY, 2));
      const maxDistance = preview.videoWidth * 0.15;
      if (distance < maxDistance && box.width > preview.videoWidth * 0.3) {
        faceOverlay.classList.add('detected');
        detecting = false;
        startProcessing();
        return;
      } else {
        faceOverlay.classList.remove('detected');
      }
    } else {
      faceOverlay.classList.remove('detected');
    }
  } catch (e) {}

  requestAnimationFrame(detectFace);
}

// Manual capture
manualCaptureBtn.addEventListener('click', () => {
  manualCaptureBtn.disabled = true;
  startProcessing();
});

// Start processing
async function startProcessing() {
  showToast('Rosto centralizado, iniciando verificação...', 'success');

  const processingOverlay = document.createElement('div');
  processingOverlay.style.position = 'absolute';
  processingOverlay.style.top = '0';
  processingOverlay.style.left = '0';
  processingOverlay.style.width = '100%';
  processingOverlay.style.height = '100%';
  processingOverlay.style.background = 'rgba(0,0,0,0.5)';
  processingOverlay.style.display = 'flex';
  processingOverlay.style.flexDirection = 'column';
  processingOverlay.style.alignItems = 'center';
  processingOverlay.style.justifyContent = 'center';
  processingOverlay.style.gap = '10px';
  processingOverlay.style.backdropFilter = 'blur(8px)';
  processingOverlay.style.borderRadius = '50%'; // Keep circle
  processingOverlay.style.transition = 'all 0.5s ease';

  const procSpinner = document.createElement('div');
  procSpinner.classList.add('loading-spinner');

  const procText = document.createElement('p');
  procText.style.fontSize = '16px';
  procText.style.fontWeight = '600';
  procText.style.margin = '0';
  procText.style.textAlign = 'center';

  processingOverlay.appendChild(procSpinner);
  processingOverlay.appendChild(procText);

  previewWrap.appendChild(processingOverlay);
  faceOverlay.style.display = 'none';
  captureRow.style.display = 'none';

  const steps = [
    'Analisando biometria facial',
    'Verificando identidade do administrador',
    'Processando resultado'
  ];

  for (let step of steps) {
    procText.textContent = step + '...';
    await wait(2000);
  }

  // Fail with random reason
  incrementFailure();
  const failureReasons = [
    'Qualidade de imagem insuficiente. Tente em um ambiente mais iluminado.',
    'Rosto não centralizado corretamente. Posicione-se melhor.',
    'Múltiplos rostos detectados. Certifique-se de estar sozinho.',
    'Falha na detecção biométrica. Tente novamente.',
    'Identidade do administrador não confirmada. Verifique as credenciais.'
  ];
  const randomReason = failureReasons[Math.floor(Math.random() * failureReasons.length)];
  showErrorResult(processingOverlay, procSpinner, procText, randomReason);
}

// Show error
function showErrorResult(overlay, spinner, text, reason) {
  spinner.style.display = 'none';
  text.textContent = 'Verificação falhou';
  text.style.color = 'var(--danger)';
  text.style.fontSize = '20px';

  const desc = document.createElement('p');
  desc.textContent = reason;
  desc.style.fontSize = '14px';
  desc.style.textAlign = 'center';
  desc.style.padding = '0 20px';
  desc.style.margin = '0';
  desc.style.color = 'rgba(255,255,255,0.9)';

  overlay.appendChild(desc);

  const btnRow = document.createElement('div');
  btnRow.style.display = 'flex';
  btnRow.style.gap = '10px';
  btnRow.style.marginTop = '20px';

  const retry = document.createElement('button');
  retry.classList.add('small-btn');
  retry.textContent = 'Tentar novamente';
  retry.setAttribute('aria-label', 'Tentar verificação novamente');
  retry.addEventListener('click', () => {
    retry.disabled = true;
    overlay.remove();
    faceOverlay.style.display = 'flex';
    captureRow.style.display = 'flex';
    startCamera();
  });

  const back = document.createElement('button');
  back.classList.add('btn');
  back.textContent = 'Voltar ao registro';
  back.setAttribute('aria-label', 'Voltar ao formulário de registro');
  back.addEventListener('click', () => {
    back.disabled = true;
    container.classList.remove('verification');
    left.style.display = 'block';
    cameraStage.style.display = 'none';
    stopStream();
    registerForm.reset();
    document.getElementById('cpf').focus();
  });

  btnRow.appendChild(retry);
  btnRow.appendChild(back);
  overlay.appendChild(btnRow);
  overlay.style.borderRadius = '12px'; // Change to rect for buttons

  showToast('Não conseguimos verificar a identidade do administrador. Tente novamente.', 'error');
}

// Switch camera
switchCamBtn.addEventListener('click', async () => {
  switchCamBtn.disabled = true;
  usingFacingMode = usingFacingMode === 'user' ? 'environment' : 'user';
  await startCamera();
  switchCamBtn.disabled = false;
});

// CPF mask
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '');
  val = val.replace(/(\d{3})(\d)/, '$1.$2');
  val = val.replace(/(\d{3})(\d)/, '$1.$2');
  val = val.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = val;
});

// Phone mask
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '');
  val = val.replace(/^(\d{2})(\d)/g, '($1) $2');
  val = val.replace(/(\d)(\d{4})$/, '$1-$2');
  e.target.value = val;
});

// Reload button for permission
reloadBtn.addEventListener('click', () => {
  location.reload();
});

// Cleanup
window.addEventListener('beforeunload', stopStream);

// Keyboard submit
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  startBtn.click();
});

// No camera support
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
  showToast('Seu dispositivo não suporta a verificação.', 'error');
}