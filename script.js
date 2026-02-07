document.addEventListener("DOMContentLoaded", () => {

/* ================== CERRAR MENÚS INFO ================== */

document.addEventListener("click", () => {
  document.querySelectorAll(".info-menu.visible").forEach(menu => {
    menu.classList.remove("visible");
    menu.parentElement.classList.remove("info-abierta");
  });
});

/* ================== PRERREQUISITOS ================== */

const prereq = {
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
  "English Spanish Contrasts (CPC)":[
    "Language and Culture IV (CPC)","Applied Grammar II","Applied Phonetics II"],
  "Literature for Children (CPC)":["Introduction to Literary Studies"],
  "Literature for Teen Readers (CPC)":["Introduction to Literary Studies"],
  "Seminar":["Classroom Research"]
};

/* ================== INFO RAMOS ================== */

const infoRamos = {
  "English Language I": { sigla:"LET0301", creditos:12 },
  "Applied Grammar I": { sigla:"LET1331", creditos:10 },
  "Ámbitos del Aprendizaje y el Desarrollo": { sigla:"EDU0511", creditos:10 },
  "Teoría de la Educación": { sigla:"EDU0311", creditos:10 },
  "Introduction to Teaching English (CPC)": { sigla:"EIN1001", creditos:10 },

  "English Language II": { sigla:"LET0302", creditos:12 },
  "Applied Grammar II": { sigla:"LET1332", creditos:10 },
  "Aprendizaje y Desarrollo del Escolar": { sigla:"EDU0315", creditos:10 },
  "Práctica Pedagogía en Inglés I": { sigla:"EDU0500", creditos:10 },
  "Evaluación Inglés Nivel B2": { sigla:"—", creditos:0 },
  "Electivo Formación General": { sigla:"—", creditos:10 },

  "English Language III": { sigla:"LET1313", creditos:10 },
  "Applied Phonetics I": { sigla:"LET2311", creditos:10 },
  "Applied Linguistics and Education": { sigla:"LET2313", creditos:10 },
  "Educación y Sociedad": { sigla:"EDU0165", creditos:10 },

  "English Language IV": { sigla:"LET1314", creditos:10 },
  "Applied Phonetics II": { sigla:"LET2312", creditos:10 },
  "Evaluación para el Aprendizaje": { sigla:"EDU0512", creditos:10 },
  "Práctica Pedagogía en Inglés II": { sigla:"EDU0501", creditos:10 },

  "Language and Culture I (CPC)": { sigla:"EIN1002", creditos:10 },
  "Second Language Acquisition": { sigla:"LET2315", creditos:10 },
  "Curriculum": { sigla:"EDU0162", creditos:10 },
  "Teaching and Learning English Primary I": { sigla:"EDU0506", creditos:10 },

  "Language and Culture II (CPC)": { sigla:"EIN1003", creditos:10 },
  "Diversidad e Inclusión en Educación": { sigla:"EDU0317", creditos:10 },
  "Teaching and Learning English Secondary I": { sigla:"EDU0508", creditos:10 },
  "Práctica Pedagogía en Inglés III": { sigla:"EDU0502", creditos:10 },
  "Evaluación Inglés Nivel C1": { sigla:"—", creditos:0 },

  "Language and Culture III (CPC)": { sigla:"EIN1004", creditos:10 },
  "Introduction to Literary Studies": { sigla:"LET1341", creditos:10 },
  "Teaching and Learning English Primary II": { sigla:"EDU0507", creditos:10 },

  "Language and Culture IV (CPC)": { sigla:"EIN1005", creditos:10 },
  "Classroom Research": { sigla:"EIN1006", creditos:10 },
  "Teaching and Learning English Secondary II": { sigla:"EDU0509", creditos:10 },
  "Práctica Pedagogía en Inglés IV": { sigla:"EDU0503", creditos:10 },
  "Examen de Licenciatura en Educación": { sigla:"EDU0510", creditos:0 },
  "Examen de Inglés Nivel C1 o Equivalente": { sigla:"—", creditos:0 },

  "English Spanish Contrasts (CPC)": { sigla:"EIN1007", creditos:10 },
  "Literature for Children (CPC)": { sigla:"EIN1008", creditos:10 },
  "Gestión y Liderazgo en el Aula": { sigla:"EDU0316", creditos:10 },
  "Práctica Profesional Pedagogía en Inglés Educación Básica": { sigla:"EDU0504", creditos:20 },

  "Literature for Teen Readers (CPC)": { sigla:"EIN1009", creditos:10 },
  "Seminar": { sigla:"EIN1010", creditos:10 },
  "Práctica Profesional Pedagogía en Inglés Educación Media": { sigla:"EDU0505", creditos:20 },
  "Ética Profesional": { sigla:"EDU0166", creditos:10 }
};

/* ================== ESTRUCTURA ================== */

const estructura = [
  { anio:"Primer Año",
    s1:["English Language I","Applied Grammar I","Ámbitos del Aprendizaje y el Desarrollo","Teoría de la Educación","Introduction to Teaching English (CPC)"],
    s2:["English Language II","Applied Grammar II","Aprendizaje y Desarrollo del Escolar","Práctica Pedagogía en Inglés I","Electivo Formación General","Evaluación Inglés Nivel B2"]
  },
  { anio:"Segundo Año",
    s1:["English Language III","Applied Phonetics I","Applied Linguistics and Education","Educación y Sociedad","Electivo Formación General"],
    s2:["English Language IV","Applied Phonetics II","Evaluación para el Aprendizaje","Práctica Pedagogía en Inglés II","Electivo Formación General"]
  },
  { anio:"Tercer Año",
    s1:["Language and Culture I (CPC)","Second Language Acquisition","Curriculum","Teaching and Learning English Primary I","Electivo Formación General"],
    s2:["Language and Culture II (CPC)","Diversidad e Inclusión en Educación","Teaching and Learning English Secondary I","Práctica Pedagogía en Inglés III","Electivo Formación General","Evaluación Inglés Nivel C1"]
  },
  { anio:"Cuarto Año",
    s1:["Language and Culture III (CPC)","Introduction to Literary Studies","Teaching and Learning English Primary II","Electivo Formación General","Electivo Formación General"],
    s2:["Language and Culture IV (CPC)","Classroom Research","Teaching and Learning English Secondary II","Práctica Pedagogía en Inglés IV","Examen de Licenciatura en Educación","Electivo Formación General","Examen de Inglés Nivel C1 o Equivalente"]
  },
  { anio:"Quinto Año",
    s1:["English Spanish Contrasts (CPC)","Literature for Children (CPC)","Gestión y Liderazgo en el Aula","Práctica Profesional Pedagogía en Inglés Educación Básica"],
    s2:["Literature for Teen Readers (CPC)","Seminar","Práctica Profesional Pedagogía en Inglés Educación Media","Ética Profesional"]
  }
];

/* ================== ESTADO ================== */

let estado = JSON.parse(localStorage.getItem("estado_malla")) || {};
let habilitadosAntes = new Set();
let accionActual = null;

const aprobado = n => Object.keys(estado).some(id => id.endsWith("|" + n));
const puede = n => (prereq[n] || []).every(r => aprobado(r));

/* ================== ANIMACIÓN DESBLOQUEO ================== */

function animarDesbloqueo(m) {
  m.classList.remove("desbloqueada-anim");
  void m.offsetWidth;
  m.classList.add("desbloqueada-anim");
  setTimeout(() => m.classList.remove("desbloqueada-anim"), 1200);
}

/* ================== CREAR MATERIA ================== */

function crearMateria(nombre, id) {
  const d = document.createElement("div");
  d.className = "materia";
  d.dataset.id = id;

  if (estado[id]) d.classList.add("aprobada");
  else if (puede(nombre)) {
    d.classList.add("habilitada");
    if (accionActual === "aprobar" && !habilitadosAntes.has(id)) {
      requestAnimationFrame(() => animarDesbloqueo(d));
    }
  } else d.classList.add("bloqueada");

  const info = infoRamos[nombre] || { sigla:"—", creditos:0 };

  d.innerHTML = `
    <div class="materia-header">
      <span class="materia-nombre">${nombre}</span>
      <span class="materia-sigla">${info.sigla}</span>
    </div>
    <div class="materia-creditos">${info.creditos} cr.</div>
  `;

  d.onclick = () => {
    if (!puede(nombre) && !estado[id]) return;
    estado[id] ? delete estado[id] : estado[id] = true;
    accionActual = estado[id] ? "aprobar" : "desaprobar";
    localStorage.setItem("estado_malla", JSON.stringify(estado));
    render();
    accionActual = null;
  };

  const infoBtn = document.createElement("span");
  infoBtn.className = "info-btn";
  infoBtn.textContent = "ⓘ";

  const menu = document.createElement("div");
  menu.className = "info-menu";

  const data = infoRequisitos[nombre] || { requiere:[], esRequisitoDe:[] };

  menu.innerHTML = `
    <strong>Requiere:</strong><br>
    ${data.requiere.length ? data.requiere.join("<br>") : "—"}
    <br><br>
    <strong>Es requisito de:</strong><br>
    ${data.esRequisitoDe.length ? data.esRequisitoDe.join("<br>") : "—"}
    ${data.descripcion ? `<br><br><strong>Descripción:</strong><br>${data.descripcion}` : ""}
  `;

  infoBtn.onclick = e => {
    e.stopPropagation();
    document.querySelectorAll(".info-menu.visible").forEach(m => {
      if (m !== menu) {
        m.classList.remove("visible","izquierda");
        m.parentElement.classList.remove("info-abierta");
      }
    });
    menu.classList.toggle("visible");
    if (menu.classList.contains("visible")) {
      const rect = d.getBoundingClientRect();
      menu.classList.toggle("izquierda", window.innerWidth - rect.right < 300);
    }
    d.classList.toggle("info-abierta", menu.classList.contains("visible"));
  };

  d.append(infoBtn, menu);
  return d;
}

/* ================== BARRA DE PROGRESO ================== */

function actualizarBarra() {
  const excluidos = [
    "Evaluación Inglés Nivel B2",
    "Evaluación Inglés Nivel C1",
    "Examen de Licenciatura en Educación",
    "Examen de Inglés Nivel C1 o Equivalente"
  ];

  let totalRamos = 0, aprobados = 0, creditosTotales = 0, creditosAprobados = 0;

  estructura.forEach((a,i) => {
    ["s1","s2"].forEach(s => {
      a[s].forEach((r,j) => {
        const id = `${i}-${s}-${j}|${r}`;
        const excluido = excluidos.includes(r);

        if (infoRamos[r]) {
          creditosTotales += infoRamos[r].creditos;
          if (estado[id]) creditosAprobados += infoRamos[r].creditos;
        }

        if (!excluido) {
          totalRamos++;
          if (estado[id]) aprobados++;
        }
      });
    });
  });

  const p = Math.round((aprobados / totalRamos) * 100);
  document.querySelector(".barra-relleno").style.width = p + "%";
  document.querySelector(".progreso-texto").innerHTML = `Avance de Carrera: <strong>${p}%</strong>`;
  document.querySelector(".contador-ramos").textContent = `${aprobados}/${totalRamos} ramos`;
  document.querySelector(".contador-creditos").textContent = `${creditosAprobados}/${creditosTotales} cr`;
}

/* ================== APROBAR ================== */

function aprobarSemestre(i,s){
  const r = estructura[i][s];
  const all = r.every((n,j)=>estado[`${i}-${s}-${j}|${n}`]);
  r.forEach((n,j)=> all ? delete estado[`${i}-${s}-${j}|${n}`] : estado[`${i}-${s}-${j}|${n}`]=true);
  localStorage.setItem("estado_malla",JSON.stringify(estado));
  render();
}

function aprobarAnio(i){
  const s1 = estructura[i].s1, s2 = estructura[i].s2;
  const r = [...s1,...s2];
  const all = r.every((n,k)=>{
    const s = k < s1.length ? "s1":"s2";
    const j = k < s1.length ? k : k-s1.length;
    return estado[`${i}-${s}-${j}|${n}`];
  });
  r.forEach((n,k)=>{
    const s = k < s1.length ? "s1":"s2";
    const j = k < s1.length ? k : k-s1.length;
    all ? delete estado[`${i}-${s}-${j}|${n}`] : estado[`${i}-${s}-${j}|${n}`]=true;
  });
  localStorage.setItem("estado_malla",JSON.stringify(estado));
  render();
}

/* ================== RENDER ================== */

function render(){
  const cont = document.getElementById("malla");
  cont.innerHTML = "";
  const nuevos = new Set();

  const sem1 = ["I","III","V","VII","IX"];
  const sem2 = ["II","IV","VI","VIII","X"];

  estructura.forEach((a,i)=>{
    const col = document.createElement("div");
    col.className="anio";
    col.innerHTML=`<h3 class="titulo-anio">${a.anio}</h3>`;
    col.querySelector(".titulo-anio").onclick=()=>aprobarAnio(i);

    const sems = document.createElement("div");
    sems.className="semestres";

    [["s1",sem1[i]],["s2",sem2[i]]].forEach(([s,l])=>{
      const c = document.createElement("div");
      c.className="semestre-col";
      c.innerHTML=`<h4 class="titulo-semestre">${l}</h4>`;
      c.querySelector(".titulo-semestre").onclick=()=>aprobarSemestre(i,s);

      a[s].forEach((m,j)=>{
        const id = `${i}-${s}-${j}|${m}`;
        if (puede(m) && !estado[id]) nuevos.add(id);
        c.appendChild(crearMateria(m,id));
      });

      sems.appendChild(c);
    });

    col.appendChild(sems);
    cont.appendChild(col);
  });

  habilitadosAntes = nuevos;
  actualizarBarra();
}

/* ================== RESET ================== */

window.resetear = () => {
  localStorage.removeItem("estado_malla");
  estado = {};
  habilitadosAntes.clear();
  render();
};

render();
});
