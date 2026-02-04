document.addEventListener("DOMContentLoaded",()=>{

const prereq={
  "English Language II":["English Language I"],
  "English Language III":["English Language II"],
  "English Language IV":["English Language III"],
  "Applied Grammar II":["Applied Grammar I"],
  "Applied Phonetics II":["Applied Phonetics I"],
  "Language and Culture I (CPC)":["English Language IV"],
  "Language and Culture II (CPC)":["Language and Culture I (CPC)"],
  "Language and Culture III (CPC)":["Language and Culture II (CPC)"],
  "Language and Culture IV (CPC)":["Language and Culture III (CPC)"],
  "Teaching and Learning English Primary I":["English Language IV"],
  "Teaching and Learning English Primary II":["Teaching and Learning English Primary I"],
  "Teaching and Learning English Secondary I":["English Language IV"],
  "Teaching and Learning English Secondary II":["Teaching and Learning English Secondary I"],
  "Práctica Pedagogía en Inglés II":["Práctica Pedagogía en Inglés I"],
  "Práctica Pedagogía en Inglés III":["Práctica Pedagogía en Inglés II"],
  "Práctica Pedagogía en Inglés IV":["Práctica Pedagogía en Inglés III"],
  "Práctica Profesional Pedagogía en Inglés Educación Básica":[
    "Práctica Pedagogía en Inglés IV","Teaching and Learning English Primary II"],
  "Práctica Profesional Pedagogía en Inglés Educación Media":[
    "Práctica Pedagogía en Inglés IV","Teaching and Learning English Secondary II"],
  "Evaluación Inglés Nivel C1":["Evaluación Inglés Nivel B2"],
  "Examen de Inglés Nivel C1 o Equivalente":["Evaluación Inglés Nivel C1"]
};

/* 🔹 INFO DE REQUISITOS (NUEVO) */
const infoRequisitos = {
  "English Language I": { requiere: [], esRequisitoDe: ["English Language II"] },
  "English Language II": { requiere: ["English Language I"], esRequisitoDe: ["English Language III","Applied Phonetics I"] },
  "English Language III": { requiere: ["English Language II"], esRequisitoDe: ["English Language IV"] },
  "English Language IV": { requiere: ["English Language III"], esRequisitoDe: ["Language and Culture I (CPC)","Teaching and Learning English Primary I","Teaching and Learning English Secondary I"] },

  "Applied Grammar I": { requiere: [], esRequisitoDe: ["Applied Grammar II"] },
  "Applied Grammar II": { requiere: ["Applied Grammar I"], esRequisitoDe: ["English Spanish Contrasts (CPC)"] },

  "Applied Phonetics I": { requiere: ["English Language II"], esRequisitoDe: ["Applied Phonetics II"] },
  "Applied Phonetics II": { requiere: ["Applied Phonetics I"], esRequisitoDe: ["English Spanish Contrasts (CPC)"] },

  "Language and Culture I (CPC)": { requiere: ["English Language IV"], esRequisitoDe: ["Language and Culture II (CPC)"] },
  "Language and Culture II (CPC)": { requiere: ["Language and Culture I (CPC)"], esRequisitoDe: ["Language and Culture III (CPC)"] },
  "Language and Culture III (CPC)": { requiere: ["Language and Culture II (CPC)"], esRequisitoDe: ["Language and Culture IV (CPC)"] },
  "Language and Culture IV (CPC)": { requiere: ["Language and Culture III (CPC)"], esRequisitoDe: ["English Spanish Contrasts (CPC)"] },

  "Teaching and Learning English Primary I": { requiere: ["English Language IV"], esRequisitoDe: ["Teaching and Learning English Primary II","Práctica Pedagogía en Inglés III"] },
  "Teaching and Learning English Primary II": { requiere: ["Teaching and Learning English Primary I"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Básica"] },

  "Teaching and Learning English Secondary I": { requiere: ["English Language IV"], esRequisitoDe: ["Teaching and Learning English Secondary II"] },
  "Teaching and Learning English Secondary II": { requiere: ["Teaching and Learning English Secondary I"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Media"] },

  "Práctica Pedagogía en Inglés I": { requiere: ["Ámbitos del Aprendizaje y el desarrollo"], esRequisitoDe: ["Práctica Pedagogía en Inglés II"] },
  "Práctica Pedagogía en Inglés II": { requiere: ["Práctica Pedagogía en Inglés I"], esRequisitoDe: ["Práctica Pedagogía en Inglés III"] },
  "Práctica Pedagogía en Inglés III": { requiere: ["Práctica Pedagogía en Inglés II","Teaching and Learning English Primary I"], esRequisitoDe: ["Práctica Pedagogía en Inglés IV"] },
  "Práctica Pedagogía en Inglés IV": { requiere: ["Práctica Pedagogía en Inglés III"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Básica","Práctica Profesional Pedagogía en Inglés Educación Media"] },

  "Classroom Research Seminar": { requiere: [], esRequisitoDe: ["Seminar"] },
  "Seminar": { requiere: ["Classroom Research Seminar"], esRequisitoDe: [] },

  "Evaluación Inglés Nivel B2": { requiere: [], esRequisitoDe: ["Evaluación Inglés Nivel C1"] },
  "Evaluación Inglés Nivel C1": { requiere: ["Evaluación Inglés Nivel B2"], esRequisitoDe: ["Examen de Inglés Nivel C1 o Equivalente"] },
  "Examen de Inglés Nivel C1 o Equivalente": { requiere: ["Evaluación Inglés Nivel C1"], esRequisitoDe: [] },

  "Electivo Formación General": { requiere: [], esRequisitoDe: [] }
};

let estado = JSON.parse(localStorage.getItem("estado_malla")) || {};

const aprobado = n => Object.keys(estado).some(id => id.endsWith("|" + n));
const puede = n => (prereq[n] || []).every(r => aprobado(r));

function crearMateria(nombre, id) {
  const d = document.createElement("div");
  d.className = "materia";
  d.style.position = "relative";

  if (estado[id]) d.classList.add("aprobada");
  else if (puede(nombre)) d.classList.add("habilitada");

  const infoBtn = document.createElement("button");
  infoBtn.textContent = "ⓘ";
  infoBtn.style.position = "absolute";
  infoBtn.style.top = "4px";
  infoBtn.style.right = "4px";
  infoBtn.style.border = "none";
  infoBtn.style.background = "transparent";
  infoBtn.style.cursor = "pointer";
  infoBtn.style.fontSize = "14px";

  const menu = document.createElement("div");
  menu.style.position = "absolute";
  menu.style.top = "24px";
  menu.style.right = "4px";
  menu.style.background = "#fff";
  menu.style.border = "1px solid #ccc";
  menu.style.padding = "6px";
  menu.style.fontSize = "12px";
  menu.style.display = "none";
  menu.style.zIndex = "10";

  const data = infoRequisitos[nombre] || { requiere: [], esRequisitoDe: [] };

  menu.innerHTML = `
    <strong>Requiere:</strong><br>
    ${data.requiere.length ? data.requiere.join("<br>") : "—"}
    <br><br>
    <strong>Es requisito de:</strong><br>
    ${data.esRequisitoDe.length ? data.esRequisitoDe.join("<br>") : "—"}
  `;

  infoBtn.onclick = e => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  };

  document.addEventListener("click", () => menu.style.display = "none");

  d.appendChild(infoBtn);
  d.appendChild(menu);

  d.onclick = () => {
    if (!puede(nombre)) return;
    estado[id] ? delete estado[id] : estado[id] = true;
    localStorage.setItem("estado_malla", JSON.stringify(estado));
    render();
  };

  d.innerHTML += `
    <div class="materia-header">
      <span class="materia-nombre">${nombre}</span>
    </div>
  `;

  return d;
}

/* ⬇️ todo lo demás queda EXACTAMENTE igual */
render();

});
