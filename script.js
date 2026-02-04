document.addEventListener("DOMContentLoaded", () => {

const prereq = {
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
    "Práctica Pedagogía en Inglés IV",
    "Teaching and Learning English Primary II"
  ],

  "Práctica Profesional Pedagogía en Inglés Educación Media":[
    "Práctica Pedagogía en Inglés IV",
    "Teaching and Learning English Secondary II"
  ],

  "Evaluación Inglés Nivel C1":["Evaluación Inglés Nivel B2"],
  "Examen de Inglés Nivel C1 o Equivalente":["Evaluación Inglés Nivel C1"]
};

const estructura = [
{
  anio:"Primer Año",
  s1:[
    "English Language I",
    "Applied Grammar I",
    "Ámbitos del Aprendizaje y el desarrollo",
    "Teoría de la Educación",
    "Introduction to Teaching English (CPC)"
  ],
  s2:[
    "English Language II",
    "Applied Grammar II",
    "Aprendizaje y Desarrollo del Escolar",
    "Práctica Pedagogía en Inglés I",
    "Electivo Formación General",
    "Evaluación Inglés Nivel B2"
  ]
},
{
  anio:"Segundo Año",
  s1:[
    "English Language III",
    "Applied Phonetics I",
    "Applied Linguistics and Education",
    "Educación y Sociedad",
    "Electivo Formación General"
  ],
  s2:[
    "English Language IV",
    "Applied Phonetics II",
    "Evaluación para el Aprendizaje",
    "Práctica Pedagogía en Inglés II",
    "Electivo Formación General"
  ]
},
{
  anio:"Tercer Año",
  s1:[
    "Language and Culture I (CPC)",
    "Second Language Acquisition",
    "Curriculum",
    "Teaching and Learning English Primary I",
    "Electivo Formación General"
  ],
  s2:[
    "Language and Culture II (CPC)",
    "Diversidad e Inclusión en Educación",
    "Teaching and Learning English Secondary I",
    "Práctica Pedagogía en Inglés III",
    "Electivo Formación General",
    "Evaluación Inglés Nivel C1"
  ]
},
{
  anio:"Cuarto Año",
  s1:[
    "Language and Culture III (CPC)",
    "Introduction to Literary Studies",
    "Teaching and Learning English Primary II",
    "Electivo Formación General"
  ],
  s2:[
    "Language and Culture IV (CPC)",
    "Classroom Research Seminar",
    "Teaching and Learning English Secondary II",
    "Práctica Pedagogía en Inglés IV",
    "Examen de Licenciatura en Educación",
    "Electivo Formación General"
  ]
},
{
  anio:"Quinto Año",
  s1:[
    "English Spanish Contrasts (CPC)",
    "Literature for Children (CPC)",
    "Gestión y Liderazgo en el Aula",
    "Práctica Profesional Pedagogía en Inglés Educación Básica"
  ],
  s2:[
    "Literature for Teen Readers (CPC)",
    "Seminar",
    "Práctica Profesional Pedagogía en Inglés Educación Media",
    "Ética Profesional"
  ]
}
];

let estado = JSON.parse(localStorage.getItem("estado_malla")) || {};

function aprobado(nombre){
  return Object.keys(estado).some(id => id.endsWith("|"+nombre));
}

function puede(nombre){
  return (prereq[nombre] || []).every(r => aprobado(r));
}

function crearMateria(nombre, id){
  const d = document.createElement("div");
  d.className = "materia";

  if (estado[id]) d.classList.add("aprobada");
  else if (puede(nombre)) d.classList.add("habilitada");

  d.textContent = nombre;

  d.onclick = () => {
    if (!puede(nombre)) return;
    estado[id] ? delete estado[id] : estado[id] = true;
    localStorage.setItem("estado_malla", JSON.stringify(estado));
    render();
  };

  return d;
}

function render(){
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  const sem1 = ["I","III","V","VII","IX"];
  const sem2 = ["II","IV","VI","VIII","X"];

  estructura.forEach((a,i)=>{
    const col = document.createElement("div");
    col.className = "anio";
    col.innerHTML = `<h3>${a.anio}</h3>`;

    const sems = document.createElement("div");
    sems.className = "semestres";

    const c1 = document.createElement("div");
    c1.className = "semestre-col";
    c1.innerHTML = `<h4>${sem1[i]}</h4>`;
    a.s1.forEach((m,j)=>c1.appendChild(crearMateria(m,`${i}-1-${j}|${m}`)));

    const c2 = document.createElement("div");
    c2.className = "semestre-col";
    c2.innerHTML = `<h4>${sem2[i]}</h4>`;
    a.s2.forEach((m,j)=>c2.appendChild(crearMateria(m,`${i}-2-${j}|${m}`)));

    sems.append(c1,c2);
    col.appendChild(sems);
    cont.appendChild(col);
  });
}

window.resetear = () => {
  localStorage.removeItem("estado_malla");
  estado = {};
  render();
};

render();
});
