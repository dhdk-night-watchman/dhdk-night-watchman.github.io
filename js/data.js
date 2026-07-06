/* =============================================================================
   THE NIGHT WATCHMAN — game data
   All object facts, questions, hints and "study" notes are taken from real
   Rijksmuseum Collection Online records (rijksmuseum.nl). This file is the
   single "source of truth" for the game, exactly as the records are for a
   real museum. Swap the `image` paths for downloaded public-domain images
   from Rijksstudio to show the real artworks (see README).
   ============================================================================= */

/* Forgiving scoring: full marks on a first-try answer, fewer after a hint,
   fewer again after using help. Skipping costs nothing but earns nothing. */
const SCORING = { first: 10, afterHint: 6, afterHelp: 2, skip: 0 };

/* The Night Watchman's lines. Warm guide, helps, never scolds. */
const WATCHMAN = {
  welcome:
    "Welcome, night owl. I am the Night Watchman. The visitors have gone home and the lamps are low — but the museum is far from asleep. Take my lantern and we shall walk the dark galleries together. At each work I will ask you a question or two. Answer wrongly and you lose nothing: I will hint, and help, and never leave you in the dark.",
  mapIntro: "Four galleries lie in shadow. Lift your lantern and choose where to wander.",
  correct: [
    "A good eye. The lantern shows you true.",
    "Just so. You see more than most who pass here by daylight.",
    "Well found. On we go.",
    "Right indeed. The old masters would approve."
  ],
  hint: "Not quite — let me hold the light a little closer.",
  reveal:
    "No matter at all. Here is the truth of it. Will you study it a moment, or walk on?",
  galleryComplete: "This room is done. Its works will rest easy now. Back to the dark hall.",
  ending:
    "Dawn is near. You have walked every gallery and truly seen what most visitors stroll straight past. Come back when the lamps are low again — there is always more in the dark."
};

/* Four galleries = the four "rooms" the Watchman walks you through. */
const GALLERIES = [
  {
    id: "honour",
    name: "The Gallery of Honour",
    blurb: "The museum's most celebrated paintings.",
    intro: "The grandest hall. Two masterpieces wait in the dark — find them.",
    studyIntro:
      "This hall gathers works that many visitors come to see first: paintings where the Dutch Republic staged power, labour, light and everyday life. Keep your lantern low and look for how painters turned ordinary moments and public identity into lasting memory.",
    accent: "#7A2E2A",
    objects: ["night-watch", "milkmaid"]
  },
  {
    id: "delft",
    name: "Delftware & Decorative Arts",
    blurb: "Blue-and-white ceramics and a miniature world.",
    intro: "Glass cases gleam faintly. Sweep your lantern across the shelves.",
    studyIntro:
      "Here the museum changes scale: from a towering Delftware flower pyramid to a cabinet-sized household made with astonishing craft. These objects show how wealth, trade, taste and domestic life could be performed through materials as much as through paintings.",
    accent: "#2E5B8A",
    objects: ["flower-pyramid", "dolls-house"]
  },
  {
    id: "sail",
    name: "The Golden Age of Sail",
    blurb: "Ships, the sea and Dutch sea power.",
    intro: "You can almost smell tar and salt. A great ship looms ahead.",
    studyIntro:
      "This gallery follows the sea lanes that shaped the Dutch seventeenth century. Ship models and marine paintings reveal technical skill, national pride and the maritime networks behind the museum's Golden Age stories.",
    accent: "#3E6B5A",
    objects: ["william-rex", "calm-sea"]
  },
  {
    id: "ice",
    name: "Life on the Ice",
    blurb: "Dutch winters, frozen rivers and everyday life.",
    intro: "The coldest room. Frozen scenes hang waiting for your light.",
    studyIntro:
      "In this room, winter becomes a social stage. Avercamp's frozen landscapes show play, work, danger and community together, helping us read everyday life as carefully as any grand historical scene.",
    accent: "#4A6A8A",
    objects: ["ice-skaters", "near-a-town"]
  }
];

/* Eight objects, two per gallery. `motif` selects a built-in SVG drawing so
   the game works with no downloads; `image` (optional) shows a real photo if
   you add one to /images. `credit` cites the Rijksmuseum record. */
const OBJECTS = {
  "night-watch": {
    title: "The Night Watch",
    maker: "Rembrandt van Rijn",
    date: "1642",
    motif: "nightwatch",
    image: "images/night-watch.jpg",
    credit: "Rijksmuseum, Amsterdam (SK-C-5)",
    medium: "Oil on canvas",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "SK-C-5",
    period: "Dutch Golden Age, 17th century",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/SK-C-5",
    questions: [
      {
        q: "What kind of group does this huge painting show?",
        options: ["A civic militia company", "A royal family", "A guild of painters", "A church choir"],
        answer: 0,
        hint: "Look for muskets, pikes and a drum — these are armed townsmen, not nobles or clergy.",
        study:
          "It is a group portrait of a civic-guard militia (a schutterij), led by Captain Frans Banninck Cocq. Rembrandt painted the men as if caught mid-movement, marching out — daringly different from the stiff, lined-up group portraits of the time."
      },
      {
        q: "Why is the painting we see today smaller than Rembrandt made it?",
        options: ["Rembrandt never finished it", "It shrank with age", "It was cut down in 1715 to fit a wall", "Half was lost in a shipwreck"],
        answer: 2,
        hint: "When it was moved to Amsterdam's town hall, it had to fit a particular spot between two doors…",
        study:
          "In 1715 the canvas was moved to Amsterdam's Town Hall and trimmed on all sides — most heavily on the left — to fit between two doors. Several figures were lost, which is why the composition feels slightly off-centre."
      }
    ]
  },
  "milkmaid": {
    title: "The Milkmaid",
    maker: "Johannes Vermeer",
    date: "c. 1660",
    motif: "milkmaid",
    image: "images/milkmaid.jpg",
    credit: "Rijksmuseum, Amsterdam (SK-A-2344)",
    medium: "Oil on canvas",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "SK-A-2344",
    period: "Dutch Golden Age, 17th century",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/SK-A-2344",
    questions: [
      {
        q: "What did Vermeer do with light that makes the bread and basket look so real?",
        options: ["He used real gold", "He glued on real crumbs", "He left those parts unpainted", "Tiny dots of bright paint that mimic sparkle"],
        answer: 3,
        hint: "Look at the crust and the basket — those little highlights…",
        study:
          "Vermeer built the surfaces from tiny points of light-coloured paint (pointillé), so the bread crust and wicker basket seem to catch and sparkle in the daylight."
      },
      {
        q: "Why was this painting unusual for its time?",
        options: ["It makes an ordinary servant the monumental subject", "It shows a famous queen", "It is the largest painting in the museum", "It was painted by a child"],
        answer: 0,
        hint: "Think about who is usually the 'star' of a 17th-century painting.",
        study:
          "Most paintings celebrated the wealthy, the powerful or religious scenes. Vermeer instead treats a humble working maid with the dignity and stillness usually reserved for grand subjects, making her simple task feel important."
      }
    ]
  },
  "flower-pyramid": {
    title: "Flower Pyramid",
    maker: "De Grieksche A (workshop of Adrianus Kocx), Delft",
    date: "c. 1690–1700",
    motif: "pyramid",
    image: "images/flower-pyramid.jpg",
    credit: "Rijksmuseum, Amsterdam",
    medium: "Tin-glazed earthenware / faience, blue painted glaze",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "BK-2004-4-A",
    period: "Late 17th-century Delftware",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/object/Flower-pyramid--ee5cbccf1553fd69e197ebd73e03b47d",
    questions: [
      {
        q: "What was this tall blue-and-white tower actually used for?",
        options: ["Storing wine", "Displaying cut flowers, one stem per spout", "Burning incense", "Keeping bread warm"],
        answer: 1,
        hint: "Notice the many small spouts pointing outward from every tier…",
        study:
          "Each spout held a single cut flower stem, and the tiers held water. Built from separate stacked segments of tin-glazed earthenware (faience) painted blue, it displayed costly flowers and showed off the owner's wealth and taste."
      },
      {
        q: "At whose court did this stacked flower-vase become fashionable?",
        options: ["Napoleon", "The Medici", "William and Mary", "The Tudors"],
        answer: 2,
        hint: "A Dutch–English royal couple of the late 17th century, mad about porcelain and flowers…",
        study:
          "The model became fashionable at the court of William and Mary. Mary II was passionate about flower arranging and blue-and-white porcelain, and Delft potters imitated costly Chinese porcelain in local faience."
      }
    ]
  },
  "dolls-house": {
    title: "Dolls' House of Petronella Oortman",
    maker: "Anonymous, Amsterdam",
    date: "c. 1686–1710",
    motif: "dollhouse",
    image: "images/dolls-house.jpg",
    credit: "Rijksmuseum, Amsterdam (BK-NM-1010)",
    medium: "Oak cabinet with tortoiseshell, tin, glass, textiles and miniature furnishings",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "BK-NM-1010",
    period: "Dutch Golden Age, c. 1686-1710",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/BK-NM-1010",
    questions: [
      {
        q: "Who was this dolls' house really made for?",
        options: ["A wealthy adult woman, to show her taste", "A royal child", "A toy shop", "A school"],
        answer: 0,
        hint: "This was no child's plaything — look how fine and costly everything is.",
        study:
          "It was commissioned by the wealthy Petronella Oortman as a showpiece for adults — a way to display wealth and good taste. Every item was made by specialist craftsmen (silversmiths, glassblowers, basket weavers) to exact scale."
      },
      {
        q: "How expensive was it to create?",
        options: ["A few guilders", "Nothing — it was a gift", "As much as a real Amsterdam canal house", "About a week's wages"],
        answer: 2,
        hint: "Think very, very expensive — bricks-and-mortar expensive.",
        study:
          "In its day it was valued at twenty to thirty thousand guilders — about the price of a real canal house in Amsterdam. It even had running water in the kitchen and dozens of tiny leather-bound books in the library."
      }
    ]
  },
  "william-rex": {
    title: "Model of the William Rex",
    maker: "Adriaen de Vriend and others",
    date: "1698",
    motif: "ship",
    image: "images/william-rex.jpg",
    credit: "Rijksmuseum, Amsterdam (NG-MC-651)",
    medium: "Wood, brass, iron, glass, rope, textile and paint",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "NG-MC-651",
    period: "Late 17th-century Dutch naval history",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/NG-MC-651",
    questions: [
      {
        q: "What is this object?",
        options: ["A detailed scale model of a warship", "A real ship shrunk by magic", "A fishing boat", "A royal carriage"],
        answer: 0,
        hint: "Look at the tiny cannons and the full rigging — it is built entirely to scale.",
        study:
          "It is a fully rigged model of a Dutch warship of about 1698, carrying 74 guns on three decks. A real ship would have been more than twelve times larger. It was a showpiece displayed by the Admiralty of Zeeland."
      },
      {
        q: "Where does the name 'William Rex' come from?",
        options: ["The captain's name", "The shipyard that built it", "A king who once sailed on it", "Monograms carved on the stern"],
        answer: 3,
        hint: "The model can't be matched to any real ship — the name comes from letters on the back.",
        study:
          "The model cannot be firmly identified with a real ship. Since the 19th century it has been called 'William Rex' after the 'RWR' monograms carved into its richly decorated stern."
      }
    ]
  },
  "calm-sea": {
    title: "Dutch Ships in a Calm Sea",
    maker: "Willem van de Velde the Younger",
    date: "c. 1665",
    motif: "calmsea",
    image: "images/calm-sea.jpg",
    credit: "Rijksmuseum, Amsterdam",
    medium: "Oil on canvas",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "SK-C-1707",
    period: "Dutch Golden Age marine painting",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/object/Dutch-Ships-in-a-Calm-Sea--c726c1d696aa0f30815f174a8f4fb646",
    questions: [
      {
        q: "Who first taught Willem van de Velde the Younger to paint?",
        options: ["A ship's captain", "The King of Spain", "His father", "He was self-taught"],
        answer: 2,
        hint: "Marine painting ran in the family…",
        study:
          "He was first taught by his father, Willem van de Velde the Elder, who also specialised in marine art, and later studied under Simon de Vlieger."
      },
      {
        q: "Why were sea paintings so popular in the 17th-century Dutch Republic?",
        options: ["The nation's wealth and pride came from the sea", "Because storms were rare", "They were cheap to make", "They were required by law"],
        answer: 0,
        hint: "Think about how the Dutch Republic actually made its money…",
        study:
          "The Republic's power and prosperity rested on shipping, trade and naval strength. Marine paintings celebrated the very source of national pride and wealth, so they hung in many homes."
      }
    ]
  },
  "ice-skaters": {
    title: "Winter Landscape with Ice Skaters",
    maker: "Hendrick Avercamp",
    date: "c. 1608",
    motif: "iceskaters",
    image: "images/ice-skaters.jpg",
    credit: "Rijksmuseum, Amsterdam (SK-A-1718)",
    medium: "Oil on panel",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "SK-A-1718",
    period: "Dutch Golden Age winter landscape",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/object/Winterlandschap-met-schaatsers--918895dc18da94e357c6763adda8882f",
    questions: [
      {
        q: "What is unusual about the shape of this painting?",
        options: ["It is round", "It is a perfect square", "It is triangular", "It has no frame"],
        answer: 0,
        hint: "Most paintings are rectangles — this one is not…",
        study:
          "The panel is circular (a tondo). The round shape works like a peephole or a spyglass onto the ice, pulling your eye across the whole curved scene."
      },
      {
        q: "What was unusual about the artist, Hendrick Avercamp?",
        options: ["He was a king", "He had never seen snow", "He painted only at night", "He could not speak and was likely deaf"],
        answer: 3,
        hint: "His nickname came from the way he communicated with others.",
        study:
          "Avercamp could not speak and was probably deaf, earning the nickname 'the Mute of Kampen.' He specialised in winter scenes and is seen as the founder of the Dutch winter landscape."
      }
    ]
  },
  "near-a-town": {
    title: "Enjoying the Ice near a Town",
    maker: "Hendrick Avercamp",
    date: "c. 1620",
    motif: "neartown",
    image: "images/near-a-town.jpg",
    credit: "Rijksmuseum, Amsterdam",
    medium: "Oil on panel",
    museum: "Rijksmuseum, Amsterdam",
    collectionId: "SK-A-3247",
    period: "Dutch Golden Age winter landscape",
    sourceUrl: "https://www.rijksmuseum.nl/en/collection/object/Enjoying-the-Ice--fa7712d894d8843ae6b8b2bc8716d4e9",
    questions: [
      {
        q: "Compared with his early work, how are the figures here?",
        options: [ "Tinier and further away", "Larger and closer to us", "Completely invisible", "Underwater"],
        answer: 1,
        hint: "This is a later painting — the people are bigger and more detailed.",
        study:
          "By around 1620 Avercamp brought his figures closer to the viewer and made them larger and more detailed than the crowds of tiny figures in his earlier panoramas of the ice."
      },
      {
        q: "When did Avercamp actually paint his winter scenes?",
        options: ["All year round, even in summer, from sketches", "Only during snowstorms", "Only outdoors in winter", "Only once in his life"],
        answer: 0,
        hint: "He did not stand outside in the freezing cold to paint…",
        study:
          "Like other 17th-century painters, Avercamp worked indoors in his studio, painting winter scenes all year round — even in summer — from sketches and memory."
      }
    ]
  }
};
