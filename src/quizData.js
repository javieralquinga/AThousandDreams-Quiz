const quizData = [
  {
    id: 1,
    type: "one selection",
    question: "How often do you remember dreams?",
    options: {
      "Never": ["Potential Dreamer"],
      "Once every few years": ["Potential Dreamer"],
      "Once every few months": ["Classic Dreamer"],
      "On a monthly basis": [
        "Classic Dreamer",
        "Tormented Dreamer",
        "Networking Dreamer",
      ],
      "On a weekly basis": [
        "Networking Dreamer",
        "Dream Traveler",
        "Dream Time Traveler",
        "Dream Explorer",
        "Life Dreamer",
        "Crystalline Dreamer",
        "Divine Dreamer",
      ],
      "On a daily basis": [
        "Networking Dreamer",
        "Dream Traveler",
        "Dream Time Traveler",
        "Dream Explorer",
        "Life Dreamer",
        "Crystalline Dreamer",
        "Divine Dreamer",
      ]
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P1.svg",
  },
  {
    id: 2,
    type: "one selection",
    question: "Do you remember more than one dream when waking up or more than one dream a day? Up to how many?",
    options: {
      "I can't remember my dreams": [],
      "1 to 3 dreams": [],
      "4 to 6 dreams": [],
      "7 to 9 dreams": [],
      "10 to 12 dreams": [],
      "More than 12 dreams": [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P2.svg",
  },
  {
    id: 3,
    type: "multiple selection",
    question: "What do you most frequently dream about?",
    brackets: "(Choose as many options as you see fit.)",
    options: {
      "During the dreamstate I only hear my mind chatting": [
        "Potential Dreamer",
      ],
      "My dreams are symbolic and very emotional": ["Classic Dreamer"],
      "I have recurrent nightmares": ["Tormented Dreamer"],
      "I frequently encounter people -alive or dead-": ["Networking Dreamer"],
      "I am usually traveling": ["Dream Traveler"],
      "I frequently travel in time": ["Dream Time Traveler"],
      "I am awake in most of my dreams and choose what to experience": [
        "Dream Explorer",
      ],
      "I frequently dream in nature, with whales, dolphins, trees or crystals":
        ["Life Dreamer"],
      "I usually wake up with new and original ideas, surprising symbols or unheard music":
        ["Crystalline Dreamer"],
      "I dream of my Soul": ["Divine Dreamer"],
      "Other": [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P3.svg",
    columns: 2
  },
  {
    id: 4,
    type: "one selection",
    question: "How do you remember your dreams?",
    brackets:
      "(Choose the option that best describes your overall experience.)",
    options: {
      "I remember nothing when waking up": ["Potential Dreamer"],
      "In general, the scenes I recall are blurry": [
        "Classic Dreamer",
        "Tormented Dreamer",
      ],
      "Most of the time my dreams are clear": [
        "Networking Dreamer",
        "Dream Traveler",
      ],
      "My dreams are not only clear but vivid, as if I had been physically there":
        ["Dream Traveler", "Dream Time Traveler"],
      "I am a lucid dreamer (I am conscious within the dream)": [
        "Dream Explorer",
      ],
      "I usually wake up with no memories, only pure and intense feelings or certainties":
        ["Life Dreamer", "Crystalline Dreamer", "Divine Dreamer"],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P4.svg",
    columns: 2
  },
  {
    id: 5,
    type: "multiple selection",
    question: "If you have recurring dreams, what are the topics?",
    brackets: "(Choose as many options as you see fit.)",
    options: {
      "I don't have recurring dreams": [],
      "Battles or wars": ["Tormented Dreamer"],
      Persecutions: ["Tormented Dreamer"],
      "Financial or health concerns": ["Tormented Dreamer"],
      "Ghosts, demons or dark forces": ["Tormented Dreamer"],
      Food: ["Classic Dreamer"],
      "Alcohol, drugs or smoking": ["Classic Dreamer"],
      Sex: ["Classic Dreamer"],
      "Never reaching destination": ["Classic Dreamer"],
      "Family related dreams": ["Networking Dreamer"],
      "Relationships (partners, friends, acquaintances)": [
        "Networking Dreamer",
      ],
      "Encountering angels or ascended masters": ["Networking Dreamer"],
      "Other": [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P5.svg",
    columns: 2
  },
  {
    id: 6,
    type: "multiple selection",
    question: "Can you identify the time in which your dreams take place?",
    brackets: "(Choose as many options as you see fit.)",
    options: {
      "I don't remember my dreams": ["Potential Dreamer"],
      "Yes, I often go to the past or the future or change timelines": [
        "Dream Time Traveler",
        "Dream Explorer",
        "Crystalline Dreamer",
      ],
      "I feel that if I travel in time I always go to the past": [
        "Tormented Dreamer",
        "Dream Time Traveler",
      ],
      "I feel that my dreams are prophetic": [
        "Dream Time Traveler",
        "Crystalline Dreamer",
      ],
      "I sometimes perceive myself outside of time": ["Divine Dreamer"],
      "Never, I believe my dreams always occur in the present moment": [
        "Classic Dreamer",
        "Tormented Dreamer",
        "Networking Dreamer",
      ],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P6.svg",
    columns: 2,
  },
  {
    id: 7,
    type: "multiple selection",
    question: "How do you usually feel when waking up?",
    brackets: "(Choose as many options as you see fit.)",
    options: {
      "Mentally drained, frustrated": ["Potential Dreamer"],
      "Confused, befuddled, emotional, stirred": ["Classic Dreamer"],
      "Choked, suffocated, sweaty, panicky": ["Tormented Dreamer"],
      "Pleased, satisfied, appreciative, charmed, fulfilled": [
        "Networking Dreamer",
      ],
      "Liberated, excited, thrilled, passionate, in awe": [
        "Dream Traveler",
        "Dream Time Traveler",
        "Dream Explorer",
      ],
      "Blissful, joyful, loving, grateful": ["Life Dreamer"],
      "Shocked, inspired": ["Crystalline Dreamer"],
      "Worn out, stirred, bone weary, transformed": ["Divine Dreamer"],
      "None of the above": [],
      "All of the above": [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P7.svg",
    columns: 2,
  },
  {
    id: 8,
    type: "one selection",
    question: "Can you tell a story when waking up?",
    brackets: "(Choose the option that best describes your overall experience)",
    options: {
      "Not at all": ["Potential Dreamer", "Classic Dreamer"],
      "Not really, my dreams seem surrealist and illogical": [
        "Classic Dreamer",
        "Tormented Dreamer",
      ],
      "Yes, I can relay a story": [
        "Tormented Dreamer",
        "Networking Dreamer",
        "Dream Traveler",
        "Dream Time Traveler",
        "Dream Explorer",
      ],
      "I only bring back a feeling": [
        "Crystalline Dreamer",
        "Life Dreamer",
        "Divine Dreamer",
      ],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P8.svg",
  },
  {
    id: 9,
    type: "one selection",
    question:
      "On a scale from 1 to 3, how easily can you derive meaning from your dreams?",
    options: {
      "1: I never know what they mean": [],
      "2: Sometimes I know what they mean, sometimes I don't": [],
      "3: I usually have clarity of what my dreams mean": [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P9.svg",
  },
  {
    id: 10,
    type: "multiple selection",
    question: "How do you enter the dreaming landscapes?",
    brackets: "(Choose as many options as you see fit.)",
    options: {
      "I don't think I enter the dreaming landscapes at all": [
        "Potential Dreamer",
      ],
      "Normal Dreaming. I fall asleep and remember my dreams when waking up": [
        "Classic Dreamer",
        "Tormented Dreamer",
      ],
      "Astral Traveling. I project my energy body outside of my physical body within my dreams or in my waking state (it feels as if you where physically out there)":
        ["Networking Dreamer", "Dream Traveler", "Dream Time Traveler"],
      "Lucid Dreaming. I am conscious within my dreams while being asleep": [
        "Dream Explorer",
      ],
      "Dreamwalking or by WAKE (Wake Initiated Lucid Dreaming). I enter the dreaming landscapes from the waking state":
        ["Life Dreamer", "Crystalline Dreamer"],
      "Integrated Dreaming. I feel I am dreaming while awake or that the gate to the dreaming landscapes remains open":
        ["Crystalline Dreamer", "Divine Dreamer"],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P10.svg",
    columns: 2,
  },
  {
    id: 11,
    type: "one selection",
    question:
      "In your dreams, have you seen symbols, archetypes and/or there is an element -earth, air, water, fire- present?",
    shortQuestion: true,
    options: {
      Yes: ["Classic Dreamer"],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P11.svg",
  },
  {
    id: 12,
    type: "one selection",
    question:
      "Have you received messages, information or have you been healed in dreams?",
    shortQuestion: true,
    options: {
      Yes: ["Networking Dreamer"],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P12.svg",
  },
  {
    id: 13,
    type: "one selection",
    question: "In your dreams, have you encountered devic beings?",
    brackets:
      "(Goblins, gnomes, gorks, fauns, elves, mermaids, nereids and the like.)",
    shortQuestion: true,
    options: {
      Yes: ["Life Dreamer"],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P13.svg",
  },
  {
    id: 14,
    type: "one selection",
    question:
      "Have you dreamt of encountering loved ones that passed away a long time ago?",
    shortQuestion: true,
    options: {
      Yes: ["Tormented Dreamer", "Dream Explorer"],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P14.svg",
  },
  {
    id: 15,
    type: "multiple selection",
    question: "Have you ever experienced the following in your dreams?",
    options: {
      "I have been to places that I know": ["Dream Traveler"],
      "I have been to places that I have never been before in the 3D": [
        "Dream Traveler",
      ],
      "I have been to space": ["Dream Traveler"],
      "None of the above": [],
      "Other": ["Dream Traveler"],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P15.svg",
  },
  {
    id: 16,
    type: "one selection",
    question:
      "In your dreams, have you seen mythical creatures or animals that do not exist on this planet?",
    shortQuestion: true,
    options: {
      Yes: ["Crystalline Dreamer"],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P16.svg",
  },
  {
    id: 17,
    type: "one selection",
    question: "Do you believe some of your dreams are prophetic?",
    shortQuestion: true,
    options: {
      Yes: ["Dream Time Traveler"],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P17.svg",
  },
  {
    id: 18,
    type: "one selection",
    question: "Have you ever dreamt of encountering your Soul?",
    shortQuestion: true,
    options: {
      Yes: ["Divine Dreamer"],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P18.svg",
  },
  {
    id: 19,
    type: "multiple selection",
    question: "Have you ever experienced the following in dreams?",
    brackets: "(Choose as many options as you see fit.)",
    options: {
      "I have woken up from one dream into another dream": [],
      "I have dreamt of watching myself being asleep": [],
      "When asleep, I have been aware that I am dreaming": [],
      "I have decided where I wanted to go in dreams and when waking up I remembered having been there":
        [],
      "I have entered the dreaming landscapes from my waking state": [],
      "I have felt that I am dreaming when awake": [],
      "I have felt that the door to the dreaming landscapes remains open after waking up":
        [],
      "None of the above": [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P19.svg",
    columns: 2,
  },
  {
    id: 20,
    type: "one selection",
    question: "Do you use a dreaming technique that has been effective?",
    shortQuestion: true,
    options: {
      Yes: [],
      No: [],
    },
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-P20.svg",
  },
  {
    id: 21,
    type: "one selection",
    question: "Would you like to remember more of your dreams?",
    shortQuestion: true,
    options: {
      Yes: [],
      No: [],
    },
    optional: {
      question: "Why? (Optional)",
    },
    image: "./images/Color/ATD-P21.svg",
  },
  {
    id: 22,
    type: "one selection",
    question: "Are you keeping a record of your dreams?",
    options: {
      "Yes, I use voice recording": [],
      "Yes, I use a notebook": [],
      "Yes, I use an app": [],
      No: [],
    },
    optional: {
      question:
        "Any comments? [Optional] Ex. Which app do you use? Is your app useful? Do you keep your records forever? Do you want to organize them? What do you want from a dream app?",
    },
    image: "./images/Color/ATD-P22.svg",
  },
  {
    id: 23,
    type: "one selection",
    question: "Who inspires your spiritual path?",
    brackets: "(In alphabetical order.)",
    options: {
      "Aaron Abke": [],
      "Adyashanti": [],
      "Caroline Myss": [],
      "Adamus Saint Germain, Kuthumi & Tobias trough Geoffrey Hoppe": ["Shaumbra"],
      "Deepak Chopra": [],
      "Eckhart Tolle": [],
      "Gurudev Sri Sri Ravi Shankar": [],
      "Jim Self": [],
      "Kryon & Lee Carrol": [],
      "Lee Harris & The Zs": [],
      "Mooji": [],
      "Ram Dass": [],
      "Robert Theiss & Archangel Michael": [],
      "Rupert Spira": [],
      "Steve Rother": [],
      "Sadghuru": [],
      "Wayne Dyer": [],
      "Other": []
    },
    columns: 2,
    optional: {
      question: "Any comments? (Optional)",
    },
    image: "./images/Color/ATD-PS.svg",
    type: "multiple selection",
  },
  {
    id: 24,
    type: "one selection",
    question: "Please share with us one special dream you have had.",
    brackets: "(Optional)",
    options: { "Default": [] },
    optional: { question: " " },
    finalQuestion: true,
    image: "./images/Color/ATD-P23.svg",    
  },
];

export default quizData;
