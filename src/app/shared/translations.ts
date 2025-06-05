export const ABOUTMETRANSLATIONS = {
  en: {
    header: 'About me',
    subText: `I am a Fullstack developer from Mannheim, Germany.
              I help designers and companies to bring their ideas to real life. 
              Creativity and logical thinking are skills that I have developed 
              to connect ideas into quality products.
              If you think I'd be a good match for your projects, contact me!`,
    info1: 'Based in Mannheim',
    info2: 'Open to work Remote',
    button: "Let's talk",
  },
  de: {
    header: 'Über mich',
    subText: `Ich bin ein Fullstack-Entwickler aus Mannheim, Deutschland.
              Ich helfe Designern und Unternehmen, ihre Ideen in die Realität umzusetzen.
              Kreativität und logisches Denken sind Fähigkeiten, die ich entwickelt habe,
              um Ideen in hochwertige Produkte zu verwandeln.
              Wenn Sie denken, dass ich gut zu Ihren Projekten passe, kontaktieren Sie mich!`,
    info1: 'Wohnhaft in Mannheim',
    info2: 'Bereit für Remote-Arbeit',
    button: 'Lass uns reden',
  },
};

export const MYSKILLSTRANSLATIONS = {
  en: {
    header: 'My Skills'
  },
  de: {
    header: 'Meine Skills'
  }
};


interface ProjectDescription {
  description: string;
}

interface Translation {
  heading: {
    h3: string;
  };
  projects: ProjectDescription[];
}

interface Translations {
  en: Translation;
  de: Translation;
}

export const PROJECTTRANSLATIONS: Translations = {
  en: {
    heading: {
      h3: "Explore a selection of my work here - Interact with projects to see my skill in action",
    },
    projects: [
      {
        description:
          "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      },
      {
        description:
          "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      },
      {
        description:
          'Videoflix is a streaming platform where users can watch videos.'
      }
    ],
  },
  de: {
    heading: {
      h3: "Entdecken Sie hier eine Auswahl meiner Arbeit - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen",
    },
    projects: [
      {
        description:
          "Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
      },
      {
        description:
          "Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.",
      },
      {
        description:
          'Videoflix ist eine streaming Plattform auf der User Videos schauen können.'
      }
    ],
  },
};


export const CONTACTTRANSLATIONS = {
  en: {
    headings: {
      h1: "Say Hi!",
      h2: "Want to discuss a new project?",
      h3: "Say hello! Let's discuss your ideas and make it happen",
    },
    labels: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email.",
      message: "Please enter your message (Minimum length 50).",
      privacy: "Please accept the privacy policy.",
    },
    buttons: {
      desktop: "Send message",
      mobile: "Say hello",
    },
  },
  de: {
    headings: {
      h1: "Sag Hallo!",
      h2: "Möchten Sie ein neues Projekt besprechen?",
      h3: "Sag Hallo! Lassen Sie uns Ihre Ideen besprechen und es Wirklichkeit werden lassen",
    },
    labels: {
      name: "Ihr Name",
      email: "Ihre E-Mail",
      message: "Ihre Nachricht",
    },
    errors: {
      name: "Bitte geben Sie Ihren Namen ein.",
      email: "Bitte geben Sie Ihre E-Mail ein.",
      message: "Bitte geben Sie Ihre Nachricht ein (Mindestlänge 50).",
      privacy: "Bitte akzeptieren Sie die Datenschutzerklärung.",
    },
    buttons: {
      desktop: "Nachricht senden",
      mobile: "Senden",
    },
  },
};

export const POPUPTRANSLATIONS = {
  en: {
    links: {
      aboutMe: "About me",
      skills: "My skills",
      portfolio: "Portfolio",
    },
    heading: "Say Hi!",
    contactEmail: "contact@daniel-lehmann.dev",
  },
  de: {
    links: {
      aboutMe: "Über mich",
      skills: "Meine Skills",
      portfolio: "Portfolio",
    },
    heading: "Sag Hallo!",
    contactEmail: "contact@daniel-lehmann.dev",
  }
};

export const HEROSECTIONTRANSLATIONS = {
  en: {
    sendMessageButton: 'Send message',
    scrollDownText: 'Scroll down!',
  },
  de: {
    sendMessageButton: 'Nachricht senden',
    scrollDownText: 'Scroll runter!',
  }
};




