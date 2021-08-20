// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import Replit from "./Assets/sponsorsLogos/replit.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import ll from "./Assets/sponsorsLogos/ll.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import naqeeb from "./Assets/teami/naqeeb.jpg";
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import Pravallika from "./Assets/teami/pravallika.jpg";
import keshav from "./Assets/teami/keshav.jpg";
import zoha from "./Assets/teami/zoha.png";
import kk from "./Assets/teami/kk.png";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "Join Limbo Hacks",
  Typed_effect: ["24 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on Last Week of September 2021 with over 100+ teams, 400+ students from across the nation for 48 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.gle/CPLwRc1SyvxLZyhNA"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/codechefadgitm/",
  discord: "",
  linkedin: "https://www.linkedin.com/company/codechefadgitm/",
  twitter: "https://mobile.twitter.com/CAdgitm",
  devpost: "https://limbo-hacks-12968.devpost.com/",
  email: "mailto:codechefadgitmchapter@gmail.com",
  mail:"codechefadgitmchapter@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is Limbo hacks?",
  LONG_DESCRIPTION:
    "Hack Limbo is 24 hour long running hackathon will be held on November 20th & 21th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Limbo Hacks will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: false,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: false,
    src: ""
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% "
    },
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track"
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use qoom in your project to win this category"
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Naqeeb Ahmed",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: naqeeb
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    },
    {
      Name: "Karishma",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: kk
    }
  ],
  [
    //Array 3
    {
      Name: "Pravallika",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Pravallika
    },
    {
      Name: "Keshav",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: keshav
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

const frequentlyAskedQuestions = [
  [
    {
      q: "What is a hackathon?",
      ans: "Hackathons are community events, where you get to interact with students from all around the world as well as forming teams to create future tech"
    },
    {
      q: "How to participate?",
      ans: "All you need is to fill our form above and join Discord, we will guide you through everything there"
    }
  ],
  [
    {
      q: "I have no idea what coding is?",
      ans: "Thats why you must attend our event, we will guide you through everything with awesome workshops,tech talk and many more"
    },
    {
      q: "Do i need to pay any money?",
      ans: "Absolutely not ! our event is free and open for all , if incase anyone asks for money you can dm any of our moderator"
    }
  ],
  [
    {
      q: "I dont have a team to participate?",
      ans: "You dont need one, prior to our event in discord you will meet many hackers exactly like you and join to form a team, if not you can participate alone and fun fact we are running special best solo prize."
    },
    {
      q: "I have more doubts?",
      ans: "Reach us directly at (rehan@limbohacks.tech) we would happy to help you."
    }
  ],
  [
    {
      q: "Can i volunteer?",
      ans: "Yes we are looking for volunteers, fill the form (in footer section) we would be glad to have you."
    },
    {
      q: "What are the conduct of guidlines?",
      ans: "We strongly follow the MLH code of conduct, Our team members will enforce this code throughout the event. "
    }
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
