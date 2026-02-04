document.addEventListener("DOMContentLoaded", () => {

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
    {
      anio:"Primer Año",
      s1:["English Language I","Applied Grammar I","Teoría de la Educación","Introduction to Teaching English (CPC)"],
      s2:["English Language II","Applied Grammar II","Ámbitos del Aprendizaje y el Desarrollo","Práctica Pedagogía en Inglés I"]
    },
    {
      anio:"Segundo Año",
      s1:["English Language III","Applied Phonetics I","Educación y Sociedad","Electivo Formación General"],
      s2:["English Language IV","Applied Phonetics II","Evaluación para el Aprendizaje","Práctica Pedagogía en Inglés II","Electivo Formación General"]
    },
    {
      anio:"Tercer Año",
      s1:["Language and Culture I","Second Language Acquisition","Curriculum","Teaching and Learning English Primary I"],
      s2:["Language and Culture II","Diversidad e Inclusión en Educación","Teaching and Learning English Secondary I","Práctica Pedagogía en Inglés III","Electivo Formación General","Evaluación Inglés Nivel C1"]
    },
    {
      anio:"Cuarto Año",
      s1:["Language and Culture III","Introduction to Literary Studies","Teaching and Learning English Primary II","Electivo Formación General"],
      s2:["Language and Culture IV","Classroom Research","Teaching and Learning English Secondary II","Práctica Pedagogía en Inglés IV","Examen de Licenciatura en Educación","Examen de Inglés Nivel C1 o Equivalente","Electivo Formación General"]
    },
    {
      anio:"Quinto Año",
      s1:["English Spanish Contrasts (CPC)","Literature for Children (CPC)","Gestión y Liderazgo en el Aula","Práctica Profesional Pedagogía en Inglés Educación Básica"],
      s2:["Literature for Teen Readers (CPC)","Seminar","Práctica Profesional Pedagogía en Inglés Educación Media","Ética Profesional"]
    }
  ];

  let estado = JSON.parse(localStorage.getItem("estado_malla")) || {};

  function puede(m){
    return (prereq[m] || []).every(r => estado[r] === "aprobada");
  }

  function crearMateria(nombre){
    const d = document.createElement("div");
    d.className = "materia";
    if (estado[nombre] === "aprobada") d.classList.add("aprobada");
    else if (puede(nombre)) d.classList.add("habilitada");

    d.textContent = nombre;
    d.onclick = () => {
      if (!puede(nombre)) return;
      if (estado[nombre]) delete estado[nombre];
      else estado[nombre] = "aprobada";
      localStorage.setItem("estado_malla", JSON.stringify(estado));
      render();
    };
    return d;
  }

  function actualizarBarra(){
    const totalRamos = estructura.reduce(
      (acc,a) => acc + a.s1.length + a.s2.length, 0
    );

    const aprobados = Object.values(estado)
      .filter(v => v === "aprobada").length;

    const porcentaje = Math.round((aprobados / totalRamos) * 100);

    const barra = document.querySelector(".barra-relleno");
    const texto = document.querySelector(".progreso-texto");

    if(barra) barra.style.width = porcentaje + "%";
    if(texto) texto.innerHTML =
      `Avance de Carrera: <strong>${porcentaje}%</strong> (${aprobados * 5} Cr.)`;
  }

  function render(){
    const cont = document.getElementById("malla");
    cont.innerHTML = "";

    const sem1 = ["I","III","V","VII","IX"];
    const sem2 = ["II","IV","VI","VIII","X"];

    estructura.forEach((a,i) => {
      const col = document.createElement("div");
      col.className = "anio";
      col.innerHTML = `<h3>${a.anio}</h3>`;

      const sems = document.createElement("div");
      sems.className = "semestres";

      const c1 = document.createElement("div");
      c1.className = "semestre-col";
      c1.innerHTML = `<h4>${sem1[i]}</h4>`;
      a.s1.forEach(m => c1.appendChild(crearMateria(m)));

      const c2 = document.createElement("div");
      c2.className = "semestre-col";
      c2.innerHTML = `<h4>${sem2[i]}</h4>`;
      a.s2.forEach(m => c2.appendChild(crearMateria(m)));

      sems.appendChild(c1);
      sems.appendChild(c2);
      col.appendChild(sems);
      cont.appendChild(col);
    });

    actualizarBarra();
  }

  window.resetear = function(){
    localStorage.removeItem("estado_malla");
    estado = {};
    render();
  };

  render();
});
