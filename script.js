const prereq = {
 "English Language II":["English Language I"],
 "English Language III":["English Language II"],
 "English Language IV":["English Language III"],
 "Applied Grammar II":["Applied Grammar I"],
 "Applied Phonetics II":["Applied Phonetics I"],
 "Language and Culture II":["Language and Culture I"],
 "Language and Culture III":["Language and Culture II"],
 "Language and Culture IV":["Language and Culture III"]
};

const estructura = [
 {anio:"Primer Año", s1:["English Language I","Applied Grammar I","Teoría de la Educación","Introduction to Teaching English (CPC)"],
                       s2:["English Language II","Applied Grammar II","Ámbitos del Aprendizaje y el Desarrollo","Práctica Pedagogía en Inglés I"]},
 {anio:"Segundo Año", s1:["English Language III","Applied Phonetics I","Educación y Sociedad","Electivo Formación General"],
                       s2:["English Language IV","Applied Phonetics II","Evaluación para el Aprendizaje","Práctica Pedagogía en Inglés II","Electivo Formación General"]},
 {anio:"Tercer Año", s1:["Language and Culture I","Second Language Acquisition","Curriculum","Teaching and Learning English Primary I"],
                      s2:["Language and Culture II","Diversidad e Inclusión en Educación","Teaching and Learning English Secondary I","Práctica Pedagogía en Inglés III","Electivo Formación General","Evaluación Inglés Nivel C1"]},
 {anio:"Cuarto Año", s1:["Language and Culture III","Introduction to Literary Studies","Teaching and Learning English Primary II","Electivo Formación General","Electivo Formación General"],
                      s2:["Language and Culture IV","Classroom Research","Teaching and Learning English Secondary II","Práctica Pedagogía en Inglés IV","Examen de licenciatura en educación","Examen de Ingles Nivel C1 o Equivalente","Electivo Formación General"]},
 {anio:"Quinto Año", s1:["English Spanish Contrasts (CPC)","Literature for Children (COC)","Gestión y Liderazgo en el Aula","Práctica Profesional Pedagogía en Inglés Educación Básica"],
                      s2:["Literature for teen readers (CPC)","Seminar","Práctica Profesional Pedagogía en Inglés Educación Media","Ética Profesional"]}
];

let estado=JSON.parse(localStorage.getItem("estado_malla"))||{};

function puede(m){return (prereq[m]||[]).every(x=>estado[x]==="aprobada")}

function crear(m){
 const d=document.createElement("div");
 d.className="materia";
 if(estado[m]==="aprobada")d.classList.add("aprobada");
 else if(puede(m))d.classList.add("habilitada");
 d.textContent=m;
 d.onclick=()=>{
  if(!puede(m))return;
  if(estado[m]==="aprobada")delete estado[m];
  else estado[m]="aprobada";
  localStorage.setItem("estado_malla",JSON.stringify(estado));
  render();
 };
 return d;
}

function render(){
 const cont=document.getElementById("malla");
 cont.innerHTML="";
 estructura.forEach(a=>{
  const col=document.createElement("div");
  col.className="anio";
  col.innerHTML=`<h3>${a.anio}</h3>`;
  const sems=document.createElement("div");
  sems.className="semestres";

  const c1=document.createElement("div");
  c1.className="semestre-col";
  c1.innerHTML="<h4>"+["I","III","V","VII","IX"][estructura.indexOf(a)]+"</h4>";
  a.s1.forEach(m=>c1.appendChild(crear(m)));

  const c2=document.createElement("div");
  c2.className="semestre-col";
  c2.innerHTML="<h4>"+["II","IV","VI","VIII","X"][estructura.indexOf(a)]+"</h4>";
  a.s2.forEach(m=>c2.appendChild(crear(m)));

  sems.appendChild(c1);sems.appendChild(c2);
  col.appendChild(sems);cont.appendChild(col);
 });
}

function resetear(){
 localStorage.removeItem("estado_malla");
 estado={};render();
}
render();
</script>
