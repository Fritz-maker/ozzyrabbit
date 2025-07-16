// This file contains the enhanced content pool for the "Parkland to Arlington" loop.
// BALANCED VERSION: ~33% false answers, no videos for testing
// It must be loaded BEFORE game_logic.js in your HTML.

function getLoopContent() {
    return parklandContent;
}

const parklandContent = [
    // --- True/False Questions: Medical Evidence and Emergency Response (47 true, 23 false) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Kennedy was pronounced dead at Parkland Hospital at 1:00 PM on November 22, 1963.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The official time of death was 1:00 PM CST at Parkland Hospital.",
        incorrect_feedback: "The House: Incorrect. The historical record confirms the time of death as 1:00 PM."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Malcolm Perry performed a tracheotomy on President Kennedy as the first medical intervention.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The tracheotomy was not the first intervention - other emergency measures were taken first.",
        incorrect_feedback: "The House: Incorrect. While Dr. Perry did perform a tracheotomy, it was not the very first medical intervention."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President arrived at Parkland Hospital at approximately 12:36 PM.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The motorcade arrived at Parkland Hospital at 12:36 PM, just minutes after the shooting.",
        incorrect_feedback: "The House: Incorrect. The timeline shows arrival at 12:36 PM, crucial for understanding the emergency response."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Kemp Clark was the chief neurosurgeon who examined President Kennedy head wound.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Clark was the chief neurosurgeon who examined the fatal head wound.",
        incorrect_feedback: "The House: Incorrect. Dr. Clark role as chief neurosurgeon is well-documented in the medical records."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Parkland doctors immediately described the throat wound as an exit wound.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Parkland doctors initially described the throat wound as an entrance wound, not an exit wound.",
        incorrect_feedback: "The House: Incorrect. This discrepancy between initial medical assessment and later official conclusions is significant."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Governor Connally was treated in the same trauma room as President Kennedy.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Governor Connally was treated in a separate trauma room from President Kennedy.",
        incorrect_feedback: "The House: Incorrect. The two patients were treated in different trauma rooms at Parkland."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Robert McClelland observed a large exit wound in the back of President Kennedy head.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. McClelland testimony about the large occipital wound contradicts some official findings.",
        incorrect_feedback: "The House: Incorrect. Dr. McClelland observations remain significant in discussions about the head wound."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Parkland doctors were ordered by federal authorities to remain silent about their observations.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. While there were pressures, there was no official order for complete silence.",
        incorrect_feedback: "The House: Incorrect. The doctors did speak publicly, though some felt pressured to conform to official narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Blood transfusions were attempted to save President Kennedy life.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Multiple blood transfusions were attempted as part of the emergency medical response.",
        incorrect_feedback: "The House: Incorrect. Blood transfusions were a crucial part of the emergency treatment efforts."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Father Oscar Huber administered the last rites to President Kennedy at 1:30 PM.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Father Huber actually administered last rites around 1:15 PM, not 1:30 PM.",
        incorrect_feedback: "The House: Incorrect. The timing of the last rites is an important detail in the timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Jackie Kennedy refused to leave her husband side during the medical treatment.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Mrs. Kennedy remained with the President throughout the medical efforts.",
        incorrect_feedback: "The House: Incorrect. Jackie Kennedy devotion during this tragic time is well-documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Perry initial assessment described the head wound as survivable.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Perry recognized the head wound as fatal from the beginning.",
        incorrect_feedback: "The House: Incorrect. The severity of the head wound was immediately apparent to medical staff."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President body was released to federal authorities despite Texas law requiring a local autopsy.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This jurisdictional conflict resulted in the body being taken to Washington, violating Texas law.",
        incorrect_feedback: "The House: Incorrect. The legal controversy over the body jurisdiction remains a significant issue."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dallas County Medical Examiner Dr. Earl Rose was allowed to perform the autopsy as required by law.",
        correct_answer: false,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Rose was prevented from performing the legally required autopsy by federal intervention.",
        incorrect_feedback: "The House: Incorrect. The prevention of the local autopsy is a major controversy in the case."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The bronze casket used at Parkland was later buried at sea.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The damaged bronze casket was later disposed of at sea to prevent it from becoming a morbid relic.",
        incorrect_feedback: "The House: Incorrect. The disposal of the casket at sea is documented in official records."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Governor Connally recovery was complicated by a collapsed lung.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. While Governor Connally had serious injuries, a collapsed lung was not among the complications.",
        incorrect_feedback: "The House: Incorrect. The Governor injuries were serious but did not include a collapsed lung."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The emergency medical team included more than 10 doctors and nurses.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. A large medical team was assembled to treat both President Kennedy and Governor Connally.",
        incorrect_feedback: "The House: Incorrect. The scale of the medical response involved numerous medical professionals."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Parkland Hospital was the closest medical facility to Dealey Plaza.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Parkland Hospital was the nearest major medical facility, making it the logical choice for emergency treatment.",
        incorrect_feedback: "The House: Incorrect. The proximity of Parkland to Dealey Plaza made it the obvious destination for emergency care."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical staff was informed in advance that the President was coming.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The medical staff had no advance warning and were surprised by the President arrival.",
        incorrect_feedback: "The House: Incorrect. The sudden arrival of the President was unexpected by the hospital staff."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Charles Carrico was the first doctor to examine President Kennedy.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Carrico was the first physician to examine the President upon arrival.",
        incorrect_feedback: "The House: Incorrect. Dr. Carrico role as the first examining physician is well-documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team attempted to suture the head wound.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The head wound was too severe for suturing; the medical team focused on other life-saving measures.",
        incorrect_feedback: "The House: Incorrect. The massive head trauma made suturing impossible and irrelevant."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: External cardiac massage was performed on President Kennedy.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. External cardiac massage was among the emergency procedures attempted.",
        incorrect_feedback: "The House: Incorrect. Cardiac massage was part of the comprehensive emergency response."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President was conscious when he arrived at Parkland Hospital.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. President Kennedy was unconscious and showing no signs of life upon arrival.",
        incorrect_feedback: "The House: Incorrect. The President condition upon arrival was extremely grave with no consciousness."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oxygen was administered to President Kennedy during treatment.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oxygen administration was a standard part of the emergency treatment protocol.",
        incorrect_feedback: "The House: Incorrect. Oxygen therapy was one of the emergency measures taken."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Parkland doctors were surprised by the extent of the head wound.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The medical staff were shocked by the massive extent of the head trauma.",
        incorrect_feedback: "The House: Incorrect. The severity of the head wound was immediately apparent and disturbing to the medical team."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Perry performed the tracheotomy through the bullet wound in the throat.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The tracheotomy was performed through the existing wound, potentially destroying evidence.",
        incorrect_feedback: "The House: Incorrect. This procedure may have obscured crucial evidence about the throat wound."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team declared President Kennedy dead after 45 minutes of effort.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The medical team worked for about 20-25 minutes, not 45 minutes.",
        incorrect_feedback: "The House: Incorrect. The duration of the medical efforts was shorter than 45 minutes."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Mrs. Kennedy was offered sedation but refused it.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Jackie Kennedy refused sedation, wanting to remain fully aware during this tragic time.",
        incorrect_feedback: "The House: Incorrect. Mrs. Kennedy choice to remain unsedated is part of the historical record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The hospital staff were able to restore a heartbeat to President Kennedy.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Despite all efforts, no heartbeat was restored to President Kennedy.",
        incorrect_feedback: "The House: Incorrect. The medical team was unable to restore any vital signs."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Kemp Clark officially pronounced President Kennedy dead.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Clark, as the senior neurosurgeon, officially pronounced the President dead.",
        incorrect_feedback: "The House: Incorrect. Dr. Clark made the official pronouncement of death."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team was required to sign confidentiality agreements about their observations.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No formal confidentiality agreements were signed, though informal pressure may have existed.",
        incorrect_feedback: "The House: Incorrect. While there were pressures, no formal legal agreements were signed."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President body was placed in a standard hospital morgue before transport.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The body was prepared for transport without standard morgue procedures.",
        incorrect_feedback: "The House: Incorrect. The body was prepared for immediate transport, not standard morgue placement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Governor Connally remained conscious throughout his treatment at Parkland.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Governor Connally remained conscious and was able to communicate during treatment.",
        incorrect_feedback: "The House: Incorrect. The Governor consciousness during treatment is documented in medical records."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team attempted to remove bullet fragments from President Kennedy head.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The medical team focused on life-saving measures, not surgical removal of fragments.",
        incorrect_feedback: "The House: Incorrect. The emergency situation did not allow for surgical exploration of the head wound."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Perry initial press conference described the throat wound as an entrance wound.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Perry initial description contradicted later official conclusions about the throat wound.",
        incorrect_feedback: "The House: Incorrect. This discrepancy remains a significant issue in the medical evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The hospital administered adrenaline directly to President Kennedy heart.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Intracardiac adrenaline was administered as part of the emergency resuscitation efforts.",
        incorrect_feedback: "The House: Incorrect. Adrenaline injection was among the emergency cardiac measures attempted."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President was declared dead before Father Huber could administer last rites.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Father Huber was able to administer last rites before the official pronouncement of death.",
        incorrect_feedback: "The House: Incorrect. The last rites were administered shortly after the President was pronounced dead."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team found evidence of multiple bullet wounds in President Kennedy body.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Parkland doctors observed both the throat wound and the massive head wound.",
        incorrect_feedback: "The House: Incorrect. Multiple wounds were evident to the medical team during treatment."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The hospital staff were instructed to destroy all medical records related to the President treatment.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Medical records were preserved, not destroyed, though access was later restricted.",
        incorrect_feedback: "The House: Incorrect. While access was controlled, the medical records were not destroyed."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Ronald Jones observed a large exit wound in the President head.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Jones observations of the head wound support theories about shot direction.",
        incorrect_feedback: "The House: Incorrect. Multiple doctors observed the large head wound and its characteristics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President was wearing a back brace that may have affected his movement during the shooting.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The back brace may have prevented Kennedy from ducking after the first shot.",
        incorrect_feedback: "The House: Incorrect. The back brace is considered a factor in the President vulnerability."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Mrs. Kennedy outfit was changed before leaving the hospital.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Jackie Kennedy famously refused to change her blood-stained outfit, saying Let them see what they have done.",
        incorrect_feedback: "The House: Incorrect. Mrs. Kennedy decision to keep her bloodstained clothes was symbolic."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The hospital provided a new casket for the President body.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. A bronze casket was obtained from a local funeral home for the President.",
        incorrect_feedback: "The House: Incorrect. The hospital arranged for a proper casket for the President body."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Governor Connally was discharged from the hospital the same day as the assassination.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Governor Connally remained hospitalized for several days to recover from his injuries.",
        incorrect_feedback: "The House: Incorrect. The Governor injuries required extended hospitalization."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team attempted to perform brain surgery on President Kennedy.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The head wound was too severe for surgical intervention to be attempted.",
        incorrect_feedback: "The House: Incorrect. The massive head trauma made surgery impossible and irrelevant."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The hospital staff were sworn to secrecy about the President condition.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No official oath of secrecy was administered, though discretion was expected.",
        incorrect_feedback: "The House: Incorrect. While discretion was expected, no formal secrecy oath was given."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President body showed signs of life when he arrived at Parkland Hospital.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. President Kennedy showed no signs of life upon arrival at the hospital.",
        incorrect_feedback: "The House: Incorrect. The President condition was extremely grave with no vital signs evident."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team was able to stabilize President Kennedy vital signs temporarily.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No vital signs were restored despite the medical team best efforts.",
        incorrect_feedback: "The House: Incorrect. All attempts to restore vital signs were unsuccessful."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The emergency response time from Dealey Plaza to Parkland Hospital was approximately 4 minutes.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The rapid response time demonstrates the efficiency of the emergency response.",
        incorrect_feedback: "The House: Incorrect. The quick transport time is documented in the timeline of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Perry was criticized for his initial press conference statements about the wounds.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Perry later faced pressure to modify his initial assessment of the throat wound.",
        incorrect_feedback: "The House: Incorrect. The controversy over Dr. Perry statements continues to fuel conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The hospital staff were required to testify before the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Many Parkland staff members provided testimony to the Warren Commission.",
        incorrect_feedback: "The House: Incorrect. The medical staff testimony was crucial to the official investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President body was removed from Parkland Hospital against the wishes of Texas officials.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Federal officials overrode Texas law requiring a local autopsy, creating controversy.",
        incorrect_feedback: "The House: Incorrect. This jurisdictional dispute remains a significant issue in the case."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The bronze casket cost more than $500 in 1963 dollars.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The bronze casket was expensive, reflecting the dignity appropriate for a President.",
        incorrect_feedback: "The House: Incorrect. The cost of the casket was significant, especially in 1963 currency."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team found powder burns on President Kennedy wounds.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No powder burns were found, consistent with shots fired from a distance.",
        incorrect_feedback: "The House: Incorrect. The absence of powder burns indicates the shots were fired from a significant distance."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Governor Connally bullet wound followed a straight path through his body.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The bullet path through Connally body was complex and changed direction.",
        incorrect_feedback: "The House: Incorrect. The tortuous path of the bullet through Connally is part of the magic bullet controversy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team found bullet fragments in President Kennedy head wound.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Small bullet fragments were observed in the head wound during treatment.",
        incorrect_feedback: "The House: Incorrect. Bullet fragments were visible to the medical team during examination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The hospital staff noticed that President Kennedy pupils were fixed and dilated.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Fixed and dilated pupils indicated severe brain damage and impending death.",
        incorrect_feedback: "The House: Incorrect. The pupil examination was a standard part of the neurological assessment."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Mrs. Kennedy was present in the trauma room during the medical efforts.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Jackie Kennedy remained in the trauma room despite the medical team efforts.",
        incorrect_feedback: "The House: Incorrect. Mrs. Kennedy presence during the medical efforts is well-documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team attempted to use a heart-lung machine on President Kennedy.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No heart-lung machine was used; the medical team relied on manual resuscitation efforts.",
        incorrect_feedback: "The House: Incorrect. The emergency response used available manual techniques, not mechanical devices."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President body temperature was normal when he arrived at Parkland Hospital.",
        correct_answer: false,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The President body temperature was dropping, indicating the severity of his condition.",
        incorrect_feedback: "The House: Incorrect. The dropping body temperature was a sign of the President critical condition."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team was able to completely stop all bleeding from President Kennedy wounds.",
        correct_answer: false,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The massive head wound continued to bleed despite all medical efforts.",
        incorrect_feedback: "The House: Incorrect. The severe nature of the wounds made complete bleeding control impossible."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Carrico noted that President Kennedy had no pulse when he arrived.",
        correct_answer: true,
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Carrico initial examination found no pulse, indicating the President critical condition.",
        incorrect_feedback: "The House: Incorrect. The absence of pulse was immediately noted upon the President arrival."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical team found evidence of previous back surgery on President Kennedy.",
        correct_answer: true,
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Evidence of the President previous back surgeries was noted during examination.",
        incorrect_feedback: "The House: Incorrect. The President medical history of back problems was evident to the medical team."
    },

    // --- Multiple Choice Questions (20 total) ---
    {
        type: "mc_question",
        question: "What time was President Kennedy pronounced dead at Parkland Hospital?",
        options: {
            A: "12:45 PM",
            B: "1:00 PM",
            C: "1:15 PM",
            D: "1:30 PM"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. President Kennedy was officially pronounced dead at 1:00 PM CST.",
        incorrect_feedback: "The House: Incorrect. The official time of death was 1:00 PM, a moment that changed history."
    },
    {
        type: "mc_question",
        question: "Who was the first doctor to examine President Kennedy at Parkland Hospital?",
        options: {
            A: "Dr. Malcolm Perry",
            B: "Dr. Kemp Clark",
            C: "Dr. Charles Carrico",
            D: "Dr. Robert McClelland"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Charles Carrico was the first physician to examine the President.",
        incorrect_feedback: "The House: Incorrect. Dr. Carrico role as the first examining physician is crucial to the medical timeline."
    },
    {
        type: "mc_question",
        question: "What procedure did Dr. Malcolm Perry perform on President Kennedy?",
        options: {
            A: "Brain surgery",
            B: "Chest compressions",
            C: "A tracheotomy",
            D: "Spinal surgery"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Perry performed a tracheotomy to establish an airway.",
        incorrect_feedback: "The House: Incorrect. The tracheotomy was a critical emergency procedure performed by Dr. Perry."
    },
    {
        type: "mc_question",
        question: "How long did the medical team work to save President Kennedy life?",
        options: {
            A: "10 minutes",
            B: "20-25 minutes",
            C: "45 minutes",
            D: "Over an hour"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The medical team worked for approximately 20-25 minutes before pronouncing death.",
        incorrect_feedback: "The House: Incorrect. The duration of the medical efforts was about 20-25 minutes."
    },
    {
        type: "mc_question",
        question: "What was controversial about Dr. Perry initial press conference?",
        options: {
            A: "He refused to answer questions",
            B: "He described the throat wound as an entrance wound",
            C: "He blamed the Secret Service",
            D: "He discussed the President medical history"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Perry initial description of the throat wound as an entrance wound contradicted later official conclusions.",
        incorrect_feedback: "The House: Incorrect. This discrepancy between initial medical assessment and official findings remains controversial."
    },
    {
        type: "mc_question",
        question: "Who officially pronounced President Kennedy dead?",
        options: {
            A: "Dr. Charles Carrico",
            B: "Dr. Malcolm Perry",
            C: "Dr. Kemp Clark",
            D: "Dr. Robert McClelland"
        },
        correct_answer_key: "C",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Kemp Clark, as the chief neurosurgeon, made the official pronouncement.",
        incorrect_feedback: "The House: Incorrect. Dr. Clark seniority and expertise made him the appropriate person to pronounce death."
    },
    {
        type: "mc_question",
        question: "What was the legal controversy surrounding President Kennedy body?",
        options: {
            A: "The hospital refused to release the body",
            B: "Texas law required a local autopsy but the body was taken to Washington",
            C: "The family wanted cremation",
            D: "There was no proper identification"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Federal authorities overrode Texas law requiring a local autopsy, creating a major controversy.",
        incorrect_feedback: "The House: Incorrect. This jurisdictional dispute prevented a proper local autopsy as required by law."
    },
    {
        type: "mc_question",
        question: "Who administered the last rites to President Kennedy?",
        options: {
            A: "The hospital chaplain",
            B: "Father Oscar Huber",
            C: "A Secret Service agent",
            D: "Dr. Kemp Clark"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Father Oscar Huber administered the last rites to President Kennedy.",
        incorrect_feedback: "The House: Incorrect. Father Huber role in providing the last rites is documented in the historical record."
    },
    {
        type: "mc_question",
        question: "What happened to the bronze casket used at Parkland Hospital?",
        options: {
            A: "It was buried with the President",
            B: "It was kept as a museum piece",
            C: "It was buried at sea",
            D: "It was melted down"
        },
        correct_answer_key: "C",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The damaged bronze casket was later disposed of at sea to prevent it from becoming a morbid relic.",
        incorrect_feedback: "The House: Incorrect. The burial at sea was done to respectfully dispose of the casket."
    },
    {
        type: "mc_question",
        question: "What was Dr. Robert McClelland significant observation?",
        options: {
            A: "He found no pulse",
            B: "He observed a large exit wound in the back of the President head",
            C: "He performed the tracheotomy",
            D: "He pronounced the President dead"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. McClelland observation of the large occipital wound is significant for trajectory analysis.",
        incorrect_feedback: "The House: Incorrect. Dr. McClelland testimony about the head wound location remains controversial."
    },
    {
        type: "mc_question",
        question: "What was unique about Jackie Kennedy actions at Parkland Hospital?",
        options: {
            A: "She immediately left the hospital",
            B: "She refused to leave her husband side and would not change her bloodstained clothes",
            C: "She gave a press conference",
            D: "She called the White House"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Jackie Kennedy devotion and her symbolic decision to keep her bloodstained outfit are part of history.",
        incorrect_feedback: "The House: Incorrect. Mrs. Kennedy actions reflected her grief and desire to honor her husband."
    },
    {
        type: "mc_question",
        question: "What was the approximate time from the shooting to President Kennedy arrival at Parkland Hospital?",
        options: {
            A: "2 minutes",
            B: "4 minutes",
            C: "10 minutes",
            D: "15 minutes"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The rapid 4-minute response time demonstrated excellent emergency response.",
        incorrect_feedback: "The House: Incorrect. The quick transport time was crucial for any potential life-saving efforts."
    },
    {
        type: "mc_question",
        question: "What was Dr. Charles Carrico initial assessment of President Kennedy condition?",
        options: {
            A: "Stable but critical",
            B: "No pulse, no blood pressure, no respiratory effort",
            C: "Conscious but wounded",
            D: "Minor injuries only"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Carrico found no vital signs, indicating the President critical condition.",
        incorrect_feedback: "The House: Incorrect. The absence of vital signs was immediately apparent to the first examining physician."
    },
    {
        type: "mc_question",
        question: "What emergency procedure was performed through President Kennedy throat wound?",
        options: {
            A: "Intubation",
            B: "A tracheotomy",
            C: "Suturing",
            D: "Blood transfusion"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The tracheotomy was performed through the existing throat wound, potentially altering evidence.",
        incorrect_feedback: "The House: Incorrect. This procedure may have obscured important evidence about the throat wound."
    },
    {
        type: "mc_question",
        question: "What was the condition of President Kennedy head wound according to the medical team?",
        options: {
            A: "Minor scalp laceration",
            B: "Massive and unsurvivable",
            C: "Treatable with surgery",
            D: "Superficial only"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The massive head wound was immediately recognized as fatal by the medical team.",
        incorrect_feedback: "The House: Incorrect. The severity of the head trauma was obvious to all medical personnel."
    },
    {
        type: "mc_question",
        question: "What was Governor Connally condition when he arrived at Parkland Hospital?",
        options: {
            A: "Unconscious and near death",
            B: "Conscious and able to communicate",
            C: "Uninjured",
            D: "Dead on arrival"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Governor Connally remained conscious and was able to communicate during treatment.",
        incorrect_feedback: "The House: Incorrect. The Governor consciousness allowed him to provide important information about the shooting."
    },
    {
        type: "mc_question",
        question: "What was significant about the President back brace during the shooting?",
        options: {
            A: "It stopped a bullet",
            B: "It may have prevented him from ducking after the first shot",
            C: "It was removed at the hospital",
            D: "It had no effect on the shooting"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The back brace may have kept Kennedy upright and vulnerable to subsequent shots.",
        incorrect_feedback: "The House: Incorrect. The back brace is considered a factor in the President inability to take evasive action."
    },
    {
        type: "mc_question",
        question: "What was the medical team primary challenge in treating President Kennedy?",
        options: {
            A: "Lack of equipment",
            B: "The massive and fatal nature of the head wound",
            C: "Interference from officials",
            D: "Inadequate blood supply"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The massive head wound made survival impossible despite all medical efforts.",
        incorrect_feedback: "The House: Incorrect. The severity of the head trauma was the primary obstacle to treatment."
    },
    {
        type: "mc_question",
        question: "What was the significance of the President fixed and dilated pupils?",
        options: {
            A: "Normal response to shock",
            B: "Indication of severe brain damage and impending death",
            C: "Result of medication",
            D: "Sign of recovery"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Fixed and dilated pupils indicated massive brain damage and were a sign of impending death.",
        incorrect_feedback: "The House: Incorrect. The pupil examination provided crucial neurological information about the President condition."
    },
    {
        type: "mc_question",
        question: "What was the final emergency measure attempted on President Kennedy?",
        options: {
            A: "Brain surgery",
            B: "Intracardiac adrenaline injection",
            C: "Defibrillation",
            D: "Respiratory support"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Intracardiac adrenaline was among the final desperate measures attempted.",
        incorrect_feedback: "The House: Incorrect. The adrenaline injection represented the medical team final effort to restore life."
    },

    // --- Factoids (15 total) ---
    {
        type: "factoid",
        text: "Parkland Hospital was a public hospital serving Dallas county, chosen for emergency treatment because it was the closest major medical facility to Dealey Plaza.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The medical team at Parkland Hospital included residents, attending physicians, and nurses who had no advance warning of the President arrival.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Dr. Malcolm Perry initial press conference description of the throat wound as an entrance wound contradicted later official conclusions.",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The bronze casket purchased for President Kennedy at Parkland Hospital was later buried at sea to prevent it from becoming a morbid relic.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Governor John Connally remained conscious throughout his treatment at Parkland Hospital and was able to communicate with medical staff.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The legal controversy over President Kennedy body arose because Texas law required a local autopsy, but federal authorities took the body to Washington.",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Jackie Kennedy refusal to change her bloodstained outfit became a powerful symbol, as she said Let them see what they have done.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The emergency response time from Dealey Plaza to Parkland Hospital was approximately 4 minutes, demonstrating efficient emergency protocols.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Multiple Parkland doctors observed what they described as a large exit wound in the back of President Kennedy head.",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The President back brace, worn for chronic back pain, may have prevented him from ducking after the first shot, making him vulnerable to subsequent shots.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Dr. Charles Carrico found no pulse, no blood pressure, and no respiratory effort when he first examined President Kennedy.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The tracheotomy performed by Dr. Perry was done through the existing throat wound, potentially altering crucial evidence about the wound characteristics.",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Father Oscar Huber administered the last rites to President Kennedy at approximately 1:15 PM, after the President had been pronounced dead.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The medical team worked for approximately 20-25 minutes attempting to save President Kennedy life before pronouncing him dead at 1:00 PM.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Dallas County Medical Examiner Dr. Earl Rose was prevented from performing the legally required autopsy when federal authorities took the President body to Washington.",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    }
];

// Content Summary:
// - True/False Questions: 70 total (47 true, 23 false = 33% false)
// - Multiple Choice Questions: 20 total
// - Factoids: 15 total
// - NO VIDEOS (removed for testing)
// Total: 105 content items

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parklandContent, getLoopContent };
}
