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
  "Applied Grammar II": { requiere: ["Applied Grammar I"], esRequisitoDe: ["English Spanish Contrasts (CPC)"], descripcion: "El curso de Gramática Aplicada II está orientado a que el estudiantado desarrolle de manera progresiva las habilidades lingüísticas relativas al manejo funcional y estructural de las categorías gramaticales correspondientes al aprendizaje de una lengua extranjera en un nivel intermedio superior. El estudiantado podrá reconocer y analizar oraciones de distinta extensión y nivel de complejidad en términos de estructura y funcionalidad de sus diversos componentes." },
  "Aprendizaje y Desarrollo del Escolar": { requiere: [], esRequisitoDe: [], descripcion: "El curso ofrece la oportunidad de analizar, desde la perspectiva de la Sicología Educativa, los aspectos fundamentales del desarrollo y el aprendizaje de los niños de los niveles Transición y Básico I, Básico II, Quinto Básico y Sexto Básico, las distintas áreas que abarca, su evolución e interacción a través de la edad, los factores que influyen en estos procesos y los principios pedagógicos que permiten orientarlos de una manera efectiva. Se abordarán los procesos de aprendizaje en los diferentes dominios disciplinares. Es un propósito central de este curso proveer a los estudiantes de los conocimientos, habilidades y actitudes relevantes que les permitan ser competentes para abordar los desafíos de la educación de hoy, en particular los relativos al trabajo de aula." },
  "Práctica Pedagogía en Inglés I": { requiere: ["Ámbitos del Aprendizaje y el Desarrollo"], esRequisitoDe: ["Práctica Pedagogía en Inglés II"], descripcion: "En esta práctica, la primera de la formación, los estudiantes participan de las actividades de un establecimiento educativo durante un semestre. Es una primera aproximación al rol docente, articulado con el curso de Aprendizaje y Desarrollo del Escolar, donde los estudiantes desarrollan una visión comprensiva de la institución, del aula y la diversidad de sus alumnos. Los estudiantes trabajan las prácticas generativas de elicitar el pensamiento del estudiante, reconocer patrones comunes del pensamiento en un dominio de contenidos específico, y analizar la práctica con el propósito de mejorarla. El curso se evalúa a través de registros de observación y su análisis, informes y un instrumento de actitud profesional." },
  "Electivo Formación General I": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Evaluación Inglés Nivel B2": { requiere: [], esRequisitoDe: ["Evaluación Inglés Nivel C1"], descripcion: "" },

  "English Language III": { requiere: ["English Language II"], esRequisitoDe: ["English Language IV"], descripcion: "Lengua Inglesa III tiene como objetivo mejorar las cuatro habilidades relacionadas con el aprendizaje del inglés como lengua extranjera a un nivel avanzado. Este curso se construye sobre la competencia desarrollada en los niveles anteriores, consolidando los conocimientos adquiridos y ampliando el abanico de temas, aspectos lexicogramaticales, fono-fonológicos, textual-discursivos, funcionales y pragmáticos del idioma inglés para que los estudiantes se conviertan en usuarios competentes." },
  "Applied Phonetics I": { requiere: ["English Language II"], esRequisitoDe: ["Applied Phonetics II"], descripcion: "Theoretical and practical course aiming to develop oral proficiency in the production of English speech. It will focus on articulatory phonetics and the classification of sounds in English. It will explain how English is pronounced in the context of a general theory about speech sounds and how they are organized in the English Language. This course is tackled through practical procedural and implementation issues related to pronunciation teaching: teaching approaches and classroom techniques/activities. Applied Phonetics I is designed to allow students to explore these areas as the basis for Applied Phonetics II." },
  "Applied Linguistics and Education": { requiere: [], esRequisitoDe: [], descripcion: "The purpose of this course is to explore basic theories of linguistics and their application to classroom practice, emphasizing how the knowledge of the way languages work will directly benefit the teaching of English Language Learners. The course provides an overview of linguistic, sociolinguistic and psycholinguistic analyses that inform decisions in the classroom in the areas of language acquisition, language comprehension and production and language planning among others." },
  "Educación y Sociedad": { requiere: [], esRequisitoDe: [], descripcion: "El presente curso tiene como propósito contribuir a la formación profesional de profesores de enseñanza media en competencias relativas al entendimiento y práctica de la dimensión social de la acción educativa en la institución escolar. El curso aporta herramientas conceptuales y analíticas para que los estudiantes comprendan la educación como una construcción social, situada en estructuras y marcos institucionales, y en las prácticas de los actores educativos." },
  "Electivo Formación General II": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "English Language IV": { requiere: ["English Language III"], esRequisitoDe: ["Language and Culture I (CPC)", "Teaching and Learning English Primary I", "Teaching and Learning English Secondary I"], descripcion: "Lengua Inglesa IV tiene como objetivo fortalecer el desarrollo de las cuatro habilidades correspondientes al aprendizaje del inglés como lengua extranjera a un nivel avanzado. Este curso se construye sobre la competencia desarrollada en los niveles anteriores, consolidando los conocimientos adquiridos y ampliando el abanico de temas, aspectos lexicogramaticales, fono-fonológicos, textual-discursivos, funcionales y pragmáticos del idioma inglés para que los estudiantes consoliden su nivel como usuarios competentes." },
  "Applied Phonetics II": { requiere: ["Applied Phonetics I"], esRequisitoDe: ["English Spanish Contrasts (CPC)"], descripcion: "This course is a follow-up to the second-year pronunciation course (Applied Phonetics I); it aims at providing advanced training in pronunciation skills as well as an advanced understanding of the core principles and topics of English phonetics and phonology at the suprasegmental level. Special attention is paid to oral performance, hand in hand with theoretical knowledge of the prosodic hierarchy, so as to achieve a highly advanced level of oral production in terms of those prosodic features that accompany the segmental features of the English language." },
  "Evaluación para el Aprendizaje": { requiere: [], esRequisitoDe: [], descripcion: "Este curso tiene como propósito desarrollar en el futuro profesor conocimientos y habilidades para comprender y desarrollar procesos de evaluación de y para los aprendizajes en enseñanza básica y media, a nivel de aula y del establecimiento educacional, así como su responsabilidad ética con los estudiantes en las instancias de evaluación, calificación y comunicación de resultados. A través de análisis de casos, simulaciones, discusiones y producción de material evaluativo, el profesor en formación adquirirá una conceptualización del significado de la evaluación educacional y las herramientas para diseñar estrategias evaluativas contextualizadas a la realidad de los estudiantes y coherentes con los diferentes tipos de aprendizajes. Además, aprenderá a utilizar instrumentos de evaluación pertinentes y variados para recoger evidencia, analizar la información para emitir juicios respecto del logro de los aprendizajes y orientar decisiones pedagógicas para la mejora de procesos de enseñanza y aprendizaje." },
  "Práctica Pedagogía en Inglés II": { requiere: ["Práctica Pedagogía en Inglés I"], esRequisitoDe: ["Práctica Pedagogía en Inglés III"], descripcion: "Curso de práctica con foco en que los(as) estudiantes recojan y analicen evidencias de aprendizaje de los(as) alumnos(as) en contenidos específicos de la asignatura de inglés. Analizan el contexto institucional, el aula y el desempeño de los estudiantes para poder ajustar su enseñanza y orientar la toma de decisiones para el diseño, conducción y evaluación de un segmento de clases y luego una clase completa en el aula. Los estudiantes explican contenidos usando modelos y ejemplos apropiados, proponen tareas y evalúan, eligen y adaptan recursos para el logro de metas específicas de aprendizaje. Los objetivos se evalúan a través de informes, planificaciones, videos de clases y un instrumento para evaluar la actitud profesional." },
  "Electivo Formación General III": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "Language and Culture I (CPC)": { requiere: ["English Language IV"], esRequisitoDe: ["Language and Culture II (CPC)"], descripcion: "This course attempts to consolidate students’ communicative competence in English at an advanced level acquired in previous courses. It provides opportunities for the reconceptualization of their knowledge of English understood as the specific language skills teachers need for teaching. Additionally, the course focuses on developing linguistic and cultural awareness of Spanish speaking communities, so as to establish comparisons with the target language to be used in the classroom, promoting intercultural communication." },
  "Second Language Acquisition": { requiere: [], esRequisitoDe: [], descripcion: "This course focuses on theories and approaches in Second Language Acquisition (SLA) that inform language teaching in the classroom. The students will explore how first and second languages are acquired during childhood, adolescence and adulthood, focusing on the factors that influence their development such as individual differences, as well as the discussion of key concepts such as interlanguage, error correction, bilingualism and the role of cognition and social interaction." },
  "Curriculum": { requiere: [], esRequisitoDe: [], descripcion: "El curso aborda elementos conceptuales básicos referidos a currículum con la finalidad de promover la apropiación, por parte de los estudiantes, de categorías para el análisis del currículum nacional vigente, en sus aspectos generales y en la especificidad propia del nivel secundario y de las diversas disciplinas escolares. También se propone que los futuros docentes conozcan y reflexionen sobre los tipos y niveles de intervenciones curriculares que les competerán en su quehacer profesional." },
  "Teaching and Learning English Primary I": { requiere: ["English Language IV"], esRequisitoDe: ["Teaching and Learning English Primary II", "Práctica Pedagogía en Inglés III"], descripcion: "This course aims at providing students with the theoretical and practical aspects of Teaching English to Young Learners (TEYL) with a focus on developing oral skills during the first levels of primary school (1st to 4th grades). More specifically, the course addresses issues related to theories of learning, the learning strategies of young children, the design of teaching-learning activities, the classroom methods and techniques to be used when teaching English to young learners. There is also a special focus on establishing norms and routines for classroom discourse." },
  "Electivo Formación General IV": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "Language and Culture II (CPC)": { requiere: ["Language and Culture I (CPC)"], esRequisitoDe: ["Language and Culture III (CPC)"], descripcion: "This course attempts to strengthen students’ communicative competence in English at an advanced level. Its main purpose is to provide opportunities to reconceptualize the linguistic knowledge acquired in previous courses into English for Teaching and developing specific language skills teachers need for teaching. Additionally, this course focuses on the history of the English language along the key historical moments that marked its development to become modern English. It offers an overview of its most relevant linguistic variations in order to enrich students’ knowledge about the target language." },
  "Diversidad e Inclusión en Educación": { requiere: [], esRequisitoDe: [], descripcion: "El curso, de carácter teórico-práctico, se centra en la formación de un profesional de la educación que diseñe e implemente contextos pedagógicos que faciliten el aprendizaje de todos los estudiantes, considerando su heterogeneidad en cuanto a cultura, etnia, género y discapacidad, así como la intersección de estos aspectos. Del mismo modo, ofrece al estudiante un espacio de análisis crítico de los supuestos culturales adscritos a la diversidad." },
  "Práctica Pedagogía en Inglés III": { requiere: ["Práctica Pedagogía en Inglés II", "Teaching and Learning English Primary I"], esRequisitoDe: ["Práctica Pedagogía en Inglés IV"], descripcion: "Curso de práctica cuyo fin es que los(as) estudiantes puedan aproximarse directamente a la experiencia de enseñar en Educación Básica, en un centro educativo en 5° o 6° básico. Analizan el contexto de aula y a los alumnos, para así ajustar su enseñanza a las características del contexto, y orientar la toma de decisiones para el diseño, conducción y evaluación de al menos dos unidades didácticas. Desarrollan habilidades para la gestión de un ambiente apropiado para el aprendizaje de todos. Además en sus clases trabajan la explicitación del contenido, el guiar discusiones productivas la evaluación y la comunicación con padres y/o apoderados. Los objetivos se evalúan a través de informes, planificaciones, videos de clases, bitácoras y un instrumento para evaluar la actitud profesional." },
  "Electivo Formación General V": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Evaluación Inglés Nivel C1": { requiere: ["Evaluación Inglés Nivel B2"], esRequisitoDe: ["Examen de Inglés Nivel C1 o Equivalente"], descripcion: "" },
  "Teaching and Learning English Secondary I": { requiere: ["English Language IV"], esRequisitoDe: ["Teaching and Learning English Secondary II"], descripcion: "This course focuses on facilitating the transformation process of the disciplinary knowledge of English as a Foreign Language (EFL) into teaching competences in the future teacher. Based on the knowledge on current national policies, understanding of the different teaching approaches and educational communication, the course fosters the development of competences in the future teacher being able to design, implement and develop teaching-learning instances with the aid of technological resources. In addition, there are instances to promote a creative attitude by reflecting on the teaching process that derives from in-class observation. This is expected to lead to contextualised teaching-learning situations and focus on communication in order to support students’ progress. Bearing this ultimate purpose in mind, the pre-service teacher will set out to learning contextualised opportunities based on deep comprehension on the underlying background of the teaching of English as a Foreign Language." },

  "Language and Culture III (CPC)": { requiere: ["Language and Culture II (CPC)"], esRequisitoDe: ["Language and Culture IV (CPC)"], descripcion: "This course attempts to widen students’ communicative competence in English at an advanced level. It provides opportunities for reconceptualizing the linguistic knowledge acquired in previous courses into English for Teaching, developing specific language skills teachers need for teaching. Additionally, the course focuses on exploring traditional cultural manifestations in English speaking communities, such as literature, drama, music, television and films, with a pedagogical purpose." },
  "Introduction to Literary Studies": { requiere: [], esRequisitoDe: ["Literature for Children (CPC)", "Literature for Teen Readers (CPC)"], descripcion: "" },
  "Teaching and Learning English Primary II": { requiere: ["Teaching and Learning English Primary I"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Básica"], descripcion: "This course aims at developing the knowledge and practical skills which are required to teach English to young learners (TEYL) effectively. It provides practical ideas on how to approach and plan for young learners as well as materials and ideas for specific activities, through the development of games, songs and visual materials and their use in teaching and assessment of young English learners. There is a special focus on the development of literacy skills (3rd to 6th grades) together with the implementation of organizational routines, procedures, and strategies to support a learning environment." },
  "Electivo Formación General VI": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Electivo Formación General VII": { requiere: [], esRequisitoDe: [], descripcion: "" },

  "Language and Culture IV (CPC)": { requiere: ["Language and Culture III (CPC)"], esRequisitoDe: ["English Spanish Contrasts (CPC)"], descripcion: "This course attempts to broaden students’ communicative competence in English at an advanced level. It provides opportunities for reconceptualizing the linguistic knowledge acquired in previous courses into English for Teaching, developing specific language skills teachers need for teaching. Additionally, the course focuses on exploring current cultural manifestations and ways of learning a foreign language through digital platforms, such as the Internet, social media and multimodal texts, with a pedagogical purpose." },
  "Classroom Research": { requiere: [], esRequisitoDe: ["Seminar"], descripcion: "This course introduces pre-service teachers to the principles and ethics of classroom research in the English as a Foreign Language (EFL) classroom. Teacher students will analyze issues and trends in their particular contexts to find solutions for concrete problems that learners face when learning an additional language. This will enable teacher candidates to explore the importance of seeing their pedagogic role as research producers for their ongoing professional development." },
  "Teaching and Learning English Secondary II": { requiere: ["Teaching and Learning English Secondary I"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Media"], descripcion: "This course focuses, firstly, on consolidating and strengthening the professional competences related to the design of English as Foreign Language (EFL) teaching-learning situations derived from teaching reference frameworks, educational policies and students’ contexts. Secondly, the course focuses on fostering reflection on teaching practices in the classroom and the monitoring of learning processes from different didactic perspectives with the aim of making appropriate decisions for EFL learning. All this is expected to contribute to the quality improvement of teaching and on the reinforcement of a professional identity as a foreign language teacher. To this end, the undergraduate will analyse different teaching and assessing practices, and they will have the opportunity to approach the design of teaching-learning situations." },
  "Práctica Pedagogía en Inglés IV": { requiere: ["Práctica Pedagogía en Inglés III"], esRequisitoDe: ["Práctica Profesional Pedagogía en Inglés Educación Básica", "Práctica Profesional Pedagogía en Inglés Educación Media"], descripcion: "Curso de práctica cuyo fin es que los estudiantes enseñen en Educación Media, asistiendo 3 mañanas a un centro educativo. Analizan el contexto de aula y a los alumnos, para así ajustar su enseñanza a las características del contexto, y orientar la toma de decisiones para el diseño, conducción y evaluación de al menos dos unidades didácticas. Colaboran en tareas administrativas que realiza el profesor en el aula (manejo de libro de clases, entre otros). En sus clases generan interacciones para el aprendizaje tales como: explicitación de contenidos, discusiones productivas y elicitación del pensamiento de los(as) alumnos(as), evalúan y retroalimentan el aprendizaje y gestionan ambientes de aprendizaje a través de rutinas organizacionales, estrategias, y trabajo en grupo pequeño. " },
  "Examen de Licenciatura en Educación": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Electivo Formación General VIII": { requiere: [], esRequisitoDe: [], descripcion: "" },
  "Examen de Inglés Nivel C1 o Equivalente": { requiere: ["Evaluación Inglés Nivel C1"], esRequisitoDe: [], descripcion: "" },

  "English Spanish Contrasts (CPC)": { requiere: ["Language and Culture IV (CPC)", "Applied Grammar II", "Applied Phonetics II"], esRequisitoDe: [], descripcion: "English-Spanish Contrasts offers a comprehensive linguistic description of similarities and differences between the English and Spanish languages focusing on a selection of phonological, morpho-syntactic, lexical, and discoursal aspects of both languages. The course examines the most pertinent approaches within the contrastive linguistics area and seeks their application in real English L2 production under the parameters of Spanish as L1." },
  "Literature for Children (CPC)": { requiere: ["Introduction to Literary Studies"], esRequisitoDe: [], descripcion: "This course promotes appreciation of literature as an artistic, cultural and educational manifestation which is fundamental for child development. It provides the prospective teacher with an understanding of literature written by English speaking communities and in various multicultural settings that allows them to select, analyze, interpret and produce literary and non-literary works (in print or digital environments) meant to be read and listened to by students at this level. The course explores the subgenres within children’s literature: fairy tales, folk tales, fables, poems and picture books among others from a pedagogical perspective." },
  "Gestión y Liderazgo en el Aula": { requiere: [], esRequisitoDe: [], descripcion: "El curso está orientado a entregar una visión del aula como un sistema complejo e interdependiente, en el cual la gestión del educador influye directamente en la generación de un ambiente inclusivo propicio para el desarrollo y aprendizaje de niños y niñas, impactando la calidad de los aprendizajes de los alumnos y la equidad en el acceso a éstos. También se abordarán variables claves, tales como el manejo del tiempo, la participación, la organización de espacio, las estrategias de aprendizaje, el clima, la significatividad de las metas, las normas de convivencia, el respeto y la conducción del grupo entre otras." },
  "Práctica Profesional Pedagogía en Inglés Educación Básica": { requiere: ["Práctica Pedagogía en Inglés IV", "Teaching and Learning English Primary II"], esRequisitoDe: [], descripcion: "La Práctica Profesional en Educación Básica intenciona la apropiación de la profesión docente, donde el (la) estudiante asume este rol desde una perspectiva integral, en distintas áreas de desempeño, con un adecuado y pertinente manejo del razonamiento técnico-pedagógico y un compromiso con su identidad profesional. El profesor en formación diseña, implementa y evalúa, en forma autónoma, cuatro unidades didácticas en la asignatura de inglés. Conduce instancias de interacción individual con alumnos y apoderados, además de tareas de apoyo a su gestión. Diseña secuencias de aprendizaje, genera interacciones para el aprendizaje con foco en los alumnos(as); gestiona ambientes propicios para el aprendizaje, evalúa y retroalimenta a los(as) alumnos(as), se comunica con apoderados." },

  "Literature for Teen Readers (CPC)": { requiere: ["Introduction to Literary Studies"], esRequisitoDe: [], descripcion: "This course promotes appreciation of literature as an artistic, cultural and educational manifestation which is fundamental for teen development. It provides the prospective teacher with an understanding of literature written by English speaking communities and in various multicultural settings that allows them to select, analyze, interpret and produce literary and non-literary works meant to be read and listened by students at this level. The course explores the subgenres within teens’ literature focusing on perspectives of genre, theme, teen identity and representations of adolescence from a pedagogical perspective." },
  "Seminar": { requiere: ["Classroom Research"], esRequisitoDe: [], descripcion: "This course is a curricular activity where an inquiry process is developed with respect to English as a foreign Language (EFL) learning and teaching experiences in the context of the professional practicum. To do so, pre-service teachers identify and focus on problems or matters related to the practicum, by defining procedures to gather and analyse information, contrasting its results with theoretical background and socializing these outcomes with the UC community and practicum centres. The course methodology is collaborative, with a focus on the discipline to enable the identification of students’ common thinking patterns and in order to respond to them from a disciplinary perspective. Likewise, the course seeks to analyse teaching-learning processes and provide the required guidance for their improvement." },
  "Práctica Profesional Pedagogía en Inglés Educación Media": { requiere: ["Práctica Pedagogía en Inglés IV", "Teaching and Learning English Secondary II"], esRequisitoDe: [], descripcion: "La Práctica Profesional de Educación Media busca que los estudiantes se apropien del rol de profesor(a) de inglés. Asumen tareas en los diversos estamentos involucrados en una comunidad educativa. Adicionalmente, conoce el trabajo que se realiza en una institución escolar con las redes locales que apoyan el desarrollo y aprendizaje de los estudiantes. Diseña secuencias de clases para lograr metas específicas de aprendizaje, genera interacciones para el aprendizaje, evalúa y a los(as) alumnos(as), analiza la propia práctica con el propósito de mejorarla, y se comunica con padres y apoderados." },
  "Ética Profesional": { requiere: [], esRequisitoDe: [], descripcion: "El curso ética profesional en educación tiene el propósito de colaborar con los profesores y las profesoras en formación en la tarea de asumir responsabilidades ético profesionales en vista a la toma de decisiones fundada. Esto mediante el desarrollo del razonamiento moral a partir del conocimiento y reflexión en torno a marcos teóricos, políticas y estrategias implicadas en la dimensión ética del quehacer en el aula." }
  
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

function crearMateria(nombre, id){
  const d = document.createElement("div");
  d.classList.add("materia");
  if (nombre.includes("Electivo Formación General")) {
    d.classList.add("electivo-fg");
  }


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

  d.onclick = (e) => {
  if (e.target.closest(".info-btn") || e.target.closest(".info-menu")) return;

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

  const isVisible = menu.classList.contains("visible");

  if (isVisible) {
    menu.classList.remove("visible", "izquierda");
    d.classList.remove("info-abierta");
    return;
  }

  // abrir por defecto a la derecha
  menu.classList.remove("izquierda");
  menu.style.left = "";
  menu.style.right = "";

  menu.classList.add("visible");
  d.classList.add("info-abierta");

  const rect = menu.getBoundingClientRect();

  // si se sale por la derecha → abrir a la izquierda
  if (rect.right > window.innerWidth) {
    menu.classList.add("izquierda");

    const rect2 = menu.getBoundingClientRect();

    // si igual se sale → fijarlo dentro de la pantalla
    if (rect2.left < 0) {
      menu.style.left = "0";
      menu.style.right = "auto";
    }
  }
};

// 👇 ESTO FALTABA (muy importante)
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
