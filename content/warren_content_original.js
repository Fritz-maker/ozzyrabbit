// Add this at the very beginning of your warren_content.js file
function getLoopContent() {
    return warrenContent;
}
// This file contains the content pool for the "Warren Commission" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const warrenContent = [
    // --- Lone Gunman Factoids (40) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission concluded that Lee Harvey Oswald acted alone in assassinating President Kennedy and murdering Officer J.D. Tippit.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This is the central, definitive conclusion of the Warren Commission.",
        incorrect_feedback: "The House: Incorrect. The Commission's primary finding was Oswald's sole culpability in both killings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found no credible evidence of a conspiracy, domestic or foreign.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This finding is a cornerstone of the lone gunman narrative, refuting claims of a wider plot.",
        incorrect_feedback: "The House: Incorrect. The Commission's explicit statement on the absence of conspiracy evidence is a key finding."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission concluded that President Kennedy was struck by two bullets fired from above and behind him.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This is the official conclusion on the number and direction of the bullets.",
        incorrect_feedback: "The House: Incorrect. The official findings specify the number and trajectory of the shots."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found 'persuasive evidence from the experts' that a single bullet caused Kennedy's throat wound and all of Connally's wounds.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This supports the highly controversial single-bullet theory, vital for a lone gunman conclusion.",
        incorrect_feedback: "The House: Incorrect. The single-bullet theory is a key component of the Commission's findings on the shots."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's conclusion of Oswald acting alone was based on his ownership and possession of the rifle used.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Physical evidence directly linked Oswald to the assassination weapon.",
        incorrect_feedback: "The House: Incorrect. Oswald's possession of the rifle is a key piece of evidence in the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald brought the rifle into the Depository building on the morning of the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This detail positions Oswald as the sole perpetrator, transporting the weapon himself.",
        incorrect_feedback: "The House: Incorrect. Oswald's actions on the morning of the assassination are part of the official findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was present at the time and at the window from which the shots were fired.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald's presence at the sniper's nest is a direct corroboration of his guilt.",
        incorrect_feedback: "The House: Incorrect. His location at the time of the shots is fundamental to the Commission's conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found no evidence that Oswald was 'part of a conspiracy' or aided in his scheme.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This absence of evidence is central to the lone gunman conclusion, despite later challenges.",
        incorrect_feedback: "The House: Incorrect. The Commission's lack of findings regarding accomplices is a key aspect of its report."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission discovered no evidence that the Soviet Union or Cuba were involved in the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This finding aimed to quell international speculation during the Cold War.",
        incorrect_feedback: "The House: Incorrect. The Commission's conclusions on foreign involvement are part of the official record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission ruled out the possibility that Ruby and Oswald were acquainted.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This conclusion supports the idea of Ruby acting independently, without a wider plot.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a key area of investigation for conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found no grounds for believing Ruby's killing of Oswald was part of a conspiracy.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This finding supports the official conclusion that Ruby acted alone.",
        incorrect_feedback: "The House: Incorrect. The Commission's assessment of Ruby's motive is a central point in the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission considered Oswald's avowed commitment to Marxism, resentment of authority, and profound alienation as possible motives.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These psychological and ideological factors are presented as the primary drivers for Oswald's actions.",
        incorrect_feedback: "The House: Incorrect. The Commission delved into Oswald's background for clues to his motivation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found no evidence that anti-Kennedy sentiment in Dallas had any connection with Oswald's actions.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This conclusion implies Oswald acted independently, not as part of a local extremist plot.",
        incorrect_feedback: "The House: Incorrect. The Commission's findings on local sentiments are part of its broader investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission questioned whether Oswald expected to escape, given he left most of his money behind.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This suggests Oswald might have been prepared for capture or death, consistent with a lone, desperate act.",
        incorrect_feedback: "The House: Incorrect. Oswald's actions before and after the assassination are analyzed for signs of a plan."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission concluded Oswald's hostility and disregard for consequences 'molded the character of a man capable of assassinating President Kennedy.'",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This psychological assessment is crucial to the Commission's conclusion about Oswald's capacity.",
        incorrect_feedback: "The House: Incorrect. Oswald's character assessment is fundamental to the official explanation of his motivation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: There is no medical evidence that President Kennedy was struck by a bullet entering the front of the head.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This key absence of evidence refutes claims of a shot from the grassy knoll.",
        incorrect_feedback: "The House: Incorrect. The medical evidence is crucial in dismissing theories of alternative shot directions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The rearward movement of Kennedy's head in the Zapruder film is not fundamentally inconsistent with a bullet striking from the rear.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Official explanations reconcile this visual anomaly with the rear entry conclusion.",
        incorrect_feedback: "The House: Incorrect. The Zapruder film's visual data is often interpreted in various ways, but official explanations address perceived inconsistencies."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A team of forensic pathologists in 1968 and a Rockefeller Commission panel in 1975 reached the same conclusion: Kennedy was struck by two bullets from behind.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Subsequent investigations often reaffirmed the official findings, supporting the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. Later forensic analyses sometimes corroborated earlier official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA concluded that neither any U.S. security or intelligence agencies nor the government of Cuba or the Soviet Union had been involved.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Later official investigations reinforced the absence of evidence for high-level government or foreign conspiracy.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings on government and foreign involvement are often cited in defense of the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Secret Service, FBI, and CIA were not involved in the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This conclusion from a later investigation supports the official stance on agency non-involvement.",
        incorrect_feedback: "The House: Incorrect. Official inquiries into agency involvement often clear them of direct participation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA concluded that the national syndicate of organized crime, as a group, was not involved.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This official conclusion generally clears organized crime as an orchestrator of the assassination.",
        incorrect_feedback: "The House: Incorrect. Later investigations often provided clarity on the scope of organized crime involvement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA concluded that anti-Castro Cuban groups, as groups, were not involved.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This conclusion limits the scope of involvement to individual actions rather than organized group plots.",
        incorrect_feedback: "The House: Incorrect. The involvement of specific groups is a key area of investigation in complex conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's investigation was based on testimony from 552 people and thousands of reports from government agencies.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This highlights the extensive nature of the Commission's data gathering, supporting its thoroughness.",
        incorrect_feedback: "The House: Incorrect. The scope of the Commission's investigation is a point often highlighted by its defenders."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's findings were published in a comprehensive twenty-six-volume report.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The sheer volume of the report underscores the depth of the official inquiry.",
        incorrect_feedback: "The House: Incorrect. The scale of the Commission's published findings is a notable detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The National Academy of Sciences concluded the HSCA's acoustic evidence was 'hooey' and some sounds occurred a minute after the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This strong scientific refutation significantly undermined the HSCA's finding of a high probability of conspiracy.",
        incorrect_feedback: "The House: Incorrect. Later scientific reviews often play a role in validating or refuting earlier investigative conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: No major revelations have been found in declassified document dumps in the 60 years since the President was killed.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite extensive declassification, no 'smoking gun' has emerged to overturn the lone gunman conclusion.",
        incorrect_feedback: "The House: Incorrect. The impact of declassified documents is often a point of contention and reinterpretation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission stated the single bullet theory was 'not essential to its conclusions' and all members had no doubt shots were from the Depository.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This distinction emphasizes the Commission's certainty about the Depository as the source, even if the bullet's path was debated.",
        incorrect_feedback: "The House: Incorrect. The Commission's stance on the single bullet theory's role in its overall findings is a nuanced detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Nerve damage from a bullet entering the President's head could have caused his back muscles to tighten, moving his head rearward.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This physiological explanation provides a scientific basis for the head's movement consistent with a shot from behind.",
        incorrect_feedback: "The House: Incorrect. Scientific explanations are provided to align visual evidence with ballistic conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found no evidence that Oswald was employed, persuaded or encouraged by any government.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This finding dismisses theories of foreign or domestic government manipulation of Oswald.",
        incorrect_feedback: "The House: Incorrect. The Commission's conclusions on government involvement are fundamental to the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission investigated the Communist Party U.S.A., the Fair Play for Cuba Committee, and the Socialist Workers Party in connection with the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission's thorough investigation of left-wing groups demonstrates its comprehensive approach.",
        incorrect_feedback: "The House: Incorrect. The breadth of the Commission's investigation into potential affiliations is well-documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found no evidence of conspiracy, subversion, or disloyalty to the U.S. Government by any Federal, State, or local official.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This sweeping conclusion clears all levels of government from complicity in the assassination.",
        incorrect_feedback: "The House: Incorrect. The Commission's findings on government integrity are a cornerstone of its conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Four experts in firearms identification concluded that bullets and cartridge cases were fired from the C2766 Mannlicher-Carcano rifle found on the sixth floor of the Depository.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Expert testimony definitively linked the physical evidence to Oswald's weapon.",
        incorrect_feedback: "The House: Incorrect. Forensic ballistics evidence is fundamental to the Commission's conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI and CIA conducted joint tests on May 24, 1964, using agents positioned like Kennedy and Connally to reconstruct the shooting.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These scientific reconstructions supported the official trajectory and timing of the shots.",
        incorrect_feedback: "The House: Incorrect. Physical reconstruction tests were a key component of the Commission's investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's findings have been consistently supported by later scientific and forensic analysis.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Subsequent investigations and scientific advances have generally confirmed the Commission's core conclusions.",
        incorrect_feedback: "The House: Incorrect. The durability of the Commission's findings under later scrutiny supports their validity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission concluded that Ruby acted spontaneously and emotionally, not as part of a calculated plan.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This assessment supports the theory that Ruby's actions were impulsive, not conspiratorial.",
        incorrect_feedback: "The House: Incorrect. The Commission's analysis of Ruby's psychology is key to dismissing conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission found that Oswald's military training provided him with sufficient marksmanship skills to carry out the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald's demonstrated shooting ability supports the feasibility of his acting alone.",
        incorrect_feedback: "The House: Incorrect. The Commission's assessment of Oswald's capabilities is fundamental to its conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission determined that all shots fired during the assassination came from the sixth floor of the Texas School Book Depository.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This finding is absolutely central to the lone gunman theory and the Commission's entire conclusion.",
        incorrect_feedback: "The House: Incorrect. The location of all shots is the foundation of the Commission's reconstruction of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's methodology included extensive ballistics testing, trajectory analysis, and witness interviews.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission's comprehensive scientific approach lends credibility to its conclusions.",
        incorrect_feedback: "The House: Incorrect. The thoroughness of the Commission's investigative methods is well-documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission concluded that Oswald's defection to the Soviet Union was a personal act, not part of any intelligence operation.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This finding dismisses theories that Oswald was a government agent or double agent.",
        incorrect_feedback: "The House: Incorrect. The Commission's analysis of Oswald's Soviet period is crucial to understanding his motivations."
    },

    // --- Conspiracy Theory Factoids (40) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's report has been met with persistent criticism and failed to quell alternative theories.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This reflects the enduring public and scholarly skepticism despite official conclusions.",
        incorrect_feedback: "The House: Incorrect. The long-term impact of the Warren Report includes a continued proliferation of alternative theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Critics point to inconsistencies in the evidence, such as bullet trajectories and eyewitness accounts suggesting shots came from different locations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These perceived discrepancies are central to arguments for a wider conspiracy.",
        incorrect_feedback: "The House: Incorrect. The debate over evidence interpretation is a key aspect of conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission is widely regarded as having carried out its investigation poorly, leaving the door open for theories.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This perceived inadequacy of the investigation is a common starting point for critics.",
        incorrect_feedback: "The House: Incorrect. The Commission's perceived flaws are a major theme in critical analyses."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's conclusion of Oswald acting alone was initially accepted by a majority, but trust waned over time.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Public distrust grew over the years, challenging the official narrative.",
        incorrect_feedback: "The House: Incorrect. The evolution of public opinion regarding the Warren Report is a significant historical detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: By late 1967, only one-fourth of the public believed there had been no conspiracy.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Public skepticism quickly outpaced official acceptance, highlighting the enduring nature of the mystery.",
        incorrect_feedback: "The House: Incorrect. Public opinion trends are often cited as evidence of the Commission's failure to convince."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA stated that the Warren Commission had 'failed to investigate adequately the possibility of a conspiracy.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This official criticism from a later investigation is a powerful endorsement for conspiracy claims.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings often highlight shortcomings in earlier official investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission deliberately ignored or dismissed witness testimony that contradicted the lone gunman narrative.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged selective use of evidence suggests a bias towards a predetermined conclusion.",
        incorrect_feedback: "The House: Incorrect. Claims of ignored testimony are central to criticisms of the Warren Commission's objectivity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission did not seek testimony from eyewitnesses on the triple underpass whose statements pointed to a shooter on the grassy knoll.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged omission of testimony further fuels claims of a biased investigation.",
        incorrect_feedback: "The House: Incorrect. The perceived gaps in the Commission's witness interviews are often cited by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission failed to interview President Kennedy's personal physician, Dr. George Burkley.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This significant oversight is often cited as a major flaw in the Commission's investigation.",
        incorrect_feedback: "The House: Incorrect. The absence of testimony from key individuals raises serious questions for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Burkley was present during the shooting, at Parkland Hospital, on Air Force One, and during the autopsy.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His extensive presence makes his non-interview a particularly glaring omission for critics.",
        incorrect_feedback: "The House: Incorrect. The importance of Dr. Burkley's role in the immediate aftermath is often highlighted by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Dr. Burkley signed the death certificate and took possession of Kennedy's brain, which later went missing.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This links him directly to key pieces of evidence that fuel significant controversy.",
        incorrect_feedback: "The House: Incorrect. Dr. Burkley's association with critical, controversial evidence makes his omission from the investigation notable."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission did not conduct its own independent counter-investigation into ballistic and autopsy reports.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This reliance on other agencies' work raises questions about the Commission's independence and objectivity.",
        incorrect_feedback: "The House: Incorrect. The perceived lack of independent investigation is a significant criticism of the Commission."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission refused to hire independent investigators, despite having access to presidential emergency funds.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This decision reinforces claims that the Commission prioritized speed and a predetermined outcome over thoroughness.",
        incorrect_feedback: "The House: Incorrect. The Commission's choices regarding its investigative resources are a point of scrutiny."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI did not inform the Warren Commission about the discovery of an occipital bone fragment in the limousine.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The alleged withholding of this key evidence points to potential obstruction or a cover-up.",
        incorrect_feedback: "The House: Incorrect. The alleged suppression of physical evidence is a major claim in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI was reportedly instructed to keep the discovery of the occipital bone fragment quiet.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Claims of explicit instructions to suppress evidence are highly significant for conspiracy narratives.",
        incorrect_feedback: "The House: Incorrect. Allegations of instructions to conceal evidence are central to arguments of official misconduct."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission members did not directly use autopsy materials like notes, photos, and X-rays, relying instead on drawings by FBI artists.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This indirect approach raises questions about the thoroughness and objectivity of the Commission's review of crucial evidence.",
        incorrect_feedback: "The House: Incorrect. The Commission's methodology for reviewing autopsy evidence is a significant criticism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Edward Jay Epstein revealed that the chief adviser to the Commission, J. Lee Rankin, had already determined Oswald's guilt in early 1964.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This suggests a pre-determined outcome, undermining the perceived impartiality of the investigation.",
        incorrect_feedback: "The House: Incorrect. Evidence suggesting a pre-established conclusion is a key argument for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A memo from Assistant Attorney General Nicolas Katzenbach suggested the public needed to be convinced of Oswald's guilt and lack of accomplices.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This memo implies a political motivation to control the narrative, regardless of the full truth.",
        incorrect_feedback: "The House: Incorrect. Documents suggesting a focus on public perception rather than pure investigation are often cited by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Even official members of the Warren Commission later questioned its work.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Internal dissent from Commission members themselves provides strong validation for ongoing skepticism.",
        incorrect_feedback: "The House: Incorrect. Disagreements among the Commission's own members are often highlighted by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Hale Boggs, a Commission member, openly criticized the significant influence of FBI Director J. Edgar Hoover, believing Hoover had lied.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such high-profile accusations from within the Commission add significant weight to claims of external influence.",
        incorrect_feedback: "The House: Incorrect. Allegations of undue influence on the Commission's work are a serious point of criticism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Richard Russell, a Commission member, believed Kennedy was the victim of a conspiracy and the Commission was not told the truth about Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. A Commission member's belief in conspiracy is a powerful statement against the official conclusion.",
        incorrect_feedback: "The House: Incorrect. Internal doubts from within the Commission itself are often cited by critics of the report."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: John Sherman Cooper, a Commission member, found the ballistic findings of the report 'unconvincing'.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. A Commission member's skepticism about ballistic evidence highlights potential weaknesses in the official account.",
        incorrect_feedback: "The House: Incorrect. Internal disagreements regarding the evidence are sometimes revealed in later accounts."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Earl Warren refused Richard Russell's request to note his disagreement with the 'single bullet' theory in a footnote.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged suppression of dissent further supports claims of a predetermined narrative.",
        incorrect_feedback: "The House: Incorrect. Claims of stifled dissent from within the Commission itself are a major point of criticism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: J. Edgar Hoover centralized all information from FBI agents before transmitting it to the Warren Commission.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Centralized control over information flow raises concerns about potential filtering or manipulation of evidence.",
        incorrect_feedback: "The House: Incorrect. The process of information gathering and transmission to the Commission is a point of scrutiny."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The secrecy that surrounded the autopsy proceedings led to considerable skepticism toward the Commission's findings.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The controversial handling of medical evidence is a major factor in the enduring distrust of the official narrative.",
        incorrect_feedback: "The House: Incorrect. Perceived irregularities in the autopsy fuel significant public doubt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Navy doctor in charge of the autopsy destroyed his notes.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This admission is a highly controversial detail, cited by critics as evidence of potential manipulation or cover-up.",
        incorrect_feedback: "The House: Incorrect. The handling of original autopsy notes is a significant aspect of the controversy surrounding medical evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission decided to forego an opportunity to view the autopsy X-rays and photographs.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged oversight is often cited as a major flaw in the Commission's investigation, fueling skepticism.",
        incorrect_feedback: "The House: Incorrect. The Commission's process regarding autopsy materials is a key point of contention."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Newly declassified documents confirmed that key intelligence reports regarding Oswald's activities were withheld from the Warren Commission by the CIA and FBI.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Confirmation of withheld information from official inquiries is a powerful endorsement for conspiracy claims.",
        incorrect_feedback: "The House: Incorrect. The alleged suppression of key reports is a fundamental element in narratives of deception."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA downplayed what it knew about Oswald's trip to Mexico City to the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of CIA deception and withholding information are central to many conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Suspected intelligence agency misrepresentation is a common element in narratives of cover-ups."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI reportedly destroyed a note from Oswald threatening an FBI agent before the assassination.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The destruction of this note is a major point of contention and evidence of potential obstruction or cover-up.",
        incorrect_feedback: "The House: Incorrect. The disappearance of this note is a significant event in the timeline of alleged evidence tampering."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's report did not determine why Oswald shot JFK; his motive was 'buried with him.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Commission's acknowledged inability to definitively state Oswald's motive leaves a void for speculation.",
        incorrect_feedback: "The House: Incorrect. The Commission's conclusions on motive are a key area of criticism for many."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Subsequent events, including the Vietnam War and the Watergate scandal, added to public distrust of the Warren Commission's findings.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These later events contributed to a broader climate of governmental distrust, impacting perceptions of the Warren Report.",
        incorrect_feedback: "The House: Incorrect. Historical context plays a significant role in how official narratives are received by the public."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The assassination helped fuel a climate of mistrust in the 1960s that grew with other assassinations and scandals.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This highlights how the JFK assassination became a foundational event for a broader era of public skepticism.",
        incorrect_feedback: "The House: Incorrect. The assassination is often seen as a catalyst for a wider cultural shift in public trust."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The lack of a trial for Oswald meant it was 'no longer possible to arrive at the complete story... through normal judicial procedures.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald's death deprived the world of a judicial process that might have clarified many issues, fueling doubts.",
        incorrect_feedback: "The House: Incorrect. The absence of a public trial for Oswald is a significant factor in the enduring controversy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Thousands of pages of documents remain classified, and it's unclear why, which 'feeds the conspiracies even more.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The continued secrecy surrounding documents is a major source of fuel for conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. The ongoing classification of records is often cited as evidence of a hidden truth."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The belief in a conspiracy is 'so well entrenched now, in all likelihood it will stay that way forever.'",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This reflects the deep and enduring hold of conspiracy narratives on public consciousness.",
        incorrect_feedback: "The House: Incorrect. The cultural impact and persistence of conspiracy theories are often acknowledged."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Robert F. Kennedy Jr. believes his uncle was killed in a conspiracy, endorsing a book that claims Kennedy was killed by his own security apparatus.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such high-profile endorsements from within the Kennedy family add significant weight to conspiracy claims.",
        incorrect_feedback: "The House: Incorrect. Opinions from close relatives of the victim are often highlighted in conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's reliance on the FBI and CIA for information created potential conflicts of interest in the investigation.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This structural issue raises questions about the independence and objectivity of the investigation.",
        incorrect_feedback: "The House: Incorrect. The Commission's dependence on the very agencies that might have been implicated is a key criticism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Critics argue the Commission's timeline was too rushed, prioritizing a quick conclusion over thorough investigation.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The pressure to conclude quickly is often cited as compromising the thoroughness of the investigation.",
        incorrect_feedback: "The House: Incorrect. The Commission's timeline and methodology are frequent targets of criticism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's failure to adequately investigate potential conspirators beyond Oswald left many questions unanswered.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This perceived gap in the investigation is a fundamental criticism that fuels alternative theories.",
        incorrect_feedback: "The House: Incorrect. The scope of the Commission's investigation into potential co-conspirators is a major point of contention."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Commission's conclusions have been challenged by numerous credible researchers and investigators over the decades.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The sustained academic and investigative scrutiny of the Commission's work reflects ongoing doubts about its conclusions.",
        incorrect_feedback: "The House: Incorrect. The volume and persistence of scholarly criticism is a significant aspect of the Commission's legacy."
    },

    // --- Multiple Choice Questions ---
    {
        type: "mc_question",
        question: "What did the FBI and CIA do jointly together on May 24, 1964?",
        options: {
            A: "They had a big party in Vegas",
            B: "They attempted a multi-agency coordinated hit on Castro",
            C: "They went together to Congress to lobby for more funds",
            D: "They conducted a series of tests to determine as precisely as possible what happened on November 22, 1963. Two Bureau agents with approximately the same physical characteristics sat in the car in the same relative positions as President Kennedy and Governor Connally had occupied."
        },
        correct_answer_key: "D",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House reveals what was left in the shadows. What truths were deemed too dangerous for public consumption?"
    },
    {
        type: "mc_question",
        question: "What did the Commission conclude on the basis of the evidence, and consequently, where did the Commission look to determine the motives for the assassination?",
        options: {
            A: "On the basis of the evidence the Commission considered, they reached the conclusion that Oswald acted alone. Consequently, the Commission looked to the assassin himself to determine what motives Lee Harvey Oswald harbored in his assassination of President John F. Kennedy",
            B: "The Commission concluded that there was insufficient evidence to prove the guilt of any single individual, so they concluded that a search for motives would be useless.",
            C: "The Commission concluded that Fidel Castro was the mastermind of the assassination, so invasion plans of Cuba by the United States Armed Forces were immediately undertaken",
            D: "The Commission concluded that LBJ masterminded the assassination due to the criminal proceedings stemming from his involvement in the Billie Sol Estes and Bobby Baker scandals that were reaching the explosive stage."
        },
        correct_answer_key: "A",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House observes the Commission's central finding and its path to understanding motive. Where does the search for 'why' lead?"
    },
    {
        type: "mc_question",
        question: "Which of the following statements about the bullets found in the front seat of the Presidential limousine and the whole bullet found on Governor Connally's stretcher is true?",
        options: {
            A: "They were purchased at Walmart",
            B: "They were fired from multiple different weapons",
            C: "They were fired from the 6.5 millimeter Mannlicher-Carcano rifle found on the sixth floor of the Depository Building to the exclusion of all other weapons",
            D: "The bullets were too fragmented to allow for any positive identification or matching"
        },
        correct_answer_key: "C",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House examines the definitive ballistic evidence. What weapon left its undeniable mark on history?"
    },
    {
        type: "mc_question",
        question: "Which government officials, either Federal, State, or local, did the Warren Commission find evidence of conspiracy, subversion, or disloyalty to the U.S. Government?",
        options: {
            A: "Michigan Governor George Romney",
            B: "Former government official Allen Dulles",
            C: "Dallas Police Chief Jesse Curry",
            D: "The Warren Commission found no evidence of conspiracy, subversion, or disloyalty to the U.S. Government by any Federal, State, or local official"
        },
        correct_answer_key: "D",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House observes the official conclusion regarding government integrity. What did the Commission find about internal threats?"
    },
    {
        type: "mc_question",
        question: "Which left wing groups were investigated by the Commission in connection with the assassination?",
        options: {
            A: "Lefty's Sub Shops",
            B: "The Democrat Party",
            C: "Worldwide Socialists for Cuba",
            D: "Communist Party U.S.A., the Fair Play for Cuba Committee, and the Socialist Workers Party"
        },
        correct_answer_key: "D",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House observes the breadth of the Commission's investigation into potential affiliations. Who else was scrutinized in the search for truth?"
    },
    {
        type: "mc_question",
        question: "Which government did the Commission find evidence that Oswald was employed by?",
        options: {
            A: "West Bloomfield Township",
            B: "Soviet Union",
            C: "Cuba",
            D: "The Commission found no evidence that Oswald was employed, persuaded or encouraged by any government."
        },
        correct_answer_key: "D",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House observes the official findings regarding Oswald's alleged foreign ties. What did the Commission conclude about external influences?"
    },
    {
        type: "mc_question",
        question: "What was the primary criticism of the Warren Commission's methodology according to later investigations?",
        options: {
            A: "They spent too much money on the investigation",
            B: "They failed to investigate adequately the possibility of a conspiracy",
            C: "They took too long to reach their conclusions",
            D: "They interviewed too many witnesses"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House notes the fundamental critique that would echo through decades. What door did this criticism leave open?"
    },
    {
        type: "mc_question",
        question: "According to critics, what was the Commission's most significant oversight regarding medical evidence?",
        options: {
            A: "They didn't interview enough doctors",
            B: "They failed to view the autopsy X-rays and photographs directly",
            C: "They didn't get a second opinion on the autopsy",
            D: "They didn't consider foreign medical experts"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House questions the Commission's approach to the most crucial evidence. What might have been revealed in those images?"
    },
    {
        type: "mc_question",
        question: "What happened to President Kennedy's brain after the autopsy?",
        options: {
            A: "It was preserved in the National Archives",
            B: "It was cremated with full honors",
            C: "It went missing and has never been found",
            D: "It was returned to the Kennedy family"
        },
        correct_answer_key: "C",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House ponders the disappearance of crucial evidence. What secrets might this missing piece have revealed?"
    },
    {
        type: "mc_question",
        question: "Which Warren Commission member later expressed the strongest doubts about the single bullet theory?",
        options: {
            A: "Earl Warren",
            B: "Allen Dulles",
            C: "Richard Russell",
            D: "Gerald Ford"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House observes dissent from within the Commission itself. When the investigators themselves harbor doubts, what does this reveal?"
    },

    // --- Video Content ---
    {
        type: "video",
        title: "Earl Warren's Dilemma: Politics vs Truth",
        url: "https://www.youtube.com/watch?v=P5LVZkF5E34",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House explores the Chief Justice's burden. When national security conflicts with truth, which prevails?"
    },
    {
        type: "video",
        title: "Ballistics and Trajectories: The Warren Commission's Science",
        url: "https://www.youtube.com/watch?v=4CzPZ6z-rnY",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House examines the forensic foundation. Can mathematics and physics silence the doubters?"
    },
    {
        type: "video",
        title: "JFK Assassination: Modern Forensic Analysis",
        url: "https://www.youtube.com/watch?v=K7mDXHn_byA",
        value: 15, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false,
        house_commentary: "The House observes the efforts to scientifically reconstruct the events. Can such re-enactments reveal the absolute truth?"
    },
    {
        type: "video",
        title: "No Conspiracy (Warren Commission)",
        url: "https://www.youtube.com/watch?v=lHMWsLOfZ9Y",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House reiterates the commission's central conclusion. Analyze the supporting arguments."
    },
    {
        type: "video",
        title: "November 22nd and The Warren Report",
        url: "http://www.youtube.com/watch?v=SI8Vp9Zyfp8",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false,
        house_commentary: "The House presents an analysis of the Warren Report. What were its key findings and how were they received?"
    },
    {
        type: "video",
        title: "Warren Commission Lawyer: Oswald Was Sole Shooter",
        url: "http://www.youtube.com/watch?v=GoRFH63Sb5g",
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House presents a perspective from a Warren Commission insider. How does their view align with the Commission's findings?"
    },
    {
        type: "video",
        title: "H. Willens: Inside the Warren Commission Report",
        url: "http://www.youtube.com/watch?v=TVfaDR16_IQ",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false,
        house_commentary: "The House presents an insider's perspective on the Warren Commission. What insights does this account offer?"
    },
    {
        type: "video",
        title: "Who Killed JFK? Behind the Scenes of Warren Commission",
        url: "http://www.youtube.com/watch?v=hOw5PsVK3nM",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false,
        house_commentary: "The House goes behind the scenes of the Warren Commission. What were the challenges and internal dynamics of the investigation?"
    },
    {
        type: "video",
        title: "Firing Line: Warren Report - The Whole Truth?",
        url: "http://www.youtube.com/watch?v=NK0btE1C12g",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House presents a critical perspective on the Warren Report. Was the whole truth revealed?"
    },
    {
        type: "video",
        title: "The Second Shooter: What Happened in the Trauma Room",
        url: "https://www.youtube.com/watch?v=DJZTOJ_xFlI&pp=0gcJCdgAo7VqN5tD",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House presents a key piece of evidence for conspiracy theories. Analyze the claims and evidence presented."
    },
    {
        type: "video",
        title: "House Hearing on JFK Files (Full Video)",
        url: "http://www.youtube.com/watch?v=Qg1EMSreVjA",
        value: 15, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false,
        house_commentary: "The House presents a full recording of a Congressional hearing on the JFK assassination files. Analyze the discussions and testimonies."
    },
    {
        type: "video",
        title: "Who Really Killed JFK? (New Insights & Files)",
        url: "https://www.youtube.com/watch?v=X24HhK7AH3A",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House presents new perspectives on the assassination, challenging the official conclusions. Analyze the evidence and claims."
    },
    {
        type: "video",
        title: "Single Bullet: An Exhibition in Brief",
        url: "https://www.youtube.com/watch?v=9nGkgdgh1SE",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House presents a detailed explanation of the single bullet theory. Consider its implications and supporting evidence."
    },
    {
        type: "video",
        title: "CBS News: Warren Report (1967) Rifle Tests",
        url: "https://www.youtube.com/watch?v=ghmY6HmR4fs",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House presents a 1967 CBS News investigation into the Warren Report. Analyze the methodology and results of the rifle tests."
    },
    {
        type: "video",
        title: "Oliver Stone: Bombshell Question About Oswald",
        url: "https://www.youtube.com/watch?v=ScoKwtJysuM",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House presents a critical perspective on the evidence against Oswald. Analyze the challenges to the official narrative."
    },
    {
        type: "video",
        title: "Conflicting Conclusions: Government Assassination",
        url: "https://www.youtube.com/watch?v=juyYn9eDSHg",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House highlights differing perspectives on official investigations. Consider the points of contention."
    },
    {
        type: "video",
        title: "Security Inadequacies & Law Enforcement Breakdown",
        url: "https://www.youtube.com/watch?v=cA8hGyhXv08",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: false, is_axiomatic_ct: false,
        house_commentary: "The House acknowledges the commission's findings regarding security. How might this affect the narrative?"
    },
    {
        type: "video",
        title: "JFK Assassination: The Warren Commission's Final Word",
        url: "https://www.youtube.com/watch?v=8rF6dv-VJyc",
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House examines the Commission's definitive conclusions. What makes their word final?"
    },
    {
        type: "video",
        title: "Deconstructing the Warren Report: A Critical Analysis",
        url: "https://www.youtube.com/watch?v=xrSKkRzOWmE",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House dissects the Commission's methodology. What foundations might crumble under scrutiny?"
    },
    {
        type: "video",
        title: "The Lone Gunman Theory: Scientific Evidence",
        url: "https://www.youtube.com/watch?v=F_NXMP3Kx-E",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        house_commentary: "The House presents the scientific case for a single shooter. Can physics resolve the mystery?"
    },
    {
        type: "video",
        title: "Suppressed Evidence: What the Warren Commission Ignored",
        url: "https://www.youtube.com/watch?v=PKjYLMqKHNw",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        house_commentary: "The House examines what was allegedly overlooked. What evidence was deemed too inconvenient for the official narrative?"
    }
];
