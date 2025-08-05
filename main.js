// Jogo de Maquiagem - Ferrão Estúdio de Maquiagem - tudo em um único arquivo JavaScript com SVG + CSS + JS

window.onload = function () {
  document.body.innerHTML = `
    <style>
      body {
        margin: 0;
        background: linear-gradient(to bottom, #f3e5f5, #e1bee7);
        font-family: 'Arial', sans-serif;
        text-align: center;
        color: #4a148c;
      }

      h1 {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 1px 1px 2px #fff;
      }

      svg {
        width: 250px;
        height: auto;
        margin-top: 1rem;
      }

      .controls {
        margin-top: 2rem;
      }

      button {
        background-color: #ba68c8;
        color: white;
        border: none;
        padding: 0.7rem 1.2rem;
        margin: 0.3rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
        box-shadow: 1px 1px 4px #888;
      }

      button:hover {
        background-color: #ab47bc;
      }
    </style>

    <h1>💜 Ferrão Estúdio de Maquiagem 💄</h1>

    <svg viewBox="0 0 200 300">
      <!-- Cabelo afro volumoso estilo emoji -->
      <circle cx="100" cy="60" r="60" fill="#3e2f26" />
      <circle cx="40" cy="80" r="40" fill="#3e2f26" />
      <circle cx="160" cy="80" r="40" fill="#3e2f26" />
      <circle cx="30" cy="130" r="30" fill="#3e2f26" />
      <circle cx="170" cy="130" r="30" fill="#3e2f26" />

      <!-- Rosto mais delicado -->
      <path d="M60,100 Q100,70 140,100 Q150,140 140,180 Q100,210 60,180 Q50,140 60,100" fill="#8d5524" stroke="#5d4037" stroke-width="1" />

      <!-- Olhos com cílios -->
      <ellipse cx="80" cy="140" rx="9" ry="5.5" fill="white" stroke="black" stroke-width="0.5" />
      <circle cx="80" cy="140" r="3" fill="black" />
      <line x1="75" y1="134" x2="72" y2="132" stroke="black" stroke-width="1" />
      <line x1="80" y1="133" x2="80" y2="130" stroke="black" stroke-width="1" />
      <line x1="85" y1="134" x2="88" y2="132" stroke="black" stroke-width="1" />

      <ellipse cx="120" cy="140" rx="9" ry="5.5" fill="white" stroke="black" stroke-width="0.5" />
      <circle cx="120" cy="140" r="3" fill="black" />
      <line x1="115" y1="134" x2="112" y2="132" stroke="black" stroke-width="1" />
      <line x1="120" y1="133" x2="120" y2="130" stroke="black" stroke-width="1" />
      <line x1="125" y1="134" x2="128" y2="132" stroke="black" stroke-width="1" />

      <!-- Sobrancelhas -->
      <path d="M70,128 Q80,125 90,128" stroke="#3e2f26" stroke-width="2" fill="none" />
      <path d="M110,128 Q120,125 130,128" stroke="#3e2f26" stroke-width="2" fill="none" />

      <!-- Nariz -->
      <path d="M100,145 Q98,155 100,160 Q102,155 100,145" stroke="#5d4037" stroke-width="1" fill="none" />

      <!-- Boca -->
      <path id="mouth" d="M85,175 Q100,185 115,175 Q100,190 85,175" fill="#663333" stroke="#4e1c1c" stroke-width="1" />

      <!-- Blush -->
      <circle id="blushLeft" cx="65" cy="155" r="9" fill="transparent" />
      <circle id="blushRight" cx="135" cy="155" r="9" fill="transparent" />
    </svg>

    <div class="controls">
      <button onclick="applyBlush()">Aplicar Blush</button>
      <button onclick="applyBatom()">Aplicar Batom</button>
      <button onclick="resetMakeup()">Remover Maquiagem</button>
    </div>
  `;

  window.applyBlush = function () {
    document.getElementById("blushLeft").setAttribute("fill", "#f28cb5");
    document.getElementById("blushRight").setAttribute("fill", "#f28cb5");
  };

  window.applyBatom = function () {
    document.getElementById("mouth").setAttribute("fill", "#d81b60");
  };

  window.resetMakeup = function () {
    document.getElementById("blushLeft").setAttribute("fill", "transparent");
    document.getElementById("blushRight").setAttribute("fill", "transparent");
    document.getElementById("mouth").setAttribute("fill", "#663333");
  };
};