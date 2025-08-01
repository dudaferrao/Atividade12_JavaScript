// jogoMaquiagem.js
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <style>
      body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background: linear-gradient(to bottom, #e6e6fa, #f3e5f5);
      }
      header {
        background-color: #d8bfd8;
        padding: 1rem;
        text-align: center;
        color: #fff;
        font-size: 2rem;
      }
      .salon {
        display: flex;
        justify-content: space-around;
        padding: 2rem;
        background-color: #f8f0ff;
      }
      .doll {
        flex: 1;
        text-align: center;
      }
      .doll img {
        width: 300px;
        border-radius: 1rem;
        border: 4px solid #dabfff;
      }
      .makeup-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .makeup-items button {
        padding: 1rem;
        font-size: 1rem;
        background-color: #cda4de;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background 0.3s;
      }
      .makeup-items button:hover {
        background-color: #b497d6;
      }
      .log {
        padding: 1rem;
        background: #f3e5f5;
        height: 100px;
        overflow-y: auto;
        border-top: 2px solid #caa0dd;
      }
      footer {
        text-align: center;
        padding: 1rem;
        color: #777;
        font-size: 0.9rem;
      }
    </style>

    <header>Salão Lilás - Jogo de Maquiagem</header>
    <div class="salon">
      <div class="doll">
        <img id="doll-img" src="https://i.imgur.com/ZkA9Ce2.png" alt="Boneca morena de cabelo cacheado">
      </div>
      <div class="makeup-items">
        <button onclick="applyMakeup('Base aplicada')">1. Base</button>
        <button onclick="applyMakeup('Corretivo aplicado')">2. Corretivo</button>
        <button onclick="applyMakeup('Blush aplicado')">3. Blush</button>
        <button onclick="applyMakeup('Sombra aplicada')">4. Sombra</button>
        <button onclick="applyMakeup('Rímel aplicado')">5. Rímel</button>
        <button onclick="applyMakeup('Batom aplicado')">6. Batom</button>
        <button onclick="applyMakeup('Iluminador aplicado')">7. Iluminador</button>
      </div>
    </div>
    <div class="log" id="log"></div>
    <footer>© 2025 Ferrão Games - Criado com amor em tons de lilás</footer>
  `;

  window.applyMakeup = function(step) {
    const logDiv = document.getElementById("log");
    const entry = document.createElement("div");
    entry.textContent = `✔ ${step}`;
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight;
  };
});
