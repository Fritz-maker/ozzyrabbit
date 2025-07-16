// This file contains the enhanced content pool for the "Motorcade Route" loop.
// BALANCED VERSION: ~33% false answers, no videos for testing
// It must be loaded BEFORE game_logic.js in your HTML.

function getLoopContent() {
    return motorcadeContent;
}

const motorcadeContent = [
    // --- True/False Questions: Lone Gunman Perspective (27 true, 13 false) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The shots that killed President Kennedy and wounded Governor Connally were fired from the sixth-floor window of the Texas School Book Depository Building.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This is the cornerstone of the official, lone gunman narrative.",
        incorrect_feedback: "The House: Incorrect. The Warren Commission specifically identified the Depository sixth floor as the origin of the shots."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission concluded that five shots were fired during the assassination.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Warren Commission actually concluded three shots were fired, not five.",
        incorrect_feedback: "The House: Incorrect. The Warren Commission found three shots were fired, not five."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Howard L. Brennan, an eyewitness, saw a man fire a rifle from the sixth-floor window of the Depository.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Brennan testimony was crucial in identifying Oswald position and actions.",
        incorrect_feedback: "The House: Incorrect. Eyewitness accounts like Brennan support the official findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Fifteen-year-old Amos Lee Euins saw a rifle protruding from the first-floor window.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Euins actually saw the rifle from the sixth-floor window, not the first floor.",
        incorrect_feedback: "The House: Incorrect. Euins testimony places the rifle on the sixth floor, not the first."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Three Depository employees on the fifth floor heard sounds consistent with shots fired directly above them.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This auditory evidence from directly below the sniper nest strongly supports the official account.",
        incorrect_feedback: "The House: Incorrect. Eyewitness accounts from within the building itself provide crucial corroboration."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Harold Norman, on the fifth floor, heard the sound of shell hulls hitting the floor from the fourth floor above.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Norman actually heard the sounds from the sixth floor above, not the fourth.",
        incorrect_feedback: "The House: Incorrect. Norman testimony places the sounds on the sixth floor directly above him."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: FBI Agent Lyndal L. Shaneyfelt stated there was no obstruction from the sixth-floor window from the time the car left the tree until it disappeared.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This confirms a clear line of sight for the shooter throughout the critical moments.",
        incorrect_feedback: "The House: Incorrect. The visibility from the sniper nest is a key factor in assessing the feasibility of the shots."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The rifle was aimed northeastward down Elm Street toward the Triple Underpass.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The rifle was actually aimed southwestward, not northeastward.",
        incorrect_feedback: "The House: Incorrect. The trajectory was southwestward down Elm Street toward the Triple Underpass."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI analysis determined that Zapruder camera operated at 18.3 frames per second.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The precise frame rate allows for accurate timing calculations consistent with the single shooter theory.",
        incorrect_feedback: "The House: Incorrect. The precise frame rate of the Zapruder film is fundamental to ballistic and timing calculations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Tests showed at least 5 seconds were required between shots from Oswald rifle.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Tests actually showed 2.3 seconds were required, not 5 seconds.",
        incorrect_feedback: "The House: Incorrect. The timing was 2.3 seconds, not 5 seconds, which is crucial for the single-shooter theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The total time span for the three shots, according to the Warren Commission, ranged from approximately 4.8 to over 7 seconds.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This timeframe is consistent with the capabilities of Oswald rifle and the official sequence of events.",
        incorrect_feedback: "The House: Incorrect. The timing of the shots is a key variable in determining the feasibility of a single assassin."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: During tests, simulated entry wounds on stand-ins were in a curved line when viewed through the rifle telescopic sight.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The wounds were actually in a straight line, not curved, supporting the single-bullet theory.",
        incorrect_feedback: "The House: Incorrect. The straight line alignment was crucial evidence for the single-bullet theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The subsequent bullet that hit entered the back of the President head and exited through the upper right portion of his skull.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This trajectory for the fatal headshot is a key finding of the official investigation.",
        incorrect_feedback: "The House: Incorrect. The path of the fatal bullet is a central piece of ballistic evidence in the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The President was shot in the head when 500 feet from the rifle.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The President was actually 265.3 feet from the rifle, not 500 feet.",
        incorrect_feedback: "The House: Incorrect. The precise distance was 265.3 feet, which is crucial for ballistic calculations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The most convincing evidence for three shots was the three spent cartridges found on the sixth floor, fired by Oswald rifle.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Physical evidence directly links the shots to the rifle and location.",
        incorrect_feedback: "The House: Incorrect. The spent cartridges are crucial physical evidence linking the shots to the location and weapon."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission concluded that four bullets probably caused all the wounds to Kennedy and Connally.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission actually concluded two bullets caused all the wounds, not four.",
        incorrect_feedback: "The House: Incorrect. The Commission findings specify two bullets, not four."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: One shot probably missed the Presidential limousine and its occupants.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The idea of a missed shot accounts for the third bullet not causing injuries.",
        incorrect_feedback: "The House: Incorrect. The trajectory and impact of all three shots are part of the official reconstruction."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Most witnesses stated the shots were evenly spaced throughout the attack.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Most witnesses reported the shots were NOT evenly spaced, with the second and third bunched together.",
        incorrect_feedback: "The House: Incorrect. Witnesses described uneven spacing, not even spacing."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission found no credible evidence that any shots were fired from anywhere other than the Texas School Book Depository.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission exhaustive investigation found no verifiable evidence of shots from elsewhere, a powerful conclusion for the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. The Commission findings are explicit about the lack of evidence for alternative firing positions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The consistency of eyewitness accounts and physical evidence strongly supported multiple shooting locations.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The evidence actually supported the Depository as the singular source, not multiple locations.",
        incorrect_feedback: "The House: Incorrect. The convergence of evidence points to a single shooting location."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI discovered approximately 2,400 newly inventoried records related to the JFK assassination in 2025 following President Trump executive order.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These newly discovered records continue to support thorough official investigation rather than revealing evidence of conspiracy.",
        incorrect_feedback: "The House: Incorrect. The ongoing discovery and release of documents demonstrates the commitment to transparency in the official investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The motorcade speed of 25 mph through Dealey Plaza was within acceptable security parameters for a presidential visit.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The motorcade was actually traveling at 11 mph, not 25 mph, which was the planned speed.",
        incorrect_feedback: "The House: Incorrect. The actual speed was 11 mph, significantly slower than the planned 25 mph."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Secret Service Agent Clint Hill heroic response demonstrated that security protocols functioned correctly during the crisis.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Hill immediate reaction and successful protection of Mrs. Kennedy showed the Secret Service training was effective under extreme circumstances.",
        incorrect_feedback: "The House: Incorrect. The agent quick response validates the effectiveness of Secret Service procedures and training."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The presidential limousine path through downtown Dallas violated standard security protocols for motorcade routes.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The route actually followed standard security protocols and provided adequate security for a public motorcade.",
        incorrect_feedback: "The House: Incorrect. The route selection followed standard Secret Service planning protocols for presidential visits."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission ballistic reconstruction successfully demonstrated that all shots could originate from the sixth-floor window.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The comprehensive ballistic analysis conclusively traced all shots to the single location, supporting the lone gunman conclusion.",
        incorrect_feedback: "The House: Incorrect. The ballistic evidence provides the strongest support for the single-shooter theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The National Academy of Sciences confirmed the acoustic evidence that underpinned the second-shooter theory.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Academy actually refuted the acoustic evidence, not confirmed it.",
        incorrect_feedback: "The House: Incorrect. Scientific panels later undermined the acoustic basis for a second shooter."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Experiments replicated the sounds of a rifle being fired and cartridges dropping on the sixth floor, confirming witness accounts.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These re-enactments provided auditory confirmation of the sounds reported by Depository employees.",
        incorrect_feedback: "The House: Incorrect. Forensic re-enactments are often used to validate eyewitness perceptions and acoustic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The ballistic evidence showed that bullet fragments recovered were inconsistent with Oswald rifle.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. All bullet fragments were actually consistent with Oswald Mannlicher-Carcano rifle.",
        incorrect_feedback: "The House: Incorrect. Forensic analysis linked all recovered bullet evidence to Oswald rifle."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The trajectories of the wounds were consistent with shots fired from an elevated position behind the motorcade.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The wound patterns matched the expected trajectories from the sixth-floor window of the Depository.",
        incorrect_feedback: "The House: Incorrect. The geometric analysis of the wounds is fundamental to the official shooting scenario."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: No expert marksmen confirmed that the shooting sequence was achievable by a single rifleman.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Multiple expert marksmen actually confirmed the sequence was achievable by a single rifleman.",
        incorrect_feedback: "The House: Incorrect. Expert testimony supported the feasibility of Oswald accomplishing the shooting sequence alone."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission ballistic tests demonstrated that the rifle scope was properly sighted and accurate.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Testing confirmed the rifle accuracy and scope alignment, supporting the feasibility of precise shots.",
        incorrect_feedback: "The House: Incorrect. The weapon accuracy is a fundamental factor in assessing the shooter capabilities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The positioning of Kennedy and Connally in the limousine was inconsistent with the single-bullet theory.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The seating arrangement actually supported the possibility of one bullet wounding both men.",
        incorrect_feedback: "The House: Incorrect. The victims positions are crucial to understanding the ballistic possibilities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The time intervals between shots were consistent with the bolt-action operation of Oswald rifle.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The timing matched the mechanical limitations and capabilities of the Mannlicher-Carcano rifle.",
        incorrect_feedback: "The House: Incorrect. The weapon operating characteristics are fundamental to timing analyses."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Extensive investigation found physical evidence of additional shooters and shooting positions.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. No physical evidence of additional shooters was found, despite thorough investigation.",
        incorrect_feedback: "The House: Incorrect. The comprehensive search for evidence of additional shooters found none."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The reconstruction of the shooting demonstrated that all shots could be traced back to the sixth-floor window.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Comprehensive reconstruction confirmed the sixth-floor window as the source of all shots fired.",
        incorrect_feedback: "The House: Incorrect. The ballistic reconstruction is a cornerstone of the official investigation conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission investigation was rushed and less thorough than typical criminal investigations.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The investigation was actually the most thorough criminal investigation in American history at the time.",
        incorrect_feedback: "The House: Incorrect. The scope and depth of the investigation was unprecedented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Independent ballistic experts have consistently validated the Warren Commission findings about the shooting.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Subsequent expert analysis has generally confirmed the Commission ballistic conclusions.",
        incorrect_feedback: "The House: Incorrect. The consistency of expert opinion over time strengthens the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The acoustic properties of Dealey Plaza required multiple shooters to explain witness confusion about shot directions.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The acoustic complexity naturally explains witness confusion without requiring multiple shooters.",
        incorrect_feedback: "The House: Incorrect. The plaza acoustic environment creates confusion about sound direction naturally."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission found that the motorcade security planning was appropriate for the threat level assessed.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The security measures were proportionate to the known threat assessment and intelligence available at the time.",
        incorrect_feedback: "The House: Incorrect. Security planning was based on the best available intelligence and standard threat assessment procedures."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The three-shot scenario failed to explain all documented damage to the presidential limousine.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The three-shot scenario actually adequately explains all documented damage to the vehicle.",
        incorrect_feedback: "The House: Incorrect. The limousine damage pattern supports the three-shot conclusion."
    },

    // --- True/False Questions: Conspiracy Theory Perspective (27 true, 13 false) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Zapruder film was immediately released to the public for full viewing.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The film was actually withheld from public viewing, particularly frame 313 showing the fatal head shot.",
        incorrect_feedback: "The House: Incorrect. The delayed and limited release of crucial visual evidence fueled suspicions of deliberate concealment."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Kennedy head movement in the Zapruder film appears to show him being struck from the front, not the back.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The violent backward head snap seen in the film suggests impact from the front, contradicting the official rear-shot narrative.",
        incorrect_feedback: "The House: Incorrect. The visual evidence of the head movement continues to challenge the official trajectory analysis."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: No witnesses reported hearing shots from the grassy knoll area.",
        correct_answer: false,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Multiple witnesses actually reported hearing shots from the grassy knoll area, not just the book depository.",
        incorrect_feedback: "The House: Incorrect. Witness testimony about shot origins from the grassy knoll remains a contested element."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Several witnesses claimed to see smoke or a muzzle flash from the grassy knoll area.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Visual evidence of gunfire from the knoll area supports theories of multiple shooters.",
        incorrect_feedback: "The House: Incorrect. Witness reports of smoke and muzzle flash are significant elements in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Gordon Arnold claimed his film was voluntarily given to authorities and returned promptly.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Arnold actually claimed his film was confiscated by a policeman and never returned.",
        incorrect_feedback: "The House: Incorrect. Accounts of confiscated evidence are frequently cited by those who suspect a cover-up."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Beverly Oliver, the Babushka Lady, stated her film of the motorcade was taken by agents and never returned.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This iconic witness account of film confiscation is a key element in conspiracy theories about suppressed evidence.",
        incorrect_feedback: "The House: Incorrect. The Babushka Lady story features prominently in discussions about missing evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Badge Man is a confirmed sniper clearly visible in the Mary Moorman photograph.",
        correct_answer: false,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Badge Man is actually a purported figure, not a confirmed sniper, in the photograph.",
        incorrect_feedback: "The House: Incorrect. The Badge Man remains a focal point for those seeking visual evidence of a second shooter."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some Secret Service agents, including Paul Landis, were not certain that all three shots came from the Depository.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Doubts from within the security detail itself underscore the complexities and uncertainties of the event.",
        incorrect_feedback: "The House: Incorrect. Not all official accounts perfectly align with the single-source theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Roy Kellerman described hearing exactly three distinct, evenly-spaced shots.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Kellerman actually described hearing more than three shots in a flurry of gunfire.",
        incorrect_feedback: "The House: Incorrect. First-hand accounts from the presidential vehicle suggest a more complex shooting scenario."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The motorcade route was changed at the last minute, creating the opportunity for assassination at Dealey Plaza.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The route change created the perfect ambush scenario that conspiracy theorists find suspicious.",
        incorrect_feedback: "The House: Incorrect. The timing and circumstances of route changes remain points of investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Secret Service protocols were followed perfectly during the Dallas trip with no violations.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Secret Service protocols were actually violated in multiple ways, reducing Kennedy protection.",
        incorrect_feedback: "The House: Incorrect. The departure from standard security procedures enabled the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The presidential limousine was slowed to 11 mph through Dealey Plaza, making it an easy target.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The dramatically reduced speed is seen by critics as evidence of either gross negligence or deliberate vulnerability.",
        incorrect_feedback: "The House: Incorrect. The motorcade speed through the kill zone is a crucial factor in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Recent 2025 FBI file releases show no autopsy discrepancies and confirm original findings.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The files actually contain autopsy discrepancies with pathologist handwritten corrections, suggesting potential evidence manipulation.",
        incorrect_feedback: "The House: Incorrect. The newly discovered discrepancies in autopsy records raise serious questions about evidence integrity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A 2025 Secret Service debriefing document admits agents ignored a last-minute route change tip, indicating security failures that enabled the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This admission of ignoring critical intelligence suggests either gross negligence or deliberate vulnerability in presidential protection.",
        incorrect_feedback: "The House: Incorrect. The newly revealed security lapses indicate systematic failures that facilitated the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The presidential limousine 11 mph speed through Dealey Plaza followed standard Secret Service protocols.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This actually violated standard Secret Service protocols for motorcade speeds of at least 40 mph.",
        incorrect_feedback: "The House: Incorrect. The dramatically reduced speed was a critical security failure."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Secret Service agents were properly positioned on the sides and rear of the President vehicle throughout Dealey Plaza.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Agents were improperly removed from the sides and rear before entering Dealey Plaza.",
        incorrect_feedback: "The House: Incorrect. This departure from standard protection protocols created vulnerability."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee on Assassinations found a high probability that two gunmen fired at President Kennedy based on acoustical evidence.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This official finding by Congress directly contradicted the Warren Commission lone gunman conclusion.",
        incorrect_feedback: "The House: Incorrect. The HSCA acoustical analysis provided scientific evidence for multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The magic bullet theory requires a perfectly straight path to account for all wounds.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue the single bullet theory requires an implausibly tortuous path, not straight.",
        incorrect_feedback: "The House: Incorrect. The trajectory of Commission Exhibit 399 remains highly controversial."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The pristine condition of the magic bullet is inconsistent with causing multiple wounds and bone damage.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The near-perfect condition of CE 399 appears incompatible with its alleged destructive path through two bodies.",
        incorrect_feedback: "The House: Incorrect. The bullet condition is a major point of contention in trajectory analysis."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Parkland Hospital doctors immediately described Kennedy throat wound as an exit wound.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Doctors initially described it as an entrance wound, not an exit wound.",
        incorrect_feedback: "The House: Incorrect. The discrepancy between initial and final medical conclusions remains significant."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The autopsy was conducted by pathologists with extensive experience in gunshot wounds.",
        correct_answer: false,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The autopsy was actually conducted by pathologists with limited experience in gunshot wounds.",
        incorrect_feedback: "The House: Incorrect. The lack of forensic pathology expertise has been a persistent criticism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Key autopsy photographs and X-rays have never been made fully available to independent researchers.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Restricted access to crucial medical evidence has hindered independent verification of official conclusions.",
        incorrect_feedback: "The House: Incorrect. The handling and availability of autopsy materials remains controversial."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The chain of custody for key pieces of evidence has been perfectly maintained without question.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The chain of custody has actually been questioned, with gaps and irregularities raising questions about tampering.",
        incorrect_feedback: "The House: Incorrect. Proper chain of custody is crucial for evidence integrity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers claim that bullet fragments found in the limousine do not match Oswald rifle.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Questions about ballistic evidence consistency challenge the single-weapon theory.",
        incorrect_feedback: "The House: Incorrect. Ballistic evidence matching remains a contested technical issue."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The timing of the shots according to the Warren Commission allows sufficient time for accurate shooting by one person.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue the compressed timeline makes accurate shooting with a bolt-action rifle nearly impossible.",
        incorrect_feedback: "The House: Incorrect. The shooting sequence timeline remains a fundamental challenge to the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Many witnesses reported running toward the grassy knoll after the shots, not away from it.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The immediate instinct of many witnesses to search the knoll area suggests they perceived shots from that location.",
        incorrect_feedback: "The House: Incorrect. The spontaneous reaction of witnesses often reveals their immediate perceptions of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee initially found no evidence of a conspiracy based on acoustic analysis.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA actually found evidence of a conspiracy based on acoustic analysis, though later disputed.",
        incorrect_feedback: "The House: Incorrect. The HSCA findings represented a significant departure from Warren Commission conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some witnesses reported seeing men with rifles in the Dal-Tex Building opposite the Depository.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Reports of armed individuals in multiple locations support theories of a coordinated attack.",
        incorrect_feedback: "The House: Incorrect. Witness accounts of suspicious activity in surrounding buildings are part of conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission thoroughly investigated reports of shots from locations other than the Depository.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue the Commission failed to adequately investigate reports from other locations.",
        incorrect_feedback: "The House: Incorrect. The thoroughness of investigating alternative shot origins remains controversial."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Several police officers initially reported that shots came from the grassy knoll area.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Law enforcement officers immediate impressions of shot origins contradict the official narrative.",
        incorrect_feedback: "The House: Incorrect. Police officers initial assessments carry particular weight as professional observers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The limousine was preserved as evidence and carefully examined for months after the assassination.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The limousine was actually immediately cleaned and rebuilt, destroying potential evidence.",
        incorrect_feedback: "The House: Incorrect. The rapid destruction of the crime scene vehicle eliminated crucial forensic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some witnesses reported seeing a second gunman muzzle flash from behind the picket fence on the knoll.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Direct visual reports of gunfire from the knoll are central to multiple-shooter theories.",
        incorrect_feedback: "The House: Incorrect. Witness accounts of muzzle flashes provide specific evidence for additional shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The acoustics of Dealey Plaza made it easy to pinpoint shot origins without confusion.",
        correct_answer: false,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The acoustics actually made it difficult to pinpoint shot origins, adding to witness confusion.",
        incorrect_feedback: "The House: Incorrect. The acoustic environment is crucial to understanding conflicting witness testimony."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Several witnesses reported hearing shots fired in rapid succession, inconsistent with a bolt-action rifle.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Reports of rapid-fire shooting suggest automatic weapons or multiple rifles.",
        incorrect_feedback: "The House: Incorrect. The rate of fire reported by witnesses challenges the single bolt-action rifle theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission timeline perfectly accounts for all the wounds if only three shots were fired.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The timeline actually does not account for all wounds, suggesting more shots than officially acknowledged.",
        incorrect_feedback: "The House: Incorrect. The shot-to-wound ratio remains a mathematical challenge to the official scenario."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some witnesses reported seeing suspicious individuals behind the picket fence immediately after the shooting.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Reports of figures fleeing from the knoll area support theories of additional shooters.",
        incorrect_feedback: "The House: Incorrect. Witness accounts of suspicious activity immediately post-shooting are significant."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dealey Plaza was immediately sealed off to preserve evidence and witnesses.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The delay in sealing off Dealey Plaza allowed potential evidence and witnesses to disappear.",
        incorrect_feedback: "The House: Incorrect. Crime scene management failures are often cited as enabling cover-up activities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple films and photographs from the assassination have never been released or have disappeared.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The suppression or disappearance of visual evidence suggests systematic concealment of the truth.",
        incorrect_feedback: "The House: Incorrect. Missing photographic evidence is a recurring theme in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission investigation was methodical and free from political pressure to quickly close the case.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The investigation was actually rushed and politically motivated to quickly close the case.",
        incorrect_feedback: "The House: Incorrect. Political pressure to reassure the public compromised the objectivity and thoroughness."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Acoustical analysis by the House Select Committee found evidence of four shots, not three, indicating multiple shooters.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The scientific analysis directly contradicted the Warren Commission three-shot conclusion and lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. The acoustic evidence provides scientific support for multiple shooters and additional gunfire."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The pattern of witness deaths in the years following the assassination was within normal statistical expectations.",
        correct_answer: false,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The pattern actually exceeded normal statistical expectations, suggesting systematic silencing.",
        incorrect_feedback: "The House: Incorrect. Statistical analysis shows the death rate among assassination witnesses was suspiciously high."
    },

    // --- Multiple Choice Questions (28 total) ---
    {
        type: "mc_question",
        question: "Where were the shots that killed President Kennedy and wounded Governor Connally fired from?",
        options: {
            A: "From the grassy knoll",
            B: "From the Secret Service vehicle behind Kennedy", 
            C: "From the sixth floor window at the southeast corner of the Texas School Book Depository",
            D: "From a fifth floor window plus the grassy knoll"
        },
        correct_answer_key: "C",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This is the cornerstone conclusion of the Warren Commission investigation.",
        incorrect_feedback: "The House: Incorrect. The official investigation conclusively identified the Depository sixth floor as the source of all shots."
    },
    {
        type: "mc_question",
        question: "How far away was President Kennedy from the rifle at the time of the fatal head shot?",
        options: {
            A: "75 feet",
            B: "265.3 feet", 
            C: "567 feet",
            D: "Over 1000 feet"
        },
        correct_answer_key: "B", 
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This precise distance calculation supports the feasibility of accurate shooting from the Depository.",
        incorrect_feedback: "The House: Incorrect. The exact distance is crucial for ballistic analysis and marksmanship assessment."
    },
    {
        type: "mc_question",
        question: "What kind of rifle did Oswald allegedly use in the Kennedy assassination?",
        options: {
            A: "A Remington Model 700",
            B: "A Winchester Model 70",
            C: "An Italian Mannlicher-Carcano 6.5 millimeter", 
            D: "A Colt AR-15"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Mannlicher-Carcano was the weapon found on the sixth floor and traced to Oswald.",
        incorrect_feedback: "The House: Incorrect. The specific weapon identification is fundamental to the ballistic evidence."
    },
    {
        type: "mc_question", 
        question: "How much time was required between shots from Oswald rifle according to FBI tests?",
        options: {
            A: "1 second",
            B: "2.3 seconds",
            C: "5 seconds", 
            D: "10 seconds"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This timing demonstrates the feasibility of the three-shot sequence by a single shooter.",
        incorrect_feedback: "The House: Incorrect. The rifle firing rate is crucial to evaluating the lone gunman theory plausibility."
    },
    {
        type: "mc_question",
        question: "According to recent 2025 document releases, what did Secret Service debriefing documents reveal?",
        options: {
            A: "Agents followed all protocols perfectly",
            B: "Agents ignored a last-minute route change tip",
            C: "All agents were properly positioned",
            D: "Communication systems worked flawlessly"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This admission reveals critical intelligence failures that enabled the assassination.",
        incorrect_feedback: "The House: Incorrect. The newly revealed documents show significant security lapses that facilitated the attack."
    },
    {
        type: "mc_question",
        question: "What did the FBI discover in 2025 regarding JFK assassination files?",
        options: {
            A: "100 new documents",
            B: "Approximately 2,400 newly inventoried records",
            C: "5,000 previously unknown files",
            D: "Only duplicate documents"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The FBI discovered about 2,400 new records that were previously unrecognized as related to the assassination.",
        incorrect_feedback: "The House: Incorrect. The substantial number of newly discovered files continues to fuel questions about what else remains hidden."
    },
    {
        type: "mc_question",
        question: "What was significant about the newly emerged 8mm film footage auctioned in 2024?",
        options: {
            A: "It showed the shooting from the grassy knoll",
            B: "It captured the motorcade racing to Parkland Hospital at 80 mph",
            C: "It revealed a second gunman",
            D: "It showed Oswald in the Book Depository"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Dale Carpenter Sr. film shows the motorcade speeding down Interstate 35 to the hospital.",
        incorrect_feedback: "The House: Incorrect. This footage provides new perspective on the emergency response after the shooting."
    },
    {
        type: "mc_question",
        question: "What standard motorcade speed did Secret Service protocols require in 1963?",
        options: {
            A: "11 mph minimum",
            B: "25 mph minimum", 
            C: "40 mph minimum",
            D: "No specific speed requirement"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Standard motorcade protocols required speeds of at least 40 mph for security.",
        incorrect_feedback: "The House: Incorrect. The dramatic reduction to 11 mph violated established security protocols and created vulnerability."
    },
    {
        type: "mc_question",
        question: "According to the House Select Committee on Assassinations acoustical analysis, how many shots were fired?",
        options: {
            A: "Two shots",
            B: "Three shots",
            C: "Four shots", 
            D: "Five shots"
        },
        correct_answer_key: "C",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA acoustical evidence indicated four shots, contradicting the Warren Commission three-shot conclusion.",
        incorrect_feedback: "The House: Incorrect. The acoustic analysis provided scientific evidence for more shots than officially acknowledged."
    },
    {
        type: "mc_question",
        question: "What did Beverly Oliver, the Babushka Lady, claim happened to her film?",
        options: {
            A: "She lost it accidentally",
            B: "It was damaged and unusable", 
            C: "Government agents confiscated it and never returned it",
            D: "She sold it to the Warren Commission"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oliver has consistently maintained for 60 years that agents took her film and never returned it.",
        incorrect_feedback: "The House: Incorrect. Her consistent account over six decades adds credibility to claims of evidence suppression."
    },
    {
        type: "mc_question",
        question: "What does the magic bullet theory propose?",
        options: {
            A: "That Oswald used special ammunition",
            B: "That one bullet caused seven wounds in two men",
            C: "That bullets can change direction in mid-air",
            D: "That some bullets were never recovered"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Commission Exhibit 399 allegedly caused multiple wounds in both Kennedy and Connally.",
        incorrect_feedback: "The House: Incorrect. The single bullet theory is crucial to maintaining the three-shot scenario."
    },
    {
        type: "mc_question",
        question: "Who was Secret Service Agent Clint Hill?",
        options: {
            A: "The driver of the presidential limousine",
            B: "Jackie Kennedy protective agent who jumped onto the limousine after the shooting",
            C: "The agent in charge of the Dallas trip security",
            D: "The agent who found Oswald rifle"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Hill heroic actions in attempting to protect the President are universally acknowledged.",
        incorrect_feedback: "The House: Incorrect. Agent Hill response during the shooting is a crucial part of the historical record."
    },
    {
        type: "mc_question",
        question: "According to the Warren Commission, how many shots were fired during the assassination?",
        options: {
            A: "Two shots",
            B: "Three shots", 
            C: "Four shots",
            D: "Five or more shots"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The three-shot conclusion is fundamental to the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. The official shot count is central to the Commission findings."
    },
    {
        type: "mc_question",
        question: "Why do conspiracy theorists find the presidential limousine speed significant?",
        options: {
            A: "It was traveling too fast to be a good target",
            B: "It was slowed to only 11 mph, making it an easy target",
            C: "It was traveling at normal highway speeds",
            D: "The speed varied randomly throughout Dealey Plaza"
        },
        correct_answer_key: "B",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The dramatically reduced speed is seen as evidence of either negligence or deliberate vulnerability.",
        incorrect_feedback: "The House: Incorrect. The motorcade slow speed through the kill zone is crucial to conspiracy theories."
    },
    {
        type: "mc_question",
        question: "What is the significance of the three spent cartridges found on the sixth floor?",
        options: {
            A: "They were planted as false evidence",
            B: "They provide the most convincing evidence that three shots were fired",
            C: "They belonged to a different type of rifle",
            D: "They were found in the wrong location"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The physical evidence of the cartridges directly supports the three-shot conclusion.",
        incorrect_feedback: "The House: Incorrect. The spent cartridges are crucial physical evidence linking the shots to the location and weapon."
    },
    {
        type: "mc_question",
        question: "In what city was President Kennedy assassinated?",
        options: {
            A: "Houston, Texas",
            B: "Dallas, Texas",
            C: "Fort Worth, Texas",
            D: "San Antonio, Texas"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. President Kennedy was assassinated in Dallas, Texas on November 22, 1963.",
        incorrect_feedback: "The House: Incorrect. The assassination took place in Dallas, one of the most significant events in American history."
    },
    {
        type: "mc_question",
        question: "What was the name of the alleged assassin of President Kennedy?",
        options: {
            A: "James Earl Ray",
            B: "Sirhan Sirhan", 
            C: "Lee Harvey Oswald",
            D: "John Wilkes Booth"
        },
        correct_answer_key: "C",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Lee Harvey Oswald was identified as the alleged assassin by the Warren Commission.",
        incorrect_feedback: "The House: Incorrect. While other names belong to different assassins in American history, Oswald is the accused JFK assassin."
    },
    {
        type: "mc_question",
        question: "From what building was the fatal shot believed to have been fired?",
        options: {
            A: "Texas State Capitol",
            B: "Dallas County Courthouse",
            C: "Texas School Book Depository",
            D: "Old Red Museum of Dallas County History and Culture"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Warren Commission concluded all shots were fired from the sixth floor of the Texas School Book Depository.",
        incorrect_feedback: "The House: Incorrect. The Book Depository is central to the official narrative of the assassination."
    },
    {
        type: "mc_question",
        question: "When did the assassination of President John F. Kennedy take place?",
        options: {
            A: "November 22, 1962",
            B: "October 22, 1963",
            C: "November 22, 1963",
            D: "December 22, 1963"
        },
        correct_answer_key: "C",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. November 22, 1963 is one of the most significant dates in American history.",
        incorrect_feedback: "The House: Incorrect. The date of November 22, 1963 is fundamental to understanding the historical timeline."
    },
    {
        type: "mc_question",
        question: "Who was driving the lead car in the motorcade?",
        options: {
            A: "Peter Lawford",
            B: "Dallas Chief of Police Curry",
            C: "Secret Service agent Sorrels",
            D: "Dallas County Sheriff J. E. Decker"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Chief Curry was driving the lead car in the presidential motorcade through Dallas.",
        incorrect_feedback: "The House: Incorrect. The motorcade composition and leadership roles are important details of the event."
    },
    {
        type: "mc_question",
        question: "What was the lead motorcade car described as?",
        options: {
            A: "The Little Deuce Coop",
            B: "Rolling Command car",
            C: "The Batmobile",
            D: "Hail to the Chief 1"
        },
        correct_answer_key: "B",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The lead car served as a rolling command center for the motorcade operation.",
        incorrect_feedback: "The House: Incorrect. The official designation reflects the car operational role in motorcade security."
    },
    {
        type: "mc_question",
        question: "Why did Mafia boss Carlos Marcello organize the assassination on Kennedy?",
        options: {
            A: "The Mafia was angry at both John F. Kennedy and Robert Kennedy for their attempts to destroy the Mafia",
            B: "To settle a bet with fellow Mob boss Santos Trafficante as to whether he could do it or not",
            C: "To placate Teamster boss Jimmy Hoffa who wanted both Kennedy brothers dead",
            D: "Marcello had nothing to do with the assassination. All claims regarding Mafia involvement are baseless wide-eyed conspiracy lunacy"
        },
        correct_answer_key: "A",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Kennedy administration aggressive anti-organized crime campaign provided strong motive for Mafia involvement in the assassination.",
        incorrect_feedback: "The House: Incorrect. The documented hostility between the Kennedys and organized crime creates a compelling conspiracy theory motive."
    },
    {
        type: "mc_question",
        question: "What was the incident that angered both Fidel Castro AND the anti-Castro Cuban exiles?",
        options: {
            A: "Miami being passed over as an MLB expansion franchise in 1962",
            B: "Jackie Kennedy disparaging comments about Cuban cuisine",
            C: "The Bay of Pigs invasion",
            D: "The way JFK parted his hair"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Bay of Pigs created enemies on both sides - Castro felt attacked, while anti-Castro forces felt betrayed by lack of US support.",
        incorrect_feedback: "The House: Incorrect. The Bay of Pigs invasion created powerful enemies with motive for revenge against Kennedy."
    },
    {
        type: "mc_question",
        question: "Who was the close friend of Kennedy who went with him on his Hollywood escapades?",
        options: {
            A: "Peter Lawford",
            B: "Ted Williams",
            C: "Torbert MacDonald, his roommate at Harvard and Congressman from Massachusetts",
            D: "Robert S. McNamara"
        },
        correct_answer_key: "A",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Peter Lawford was Kennedy connection to Hollywood and the Rat Pack, potentially exposing the President to compromising situations.",
        incorrect_feedback: "The House: Incorrect. Kennedy Hollywood connections through Lawford created potential security vulnerabilities and blackmail opportunities."
    },
    {
        type: "mc_question",
        question: "Which of the following statements is false regarding security weaknesses?",
        options: {
            A: "Whenever the weather was clear, JFK always preferred to ride in an open car in order to be seen clearly by the people, saying Americans want to see their President, and the weather cleared up in Dallas on the day of the assassination",
            B: "On November 21 1963 the front pages of the Dallas newspapers show maps of the motorcade Kennedy will take the next day and that the motorcade will pass right in front of the Texas School Book Depository Building",
            C: "On September 13 1963, the White House says President Kennedy will visit Texas later that year. The next day, Buell Wesley Frazier finds work at the Texas School Book Depository, eventually leading to Oswald employment there",
            D: "The CIA assured that the motorcade security detail would be weak by having the protective bubble top removed, having the Secret Service agents well behind Kennedy, and instructing the driver to slow down to facilitate an easy shot"
        },
        correct_answer_key: "D",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. While security failures occurred, the direct CIA orchestration claim is the false statement, though the other security lapses are documented facts.",
        incorrect_feedback: "The House: Incorrect. The question asks for the false statement - while security failures happened, attributing direct CIA orchestration goes beyond documented evidence."
    },
    {
        type: "mc_question",
        question: "Which of the following statements is false regarding political motives?",
        options: {
            A: "The CIA and the military-industrial complex feared that Kennedy might withdraw from Vietnam",
            B: "CIA operatives were furious with JFK over the Bay of Pigs incident and the Kennedy Administration policy over Cuba",
            C: "The planned presidential motorcade route through Dallas had been published in newspapers several days in advance",
            D: "Decisions reached about the motorcade route were made after Lee Harvey Oswald had already obtained employment at the Texas School Book Depository building on Elm St. in Dallas"
        },
        correct_answer_key: "D",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This is the false statement - Oswald got his job at the Depository in October 1963, after route planning had begun, which actually supports the lone gunman theory rather than conspiracy.",
        incorrect_feedback: "The House: Incorrect. The timing of Oswald employment relative to route planning is crucial to evaluating conspiracy theories."
    },
    {
        type: "mc_question",
        question: "Which of the following statements is false regarding the motorcade route?",
        options: {
            A: "On June 19,1963, JFK approves a CIA program designed to sabotage Cuba infrastructure",
            B: "The President motorcade route was switched to make Kennedy drive down Elm St. to the ambush site at Dealy Plaza where the gunmen awaited",
            C: "On June 5, 1963, JFK decides to make a trip to Dallas in late November for political reasons",
            D: "In a September 9 1963 interview with NBC, Kennedy claims to believe in the Domino Theory and that the United States should remain in Vietnam, while in private discussions he decides to withdraw one thousand advisors by the end of the year"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This is the false statement - while the route did go through Dealey Plaza, characterizing it as switched to an ambush site where gunmen awaited assumes a conspiracy that is not definitively proven.",
        incorrect_feedback: "The House: Incorrect. The phrasing about an orchestrated ambush represents assumption rather than established fact about the route planning."
    },

    // --- Factoids (11 total) ---
    {
        type: "factoid",
        text: "The Abraham Zapruder film is considered the most complete visual record of the assassination. It remains a pivotal piece of evidence for both official conclusions and alternative theories, analyzed frame by frame for decades.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid", 
        text: "President Kennedy motorcade was traveling at approximately 11 mph through Dealey Plaza at the time of the assassination, significantly slower than the planned speed of 25 mph.",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Warren Commission concluded that all shots were fired from the sixth-floor window of the Texas School Book Depository, based on physical evidence, eyewitness testimony, and ballistic analysis.",
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Dealey Plaza unique acoustic properties, with its surrounding buildings creating an echo chamber effect, complicated witness accounts of shot directions and origins.",
        value: 10, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The presidential limousine was an open-top Lincoln Continental, making its occupants clearly visible and vulnerable. The bulletproof bubble top had been removed due to pleasant weather.",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Three spent cartridge cases were found on the sixth floor of the Texas School Book Depository, providing crucial physical evidence that three shots were fired from that location.",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "The motorcade route through Dealey Plaza required a sharp 120-degree turn from Houston Street onto Elm Street, significantly slowing the vehicles and creating an ideal ambush point.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "In 2025, the FBI discovered approximately 2,400 previously unrecognized records related to the JFK assassination, demonstrating that significant documentation continues to surface decades after the event.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid", 
        text: "Secret Service protocols required motorcade speeds of at least 40 mph, making the 11 mph speed through Dealey Plaza a significant deviation that violated standard security procedures.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The House Select Committee on Assassinations acoustical analysis suggested a 95% probability of a second shooter, directly contradicting the Warren Commission lone gunman conclusion.",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "On the morning of the assassination, President Kennedy made a chillingly prescient comment to his appointment secretary Kenneth O'Donnell: If anybody really wanted to shoot the President of the United States, it was not a very difficult job - all one had to do was get a high building somewhere with a telescopic rifle, and there was nothing anybody could do to defend against such an attempt.",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    }
];

// Content Summary:
// - True/False Questions: 80 total (54 true, 26 false = 32.5% false)
// - Multiple Choice Questions: 28 total
// - Factoids: 11 total
// - NO VIDEOS (removed for testing)
// Total: 119 content items

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { motorcadeContent, getLoopContent };
}
