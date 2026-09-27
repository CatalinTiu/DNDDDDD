"use strict";

/* =================================
   FUNCȚII GENERALE
================================= */

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =================================
   NUME SPANIOLE
================================= */

const spanishNames = [
  "Juanico Cola",
  "Nuflo de Santillana",
  "Jacobo de Cárdenas",
  "Alonso Valderrama",
  "Rodrigo Montemayor",
  "Iñigo del Castillo",
  "Lorenzo de la Vega",
  "Diego Alcázar",
  "Sancho Villanueva",
  "Beatriz de Aranda",
  "Inés Mendoza",
  "Catalina Zambrano",
  "Elvira de Albornoz",
  "Marisol Benavides",
  "Leonor de Montalvo",
  "Gaspar Villaseñor",
  "Tomasa de Rojas",
  "Hernando Carrasco",
  "Isabel de Villalba",
  "Ramiro Castañeda",
  "Aldonza de Orellana",
  "Baltasar Figueroa",
  "Constanza de León",
  "Eloy Manrique",
  "Gracia de Miranda",
  "Héctor Santamaría",
  "Jimena de Osorio",
  "Leandro del Valle",
  "Mencía Robledo",
  "Octavio de Salazar",
  "Petronila Aguirre",
  "Ruy de Narváez",
  "Sabina Montoya",
  "Tadeo de la Cruz",
  "Úrsula Valcárcel",
  "Valentín de Herrera",
  "Ximena Paredes",
  "Yago de Alvarado",
  "Zoraida de Luna",
  "Arturo Benavente",
  "Blanca de Torquemada",
  "Cipriano Rosales",
  "Dulce de Medina",
  "Esteban de Guzmán",
  "Fabiola Escalante",
  "Gonzalo de Vivar",
  "Hilda Montoro",
  "Íñigo de Toledo",
  "Julián del Prado",
  "Lucía de la Serna"
];

/* =================================
   NUME FRANȚUZEȘTI
================================= */

const frenchNames = [
  "Amaury Abbadie",
  "Gillot Gicquel",
  "Perresson Baudelaire",
  "Gilebertus Carrell",
  "Andreas Courtet",
  "Aveline Beauchamp",
  "Bastien Desrosiers",
  "Étienne Montferrand",
  "Guillaume Lavallée",
  "Héloïse Vauquelin",
  "Margot Rochefort",
  "Odette Bellemare",
  "Renard de Valois",
  "Thibault d'Aubigné",
  "Ysabeau de Châtillon",
  "Armand Delacroix",
  "Bérengère Montreuil",
  "Clovis de Brissac",
  "Élodie Fournier",
  "Félix Saint-Clair",
  "Gaspard de Mirecourt",
  "Henriette d'Orléans",
  "Isabeau LaFontaine",
  "Josselin de Rouvray",
  "Léonie Charbonneau",
  "Marcel de Villiers",
  "Nathalie Deschamps",
  "Olivier de Beaumont",
  "Philippe Marivaux",
  "Rosalie de Courcy",
  "Séraphin D'Aumont",
  "Solène Montauban",
  "Théodore Bellamy",
  "Valentine de Rochefort",
  "Anselme Chauvigny",
  "Brigitte de Sancerre",
  "Célestin Aubert",
  "Delphine de Lormont",
  "Evrard Fontenelle",
  "Florence du Pré",
  "Géraud de Villeneuve",
  "Hortense Clairmont",
  "Lucien de Marais",
  "Madeleine Corbin",
  "Noémie de Ferrand",
  "Pascal Saint-Rémy",
  "Quentin d'Artois",
  "Renée Montparnasse",
  "Sylvain de Montfort",
  "Véronique Valette"
];

/* =================================
   NUME ITALIENEȘTI
================================= */

const italianNames = [
  "Andrea Courtet",
  "Matteo Belladonna",
  "Ludovico Fioravanti",
  "Giacomo Montanari",
  "Cesare di Ventimiglia",
  "Domenico della Rovere",
  "Ruggiero Valentini",
  "Alessia Lucchesi",
  "Bianca Moretti",
  "Fiorella de Medici",
  "Serafina Rossi",
  "Vittoria Bellini",
  "Marcello Visconti",
  "Niccolò d'Este",
  "Alessandro Ferretti",
  "Beatrice Malatesta",
  "Carlo di Savona",
  "Daria Monteverdi",
  "Emilio Bartolini",
  "Fiammetta Orsini",
  "Giorgio Bellini",
  "Isabella Capello",
  "Lorenzo da Firenze",
  "Lucia Sforza",
  "Massimo Rinaldi",
  "Nerina Valenti",
  "Orazio di Mantua",
  "Paolo Caravelli",
  "Renata Visconti",
  "Salvatore di Lucca",
  "Taddeo Marcelli",
  "Umberto Falcone",
  "Violetta d'Aragona",
  "Zanobi Bardi",
  "Anselmo Grimaldi",
  "Carlotta Bentivoglio",
  "Donato Ferraro",
  "Eleonora Spinelli",
  "Federico Albizzi",
  "Ginevra Contarini",
  "Ippolita Orsini",
  "Leone Manfredi",
  "Margherita Alighieri",
  "Nino Castellani",
  "Ottavia di Pisa",
  "Pietro Salerno",
  "Raffaella Torriani",
  "Silvio Medici",
  "Tiziana Lombardi",
  "Valerio d'Este"
];

/* =================================
   NUME MIXTE
================================= */

function getFirstPart(fullName) {
  return fullName.split(" ")[0];
}

function getSurnamePart(fullName) {
  const parts = fullName.split(" ");
  return parts.slice(1).join(" ");
}

function createMixedName() {
  const nameLists = [
    spanishNames,
    frenchNames,
    italianNames
  ];

  const firstNameList = randomItem(nameLists);
  let surnameList = randomItem(nameLists);

  // Încearcă să aleagă origini diferite pentru prenume și nume
  while (surnameList === firstNameList) {
    surnameList = randomItem(nameLists);
  }

  const firstName = getFirstPart(randomItem(firstNameList));
  const surname = getSurnamePart(randomItem(surnameList));

  return `${firstName} ${surname}`;
}

function createName() {
  const style = randomItem([
    "spanish",
    "french",
    "italian",
    "mixed"
  ]);

  switch (style) {
    case "spanish":
      return randomItem(spanishNames);

    case "french":
      return randomItem(frenchNames);

    case "italian":
      return randomItem(italianNames);

    case "mixed":
    default:
      return createMixedName();
  }
}

/* =================================
   ANCESTRIES, COMMUNITIES ȘI CLASE
================================= */

const ancestries = [
  "Clank",
  "Drakona",
  "Dwarf",
  "Elf",
  "Faerie",
  "Faun",
  "Firbolg",
  "Fungril",
  "Galapa",
  "Giant",
  "Goblin",
  "Halfling",
  "Human",
  "Infernis",
  "Katari",
  "Orc",
  "Ribbet",
  "Simiah"
];

const communities = [
  "Highborne",
  "Loreborne",
  "Orderborne",
  "Ridgeborne",
  "Seaborne",
  "Slyborne",
  "Underborne",
  "Wanderborne"
];

const classes = [
  "Bard",
  "Druid",
  "Guardian",
  "Ranger",
  "Rogue",
  "Seraph",
  "Sorcerer",
  "Warrior",
  "Wizard"
];

/* =================================
   GENERAREA NPC-ULUI
================================= */

function generateNPC() {
  return {
    name: createName(),
    ancestry: randomItem(ancestries),
    community: randomItem(communities),
    characterClass: randomItem(classes)
  };
}

function renderNPC(npc) {
  const result = document.querySelector("#npc-result");

  result.innerHTML = `
    <div class="npc-card-header">
      <span class="npc-label">NPC generat</span>
      <h3>${escapeHTML(npc.name)}</h3>
    </div>

    <dl class="npc-details">
      <div>
        <dt>Heritage</dt>
        <dd>
          ${escapeHTML(npc.ancestry)}
          ·
          ${escapeHTML(npc.community)}
        </dd>
      </div>

      <div>
        <dt>Clasă</dt>
        <dd>${escapeHTML(npc.characterClass)}</dd>
      </div>
    </dl>
  `;
}

function generateAndRenderNPC() {
  const npc = generateNPC();
  renderNPC(npc);
}

/* =================================
   PORNIREA SCRIPTULUI
================================= */

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#generate-npc");

  if (!button) {
    console.error("Butonul #generate-npc nu a fost găsit în index.html.");
    return;
  }

  button.addEventListener("click", generateAndRenderNPC);

  // Generează automat un NPC când pagina se încarcă
  generateAndRenderNPC();
});
