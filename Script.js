
let lendo = false;

function lerEmVozAlta(texto) {
  const sintese = window.speechSynthesis;

  if (lendo) {
    return;
  }

  sintese.cancel();

  const fala = new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";

  fala.onstart = function () {
    lendo = true;
  };

  fala.onend = function () {
    lendo = false;
  };

  fala.onerror = function () {
    lendo = false;
  };

  sintese.speak(fala);
}

function pausarOuRetomar() {
  const sintese = window.speechSynthesis;

  if (sintese.paused) {
    sintese.resume();
  } else {
    sintese.pause();
  }
}

function pararLeitura() {
  window.speechSynthesis.cancel();
  lendo = false;
}
