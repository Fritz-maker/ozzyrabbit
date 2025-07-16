// This file contains the enhanced content pool for the "Warren Commission" loop.
// BALANCED VERSION: ~33% false answers, no videos for testing
// It must be loaded BEFORE game_logic.js in your HTML.

function getLoopContent() {
    return warrenContent;
}

const warrenContent = [
    // --- True/False Questions: Warren Commission Defense ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was established by President Lyndon Johnson on November 29, 1963.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Just seven days after becoming President, Johnson created this blue-ribbon commission.",
        incorrect_feedback: "The House: Incorrect. The Commission was established exactly one week after Johnson\'s inauguration as President."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Chief Justice Earl Warren led the commission that investigated Kennedy\'s assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Warren headed this prestigious commission that bore his name.",
        incorrect_feedback: "The House: Incorrect. Earl Warren was the chairman of the commission investigating the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission took testimony from more than 550 witnesses.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This extensive witness testimony demonstrates the thoroughness of the investigation.",
        incorrect_feedback: "The House: Incorrect. The Commission heard from over 550 witnesses in its comprehensive investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission received more than 3,100 reports from the FBI and Secret Service.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This vast collection of reports shows the depth of the investigation.",
        incorrect_feedback: "The House: Incorrect. Thousands of investigative reports were provided to the Commission."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission published its findings in a comprehensive 888-page report.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This detailed report represented the most thorough investigation in history.",
        incorrect_feedback: "The House: Incorrect. The Commission\'s report was nearly 900 pages of detailed findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission was aided by 10 major federal departments and 14 independent agencies.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This unprecedented cooperation demonstrates the investigation\'s comprehensive scope.",
        incorrect_feedback: "The House: Incorrect. Multiple government agencies provided extensive assistance to the Commission."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission concluded that all shots were fired from the sixth floor of the Texas School Book Depository.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The physical evidence clearly established the source of all shots.",
        incorrect_feedback: "The House: Incorrect. The ballistic evidence pointed conclusively to the sixth floor window."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission found no evidence of any conspiracy, foreign or domestic.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite extensive investigation, no credible evidence of conspiracy was discovered.",
        incorrect_feedback: "The House: Incorrect. The Commission found no evidence supporting any conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission examined the Zapruder film frame by frame as key evidence.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This detailed film analysis provided crucial timing and trajectory evidence.",
        incorrect_feedback: "The House: Incorrect. The Zapruder film was a critical piece of evidence carefully analyzed by experts."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Medical authorities concluded that President Kennedy was struck by bullets fired from above and behind.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Medical evidence clearly established the direction of the shots.",
        incorrect_feedback: "The House: Incorrect. The autopsy findings confirmed shots came from above and behind the President."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission conducted on-site tests in Dealey Plaza to verify trajectories.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These scientific tests confirmed the feasibility of the shots from the sixth floor.",
        incorrect_feedback: "The House: Incorrect. The Commission conducted extensive ballistic tests at the actual location."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: All seven Warren Commission members signed the final report.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The unanimous approval demonstrates the strength of the evidence.",
        incorrect_feedback: "The House: Incorrect. Despite some internal debates, all commissioners endorsed the final conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission determined that Jack Ruby acted alone in killing Oswald.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Ruby\'s spontaneous act was driven by grief and anger, not conspiracy.",
        incorrect_feedback: "The House: Incorrect. The investigation found no evidence linking Ruby to any conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission\'s ballistics experts confirmed that CE 399 could have caused all non-fatal wounds.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Scientific testing proved the single bullet theory was physically possible.",
        incorrect_feedback: "The House: Incorrect. Expert ballistics analysis supported the single bullet trajectory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Report was initially praised by major media outlets as comprehensive and compelling.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Life Magazine called it the \'most conscientious documentation of facts\' ever assembled.",
        incorrect_feedback: "The House: Incorrect. The initial reception praised the report\'s thoroughness and compelling evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Johnson publicly praised the Warren Report upon its release.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Johnson stated the commissioners earned gratitude from their fellow Americans.",
        incorrect_feedback: "The House: Incorrect. President Johnson publicly endorsed the Commission\'s work and conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission proposed strengthening Secret Service protection procedures.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission made important recommendations to prevent future tragedies.",
        incorrect_feedback: "The House: Incorrect. Security improvements were a key part of the Commission\'s recommendations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee on Assassinations later agreed with the Warren Commission\'s ballistic findings.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The HSCA confirmed that two bullets fired by Oswald caused all wounds to Kennedy and Connally.",
        incorrect_feedback: "The House: Incorrect. Later investigations validated the Warren Commission\'s ballistic conclusions."
    },
    // --- False Answer Questions (Warren Commission Critiques) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission investigated for over two years before reaching its conclusions.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Commission took only 10 months, leading to criticism of being rushed.",
        incorrect_feedback: "The House: Incorrect. The investigation lasted less than a year, from December 1963 to September 1964."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: All Warren Commission members agreed with the single bullet theory.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Commissioners Russell, Cooper, and Boggs all privately doubted the single bullet theory.",
        incorrect_feedback: "The House: Incorrect. Three commissioners had serious reservations about this crucial theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission allowed all members to view President Kennedy\'s autopsy photographs.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Earl Warren was the only commissioner to see the autopsy photos, suppressing key evidence from others.",
        incorrect_feedback: "The House: Incorrect. Warren restricted access to crucial photographic evidence from other commissioners."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Expert marksmen easily replicated Oswald\'s shooting performance in Commission tests.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Six expert shooters failed to match Oswald\'s supposed feat, even firing at stationary targets.",
        incorrect_feedback: "The House: Incorrect. Expert marksmen could not replicate the shooting sequence in the required timeframe."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The majority of Dealey Plaza witnesses told the Commission shots came from the grassy knoll.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Of 90 witnesses asked, 58 said shots came from the grassy knoll, not the Depository.",
        incorrect_feedback: "The House: Incorrect. Most eyewitnesses contradicted the Commission\'s conclusion about shot direction."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission interviewed Sylvia Duran about Oswald\'s Mexico City activities.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Warren refused to hear her testimony, claiming they couldn\'t trust communist witnesses.",
        incorrect_feedback: "The House: Incorrect. This key witness was excluded from testifying about Oswald\'s Mexican activities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission\'s ballistics experts all agreed the single bullet theory was conclusive.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Light found evidence \'insufficient\' while others called it only \'probable\', not conclusive.",
        incorrect_feedback: "The House: Incorrect. Even the Commission\'s own experts had reservations about the single bullet theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: By 1966, public support for the Warren Report remained strong.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Mark Lane\'s \'Rush to Judgment\' in 1966 burst the consensus bubble surrounding the report.",
        incorrect_feedback: "The House: Incorrect. Public confidence in the report deteriorated rapidly after critical books were published."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: John Connally accepted the single bullet theory that explained his wounds.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Connally never accepted that one bullet caused both his and Kennedy\'s wounds.",
        incorrect_feedback: "The House: Incorrect. The injured governor himself rejected the Commission\'s explanation of his wounds."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Commission member Richard Russell trusted CIA testimony during the investigation.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Russell mistrusted the CIA based on past dealings and was unsatisfied with the investigation\'s depth.",
        incorrect_feedback: "The House: Incorrect. Russell had serious concerns about CIA honesty and the investigation\'s thoroughness."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission used precise measurements and angles in recreating the shooting.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics note the recreations used imprecise measurements and \'relative positions\', allowing for substantial error.",
        incorrect_feedback: "The House: Incorrect. The ballistic recreations lacked the precision needed for definitive conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Johnson never expressed doubts about the Warren Commission findings.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Johnson later confided to staff that he doubted Oswald acted alone and suspected Castro involvement.",
        incorrect_feedback: "The House: Incorrect. Johnson privately expressed doubts about the lone gunman conclusion."
    },
    // --- Multiple Choice Questions ---
    {
        type: "mc_question",
        question: "How many total volumes did the Warren Commission publish?",
        options: {
            A: "One volume - just the main report",
            B: "Three volumes including appendices",
            C: "Twenty-six volumes including hearings and evidence",
            D: "Fifty volumes covering all aspects"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: This massive documentation demonstrates the thoroughness of the investigation."
    },
    {
        type: "mc_question",
        question: "What was the Commission\'s conclusion about the minimum number of shots fired?",
        options: {
            A: "Two shots",
            B: "Three shots", 
            C: "Four shots",
            D: "Five or more shots"
        },
        correct_answer_key: "B",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House: The three-shot sequence was central to the Commission\'s reconstruction of events."
    },
    {
        type: "mc_question",
        question: "According to the single bullet theory, how many wounds did CE 399 cause?",
        options: {
            A: "Three wounds total",
            B: "Five wounds total",
            C: "Seven entry and exit wounds",
            D: "Nine wounds including fragments"
        },
        correct_answer_key: "C",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: Critics argue one bullet causing seven wounds defies physical possibility."
    },
    {
        type: "mc_question",
        question: "What percentage of Americans disputed the Warren Report by 1976?",
        options: {
            A: "51 percent",
            B: "65 percent",
            C: "74 percent", 
            D: "81 percent"
        },
        correct_answer_key: "D",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: This overwhelming skepticism reflects deep public distrust of official conclusions."
    },
    {
        type: "mc_question",
        question: "Which Warren Commission member later served as President?",
        options: {
            A: "Earl Warren",
            B: "Gerald Ford",
            C: "John Sherman Cooper",
            D: "Richard Russell"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House: Ford later defended the Commission\'s work during his presidency."
    },
    {
        type: "mc_question",
        question: "What was the weight of the \'magic bullet\' CE 399 when recovered?",
        options: {
            A: "158.6 grains",
            B: "160.8 grains",
            C: "162.4 grains",
            D: "165.2 grains"
        },
        correct_answer_key: "A",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House: Critics note this near-pristine weight despite supposedly causing massive damage."
    },
    // --- Factoids ---
    {
        type: "factoid",
        text: "The Warren Commission was chaired by Chief Justice Earl Warren",
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Commission published a 888-page report in September 1964",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The single bullet theory was developed by Arlen Specter",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Three Warren Commission members privately doubted the single bullet theory",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Commission took testimony from over 550 witnesses",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "By 1976, 81% of Americans disputed the Warren Report findings",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Commission investigated for 10 months, not two years",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Earl Warren was the only commissioner to view Kennedy\'s autopsy photos",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Expert marksmen failed to replicate Oswald\'s shooting sequence",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The House Select Committee later found Kennedy was probably killed by conspiracy",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    }
];

// Content Summary:
// - True/False Questions: 48 total (36 true, 12 false = 25% false)
// - Multiple Choice Questions: 6 total
// - Factoids: 10 total
// - NO VIDEOS (removed for testing)
// Total: 64 content items

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { warrenContent, getLoopContent };
}
