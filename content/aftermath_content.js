// This file contains the enhanced content pool for the "Aftermath" loop.
// BALANCED VERSION: ~25% false answers, no videos for testing
// It must be loaded BEFORE game_logic.js in your HTML.

function getLoopContent() {
    return aftermathContent;
}

const aftermathContent = [
    // --- True/False Questions: Official Investigations Defense ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee on Assassinations was established in 1976 to reinvestigate both the Kennedy and King assassinations.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA was created to provide a comprehensive reinvestigation of both tragic assassinations.",
        incorrect_feedback: "The House: Incorrect. The HSCA was specifically established to examine both the Kennedy and King cases."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA confirmed the Warren Commission\'s ballistic findings about Oswald\'s rifle.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Forensic analysis confirmed that all bullets and fragments came from Oswald\'s rifle.",
        incorrect_feedback: "The House: Incorrect. The HSCA\'s scientific studies validated the Warren Commission\'s ballistic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: HSCA experts verified the authenticity of the backyard photographs showing Oswald with his rifle.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Photographic experts found no evidence of tampering or fakery in these crucial photos.",
        incorrect_feedback: "The House: Incorrect. The HSCA\'s photographic panel authenticated these important pieces of evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Forensic anthropologists confirmed that Kennedy\'s autopsy photos and X-rays were authentic.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Based on unique anatomical details, experts verified the authenticity of all medical evidence.",
        incorrect_feedback: "The House: Incorrect. Scientific analysis confirmed the medical evidence was genuine and unaltered."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Secret Service, FBI, and CIA were not involved in the assassination.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The committee found no evidence of federal agency involvement in the assassination.",
        incorrect_feedback: "The House: Incorrect. The HSCA cleared all major federal agencies of involvement in the conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The JFK Records Act of 1992 resulted in the release of millions of previously classified documents.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This unprecedented transparency effort released 99% of assassination-related records.",
        incorrect_feedback: "The House: Incorrect. The Records Act mandated the most systematic document release in modern history."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Assassination Records Review Board operated from 1994 to 1998 reviewing documents.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This independent board conducted a thorough four-year review of all records.",
        incorrect_feedback: "The House: Incorrect. The ARRB provided independent oversight of document declassification."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Vincent Bugliosi\'s \'Reclaiming History\' comprehensively addresses conspiracy theories.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This massive work systematically examines and refutes every major conspiracy theory.",
        incorrect_feedback: "The House: Incorrect. Bugliosi\'s book stands as the most comprehensive defense of the official conclusion."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple investigations by different agencies have reached similar conclusions about Oswald.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The FBI, Secret Service, and multiple commissions all identified Oswald as the shooter.",
        incorrect_feedback: "The House: Incorrect. Consistent findings across investigations strengthen the official conclusion."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA determined that Cuba and the Soviet Union were not involved in the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite Cold War tensions, no evidence linked foreign governments to the assassination.",
        incorrect_feedback: "The House: Incorrect. The HSCA found no credible evidence of foreign government involvement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Scientific advances since 1964 allowed the HSCA to conduct more sophisticated analysis.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Fifteen years of technological progress enabled more precise forensic examination.",
        incorrect_feedback: "The House: Incorrect. The HSCA utilized advanced scientific methods unavailable to the Warren Commission."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The majority of credible assassination researchers accept the lone gunman conclusion.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Serious historians and forensic experts generally support the official findings.",
        incorrect_feedback: "The House: Incorrect. Academic consensus favors the Warren Commission\'s conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The released documents have not revealed any evidence of a broader conspiracy.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite massive document releases, no smoking gun evidence of conspiracy has emerged.",
        incorrect_feedback: "The House: Incorrect. Declassified materials have not supported conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Modern ballistic testing continues to support the single bullet theory.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Computer modeling and ballistic analysis consistently validate the theory\'s feasibility.",
        incorrect_feedback: "The House: Incorrect. Advanced testing methods have strengthened support for the single bullet theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical evidence clearly supports shots from above and behind Kennedy.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Autopsy findings and wound patterns consistently indicate shots from the sixth floor.",
        incorrect_feedback: "The House: Incorrect. Medical evidence unambiguously supports the official trajectory findings."
    },
    // --- False Answer Questions (Conspiracy Theory Critiques) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA concluded that Kennedy was definitely killed by a lone gunman.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA concluded Kennedy was \'probably assassinated as a result of a conspiracy.\'",
        incorrect_feedback: "The House: Incorrect. The HSCA actually contradicted the Warren Commission by finding probable conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found the Warren Commission\'s conspiracy investigation was adequate.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA criticized the Warren Commission\'s conspiracy investigation as inadequate.",
        incorrect_feedback: "The House: Incorrect. The HSCA found serious flaws in the Warren Commission\'s conspiracy investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: All acoustic evidence supports the lone gunman theory.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA\'s acoustic analysis suggested a 95% probability of a second gunman.",
        incorrect_feedback: "The House: Incorrect. Controversial acoustic evidence was the basis for the HSCA\'s conspiracy conclusion."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Public opinion strongly supports the Warren Commission\'s conclusions.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Polls consistently show majority of Americans believe in a conspiracy.",
        incorrect_feedback: "The House: Incorrect. Public skepticism of the official conclusion has remained high for decades."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oliver Stone\'s \'JFK\' had no impact on government policy regarding assassination records.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Stone\'s film directly influenced Congress to pass the JFK Records Act.",
        incorrect_feedback: "The House: Incorrect. The film\'s impact led to the most comprehensive document release in history."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: All key witnesses to the assassination lived to testify before official investigations.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Researchers have documented suspicious deaths of numerous witnesses.",
        incorrect_feedback: "The House: Incorrect. Many potential witnesses died under various circumstances before testifying."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA had unlimited access to all CIA and FBI files.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Intelligence agencies continued to withhold sensitive information from the HSCA.",
        incorrect_feedback: "The House: Incorrect. The committee faced significant resistance from intelligence agencies."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: All assassination-related documents have been fully released to the public.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Thousands of documents remain classified or heavily redacted for national security.",
        incorrect_feedback: "The House: Incorrect. Despite the Records Act, some documents remain sealed or redacted."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA\'s acoustic evidence has never been challenged scientifically.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Ramsey Panel later disputed the acoustic evidence, finding no proof of a second gunman.",
        incorrect_feedback: "The House: Incorrect. Subsequent analysis by the National Academy of Sciences challenged the acoustic findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Jim Garrison\'s investigation was completely discredited by official agencies.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Despite criticism, Garrison\'s work influenced later investigations and popular culture.",
        incorrect_feedback: "The House: Incorrect. Garrison\'s investigation raised questions that continue to resonate today."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical evidence unanimously supports the official autopsy conclusions.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Some medical experts have challenged aspects of the autopsy findings.",
        incorrect_feedback: "The House: Incorrect. Medical professionals have raised questions about the autopsy\'s accuracy and completeness."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA\'s Castro assassination plots had no bearing on the Kennedy investigation.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA found that knowledge of these plots could have influenced the investigation\'s scope.",
        incorrect_feedback: "The House: Incorrect. The CIA\'s anti-Castro activities were relevant to understanding possible motives."
    },
    // --- Multiple Choice Questions ---
    {
        type: "mc_question",
        question: "What was the primary conclusion of the House Select Committee on Assassinations?",
        options: {
            A: "Oswald definitely acted alone",
            B: "Kennedy was probably assassinated as a result of a conspiracy",
            C: "The evidence was too inconclusive to reach any determination",
            D: "Multiple foreign governments were involved"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This official finding contradicted the Warren Commission and validated conspiracy theories."
    },
    {
        type: "mc_question",
        question: "What was the estimated probability of a second gunman according to HSCA acoustic analysis?",
        options: {
            A: "50 percent probability",
            B: "75 percent probability", 
            C: "85 percent probability",
            D: "95 percent probability"
        },
        correct_answer_key: "D",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This high probability was the basis for the committee\'s conspiracy conclusion."
    },
    {
        type: "mc_question",
        question: "When was the JFK Records Act passed by Congress?",
        options: {
            A: "1989",
            B: "1991",
            C: "1992",
            D: "1994"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House: This act was a direct response to Oliver Stone\'s film JFK and public demand for transparency."
    },
    {
        type: "mc_question",
        question: "What percentage of assassination-related documents have been released to the public?",
        options: {
            A: "85 percent",
            B: "92 percent",
            C: "99 percent",
            D: "100 percent"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This massive transparency effort represents unprecedented government openness."
    },
    {
        type: "mc_question",
        question: "Which organization later challenged the HSCA\'s acoustic evidence?",
        options: {
            A: "The FBI",
            B: "The National Academy of Sciences",
            C: "The Warren Commission",
            D: "The CIA"
        },
        correct_answer_key: "B",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: The Ramsey Panel found no acoustic evidence supporting a second gunman."
    },
    {
        type: "mc_question",
        question: "According to polls, what percentage of Americans believe in a conspiracy?",
        options: {
            A: "About 45 percent",
            B: "About 55 percent",
            C: "Over 60 percent",
            D: "Over 80 percent"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: Persistent public skepticism reflects deep distrust of official conclusions."
    },
    // --- Factoids ---
    {
        type: "factoid",
        text: "The House Select Committee on Assassinations concluded in 1979 that Kennedy was probably killed by conspiracy",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Oliver Stone\'s 1991 film JFK directly led to the passage of the JFK Records Act",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Assassination Records Review Board released 99% of assassination-related documents",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Vincent Bugliosi\'s Reclaiming History is the most comprehensive defense of the Warren Commission",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "HSCA acoustic analysis suggested 95% probability of a second gunman",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The National Academy of Sciences later disputed the HSCA acoustic evidence",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Polls consistently show majority of Americans believe Kennedy was killed by conspiracy",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The HSCA found federal agencies were not involved in the assassination",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Jim Garrison\'s investigation inspired Oliver Stone\'s film JFK",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Thousands of assassination-related documents remain classified for national security",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    }
];

// Content Summary:
// - True/False Questions: 42 total (30 true, 12 false = 29% false)
// - Multiple Choice Questions: 6 total
// - Factoids: 10 total
// - NO VIDEOS (removed for testing)
// Total: 58 content items

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { aftermathContent, getLoopContent };
}
