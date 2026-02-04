document.addEventListener("DOMContentLoaded",()=>{

const prereq={
  "English Language II":["English Language I"],
  "English Language III":["English Language II"],
  "English Language IV":["English Language III"],
  "Applied Grammar II":["Applied Grammar I"],
  "Applied Phonetics II":["Applied Phonetics I"],
  "Language and Culture II":["Language and Culture I"],
  "Language and Culture III":["Language and Culture II"],
  "Language and Culture IV":["Language and Culture III"]
};

const estructura=[
 {anio:"Primer Año",
  s1:["English Language I","Applied Grammar I","Teoría de la Educación","Introduction to Teaching English (CPC)"],
  s2:["English Language II","Applied Grammar II","Ámbitos del Aprendizaje y el Desarrollo","Práctica Pedagogía en Inglés I","Electivo Formación General"]},
 {anio:"Segundo Año",
  s1:["English Language III","Applied Phonetics I","Educación y Sociedad","Electivo Formación General"],
  s2:["English Language IV","Applied Phonetics II","Evaluación para el Aprendizaje","Práctica Pedagogía en Inglés II","Electivo Formación General"]},
 {anio:"Tercer Año",
  s1:["Language and Culture I","Second Language Acquisition","Curriculum","Teaching and Learning English Primary I"],
  s2:["Language and Culture II","Diversidad e Inclusión en Educación","Teaching and Learning English Secondary I","Práctica Pedagogía en Inglés III","Electivo Formación General","Evaluación Inglés Nivel C1"]},
 {anio:"Cuarto Año",
  s1:["Language and Culture III","Introduction to Literary Studies","Teaching and Learning English Primary II","Electivo Formación General"],
  s2:["Language and Culture IV","Classroom Research","Teaching and Learning English Secondary II","Práctica Pedagogía en Inglés IV","Examen de Licenciatura en Educación","Examen de Inglés Nivel C1 o Equivalente","Electivo Formación General"]},
 {anio:"Quinto Año",
  s1:["English Spanish Contrasts (CPC)","Literature for Children (CPC)","Gestión y Liderazgo en el Aula","Práctica Profesional Pedagogía en Inglés Educación Básica"],
  s2:["Literature for Teen Readers (CPC)","Seminar","Práctica Profesional Pedagogía en Inglés Educación Media","Ética Profesional"]}
];

let estado=JSON.parse(localStorage.getItem("estado_malla"))||{};

const puede=n=>(prereq[n]||[]).every(r=>estado[r]==="aprobada");

function crearMateria(nombre,id){
  const d=document.createElement("div");
  d.className="materia";
  if(estado[id]==="aprobada") d.classList.add("aprobada");
  else if(puede(nombre)) d.classList.add("habilitada");
  d.textContent=nombre;
  d.onclick=()=>{
    if(!puede(nombre)) return;
    estado[id]?delete estado[id]:estado[id]="aprobada";
    localStorage.setItem("estado_malla",JSON.stringify(estado));
    render();
