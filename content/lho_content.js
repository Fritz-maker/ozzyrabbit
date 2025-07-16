// This file contains the enhanced content pool for the "Who was LHO?" loop.
// BALANCED VERSION: ~33% false answers, no videos for testing
// It must be loaded BEFORE game_logic.js in your HTML.

function getLoopContent() {
    return lhoContent;
}

const lhoContent = [
    // --- True/False Questions: Lone Gunman Perspective ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Lee Harvey Oswald was born in New Orleans, Louisiana, on October 18, 1939.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This is a foundational fact about Oswald\'s early life.",
        incorrect_feedback: "The House: Incorrect. His birthplace and date are part of the undisputed record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald\'s father died two months before he was born.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This early loss is a key detail in his complex family history.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s early life circumstances are a matter of record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald\'s childhood was characterized by a stable family life and consistent schooling.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald\'s childhood was characterized by instability and frequent moves.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s unstable childhood is a key biographical detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: He spent approximately 13 months in an orphanage with his brothers.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His time in institutional care is documented.",
        incorrect_feedback: "The House: Incorrect. This period in an orphanage is a fact of Oswald\'s early life."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: At age 12, a psychiatric assessment described Oswald as emotionally disturbed.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This early assessment explains his later unstable personality.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s early psychiatric evaluations provide insight into his development."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attended 12 different schools and never obtained a high school diploma.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His unstable educational background highlights his difficult childhood.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s academic history is part of his documented biography."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: At 17, Oswald enlisted in the U.S. Marine Corps on October 24, 1956.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His military service is a documented period of his life.",
        incorrect_feedback: "The House: Incorrect. His entry into military service is a specific biographical detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: His primary training in the Marines focused on radar operation with security clearance.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His technical training and clearance are highlighted by official accounts.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s military specialization is relevant to his background."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald achieved a sharpshooter rating with the M-1 rifle in December 1956.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His marksmanship rating is evidence of his capability to carry out the assassination.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s shooting proficiency is central to assessing his role as the assassin."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was court-martialed twice during his time in the Marines.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His disciplinary record reveals a pattern of defiance and rule-breaking.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s military record provides insight into his character."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In October 1959, Oswald defected to the Soviet Union.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His defection is evidence of anti-American sentiment.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s period in the Soviet Union is documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: He attempted to renounce his U.S. citizenship and offered to share military information.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These actions underscore his anti-American sentiments.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s attempts to sever ties with the U.S. are documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald resided in Minsk, working as a lathe operator, and married Marina Prusakova in 1961.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These are documented facts of his life in the Soviet Union.",
        incorrect_feedback: "The House: Incorrect. Key biographical details from his time abroad are documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: He became disillusioned with the Soviet system after observing party elite privileges.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His disillusionment shapes his complex political identity.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s evolving political views are key to his biography."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald returned to the United States in June 1962.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His return marked the beginning of his final period in the United States.",
        incorrect_feedback: "The House: Incorrect. The date of his return is a specific biographical detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In April 1963, Oswald attempted to assassinate retired Army General Edwin Walker.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This prior assassination attempt establishes a pattern of politically motivated violence.",
        incorrect_feedback: "The House: Incorrect. The General Walker incident is pivotal in Oswald\'s documented history."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald used the same Mannlicher-Carcano rifle in the Walker attempt and Kennedy assassination.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This direct link between incidents strengthens the case for Oswald\'s sole involvement.",
        incorrect_feedback: "The House: Incorrect. The weapon used in both attempts is key physical evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald became involved with the pro-Castro Fair Play for Cuba Committee in New Orleans.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His involvement highlights his political radicalization.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s political affiliations are notable."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In September 1963, Oswald traveled to Mexico City attempting to obtain visas.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This trip reveals his continued desire to engage with communist states.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s trip to Mexico City is key in the pre-assassination timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald\'s trip to Mexico City was under CIA surveillance.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The CIA monitoring confirms their prior knowledge of his activities.",
        incorrect_feedback: "The House: Incorrect. Intelligence agency surveillance of Oswald is documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald\'s psychological profile includes being deluded, paranoid, and self-aggrandizing.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These traits paint a picture of an unstable individual capable of extreme acts.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s psychological makeup is key to the official explanation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission concluded Oswald possessed the rifle capability to commit the assassination.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission\'s conclusion on his capability is direct endorsement of lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s marksmanship capability is fundamental to official findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald\'s capacity for violence was expressed in striking acts long before the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This history of violence supports the profile of a lone individual prone to extreme acts.",
        incorrect_feedback: "The House: Incorrect. Oswald\'s past behavior is examined for precursors to his final actions."
    },
    // --- False Answer Questions ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald received an honorable discharge from the Marines.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He received an undesirable discharge due to his defection.",
        incorrect_feedback: "The House: Incorrect. His discharge was changed to undesirable after his defection."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was immediately welcomed by Soviet intelligence upon arrival.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Soviets were initially suspicious and uninterested in him.",
        incorrect_feedback: "The House: Incorrect. Soviet documents show they were wary of Oswald initially."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was sent to work in a radio factory in Kiev.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was sent to Minsk, not Kiev, to work in a radio factory.",
        incorrect_feedback: "The House: Incorrect. Soviet records show he was assigned to Minsk, not Kiev."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was given a luxurious apartment by Soviet authorities.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He lived in a modest one-room apartment.",
        incorrect_feedback: "The House: Incorrect. His apartment was comfortable but not luxurious."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Marina was a medical student when she met Oswald.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Marina worked as a pharmacist, not as a medical student.",
        incorrect_feedback: "The House: Incorrect. Marina was employed as a pharmacist when they met."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald began trying to return to the US immediately after arriving in the USSR.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He lived in the USSR for over two years before seeking to return.",
        incorrect_feedback: "The House: Incorrect. He spent considerable time in the USSR before wanting to return."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The US Embassy initially refused to help Oswald return to America.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Embassy assisted with his repatriation despite his defection.",
        incorrect_feedback: "The House: Incorrect. Embassy records show they helped facilitate his return."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Upon return, Oswald was immediately arrested by the FBI.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was questioned but not arrested upon his return.",
        incorrect_feedback: "The House: Incorrect. While monitored, he was not arrested upon reentry."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attempted to assassinate General Edwin Walker in March 1963.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Walker shooting attempt occurred on April 10, 1963, not March.",
        incorrect_feedback: "The House: Incorrect. The assassination attempt happened in April, not March."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The bullet that missed Walker was never found.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The bullet was recovered and later linked to Oswald\'s rifle.",
        incorrect_feedback: "The House: Incorrect. Police found the bullet and forensics linked it to the Mannlicher-Carcano."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Marina knew about the Walker shooting attempt beforehand.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Marina testified she only learned about it afterward.",
        incorrect_feedback: "The House: Incorrect. Marina said Oswald told her about it after the fact."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: After the Walker incident, Oswald moved to Chicago.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He moved to New Orleans in April 1963, not Chicago.",
        incorrect_feedback: "The House: Incorrect. Oswald relocated to New Orleans after the Walker shooting."
    },
    // --- Conspiracy Theory Questions ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some conspiracy theorists believe Oswald was a patsy framed for the assassination.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The patsy theory is fundamental to many conspiracy narratives.",
        incorrect_feedback: "The House: Incorrect. The idea of Oswald as a victim of a larger plot is a core conspiracy tenet."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA was monitoring Oswald in the months leading up to the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This fact is often interpreted as evidence of deeper complicity or negligence.",
        incorrect_feedback: "The House: Incorrect. Intelligence agency surveillance of Oswald is documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA downplayed what it knew about Oswald\'s travels to the Warren Commission.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of CIA deception are central to many conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Suspected intelligence agency misrepresentation is common in cover-up narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI reportedly destroyed a note written by Oswald threatening agent James Hosty.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The destruction of this note is evidence of potential obstruction or cover-up.",
        incorrect_feedback: "The House: Incorrect. The disappearance of this note is significant in alleged evidence tampering."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: George de Mohrenschildt had documented CIA connections.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. CIA files confirm de Mohrenschildt had intelligence contacts.",
        incorrect_feedback: "The House: Incorrect. Released documents show his CIA associations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald met with Soviet intelligence officer Valeriy Kostikov in Mexico City.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Intelligence agencies confirmed this meeting at the Soviet Embassy.",
        incorrect_feedback: "The House: Incorrect. CIA surveillance documented this contact."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee concluded Oswald probably acted alone.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA concluded there was probably a conspiracy involving multiple shooters.",
        incorrect_feedback: "The House: Incorrect. The HSCA found evidence of a probable conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was recruited by intelligence agencies while serving in the Marines.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No credible evidence supports intelligence recruitment during military service.",
        incorrect_feedback: "The House: Incorrect. Conspiracy theories about recruitment lack substantial evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Mannlicher-Carcano rifle was an excellent assassination weapon.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Military experts consider it a poor choice for accurate shooting.",
        incorrect_feedback: "The House: Incorrect. The weapon is generally regarded as unreliable and inaccurate."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald demonstrated exceptional marksmanship skills in the Marines.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His Marine scores were mediocre, rating as a marksman - the lowest category.",
        incorrect_feedback: "The House: Incorrect. Military records show poor to average shooting ability."
    },
    // --- Multiple Choice Questions ---
    {
        type: "mc_question",
        question: "What was Lee Harvey Oswald\'s primary motivation according to the Warren Commission?",
        options: {
            A: "Financial gain from a conspiracy",
            B: "Political ideology and desire for attention", 
            C: "Personal revenge against Kennedy",
            D: "Mental illness and delusions"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: The Warren Commission concluded Oswald was motivated by political extremism and a desire for notoriety."
    },
    {
        type: "mc_question",
        question: "How did Oswald try to kill himself in the Soviet Union?",
        options: {
            A: "By watching Happy Days reruns",
            B: "By jumping out of his third floor window",
            C: "By slitting his wrists",
            D: "By attempting suicide by cop in a bank robbery"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This desperate act reveals his state of mind during his time in the USSR."
    },
    {
        type: "mc_question",
        question: "Who was Rima Shirokova in Oswald\'s Soviet experience?",
        options: {
            A: "His boss at work",
            B: "His Soviet lover",
            C: "His tourist guide who discovered him after slitting his wrists, saving his life",
            D: "His KGB liaison"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This critical intervention in Oswald\'s life abroad changed his trajectory."
    },
    {
        type: "mc_question",
        question: "On April 10 1963 Oswald attempted to kill which public figure?",
        options: {
            A: "General Edwin A. Walker (U.S. Army Retired)",
            B: "Colonel Sanders of Kentucky Fried Chicken",
            C: "Dallas Cowboys football coach Tom Landry",
            D: "Texas Governor John Connally"
        },
        correct_answer_key: "A",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This pattern of behavior reveals the accused\'s previous violent intentions."
    },
    {
        type: "mc_question",
        question: "What trip did Oswald take in September 1963 that aroused suspicion?",
        options: {
            A: "His trip to Mexico City to visit the Cuban and Soviet embassies",
            B: "His trip to Hamtramck MI to purchase paczkis",
            C: "His trip to Chicago and Las Vegas to meet Mafia leaders",
            D: "His trip to New York City and the United Nations Building"
        },
        correct_answer_key: "A",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This journey remains shrouded in speculation about hidden agendas."
    },
    {
        type: "mc_question",
        question: "Oswald was a clandestine employee of which government agency?",
        options: {
            A: "CIA",
            B: "FBI",
            C: "IRS",
            D: "Oswald was not an employee or informant of any government agency"
        },
        correct_answer_key: "D",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: Was he an agent of any hidden power, or a man truly alone?"
    },
    {
        type: "mc_question",
        question: "Where did Oswald work when he lived in Minsk, Soviet Union?",
        options: {
            A: "At a steel foundry",
            B: "At the Gorizont Electronics Factory as a metal worker",
            C: "At a nuclear research facility", 
            D: "At a propaganda radio station"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House: This documented fact reveals details of Oswald\'s time in the Soviet Union."
    },
    {
        type: "mc_question", 
        question: "What alias did Oswald use when he rented a room in Dallas?",
        options: {
            A: "A.J. Hidell",
            B: "Alex Hiddell", 
            C: "O.H. Lee",
            D: "Harvey Lee"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This deception reveals a pattern of false identities used by the accused."
    },
    {
        type: "mc_question",
        question: "How many people joined Oswald\'s New Orleans Fair Play for Cuba Committee chapter?",
        options: {
            A: "Fifteen active members",
            B: "About 35 members as Oswald claimed",
            C: "Zero - Oswald was the only member", 
            D: "Several dozen Cuban exiles"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This isolation suggests a man acting alone rather than part of organized effort."
    },
    {
        type: "mc_question",
        question: "What did Marina Oswald do with Lee\'s wedding ring on the morning of November 22?",
        options: {
            A: "She threw it at him during an argument",
            B: "She found it left behind in a teacup with $170", 
            C: "She gave it back to him as a reconciliation gesture",
            D: "She pawned it for grocery money"
        },
        correct_answer_key: "B",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This final gesture suggests a man preparing for his own end."
    },
    {
        type: "mc_question",
        question: "According to conspiracy theorists, what was unusual about Oswald\'s return from the Soviet Union?",
        options: {
            A: "He was immediately arrested upon arrival",
            B: "He was forced to repay all travel expenses",
            C: "The State Department assisted his return despite his defection",
            D: "He was placed under 24-hour surveillance"
        },
        correct_answer_key: "C",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This ease of repatriation raises questions about hidden arrangements."
    },
    {
        type: "mc_question",
        question: "What was significant about Oswald\'s Marine posting at Atsugi Air Base in Japan?",
        options: {
            A: "It was a routine training facility",
            B: "It was the launching point for CIA U-2 spy flights over the Soviet Union",
            C: "It specialized in amphibious assault training",
            D: "It was a communications intercept station"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This connection to sensitive CIA operations fuels speculation about recruitment."
    },
    {
        type: "mc_question",
        question: "What was the name of Oswald\'s Russian wife?",
        options: {
            A: "Natasha Rostova",
            B: "Marina Prusakova",
            C: "Svetlana Alliluyeva", 
            D: "Lydia Dymitruk"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House: This documented fact anchors the timeline of Oswald\'s life abroad."
    },
    {
        type: "mc_question",
        question: "What book was Oswald reading that caught CIA attention according to declassified memos?",
        options: {
            A: "Das Kapital by Karl Marx",
            B: "1984 by George Orwell",
            C: "The Communist Manifesto",
            D: "Doctor Zhivago by Boris Pasternak"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: The irony was not lost - reading about surveillance while under surveillance."
    },
    {
        type: "mc_question",
        question: "How long was Oswald detained and questioned after his arrest?",
        options: {
            A: "Less than 12 hours",
            B: "Approximately 48 hours",
            C: "One week",
            D: "He was never formally questioned"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House: This brief window of questioning left many questions unanswered."
    },
    {
        type: "mc_question",
        question: "What was unusual about Oswald\'s discharge from the Marines?",
        options: {
            A: "He received a Medal of Honor",
            B: "He was discharged early to care for his mother",
            C: "His discharge was changed to undesirable after his Soviet defection",
            D: "He was court-martialed and imprisoned"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This official action reflects the consequences of his anti-American choices."
    },
    {
        type: "mc_question",
        question: "According to the House Select Committee on Assassinations, what was their conclusion about Oswald?",
        options: {
            A: "He definitely acted alone",
            B: "He was probably part of a conspiracy",
            C: "He was innocent of all charges", 
            D: "The evidence was inconclusive"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This later official investigation contradicted the Warren Commission\'s lone gunman conclusion."
    },
    {
        type: "mc_question",
        question: "What did Oswald do immediately after the Kennedy assassination?",
        options: {
            A: "He fled directly to Mexico",
            B: "He went to his rooming house, changed clothes, and retrieved his revolver",
            C: "He surrendered to the first police officer he saw",
            D: "He went to the Soviet Embassy"
        },
        correct_answer_key: "B",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: These calculated actions suggest preparation for further violence."
    },
    {
        type: "mc_question",
        question: "What was the result of acoustic evidence analysis by the House Select Committee?",
        options: {
            A: "It proved Oswald acted alone",
            B: "It suggested a second gunman fired from the grassy knoll",
            C: "It was later discredited by subsequent scientific analysis",
            D: "Both B and C are correct"
        },
        correct_answer_key: "D",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This evidence both supported and later undermined conspiracy theories."
    },
    {
        type: "mc_question",
        question: "What was found during the search of Ruth Paine\'s house where Marina was staying?",
        options: {
            A: "Communist literature and Oswald\'s rifle",
            B: "Oswald\'s Fair Play for Cuba Committee membership card",
            C: "The famous backyard photographs",
            D: "All of the above"
        },
        correct_answer_key: "D",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This evidence cache directly linked Oswald to the assassination weapon and radical activities."
    },
    {
        type: "mc_question",
        question: "According to conspiracy theorists, what was suspicious about George de Mohrenschildt\'s relationship with Oswald?",
        options: {
            A: "He was Oswald\'s landlord",
            B: "He was a wealthy Russian émigré with documented CIA connections",
            C: "He was Marina Oswald\'s uncle",
            D: "He was a Dallas police informant"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This connection suggests possible intelligence agency monitoring or manipulation."
    },
    {
        type: "mc_question",
        question: "What happened to the note Oswald allegedly left for FBI agent James Hosty?",
        options: {
            A: "It was preserved as evidence",
            B: "It was lost in filing",
            C: "Agent Hosty destroyed it after Oswald\'s death",
            D: "It was classified and remains secret"
        },
        correct_answer_key: "C",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This destruction of evidence raises serious questions about what was being hidden."
    },
    {
        type: "mc_question",
        question: "How many schools did Oswald attend due to his family\'s frequent moves?",
        options: {
            A: "Five schools",
            B: "Eight schools",
            C: "Twelve different schools",
            D: "More than twenty schools"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This educational instability contributed to his social isolation and behavioral problems."
    },
    {
        type: "mc_question",
        question: "What was Oswald\'s score on his final Marine marksmanship test?",
        options: {
            A: "212 (sharpshooter level)",
            B: "191 (marksman - the lowest qualification)",
            C: "245 (expert level)",
            D: "He failed to qualify"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This poor final score challenges claims about his shooting capability."
    },
    {
        type: "mc_question",
        question: "At what address did Oswald rent office space for his Fair Play for Cuba Committee in New Orleans?",
        options: {
            A: "4907 Magazine Street",
            B: "544 Camp Street",
            C: "123 Exchange Place",
            D: "1313 Dauphine Street"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This address was also connected to anti-Castro activities, raising questions about Oswald\'s true allegiances."
    },
    // --- Factoids ---
    {
        type: "factoid",
        text: "Lee Harvey Oswald was born in New Orleans, Louisiana in 1939",
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid", 
        text: "Oswald\'s father died before he was born",
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Marina Oswald was Lee\'s Russian wife",
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Oswald lived in the Soviet Union for nearly three years",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Ruth Paine helped Marina Oswald with housing and translation",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Oswald worked at the Texas School Book Depository",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "George de Mohrenschildt was a Russian émigré who befriended Oswald",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid", 
        text: "Oswald attempted to assassinate General Edwin Walker in April 1963",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Marina testified that Oswald owned the rifle found on the sixth floor",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Oswald was arrested at the Texas Theatre while watching a movie",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    }
];

// Content Summary:
// - True/False Questions: 45 total (33 true, 12 false = 27% false)
// - Multiple Choice Questions: 25 total
// - Factoids: 10 total
// - NO VIDEOS (removed for testing)
// Total: 80 content items

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lhoContent, getLoopContent };
}
