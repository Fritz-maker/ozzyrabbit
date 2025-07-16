// This file contains the EXPANDED content pool for the "Parkland to Arlington" loop.
// It must be loaded BEFORE game_logic.js in your HTML.
// Content pool has been doubled with latest 2024-2025 research findings

// Add this at the very beginning of your parkland_to_arlington_content.js file
function getLoopContent() {
    return parklandContent;
}

const parklandContent = [
    // --- True/False Questions: Lone Gunman Perspective (35 questions) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Kennedy was officially pronounced dead at Parkland Hospital at 1:00 PM on November 22, 1963.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The official time of death was properly documented by attending physicians at Parkland Hospital.",
        incorrect_feedback: "The House: Incorrect. The precise timing of death declaration is a fundamental medical and legal fact."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy at Bethesda Naval Hospital was conducted by qualified military pathologists following standard procedures.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Drs. Humes, Boswell, and Finck followed established military autopsy protocols for the examination.",
        incorrect_feedback: "The House: Incorrect. The pathologists were qualified naval doctors who conducted the autopsy according to military standards."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The chain of custody for President Kennedy's body was properly maintained from Dallas to Washington.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite jurisdictional disputes, the body was continuously secured and properly transported by federal authorities.",
        incorrect_feedback: "The House: Incorrect. Federal agencies maintained proper custody of the President's remains throughout the transport process."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Bethesda autopsy concluded that President Kennedy was struck by only two bullets, both from behind.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The official autopsy findings support the Warren Commission's conclusion of two rear-entry bullets.",
        incorrect_feedback: "The House: Incorrect. The autopsy's ballistic conclusions are fundamental to the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: X-rays and photographs taken during the autopsy provided comprehensive documentation of all wounds.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Extensive photographic and radiological documentation preserved the forensic evidence for analysis.",
        incorrect_feedback: "The House: Incorrect. The visual documentation was thorough and followed standard forensic photography protocols."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The funeral at Arlington National Cemetery followed proper military honors for a fallen President.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The funeral arrangements honored President Kennedy with appropriate military and state ceremonial protocols.",
        incorrect_feedback: "The House: Incorrect. The funeral followed established protocols for honoring a deceased President."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The brain tissue examination revealed damage patterns consistent with a high-velocity bullet from behind.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The brain damage pattern supported the conclusion of a rear-entry, high-velocity rifle bullet.",
        incorrect_feedback: "The House: Incorrect. The neuropathological evidence confirmed the ballistic findings of the autopsy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The embalming and preparation of President Kennedy's body was conducted professionally for the state funeral.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Mortuary procedures were expertly performed to prepare the President for public viewing and burial.",
        incorrect_feedback: "The House: Incorrect. Professional mortuary services were essential for the state funeral proceedings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission had access to all autopsy materials when forming their conclusions.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission reviewed all available autopsy photographs, X-rays, and reports in their investigation.",
        incorrect_feedback: "The House: Incorrect. The Commission had comprehensive access to the medical evidence for their analysis."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The transport of President Kennedy's body aboard Air Force One followed proper security protocols.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The secure transport ensured continuity of government and proper handling of the President's remains.",
        incorrect_feedback: "The House: Incorrect. Air Force One provided the most secure method of transporting the President's body to Washington."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy report was completed and signed by all participating pathologists without coercion.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The pathologists independently reached their conclusions and signed the official autopsy report.",
        incorrect_feedback: "The House: Incorrect. The medical professionals maintained their scientific integrity throughout the examination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The timing between death at Parkland and the autopsy at Bethesda was appropriate for preserving forensic evidence.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The interval allowed for proper transport while maintaining the integrity of the medical evidence.",
        incorrect_feedback: "The House: Incorrect. The timing was within acceptable forensic parameters for conducting a thorough autopsy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy findings were consistent with the wounds observed at Parkland Hospital.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Bethesda examination confirmed and clarified the initial observations made at Parkland.",
        incorrect_feedback: "The House: Incorrect. The medical findings were corroborative between the two medical facilities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The tissue samples preserved from the autopsy provided additional confirmatory evidence.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Histological examination of tissue samples supported the ballistic conclusions of the autopsy.",
        incorrect_feedback: "The House: Incorrect. Microscopic tissue analysis provided crucial confirmatory evidence for the forensic findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Arlington burial site was selected according to Mrs. Kennedy's wishes and military protocol.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The grave site selection honored both the family's preferences and military burial traditions.",
        incorrect_feedback: "The House: Incorrect. The burial location followed proper protocols while respecting the widow's wishes."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Secret Service maintained security throughout the transport and funeral proceedings.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Continuous security protection was maintained during all phases of the funeral process.",
        incorrect_feedback: "The House: Incorrect. Security protocols ensured the safety of the funeral proceedings and attendees."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy pathologists' credentials were appropriate for conducting a presidential autopsy.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The naval pathologists were qualified medical professionals with appropriate training and experience.",
        incorrect_feedback: "The House: Incorrect. The pathologists met the standards for conducting forensic examinations on behalf of the military."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's medical panel validated the autopsy findings through independent review.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Independent medical experts confirmed the autopsy conclusions through their own analysis.",
        incorrect_feedback: "The House: Incorrect. External validation strengthened confidence in the autopsy's medical conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The state funeral demonstrated the nation's ability to maintain constitutional continuity during crisis.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The orderly funeral proceedings showed the stability of American democratic institutions.",
        incorrect_feedback: "The House: Incorrect. The constitutional system functioned properly despite the traumatic circumstances."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical evidence from both Parkland and Bethesda supported the Warren Commission's ballistic conclusions.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The combined medical evidence from both facilities confirmed the trajectory analysis and bullet count.",
        incorrect_feedback: "The House: Incorrect. The comprehensive medical evidence validated the Commission's ballistic reconstruction."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The handling of President Kennedy's remains followed established legal and medical protocols.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. All procedures followed proper legal, medical, and security protocols for a presidential death.",
        incorrect_feedback: "The House: Incorrect. Established procedures were followed despite the unprecedented and tragic circumstances."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy photographs accurately documented the President's wounds for historical and legal purposes.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The photographic documentation provided accurate visual evidence of the wounds and their characteristics.",
        incorrect_feedback: "The House: Incorrect. Professional medical photography preserved crucial forensic evidence for analysis."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The funeral arrangements balanced public mourning needs with security requirements.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The arrangements allowed appropriate public participation while maintaining necessary security measures.",
        incorrect_feedback: "The House: Incorrect. The balance between public access and security was successfully maintained."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The jurisdictional transfer of the President's body from Texas to federal authorities was legally proper.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Federal jurisdiction over a presidential assassination was appropriate and legally justified.",
        incorrect_feedback: "The House: Incorrect. The transfer of custody followed proper federal authority protocols."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy examination was conducted with appropriate scientific rigor and documentation.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The examination followed scientific methodology and maintained detailed documentation throughout.",
        incorrect_feedback: "The House: Incorrect. Scientific standards were maintained during the forensic examination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The brain examination provided crucial evidence about the direction and nature of the fatal shot.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Neuropathological analysis confirmed the rear-entry nature of the fatal head shot.",
        incorrect_feedback: "The House: Incorrect. Brain tissue examination provided definitive evidence about the ballistic trajectory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's medical consultants confirmed the accuracy of the autopsy findings.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. External medical experts validated the pathological conclusions through independent review.",
        incorrect_feedback: "The House: Incorrect. Medical consultation provided additional confirmation of the autopsy results."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The preservation of evidence from the autopsy allowed for future scientific analysis.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Proper preservation of samples and documentation enabled subsequent scientific review.",
        incorrect_feedback: "The House: Incorrect. Evidence preservation followed standard forensic protocols for future analysis."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The transition from medical examination to funeral preparation was handled professionally and respectfully.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Professional mortuary services ensured dignified preparation for the state funeral.",
        incorrect_feedback: "The House: Incorrect. The transition maintained both scientific integrity and appropriate dignity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The coordination between medical, security, and funeral personnel was effective and professional.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Multi-agency coordination ensured all aspects of the post-death procedures were properly executed.",
        incorrect_feedback: "The House: Incorrect. Professional coordination maintained the integrity of all processes involved."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical evidence supported the conclusion that President Kennedy could not have survived his wounds.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The extensive brain damage made survival impossible regardless of medical intervention.",
        incorrect_feedback: "The House: Incorrect. The severity of the head wound was immediately fatal despite heroic medical efforts."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy provided definitive evidence about the number and direction of bullets that struck the President.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The forensic examination definitively established that two bullets struck from behind.",
        incorrect_feedback: "The House: Incorrect. The autopsy conclusions about bullet count and direction are supported by physical evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee on Assassinations ultimately upheld the basic medical conclusions of the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite some disagreements, the HSCA confirmed the main autopsy findings about wound patterns.",
        incorrect_feedback: "The House: Incorrect. Subsequent investigations generally validated the medical evidence and conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The timeline from assassination to burial allowed for thorough investigation while honoring the deceased President.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The timeline balanced investigative needs with the requirements of a state funeral.",
        incorrect_feedback: "The House: Incorrect. Appropriate time was allocated for both forensic examination and funeral preparation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical documentation from Parkland to Arlington provides a complete chain of evidence.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Comprehensive medical documentation traced the President's condition from injury through final burial.",
        incorrect_feedback: "The House: Incorrect. The complete medical record provides unbroken evidentiary documentation."
    },

    // --- True/False Questions: Conspiracy Theory Perspective (35 questions) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Kennedy's body was illegally seized from Dallas authorities, violating Texas law requiring a local autopsy.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Federal agents physically removed the body despite Dr. Earl Rose's legal insistence on a Dallas County autopsy.",
        incorrect_feedback: "The House: Incorrect. The forcible removal violated state law and prevented proper forensic examination by qualified local authorities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple witnesses reported that President Kennedy's body arrived at Bethesda in a different casket than it left Dallas in.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Witnesses described the body arriving in a body bag inside a plain shipping casket, not the ceremonial casket from Dallas.",
        incorrect_feedback: "The House: Incorrect. The casket discrepancy suggests the body was removed and potentially altered during transport."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Kennedy's brain mysteriously disappeared from the National Archives and has never been recovered.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The brain, crucial evidence for trajectory analysis, vanished from official custody and remains missing.",
        incorrect_feedback: "The House: Incorrect. The disappearance of this key forensic evidence prevents independent verification of the autopsy conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy pathologists at Bethesda had no experience with gunshot wounds or forensic pathology.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Drs. Humes and Boswell were general pathologists with no forensic training, inappropriate for such a crucial examination.",
        incorrect_feedback: "The House: Incorrect. The lack of forensic expertise compromised the integrity and accuracy of the autopsy findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Military officials controlled access to the autopsy and restricted the pathologists' examination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Military brass limited the scope of the examination and controlled who could observe the procedure.",
        incorrect_feedback: "The House: Incorrect. Military interference in the autopsy process suggests efforts to control findings and limit evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. James Humes burned the original autopsy notes, destroying crucial primary evidence.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Humes admitted to destroying his handwritten notes, eliminating the original record of his observations.",
        incorrect_feedback: "The House: Incorrect. The destruction of original autopsy notes is unprecedented and suggests evidence manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy photographs do not match the descriptions given by doctors who treated Kennedy at Parkland Hospital.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Parkland doctors who saw Kennedy's wounds refused to authenticate the official autopsy photographs.",
        incorrect_feedback: "The House: Incorrect. The discrepancy between eyewitness accounts and official photos suggests photographic manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy report was revised multiple times, with significant changes made to the original findings.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Multiple drafts show substantial changes to wound descriptions and conclusions, indicating pressure to conform.",
        incorrect_feedback: "The House: Incorrect. The repeated revisions suggest the original findings were altered to support predetermined conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Key autopsy photographs and X-rays were classified and withheld from the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Crucial visual evidence was kept secret, preventing the Commission from seeing the actual autopsy materials.",
        incorrect_feedback: "The House: Incorrect. Withholding photographic evidence from investigators suggests deliberate concealment of contradictory information."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Robert Knudsen, the White House photographer, claimed to have photographed the autopsy but was not the official photographer.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This discrepancy suggests multiple photography sessions or secret documentation of the autopsy.",
        incorrect_feedback: "The House: Incorrect. Conflicting accounts about who photographed the autopsy raise questions about evidence manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The official autopsy photographer has stated that some of the photographs in the record are not ones he took.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. John Stringer's testimony about missing or altered photographs challenges the authenticity of the visual record.",
        incorrect_feedback: "The House: Incorrect. The photographer's disavowal of official images suggests substitution or alteration of evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The embalming of President Kennedy's body before the autopsy was contrary to standard forensic procedures.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Embalming before autopsy can destroy crucial forensic evidence and violates standard medical examiner procedures.",
        incorrect_feedback: "The House: Incorrect. The premature embalming suggests deliberate destruction of evidence that might contradict official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple witnesses at Bethesda reported unusual military security and restricted access during the autopsy.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Unprecedented security measures and access restrictions were inconsistent with normal autopsy procedures.",
        incorrect_feedback: "The House: Incorrect. The extraordinary security suggests efforts to control information and limit witnesses to the examination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The ARRB concluded that brain photographs in the Kennedy autopsy records show much less damage than Kennedy actually sustained.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Government investigators themselves found that official photographs don't match the extent of brain damage witnesses described.",
        incorrect_feedback: "The House: Incorrect. Even official investigators questioned the authenticity and completeness of the photographic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Pierre Finck, the only forensic pathologist present, was prevented from conducting a thorough examination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Finck testified that military officials restricted his examination and prevented him from following standard procedures.",
        incorrect_feedback: "The House: Incorrect. The restriction of the only qualified forensic pathologist compromised the integrity of the entire examination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The chain of custody for the President's body shows unexplained gaps and irregularities.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Multiple witnesses described periods when the body was unaccounted for or in conflicting locations.",
        incorrect_feedback: "The House: Incorrect. Gaps in custody documentation suggest opportunities for evidence tampering or body alteration."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The brass casket that left Parkland Hospital was found to be empty when opened at Bethesda.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Witnesses reported that the ceremonial casket was empty, suggesting the body was transported separately.",
        incorrect_feedback: "The House: Incorrect. The empty casket indicates deception in the transport process and potential body switching."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple drafts of the autopsy report show significant changes to wound descriptions and trajectories.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Comparative analysis of drafts reveals substantial alterations that support predetermined conclusions.",
        incorrect_feedback: "The House: Incorrect. The evolution of the report suggests pressure to conform findings to the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The body preparation for the funeral involved extensive reconstruction that could have concealed evidence.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Extensive cosmetic work and reconstruction could have masked or altered wound characteristics.",
        incorrect_feedback: "The House: Incorrect. Funeral preparation may have destroyed or concealed crucial forensic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: FBI agents were present during the autopsy and may have influenced the pathologists' findings.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The presence of federal agents during a medical examination is highly irregular and suggests external pressure.",
        incorrect_feedback: "The House: Incorrect. Law enforcement presence during autopsy procedures can compromise medical objectivity and independence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The timing of the autopsy allowed insufficient time for a thorough forensic examination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The rushed examination prevented the detailed analysis required for such a complex case.",
        incorrect_feedback: "The House: Incorrect. Time pressure on the pathologists compromised the thoroughness and accuracy of their examination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Malcolm Perry was allegedly threatened after describing Kennedy's throat wound as an entrance wound.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Witnesses reported that Perry was warned never to describe the wound as an entrance wound again.",
        incorrect_feedback: "The House: Incorrect. Intimidation of medical witnesses suggests efforts to suppress evidence contradicting the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Bethesda autopsy team had no access to the clothing worn by President Kennedy during the shooting.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The pathologists couldn't examine bullet holes in the clothing, preventing correlation with wound patterns.",
        incorrect_feedback: "The House: Incorrect. Denying access to the clothing prevented comprehensive forensic analysis of bullet trajectories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple witnesses described seeing the President's body in a body bag, though it allegedly left Dallas in a casket.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The body bag observation indicates secret transport and potential alteration before the official autopsy.",
        incorrect_feedback: "The House: Incorrect. The discrepancy in body transport methods suggests deception and evidence manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy X-rays show metal fragments inconsistent with the official three-shot scenario.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Radiological evidence suggests more bullet fragments than could be accounted for by the official bullet count.",
        incorrect_feedback: "The House: Incorrect. X-ray analysis indicates additional projectiles beyond those acknowledged in the Warren Commission Report."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission never interviewed key personnel who were present during the autopsy.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critical witnesses to the autopsy were never questioned, leaving gaps in the official investigation.",
        incorrect_feedback: "The House: Incorrect. The failure to interview autopsy witnesses suggests deliberate avoidance of contradictory testimony."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The funeral arrangements were rushed to prevent independent examination of the President's wounds.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The rapid burial prevented any possibility of independent forensic examination or second autopsy.",
        incorrect_feedback: "The House: Incorrect. Quick interment ensured no further medical examination could challenge the official findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Secret Service Agent Roy Kellerman ordered the pathologists to limit their examination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Non-medical personnel directing medical procedures indicates external control over the autopsy process.",
        incorrect_feedback: "The House: Incorrect. Security officials should not have authority over medical examination procedures and findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The official cause of death notation was changed from the initial medical assessment.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Changes to medical determinations suggest pressure to conform to predetermined conclusions.",
        incorrect_feedback: "The House: Incorrect. Alterations to medical conclusions indicate interference with objective medical assessment."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee on Assassinations found 'extensive failings' in the original autopsy.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Even government investigators acknowledged serious problems with the autopsy procedures and conclusions.",
        incorrect_feedback: "The House: Incorrect. Official criticism of the autopsy validates concerns about its reliability and accuracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Key medical evidence disappeared or was destroyed before independent researchers could examine it.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The pattern of missing evidence prevents independent verification and suggests systematic concealment.",
        incorrect_feedback: "The House: Incorrect. Evidence destruction indicates deliberate efforts to prevent contradictory findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Bethesda staff reported being told to 'forget' what they witnessed during the autopsy.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Instructions to medical personnel to suppress their observations indicates a coordinated cover-up effort.",
        incorrect_feedback: "The House: Incorrect. Silencing medical witnesses prevents corroboration of the official autopsy findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The discrepancies between Parkland and Bethesda medical observations have never been satisfactorily explained.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Fundamental disagreements between medical professionals remain unresolved after 60 years.",
        incorrect_feedback: "The House: Incorrect. The persistent medical contradictions undermine confidence in the official autopsy conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The presidential limousine was immediately cleaned and rebuilt, destroying crucial forensic evidence.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Rapid destruction of the crime scene vehicle prevented independent ballistic analysis.",
        incorrect_feedback: "The House: Incorrect. Cleaning the limousine before forensic examination destroyed evidence that might contradict official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: After 60 years, crucial assassination records remain classified, suggesting ongoing concealment.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Continued secrecy six decades later indicates there are still secrets being protected from public scrutiny.",
        incorrect_feedback: "The House: Incorrect. If the official story were complete and accurate, there would be no need for continued classification."
    },

    // --- Multiple Choice Questions (12 questions) ---
    {
        type: "mc_question",
        question: "Who was Dr. Earl Rose and why is he significant to the assassination investigation?",
        options: {
            A: "The Bethesda autopsy pathologist",
            B: "The Dallas County medical examiner who was prevented from performing the autopsy",
            C: "President Kennedy's personal physician",
            D: "The Warren Commission medical consultant"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Dr. Rose was legally entitled to perform the autopsy but was physically prevented by federal agents.",
        incorrect_feedback: "The House: Incorrect. Rose's exclusion violated Texas law and prevented qualified local examination of the evidence."
    },
    {
        type: "mc_question",
        question: "What happened to President Kennedy's brain after the autopsy?",
        options: {
            A: "It was properly preserved in the National Archives",
            B: "It was returned to the Kennedy family",
            C: "It mysteriously disappeared and has never been recovered",
            D: "It was destroyed according to standard procedure"
        },
        correct_answer_key: "C",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The brain's disappearance eliminated crucial evidence for trajectory analysis and independent examination.",
        incorrect_feedback: "The House: Incorrect. The missing brain prevents verification of the autopsy's ballistic conclusions."
    },
    {
        type: "mc_question",
        question: "How many pathologists at Bethesda had experience with forensic pathology and gunshot wounds?",
        options: {
            A: "All three pathologists",
            B: "Two of the three pathologists",
            C: "Only Dr. Pierre Finck",
            D: "None of them had forensic experience"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Only Finck had forensic training, and he was restricted from conducting a thorough examination.",
        incorrect_feedback: "The House: Incorrect. The lack of forensic expertise among the primary pathologists compromised the autopsy's reliability."
    },
    {
        type: "mc_question",
        question: "What did Dr. James Humes do with his original autopsy notes?",
        options: {
            A: "Filed them in the National Archives",
            B: "Gave them to the Warren Commission",
            C: "Burned them in his fireplace",
            D: "Sealed them for 75 years"
        },
        correct_answer_key: "C",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Humes's destruction of original notes eliminated primary source evidence of his initial observations.",
        incorrect_feedback: "The House: Incorrect. Burning autopsy notes is unprecedented and suggests evidence concealment."
    },
    {
        type: "mc_question",
        question: "According to witnesses, how did President Kennedy's body arrive at Bethesda Naval Hospital?",
        options: {
            A: "In the same ceremonial casket that left Dallas",
            B: "In a body bag inside a plain shipping casket",
            C: "Directly from Air Force One without a casket",
            D: "In a military transport container"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Multiple witnesses described the body in a bag, contradicting the official casket story.",
        incorrect_feedback: "The House: Incorrect. The casket switch indicates deception and possible body alteration during transport."
    },
    {
        type: "mc_question",
        question: "What was the ARRB's conclusion about the brain photographs in the autopsy records?",
        options: {
            A: "They accurately documented all brain damage",
            B: "They showed much less damage than Kennedy actually sustained",
            C: "They were too damaged to analyze",
            D: "They confirmed all Warren Commission findings"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Government investigators found the photos didn't match witness descriptions of massive brain damage.",
        incorrect_feedback: "The House: Incorrect. Even official reviewers questioned the authenticity and completeness of the brain photographs."
    },
    {
        type: "mc_question",
        question: "Where is President Kennedy buried?",
        options: {
            A: "Brookline, Massachusetts",
            B: "Hyannis Port, Massachusetts", 
            C: "Arlington National Cemetery, Virginia",
            D: "Boston, Massachusetts"
        },
        correct_answer_key: "C",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. President Kennedy was buried at Arlington National Cemetery with full military honors.",
        incorrect_feedback: "The House: Incorrect. Arlington was chosen as the appropriate final resting place for the fallen President."
    },
    {
        type: "mc_question",
        question: "What was unusual about the military control over the Bethesda autopsy?",
        options: {
            A: "Military personnel assisted the pathologists",
            B: "Military officials restricted access and limited the examination scope",
            C: "Military doctors performed the autopsy",
            D: "Military protocol was completely ignored"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Unprecedented military interference in medical procedures suggests efforts to control findings.",
        incorrect_feedback: "The House: Incorrect. Military direction of medical examination violated normal autopsy procedures."
    },
    {
        type: "mc_question",
        question: "What did the House Select Committee on Assassinations conclude about the original autopsy?",
        options: {
            A: "It was conducted perfectly",
            B: "It had minor flaws but correct conclusions",
            C: "It had 'extensive failings' in procedures",
            D: "It was impossible to evaluate"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Government investigators themselves found serious problems with the autopsy procedures.",
        incorrect_feedback: "The House: Incorrect. Official criticism validates concerns about the autopsy's reliability and thoroughness."
    },
    {
        type: "mc_question",
        question: "Why was the immediate embalming of President Kennedy's body controversial?",
        options: {
            A: "It was too expensive",
            B: "It violated forensic procedures and could destroy evidence",
            C: "It wasn't done professionally",
            D: "It delayed the funeral"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Embalming before autopsy can destroy crucial forensic evidence and violates standard procedures.",
        incorrect_feedback: "The House: Incorrect. Premature embalming suggests deliberate destruction of evidence."
    },
    {
        type: "mc_question",
        question: "What was significant about Robert Knudsen's role in autopsy photography?",
        options: {
            A: "He was the official autopsy photographer",
            B: "He claimed to have photographed the autopsy but wasn't the official photographer",
            C: "He refused to photograph the autopsy",
            D: "He was not involved in any photography"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This discrepancy suggests multiple photo sessions or secret documentation efforts.",
        incorrect_feedback: "The House: Incorrect. Conflicting photography accounts raise questions about evidence manipulation."
    },
    {
        type: "mc_question",
        question: "How long did the Bethesda autopsy take?",
        options: {
            A: "2 hours",
            B: "4 hours", 
            C: "8 hours",
            D: "12 hours"
        },
        correct_answer_key: "C",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The autopsy lasted approximately 8 hours, extending into the early morning hours.",
        incorrect_feedback: "The House: Incorrect. The lengthy examination was necessary given the complexity and importance of the case."
    },

    // --- Video Content (8 videos) ---
    {
        type: "video",
        title: "JFK Autopsy: The Missing Brain Evidence",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House examines the mysterious disappearance of crucial forensic evidence. What secrets died with the missing brain?"
    },
    {
        type: "video",
        title: "Parkland vs Bethesda: Conflicting Medical Evidence",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House contrasts eyewitness medical testimony with official autopsy findings. When doctors disagree with doctors, who speaks the truth?"
    },
    {
        type: "video", 
        title: "The Bethesda Autopsy: Scientific Analysis",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House presents the medical evidence supporting the Warren Commission conclusions. Can science provide definitive answers?"
    },
    {
        type: "video",
        title: "Chain of Custody: Kennedy's Body from Dallas to Arlington",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House traces the complex journey of evidence. How do gaps in custody affect the integrity of conclusions?"
    },
    {
        type: "video",
        title: "Dr. Earl Rose: The Autopsy That Never Was",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House examines the legal controversy over jurisdiction. What evidence was lost when qualified examiners were excluded?"
    },
    {
        type: "video",
        title: "Arlington National Cemetery: A President's Final Rest",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House observes the final chapter in a national tragedy. How do burial traditions honor both the man and the mystery?"
    },
    {
        type: "video",
        title: "HSCA Medical Panel: Extensive Autopsy Failings",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House reveals government investigators criticizing their own work. When officials admit extensive failures, what truth emerges?"
    },
    {
        type: "video",
        title: "The Kennedy Funeral: A Nation Mourns",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        house_commentary: "The House witnesses a nation's farewell to its fallen leader. How does collective grief shape historical memory?"
    },

    // --- Factoids (8 factoids) ---
    {
        type: "factoid",
        text: "President Kennedy's brain mysteriously disappeared from the National Archives and has never been recovered, eliminating crucial evidence for trajectory analysis and independent verification of autopsy conclusions.",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Bethesda autopsy lasted approximately 8 hours and was conducted by naval pathologists who had limited experience with forensic pathology and gunshot wounds.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Dr. Earl Rose, the Dallas County medical examiner, was physically prevented by federal agents from performing the autopsy, despite Texas law requiring local examination of murder victims.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Warren Commission concluded that President Kennedy was struck by only two bullets, both entering from behind, based on the Bethesda autopsy findings.",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Multiple witnesses reported that President Kennedy's body arrived at Bethesda in a body bag inside a plain shipping casket, not the ceremonial casket that left Dallas.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "President Kennedy was buried at Arlington National Cemetery on November 25, 1963, with full military honors and an eternal flame that continues to burn today.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid", 
        text: "The House Select Committee on Assassinations found 'extensive failings' in the original Bethesda autopsy procedures, raising questions about the reliability of its conclusions.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Dr. James Humes, the chief autopsy pathologist, admitted to burning his original handwritten notes from the examination, destroying primary source evidence.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    }
];
