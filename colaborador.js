// ===== INJEÇÃO: meta viewport, fonte Montserrat e CSS completo (paleta e logos fornecidos) =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,viewport-fit=cover';
document.head.appendChild(metaViewport);

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
document.head.appendChild(fontLink);

const style = document.createElement('style');
style.textContent = `
:root{
  --bg-white: #FFFFFF;
  --bg-dark: #363636;
  --purple-1: #A77BC6;
  --purple-2: #915FB5;
  --purple-3: #542E6F;
  --text-dark: #222222;
  --text-light: #FFFFFF;
  --muted: rgba(0,0,0,0.06);
  --glass: rgba(255,255,255,0.06);
  --success: #00B894;
  --danger: #FF4D4F;
  --shadow-soft: 0 8px 30px rgba(16,10,20,0.15);
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:'Montserrat',system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;
  background: linear-gradient(180deg, var(--bg-white) 0%, #F6F0FA 100%);
  color:var(--text-dark);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
}

/* container geral */
.frame-card{
  width:100%;
  max-width:980px;
  border-radius:20px;
  overflow:hidden;
  box-shadow: var(--shadow-soft);
  display:flex;
  background: linear-gradient(180deg, rgba(84,46,111,0.06), rgba(167,123,198,0.03));
}

/* lado esquerdo: visual / logo (desktop) */
.frame-side{
  flex:1.05;
  min-width:260px;
  padding:40px 36px;
  background: linear-gradient(135deg, var(--purple-3), var(--purple-1));
  color:var(--text-light);
  display:flex;
  flex-direction:column;
  gap:18px;
  align-items:flex-start;
  justify-content:center;
}

/* logo top */
.frame-brand{
  width:160px;
  height:auto;
  object-fit:contain;
  filter: drop-shadow(0 6px 20px rgba(0,0,0,0.25));
}

/* título */
.frame-title{
  font-size:40px;
  line-height:1;
  font-weight:700;
  margin-top:12px;
  letter-spacing:-0.02em;
}

/* description */
.frame-desc{
  opacity:0.9;
  max-width:420px;
  font-weight:500;
  margin-top:8px;
}

/* right side: form */
.frame-form{
  flex:1;
  padding:34px;
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,250,0.98));
  display:flex;
  flex-direction:column;
  gap:16px;
}

/* small logo (black) */
.top-logo {
  width:110px;
  height:auto;
  object-fit:contain;
  margin-bottom:6px;
}

/* subtitle */
.form-sub{
  font-size:20px;
  font-weight:700;
  color:var(--text-dark);
  margin-top:4px;
}

/* helper text */
.form-helper{
  color:rgba(0,0,0,0.55);
  font-size:14px;
  margin-bottom:8px;
}

/* form grid */
.form-grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:14px;
}

.form-row-full{ grid-column: 1 / -1; }

.label{
  display:block;
  font-weight:600;
  margin-bottom:6px;
  color:rgba(0,0,0,0.75);
  font-size:14px;
}

.input, select{
  width:100%;
  padding:12px 14px;
  border-radius:12px;
  border:1px solid rgba(16,10,20,0.06);
  background: rgba(255,255,255,0.9);
  font-size:15px;
  outline:none;
  transition: box-shadow .18s ease, border-color .18s ease, transform .12s;
  color:var(--text-dark);
  box-shadow: 0 2px 10px rgba(16,10,20,0.03);
}
.input:focus, select:focus{
  box-shadow: 0 8px 30px rgba(167,123,198,0.12);
  border-color: var(--purple-2);
  transform: translateY(-1px);
}

.error-message{
  color:var(--danger);
  font-size:13px;
  margin-top:6px;
  display:none;
}

/* checkbox */
.checkbox-row{
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:500;
  font-size:14px;
  color:rgba(0,0,0,0.7);
}

/* actions */
.actions{
  display:flex;
  gap:12px;
  flex-direction:column;
  margin-top:6px;
}

.btn{
  background: linear-gradient(135deg,var(--purple-1),var(--purple-3));
  color:var(--text-light);
  border:none;
  padding:12px 16px;
  border-radius:12px;
  font-weight:700;
  cursor:pointer;
  font-size:15px;
  box-shadow: 0 8px 24px rgba(84,46,111,0.16);
  transition: transform .12s ease, opacity .12s;
}
.btn:active{ transform: translateY(1px) }
.btn.ghost{
  background:transparent;
  color:var(--purple-3);
  border:1px solid rgba(84,46,111,0.08);
  font-weight:600;
}

/* small link */
.link-muted{
  font-size:14px;
  color:rgba(0,0,0,0.55);
  text-decoration:underline;
  cursor:pointer;
  align-self:flex-start;
}

/* responsive: mobile */
@media (max-width:880px){
  .frame-card{ flex-direction:column; border-radius:16px; overflow:visible }
  .frame-side{
    padding:22px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
    align-items:center;
    text-align:center;
  }
  .frame-title{ font-size:28px }
  .frame-form{ padding:20px }
  .form-grid{ grid-template-columns: 1fr; }
  .top-logo{ margin:0 auto }
  .form-sub{ text-align:center }
}

/* verification overlay (full screen modal) */
.verif-overlay{
  position:fixed;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(180deg, rgba(10,8,12,0.56), rgba(10,8,12,0.72));
  z-index:11000;
  padding:20px;
}

.verif-card{
  width:100%;
  max-width:720px;
  border-radius:16px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02));
  padding:18px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.6);
  border:1px solid rgba(255,255,255,0.03);
  display:flex;
  gap:18px;
  align-items:flex-start;
}

/* camera side */
.verif-left{
  flex:1;
  min-width:260px;
  position:relative;
  border-radius:12px;
  overflow:hidden;
  background:linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.2));
  display:flex;
  align-items:center;
  justify-content:center;
}

/* camera video */
#cameraPreview{
  width:100%;
  height:100%;
  object-fit:cover;
  transform: scaleX(-1);
  display:block;
  aspect-ratio:3/4;
}

/* overlay ring */
.face-ring{
  position:absolute;
  width:64%;
  aspect-ratio:1/1;
  border-radius:50%;
  border:6px dashed rgba(167,123,198,0.9);
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  box-shadow: 0 6px 40px rgba(167,123,198,0.08), inset 0 0 30px rgba(167,123,198,0.03);
}

/* feedback area */
.verif-right{
  width:320px;
  min-width:260px;
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:flex-start;
  color:var(--text-light);
}

/* status chips */
.status-chip{
  padding:10px 12px;
  border-radius:12px;
  background: linear-gradient(90deg, rgba(167,123,198,0.12), rgba(84,46,111,0.06));
  color:var(--text-light);
  font-weight:600;
  margin-bottom:6px;
  display:flex;
  align-items:center;
  gap:8px;
}

/* small status text */
.status-desc{
  color:rgba(255,255,255,0.9);
  font-size:14px;
  line-height:1.3;
}

/* loader ring */
.verify-loader{
  width:52px;
  height:52px;
  border-radius:50%;
  border:6px solid rgba(255,255,255,0.12);
  border-top-color:var(--purple-2);
  animation:spin 1s linear infinite;
  margin:6px 0;
}

@keyframes spin{ to{ transform:rotate(360deg) } }

/* failure overlay (inside verif-left) */
.fail-box{
  position:absolute;
  inset:0;
  background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.66));
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:12px;
  color:var(--text-light);
  padding:20px;
  text-align:center;
  border-radius:12px;
}

/* small control buttons */
.verif-actions{ display:flex; gap:10px; width:100%; margin-top:8px }
.small-btn{
  flex:1;
  padding:10px 12px;
  border-radius:10px;
  border:none;
  font-weight:700;
  cursor:pointer;
}
.small-btn.ghost{ background:transparent; color:var(--text-light); border:1px solid rgba(255,255,255,0.12) }
.small-btn.primary{ background: linear-gradient(135deg,var(--purple-1),var(--purple-3)); color:var(--text-light) }

/* micro animations */
.pulse {
  animation: pulseAnim 1.6s infinite;
}
@keyframes pulseAnim {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.04); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}

/* accessibility */
.sr-only{ position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden; }

`;
document.head.appendChild(style);

// ===== INJETAR HTML: estrutura principal com FORM, logos e modal de verificação (invisível no inicio) =====
const appHTML = `
  <div class="frame-card" id="frameCard">
    <div class="frame-side">
      <img class="frame-brand" src="https://framerusercontent.com/images/ezLmAEgBsxPYSfavvu3Z8skoE.png" alt="Frame Logo (white)">
      <div class="frame-title">Área da Empresa</div>
      <div class="frame-desc">Acesse o dashboard da Frame. Cadastre colaboradores com segurança — a verificação biométrica confirma a identidade do admin antes do cadastro.</div>
    </div>

    <div class="frame-form" role="region" aria-labelledby="formTitle">
      <img class="top-logo" src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame Logo (dark)">
      <div>
        <div id="formTitle" class="form-sub">Cadastrar Colaborador</div>
        <div class="form-helper">Preencha os dados abaixo para cadastrar um novo funcionário. Em seguida será solicitada a verificação facial do administrador.</div>
      </div>

      <form id="employeeForm" novalidate>
        <div class="form-grid">
          <div>
            <label class="label" for="employee-name">Nome completo</label>
            <input id="employee-name" class="input" type="text" placeholder="Nome do funcionário" required>
            <div class="error-message" data-for="employee-name">Campo obrigatório</div>
          </div>

          <div>
            <label class="label" for="employee-cpf">CPF</label>
            <input id="employee-cpf" class="input" type="text" inputmode="numeric" placeholder="000.000.000-00" required>
            <div class="error-message" data-for="employee-cpf">CPF inválido</div>
          </div>

          <div>
            <label class="label" for="employee-email">E-mail corporativo</label>
            <input id="employee-email" class="input" type="email" placeholder="funcionario@empresa.com.br" required>
            <div class="error-message" data-for="employee-email">E-mail inválido</div>
          </div>

          <div>
            <label class="label" for="employee-phone">Telefone</label>
            <input id="employee-phone" class="input" type="tel" inputmode="tel" placeholder="(11) 99999-9999" required>
            <div class="error-message" data-for="employee-phone">Telefone inválido</div>
          </div>

          <div>
            <label class="label" for="employee-department">Departamento</label>
            <select id="employee-department" required>
              <option value="">Selecione...</option>
              <option>Administrativo</option>
              <option>Vendas</option>
              <option>Financeiro</option>
              <option>Tecnologia</option>
              <option>Riscos / Fraude</option>
              <option>Marketing</option>
              <option>Outros</option>
            </select>
            <div class="error-message" data-for="employee-department">Escolha um departamento</div>
          </div>

          <div>
            <label class="label" for="employee-position">Cargo</label>
            <input id="employee-position" class="input" type="text" placeholder="Cargo" required>
            <div class="error-message" data-for="employee-position">Campo obrigatório</div>
          </div>

          <div class="form-row-full">
            <label class="label" for="employee-access-level">Nível de Acesso</label>
            <select id="employee-access-level" required>
              <option value="">Selecione...</option>
              <option value="Basico">Básico (Visualização)</option>
              <option value="Intermediario">Intermediário (Edição limitada)</option>
              <option value="Avancado">Avançado (Acesso total)</option>
              <option value="Admin">Administrador (Gerenciamento de usuários)</option>
            </select>
            <div class="error-message" data-for="employee-access-level">Escolha um nível de acesso</div>
          </div>

          <div class="form-row-full" style="margin-top:6px;">
            <label class="checkbox-row">
              <input id="confirm-checkbox" type="checkbox" required>
              Confirmo que este funcionário está autorizado e concordo com os termos e a LGPD.
            </label>
          </div>
        </div>

        <div class="actions">
          <button type="submit" id="submitBtn" class="btn" aria-label="Cadastrar funcionário">Cadastrar funcionário</button>
          <div style="display:flex; gap:12px; align-items:center; justify-content:space-between;">
            <a id="forgot" class="link-muted">Esqueci minha senha</a>
            <a id="contact" class="link-muted">Fale conosco</a>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- VERIFICAÇÃO (iniciada APÓS submissão do form) -->
  <div class="verif-overlay" id="verifOverlay" style="display:none" aria-hidden="true">
    <div class="verif-card" role="dialog" aria-modal="true" aria-labelledby="verifTitle">
      <div class="verif-left" id="verifLeft">
        <video id="cameraPreview" autoplay playsinline muted></video>
        <div class="face-ring" id="faceRing"></div>
        <!-- failure / central messages inserted dynamically -->
      </div>

      <div class="verif-right">
        <div class="status-chip" id="verifTitle">Verificação de Identidade — Administrador</div>
        <div class="status-desc" id="verifStatusTop">Aguardando ativação da câmera...</div>
        <div class="status-desc" id="verifStatusBottom">Siga as instruções: centralize o rosto no círculo e movimente levemente para confirmar presença.</div>

        <div style="display:flex; align-items:center; gap:12px; margin-top:12px;">
          <div class="verify-loader" id="verifyLoader" aria-hidden="true"></div>
          <div style="flex:1;">
            <div style="font-weight:700">Progresso</div>
            <div id="verifyProgress" style="font-size:13px; color:rgba(255,255,255,0.8)">Aguardando ação</div>
          </div>
        </div>

        <div style="margin-top:auto; width:100%;">
          <div class="verif-actions">
            <button class="small-btn ghost" id="btnCancel">Voltar ao login</button>
            <button class="small-btn primary" id="btnRetry" style="display:none">Tentar novamente</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', appHTML);

// ===== VARS e ELEMENTOS =====
const employeeForm = document.getElementById('employeeForm');
const submitBtn = document.getElementById('submitBtn');
const confirmCheckbox = document.getElementById('confirm-checkbox');
const verifOverlay = document.getElementById('verifOverlay');
const cameraPreview = document.getElementById('cameraPreview');
const verifStatusTop = document.getElementById('verifStatusTop');
const verifStatusBottom = document.getElementById('verifStatusBottom');
const verifyLoader = document.getElementById('verifyLoader');
const verifyProgress = document.getElementById('verifyProgress');
const faceRing = document.getElementById('faceRing');
const verifLeft = document.getElementById('verifLeft');
const btnCancel = document.getElementById('btnCancel');
const btnRetry = document.getElementById('btnRetry');

// ===== MÁSCARAS e VALIDAÇÕES =====
function maskCPF(value){
  return value.replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d{1,2})/,'$1-$2')
    .replace(/(-\d{2})\d+?$/,'$1');
}
function maskPhone(value){
  return value.replace(/\D/g,'')
    .replace(/(\d{2})(\d)/,'($1) $2')
    .replace(/(\d{5})(\d)/,'$1-$2')
    .replace(/(-\d{4})\d+?$/,'$1');
}
function validateCPFRaw(cpf){
  cpf = (cpf||'').replace(/\D/g,'');
  if(cpf.length!==11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum=0, rest;
  for(let i=1;i<=9;i++) sum += parseInt(cpf.substring(i-1,i)) * (11 - i);
  rest = (sum * 10) % 11;
  if(rest === 10) rest = 0;
  if(rest !== parseInt(cpf.substring(9,10))) return false;
  sum = 0;
  for(let i=1;i<=10;i++) sum += parseInt(cpf.substring(i-1,i)) * (12 - i);
  rest = (sum * 10) % 11;
  if(rest === 10) rest = 0;
  if(rest !== parseInt(cpf.substring(10,11))) return false;
  return true;
}
function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePhoneRaw(phone){
  const d = (phone||'').replace(/\D/g,'');
  return d.length >= 10; // basic
}

// attach masks & instant validation UI
const cpfInput = document.getElementById('employee-cpf');
const phoneInput = document.getElementById('employee-phone');
cpfInput.addEventListener('input', e => { e.target.value = maskCPF(e.target.value); });
phoneInput.addEventListener('input', e => { e.target.value = maskPhone(e.target.value); });

// small helper to show error messages
function showErrorFor(id, message){
  const el = document.querySelector(\`.error-message[data-for="\${id}"]\`);
  if(el){
    el.textContent = message;
    el.style.display = message ? 'block' : 'none';
  }
}

// form validation
function validateForm(){
  const name = document.getElementById('employee-name').value.trim();
  const cpf = document.getElementById('employee-cpf').value.trim();
  const email = document.getElementById('employee-email').value.trim();
  const phone = document.getElementById('employee-phone').value.trim();
  const dept = document.getElementById('employee-department').value;
  const position = document.getElementById('employee-position').value.trim();
  const access = document.getElementById('employee-access-level').value;

  let ok = true;

  if(!name){ showErrorFor('employee-name','Campo obrigatório'); ok=false } else showErrorFor('employee-name','');
  if(!validateCPFRaw(cpf)){ showErrorFor('employee-cpf','CPF inválido'); ok=false } else showErrorFor('employee-cpf','');
  if(!validateEmail(email)){ showErrorFor('employee-email','E-mail inválido'); ok=false } else showErrorFor('employee-email','');
  if(!validatePhoneRaw(phone)){ showErrorFor('employee-phone','Telefone inválido'); ok=false } else showErrorFor('employee-phone','');
  if(!dept){ showErrorFor('employee-department','Escolha um departamento'); ok=false } else showErrorFor('employee-department','');
  if(!position){ showErrorFor('employee-position','Campo obrigatório'); ok=false } else showErrorFor('employee-position','');
  if(!access){ showErrorFor('employee-access-level','Escolha um nível de acesso'); ok=false } else showErrorFor('employee-access-level','');
  if(!confirmCheckbox.checked){ ok=false; /* we keep checkbox message as native */ }

  return ok;
}

// disable submit until checkbox checked (UX)
confirmCheckbox.addEventListener('change', () => {
  submitBtn.disabled = !confirmCheckbox.checked;
  submitBtn.style.opacity = confirmCheckbox.checked ? '1' : '0.65';
});
submitBtn.disabled = true;
submitBtn.style.opacity = '0.65';

// ===== LÓGICA DE SUBMISSÃO: ao enviar, inicia verificação facial (sempre terminará em 'falha') =====
let streamRef = null;
let motionDetected = false;
let verifAbort = false;

// helper: stop camera
function stopStream(){
  if(streamRef){
    streamRef.getTracks().forEach(t => t.stop());
    streamRef = null;
  }
  try{ cameraPreview.srcObject = null }catch(e){}
}

// small toast (inline)
function tinyToast(txt){
  const t = document.createElement('div');
  t.textContent = txt;
  t.style.position = 'fixed';
  t.style.bottom = '26px';
  t.style.left = '50%';
  t.style.transform = 'translateX(-50%)';
  t.style.background = 'linear-gradient(90deg, rgba(167,123,198,0.98), rgba(84,46,111,0.98))';
  t.style.color = '#fff';
  t.style.padding = '10px 14px';
  t.style.borderRadius = '12px';
  t.style.boxShadow = '0 8px 30px rgba(84,46,111,0.18)';
  t.style.zIndex = 12000;
  t.style.fontWeight = 700;
  document.body.appendChild(t);
  setTimeout(()=> t.style.opacity = '0.0', 2200);
  setTimeout(()=> t.remove(), 2600);
}

// função de simulação de verificação com detecção simples de movimento (usar mudanças de luminância entre frames)
function startFacialVerificationSimulation(onComplete){
  verifAbort = false;
  verifOverlay.style.display = 'flex';
  verifOverlay.setAttribute('aria-hidden','false');
  verifyProgress.textContent = 'Solicitando permissão da câmera...';
  verifStatusTop.textContent = 'Aguardando permissão para usar sua câmera';
  verifStatusBottom.textContent = 'Permita o uso da câmera para prosseguir com a verificação.';
  verifyLoader.style.display = 'block';
  motionDetected = false;

  // request camera
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 960 } }, audio: false })
    .then(stream => {
      streamRef = stream;
      cameraPreview.srcObject = stream;
      cameraPreview.play().catch(()=>{});
      verifyProgress.textContent = 'Centralize o rosto no círculo';
      verifStatusTop.textContent = 'Câmera ativada';
      verifStatusBottom.textContent = 'Centralize seu rosto e movimente ligeiramente a cabeça (passe os olhos à esquerda/direita).';
      verifyLoader.style.display = 'block';

      // prepare canvas for very simple frame-diff (no libs)
      const video = cameraPreview;
      const canvasA = document.createElement('canvas');
      const canvasB = document.createElement('canvas');
      const w = 160; // small resolution for diff
      const h = Math.round((video.videoHeight || 320) * (w / (video.videoWidth || 240)));
      canvasA.width = w; canvasA.height = h;
      canvasB.width = w; canvasB.height = h;
      const ctxA = canvasA.getContext('2d');
      const ctxB = canvasB.getContext('2d');

      // run detection for a fixed window of time; require some motion frames
      let checks = 0;
      let motionFrames = 0;
      let lastImageData = null;
      const requiredMotion = 6; // number of motion-detected frames to consider user moved
      const maxChecks = 40; // ~ 40 * 150ms = 6s approx
      const interval = 150;

      const detectInterval = setInterval(() => {
        if(verifAbort){ clearInterval(detectInterval); stopStream(); return; }
        try{
          // draw to canvas small
          ctxA.drawImage(video, 0, 0, w, h);
          const cur = ctxA.getImageData(0,0,w,h);
          if(lastImageData){
            // compute simple diff
            let diffSum = 0;
            // sample pixels (every 4*step bytes)
            const step = 8; // speed vs sensitivity
            for(let i=0;i<cur.data.length;i+=4*step){
              const r = Math.abs(cur.data[i] - lastImageData.data[i]);
              const g = Math.abs(cur.data[i+1] - lastImageData.data[i+1]);
              const b = Math.abs(cur.data[i+2] - lastImageData.data[i+2]);
              diffSum += (r+g+b)/3;
            }
            const avgDiff = diffSum / (cur.data.length/(4*step));
            // threshold empirically chosen
            if(avgDiff > 10){ motionFrames++; }
            checks++;
            // update progress messaging
            verifyProgress.textContent = \`Detecção de movimento: \${motionFrames}/\${requiredMotion}\`;
            // subtle feedback on ring when movement detected
            if(motionFrames>0){
              faceRing.style.borderColor = 'rgba(145,95,181,0.95)';
              faceRing.style.boxShadow = '0 10px 40px rgba(145,95,181,0.18)';
            }
            if(motionFrames >= requiredMotion || checks >= maxChecks){
              clearInterval(detectInterval);
              // simulate analysis steps with staged messages
              verifyProgress.textContent = 'Analisando captura...';
              verifStatusTop.textContent = 'Analisando características faciais';
              verifStatusBottom.textContent = 'Comparando com os registros corporativos...';
              setTimeout(() => {
                verifyProgress.textContent = 'Validando qualidade de imagem';
                verifStatusTop.textContent = 'Validação em progresso';
                verifStatusBottom.textContent = 'Verificando nitidez, iluminação e estabilidade';
                setTimeout(() => {
                  // ALWAYS FAIL as requested — but we make it look real
                  verifyProgress.textContent = 'Resultado: Falha na verificação';
                  verifStatusTop.textContent = 'Falha na autenticação';
                  verifStatusBottom.textContent = 'Não foi possível confirmar sua identidade como administrador devido a inconsistências na captura.';
                  // show detailed reason & controls
                  showFailureDetails();
                  // stop camera when done
                  stopStream();
                  if(typeof onComplete === 'function') onComplete(false);
                }, 2200);
              }, 1800);
            }
          }
          lastImageData = cur;
        }catch(err){
          // in case video not ready yet
        }
      }, interval);
    })
    .catch(err => {
      verifyLoader.style.display = 'none';
      verifStatusTop.textContent = 'Acesso à câmera negado';
      verifStatusBottom.textContent = 'Permita o uso da câmera ou tente em outro dispositivo.';
      verifyProgress.textContent = 'Permissão negada';
      tinyToast('Permissão de câmera negada');
      // show retry/cancel
      btnRetry.style.display = 'inline-block';
      btnCancel.style.display = 'inline-block';
      btnRetry.onclick = () => { btnRetry.style.display='none'; startFacialVerificationSimulation(onComplete); };
    });

  // onComplete callback later invoked
}

// mostrar detalhes de falha com opções
function showFailureDetails(){
  // create fail box if not present
  let failBox = verifLeft.querySelector('.fail-box');
  if(!failBox){
    failBox = document.createElement('div');
    failBox.className = 'fail-box pulse';
    failBox.innerHTML = \`
      <div style="font-weight:800; font-size:20px">Falha na verificação</div>
      <div style="max-width:84%; font-size:14px; opacity:0.95">Não foi possível confirmar sua identidade. Verifique iluminação, câmera e posição do rosto. Caso tenha certeza, tente novamente.</div>
      <div style="display:flex; gap:8px; margin-top:8px; width:84%;">
        <button class="small-btn primary" id="failTry">Tentar novamente</button>
        <button class="small-btn ghost" id="failBack">Voltar ao formulário</button>
      </div>
    \`;
    verifLeft.appendChild(failBox);
  }else{
    failBox.style.display = 'flex';
  }

  // show retry/back buttons
  btnRetry.style.display = 'inline-block';
  btnCancel.style.display = 'inline-block';

  // wire fail buttons
  const failTry = document.getElementById('failTry');
  const failBack = document.getElementById('failBack');
  failTry.onclick = () => {
    // remove fail box, restart verification
    failBox.remove();
    btnRetry.style.display = 'none';
    btnCancel.style.display = 'none';
    startFacialVerificationSimulation();
  };
  failBack.onclick = () => {
    // close overlay and show form again
    failBox.remove();
    verifOverlay.style.display = 'none';
    verifOverlay.setAttribute('aria-hidden','true');
    stopStream();
    tinyToast('Retornando ao formulário');
  };
}

// form submit handler
employeeForm.addEventListener('submit', e => {
  e.preventDefault();
  // quick validate
  if(!validateForm()){
    tinyToast('Corrija os erros antes de prosseguir');
    return;
  }

  // At this point, form is correct — we show modal de verificação
  // Visual: disable form to prevent changes
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.6';
  tinyToast('Iniciando verificação facial do administrador');
  // start facial verification simulation; when complete (always fail), bring user back to form with message
  startFacialVerificationSimulation((success) => {
    // success will always be false (by design)
    submitBtn.disabled = false;
    submitBtn.style.opacity = confirmCheckbox.checked ? '1' : '0.65';
    // After failure, we leave modal open showing failure; user can click 'Voltar ao formulário' or 'Tentar novamente'
  });
});

// Cancel button: back to login
btnCancel.addEventListener('click', () => {
  stopStream();
  verifOverlay.style.display = 'none';
  verifOverlay.setAttribute('aria-hidden','true');
  // redirect to login (as in original behavior) — but we return to form if you prefer: keep both possibilities
  // user asked that verification is after form so keep returning to form
  tinyToast('Verificação cancelada — retornando ao formulário');
});

// retry button (if shown)
btnRetry.addEventListener('click', () => {
  // hide retry and relaunch
  btnRetry.style.display = 'none';
  btnCancel.style.display = 'none';
  startFacialVerificationSimulation();
});

// cleanup if user navigates away
window.addEventListener('beforeunload', () => {
  stopStream();
});

// Small accessibility: allow Enter on checkbox to submit if checked
employeeForm.addEventListener('keydown', (ev) => {
  if(ev.key === 'Enter' && document.activeElement.tagName !== 'TEXTAREA'){
    ev.preventDefault();
    submitBtn.click();
  }
});

// foco inicial friendly
document.getElementById('employee-name').focus();