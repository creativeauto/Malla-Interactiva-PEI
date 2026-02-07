document.addEventListener("DOMContentLoaded",()=>{
  
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
  "Applied Phonetics I":["English Language II"],
  "Applied Phonetics II":["Applied Phonetics I"],
  "Language and Culture I (CPC)":["English Language IV"],
  "Language and Culture II (CPC)":["Language and Culture I (CPC)"],
  "Language and Culture III (CPC)":["Language and Culture II (CPC)"],
  "Language and Culture IV (CPC)":["Language and Culture III (CPC)"],
  "Teaching and Learning English Primary I":["English Language IV"],
  "Teaching and Learning English Primary II":["Teaching and Learning English Primary I"],
  "Teaching and Learning English Secondary I":["English Language IV"],
  "Teaching and Learning English Secondary II":["Teaching and Learning English Secondary I"],
  "Práctica Pedagogía en Inglés I":["Ámbitos del Aprendizaje y el Desarrollo"],
  "Práctica Pedagogía en Inglés II":["Práctica Pedagogía en Inglés I"],
  "Práctica Pedagogía en Inglés III":["Práctica Pedagogía en Inglés II","Teaching and Learning English Primary I"],
  "Práctica Pedagogía en Inglés IV":["Práctica Pedagogía en Inglés III"],
  "Práctica Profesional Pedagogía en Inglés Educación Básica":[
    "Práctica Pedagogía en Inglés IV","Teaching and Learning English Primary II"],
  "Práctica Profesional Pedagogía en Inglés Educación Media":[
    "Práctica Pedagogía en Inglés IV","Teaching and Learning English Secondary II"],
  "Evaluación Inglés Nivel C1":["Evaluación Inglés Nivel B2"],
  "Examen de Inglés Nivel C1 o Equivalente":["Evaluación Inglés Nivel C1"],
  "English Spanish Contrasts (CPC)":["Language and Culture IV (CPC)","Applied Grammar II","Applied Phonetics II"],
  "Literature for Children (CPC)":["Introduction to Literary Studies"],
  "Literature for Teen Readers (CPC)":["Introduction to Literary Studies"],
  "Seminar":["Classroom Research"]
};

const infoRamos = {
  "English Language I": { sigla: "LET0301", creditos: 12 },
  "Applied Grammar I": { sigla: "LET1331", creditos: 10 },
  "Ámbitos del Aprendizaje y el Desarrollo": { sigla: "EDU0511", creditos: 10 },
  "Teoría de la Educación": { sigla: "EDU0311", creditos: 10 },
  "Introduction to Teaching English (CPC)": { sigla: "EIN1001", creditos: 10 },

  "English Language II": { sigla: "LET0302", creditos: 12 },
  "Applied Grammar II": { sigla: "LET1332", creditos: 10 },
  "Aprendizaje y Desarrollo del Escolar": { sigla: "EDU0315", creditos: 10 },
  "Práctica Pedagogía en Inglés I": { sigla: "EDU0500", creditos: 10 },
  "Evaluación Inglés Nivel B2": { sigla: "—", creditos: 0 },
  "Electivo Formación General": { sigla: "—", creditos: 10 },

  "English Language III": { sigla: "LET1313", creditos: 10 },
  "Applied Phonetics I": { sigla: "LET2311", creditos: 10 },
  "Applied Linguistics and Education": { sigla: "LET2313", creditos: 10 },
  "Educación y Sociedad": { sigla: "EDU0165", creditos: 10 },
   "Electivo Formación General": { sigla: "—", creditos: 10 },

  "English Language IV": { sigla: "LET1314", creditos: 10 },
  "Applied Phonetics II": { sigla: "LET2312", creditos: 10 },
  "Evaluación para el Aprendizaje": { sigla: "EDU0512", creditos: 10 },
  "Práctica Pedagogía en Inglés II": { sigla: "EDU0501", creditos: 10 },
   "Electivo Formación General": { sigla: "—", creditos: 10 },

  "Language and Culture I (CPC)": { sigla: "EIN1002", creditos: 10 },
  "Second Language Acquisition": { sigla: "LET2315", creditos: 10 },
  "Curriculum": { sigla: "EDU0162", creditos: 10 },
  "Teaching and Learning English Primary I": { sigla: "EDU0506", creditos: 10 },
   "Electivo Formación General": { sigla: "—", creditos: 10 },

  "Language and Culture II (CPC)": { sigla: "EIN1003", creditos: 10 },
  "Diversidad e Inclusión en Educación": { sigla: "EDU0317", creditos: 10 },
  "Teaching and Learning English Secondary I": { sigla: "EDU0508", creditos: 10 },
  "Práctica Pedagogía en Inglés III": { sigla: "EDU0502", creditos: 10 },
  "Evaluación Inglés Nivel C1": { sigla: "—", creditos: 0 },
   "Electivo Formación General": { sigla: "—", creditos: 10 },

  "Language and Culture III (CPC)": { sigla: "EIN1004", creditos: 10 },
  "Introduction to Literary Studies": { sigla: "LET1341", creditos: 10 },
  "Teaching and Learning English Primary II": { sigla: "EDU0507", creditos: 10 },
   "Electivo Formación General": { sigla: "—", creditos: 10 },
   "Electivo Formación General": { sigla: "—", creditos: 10 },

  "Language and Culture IV (CPC)": { sigla: "EIN1005", creditos: 10 },
  "Classroom Research": { sigla: "EIN1006", creditos: 10 },
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
  s1:["English Language I","Applied Grammar I","Ámbitos del Aprendizaje y el Desarrollo","Teoría de la Educación","Introduction to Teaching English (CPC)"],
  s2:["English Language II","Applied Grammar II","Aprendizaje y Desarrollo del Escolar","Práctica Pedagogía en Inglés I","Electivo Formación General","Evaluación Inglés Nivel B2"]},
 {anio:"Segundo Año",
  s1:["English Language III","Applied Phonetics I","Applied Linguistics and Education","Educación y Sociedad","Electivo Formación General"],
  s2:["English Language IV","Applied Phonetics II","Evaluación para el Aprendizaje","Práctica Pedagogía en Inglés II","Electivo Formación General"]},
 {anio:"Tercer Año",
  s1:["Language and Culture I (CPC)","Second Language Acquisition","Curriculum","Teaching and Learning English Primary I","Electivo Formación General"],
  s2:["Language and Culture II (CPC)","Diversidad e Inclusión en Educación","Teaching and Learning English Secondary I","Práctica Pedagogía en Inglés III","Electivo Formación General","Evaluación Inglés Nivel C1"]},
 {anio:"Cuarto Año",
  s1:["Language and Culture III (CPC)","Introduction to Literary Studies","Teaching and Learning English Primary II","Electivo Formación General","Electivo Formación General"],
  s2:["Language and Culture IV (CPC)","Classroom Research","Teaching and Learning English Secondary II","Práctica Pedagogía en Inglés IV","Examen de Licenciatura en Educación","Electivo Formación General","Examen de Inglés Nivel C1 o Equivalente"]},
 {anio:"Quinto Año",
  s1:["English Spanish Contrasts (CPC)","Literature for Children (CPC)","Gestión y Liderazgo en el Aula","Práctica Profesional Pedagogía en Inglés Educación Básica"],
  s2:["Literature for Teen Readers (CPC)","Seminar","Práctica Profesional Pedagogía en Inglés Educación Media","Ética Profesional"]}
];

let estado = JSON.parse(localStorage.getItem("estado_malla")) || {};

const aprobado = n => Object.keys(estado).some(id => id.endsWith("|" + n));
const puede = n => (prereq[n] || []).every(r => aprobado(r));
const infoRequisitos = {

  "English Language I": { requiere: [], esRequisitoDe: ["English Language II"], descripcion: "La secuencia de cursos de Lengua Inglesa busca desarrollar, en los primeros cuatro semestres de la Licenciatura, las cuatro habilidades propias del aprendizaje de una lengua extranjera en niveles progresivos de dificultad. Este curso, Lengua Inglesa I, busca consolidar el manejo funcional y pragmático de la lengua extranjera en un nivel intermedio de competencia." },
  "Applied Grammar I": { requiere: [], esRequisitoDe: ["Applied Grammar II"], descripcion: "El curso Gramática Aplicada I está orientado a que el estudiantado desarrolle de manera progresiva las habilidades lingüísticas relativas al manejo funcional y estructural de las categorías gramaticales correspondientes al aprendizaje de una lengua extranjera en un nivel intermedio.El estudiantado podrá reconocer y analizar frases de distinta extensión y nivel de complejidad en términos de estructura y funcionalidad de los diversos componentes de la oración simple." },
  "Ámbitos del Aprendizaje y el Desarrollo": { requiere: [], esRequisitoDe: ["Práctica Pedagogía en Inglés I"], descripcion: "Este curso tiene por propósito desarrollar los conocimientos teóricos sobre los procesos de aprendizaje y desarrollo de los niños y adolescentes entendidos como interdependientes y abordados desde una visión epistemológica que incorpora el diálogo mente - cultura. A través de una metodología teórico-práctica, se realizará un análisis complejo a través del estudio de caso, que incorpore las dimensiones psicomotora, socioafectiva, moral, espiritual y cognitiva del desarrollo, sobre las relaciones que los estudiantes en etapa escolar establecen y los factores asociados al desarrollo y al aprendizaje." },
  "Teoría de la Educación": { requiere: [], esRequisitoDe: [], descripcion: "Este curso tiene como foco el microsistema pedagógico (centro educativo, sala de clases) y el funcionamiento, en dicho contexto, de las teorías prácticas de la educación. Para su análisis se distinguen dos niveles: a) nivel macro educacional, identificado como el contexto social, cultural y político en donde se generan teorías, reflexiones, propuestas, visiones y misiones hacia el microsistema pedagógico b) el nivel micropedagógico, en donde se hace el paso de lo educacional a lo pedagógico y se profundiza en la problemática de la escuela y de la sala de clases proponiendo diferentes perspectivas de explicación teórica fundada." },
  "Introduction to Teaching English (CPC)": { requiere: [], esRequisitoDe: [], descripcion: "This course introduces student teachers to the profession of Teaching English as a Foreign Language (TEFL) as a starting point for the building of a professional identity. It focuses on the central aspects of linguistic and communicative elements of English as well as the teaching-learning process with an emphasis on the understanding of the roles of the teacher and the learner. Student teachers will explore the role of English as an international language in Chile and the diverse educational contexts in which English is taught and learned today, including technology mediated learning." },

  "English Language II": { requiere: ["English Language I"], esRequisitoDe: ["English Language III", "Applied Phonetics I"], descripcion: "Lengua Inglesa II busca lograr la adquisición de un manejo funcional y pragmático de la lengua extranjera en un nivel intermedio superior de competencia." },
  "Applied Grammar II": { requiere: ["Applied Grammar I"], esRequisitoDe: ["English Spanish Contrasts (CPC)"], descripcion: "" },
  "Aprendizaje y Desarrollo del Escolar": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Práctica Pedagogía en Inglés I": { requiere: ["Ámbitos del Aprendizaje y el Desarrollo"], esRequisitoDe: ["Práctica Pedagogía en Inglés II"], descripcion: "" },
  "Electivo Formación General I": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Evaluación Inglés Nivel B2": { requiere: [], esRequisitoDe: ["Evaluación Inglés Nivel C1"], descripcion: "" },

  "English Language III": { requiere: ["English Language II"], esRequisitoDe: ["English Language IV"], descripcion: "" },
  "Applied Phonetics I": { requiere: ["English Language II"], esRequisitoDe: ["Applied Phonetics II"], descripcion: "" },
  "Applied Linguistics and Education": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Educación y Sociedad": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Electivo Formación General II": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "English Language IV": { requiere: ["English Language III"], esRequisitoDe: ["Language and Culture I (CPC)", "Teaching and Learning English Primary I", "Teaching and Learning English Secondary I"], descripcion: "" },
  "Applied Phonetics II": { requiere: ["Applied Phonetics I"], esRequisitoDe: ["English Spanish Contrasts (CPC)"], descripcion: "" },
  "Evaluación para el Aprendizaje": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Práctica Pedagogía en Inglés II": { requiere: ["Práctica Pedagogía en Inglés I"], esRequisitoDe: ["Práctica Pedagogía en Inglés III"], descripcion: "" },
  "Electivo Formación General III": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "Language and Culture I (CPC)": { requiere: ["English Language IV"], esRequisitoDe: ["Language and Culture II (CPC)"], descripcion: "" },
  "Second Language Acquisition": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Curriculum": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Teaching and Learning English Primary I": { requiere: ["English Language IV"], esRequisitoDe: ["Teaching and Learning English Primary II", "Práctica Pedagogía en Inglés III"], descripcion: "" },
  "Electivo Formación General IV": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "Language and Culture II (CPC)": { requiere: ["Language and Culture I (CPC)"], esRequisitoDe: ["Language and Culture III (CPC)"], descripcion: "" },
  "Diversidad e Inclusión en Educación": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Práctica Pedagogía en Inglés III": { requiere: ["Práctica Pedagogía en Inglés II", "Teaching and Learning English Primary I"], esRequisitoDe: ["Práctica Pedagogía en Inglés IV"], descripcion: "" },
  "Electivo Formación General V": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Evaluación Inglés Nivel C1": { requiere: ["Evaluación Inglés Nivel B2"], esRequisitoDe: ["Examen de Inglés Nivel C1 o Equivalente"], descripcion: "" },
  "Teaching and Learning English Secondary I": { requiere: ["English Language IV"], esRequisitoDe: ["Teaching and Learning English Secondary II"], descripcion: "" },

  "Language and Culture III (CPC)": { requiere: ["Language and Culture II (CPC)"], esRequisitoDe: ["Language and Culture IV (CPC)"], descripcion: "" },
  "Introduction to Literary Studies": { requiere: [], esRequisitoDe: ["Literature for Children (CPC)", "Literature for Teen Readers (CPC)"], descripcion: "" },
  "Teaching and Learning English Primary II": { requiere: ["Teaching and Learning English Primary I"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Básica"], descripcion: "" },
  "Electivo Formación General VI": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Electivo Formación General VII": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "Language and Culture IV (CPC)": { requiere: ["Language and Culture III (CPC)"], esRequisitoDe: ["English Spanish Contrasts (CPC)"], descripcion: "" },
  "Classroom Research": { requiere: [], esRequisitoDe: ["Seminar"], descripcion: "" },
  "Teaching and Learning English Secondary II": { requiere: ["Teaching and Learning English Secondary I"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Media"], descripcion: "" },
  "Práctica Pedagogía en Inglés IV": { requiere: ["Práctica Pedagogía en Inglés III"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Básica", "Práctica Profesional Pedagogía en Inglés Educación Media"], descripcion: "" },
  "Examen de Licenciatura en Educación": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Electivo Formación General VIII": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Examen de Inglés Nivel C1 o Equivalente": { requiere: ["Evaluación Inglés Nivel C1"], esRequisitoDe: [], descripcion: "" },

  "English Spanish Contrasts (CPC)": { requiere: ["Language and Culture IV (CPC)", "Applied Grammar II", "Applied Phonetics II"], esRequisitoDe: [], descripcion: "" },
  "Literature for Children (CPC)": { requiere: ["Introduction to Literary Studies"], esRequisitoDe: [], descripcion: "" },
  "Gestión y Liderazgo en el Aula": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Práctica Profesional Pedagogía en Inglés Educación Básica": { requiere: ["Práctica Pedagogía en Inglés IV", "Teaching and Learning English Primary II"], esRequisitoDe: [], descripcion: "" },

  "Literature for Teen Readers (CPC)": { requiere: ["Introduction to Literary Studies"], esRequisitoDe: [], descripcion: "" },
  "Seminar": { requiere: ["Classroom Research"], esRequisitoDe: [], descripcion: "" },
  "Práctica Profesional Pedagogía en Inglés Educación Media": { requiere: ["Práctica Pedagogía en Inglés IV", "Teaching and Learning English Secondary II"], esRequisitoDe: [], descripcion: "" },
  "Ética Profesional": { requiere: [], esRequisitoDe: [], descripcion: "" }
  
};

let habilitadosAntes = new Set();
let accionActual = null; 

function animarDesbloqueo(materia) {
  materia.classList.remove("desbloqueada-anim");
  void materia.offsetWidth; 
  materia.classList.add("desbloqueada-anim");

  setTimeout(() => {
    materia.classList.remove("desbloqueada-anim");
  }, 1200);
}

function crearMateria(nombre, id) {
  const d = document.createElement("div");
  d.className = "materia";
  d.dataset.id = id;

  if (estado[id]) {
    d.classList.add("aprobada");

  } else if (puede(nombre)) {
    d.classList.add("habilitada");

    if (
      accionActual === "aprobar" &&
      !habilitadosAntes.has(id)
    ) {
      requestAnimationFrame(() => animarDesbloqueo(d));
    }

  } else {
    d.classList.add("bloqueada");
  }

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

    if (estado[id]) {
      delete estado[id];
      accionActual = "desaprobar";
    } else {
      estado[id] = true;
      accionActual = "aprobar";
    }

    localStorage.setItem("estado_malla", JSON.stringify(estado));
    render();
    accionActual = null;
  };

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
    ${data.descripcion ? `
      <br><br>
      <strong>Descripción:</strong><br>
      ${data.descripcion}
    ` : ""}
  `;

  infoBtn.onclick = e => {
    e.stopPropagation();

    document.querySelectorAll(".info-menu.visible").forEach(m => {
      if (m !== menu) {
        m.classList.remove("visible", "izquierda");
        m.parentElement.classList.remove("info-abierta");
      }
    });

    menu.classList.toggle("visible");

    if (menu.classList.contains("visible")) {
      const rect = d.getBoundingClientRect();
      const espacioDerecha = window.innerWidth - rect.right;
      menu.classList.toggle("izquierda", espacioDerecha < 300);
    }

    d.classList.toggle("info-abierta", menu.classList.contains("visible"));
  };

  d.appendChild(infoBtn);
  d.appendChild(menu);

  return d;
}


function actualizarBarra() {
  const ramosExcluidos = [
    "Evaluación Inglés Nivel B2",
    "Evaluación Inglés Nivel C1",
    "Examen de Licenciatura en Educación",
    "Examen de Inglés Nivel C1 o Equivalente"
  ];

  let totalRamos = 0;
  let aprobados = 0;
  let creditosTotales = 0;
  let creditosAprobados = 0;

  estructura.forEach((anio, i) => {
    ["s1", "s2"].forEach(sem => {
      anio[sem].forEach((ramo, j) => {
        const id = `${i}-${sem}-${j}|${ramo}`;
        const esExcluido = ramosExcluidos.includes(ramo);

        if (infoRamos[ramo]) {
        
          creditosTotales += infoRamos[ramo].creditos;

          if (estado[id]) {
            creditosAprobados += infoRamos[ramo].creditos;
          }
        }

        if (!esExcluido) {
          totalRamos++;

          if (estado[id]) {
            aprobados++;
          }
        }
      });
    });
  });

  const p = Math.round((aprobados / totalRamos) * 100);

  document.querySelector(".barra-relleno").style.width = p + "%";
  document.querySelector(".progreso-texto").innerHTML =
    `Avance de Carrera: <strong>${p}%</strong>`;

  document.querySelector(".contador-ramos").textContent =
    `${aprobados}/${totalRamos} ramos`;

  document.querySelector(".contador-creditos").textContent =
    `${creditosAprobados}/${creditosTotales} cr`;
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

  const nuevosHabilitados = new Set();

  const sem1 = ["I", "III", "V", "VII", "IX"];
  const sem2 = ["II", "IV", "VI", "VIII", "X"];

  estructura.forEach((a, i) => {
    const col = document.createElement("div");
    col.className = "anio";
    col.innerHTML = `<h3 class="titulo-anio">${a.anio}</h3>`;

    col.querySelector(".titulo-anio").onclick = () => aprobarAnio(i);

    const sems = document.createElement("div");
    sems.className = "semestres";

    [["s1", sem1[i]], ["s2", sem2[i]]].forEach(([s, l]) => {
      const c = document.createElement("div");
      c.className = "semestre-col";
      c.innerHTML = `<h4 class="titulo-semestre">${l}</h4>`;
      c.querySelector(".titulo-semestre").onclick = () => aprobarSemestre(i, s);

      a[s].forEach((m, j) => {
        const id = `${i}-${s}-${j}|${m}`;
        if (puede(m) && !estado[id]) nuevosHabilitados.add(id);
        c.appendChild(crearMateria(m, id));
      });

      sems.appendChild(c);
    });

    col.appendChild(sems);
    cont.appendChild(col);
  });

  habilitadosAntes = nuevosHabilitados;
  actualizarBarra();
}

window.resetear = () => {
  localStorage.removeItem("estado_malla");
  estado = {};
  habilitadosAntes.clear();
  render();
};

render();
});
