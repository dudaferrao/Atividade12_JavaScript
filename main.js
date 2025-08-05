// Jogo de Maquiagem com Boneca Estilizada usando SVG + CSS + JS — tudo em um único arquivo JavaScript

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
      }

      svg {
        width: 250px;
        height: auto;
        margin-top: 2rem;
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
      }

      button:hover {
        background-color: #ab47bc;
      }
    </style>

    <h1>💄 Jogo de Maquiagem - Boneca Estilizada com SVG</h1>

    <svg viewBox="0 0 200 300">
      <!-- Cabelo Cacheado -->
      <circle cx="100" cy="80" r="85" fill="#3e2f26" />
      <circle cx="40" cy="60" r="25" fill="#3e2f26" />
      <circle cx="160" cy="60" r="25" fill="#3e2f26" />
      <circle cx="30" cy="100" r="20" fill="#3e2f26" />
      <circle cx="170" cy="100" r="20" fill="#3e2f26" />

      <!-- Rosto -->
      <ellipse cx="100" cy="150" rx="55" ry="75" fill="#8d5524" stroke="#5d4037" stroke-width="1" />

      <!-- Olhos com cílios -->
      <ellipse cx="75" cy="130" rx="10" ry="6" fill="white" stroke="black" stroke-width="0.5" />
      <circle cx="75" cy="130" r="3" fill="black" />
      <line x1="70" y1="124" x2="67" y2="122" stroke="black" stroke-width="1" />
      <line x1="75" y1="123" x2="75" y2="120" stroke="black" stroke-width="1" />
      <line x1="80" y1="124" x2="83" y2="122" stroke="black" stroke-width="1" />

      <ellipse cx="125" cy="130" rx="10" ry="6" fill="white" stroke="black" stroke-width="0.5" />
      <circle cx="125" cy="130" r="3" fill="black" />
      <line x1="120" y1="124" x2="117" y2="122" stroke="black" stroke-width="1" />
      <line x1="125" y1="123" x2="125" y2="120" stroke="black" stroke-width="1" />
      <line x1="130" y1="124" x2="133" y2="122" stroke="black" stroke-width="1" />

      <!-- Sobrancelhas -->
      <path d="M65,118 Q75,115 85,118" stroke="#3e2f26" stroke-width="2" fill="none" />
      <path d="M115,118 Q125,115 135,118" stroke="#3e2f26" stroke-width="2" fill="none" />

      <!-- Nariz -->
      <path d="M100,135 Q98,145 100,150 Q102,145 100,135" stroke="#5d4037" stroke-wid