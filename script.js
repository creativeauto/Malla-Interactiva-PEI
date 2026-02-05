document.addEventListener("DOMContentLoaded",()=>{
// Cerrar menus de info al hacer click fuera
document.addEventListener("click", () => {
  document.querySelectorAll(".info-menu.visible").forEach(menu => {
    menu.classList.remove("visible");
    menu.parentElement.classList.remove("info-abierta");
  });
});

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

const infoRamos = {
  "English Language I": { sigla: "LET0301", creditos: 12 },
  "Applied Grammar I": { sigla: "LET1331", creditos: 10 },
  "Ámbitos del Aprendizaje y el desarrollo": { sigla: "EDU0511", creditos: 10 },
  "Teoría de la Educación": { sigla: "EDU0311", creditos: 10 },
  "Introduction to Teaching English (CPC)": { sigla: "EIN1001", creditos: 10 },

  "English Language II": { sigla: "LET0302", creditos: 12 },
  "Applied Grammar II": { sigla: "LET1332", creditos: 10 },
  "Aprendizaje y Desarrollo del Escolar": { sigla: "EDU0315", creditos: 10 },
  "Práctica Pedagogía en Inglés I": { sigla: "EDU0500", creditos: 10 },
  "Evaluación Inglés Nivel B2": { sigla: "—", creditos: 0 },

  "English Language III": { sigla: "LET1313", creditos: 10 },
  "Applied Phonetics I": { sigla: "LET2311", creditos: 10 },
  "Applied Linguistics and Education": { sigla: "LET2313", creditos: 10 },
  "Educación y Sociedad": { sigla: "EDU0165", creditos: 10 },

  "English Language IV": { sigla: "LET1314", creditos: 10 },
  "Applied Phonetics II": { sigla: "LET2312", creditos: 10 },
  "Evaluación para el Aprendizaje": { sigla: "EDU0512", creditos: 10 },
  "Práctica Pedagogía en Inglés II": { sigla: "EDU0501", creditos: 10 },

  "Language and Culture I (CPC)": { sigla: "EIN1002", creditos: 10 },
  "Second Language Acquisition": { sigla: "LET2315", creditos: 10 },
  "Curriculum": { sigla: "EDU0162", creditos: 10 },
  "Teaching and Learning English Primary I": { sigla: "EDU0506", creditos: 10 },

  "Language and Culture II (CPC)": { sigla: "EIN1003", creditos: 10 },
  "Diversidad e Inclusión en Educación": { sigla: "EDU0317", creditos: 10 },
  "Teaching and Learning English Secondary I": { sigla: "EDU0508", creditos: 10 },
  "Práctica Pedagogía en Inglés III": { sigla: "EDU0502", creditos: 10 },
  "Evaluación Inglés Nivel C1": { sigla: "—", creditos: 0 },

  "Language and Culture III (CPC)": { sigla: "EIN1004", creditos: 10 },
  "Introduction to Literary Studies": { sigla: "LET1341", creditos: 10 },
  "Teaching and Learning English Primary II": { sigla: "EDU0507", creditos: 10 },

  "Language and Culture IV (CPC)": { sigla: "EIN1005", creditos: 10 },
  "Classroom Research Seminar": { sigla: "EIN1006", creditos: 10 },
  "Teaching and Learning English Secondary II": { sigla: "EDU0509", creditos: 10 },
  "Práctica Pedagogía en Inglés IV": { sigla: "EDU0503", creditos: 10 },
  "Examen de Licenciatura en Educación": { sigla: "EDU0510", creditos: 0 },
  "Examen de Inglés Nivel C1 o Equivalente": { sigla: "—", creditos: 0 },

  "English Spanish Contrasts (CPC)": { sigla: "EIN1007", creditos: 10 },
  "Literature for Children (CPC)": { sigla: "EIN1008", creditos: 10 },
  "Gestión y Liderazgo en el Aula": { sigla: "EDU0316", creditos: 10 },
  "Práctica Profesional Pedagogía en Inglés Educación Básica": { sigla: "EDU0504", creditos: 20 },

  "Literature for Teen Readers (CPC)": { sigla: "EIN1009", creditos: 10 },
  "Seminar": { sigla: "EIN1010", creditos: 10 },
  "Práctica Profesional Pedagogía en Inglés Educación Media": { sigla: "EDU0505", creditos: 20 },
  "Ética Profesional": { sigla: "EDU0166", creditos: 10 }
};

const estructura=[
 {anio:"Primer Año",
  s1:["English Language I","Applied Grammar I","Ámbitos del Aprendizaje y el desarrollo","Teoría de la Educación","Introduction to Teaching English (CPC)"],
  s2:["English Language II","Applied Grammar II","Aprendizaje y Desarrollo del Escolar","Práctica Pedagogía en Inglés I","Electivo Formación General","Evaluación Inglés Nivel B2"]},
 {anio:"Segundo Año",
  s1:["English Language III","Applied Phonetics I","Applied Linguistics and Education","Educación y Sociedad","Electivo Formación General"],
  s2:["English Language IV","Applied Phonetics II","Evaluación para el Aprendizaje","Práctica Pedagogía en Inglés II","Electivo Formación General"]},
 {anio:"Tercer Año",
  s1:["Language and Culture I (CPC)","Second Language Acquisition","Curriculum","Teaching and Learning English Primary I","Electivo Formación General"],
  s2:["Language and Culture II (CPC)","Diversidad e Inclusión en Educación","Teaching and Learning English Secondary I","Práctica Pedagogía en Inglés III","Electivo Formación General","Evaluación Inglés Nivel C1"]},
 {anio:"Cuarto Año",
  s1:["Language and Culture III (CPC)","Introduction to Literary Studies","Teaching and Learning English Primary II","Electivo Formación General","Electivo Formación General"],
  s2:["Language and Culture IV (CPC)","Classroom Research Seminar","Teaching and Learning English Secondary II","Práctica Pedagogía en Inglés IV","Examen de Licenciatura en Educación","Electivo Formación General","Examen de Inglés Nivel C1 o Equivalente"]},
 {anio:"Quinto Año",
  s1:["English Spanish Contrasts (CPC)","Literature for Children (CPC)","Gestión y Liderazgo en el Aula","Práctica Profesional Pedagogía en Inglés Educación Básica"],
  s2:["Literature for Teen Readers (CPC)","Seminar","Práctica Profesional Pedagogía en Inglés Educación Media","Ética Profesional"]}
];

let estado = JSON.parse(localStorage.getItem("estado_malla")) || {};

const aprobado = n => Object.keys(estado).some(id => id.endsWith("|" + n));
const puede = n => (prereq[n] || []).every(r => aprobado(r));
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

  "Classroom Research": { requiere: [], esRequisitoDe: ["Seminar"] },
  "Seminar": { requiere: ["Classroom Research"], esRequisitoDe: [] },

  "Evaluación Inglés Nivel B2": { requiere: [], esRequisitoDe: ["Evaluación Inglés Nivel C1"] },
  "Evaluación Inglés Nivel C1": { requiere: ["Evaluación Inglés Nivel B2"], esRequisitoDe: ["Examen de Inglés Nivel C1 o Equivalente"] },
  "Examen de Inglés Nivel C1 o Equivalente": { requiere: ["Evaluación Inglés Nivel C1"], esRequisitoDe: [] },

  "Electivo Formación General": { requiere: [], esRequisitoDe: [] }
};

function crearMateria(nombre, id) {
  const d = document.createElement("div");
  d.className = "materia";

  if (estado[id]) d.classList.add("aprobada");
  else if (puede(nombre)) d.classList.add("habilitada");
  else d.classList.add("bloqueada");

  const info = infoRamos[nombre] || { sigla: "—", creditos: 0 };

  d.innerHTML = `
    <div class="materia-header">
      <span class="materia-nombre">${nombre}</span>
      <span class="materia-sigla">${info.sigla}</span>
    </div>
    <div class="materia-creditos">${info.creditos} cr.</div>
  `;

  d.onclick = () => {
    if (!puede(nombre) && !estado[id]) return;

    if (estado[id]) delete estado[id];
    else estado[id] = true;

    localStorage.setItem("estado_malla", JSON.stringify(estado));
    render();
  };

  // ===== BOTÓN INFO =====
  const infoBtn = document.createElement("span");
  infoBtn.className = "info-btn";
  infoBtn.textContent = "ⓘ";

  const menu = document.createElement("div");
  menu.className = "info-menu";

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

    document.querySelectorAll(".info-menu.visible").forEach(m => {
      if (m !== menu) {
        m.classList.remove("visible");
        m.parentElement.classList.remove("info-abierta");
      }
    });

    menu.classList.toggle("visible");
    d.classList.toggle("info-abierta", menu.classList.contains("visible"));
  };

  d.appendChild(infoBtn);
  d.appendChild(menu);

  return d;
}

function actualizarBarra() {
  const totalRamos = estructura.reduce((a, x) => a + x.s1.length + x.s2.length, 0);

  let creditosAprobados = 0;
  Object.keys(estado).forEach(id => {
    const nombre = id.split("|")[1];
    const info = infoRamos[nombre];
    if (info) creditosAprobados += info.creditos;
  });

  const aprobados = Object.keys(estado).length;
  const p = Math.round((aprobados / totalRamos) * 100);

  document.querySelector(".barra-relleno").style.width = p + "%";
  document.querySelector(".progreso-texto").innerHTML =
    `Avance de Carrera: <strong>${p}%</strong> (${creditosAprobados} Cr.)`;
}

function aprobarSemestre(anioIndex, semestreKey) {
  const ramos = estructura[anioIndex][semestreKey];

  const todosAprobados = ramos.every((nombre, j) => {
    const id = `${anioIndex}-${semestreKey}-${j}|${nombre}`;
    return estado[id];
  });

  ramos.forEach((nombre, j) => {
    const id = `${anioIndex}-${semestreKey}-${j}|${nombre}`;
    if (todosAprobados) delete estado[id];
    else estado[id] = true;
  });

  localStorage.setItem("estado_malla", JSON.stringify(estado));
  render();
}

function aprobarAnio(anioIndex) {
  const s1 = estructura[anioIndex].s1;
  const s2 = estructura[anioIndex].s2;
  const ramos = [...s1, ...s2];

  const todosAprobados = ramos.every((nombre, idx) => {
    const s = idx < s1.length ? "s1" : "s2";
    const j = idx < s1.length ? idx : idx - s1.length;
    const id = `${anioIndex}-${s}-${j}|${nombre}`;
    return estado[id];
  });

  ramos.forEach((nombre, idx) => {
    const s = idx < s1.length ? "s1" : "s2";
    const j = idx < s1.length ? idx : idx - s1.length;
    const id = `${anioIndex}-${s}-${j}|${nombre}`;

    if (todosAprobados) delete estado[id];
    else estado[id] = true;
  });

  localStorage.setItem("estado_malla", JSON.stringify(estado));
  render();
}

function render() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  const sem1 = ["I", "III", "V", "VII", "IX"];
  const sem2 = ["II", "IV", "VI", "VIII", "X"];

  estructura.forEach((a, i) => {
    const col = document.createElement("div");
    col.className = "anio";
    col.innerHTML = `<h3 class="titulo-anio">${a.anio}</h3>`;

    const tituloAnio = col.querySelector(".titulo-anio");
    tituloAnio.onclick = () => aprobarAnio(i);

    const sems = document.createElement("div");
    sems.className = "semestres";

    [["s1", sem1[i]], ["s2", sem2[i]]].forEach(([s, l]) => {
      const c = document.createElement("div");
      c.className = "semestre-col";
      c.innerHTML = `<h4 class="titulo-semestre">${l}</h4>`;

      const titulo = c.querySelector(".titulo-semestre");
      titulo.onclick = () => aprobarSemestre(i, s);

      a[s].forEach((m, j) => {
        c.appendChild(crearMateria(m, `${i}-${s}-${j}|${m}`));
      });

      sems.appendChild(c);
    });

    col.appendChild(sems);
    cont.appendChild(col);
  });

  actualizarBarra();
}

window.resetear = () => {
  localStorage.removeItem("estado_malla");
  estado = {};
  render();
};

render();

});

