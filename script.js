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

/* =================================
   GENERATOR DE ENCOUNTERS ANDALURIA
================================= */

/*
  Catalog inițial de adversari tematici.

  role: rolul adversarului din Daggerheart
  tier: tier-ul adversarului
  bp: costul în Battle Points
  maxCopies: numărul maxim de copii ale adversarului în encounter

  Costuri BP:
  Minion (un grup cât party-ul) = 1
  Social / Support = 1
  Horde / Ranged / Skulk / Standard = 2
  Leader = 3
  Bruiser = 4
  Solo = 5
*/

const andaluriaAdversaries = [
  {
    name: "Harpy",
    tier: 1,
    role: "Skulk",
    bp: 2,
    maxCopies: 2
  },
  {
    name: "Head Guard",
    tier: 1,
    role: "Leader",
    bp: 3,
    maxCopies: 1
  },
  {
    name: "Zombie Pack",
    tier: 1,
    role: "Horde",
    bp: 2,
    maxCopies: 2
  },
  {
    name: "Minor Demon",
    tier: 1,
    role: "Solo",
    bp: 5,
    maxCopies: 1
  },
  {
    name: "Urco",
    tier: 2,
    role: "Standard",
    bp: 2,
    maxCopies: 2
  },
  {
    name: "Valdenhax",
    tier: 2,
    role: "Leader",
    bp: 3,
    maxCopies: 1
  },
  {
    name: "Vampire",
    tier: 3,
    role: "Standard",
    bp: 2,
    maxCopies: 2
  },
  {
    name: "Vampire Bat Swarm",
    tier: 3,
    role: "Horde",
    bp: 2,
    maxCopies: 2
  },
  {
    name: "Head Vampire",
    tier: 3,
    role: "Leader",
    bp: 3,
    maxCopies: 1
  },
  {
    name: "Vampire Lord",
    tier: 3,
    role: "Solo",
    bp: 5,
    maxCopies: 1
  },
  {
    name: "Viscera Sucker",
    tier: 3,
    role: "Skulk",
    bp: 2,
    maxCopies: 2
  },
  {
    name: "Zombie Legion",
    tier: 4,
    role: "Horde",
    bp: 2,
    maxCopies: 2
  },
  {
    name: "Harbinger of Pestilence",
    tier: 4,
    role: "Leader",
    bp: 3,
    maxCopies: 1
  }
];

function andaluriaRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function andaluriaGetBudget(partySize, difficulty) {
  let budget = (3 * partySize) + 2;

  if (difficulty === "easy") {
    budget -= 1;
  } else if (difficulty === "hard") {
    budget += 2;
  }

  return Math.max(1, budget);
}

function andaluriaBuildEncounter(tier, partySize, startingBudget) {
  const availableAdversaries = andaluriaAdversaries.filter(
    adversary => adversary.tier === tier
  );

  if (availableAdversaries.length === 0) {
    return {
      error: `Nu există încă adversari introduși pentru Tier ${tier}.`
    };
  }

  const encounter = [];
  const copiesByName = new Map();

  let remainingBudget = startingBudget;
  let soloCount = 0;

  while (remainingBudget > 0) {
    const candidates = availableAdversaries.filter(adversary => {
      const copies = copiesByName.get(adversary.name) || 0;

      if (adversary.bp > remainingBudget) {
        return false;
      }

      if (copies >= adversary.maxCopies) {
        return false;
      }

      // Evită să adauge mai mulți adversari Solo în același encounter.
      if (adversary.role === "Solo" && soloCount >= 1) {
        return false;
      }

      return true;
    });

    if (candidates.length === 0) {
      break;
    }

    const adversary = andaluriaRandomItem(candidates);
    const copies = copiesByName.get(adversary.name) || 0;

    copiesByName.set(adversary.name, copies + 1);
    remainingBudget -= adversary.bp;

    if (adversary.role === "Solo") {
      soloCount += 1;
    }

    const existing = encounter.find(
      item => item.name === adversary.name
    );

    if (existing) {
      existing.count += 1;
    } else {
      encounter.push({
        name: adversary.name,
        role: adversary.role,
        tier: adversary.tier,
        bp: adversary.bp,
        count: 1
      });
    }
  }

  const spentBudget = startingBudget - remainingBudget;

  return {
    encounter,
    startingBudget,
    spentBudget,
    remainingBudget
  };
}

function renderAndaluriaEncounter() {
  const result = document.querySelector("#encounter-result");
  const tierSelect = document.querySelector("#encounter-tier");
  const partySizeInput = document.querySelector("#encounter-party-size");
  const difficultySelect = document.querySelector("#encounter-difficulty");

  const tier = Number(tierSelect.value);
  const partySize = Math.max(1, Number(partySizeInput.value) || 1);
  const difficulty = difficultySelect.value;
  const budget = andaluriaGetBudget(partySize, difficulty);

  const generated = andaluriaBuildEncounter(
    tier,
    partySize,
    budget
  );

  if (generated.error) {
    result.innerHTML = `<p>${escapeHTML(generated.error)}</p>`;
    return;
  }

  if (generated.encounter.length === 0) {
    result.innerHTML = `
      <p>
        Nu s-a putut compune encounter-ul cu bugetul ales.
        Încearcă să schimbi numărul personajelor sau dificultatea.
      </p>
    `;
    return;
  }

  const enemyItems = generated.encounter.map(enemy => {
    const quantityLabel = enemy.count === 1
      ? "1 adversar"
      : `${enemy.count} adversari`;

    return `
      <li>
        <span class="encounter-enemy-name">
          ${escapeHTML(enemy.name)}
        </span>

        <span class="encounter-enemy-meta">
          ${quantityLabel} · ${escapeHTML(enemy.role)}
          · Tier ${enemy.tier}
          · ${enemy.count * enemy.bp} BP
        </span>
      </li>
    `;
  }).join("");

  result.innerHTML = `
    <p class="encounter-summary">
      Tier ${tier} · party de ${partySize}
      · buget ${generated.startingBudget} BP
      · folosiți ${generated.spentBudget} BP
    </p>

    <ul class="encounter-list">
      ${enemyItems}
    </ul>

    ${
      generated.remainingBudget > 0
        ? `<p>Au rămas nefolosiți ${generated.remainingBudget} BP.</p>`
        : ""
    }
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#generate-encounter");

  if (!button) {
    console.error(
      "Butonul #generate-encounter nu a fost găsit în index.html."
    );
    return;
  }

  button.addEventListener("click", renderAndaluriaEncounter);
});
