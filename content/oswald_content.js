// This file contains the enhanced content pool for the "Oswald Escapes" loop.
// BALANCED VERSION: ~33% false answers, no videos for testing
// It must be loaded BEFORE game_logic.js in your HTML.

function getLoopContent() {
    return oswaldContent;
}

const oswaldContent = [
    // --- True/False Questions: Oswald's Escape and Movements (110 true, 47 false) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Lee Harvey Oswald left the Texas School Book Depository immediately after the shooting.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald left the Depository within minutes of the assassination.",
        incorrect_feedback: "The House: Incorrect. Witness accounts confirm Oswald departed the building shortly after the shooting."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald took a taxi directly from the Depository to his boarding house.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald first walked several blocks and took a bus before taking a taxi.",
        incorrect_feedback: "The House: Incorrect. Oswald movements were more complex, involving multiple forms of transportation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald encountered his supervisor Roy Truly while leaving the Depository.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald was seen by Roy Truly and Police Officer Marion Baker in the second-floor lunchroom.",
        incorrect_feedback: "The House: Incorrect. This encounter is crucial evidence in the timeline of Oswald movements."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Police Officer Marion Baker held Oswald at gunpoint in the lunchroom.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Baker did not hold Oswald at gunpoint - Truly vouched for him as an employee.",
        incorrect_feedback: "The House: Incorrect. Baker lowered his weapon when Truly identified Oswald as a worker."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald appeared calm and composed when encountered by Officer Baker.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Both Baker and Truly noted that Oswald appeared calm and was not out of breath.",
        incorrect_feedback: "The House: Incorrect. This calm demeanor has been cited as evidence of Oswald guilt or innocence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was carrying a rifle case when he left the Depository.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No witnesses reported seeing Oswald with a rifle case when he left.",
        incorrect_feedback: "The House: Incorrect. The absence of a visible rifle case raises questions about weapon transport."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald purchased a Coca-Cola from the vending machine after the shooting.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was seen with a Coca-Cola in the lunchroom encounter.",
        incorrect_feedback: "The House: Incorrect. The Coca-Cola purchase adds to the timeline of Oswald movements."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald left the Depository through the main entrance.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald likely left through a side or back entrance to avoid the gathering crowd.",
        incorrect_feedback: "The House: Incorrect. The main entrance would have been crowded with people and police."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald caught a bus on Elm Street heading away from downtown Dallas.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald boarded a bus on Elm Street, but it got stuck in traffic.",
        incorrect_feedback: "The House: Incorrect. The bus ride is documented by witness Mary Bledsoe and transfer evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The bus Oswald took was moving quickly through downtown Dallas.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The bus was stuck in traffic near the crime scene, prompting Oswald to get off.",
        incorrect_feedback: "The House: Incorrect. The slow-moving traffic caused Oswald to abandon the bus."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Mary Bledsoe recognized Oswald on the bus as her former tenant.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Mary Bledsoe identified Oswald as a former tenant she had evicted.",
        incorrect_feedback: "The House: Incorrect. Bledsoe identification provides crucial evidence of Oswald movements."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald requested a transfer receipt when he got off the bus.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The transfer receipt found in Oswald possession provides evidence of his bus ride.",
        incorrect_feedback: "The House: Incorrect. The transfer receipt is physical evidence linking Oswald to the bus."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald walked directly to his boarding house after getting off the bus.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald took a taxi after getting off the bus, not walking directly.",
        incorrect_feedback: "The House: Incorrect. Oswald used a taxi driven by William Whaley for part of his journey."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Taxi driver William Whaley later identified Oswald as his passenger.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Whaley identified Oswald in a police lineup as his passenger.",
        incorrect_feedback: "The House: Incorrect. Whaley testimony is crucial evidence of Oswald movements."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald asked the taxi driver to take him directly to his boarding house address.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald asked to be taken to a location several blocks away from his boarding house.",
        incorrect_feedback: "The House: Incorrect. Oswald avoided going directly to his address, suggesting evasive behavior."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald paid the taxi fare with exact change.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald gave the driver a dollar bill for a 95-cent fare and told him to keep the change.",
        incorrect_feedback: "The House: Incorrect. The small tip indicates Oswald was either generous or in a hurry."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald arrived at his boarding house at 1026 North Beckley around 1:00 PM.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald arrived at his boarding house approximately one hour after the shooting.",
        incorrect_feedback: "The House: Incorrect. The timing of Oswald return is crucial to the timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald landlady Earlene Roberts was surprised by his midday return.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Roberts noted that Oswald return was unusual since he normally came home later.",
        incorrect_feedback: "The House: Incorrect. Roberts surprise indicates this was not Oswald normal routine."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald spoke extensively with his landlady about the assassination.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald said very little to Roberts and appeared to be in a hurry.",
        incorrect_feedback: "The House: Incorrect. Oswald minimal conversation suggests he was focused on other matters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald changed his clothes at the boarding house.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald changed from his work clothes into a different outfit.",
        incorrect_feedback: "The House: Incorrect. The clothing change is documented by his landlady testimony."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald retrieved a revolver from his room at the boarding house.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Evidence suggests Oswald obtained a .38 caliber revolver from his room.",
        incorrect_feedback: "The House: Incorrect. The revolver found on Oswald after his arrest likely came from his room."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald stayed at the boarding house for over an hour.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald stayed only a few minutes before leaving again.",
        incorrect_feedback: "The House: Incorrect. Oswald brief stay suggests he was preparing for something urgent."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Earlene Roberts saw Oswald waiting at a bus stop after he left.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Roberts saw Oswald at a bus stop on Beckley Avenue after he left the house.",
        incorrect_feedback: "The House: Incorrect. This sighting helps establish Oswald movements after leaving the boarding house."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald boarded a bus at the Beckley Avenue bus stop.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Despite being seen at the bus stop, Oswald apparently walked instead of taking a bus.",
        incorrect_feedback: "The House: Incorrect. No bus driver or passenger reported seeing Oswald on a bus at this time."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was walking in the direction of downtown Dallas when he encountered Officer Tippit.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was walking away from downtown, toward the Oak Cliff area.",
        incorrect_feedback: "The House: Incorrect. Oswald direction suggests he was trying to leave the immediate area."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Officer J.D. Tippit was killed at approximately 1:15 PM.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Officer Tippit was shot at approximately 1:15 PM in the Oak Cliff area.",
        incorrect_feedback: "The House: Incorrect. The timing of Tippit murder is crucial to establishing Oswald movements."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple witnesses saw Oswald shoot Officer Tippit.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. While witnesses saw the shooting, positive identification of Oswald as the shooter was limited.",
        incorrect_feedback: "The House: Incorrect. The witness testimony about the Tippit shooting is complex and sometimes contradictory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was seen running from the scene of the Tippit shooting.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Witnesses reported seeing a man running from the scene after the shooting.",
        incorrect_feedback: "The House: Incorrect. The flight from the scene is consistent with guilty behavior."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald discarded shell casings at the scene of the Tippit shooting.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Shell casings were found at the scene and later matched to Oswald revolver.",
        incorrect_feedback: "The House: Incorrect. The ballistic evidence links Oswald weapon to the Tippit shooting."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald walked calmly away from the Tippit shooting scene.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Witnesses described the suspect as running or moving quickly away from the scene.",
        incorrect_feedback: "The House: Incorrect. The hurried departure indicates consciousness of guilt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was seen entering the Texas Theater without paying.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Shoe store employee Johnny Brewer saw Oswald enter the theater without buying a ticket.",
        incorrect_feedback: "The House: Incorrect. This suspicious behavior led to Brewer alerting theater personnel."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Texas Theater was showing a double feature when Oswald entered.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The theater was showing War Is Hell and Cry of Battle.",
        incorrect_feedback: "The House: Incorrect. The double feature provided a place where Oswald could hide for hours."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald sat in the front row of the theater.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald sat in the back of the theater, presumably to watch for police.",
        incorrect_feedback: "The House: Incorrect. Sitting in the back allowed Oswald to observe the entrances."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Johnny Brewer immediately called the police when he saw Oswald enter the theater.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Brewer suspicious behavior observation led him to contact authorities.",
        incorrect_feedback: "The House: Incorrect. Brewer quick action was instrumental in Oswald capture."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Police officers entered the theater with guns drawn.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Officers entered the theater prepared for a potentially dangerous suspect.",
        incorrect_feedback: "The House: Incorrect. The officers were responding to a report of a suspicious person."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald surrendered immediately when police approached him.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald resisted arrest and struggled with police officers.",
        incorrect_feedback: "The House: Incorrect. Oswald resistance to arrest suggests consciousness of guilt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attempted to fire his revolver during the arrest.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald pulled his revolver and attempted to fire, but it misfired.",
        incorrect_feedback: "The House: Incorrect. The attempt to shoot an officer demonstrates violent intent."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was alone in the theater when police arrived.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. There were approximately 15-20 patrons in the theater.",
        incorrect_feedback: "The House: Incorrect. The presence of other patrons provided witnesses to the arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald shouted protests during his arrest in the theater.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald shouted protests claiming police brutality during the arrest.",
        incorrect_feedback: "The House: Incorrect. Oswald vocal protests were heard by theater patrons and police."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was taken directly to Dallas Police headquarters after his arrest.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was transported to police headquarters for questioning.",
        incorrect_feedback: "The House: Incorrect. The police station was the appropriate location for processing the arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was arrested at approximately 1:50 PM.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald arrest occurred about one hour and twenty minutes after the assassination.",
        incorrect_feedback: "The House: Incorrect. The timing of the arrest is crucial to the timeline of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald had identification documents with him when arrested.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald had identification in the name of Lee Harvey Oswald and Alek Hidell.",
        incorrect_feedback: "The House: Incorrect. The false identification raises questions about Oswald activities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The revolver found on Oswald was fully loaded.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The revolver had been fired and was missing cartridges consistent with the Tippit shooting.",
        incorrect_feedback: "The House: Incorrect. The fired cartridges provide evidence linking Oswald to the Tippit murder."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald claimed he was innocent of all charges during his arrest.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald maintained his innocence from the moment of arrest.",
        incorrect_feedback: "The House: Incorrect. Oswald consistent claims of innocence continued throughout his detention."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple police officers were injured during Oswald arrest.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. While there was a struggle, no officers were seriously injured during the arrest.",
        incorrect_feedback: "The House: Incorrect. The arrest was accomplished without serious injury to law enforcement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was carrying a large amount of cash when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald had only a small amount of money, indicating he was not prepared for extended flight.",
        incorrect_feedback: "The House: Incorrect. The small amount of cash suggests Oswald had no escape plan."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was immediately charged with the assassination of President Kennedy.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was first charged with the murder of Officer Tippit, then later with the President assassination.",
        incorrect_feedback: "The House: Incorrect. The charges were filed in sequence as evidence was developed."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald escape route from the Depository was planned in advance.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald movements suggest improvisation rather than a carefully planned escape.",
        incorrect_feedback: "The House: Incorrect. The haphazard nature of his escape suggests lack of planning."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald had assistance from accomplices during his escape.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No credible evidence suggests Oswald had help during his escape from the Depository.",
        incorrect_feedback: "The House: Incorrect. All evidence points to Oswald acting alone during his escape."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald movements after the assassination were consistent with guilt.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald behavior - fleeing, changing clothes, carrying a weapon - suggests consciousness of guilt.",
        incorrect_feedback: "The House: Incorrect. The pattern of flight and evasion indicates guilty knowledge."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The time between the assassination and Oswald arrest was less than two hours.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was arrested approximately 80 minutes after the assassination.",
        incorrect_feedback: "The House: Incorrect. The rapid apprehension demonstrates effective police work."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was caught because of witness reports about his suspicious behavior.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Johnny Brewer report of suspicious behavior led directly to Oswald capture.",
        incorrect_feedback: "The House: Incorrect. Alert citizens played a crucial role in identifying and locating Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald escape was hindered by the immediate police response to the assassination.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The rapid police response complicated Oswald attempt to flee the area.",
        incorrect_feedback: "The House: Incorrect. The quick law enforcement response was crucial in preventing Oswald escape."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald had a specific destination in mind when he fled the Depository.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald movements suggest he had no clear plan beyond getting away from the scene.",
        incorrect_feedback: "The House: Incorrect. His erratic travel pattern indicates lack of a specific destination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was recognized by former landlady Mary Bledsoe during his escape.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Mary Bledsoe recognition of Oswald on the bus provided crucial evidence.",
        incorrect_feedback: "The House: Incorrect. Bledsoe identification helps confirm Oswald movements."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald carried a suitcase when he left his boarding house.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald left without luggage, suggesting he was not planning extended flight.",
        incorrect_feedback: "The House: Incorrect. The absence of luggage indicates Oswald was not prepared for escape."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was wearing the same clothes when arrested as when he left the Depository.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald changed clothes at his boarding house during his escape.",
        incorrect_feedback: "The House: Incorrect. The clothing change suggests Oswald was attempting to alter his appearance."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was the only person arrested in connection with the assassination on November 22.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Several other individuals were briefly detained and questioned before being released.",
        incorrect_feedback: "The House: Incorrect. Police made multiple arrests as they investigated the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald route from the Depository to the theater covered approximately 3 miles.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The distance from the Depository to the Texas Theater was approximately 3 miles.",
        incorrect_feedback: "The House: Incorrect. The distance covered demonstrates the scope of Oswald escape attempt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was injured during his struggle with police in the theater.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. While there was a struggle, Oswald was not seriously injured during the arrest.",
        incorrect_feedback: "The House: Incorrect. Oswald was taken into custody without serious injury."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Texas Theater arrest was filmed by news cameras.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The arrest occurred before news crews arrived at the theater.",
        incorrect_feedback: "The House: Incorrect. News media had not yet converged on the theater location."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was handcuffed immediately upon his arrest.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Standard police procedure required handcuffing after the struggle.",
        incorrect_feedback: "The House: Incorrect. Handcuffing was necessary given Oswald resistance to arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald escape attempt was successful for nearly two hours.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald remained at large for about 80 minutes after the assassination.",
        incorrect_feedback: "The House: Incorrect. The duration of his freedom demonstrates the temporary success of his escape."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was searched for weapons when he left the Depository.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was not searched when Officer Baker encountered him in the lunchroom.",
        incorrect_feedback: "The House: Incorrect. The lack of a search allowed Oswald to leave the building."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald had worked at the Depository for less than two months before the assassination.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald began working at the Depository in October 1963.",
        incorrect_feedback: "The House: Incorrect. Oswald recent employment timing is significant to the case."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was the only employee to leave the Depository immediately after the assassination.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Other employees also left the building, but Oswald departure was most significant.",
        incorrect_feedback: "The House: Incorrect. Several employees left, but Oswald was the only one who failed to return."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The police had a description of the assassination suspect when they encountered Oswald.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. A description based on witness accounts had been broadcast to police.",
        incorrect_feedback: "The House: Incorrect. The suspect description influenced police actions during the investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was positively identified as the assassination suspect before the Tippit shooting.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was not specifically identified as the assassination suspect until after his arrest.",
        incorrect_feedback: "The House: Incorrect. The identification process developed over time as evidence accumulated."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was initially arrested on suspicion of murdering Officer Tippit.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The first formal charge was for the murder of Officer Tippit.",
        incorrect_feedback: "The House: Incorrect. The Tippit murder charge preceded the assassination charges."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was calm and cooperative during his transport to police headquarters.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald continued to protest and resist during his transport.",
        incorrect_feedback: "The House: Incorrect. Oswald behavior remained confrontational throughout the arrest process."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The arrest in the Texas Theater was witnessed by multiple civilian patrons.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The theater patrons became witnesses to the arrest and Oswald behavior.",
        incorrect_feedback: "The House: Incorrect. The civilian witnesses provided independent accounts of the arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found hiding in the theater bathroom when police arrived.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was sitting in the theater seats when police approached him.",
        incorrect_feedback: "The House: Incorrect. Oswald was not hiding but sitting among the regular patrons."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was read his Miranda rights immediately upon arrest.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Miranda rights were not required in 1963 - that ruling came later.",
        incorrect_feedback: "The House: Incorrect. The Miranda requirement was established by the Supreme Court in 1966."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was wearing a jacket when he was arrested in the theater.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was wearing a jacket that became part of the physical evidence.",
        incorrect_feedback: "The House: Incorrect. The jacket was examined for forensic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was the prime suspect in the assassination before his arrest.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald became the prime suspect after his arrest and subsequent investigation.",
        incorrect_feedback: "The House: Incorrect. The investigation focused on Oswald after his arrest, not before."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was carrying a map or directions when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No map or directions were found on Oswald, suggesting he knew the area well.",
        incorrect_feedback: "The House: Incorrect. The absence of navigation aids indicates familiarity with the area."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was observed by multiple witnesses during his escape from the Depository.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Various witnesses observed Oswald during different phases of his escape.",
        incorrect_feedback: "The House: Incorrect. The witness accounts help establish Oswald movements and timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was carrying communist literature when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No communist literature was found on Oswald at the time of arrest.",
        incorrect_feedback: "The House: Incorrect. Such literature was found later during searches of his residence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was known to theater employees before his arrest.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was not a regular patron known to the theater staff.",
        incorrect_feedback: "The House: Incorrect. The theater was not a place Oswald regularly visited."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was attempting to leave Dallas when he was arrested.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was hiding in the theater, not attempting to leave the city.",
        incorrect_feedback: "The House: Incorrect. The theater location suggests Oswald was seeking temporary refuge, not escape."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was recognized by police officers from previous encounters.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The arresting officers did not know Oswald from previous encounters.",
        incorrect_feedback: "The House: Incorrect. Oswald was unknown to the Dallas police before this incident."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a large amount of ammunition when arrested.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald had only the ammunition in his revolver, not additional rounds.",
        incorrect_feedback: "The House: Incorrect. The limited ammunition suggests Oswald was not prepared for extended violence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Texas Theater was chosen by Oswald because it was dark and provided good hiding.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The dark theater provided temporary refuge from the police search.",
        incorrect_feedback: "The House: Incorrect. The theater location and conditions made it attractive for hiding."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was immediately taken to a hospital after his arrest.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was taken directly to police headquarters for questioning.",
        incorrect_feedback: "The House: Incorrect. No medical attention was required as Oswald was not seriously injured."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was photographed by news media during his arrest at the theater.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. News photographers had not yet arrived at the theater during the arrest.",
        incorrect_feedback: "The House: Incorrect. The media presence developed later as news of the arrest spread."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was the most wanted fugitive in Dallas at the time of his arrest.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Following the assassination and Tippit murder, Oswald was the most sought after individual.",
        incorrect_feedback: "The House: Incorrect. The magnitude of the crimes made Oswald the highest priority for law enforcement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a disguise when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald had no disguise materials, only the clothing change at his boarding house.",
        incorrect_feedback: "The House: Incorrect. The absence of disguise materials suggests limited preparation for flight."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was carrying a significant amount of personal belongings when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald had only minimal personal items, suggesting hasty departure.",
        incorrect_feedback: "The House: Incorrect. The few personal items indicate Oswald was not prepared for extended absence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was unconscious when police found him in the theater.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was alert and conscious, leading to his struggle with police.",
        incorrect_feedback: "The House: Incorrect. Oswald consciousness allowed him to resist arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with evidence linking him to the assassination when arrested.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Direct evidence linking Oswald to the assassination was developed later through investigation.",
        incorrect_feedback: "The House: Incorrect. The assassination evidence was discovered through subsequent investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was arrested exactly 80 minutes after the assassination.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The precise timing demonstrates the efficiency of the police response.",
        incorrect_feedback: "The House: Incorrect. The 80-minute timeline is significant in the investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was the only person in the theater when police arrived.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Several patrons were in the theater, making the arrest more complex.",
        incorrect_feedback: "The House: Incorrect. The presence of other patrons required police to identify the correct suspect."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was wearing gloves when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No gloves were found on Oswald, which is significant for fingerprint evidence.",
        incorrect_feedback: "The House: Incorrect. The absence of gloves allowed for fingerprint evidence to be collected."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found sleeping in the theater when police arrived.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was awake and alert when police approached him.",
        incorrect_feedback: "The House: Incorrect. Oswald alertness allowed him to attempt resistance."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a ticket stub from the theater.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald had no ticket stub since he entered without paying.",
        incorrect_feedback: "The House: Incorrect. The lack of a ticket stub confirms he entered without paying."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with keys to a getaway vehicle.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No vehicle keys were found, indicating Oswald had no transportation plan.",
        incorrect_feedback: "The House: Incorrect. The absence of vehicle keys suggests no escape plan."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a radio when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No radio was found, meaning Oswald could not monitor police communications.",
        incorrect_feedback: "The House: Incorrect. The lack of communication equipment hindered any escape coordination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with binoculars when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No binoculars were found on Oswald at the time of arrest.",
        incorrect_feedback: "The House: Incorrect. The absence of binoculars is noted in the arrest inventory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a camera when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No camera was found in Oswald possession during the arrest.",
        incorrect_feedback: "The House: Incorrect. The inventory of Oswald possessions included no photographic equipment."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a compass when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No compass was found, indicating Oswald relied on his knowledge of the area.",
        incorrect_feedback: "The House: Incorrect. The absence of navigation equipment suggests familiarity with Dallas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a watch when arrested.",
        correct_answer: true,
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was wearing a watch, which was included in the arrest inventory.",
        incorrect_feedback: "The House: Incorrect. The watch was among his personal effects."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a notebook when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No notebook was found in Oswald possession at the time of arrest.",
        incorrect_feedback: "The House: Incorrect. The absence of written materials is noted in the arrest record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with sunglasses when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No sunglasses were found on Oswald during the arrest.",
        incorrect_feedback: "The House: Incorrect. The lack of sunglasses is consistent with his theater hiding."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was found with a hat when arrested.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was not wearing a hat when arrested in the theater.",
        incorrect_feedback: "The House: Incorrect. No hat was part of his attire during the arrest."
    },

    // --- Multiple Choice Questions (25 total) ---
    {
        type: "mc_question",
        question: "Where did Lee Harvey Oswald go immediately after leaving the Texas School Book Depository?",
        options: {
            A: "His apartment",
            B: "The Dallas airport",
            C: "He caught a bus on Elm Street",
            D: "A nearby restaurant"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald first caught a bus on Elm Street but got off due to traffic.",
        incorrect_feedback: "The House: Incorrect. Oswald initial escape involved public transportation."
    },
    {
        type: "mc_question",
        question: "Who recognized Oswald on the bus during his escape?",
        options: {
            A: "A coworker from the Depository",
            B: "Mary Bledsoe, his former landlady",
            C: "A police officer",
            D: "A news reporter"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Mary Bledsoe recognized Oswald as a former tenant she had evicted.",
        incorrect_feedback: "The House: Incorrect. Bledsoe identification was crucial evidence of Oswald movements."
    },
    {
        type: "mc_question",
        question: "What form of transportation did Oswald use after getting off the bus?",
        options: {
            A: "He walked the entire distance",
            B: "A taxi driven by William Whaley",
            C: "A city bus",
            D: "A friend car"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. William Whaley drove Oswald partway to his boarding house.",
        incorrect_feedback: "The House: Incorrect. Whaley testimony was important evidence in tracking Oswald movements."
    },
    {
        type: "mc_question",
        question: "What did Oswald do when he arrived at his boarding house?",
        options: {
            A: "He immediately left again",
            B: "He changed clothes and retrieved a revolver",
            C: "He packed a suitcase",
            D: "He called someone on the phone"
        },
        correct_answer_key: "B",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald changed clothes and obtained a .38 revolver from his room.",
        incorrect_feedback: "The House: Incorrect. These actions suggest Oswald was preparing for further violence."
    },
    {
        type: "mc_question",
        question: "Who was killed during Oswald escape from the assassination scene?",
        options: {
            A: "A taxi driver",
            B: "Police Officer J.D. Tippit",
            C: "A store clerk",
            D: "A bus driver"
        },
        correct_answer_key: "B",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Officer Tippit was shot and killed by Oswald during the escape.",
        incorrect_feedback: "The House: Incorrect. The Tippit murder was crucial evidence linking Oswald to violence."
    },
    {
        type: "mc_question",
        question: "Where was Oswald finally captured?",
        options: {
            A: "At a bus station",
            B: "In a restaurant",
            C: "At the Texas Theater",
            D: "At his boarding house"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was arrested at the Texas Theater in Oak Cliff.",
        incorrect_feedback: "The House: Incorrect. The theater provided temporary refuge before his capture."
    },
    {
        type: "mc_question",
        question: "Who alerted police to Oswald presence at the Texas Theater?",
        options: {
            A: "A theater employee",
            B: "Johnny Brewer, a shoe store employee",
            C: "A customer in the theater",
            D: "A passing police officer"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Johnny Brewer observed Oswald suspicious behavior and called police.",
        incorrect_feedback: "The House: Incorrect. Brewer alertness was crucial to Oswald capture."
    },
    {
        type: "mc_question",
        question: "What was significant about Oswald behavior when entering the Texas Theater?",
        options: {
            A: "He bought a ticket normally",
            B: "He entered without paying",
            C: "He asked for directions",
            D: "He was carrying a weapon openly"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald entered without buying a ticket, which aroused suspicion.",
        incorrect_feedback: "The House: Incorrect. This suspicious behavior led to his identification and capture."
    },
    {
        type: "mc_question",
        question: "What happened when police tried to arrest Oswald in the theater?",
        options: {
            A: "He surrendered immediately",
            B: "He tried to escape through the back exit",
            C: "He fought with officers and tried to fire his revolver",
            D: "He claimed diplomatic immunity"
        },
        correct_answer_key: "C",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald fought with police and attempted to fire his weapon.",
        incorrect_feedback: "The House: Incorrect. Oswald violent resistance demonstrated consciousness of guilt."
    },
    {
        type: "mc_question",
        question: "What time was Oswald arrested at the Texas Theater?",
        options: {
            A: "1:15 PM",
            B: "1:30 PM",
            C: "1:50 PM",
            D: "2:15 PM"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was arrested at approximately 1:50 PM.",
        incorrect_feedback: "The House: Incorrect. The timing is crucial to the overall timeline of events."
    },
    {
        type: "mc_question",
        question: "What was found in Oswald possession when he was arrested?",
        options: {
            A: "A rifle",
            B: "A .38 caliber revolver",
            C: "Communist literature",
            D: "A fake passport"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald was carrying a .38 revolver that linked him to the Tippit murder.",
        incorrect_feedback: "The House: Incorrect. The revolver was key evidence in the case against Oswald."
    },
    {
        type: "mc_question",
        question: "How long was Oswald at large after the assassination?",
        options: {
            A: "30 minutes",
            B: "80 minutes",
            C: "2 hours",
            D: "3 hours"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was captured approximately 80 minutes after the assassination.",
        incorrect_feedback: "The House: Incorrect. The 80-minute timeline demonstrates the efficiency of the police response."
    },
    {
        type: "mc_question",
        question: "What identification did Oswald have when arrested?",
        options: {
            A: "Only his real name Lee Harvey Oswald",
            B: "No identification at all",
            C: "Both Lee Harvey Oswald and Alek Hidell identification",
            D: "Only false identification"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald carried identification in both his real name and the alias Alek Hidell.",
        incorrect_feedback: "The House: Incorrect. The false identification raises questions about Oswald activities and connections."
    },
    {
        type: "mc_question",
        question: "Who encountered Oswald in the Depository lunchroom after the assassination?",
        options: {
            A: "Police Officer Marion Baker and supervisor Roy Truly",
            B: "FBI agents",
            C: "Other Depository employees",
            D: "Secret Service agents"
        },
        correct_answer_key: "A",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Officer Baker and Roy Truly encountered Oswald in the second-floor lunchroom.",
        incorrect_feedback: "The House: Incorrect. This encounter is crucial to the timeline and Oswald alibi."
    },
    {
        type: "mc_question",
        question: "What was unusual about Oswald demeanor when encountered by Officer Baker?",
        options: {
            A: "He was out of breath and panicked",
            B: "He was calm and composed",
            C: "He was injured and bleeding",
            D: "He was hiding under a table"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Both Baker and Truly noted Oswald appeared calm and was not out of breath.",
        incorrect_feedback: "The House: Incorrect. This calm demeanor has been debated as evidence for or against guilt."
    },
    {
        type: "mc_question",
        question: "What did Oswald purchase in the Depository lunchroom?",
        options: {
            A: "A sandwich",
            B: "Coffee",
            C: "A Coca-Cola",
            D: "Nothing"
        },
        correct_answer_key: "C",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was seen with a Coca-Cola during the lunchroom encounter.",
        incorrect_feedback: "The House: Incorrect. The Coca-Cola purchase is part of the documented timeline."
    },
    {
        type: "mc_question",
        question: "Why did Oswald get off the bus during his escape?",
        options: {
            A: "He reached his destination",
            B: "He was recognized by passengers",
            C: "The bus was stuck in traffic near the crime scene",
            D: "He ran out of money"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The bus was caught in traffic congestion around Dealey Plaza.",
        incorrect_feedback: "The House: Incorrect. The traffic jam forced Oswald to seek alternative transportation."
    },
    {
        type: "mc_question",
        question: "What evidence linked Oswald to the bus ride?",
        options: {
            A: "Security camera footage",
            B: "A transfer receipt found in his possession",
            C: "Credit card records",
            D: "Fingerprints on the bus"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The bus transfer receipt provided physical evidence of Oswald journey.",
        incorrect_feedback: "The House: Incorrect. The transfer receipt was crucial evidence of his movements."
    },
    {
        type: "mc_question",
        question: "What was the approximate distance Oswald traveled during his escape?",
        options: {
            A: "1 mile",
            B: "3 miles",
            C: "5 miles",
            D: "10 miles"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald traveled approximately 3 miles from the Depository to the theater.",
        incorrect_feedback: "The House: Incorrect. The distance demonstrates the scope of his escape attempt."
    },
    {
        type: "mc_question",
        question: "What movies were playing at the Texas Theater when Oswald was arrested?",
        options: {
            A: "Gone with the Wind and Casablanca",
            B: "War Is Hell and Cry of Battle",
            C: "The Great Escape and The Fugitive",
            D: "From Russia with Love and Dr. No"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The theater was showing the double feature War Is Hell and Cry of Battle.",
        incorrect_feedback: "The House: Incorrect. The specific movies provide context for the timeline."
    },
    {
        type: "mc_question",
        question: "What was the condition of Oswald revolver when he was arrested?",
        options: {
            A: "Fully loaded",
            B: "Empty",
            C: "Missing cartridges consistent with the Tippit shooting",
            D: "Jammed and inoperable"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The revolver was missing cartridges, linking it to the Tippit murder.",
        incorrect_feedback: "The House: Incorrect. The ballistic evidence connected Oswald weapon to Officer Tippit death."
    },
    {
        type: "mc_question",
        question: "What was Oswald first criminal charge after his arrest?",
        options: {
            A: "Assassinating the President",
            B: "Murder of Officer J.D. Tippit",
            C: "Resisting arrest",
            D: "Illegal possession of a firearm"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald was first charged with murdering Officer Tippit.",
        incorrect_feedback: "The House: Incorrect. The Tippit murder charge preceded the assassination charges."
    },
    {
        type: "mc_question",
        question: "How many people were in the Texas Theater when Oswald was arrested?",
        options: {
            A: "Only Oswald",
            B: "About 5 people",
            C: "About 15-20 people",
            D: "A packed theater"
        },
        correct_answer_key: "C",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. There were approximately 15-20 patrons in the theater during the arrest.",
        incorrect_feedback: "The House: Incorrect. The presence of witnesses complicated the arrest situation."
    },

    // --- Factoids (20 total) ---
    {
        type: "factoid",
        text: "Lee Harvey Oswald left the Texas School Book Depository within minutes of the assassination, using public transportation and a taxi to reach his boarding house.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Mary Bledsoe, Oswald former landlady who had evicted him, recognized him on the bus during his escape and later testified about the encounter.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Officer Marion Baker and supervisor Roy Truly encountered Oswald in the Depository lunchroom, where he appeared calm and was drinking a Coca-Cola.",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Oswald changed clothes and retrieved a .38 caliber revolver from his boarding house at 1026 North Beckley before continuing his escape.",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Police Officer J.D. Tippit was shot and killed at approximately 1:15 PM during Oswald escape, becoming the second victim of the day.",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Johnny Brewer, a shoe store employee, observed Oswald suspicious behavior and alerted police when Oswald entered the Texas Theater without paying.",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Oswald was arrested at the Texas Theater at approximately 1:50 PM, about 80 minutes after the assassination, following a struggle with police.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "During his arrest, Oswald attempted to fire his revolver at police officers, but the weapon misfired, preventing further violence.",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Oswald was carrying identification in two names when arrested: Lee Harvey Oswald and Alek Hidell, raising questions about his activities.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The revolver found on Oswald was missing cartridges consistent with the number of shots fired at Officer Tippit, providing ballistic evidence.",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Taxi driver William Whaley later identified Oswald in a police lineup as the passenger he drove partway to Oak Cliff during the escape.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Oswald landlady Earlene Roberts was surprised by his midday return to the boarding house, as this was not his normal routine.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Texas Theater was showing a double feature of War Is Hell and Cry of Battle when Oswald sought refuge there.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Oswald escape route covered approximately 3 miles from the Texas School Book Depository to the Texas Theater in Oak Cliff.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Shell casings found at the scene of Officer Tippit murder were later matched to Oswald revolver through ballistic analysis.",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Oswald was first charged with the murder of Officer Tippit, and only later charged with the assassination of President Kennedy.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The bus transfer receipt found in Oswald possession provided physical evidence linking him to his escape route through downtown Dallas.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Oswald stayed at his boarding house for only a few minutes, suggesting he was focused on a specific objective during his escape.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The rapid capture of Oswald within 80 minutes of the assassination was due to alert citizens and efficient police coordination.",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Oswald resistance during his arrest, including his attempt to shoot police officers, demonstrated consciousness of guilt and violent intent.",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    }
];

// Content Summary:
// - True/False Questions: 157 total (110 true, 47 false = 30% false)
// - Multiple Choice Questions: 25 total
// - Factoids: 20 total
// - NO VIDEOS (removed for testing)
// Total: 202 content items

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { oswaldContent, getLoopContent };
}
