<!-- index.html -->
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Registrar colaborador — Frame</title>

  <!-- Montserrat -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
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
    }
    .btn:active{transform:translateY(1px)}

    .muted{font-size:13px; color: rgba(255,255,255,0.7)}

    /* Small note */
    .footnote{margin-top:8px; font-size:13px; color: rgba(255,255,255,0.7)}

    /* Hide camera view initially */
    .camera-stage{
      display:none;
      flex-direction:column;
      gap:12px;
      align-items:center;
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
    }
    .face-overlay small{
      display:block;
      position:absolute;
      bottom:-26px;
      color:rgba(255,255,255,0.9);
      font-size:13px;
      font-weight:600;
    }

    /* Capture button under preview */
    .capture-row{display:flex; gap:10px; align-items:center; justify-content:center; width:100%}
    .capture-btn{
      background: linear-gradient(90deg,var(--accent),var(--bg-1));
      color:var(--white);
      padding:12px 18px;
      border:none;
      border-radius:999px;
      font-weight:700;
      cursor:pointer;
    }
    .small-btn{
      background:transparent;
      border:1px solid rgba(255,255,255,0.12);
      padding:10px 14px;
      border-radius:999px;
      color: rgba(255,255,255,0.95);
      cursor:pointer;
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
      .left{
        padding:28px;
      }
      .right{
        padding:28px;
      }
      .logo img{height:44px}
      .preview-wrap{padding-top:80%}
    }

    /* Accessibility focus */
    .input:focus{box-shadow:0 0 0 3px rgba(167,123,198,0.18); border-color: rgba(255,255,255,0.18)}
    .btn:focus, .capture-btn:focus, .small-btn:focus{outline:3px solid rgba(167,123,198,0.15); outline-offset:2px}
  </style>
</head>
<body>
  <div class="container" id="app">
    <!-- Left: description / form (mobile stacks everything) -->
    <div class="left">
      <div class="logo">
        <!-- white logo url provided -->
        <img src="https://framerusercontent.com/images/ezLmAEgBsxPYSfavvu3Z8skoE.png" alt="Frame">
      </div>

      <h1>Registrar<br><span style="font-weight:300">colaborador</span></h1>
      <p class="lead">Digite as informações do colaborador para iniciar a verificação facial.</p>

      <!-- FORM -->
      <form id="registerForm" autocomplete="off">
        <div>
          <label for="cpf">Digite o CPF do colaborador</label>
          <input id="cpf" name="cpf" class="input" type="text" inputmode="numeric" placeholder="000.000.000-00" required>
        </div>

        <div>
          <label for="name">Digite o nome completo do colaborador</label>
          <input id="name" name="name" class="input" type="text" placeholder="Nome completo" required>
        </div>

        <div class="row">
          <div style="flex:1">
            <label for="cargo">Cargo</label>
            <input id="cargo" name="cargo" class="input" type="text" placeholder="Ex.: Analista" required>
          </div>
          <div style="flex:1">
            <label for="phone">Telefone</label>
            <input id="phone" name="phone" class="input" type="tel" placeholder="(DD) 90000-0000">
          </div>
        </div>

        <div>
          <label for="email">E-mail</label>
          <input id="email" name="email" class="input" type="email" placeholder="nome@dominio.com.br">
        </div>

        <div>
          <label for="password">Senha</label>
          <input id="password" name="password" class="input" type="password" placeholder="••••••••" autocomplete="new-password">
        </div>

        <button class="btn" id="startBtn" type="button">Iniciar verificação</button>
        <p class="footnote muted">Ao prosseguir, solicitaremos permissão para usar a câmera do dispositivo.</p>
      </form>
    </div>

    <!-- Right: camera / steps / result (will show/hide depending on state) -->
    <div class="right camera-stage" id="cameraStage" aria-hidden="true">
      <div style="width:100%; display:flex; justify-content:flex-end;">
        <!-- black logo for better contrast on some backgrounds -->
        <img src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame" style="height:28px; opacity:0.95">
      </div>

      <div class="preview-wrap" id="previewWrap">
        <video id="preview" autoplay muted playsinline></video>
        <div class="face-overlay" id="faceOverlay">
          <small>Centralize seu rosto</small>
        </div>
      </div>

      <div class="capture-row">
        <button class="small-btn" id="switchCamBtn" type="button" title="Trocar câmera (se suportado)">Trocar câmera</button>
        <button class="capture-btn" id="captureBtn" type="button">Capturar</button>
      </div>

      <div class="status-panel" id="statusPanel">
        <div id="statusList">
          <div><span class="progress-dot active" id="dot1"></span><strong id="step1">Aguardando captura</strong></div>
        </div>
      </div>

      <div class="result" id="resultScreen" role="status" aria-live="polite">
        <div class="big" style="color:var(--danger)">Verificação falhou</div>
        <div class="desc">Não foi possível confirmar sua identidade. <br>Tente novamente ou retorne ao cadastro.</div>
        <div style="display:flex; gap:8px; margin-top:6px;">
          <button class="small-btn" id="retryBtn" type="button">Tentar novamente</button>
          <button class="btn" id="backBtn" type="button">Voltar ao registro</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Query elements
    const startBtn = document.getElementById('startBtn');
    const cameraStage = document.getElementById('cameraStage');
    const preview = document.getElementById('preview');
    const previewWrap = document.getElementById('previewWrap');
    const captureBtn = document.getElementById('captureBtn');
    const backBtn = document.getElementById('backBtn');
    const retryBtn = document.getElementById('retryBtn');
    const switchCamBtn = document.getElementById('switchCamBtn');
    const registerForm = document.getElementById('registerForm');
    const statusList = document.getElementById('statusList');
    const resultScreen = document.getElementById('resultScreen');

    let stream = null;
    let usingFacingMode = 'user'; // 'user' or 'environment'
    let devices = [];
    let currentDeviceId = null;

    // Utility: sleep
    const wait = ms => new Promise(r => setTimeout(r, ms));

    // Simple form validation before starting
    function validateForm(){
      const cpf = document.getElementById('cpf').value.trim();
      const name = document.getElementById('name').value.trim();
      const cargo = document.getElementById('cargo').value.trim();

      if(!cpf || !name || !cargo){
        alert('Preencha CPF, nome e cargo antes de iniciar a verificação.');
        return false;
      }
      return true;
    }

    // Start verification: show camera stage
    startBtn.addEventListener('click', async () => {
      if(!validateForm()) return;

      // Show a brief loading to mimic "preparing verificação"
      startBtn.disabled = true;
      startBtn.textContent = 'Preparando...';
      await wait(700);

      // Show camera stage
      cameraStage.style.display = 'flex';
      cameraStage.setAttribute('aria-hidden','false');
      // hide scroll to keep focus
      window.scrollTo({top: 0, behavior: 'smooth'});
      startBtn.textContent = 'Iniciar verificação';
      startBtn.disabled = false;

      // Request camera
      await startCamera();
    });

    // Start camera with facing mode or device id
    async function startCamera(){
      try{
        // Stop any existing stream
        stopStream();

        // Prefer constraints
        const constraints = {
          audio: false,
          video: {
            facingMode: usingFacingMode, /* 'user' or 'environment' */
            width: { ideal: 1280 },
            height: { ideal: 960 }
          }
        };

        stream = await navigator.mediaDevices.getUserMedia(constraints);
        preview.srcObject = stream;

        // Get device list
        const all = await navigator.mediaDevices.enumerateDevices();
        devices = all.filter(d => d.kind === 'videoinput');

        // Try to find the current active device id if available
        const track = stream.getVideoTracks()[0];
        currentDeviceId = track.getSettings && track.getSettings().deviceId ? track.getSettings().deviceId : currentDeviceId;

        // Update UI
        resultScreen.style.display = 'none';
        statusList.innerHTML = '<div><span class="progress-dot active"></span><strong>Aguardando captura</strong></div>';
      } catch (err) {
        console.error('Erro ao acessar câmera:', err);
        alert('Não foi possível acessar a câmera. Verifique permissões e tente novamente.');
      }
    }

    // Stop any camera stream
    function stopStream(){
      if(stream){
        stream.getTracks().forEach(t => t.stop());
        stream = null;
        preview.srcObject = null;
      }
    }

    // Capture flow (simulated)
    captureBtn.addEventListener('click', async () => {
      // small capture animation
      captureBtn.disabled = true;
      captureBtn.textContent = 'Capturando...';

      // simulate capture by taking a snapshot (not used further)
      const snapshot = captureSnapshot();

      // Update status
      statusList.innerHTML = '';
      addStatus('Imagem capturada', true);
      await wait(600);
      addStatus('Lendo rosto', true);
      await wait(1200);
      addStatus('Verificando', true);
      await wait(1200);
      addStatus('Processando resultados', true);
      await wait(1200);

      // Simulate final result: ERROR (as requested)
      showErrorResult();

      captureBtn.disabled = false;
      captureBtn.textContent = 'Capturar';
    });

    function addStatus(text, active=false){
      const dot = document.createElement('span');
      dot.className = 'progress-dot' + (active ? ' active' : '');
      const strong = document.createElement('strong');
      strong.textContent = text;
      const div = document.createElement('div');
      div.appendChild(dot);
      div.appendChild(strong);
      statusList.appendChild(div);
      // scroll status panel if overflow
      statusList.parentElement.scrollTop = statusList.parentElement.scrollHeight;
    }

    function showErrorResult(){
      // hide preview and show result
      resultScreen.style.display = 'flex';
      // stop camera to save resources
      stopStream();
    }

    // Back to form
    backBtn.addEventListener('click', () => {
      cameraStage.style.display = 'none';
      cameraStage.setAttribute('aria-hidden','true');
      resultScreen.style.display = 'none';
      // ensure camera stopped
      stopStream();
      // return focus to first input
      document.getElementById('cpf').focus();
    });

    // Retry: restart camera flow
    retryBtn.addEventListener('click', async () => {
      resultScreen.style.display = 'none';
      statusList.innerHTML = '<div><span class="progress-dot active"></span><strong>Aguardando captura</strong></div>';
      await startCamera();
    });

    // Switch camera (if multiple devices)
    switchCamBtn.addEventListener('click', async () => {
      // If enumerateDevices shows more than 1, try to switch between device ids
      if(devices.length <= 1){
        // fallback: toggle facing mode
        usingFacingMode = (usingFacingMode === 'user') ? 'environment' : 'user';
      } else {
        // choose next device id
        const ids = devices.map(d => d.deviceId);
        const idx = ids.indexOf(currentDeviceId);
        const next = ids[(idx + 1) % ids.length];
        currentDeviceId = next;
        // set constraint to deviceId
        usingFacingMode = undefined;
      }

      // rebuild constraints depending on currentDeviceId
      try{
        stopStream();
        const videoConstraints = currentDeviceId ? { deviceId: { exact: currentDeviceId } } : { facingMode: usingFacingMode || 'user' };
        const s = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio:false});
        stream = s;
        preview.srcObject = stream;
      } catch(e){
        console.warn('Erro ao alternar câmera', e);
        alert('Não foi possível alternar a câmera.');
      }
    });

    // Helper: capture snapshot to canvas (mirror corrected)
    function captureSnapshot(){
      if(!preview || !preview.videoWidth) return null;
      const w = preview.videoWidth;
      const h = preview.videoHeight;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      // mirror back because video is mirrored
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(preview, 0, 0, w, h);
      // return dataURL (not used now)
      return canvas.toDataURL('image/jpeg', 0.9);
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => stopStream());

    // Additional: keyboard-friendly submit with Enter in form
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      startBtn.click();
    });

    // If device doesn't have camera support
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      switchCamBtn.style.display = 'none';
      captureBtn.disabled = true;
      captureBtn.title = 'Navegador não suporta câmera';
    }

    // Make inputs prevent auto-zoom on iOS by ensuring font-size 16 (already set) and inputmode where appropriate