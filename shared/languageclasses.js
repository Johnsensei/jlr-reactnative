export const LANGUAGECLASSES = [
    {
        id: 0,
        name: 'Japanese 1.0',
        image: require('./images/japanese-1-0.png'),
        description: "The class for total beginners.",
        content: ["Hiragana", "Greetings", "Self-introductions", "Counting to 99,999", "Money", "Asking where", "Ordering food"],
        prereqs: "Just a desire to learn. This is the class for total beginners.",
        featured: true,
    },
    {
        id: 1,
        name:'Japanese 1.1',
        image: require('./images/japanese-1-1.png'),
        description: "Level up by learning.",
        content: ["Katakana", "Telling time", "Asking when", "Verbs", "Negative Verbs", "Planning a trip", "Jobs", "Invitations"],
        prereqs: "Student should be able to read words and sentences all in hiragana characters with confidence. You should also know how to use the 〜は＿です sentence pattern to ask and answer questions. Basic greetings and numbers also required.",
        featured: false,
    },
    {
        id: 2,
        name:'Japanese 1.2',
        image: require('./images/japanese-1-2.png'),
        description: "Go farther with kanji.",
        content: ["Kanji", "Compound words", "Numbers in millions", "Asking why", "Giving reasons", "Paste tense verbs", "Asking directions", "Getting help"],
        prereqs: "Student should be able to read words and sentences all in hiragana and katakana characters with confidence. You should also know the basics of affirmative and negative present-tense verbs. Additional knowledge of numbers, such as telling time, also required.",
        featured: false,
    },
    {
        id: 3,
        name:'Japanese 1.3',
        image: require('./images/japanese-1-3.png'),
        description: "Expand your conversional abilities.",
        content: ["20 new Kanji", "Present Progressive Verbs", "Verbs of Being", "Adjectives", "Adverbs", "Making a Schedule", "Communicating with Coworkers", "Family"],
        prereqs: "Student should be able to read hiragana and katakana almost as if they were English, know the basics of kanji, and know at least 10 kanji already. You should also be able to handle numbers in the millions and verbs in the present and past tenses.",
        featured: false,
    }
];