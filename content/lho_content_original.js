// Add this at the very beginning of your lho_content.js file
function getLoopContent() {
    return lhoContent;
}
// This file contains the content pool for the "Who was LHO?" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const lhoContent = [
    // --- Lone Gunman Factoids (40) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Lee Harvey Oswald was born in New Orleans, Louisiana, on October 18, 1939.",
        correct_answer: true,
        value: 5, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This is a foundational fact about Oswald's early life.",
        incorrect_feedback: "The House: Incorrect. His birthplace and date are part of the undisputed record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's father died two months before he was born.",
        correct_answer: true,
        value: 5, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This early loss is a key detail in his complex family history.",
        incorrect_feedback: "The House: Incorrect. Oswald's early life circumstances are a matter of record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's childhood was characterized by a stable family life and consistent schooling.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. It was marked by loneliness, neglect, and frequent moves, contributing to his psychological profile.",
        incorrect_feedback: "The House: Incorrect. Oswald's unstable childhood is a key biographical detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: He spent approximately 13 months in an orphanage with his brothers.",
        correct_answer: true,
        value: 5, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His time in institutional care is a documented part of his childhood.",
        incorrect_feedback: "The House: Incorrect. This period in an orphanage is a fact of Oswald's early life."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: At age 12, a psychiatric assessment described Oswald as 'emotionally disturbed' with a 'vivid fantasy life.'",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This early assessment is often cited to explain his later unstable personality and actions.",
        incorrect_feedback: "The House: Incorrect. Oswald's early psychiatric evaluations provide insight into his psychological development."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The assessment noted Oswald had a 'vivid fantasy life' and hostility toward his mother and society.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These traits are presented as foundational to his character, aligning with official interpretations of his motive.",
        incorrect_feedback: "The House: Incorrect. These characteristics from his assessment are key to understanding his later behavior."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attended 12 different schools and never obtained a high school diploma.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His unstable educational background highlights his difficult childhood and lack of formal achievement.",
        incorrect_feedback: "The House: Incorrect. Oswald's academic history is part of his documented biography."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: At 17, Oswald enlisted in the U.S. Marine Corps on October 24, 1956.",
        correct_answer: true,
        value: 5, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His military service is a documented period of his life.",
        incorrect_feedback: "The House: Incorrect. His entry into military service is a specific biographical detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: His primary training in the Marines focused on radar operation, which required a security clearance.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His technical training and security clearance are often highlighted by official accounts.",
        incorrect_feedback: "The House: Incorrect. Oswald's military specialization is a relevant detail in his background."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald achieved a 'sharpshooter' rating with the M-1 rifle in December 1956.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His marksmanship rating is used as evidence of his capability to carry out the assassination.",
        incorrect_feedback: "The House: Incorrect. Oswald's shooting proficiency is a central point in assessing his role as the assassin."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: His sharpshooter score was 212 out of a possible 250 points.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This score confirms his proficiency with a rifle, bolstering the official narrative.",
        incorrect_feedback: "The House: Incorrect. The specific score provides quantitative evidence of his marksmanship."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some of Oswald's rapid-fire shooting tests showed scores exceeding the 'expert' level.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Such high scores further support his capability as a single assassin.",
        incorrect_feedback: "The House: Incorrect. Oswald's demonstrated skill level is a key factor in the lone gunman assessment."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Four marksmanship experts testified before the Warren Commission that Oswald was capable of the level of marksmanship needed for the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Expert testimony reinforces the official conclusion about Oswald's shooting abilities.",
        incorrect_feedback: "The House: Incorrect. Expert analysis of Oswald's capabilities is foundational to the Commission's findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The longest of the three shots needed to assassinate President Kennedy was only 88 yards.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This relatively short distance supports the feasibility of the shots from the Depository.",
        incorrect_feedback: "The House: Incorrect. The distances involved in the assassination are key to assessing the shooter's challenge."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was trained in the Marines with his M1 rifle using open sights and no scope.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His proficiency with open sights demonstrates his inherent skill, even without a scope.",
        incorrect_feedback: "The House: Incorrect. Oswald's training details are relevant to his capabilities as a shooter."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A 4x scope makes targets appear four times closer, approximating a range of 15 to 22 yards for Oswald's view.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The scope significantly simplifies the target acquisition, making the shot highly feasible.",
        incorrect_feedback: "The House: Incorrect. The effect of the scope on the shooter's perception is crucial to assessing the difficulty of the shot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was court-martialed twice during his time in the Marines.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His disciplinary record reveals a pattern of defiance and rule-breaking consistent with his later actions.",
        incorrect_feedback: "The House: Incorrect. Oswald's military record provides insight into his character and history of insubordination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In October 1959, Oswald defected to the Soviet Union.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His defection is a critical piece of his biography, often presented as evidence of anti-American sentiment.",
        incorrect_feedback: "The House: Incorrect. Oswald's period in the Soviet Union is a documented, if controversial, part of his history."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: He attempted to renounce his U.S. citizenship and offered to share military information.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These actions underscore his anti-American sentiments and desire to align with the Soviet Union.",
        incorrect_feedback: "The House: Incorrect. Oswald's attempts to sever ties with the U.S. are part of his documented defection."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald resided in Minsk, working as a lathe operator, and married Marina Prusakova in 1961.",
        correct_answer: true,
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These are documented facts of his life in the Soviet Union.",
        incorrect_feedback: "The House: Incorrect. Key biographical details from his time abroad are a matter of public record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: He became disillusioned with the Soviet system, observing party elites enjoying privileges.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His disillusionment further shapes his complex political identity and motivations.",
        incorrect_feedback: "The House: Incorrect. Oswald's evolving political views are a key part of his biography."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald returned to the United States in June 1962.",
        correct_answer: true,
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His return marked the beginning of his final period in the United States.",
        incorrect_feedback: "The House: Incorrect. The date of his return is a specific biographical detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In April 1963, Oswald attempted to assassinate retired Army General Edwin Walker in Dallas.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This prior assassination attempt establishes a clear pattern of politically motivated violence.",
        incorrect_feedback: "The House: Incorrect. The General Walker incident is a pivotal event in Oswald's documented history."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The bullet from the Walker attempt missed him but injured him with fragments from the windowsill.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The close call reveals his intent and capability, despite the imperfect outcome.",
        incorrect_feedback: "The House: Incorrect. The outcome of the Walker assassination attempt is part of the official record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Dallas Police Department's investigation into the General Walker shooting led to Oswald's immediate arrest.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The investigation 'came up cold' at the time, which is a fact, although later a point of contention for critics.",
        incorrect_feedback: "The House: Incorrect. The police's initial response to the Walker shooting is a detail in Oswald's timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald used the same Mannlicher-Carcano rifle in the Walker attempt that was later identified in the Kennedy assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This direct link between the two incidents strengthens the case for Oswald's sole involvement.",
        incorrect_feedback: "The House: Incorrect. The weapon used in both attempts is a key piece of physical evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald became involved with the pro-Castro Fair Play for Cuba Committee in New Orleans.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His involvement with such groups highlights his political radicalization.",
        incorrect_feedback: "The House: Incorrect. Oswald's political affiliations are a notable part of his biography."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In September 1963, Oswald traveled to Mexico City, attempting to obtain visas from the Cuban and Soviet consulates.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This trip reveals his continued desire to engage with communist states.",
        incorrect_feedback: "The House: Incorrect. Oswald's trip to Mexico City is a key event in the pre-assassination timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's trip to Mexico City was under CIA surveillance.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The CIA's monitoring confirms their prior knowledge of his activities, a detail that is often debated.",
        incorrect_feedback: "The House: Incorrect. Intelligence agency surveillance of Oswald is a documented fact."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's psychological profile includes being deluded, paranoid, self-aggrandizing, isolating, pathetic, short-tempered, and frustrated.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These traits paint a picture of an unstable individual capable of extreme acts.",
        incorrect_feedback: "The House: Incorrect. Oswald's psychological makeup is a key component of the official explanation of his motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's profound alienation from the world and great hostility toward his environment are seen as fundamental drivers for his actions.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These psychological factors are presented as core motives for his violent acts.",
        incorrect_feedback: "The House: Incorrect. Understanding Oswald's internal state is central to the official interpretation of his motivations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: His desire for recognition and pervasive hostility are posited as fundamental drivers for his actions.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These are key psychological elements that define Oswald's personality and his trajectory towards violence.",
        incorrect_feedback: "The House: Incorrect. Oswald's motivations are often explored through his personality traits and psychological assessments."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's self-perception included imagining himself as 'the Commander' and a 'political prophet.'",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These self-aggrandizing fantasies indicate a delusional aspect of his personality, consistent with a lone, disturbed assassin.",
        incorrect_feedback: "The House: Incorrect. Oswald's self-image and delusions are part of the psychological profile used to understand his actions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's ideological journey reveals a self-contradictory and superficial engagement with political philosophies.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His inconsistent political allegiances suggest a lack of deep conviction, fitting a lone, unstable actor.",
        incorrect_feedback: "The House: Incorrect. Oswald's political evolution is analyzed to understand his motivations, often showing superficiality."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: His resentment of capitalism in the U.S. was mirrored by his disillusionment with communism in the USSR.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This dual disillusionment further isolates him ideologically, aligning with the profile of a lone actor.",
        incorrect_feedback: "The House: Incorrect. Oswald's shifting political views, and his disillusionment with both systems, are part of his biographical record."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's consistent pattern of alienation and hostility is a central theme in understanding his trajectory.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This pattern is presented as key to his development into a violent individual.",
        incorrect_feedback: "The House: Incorrect. Consistent psychological traits are often explored to explain Oswald's trajectory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission concluded that Oswald possessed the capability with a rifle which enabled him to commit the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission's conclusion on his capability is a direct endorsement of the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. Oswald's marksmanship capability is a fundamental part of the official investigation's findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's rifle score book was used as evidence by the Warren Commission to state he was capable of assassinating President Kennedy.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His military records provided key evidence for his marksmanship skills.",
        incorrect_feedback: "The House: Incorrect. Oswald's military training records are a key piece of evidence in the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's capacity for violence was expressed in striking and sometimes violent acts long before the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This history of violence supports the profile of a lone individual prone to extreme acts.",
        incorrect_feedback: "The House: Incorrect. Oswald's past behavior is often examined for precursors to his final actions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's commitment to Marxism was an important factor influencing his conduct during his adult years.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His political leanings are presented as a contributing factor to his motivations.",
        incorrect_feedback: "The House: Incorrect. Oswald's ideological influences are considered central to his biographical narrative."
    },
    // --- Conspiracy Theory Factoids (40) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some conspiracy theorists believe Oswald was a 'patsy' or a fall guy, framed for the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The 'patsy' theory is fundamental to many conspiracy narratives, positing Oswald as a pawn.",
        incorrect_feedback: "The House: Incorrect. The idea of Oswald as a victim of a larger plot is a core tenet of conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The official story that Oswald 'came out of nowhere' is believed by some to be false.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This challenges the simplicity of a lone, isolated assassin, suggesting hidden connections.",
        incorrect_feedback: "The House: Incorrect. The idea of Oswald having a hidden history is a common point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA was monitoring Oswald in the months leading up to the assassination, including his trip to Mexico City.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", // Factual, but its interpretation fuels CT
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This fact, while acknowledged by official sources, is often interpreted by critics as evidence of deeper complicity or negligence.",
        incorrect_feedback: "The House: Incorrect. Intelligence agency surveillance of Oswald is a documented fact that raises questions for some."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald reportedly voiced plans to kill Kennedy while in Mexico City, and people may have overheard him.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", // CT often highlights this alleged prior knowledge
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged prior knowledge, if ignored, suggests a major intelligence failure or worse.",
        incorrect_feedback: "The House: Incorrect. The idea of pre-assassination threats is a key area of scrutiny for those who suspect a conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA downplayed what it knew about Oswald's travels to the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of CIA deception and withholding information are central to many conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Suspected intelligence agency misrepresentation is a common element in narratives of cover-ups."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Philip Shenon stated the CIA 'lied outright to the Warren Commission' about their knowledge of Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such accusations directly challenge the integrity of the official investigation and the agencies involved.",
        incorrect_feedback: "The House: Incorrect. Claims of outright deception by intelligence agencies are a serious point in conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI reportedly destroyed a note written by Oswald threatening agent James P. Hosty just days before the assassination.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The destruction of this note is a major point of contention and evidence of potential obstruction or cover-up.",
        incorrect_feedback: "The House: Incorrect. The disappearance of this note is a significant event in the timeline of alleged evidence tampering."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The destruction of Oswald's letter would prove the FBI was aware Oswald was threatening violence before the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This implies a potential intelligence failure or deliberate suppression of pre-assassination knowledge.",
        incorrect_feedback: "The House: Incorrect. The implications of intelligence agencies' prior knowledge are key to many conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: FBI Director J. Edgar Hoover was concerned about convincing the public that Oswald was the real assassin.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", // Official concern about perception can be a CT point
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Hoover's focus on public perception suggests a desire to control the narrative, which raises questions for some.",
        incorrect_feedback: "The House: Incorrect. High-level concerns about public opinion are sometimes interpreted as signs of a predetermined narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers suggest the FBI and CIA were terrified their failure to subdue Oswald would be revealed publicly.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This theory posits intelligence agencies had motives for suppressing information due to their own potential culpability or embarrassment.",
        incorrect_feedback: "The House: Incorrect. The potential for intelligence failures is a common theme in conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Newly declassified documents expose intelligence failures and Oswald's foreign connections.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The ongoing release of documents often confirms past oversights or hidden information, fueling skepticism.",
        incorrect_feedback: "The House: Incorrect. Declassified information often provides new avenues for scrutiny and alternative interpretations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some files confirm that key intelligence reports were withheld from the Warren Commission and later investigations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The deliberate withholding of information from official inquiries is a major claim in arguments for a cover-up.",
        incorrect_feedback: "The House: Incorrect. The alleged suppression of key reports is a fundamental element in narratives of deception."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Declassified memos reveal U.S. officials feared Oswald's Soviet and Cuban ties could be used as justification for military action.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such fears suggest a high-stakes geopolitical context that could influence information handling.",
        incorrect_feedback: "The House: Incorrect. Official concerns about international repercussions are often seen as influencing investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA had placed 1,500 agents overseas who posed as State Department officials, including 128 at the U.S. embassy in Paris.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The extent of CIA covert operations and infiltration is often cited by those who suspect its deeper involvement in events.",
        incorrect_feedback: "The House: Incorrect. The scope of intelligence operations is a relevant detail for those who scrutinize official narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A Kennedy aide warned that the CIA's practice of posing as State Department officials could undermine foreign policy.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Internal criticisms of CIA practices can be seen as foreshadowing deeper conflicts with the administration.",
        incorrect_feedback: "The House: Incorrect. Internal dissent regarding intelligence agency practices is often cited in theories of conflict."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The relationship between President Kennedy and intelligence agencies was rocky, particularly after the Bay of Pigs invasion.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This strained relationship is often presented as a motive for intelligence agency involvement in the assassination.",
        incorrect_feedback: "The House: Incorrect. The tension between Kennedy and intelligence agencies is a key element in many conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Jim Garrison alleged that anti-Castro and anti-communist elements within the CIA were behind a conspiracy involving Oswald.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Garrison's famous allegations are a cornerstone of theories linking the CIA to the assassination through Oswald.",
        incorrect_feedback: "The House: Incorrect. Prominent figures like Garrison proposed specific theories of intelligence agency complicity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: James Douglass stated that the CIA, acting on orders from the 'military industrial complex,' killed Kennedy and set up Oswald as a fall guy.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This theory posits a high-level conspiracy driven by powerful military and industrial interests.",
        incorrect_feedback: "The House: Incorrect. Theories of a military-industrial complex plot are a significant part of the JFK conspiracy landscape."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Mark Lane is described as a leading proponent of the theory that the CIA was responsible for the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Lane's work extensively promotes the theory of CIA involvement in the assassination.",
        incorrect_feedback: "The House: Incorrect. Key figures in the conspiracy movement are often associated with specific theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Gaeton Fonzi obtained testimony that a Cuban exile witnessed his CIA contact conferring with Lee Harvey Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged direct link between Oswald and a CIA contact is a compelling piece of circumstantial evidence for some.",
        incorrect_feedback: "The House: Incorrect. Specific allegations of Oswald's contact with intelligence figures are highly influential in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Fonzi became convinced that his CIA contact had played a key role in the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Fonzi's personal conviction highlights the depth of suspicion regarding CIA involvement.",
        incorrect_feedback: "The House: Incorrect. The investigative journeys of some researchers led them to strong convictions about intelligence agency complicity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA concluded that the Warren Commission was incorrect in concluding Oswald had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's findings often contradict the Warren Commission, providing official backing for critics' claims.",
        incorrect_feedback: "The House: Incorrect. Later official investigations sometimes challenged earlier conclusions about Oswald's associations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found certain contacts of Oswald to be of investigative significance, unlike the Warren Commission.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This discrepancy highlights a perceived oversight or bias in the original investigation.",
        incorrect_feedback: "The House: Incorrect. The nature of Oswald's associations is a persistent point of contention between official reports."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not preclude the possibility that individual members of anti-Castro Cuban groups were involved.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This official acknowledgment leaves open the door for theories of limited, non-governmental conspiracy.",
        incorrect_feedback: "The House: Incorrect. The HSCA's nuanced conclusions often provide some support for alternative theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's activities with the Fair Play for Cuba Committee and his encounters with anti-Castro groups are emphasized by some theorists.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His contradictory political engagements are often cited as evidence of manipulation or dual roles.",
        incorrect_feedback: "The House: Incorrect. Oswald's political activities are a fertile ground for theories of external influence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's trip to Mexico City, where he attempted to contact Cuban and Soviet consulates, adds weight to suspicions of foreign involvement.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This trip remains a key element for those who suspect Oswald had foreign handlers.",
        incorrect_feedback: "The House: Incorrect. Oswald's international contacts are a significant point of interest for conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some theorists suggest JFK's death was retaliation for CIA assassination attempts on Fidel Castro.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The tit-for-tat retaliation theory posits a direct causal link between U.S. covert actions and Kennedy's death.",
        incorrect_feedback: "The House: Incorrect. The history of U.S.-Cuba relations is a significant backdrop for certain assassination theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's behavior in the Soviet Union was far from typical, and he was monitored closely by the KGB.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This close monitoring is sometimes interpreted as evidence of Oswald's manipulation by foreign intelligence.",
        incorrect_feedback: "The House: Incorrect. Oswald's time in the Soviet Union is often scrutinized for signs of external control."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A CIA memo suggests Jack Ruby might have met Oswald weeks before the assassination at a nightclub.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged pre-assassination meeting is a highly suspicious detail for those who suspect conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alleged connections between Oswald and Ruby prior to the assassination are key elements in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: FBI records show agents closely watched Oswald's interactions with Soviet defectors in Texas.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The extent of FBI surveillance raises questions about why Oswald wasn't neutralized if he was a known threat.",
        incorrect_feedback: "The House: Incorrect. The degree of surveillance on Oswald is a critical detail in theories of intelligence agency culpability."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald reportedly hinted at 'something big' happening weeks before JFK was killed.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged foreknowledge by Oswald is cited by some as evidence of a pre-planned conspiracy.",
        incorrect_feedback: "The House: Incorrect. Claims of Oswald's pre-assassination hints are a significant piece of circumstantial evidence for some."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's psychological profile, including being 'emotionally unhinged' and a 'malcontent,' is used by Bugliosi to argue against him being a conspirator.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", // This is Bugliosi's argument
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi argues that such instability makes him an unlikely choice for top-level conspirators.",
        incorrect_feedback: "The House: Incorrect. Oswald's personality traits are often analyzed to determine his suitability as a conspiratorial agent."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some argue that Oswald's 'eccentric biography' makes him an unlikely choice for top-level conspirators.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", // This is a CT argument about Oswald being a poor choice for a top-level plot.
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This criticism of Oswald's profile highlights the perceived implausibility of him being chosen for a sophisticated plot.",
        incorrect_feedback: "The House: Incorrect. Oswald's unconventional background is sometimes used to argue against his role in a high-level conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The notion that Russians would use Oswald as a 'Manchurian Candidate'-style programmed assassin is considered absurd by some historians.",
        correct_answer: true, // This is a statement of an interpretation which is LG
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This assessment dismisses the more fantastical theories of mind control or advanced programming.",
        incorrect_feedback: "The House: Incorrect. The feasibility of complex manipulation is often debated by historians."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's interest in communism transformed into support for Cuba around early 1963.",
        correct_answer: true,
        value: 5, stance: "neutral",
        is_axiomatic_lg: true,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His shifting allegiances are part of his documented political evolution.",
        incorrect_feedback: "The House: Incorrect. Oswald's political leanings are a key aspect of his biography."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's involvement with the Fair Play for Cuba Committee was contradicting because he also attempted to establish relations with anti-Castro figures.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", // This contradiction fuels CT
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His seemingly contradictory political actions are often seen as evidence of a deeper, perhaps manipulative, purpose.",
        incorrect_feedback: "The House: Incorrect. Oswald's dual political interests are often highlighted by critics as suspicious."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was arrested for disturbing the peace after a scuffle while handing out pro-Castro leaflets.",
        correct_answer: true,
        value: 5, stance: "neutral",
        is_axiomatic_lg: true,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This incident is a documented part of his pre-assassination political activity.",
        incorrect_feedback: "The House: Incorrect. Oswald's public activities are part of his documented record leading up to the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald requested to speak with the FBI after his arrest for disturbing the peace.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", // Highlights his unusual FBI contact for CT
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This request is often cited as evidence of his mysterious connections or a pre-existing relationship with authorities.",
        incorrect_feedback: "The House: Incorrect. Oswald's contact with the FBI prior to the assassination is a significant detail in his biography."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI field office did not reply that it had already interviewed Oswald when instructed to interview him about pro-Castro activities.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This silence from the FBI raises questions about their transparency and prior knowledge of Oswald.",
        incorrect_feedback: "The House: Incorrect. The FBI's handling of information regarding Oswald is a key point of scrutiny for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's rifle score book was used as evidence by the Warren Commission to state he was capable of assassinating President Kennedy.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His military records provided key evidence for his marksmanship skills.",
        incorrect_feedback: "The House: Incorrect. Oswald's military training records are a key piece of evidence in the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's capacity for violence was expressed in striking and sometimes violent acts long before the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This history of violence supports the profile of a lone individual prone to extreme acts.",
        incorrect_feedback: "The House: Incorrect. Oswald's past behavior is often examined for precursors to his final actions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's commitment to Marxism was an important factor influencing his conduct during his adult years.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His political leanings are presented as a contributing factor to his motivations.",
        incorrect_feedback: "The House: Incorrect. Oswald's ideological influences are considered central to his biographical narrative."
    },
    // --- Conspiracy Theory Factoids (40) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some conspiracy theorists believe Oswald was a 'patsy' or a fall guy, framed for the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The 'patsy' theory is fundamental to many conspiracy narratives, positing Oswald as a pawn.",
        incorrect_feedback: "The House: Incorrect. The idea of Oswald as a victim of a larger plot is a core tenet of conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The official story that Oswald 'came out of nowhere' is believed by some to be false.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This challenges the simplicity of a lone, isolated assassin, suggesting hidden connections.",
        incorrect_feedback: "The House: Incorrect. The idea of Oswald having a hidden history is a common point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA was monitoring Oswald in the months leading up to the assassination, including his trip to Mexico City.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", // Factual, but its interpretation fuels CT
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This fact, while acknowledged by official sources, is often interpreted by critics as evidence of deeper complicity or negligence.",
        incorrect_feedback: "The House: Incorrect. Intelligence agency surveillance of Oswald is a documented fact that raises questions for some."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald reportedly voiced plans to kill Kennedy while in Mexico City, and people may have overheard him.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", // CT often highlights this alleged prior knowledge
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged prior knowledge, if ignored, suggests a major intelligence failure or worse.",
        incorrect_feedback: "The House: Incorrect. The idea of pre-assassination threats is a key area of scrutiny for those who suspect a conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA downplayed what it knew about Oswald's travels to the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of CIA deception and withholding information are central to many conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Suspected intelligence agency misrepresentation is a common element in narratives of cover-ups."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Philip Shenon stated the CIA 'lied outright to the Warren Commission' about their knowledge of Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such accusations directly challenge the integrity of the official investigation and the agencies involved.",
        incorrect_feedback: "The House: Incorrect. Claims of outright deception by intelligence agencies are a serious point in conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI reportedly destroyed a note written by Oswald threatening agent James P. Hosty just days before the assassination.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The destruction of this note is a major point of contention and evidence of potential obstruction or cover-up.",
        incorrect_feedback: "The House: Incorrect. The disappearance of this note is a significant event in the timeline of alleged evidence tampering."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The destruction of Oswald's letter would prove the FBI was aware Oswald was threatening violence before the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This implies a potential intelligence failure or deliberate suppression of pre-assassination knowledge.",
        incorrect_feedback: "The House: Incorrect. The implications of intelligence agencies' prior knowledge are key to many conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: FBI Director J. Edgar Hoover was concerned about convincing the public that Oswald was the real assassin.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Hoover's focus on public perception suggests a desire to control the narrative, which raises questions for some.",
        incorrect_feedback: "The House: Incorrect. High-level concerns about public opinion are sometimes interpreted as signs of a predetermined narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers suggest the FBI and CIA were terrified their failure to subdue Oswald would be revealed publicly.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This theory posits intelligence agencies had motives for suppressing information due to their own potential culpability or embarrassment.",
        incorrect_feedback: "The House: Incorrect. The potential for intelligence failures is a common theme in conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA downplayed what it knew about Oswald's travels to the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of CIA deception and withholding information are central to many conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Suspected intelligence agency misrepresentation is a common element in narratives of cover-ups."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's movements after the assassination are described as contradictory, making it impossible for any single theory to explain them all.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The perceived inconsistencies in his post-assassination actions are often highlighted by those who argue against the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. The complexity of Oswald's immediate movements is often cited as evidence against a simple explanation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: If Oswald was planning to take a bus to Mexico, it's questioned why he didn't take one from the main bus terminal downtown.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This logical inconsistency in his supposed escape plan is often raised by critics.",
        incorrect_feedback: "The House: Incorrect. Details about Oswald's escape route logistics are sometimes questioned by those who suspect a larger plan."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald would have needed a visa to cross the Mexican border, which he did not have.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This practical obstacle undermines the idea of a simple escape to Mexico for Oswald.",
        incorrect_feedback: "The House: Incorrect. The practicalities of cross-border travel are often used to poke holes in simple explanations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The lack of a visa for Mexico is harder to explain if he intended to escape there.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This logistical detail is presented as evidence against a clear, rational escape plan by Oswald.",
        incorrect_feedback: "The House: Incorrect. Logical gaps in Oswald's actions are often highlighted by those who doubt the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Oswald was 'lost' after leaving the Depository and retrieving his pistol, not having a clear escape plan.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This view suggests Oswald was improvising and not part of a larger, organized escape.",
        incorrect_feedback: "The House: Incorrect. Oswald's post-assassination behavior is sometimes interpreted as disorganized and reactive."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some question why Oswald would grab his handgun at home to kill a communist informer, as suggested by a Congressman.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This query highlights a perceived inconsistency in Oswald's motives and actions after the assassination.",
        incorrect_feedback: "The House: Incorrect. Questions about Oswald's immediate post-assassination motives are often raised by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Oswald acted alone was based on the absence of evidence of significant association between Oswald and other possible conspirators.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The lack of evidence for co-conspirators is a key part of the Commission's solo conclusion.",
        incorrect_feedback: "The House: Incorrect. The absence of conspiratorial links is fundamental to the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Critics argue that the Warren Commission's investigation into the possibility of a conspiracy was seriously flawed.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This is a central criticism of the Commission's approach to the conspiracy question.",
        incorrect_feedback: "The House: Incorrect. The perceived shortcomings of the Warren Commission are a major topic for its critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA downplayed what it knew about Oswald's travels to the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of CIA deception and withholding information are central to many conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Suspected intelligence agency misrepresentation is a common element in narratives of cover-ups."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's movements after the assassination are described as contradictory, making it impossible for any single theory to explain them all.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The perceived inconsistencies in his post-assassination actions are often highlighted by those who argue against the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. The complexity of Oswald's immediate movements is often cited as evidence against a simple explanation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: If Oswald was planning to take a bus to Mexico, it's questioned why he didn't take one from the main bus terminal downtown.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This logical inconsistency in his supposed escape plan is often raised by critics.",
        incorrect_feedback: "The House: Incorrect. Details about Oswald's escape route logistics are sometimes questioned by those who suspect a larger plan."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald would have needed a visa to cross the Mexican border, which he did not have.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This practical obstacle undermines the idea of a simple escape to Mexico for Oswald.",
        incorrect_feedback: "The House: Incorrect. The practicalities of cross-border travel are often used to poke holes in simple explanations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The lack of a visa for Mexico is harder to explain if he intended to escape there.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This logistical detail is presented as evidence against a clear, rational escape plan by Oswald.",
        incorrect_feedback: "The House: Incorrect. Logical gaps in Oswald's actions are often highlighted by those who doubt the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Oswald was 'lost' after leaving the Depository and retrieving his pistol, not having a clear escape plan.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This view suggests Oswald was improvising and not part of a larger, organized escape.",
        incorrect_feedback: "The House: Incorrect. Oswald's post-assassination behavior is sometimes interpreted as disorganized and reactive."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some question why Oswald would grab his handgun at home to kill a communist informer, as suggested by a Congressman.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This query highlights a perceived inconsistency in Oswald's motives and actions after the assassination.",
        incorrect_feedback: "The House: Incorrect. Questions about Oswald's immediate post-assassination motives are often raised by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Oswald acted alone was based on the absence of evidence of significant association between Oswald and other possible conspirators.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The lack of evidence for co-conspirators is a key part of the Commission's solo conclusion.",
        incorrect_feedback: "The House: Incorrect. The absence of conspiratorial links is fundamental to the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Critics argue that the Warren Commission's investigation into the possibility of a conspiracy was seriously flawed.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This is a central criticism of the Commission's approach to the conspiracy question.",
        incorrect_feedback: "The House: Incorrect. The perceived shortcomings of the Warren Commission are a major topic for its critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission was incorrect in concluding that Oswald and Ruby had no significant associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Later investigations, like the HSCA, contradicted the Commission on this point, fueling suspicions.",
        incorrect_feedback: "The House: Incorrect. The relationship between Oswald and Ruby is a persistent point of contention for those who suspect a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that the Warren Commission's finding of no conspiracy was not reliable due to incorrect conclusions about associations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's critical assessment of the Warren Commission's methodology is a key argument for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings are often cited as evidence against the Warren Commission's infallibility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out a more limited conspiracy involving only Oswald and a second gunman.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This nuanced conclusion by the HSCA kept the possibility of a limited conspiracy alive for many.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings, even if not definitive, are often used to support the idea of multiple shooters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI's ballistic analysis of the revolver used to kill Tippit reportedly left inconsistent microscopic markings on bullets, making positive identification difficult.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of inconsistent ballistic evidence introduce doubt into the definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Challenges to ballistic evidence are often used by critics to undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some reports stated that only one or none of the bullets recovered from Tippit's body could be positively identified as fired from Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such reports challenge the certainty of Oswald's guilt in the Tippit murder, adding fuel to wider conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in ballistic identification are a significant point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Ruby acted alone was based on his statements, which were often contradictory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's inconsistent accounts are often cited as reasons to doubt the lone assassin conclusion for Oswald's death.",
        incorrect_feedback: "The House: Incorrect. The reliability of key figures' statements is often questioned in complex investigations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's family members and associates have provided research that paints him as a bumbling, vain, and neurotic individual, but also as a useful pawn of the Mob.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Such characterizations are used to suggest Ruby was manipulated or complicit in a larger scheme.",
        incorrect_feedback: "The House: Incorrect. The dual nature of Ruby's character, as perceived by some, adds to the conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Evidence exists of Jack Ruby running numerous legal, illegal, and semi-legal enterprises, including smuggling arms and vehicles to both sides in the Cuban revolution.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's extensive shadowy dealings are often cited as evidence of connections far beyond a lone, impulsive act.",
        incorrect_feedback: "The House: Incorrect. Ruby's complex business activities are a key part of theories linking him to organized crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's biographer, Seth Kantor, relates that Ruby reportedly ran errands for Al Capone's cousin, Frank Nitti, in his youth.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This alleged early connection to the Mafia is used to imply a long-standing underworld involvement.",
        incorrect_feedback: "The House: Incorrect. Early life connections to criminal figures are often scrutinized for patterns."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A former Dallas sheriff testified that Chicago mafia figures told him Ruby was sent to Texas to run nightclubs that were fronts for illegal gambling operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This direct testimony links Ruby to organized crime's expansion into Dallas, for some, suggesting his role was deeper.",
        incorrect_feedback: "The House: Incorrect. Testimonies alleging mob connections are central to many conspiracy theories about Ruby."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's trip to Havana, Cuba, raised more organized crime suspicions.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Trips to Cuba, a hub of organized crime activity pre-Castro, fueled theories of deeper mob connections.",
        incorrect_feedback: "The House: Incorrect. International travel to specific locations can be seen as indicative of hidden agendas."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby owed the government more than $4,500 (over $38,500 today) at the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial debts are sometimes cited as a potential leverage point for organized crime over Ruby.",
        incorrect_feedback: "The House: Incorrect. A person's financial situation can be scrutinized for possible external pressures or motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some believe Ruby's killing of Oswald was an impulsive act, pointing to his fury over an anti-Kennedy advertisement in a Dallas newspaper that he thought put Jews in a bad light.",
        correct_answer: true, // This is the LG explanation for Ruby's impulsiveness, so it's a correct factual statement about one interpretation.
        value: 10, stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
       incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
}, // ← ADD COMMA HERE
{
type: "video",
    title: "JFK's Assassin: What Would His Trial Have Been Like?",
    url: "https://www.youtube.com/watch?v=rk4KjFgVRfQ",
    value: 10, // Assign points for viewing this video
    stance: "neutral", // Appears to be a hypothetical analysis of a trial
    is_axiomatic_lg: false,
    is_axiomatic_ct: false,
    house_commentary: "The House explores a hypothetical scenario: Oswald's trial. What arguments would have been presented?"
},// Add this video object to your const lhoContent = [...] array
{
    type: "video",
    title: "Lone Gunman: The Man Who Knew Lee Harvey Oswald",
    url: "https://www.youtube.com/watch?v=gl2GaCDt8BE",
    value: 10, // Assign points for viewing this video
    stance: "neutral", // Appears to be an exploration of Oswald from a specific perspective
    is_axiomatic_lg: false,
    is_axiomatic_ct: false,
    house_commentary: "The House presents a perspective on Lee Harvey Oswald from someone who knew him. Consider their insights."
}, {
        type: "video",
        title: "Vincent Bugliosi: Why Did Oswald Assassinate JFK?",
        url: "[http://www.youtube.com/watch?v=s4dAkn839Ac](http://www.youtube.com/watch?v=s4dAkn839Ac)",
        value: 10, // Assign points for viewing this video
        stance: "lone_gunman", // Bugliosi was a strong proponent of the lone gunman theory
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House presents a perspective from Vincent Bugliosi, author of 'Reclaiming History'. What were Oswald's motives?"
    },// Add this video object to your const lhoContent = [...] array
{
    type: "video",
    title: "JFK Assassination #Theory: Lee Harvey Oswald, The 'Nonentity' Who Changed #History",
    url: "http://www.youtube.com/watch?v=QOfzi9cOg6Y",
    value: 10, // Assign points for viewing this video
    stance: "neutral", // Appears to be an analytical video, likely neutral
    is_axiomatic_lg: false,
    is_axiomatic_ct: false,
    house_commentary: "The House explores the historical impact of Lee Harvey Oswald. How did this 'nonentity' change history?"
},// Add this video object to your const lhoContent = [...] array
{
    type: "video",
    title: "Booknotes+ Podcast: Paul Gregory, 'The Oswalds'",
    url: "http://www.youtube.com/watch?v=zBe4x0_f38E",
    value: 10, // Assign points for viewing this video
    stance: "neutral", // Appears to be a biographical discussion, likely neutral
    is_axiomatic_lg: false,
    is_axiomatic_ct: false,
    house_commentary: "The House presents a biographical perspective on Lee Harvey Oswald and his family. Consider the influences that shaped him."
},// Add this video object to your const lhoContent = [...] array
{
    type: "video",
    title: "Robert Garcia: Did Oswald Fire All Shots?",
    url: "https://www.youtube.com/watch?v=9MLuQCQ19F0",
    value: 15, // Assign points for viewing this video
    stance: "conspiracy_theory", // The question implies doubt about the lone gunman theory
    is_axiomatic_lg: false,
    is_axiomatic_ct: true,
    house_commentary: "The House questions a fundamental aspect of the official narrative. Was Oswald the only shooter?"
},/// Add this video object to your const lhoContent = [...] array
{
    type: "video",
    title: "EVIDENCE That Oswald NEVER Fired A Rifle!",
    url: "https://www.youtube.com/watch?v=LvgT4rvQH1g",
    value: 15, // Assign points for viewing this video
    stance: "conspiracy_theory", // This video challenges Oswald's capability as a lone gunman
    is_axiomatic_lg: false,
    is_axiomatic_ct: true,
    house_commentary: "The House presents evidence challenging Oswald's marksmanship. Re-evaluate the narrative of the assassin's skill."
},/// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "Who was Lisa Howard?",
    options: {
        A: "Blonde bombshell radio reporter who became one of Castro's girlfriends and was also a friend of Oswald",
        B: "Wife of Moe Howard of the Three Stooges",
        C: "Correspondent for Mutual Radio Network who, while in Cuba making a documentary about Cuba, met with Fidel Castro. Howard claimed that Castro was looking for a rapprochement with the U.S., and Kennedy wanted to act on this information, much to the chagrin of CIA Director John McCone and many others in the CIA",
        D: "One of LBJ's 'Slut Team', whose goal it was to have team members conduct alliances with JFK for the purpose of blackmailing him"
    },
    correct_answer_key: "C",
    value: 15, // Assign points for this question
    stance: "conspiracy_theory", // This question explores hidden connections and intelligence conflicts often cited in CTs.
    is_axiomatic_lg: false,
    is_axiomatic_ct: true,
    house_commentary: "The House probes into shadowy figures and their alleged influence on historical events. Was more at play than meets the eye?"
}, // ← ADD COMMA
{
    type: "video",
    title: "Lee Harvey Oswald & JFK Assassination: Experts in Dialogue",
    url: "https://www.youtube.com/watch?v=evMoapZNVXE&pp=0gcJCfcAhR29_xXO",
    value: 10, // Assign points for viewing this video
    stance: "neutral", // Appears to be an expert discussion, likely neutral/analytical
    is_axiomatic_lg: false,
    is_axiomatic_ct: false,
    house_commentary: "The House presents an expert discussion on Lee Harvey Oswald's role in the assassination. Listen to the perspectives."
},// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "How did Oswald try to kill himself?",
    options: {
        A: "By watching Happy Days reruns",
        B: "By jumping out of his third floor window",
        C: "By slitting his wrists",
        D: "By attempting 'suicide by cop' in a bank robbery attempt"
    },
    correct_answer_key: "C",
    value: 15, // Assign points for this question, as it reveals psychological state
    stance: "lone_gunman", // This reflects a biographical detail often used to explain his instability (LG perspective)
    is_axiomatic_lg: true,
    is_axiomatic_ct: false,
    house_commentary: "The House observes a desperate act from the accused. What does this reveal about his state of mind?"
},// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "Where did the Soviets first put Oswald after his suicide attempt?",
    options: {
        A: "In the insanity ward (Oswald did not appreciate that fact)",
        B: "In Intensive Care",
        C: "They threw him out into the streets",
        D: "They put him in jail and prepared to ship him off to Siberia"
    },
    correct_answer_key: "A",
    value: 15, // Assign points for this question, as it reveals biographical details
    stance: "lone_gunman", // This reflects a biographical detail that emphasizes his instability (LG perspective)
    is_axiomatic_lg: true,
    is_axiomatic_ct: false,
    house_commentary: "The House observes a detail from Oswald's time abroad. What consequences did his actions have?"
},// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "Who was Rima Shirokova? (Rimma in Oswald's diary)",
    options: {
        A: "His boss at work",
        B: "His Soviet lover",
        C: "His tourist guide, who discovered him in his bathtub after slitting his wrists, thus saving his life",
        D: "His KGB liaison"
    },
    correct_answer_key: "C",
    value: 15, // Assign points for this question, as it reveals biographical details
    stance: "lone_gunman", // This factual detail supports the documented narrative of his time in the USSR.
    is_axiomatic_lg: true,
    is_axiomatic_ct: false,
    house_commentary: "The House observes a critical intervention in Oswald's life abroad. What role did this individual play in his story?"
},// Add this mc_question object to your const lhoContent = [...] array
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
    value: 15, // Assign points for this question
    stance: "lone_gunman", // The correct answer aligns with the official conclusion that Oswald acted alone.
    is_axiomatic_lg: true,
    is_axiomatic_ct: false,
    house_commentary: "The House probes deep into Oswald's alleged affiliations. Was he an agent of any hidden power, or a man truly alone?"
},// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "On April 10 1963 Oswald attempted to kill a noted public figure. Who was the target of the prior assassination attempt?",
    options: {
        A: "General Edwin A. Walker (U.S. Army Retired)",
        B: "Colonel Sanders of Kentucky Fried Chicken",
        C: "Dallas Cowboys football coach Tom Landry",
        D: "Texas Governor John Connally"
    },
    correct_answer_key: "A",
    value: 15, // Assign points for this question, as it highlights a key biographical detail
    stance: "lone_gunman", // The correct answer supports the pattern of Oswald acting alone.
    is_axiomatic_lg: true,
    is_axiomatic_ct: false,
    house_commentary: "The House observes a pattern of behavior from the accused. What did previous acts reveal about his intentions?"
},// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "What trip did Oswald take in September of 1963 which aroused so much suspicion?",
    options: {
        A: "His trip to Mexico City to visit the Cuban and Soviet embassies",
        B: "His trip to Hamtramck MI to purchase paczkis",
        C: "His trip to Chicago and Las Vegas to meet Mafia leaders",
        D: "His trip to New York City and the United Nations Building"
    },
    correct_answer_key: "A",
    value: 15, // Assign points for this question
    stance: "conspiracy_theory", // This trip is a key point of suspicion in CTs regarding foreign connections.
    is_axiomatic_lg: false,
    is_axiomatic_ct: true,
    house_commentary: "The House observes a journey shrouded in speculation. What hidden agendas lay behind this excursion?"
},// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "Were there multiple Oswalds employed as part of a frame-up of Oswald?",
    options: {
        A: "Evidence is convincing beyond a reasonable doubt that a number of incidents occurred in and around Dallas in the months leading up to the assassination showing Oswald to be a patsy",
        B: "There were two Oswald imposters",
        C: "There was only ONE Oswald. The idea that there were imposters as part of a frame-up is poppycock and conspiratorial lunacy."
    },
    correct_answer_key: "C",
    value: 15, // Assign points for this question
    stance: "lone_gunman", // The correct answer aligns with the official dismissal of the "multiple Oswalds" theory.
    is_axiomatic_lg: true,
    is_axiomatic_ct: false,
    house_commentary: "The House questions the very identity of the alleged assassin. Was he one man, or many shadows in a grand design?"
},// Add this mc_question object to your const lhoContent = [...] array
{
    type: "mc_question",
    question: "Were there multiple Oswalds employed as part of a frame-up of Oswald?",
    options: {
        A: "Evidence is convincing beyond a reasonable doubt that a number of incidents occurred in and around Dallas in the months leading up to the assassination showing Oswald to be a patsy",
        B: "There were two Oswald imposters",
        C: "There was only ONE Oswald. The idea that there were imposters as part of a frame-up is poppycock and conspiratorial lunacy."
    },
    correct_answer_key: "C",
    value: 15, // Assign points for this question
    stance: "lone_gunman", // The correct answer aligns with the official dismissal of the "multiple Oswalds" theory.
    is_axiomatic_lg: true,
    is_axiomatic_ct: false,
    house_commentary: "The House questions the very identity of the alleged assassin. Was he one man, or many shadows in a grand design?"
},
];
