// Add this at the very beginning of your oswald_content.js file
function getLoopContent() {
    return oswaldContent;
}
// This file contains the EXPANDED content pool for the "Oswald Escapes" loop.
// It must be loaded BEFORE game_logic.js in your HTML.
// Content pool has been doubled with latest 2024-2025 research findings

const oswaldContent = [
    // --- ORIGINAL Lone Gunman Factoids (40) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Immediately after the assassination, Lee Harvey Oswald slipped out of the Texas School Book Depository unchallenged.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald's immediate departure was observed, but not challenged by authorities present.",
        incorrect_feedback: "The House: Incorrect. His quick exit from the Depository is a key detail in the assassination timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's escape route involved a pre-arranged getaway car waiting outside the Depository.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald's use of public transport suggests a lack of a sophisticated, pre-planned escape.",
        incorrect_feedback: "The House: Incorrect. His movements after the assassination appear reactive rather than part of a grand design."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald murdered Dallas Police Officer J.D. Tippit approximately 45 minutes after the assassination of President Kennedy.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Tippit murder is a separate, independently verifiable crime that further implicates Oswald.",
        incorrect_feedback: "The House: Incorrect. The timeline of Oswald's actions after the assassination is crucial to the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's post-assassination movements, including taking public transport, are presented by Bugliosi as highly organized and indicative of a professional escape plan.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi emphasizes the disorganized and reactive nature of Oswald's escape, inconsistent with a professional conspirator.",
        incorrect_feedback: "The House: Incorrect. Oswald's post-assassination behavior is often cited as evidence against a complex conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Officer Tippit pulled his patrol car over to speak to Oswald because Oswald was jaywalking.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Tippit stopped Oswald because he matched a police description of the assassination suspect.",
        incorrect_feedback: "The House: Incorrect. Tippit's reason for stopping Oswald is a key detail in understanding the sequence of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was apprehended at the Texas Theater after a shoe store manager, Johnny Brewer, observed his suspicious behavior.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Brewer's vigilance led directly to Oswald's capture in the movie theater.",
        incorrect_feedback: "The House: Incorrect. The circumstances of Oswald's arrest are a straightforward part of the official timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The .38 caliber Smith & Wesson revolver used to kill Tippit was purchased by Oswald via mail order under his 'A. Hidell' alias.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The weapon's acquisition links Oswald directly to the Tippit murder, bolstering the case against him.",
        incorrect_feedback: "The House: Incorrect. The chain of evidence for the Tippit murder weapon points to Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: During his interrogations, Oswald consistently admitted responsibility for the killings.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald denied responsibility and famously claimed he was 'merely a patsy,' a statement interpreted by Bugliosi as indicative of guilt.",
        incorrect_feedback: "The House: Incorrect. Oswald's statements during interrogation are central to understanding his post-arrest behavior."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A gray zipper jacket found near the scene of Tippit's murder was linked by fiber evidence to the shirt Oswald was wearing at the time of his arrest.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Fiber evidence provides a strong physical link between Oswald and the Tippit murder scene.",
        incorrect_feedback: "The House: Incorrect. Forensic evidence connecting Oswald to the Tippit murder scene is a key part of the official findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's behavior during interrogation was described as cooperative and transparent.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His behavior was described as 'obstructive, arrogant and highly offensive,' interpreted as signs of guilt.",
        incorrect_feedback: "The House: Incorrect. Oswald's demeanor during interrogation is often analyzed for clues to his mindset."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The murder of Officer Tippit serves as a crucial corroboration of Oswald's guilt in the assassination, as it was a separate, independently verifiable crime.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Tippit murder provides compelling, separate evidence of Oswald's capacity for violence and his actions after the assassination.",
        incorrect_feedback: "The House: Incorrect. The Tippit murder case is often seen as independently solidifying the charges against Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was formally arraigned for Kennedy's murder at 1:30 a.m. on November 23, 1963.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This formal charge established the legal process against Oswald.",
        incorrect_feedback: "The House: Incorrect. The precise timing of Oswald's arraignment is a key detail in the official timeline."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald returned to his rooming house after the assassination to retrieve a change of clothes and a hidden pistol.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His actions at the rooming house reveal a frantic effort to arm himself and alter his appearance.",
        incorrect_feedback: "The House: Incorrect. Oswald's visit to his rooming house is a documented part of his escape sequence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The police broadcast describing the Kennedy shooting suspect, which Tippit heard, was very vague and unhelpful.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The description Oswald matched was specific enough for Tippit to act, confirming Oswald's identity as the suspect.",
        incorrect_feedback: "The House: Incorrect. The clarity of the police description is a factor in understanding Tippit's actions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: At least nine people witnessed or heard the Tippit murder.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The high number of witnesses to Tippit's murder provides compelling corroboration of Oswald's actions.",
        incorrect_feedback: "The House: Incorrect. The prevalence of eyewitnesses to the Tippit murder strengthens the official account."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's actions after the assassination were consistent with a pre-planned escape strategy by a larger conspiracy.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi argues his erratic, disorganized flight indicates a lone actor, not a professional conspirator.",
        incorrect_feedback: "The House: Incorrect. Oswald's post-assassination behavior is often contrasted with what might be expected from a pre-planned escape."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was arrested without incident at the Texas Theater.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His arrest involved a scuffle and an attempt to use his pistol, indicating resistance.",
        incorrect_feedback: "The House: Incorrect. The circumstances of Oswald's arrest are part of the official record of his capture."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The ballistic evidence from the bullets recovered from Tippit's body conclusively linked them to Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Ballistic evidence provides a definitive link between Oswald and the Tippit murder weapon.",
        incorrect_feedback: "The House: Incorrect. Forensic evidence is a critical component of the official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's movements after the assassination were so perfectly executed that he left no trace for investigators to follow.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His trail, though seemingly erratic, was traceable through eyewitnesses and physical evidence.",
        incorrect_feedback: "The House: Incorrect. The ability to reconstruct Oswald's movements after the assassination is central to the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The murder of Officer Tippit was a random act of violence unrelated to the assassination.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. It occurred shortly after and was directly linked to the assassination suspect's flight.",
        incorrect_feedback: "The House: Incorrect. The proximity and timing of the Tippit murder firmly tie it to the assassination aftermath."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Johnny Brewer, the shoe store manager, followed Oswald into the Texas Theater because Oswald failed to buy a ticket.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Brewer's observation of this minor infraction led directly to Oswald's capture.",
        incorrect_feedback: "The House: Incorrect. Key citizen observations often lead to the apprehension of suspects."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's post-assassination behavior is consistent with his established psychological profile of being emotionally unhinged and a malcontent.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His actions align with a personality prone to impulsive, violent outbursts and defiance.",
        incorrect_feedback: "The House: Incorrect. Understanding Oswald's psychological state is part of the official assessment of his capabilities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The absence of a clear, pre-arranged escape plan for Oswald supports the lone gunman theory.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The lack of a sophisticated escape route suggests an individual acting alone, not a larger conspiracy.",
        incorrect_feedback: "The House: Incorrect. The nature of Oswald's escape is a key piece of evidence in the argument for a lone assassin."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was apprehended by multiple police officers at the Texas Theater after a struggle.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Multiple officers were required to subdue him, demonstrating the police's coordinated but difficult response.",
        incorrect_feedback: "The House: Incorrect. The details of Oswald's capture are part of the official record of his arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The evidence in the Tippit case helps buttress the overall argument for Oswald's guilt in the JFK assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Tippit murder provides a strong, independent case for Oswald's capacity for violence and his flight from justice.",
        incorrect_feedback: "The House: Incorrect. The Tippit case is often seen as a critical corroborating element in the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's actions after the assassination were those of an innocent man trying to assist the police.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His behavior, including lies and resistance, is interpreted as characteristic of a guilty party.",
        incorrect_feedback: "The House: Incorrect. Oswald's post-assassination conduct is analyzed as evidence of his involvement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's claim of being a 'patsy' is interpreted by Bugliosi as a clear sign of his innocence.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi interprets this as a desperate attempt to deflect guilt, rather than a genuine claim of innocence.",
        incorrect_feedback: "The House: Incorrect. Oswald's 'patsy' claim is a major point of analysis in the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The murder of Officer Tippit occurred in a residential neighborhood with multiple witnesses.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. It occurred in a visible area with many witnesses, strengthening the evidence against Oswald.",
        incorrect_feedback: "The House: Incorrect. The location and visibility of the Tippit murder are key details in the official account."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's refusal to cooperate and his lies about the weapons during interrogation are presented as attempts to conceal his actions.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This behavior is interpreted as characteristic of a guilty party trying to mislead investigators.",
        incorrect_feedback: "The House: Incorrect. Oswald's post-arrest conduct is analyzed as part of the case against him."
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
        question: "TRUE or FALSE: Bugliosi questions why top-level conspirators would provide a hitman with a 'twelve-dollar rifle' or allow him to wander the streets catching cabs and buses to escape.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi argues the absurdity of such a plan, given the high stakes of a presidential assassination, favors a lone, unsophisticated actor.",
        incorrect_feedback: "The House: Incorrect. This point is used to highlight the perceived illogic of attributing the assassination to a professional conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The timing of Oswald's capture at the Texas Theater was four minutes after Ruby entered the Dallas Police Department basement.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald was captured at the theater well before Ruby's later appearance at the police station.",
        incorrect_feedback: "The House: Incorrect. The timeline of events on November 22nd is crucial to understanding the sequence of Oswald's actions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The physical evidence linking Oswald to both the Kennedy assassination and Tippit murder demonstrates a pattern of violent behavior.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The forensic links between both crimes establish Oswald's capability and willingness to commit acts of violence.",
        incorrect_feedback: "The House: Incorrect. The pattern of evidence is central to the official case against Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's use of public transportation after the assassination indicates careful pre-planning of his escape route.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His reliance on buses and taxis suggests improvisation rather than sophisticated planning.",
        incorrect_feedback: "The House: Incorrect. The haphazard nature of his escape supports the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission found that Ruby had no significant association with Oswald prior to the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Commission concluded there was no meaningful connection between Ruby and Oswald before November 24th.",
        incorrect_feedback: "The House: Incorrect. The lack of prior association is a key finding supporting the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's possession of false identification documents suggests he was part of a professional intelligence operation.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His use of the 'A. Hidell' alias was crude and easily traceable, inconsistent with professional tradecraft.",
        incorrect_feedback: "The House: Incorrect. The amateur nature of his false documents supports the lone actor theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The forensic evidence from the Texas Theater arrest scene corroborates witness testimony about Oswald's violent resistance.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Physical evidence and multiple witness accounts confirm Oswald's attempt to use his weapon during arrest.",
        incorrect_feedback: "The House: Incorrect. The consistency between physical evidence and witness testimony strengthens the official account."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's interrogation transcripts reveal detailed knowledge of a larger conspiracy.",
        correct_answer: false,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite extensive questioning, Oswald provided no evidence of co-conspirators or broader plots.",
        incorrect_feedback: "The House: Incorrect. The absence of conspiracy details in his statements supports the lone gunman conclusion."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The chain of custody for evidence linking Oswald to both murders was properly maintained according to official investigations.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Official investigations confirmed proper evidence handling, supporting the validity of forensic conclusions.",
        incorrect_feedback: "The House: Incorrect. Proper evidence procedures are fundamental to the integrity of the case against Oswald."
    },

    // --- NEW Lone Gunman Factoids (40 additional based on 2024-2025 research) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The 2025 declassified documents show that FBI ballistics expert Cortlandt Cunningham could not definitively link all bullets from Tippit's body to Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. While the ballistics were inconclusive on some bullets, the totality of evidence still points to Oswald as the sole perpetrator.",
        incorrect_feedback: "The House: Incorrect. Ballistics expert testimony is part of the complex forensic picture in the Tippit case."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Warren 'Butch' Burroughs, the Texas Theater manager, confirmed Oswald entered the theater between 1:00 and 1:07 PM on November 22, 1963.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Burroughs' testimony provides precise timing for Oswald's arrival at the theater after the Tippit murder.",
        incorrect_feedback: "The House: Incorrect. Multiple witnesses confirm the timeline of Oswald's movements that afternoon."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Detective Paul Bentley, who arrested Oswald, described him as remarkably calm and cooperative during the theater confrontation.",
        correct_answer: false,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bentley and other officers described Oswald as violent and resistant, attempting to draw his weapon during arrest.",
        incorrect_feedback: "The House: Incorrect. Multiple officers testified to Oswald's aggressive behavior during his apprehension."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's revolver contained both Winchester and Remington ammunition when he was arrested, matching the types of bullets found in Tippit's body.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This matching ammunition provides strong circumstantial evidence linking Oswald's weapon to the Tippit murder.",
        incorrect_feedback: "The House: Incorrect. The ammunition match is a crucial piece of forensic evidence in the case."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Police officer M.N. McDonald was the first to make physical contact with Oswald in the Texas Theater.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. McDonald's courage in confronting the armed suspect led directly to Oswald's capture.",
        incorrect_feedback: "The House: Incorrect. McDonald's role in the arrest is well-documented in police reports and witness testimony."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The films 'Cry of Battle' and 'War is Hell' were playing at the Texas Theater when Oswald was arrested.",
        correct_answer: true,
        value: 5, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. These war films were the afternoon programming when Oswald sought refuge in the theater.",
        incorrect_feedback: "The House: Incorrect. The theater's programming that day is part of the documented record of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attempted to fire his revolver at police officers during his arrest but the weapon misfired.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Multiple officers testified that Oswald pulled the trigger but the gun did not fire, likely due to the struggle.",
        incorrect_feedback: "The House: Incorrect. This detail demonstrates Oswald's willingness to kill police officers to avoid capture."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Detective Jerry Hill found four spent cartridge cases near the Tippit murder scene that were ballistically matched to Oswald's revolver.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The cartridge cases provide definitive ballistic evidence linking Oswald's weapon to the crime scene.",
        incorrect_feedback: "The House: Incorrect. The ballistic match of shell casings is conclusive forensic evidence of Oswald's guilt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Fifteen police officers responded to the Texas Theater call, demonstrating the massive manhunt underway for the assassination suspect.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The rapid police response shows the effectiveness of law enforcement coordination in capturing the suspect.",
        incorrect_feedback: "The House: Incorrect. The scale of the police response reflects the gravity of the crimes committed."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's arrest at the Texas Theater occurred at approximately 1:50 PM, less than two hours after Kennedy's assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The rapid apprehension demonstrates effective police work in tracking down the assassination suspect.",
        incorrect_feedback: "The House: Incorrect. The timeline of Oswald's capture is well-documented and shows efficient law enforcement response."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ted Callaway, a witness to the Tippit murder, heard five shots fired, suggesting Oswald fired more rounds than the four cartridge cases found.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Callaway's testimony suggests one bullet may never have been recovered, consistent with a panicked shooting by Oswald.",
        incorrect_feedback: "The House: Incorrect. Multiple witnesses heard varying numbers of shots, consistent with the chaotic nature of the crime."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Julia Postal, the Texas Theater cashier, immediately called police when Johnny Brewer reported the suspicious man entering without paying.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The quick thinking of civilians like Postal and Brewer was crucial in Oswald's rapid apprehension.",
        incorrect_feedback: "The House: Incorrect. Civilian cooperation with law enforcement was essential in capturing the fugitive."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald discarded his jacket on East Jefferson Boulevard while fleeing from the Tippit murder scene toward the Texas Theater.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The abandoned jacket created a clear trail of evidence connecting Oswald to the murder scene.",
        incorrect_feedback: "The House: Incorrect. Physical evidence like the discarded jacket helped establish Oswald's flight path after killing Tippit."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The original seat where Oswald sat in the Texas Theater was confiscated by the FBI as evidence and never returned.",
        correct_answer: true,
        value: 5, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Every piece of physical evidence from the arrest scene was preserved for investigation purposes.",
        incorrect_feedback: "The House: Incorrect. The FBI's thorough collection of evidence demonstrates the comprehensive nature of the investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Domingo Benavides, a witness to the Tippit shooting, immediately notified police via Tippit's patrol car radio.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Benavides' quick action in using the police radio helped coordinate the immediate manhunt for the killer.",
        incorrect_feedback: "The House: Incorrect. Witness cooperation was crucial in the rapid police response to the Tippit murder."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Officer C.T. Walker, identifiable by his white hat in arrest photos, was one of the key officers who subdued Oswald in the theater.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Walker's participation in the arrest is documented in both official reports and photographs from the scene.",
        incorrect_feedback: "The House: Incorrect. Multiple officers worked together to safely apprehend the armed and dangerous suspect."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald shouted 'This is it!' when police officers approached him in the Texas Theater, suggesting he expected to be killed.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This exclamation suggests Oswald knew his crimes had caught up with him and he faced inevitable capture.",
        incorrect_feedback: "The House: Incorrect. Oswald's words and actions in the theater reflect his awareness of his desperate situation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission found that approximately six to seven patrons were in the main floor of the Texas Theater during Oswald's arrest.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The sparse crowd allowed police to quickly identify and isolate the suspect without endangering many civilians.",
        incorrect_feedback: "The House: Incorrect. The small number of theater patrons facilitated the safe execution of Oswald's arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald struck Officer McDonald between the eyes with his left fist before attempting to draw his weapon.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This violent resistance demonstrates Oswald's desperation and willingness to fight law enforcement to the end.",
        incorrect_feedback: "The House: Incorrect. Oswald's attack on McDonald shows he was prepared to use violence to avoid capture."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Texas Theater, originally financed by Howard Hughes, was the largest suburban movie theater in Dallas when it opened in 1931.",
        correct_answer: true,
        value: 5, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The theater's prominence made it an unlikely but convenient refuge for a fleeing assassin.",
        incorrect_feedback: "The House: Incorrect. The theater's history and significance add context to the location where Oswald was finally captured."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Johnny Brewer observed Oswald wearing only a T-shirt with no jacket when he entered the theater lobby area.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Brewer's observation is consistent with Oswald having discarded his jacket during his flight from the Tippit murder scene.",
        incorrect_feedback: "The House: Incorrect. Witness descriptions of Oswald's appearance help establish the timeline of his movements."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Police officers entered the Texas Theater from both the front and rear exits to prevent Oswald's escape.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The coordinated police response ensured all escape routes were blocked before confronting the suspect.",
        incorrect_feedback: "The House: Incorrect. Professional police tactics were employed to safely apprehend the dangerous fugitive."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Detective Paul Bentley rushed to the theater balcony and instructed the projectionist to turn up the house lights.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Proper lighting was essential for officers to safely identify and apprehend the armed suspect.",
        incorrect_feedback: "The House: Incorrect. Police procedures ensured officer safety and effective identification of the target."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was sitting alone near the right center aisle in the rear of the main floor when police spotted him.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald's isolated position made him easy to identify and helped prevent civilian casualties during the arrest.",
        incorrect_feedback: "The House: Incorrect. The suspect's location in the theater is precisely documented in official police reports."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The crowd outside the Texas Theater shouted 'Kill him!' when Oswald was brought out, demonstrating public anger over the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The crowd's reaction reflects the immediate public outrage and desire for justice following Kennedy's murder.",
        incorrect_feedback: "The House: Incorrect. Public sentiment was clearly against Oswald from the moment of his arrest."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Jack Davis, a Texas Theater patron, corroborated manager Burroughs' timing by observing Oswald in the theater before 1:20 PM.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Multiple independent witnesses confirm the timeline of Oswald's arrival at the theater.",
        incorrect_feedback: "The House: Incorrect. Corroborating witness testimony strengthens the official chronology of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The arrest of Oswald in the Texas Theater was photographed by professional news photographers, creating iconic images of the capture.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The photographic documentation provides visual evidence of Oswald's condition and demeanor during arrest.",
        incorrect_feedback: "The House: Incorrect. Contemporary photographs serve as primary source evidence of the arrest proceedings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's black eye visible in arrest photos resulted from his violent struggle with police officers in the theater.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Physical evidence of the struggle confirms witness testimony about Oswald's violent resistance to arrest.",
        incorrect_feedback: "The House: Incorrect. Oswald's injuries are consistent with his aggressive behavior during the confrontation with police."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Officer Tippit was working two part-time jobs in addition to his police duties to support his family on November 22, 1963.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Tippit's dedication to supporting his family makes his murder by Oswald even more tragic and senseless.",
        incorrect_feedback: "The House: Incorrect. Understanding Tippit's character helps emphasize the human cost of Oswald's crimes."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The 2025 declassified FBI documents show that the Bureau considered Oswald a poor marksman based on some reports.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. However, his Marine training and the close-range nature of the shots still made him capable of committing both murders.",
        incorrect_feedback: "The House: Incorrect. Marksmanship assessments don't negate the physical evidence linking Oswald to both crimes."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's purchase of both the rifle and revolver under the false name 'A. Hidell' demonstrates premeditation for violent acts.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The use of false identification to acquire weapons shows deliberate planning for criminal activities.",
        incorrect_feedback: "The House: Incorrect. The pattern of weapon acquisition under aliases indicates premeditated criminal intent."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The rapid sequence of events from assassination to Tippit murder to arrest demonstrates Oswald acted alone without coordination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The chaotic, reactive nature of Oswald's actions is inconsistent with a coordinated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Professional conspirators would have provided a more sophisticated escape plan for their operative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Helen Markham's eyewitness testimony placing Oswald at the Tippit murder scene was corroborated by multiple other witnesses.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Multiple independent witnesses identified Oswald, creating a strong foundation for the case against him.",
        incorrect_feedback: "The House: Incorrect. Corroborating witness testimony is crucial evidence establishing Oswald's presence at the crime scene."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The four cartridge cases found at the Tippit murder scene required manual ejection from a revolver, indicating deliberate evidence disposal.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This action suggests Oswald attempted to dispose of evidence but ironically created a stronger forensic link to his weapon.",
        incorrect_feedback: "The House: Incorrect. The manual ejection of cartridges demonstrates Oswald's awareness of leaving evidence behind."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Acquilla Clemons, a witness who claimed to see two men flee the Tippit murder scene, was never interviewed by the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. However, the overwhelming physical and witness evidence still points conclusively to Oswald as the lone killer.",
        incorrect_feedback: "The House: Incorrect. While some witnesses weren't interviewed, the totality of evidence still supports Oswald's sole guilt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Warren Reynolds initially said the fleeing gunman was not Oswald but later changed his identification after an assassination attempt.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite Reynolds' changed testimony, the physical evidence and other witnesses still establish Oswald's guilt.",
        incorrect_feedback: "The House: Incorrect. Individual witness inconsistencies don't override the substantial forensic evidence against Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Dallas Police radio broadcast at 12:44 PM described a suspect matching Oswald's physical characteristics within 14 minutes of the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The rapid identification demonstrates effective police work based on eyewitness descriptions from Dealey Plaza.",
        incorrect_feedback: "The House: Incorrect. Quick police response and accurate suspect descriptions helped lead to Oswald's apprehension."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's decision to enter the Texas Theater without paying admission was consistent with his panicked state after murdering Tippit.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This impulsive action led to his detection and arrest, showing the unplanned nature of his escape.",
        incorrect_feedback: "The House: Incorrect. Oswald's minor theater infraction ultimately resulted in his downfall through citizen alertness."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The investigation found no evidence that Oswald received any assistance or guidance in planning his escape route after the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The ad hoc nature of his movements supports the conclusion that he acted entirely alone.",
        incorrect_feedback: "The House: Incorrect. The absence of sophisticated planning indicates Oswald had no accomplices or handlers."
    },

    // --- ORIGINAL Conspiracy Theory Factoids (40) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers argue that Oswald's escape from the Depository was too easy, suggesting outside help.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The swiftness and seeming ease of his initial exit raise questions for those who suspect complicity.",
        incorrect_feedback: "The House: Incorrect. The nature of Oswald's initial escape from the Depository is often scrutinized by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some conspiracy theorists believe Oswald planned to meet with his 'handlers' at the Texas Theater to be eliminated as part of a larger plot.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This theory posits the Texas Theater as a designated rendezvous point for Oswald's fate to be sealed by conspirators.",
        incorrect_feedback: "The House: Incorrect. The Texas Theater has become a focal point for theories about Oswald's ultimate fate within a conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The earliest evidence suggests the Tippit murder occurred between 1:06 PM and 1:10 PM, implying Oswald needed to be driven there to arrive so quickly.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Timeline discrepancies in Oswald's movements are often cited as evidence that he could not have acted alone.",
        incorrect_feedback: "The House: Incorrect. The precise timing of events is often scrutinized for inconsistencies that suggest a conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some question how Jack Ruby was able to roam around the Dallas police station so freely carrying a pistol to kill Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The perceived security lapse allowing Ruby access to Oswald is a major point of suspicion for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. Ruby's access to the police station is a key detail often cited in arguments for a wider plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The murder of Oswald before he could stand trial has led to a myriad of conspiracy theories, including claims of U.S. government involvement.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald's silencing is viewed by many as the definitive act to prevent the truth of a conspiracy from emerging.",
        incorrect_feedback: "The House: Incorrect. Oswald's death is a central event that fuels almost all conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Many suspect Oswald's death was the conclusive element of a larger conspiracy to assassinate Kennedy.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This belief posits Oswald's murder as the final piece of a plot to ensure silence.",
        incorrect_feedback: "The House: Incorrect. Oswald's murder is often seen as integral to the grander conspiratorial narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's conclusion that Jack Ruby acted alone is questioned by those who point to his alleged ties to organized crime.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's underworld connections are frequently cited as evidence of complicity in a wider plot.",
        incorrect_feedback: "The House: Incorrect. Ruby's background is a key element for those who challenge the official account of his motives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some theorists claim Ruby was a Mafia hit man ordered to kill Oswald to silence him.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This specific theory links Ruby's act directly to organized crime's alleged role in the assassination.",
        incorrect_feedback: "The House: Incorrect. The idea of Ruby being a mob hit man is a prominent theory in the assassination narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's alleged ties to mobsters Carlos Marcello and Santos Trafficante are cited by conspiracy theorists.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These specific connections are used to bolster claims of organized crime involvement.",
        incorrect_feedback: "The House: Incorrect. Specific mob figures are often named in theories linking organized crime to the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA concluded that the Warren Commission was incorrect in finding no significant associations between Oswald and Ruby.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's differing finding on Oswald-Ruby associations is a key piece of evidence for conspiracy theorists.",
        incorrect_feedback: "The House: Incorrect. The HSCA's conclusions often highlight shortcomings in the Warren Commission's findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA found that Oswald and Ruby had certain contacts of investigative significance.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This finding by the HSCA directly contradicted the Warren Commission's claim of no association.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings on Oswald and Ruby's connections are pivotal for alternative theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA could not rule out the possibility that individual members of organized crime were involved in the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This official inability to rule out mob involvement leaves the door open for organized crime theories.",
        incorrect_feedback: "The House: Incorrect. Even official investigations sometimes acknowledge the limitations of their findings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers assert that Oswald's behavior after the assassination does not fit the profile of a lone, disorganized individual.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald's post-assassination actions are often scrutinized for signs of conspiratorial planning or guidance.",
        incorrect_feedback: "The House: Incorrect. Interpretations of Oswald's post-assassination behavior differ greatly among researchers."
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
        question: "TRUE or FALSE: The destruction of Oswald's note would prove the FBI was aware Oswald was threatening violence before the assassination.",
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
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This explanation portrays Ruby's act as an emotional reaction, not a calculated conspiracy.",
        incorrect_feedback: "The House: Incorrect. Alternative explanations for Ruby's motive often focus on emotional or psychological factors rather than external manipulation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers claim that multiple Oswald imposters were used in the months before the assassination to create a false trail of evidence.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The 'Oswald imposter' theory suggests a sophisticated effort to frame the real Oswald.",
        incorrect_feedback: "The House: Incorrect. Claims of multiple Oswalds are central to theories of elaborate deception."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Witnesses reported seeing Oswald in locations where official records show he could not have been, suggesting the use of doubles.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These alleged sightings are used to support theories of deliberate impersonation.",
        incorrect_feedback: "The House: Incorrect. Contradictory witness accounts are often highlighted by conspiracy theorists."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The rapid identification of Oswald as the suspect within hours of the assassination suggests prior knowledge or preparation.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The speed of identification raises questions about whether Oswald was pre-selected as a suspect.",
        incorrect_feedback: "The House: Incorrect. The timeline of suspect identification is scrutinized by those who suspect a frame-up."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers argue that Oswald's palmprint on the rifle was planted after his death.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Questions about the chain of custody and timing of this evidence discovery fuel conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. The authenticity and timing of key evidence is often challenged by critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The paraffin test performed on Oswald's hands showed no evidence of recent gunpowder residue from firing a rifle.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The negative paraffin test results are cited as evidence that Oswald may not have fired a rifle that day.",
        incorrect_feedback: "The House: Incorrect. Forensic test results that contradict the official narrative are key points for conspiracy theorists."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Several witnesses reported seeing men with rifles in buildings other than the Texas School Book Depository.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These witness accounts are used to support theories of multiple shooters and a coordinated attack.",
        incorrect_feedback: "The House: Incorrect. Alternative shooter locations are frequently cited in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The motorcade route was changed at the last minute, potentially to bring Kennedy's car into the line of fire from the Depository.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The route change is seen by some as evidence of advance planning and inside knowledge.",
        incorrect_feedback: "The House: Incorrect. Unexplained changes to security arrangements are often cited as suspicious."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some conspiracy theorists believe Oswald was specifically chosen as a patsy because of his unusual background and political activities.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His defection to Russia and pro-Castro activities made him an ideal suspect for those planning to frame him.",
        incorrect_feedback: "The House: Incorrect. The selection of Oswald as a patsy is central to many conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The alleged backyard photos of Oswald holding the murder weapons have been questioned as potentially doctored.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Photo analysis has raised questions about the authenticity of these crucial pieces of evidence.",
        incorrect_feedback: "The House: Incorrect. The backyard photos are a major point of contention in assassination research."
    },

    // --- NEW Conspiracy Theory Factoids (40 additional based on 2024-2025 research) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: The 2025 declassified documents revealed that the CIA had extensive surveillance on Oswald during his September 1963 Mexico City trip but failed to act on it.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This revelation raises disturbing questions about whether intelligence agencies could have prevented the assassination.",
        incorrect_feedback: "The House: Incorrect. The extent of pre-assassination surveillance is a major concern for those questioning official narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Newly released FBI documents suggest the Bureau had more insight into Oswald's volatility than previously admitted but took no preventive action.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This pattern of inaction by intelligence agencies fuels suspicions of either incompetence or complicity.",
        incorrect_feedback: "The House: Incorrect. Pre-assassination knowledge by authorities is a key element in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: A previously withheld Dallas police report mentioned a tip about a second shooter on the grassy knoll, dismissed by the Warren Commission.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The suppression of alternative shooter evidence suggests a predetermined conclusion to blame Oswald alone.",
        incorrect_feedback: "The House: Incorrect. Withheld evidence about additional shooters undermines confidence in the official investigation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bernard Haire claimed to witness a second arrest at the rear of the Texas Theater while Oswald was being arrested at the front.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. If true, this suggests the possibility of Oswald doubles or additional conspirators being captured and released.",
        incorrect_feedback: "The House: Incorrect. Claims of multiple arrests at the theater support theories of coordinated deception."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Jim Garrison argued that the ballistics evidence in the Tippit case was deliberately mishandled to frame Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Garrison alleged the Dallas Police fired Oswald's revolver to create matching cartridges for the FBI.",
        incorrect_feedback: "The House: Incorrect. Questions about evidence tampering are central to challenging the official Tippit murder narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some witnesses described Tippit's killer as 'short and squat' while Oswald was thin and of medium height.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Physical description mismatches suggest either witness unreliability or the involvement of an Oswald imposter.",
        incorrect_feedback: "The House: Incorrect. Contradictory witness descriptions are often cited as evidence against Oswald's guilt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Detective Jim Leavelle admitted that the ballistics evidence in the Tippit case was 'frankly a mess.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Official acknowledgment of problematic evidence undermines confidence in the case against Oswald.",
        incorrect_feedback: "The House: Incorrect. Even lead investigators expressed doubts about the quality of the forensic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Patrolman J.M. Poe could not identify his alleged markings on shell casings from the Tippit murder scene, suggesting evidence switching.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The inability to verify evidence markings raises serious questions about chain of custody and potential tampering.",
        incorrect_feedback: "The House: Incorrect. Compromised evidence handling procedures cast doubt on the reliability of forensic conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Early police reports described the Tippit killer as carrying an automatic pistol, while Oswald had a revolver.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This weapon discrepancy suggests either witness error or the involvement of a different killer.",
        incorrect_feedback: "The House: Incorrect. Initial police reports contradicting later evidence are often cited by conspiracy researchers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The presence of both Winchester and Remington bullets in Tippit's body with mismatched cartridge brands found at the scene suggests multiple weapons.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The ammunition mismatch implies either evidence planting or the involvement of multiple shooters.",
        incorrect_feedback: "The House: Incorrect. Ballistic inconsistencies are a cornerstone of arguments against the official Tippit murder narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The timing problems with Oswald's movements suggest he would have needed transportation to reach the Tippit murder scene.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. If accurate, this timing analysis indicates Oswald had accomplices who assisted his movements.",
        incorrect_feedback: "The House: Incorrect. Timeline discrepancies are often used to argue for conspiracy involvement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Helen Markham's eyewitness testimony contained numerous contradictions that would have been challenged by a competent defense attorney.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The reliance on questionable witness testimony suggests a rush to judgment rather than thorough investigation.",
        incorrect_feedback: "The House: Incorrect. Problematic witness accounts undermine the foundation of the case against Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers believe the Texas Theater was designated as a pre-arranged meeting point for Oswald and his handlers.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This theory suggests Oswald expected to meet contacts who would facilitate his escape or elimination.",
        incorrect_feedback: "The House: Incorrect. The theater as a rendezvous point implies sophisticated planning beyond a lone gunman scenario."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The destruction of Oswald's threatening note to FBI agent Hosty represents potential evidence of a cover-up.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The deliberate destruction of evidence suggests an effort to hide prior knowledge of Oswald's dangerous intentions.",
        incorrect_feedback: "The House: Incorrect. Evidence destruction by law enforcement agencies raises serious questions about their motivations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's extensive connections to organized crime figures suggest his killing of Oswald was not spontaneous but planned.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's mob ties provide the motive and means for a coordinated effort to silence Oswald permanently.",
        incorrect_feedback: "The House: Incorrect. Organized crime connections offer a plausible alternative to the official narrative of Ruby's spontaneous act."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that Ruby gained access to the heavily guarded Dallas police station suggests inside assistance.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The security breach allowing Ruby to kill Oswald implies coordination with law enforcement personnel.",
        incorrect_feedback: "The House: Incorrect. The ease of Ruby's access to Oswald suggests prior arrangements rather than coincidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA's finding that President Kennedy was 'probably assassinated as a result of a conspiracy' contradicts the Warren Commission's lone gunman conclusion.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. An official government investigation reached the opposite conclusion from the Warren Commission, legitimizing conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. The HSCA's conspiracy finding provides official support for alternative theories about the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA's use of mail intercepts and fabricated communications revealed in 2025 documents shows the agency's capability for deception operations.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These revelations demonstrate the CIA's sophisticated ability to manipulate evidence and create false narratives.",
        incorrect_feedback: "The House: Incorrect. Intelligence agency deception capabilities are relevant to understanding potential conspiracy methods."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple witnesses to the Tippit murder were not interviewed until months later, allowing time for coaching or intimidation.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Delayed witness interviews create opportunities for memory contamination or deliberate manipulation of testimony.",
        incorrect_feedback: "The House: Incorrect. Investigative delays raise questions about the integrity of witness identification procedures."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some witnesses were shown only Oswald's photograph during identification procedures, violating proper police protocols.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Suggestive identification procedures indicate a predetermined desire to implicate Oswald rather than find the truth.",
        incorrect_feedback: "The House: Incorrect. Improper identification procedures undermine the reliability of witness testimony against Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The combination of evidence destruction, timeline problems, and witness inconsistencies suggests a coordinated effort to frame Oswald.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The pattern of irregularities points to systematic manipulation rather than investigative incompetence.",
        incorrect_feedback: "The House: Incorrect. Multiple convergent anomalies support theories of deliberate conspiracy to blame Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's claim of being a 'patsy' takes on greater significance given the evidence of intelligence agency surveillance and mob connections.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His 'patsy' statement appears prescient given the documented efforts to implicate him in both murders.",
        incorrect_feedback: "The House: Incorrect. Oswald's final public statement gains credibility when viewed against the backdrop of conspiracy evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The rapid closure of both murder cases without thorough investigation suggests a predetermined desire to blame Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The speed of case resolution implies authorities were more interested in finding a scapegoat than seeking truth.",
        incorrect_feedback: "The House: Incorrect. Rushed investigations often indicate predetermined conclusions rather than thorough fact-finding."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Geneva White's claim that her husband Roscoe White was involved in the Tippit murder adds another layer to conspiracy theories.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. If credible, this testimony suggests a network of conspirators beyond just Oswald and Ruby.",
        incorrect_feedback: "The House: Incorrect. Additional claims of conspiracy involvement expand the scope of potential plots against Kennedy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's failure to interview key witnesses and investigate important leads demonstrates deliberate tunnel vision.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Selective investigation suggests the Commission was more interested in confirming Oswald's guilt than finding truth.",
        incorrect_feedback: "The House: Incorrect. Investigative omissions by the Warren Commission raise questions about their true objectives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The sophisticated nature of the alleged Oswald impersonation campaign suggests intelligence agency involvement.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Creating and managing doubles requires resources and expertise typically associated with intelligence operations.",
        incorrect_feedback: "The House: Incorrect. The complexity of impersonation operations points to professional intelligence capabilities."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The 2025 document releases show intelligence agencies had far more pre-assassination knowledge about Oswald than previously disclosed.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This pattern of concealment suggests intelligence agencies had reasons to hide their true knowledge of Oswald.",
        incorrect_feedback: "The House: Incorrect. Hidden intelligence about Oswald raises questions about agency motivations and potential complicity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The coordination required for the alleged conspiracy would have necessitated involvement by multiple government agencies and organized crime groups.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The scope of alleged deception implies a complex network of conspirators across different power centers.",
        incorrect_feedback: "The House: Incorrect. Large-scale conspiracy theories require coordination between multiple powerful institutions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The decades-long classification of assassination documents suggests ongoing efforts to conceal embarrassing or incriminating information.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Continued secrecy about a 60-year-old case implies there are still sensitive revelations to be hidden.",
        incorrect_feedback: "The House: Incorrect. Prolonged classification of documents fuels suspicions about what authorities are still trying to conceal."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The pattern of convenient deaths among key witnesses supports theories of systematic elimination of inconvenient testimony.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The unusual mortality rate among assassination witnesses suggests efforts to prevent damaging revelations.",
        incorrect_feedback: "The House: Incorrect. Witness deaths create the impression of ongoing cover-up activities to protect conspirators."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The failure of multiple intelligence agencies to prevent the assassination despite extensive surveillance suggests either gross incompetence or deliberate inaction.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Neither explanation reflects well on the agencies, leading to suspicions of deeper involvement in the plot.",
        incorrect_feedback: "The House: Incorrect. Intelligence failures on this scale require explanation beyond simple oversight or bureaucratic error."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby's financial debts and mob connections provided sufficient leverage for organized crime to compel him to kill Oswald.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Financial pressure combined with criminal associations creates plausible motivation for Ruby's participation in a conspiracy.",
        incorrect_feedback: "The House: Incorrect. Ruby's vulnerabilities made him an ideal candidate for manipulation by criminal organizations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The official narrative requires believing in an extraordinary series of coincidences that strain credibility.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The accumulation of unlikely events and convenient outcomes suggests design rather than chance.",
        incorrect_feedback: "The House: Incorrect. Multiple improbable coincidences often indicate underlying coordination rather than random occurrence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The government's changing explanations over time indicate attempts to manage public perception rather than reveal truth.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Evolving official narratives suggest information management priorities rather than commitment to factual accuracy.",
        incorrect_feedback: "The House: Incorrect. Shifting government positions on the assassination indicate public relations concerns rather than truth-seeking."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The scope and sophistication of the alleged conspiracy would have required resources and coordination only available to major institutions.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Amateur conspirators could not have orchestrated such an elaborate deception involving multiple crime scenes and agencies.",
        incorrect_feedback: "The House: Incorrect. The alleged conspiracy's complexity points to involvement by powerful, well-resourced organizations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The persistent public disbelief in the official story despite decades of government insistence suggests the evidence supports alternative theories.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Continued public skepticism indicates the official narrative fails to adequately explain the available evidence.",
        incorrect_feedback: "The House: Incorrect. Enduring conspiracy theories suggest the government's explanations are insufficient to convince informed citizens."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The 2025 revelations about intelligence agency capabilities and deceptions validate conspiracy theorists' claims about government cover-up potential.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Documented evidence of agency deception operations proves conspiracy theorists' concerns about cover-up capabilities were justified.",
        incorrect_feedback: "The House: Incorrect. Recent revelations confirm that intelligence agencies possessed the means and willingness to manipulate evidence and public perception."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The combination of motive, means, and opportunity for multiple parties to conspire against Kennedy makes conspiracy more plausible than lone gunman theories.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. When multiple powerful groups had reasons to remove Kennedy and the capability to do so, conspiracy becomes more logical than coincidental lone action.",
        incorrect_feedback: "The House: Incorrect. The confluence of motives and capabilities among various powerful interests supports coordinated action rather than individual initiative."
    },

    // --- Multiple Choice Questions ---
    {
        type: "mc_question",
        question: "What was Jack Ruby's means of entry into the Dallas Police building?",
        options: {
            A: "Teleportation",
            B: "He walked down the ramp leading from Main Street to the basement of the police department.",
            C: "He had an accomplice open the back door",
            D: "He came in with a mob of reporters which the Dallas Police did not screen"
        },
        correct_answer_key: "B",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House observes a critical entry point. How did this individual gain access to the heart of the investigation?"
    },
    {
        type: "mc_question",
        question: "What was the evidence that Ruby was assisted by members of Dallas Police Department in the Oswald killing?",
        options: {
            A: "The signed confession of Jack Ruby",
            B: "Pictures of the summer of 1963 meeting between Ruby, Dallas Police Chief Jesse Curry, and Mafia bosses Carlos Marcello and Santo Trafficante",
            C: "Pictures of the November 21 1963 meeting between Jack Ruby and Dallas Police Chief Jesse Curry",
            D: "There is no evidence to support the rumor that Ruby may have been assisted by any members of the Dallas Police Department in the killing of Oswald"
        },
        correct_answer_key: "D",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House examines allegations of complicity. Is every shadow evidence of a deeper plot, or merely the absence of light?"
    },
    {
        type: "mc_question",
        question: "How many eyewitnesses were there to the Tippit shooting?",
        options: {
            A: "None",
            B: "One, but he/she refused to come forward",
            C: "Two, but their testimony conflicted",
            D: "Nine; two eyewitnesses saw the shooting and seven eyewitnesses heard the shots and saw the gunman leave the scene with the revolver in hand. These nine eyewitnesses positively identified Lee Harvey Oswald as the man they saw."
        },
        correct_answer_key: "D",
        value: 20,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House observes the multitude of voices. How many eyes truly witnessed the event, and what truth did they confirm?"
    },
    {
        type: "mc_question",
        question: "How long had Jack Ruby been at Dallas Police Department before he killed Oswald?",
        options: {
            A: "Two and a half hours",
            B: "Long enough to get a coffee and doughnut in the cafeteria",
            C: "25 minutes",
            D: "Four minutes"
        },
        correct_answer_key: "D",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House examines the precise timing of events leading to Oswald's death. How fleeting can destiny be?"
    },
    {
        type: "mc_question",
        question: "What was the relationship between Lee Harvey Oswald and Jack Ruby?",
        options: {
            A: "They were pen pals and fellow members of the Little Orphan Annie Club",
            B: "There was no relationship between Lee Harvey Oswald and Jack Ruby",
            C: "They were casual acquaintances because Oswald frequented Ruby's bar",
            D: "They were both members of the same KGB cell and Oswald had no idea he had become a target of the KGB once he had committed the assassination; when Oswald saw Ruby in the hallway he thought Ruby was there to free him"
        },
        correct_answer_key: "B",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House investigates alleged connections between key figures. Did their paths ever truly cross, or only collide?"
    },
    {
        type: "mc_question",
        question: "Who was the second murder victim of Lee Harvey Oswald on Nov. 22 1963?",
        options: {
            A: "Texas Governor John Connally",
            B: "Dallas Police Patrolman J. D. Tippit",
            C: "Larry Harmon a.k.a. Bozo the Clown",
            D: "Dallas Detective Paul Bentley"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House acknowledges a second life tragically lost on that fateful day. How does this crime shape the narrative of the assassin?"
    },
    {
        type: "mc_question",
        question: "What personal item of Oswald's was found along the path of flight taken by Oswald as he fled from the scene of the Tippit killing?",
        options: {
            A: "Oswald's KGB credentials",
            B: "His autographed picture of Fidel Castro",
            C: "His jacket",
            D: "His Texas Book Depository employee ID"
        },
        correct_answer_key: "C",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House follows the trail of the accused. What clues were left behind in the chaotic aftermath of flight?"
    },
    {
        type: "mc_question",
        question: "Who were Jack Ruby's accomplices in the killing of Lee Harvey Oswald?",
        options: {
            A: "Clifton Carter, LBJ's shady main fundraiser and associate of the sleazy Billie Sol Estes",
            B: "Mac Wallace, LBJ's personal hit man",
            C: "Captain Kangaroo and Mister Greenjeans",
            D: "The Commission found no evidence that Jack Ruby acted with any other person in the killing of Lee Harvey Oswald"
        },
        correct_answer_key: "D",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House investigates the lone actions versus alleged collaboration. Did Ruby act alone, or was he part of a hidden design?"
    },

    // --- NEW Multiple Choice Questions (based on 2024-2025 research) ---
    {
        type: "mc_question",
        question: "According to the 2025 declassified documents, what did the CIA know about Oswald's Mexico City trip?",
        options: {
            A: "Nothing significant was discovered",
            B: "He was under extensive surveillance and met with Soviet and Cuban officials",
            C: "He was working as a CIA asset",
            D: "The trip never actually occurred"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House reveals the extent of pre-assassination surveillance. What did the watchers know, and why didn't they act?"
    },
    {
        type: "mc_question",
        question: "What did Warren 'Butch' Burroughs observe about Oswald's entry time at the Texas Theater?",
        options: {
            A: "He arrived at exactly 1:15 PM",
            B: "He entered between 1:00 and 1:07 PM",
            C: "He was already there when Burroughs arrived",
            D: "He never actually entered the theater"
        },
        correct_answer_key: "B",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House notes precise timing. How do these minutes matter in reconstructing the fugitive's final movements?"
    },
    {
        type: "mc_question",
        question: "What was the primary issue with the ballistics evidence in the Tippit murder according to conspiracy researchers?",
        options: {
            A: "The bullets were too damaged to analyze",
            B: "Winchester and Remington bullets didn't match the cartridge brands found at the scene",
            C: "No bullets were ever recovered",
            D: "The revolver was never found"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House examines forensic inconsistencies. Do mismatched components reveal evidence tampering or multiple shooters?"
    },
    {
        type: "mc_question",
        question: "According to Bernard Haire's account, what did he witness at the Texas Theater?",
        options: {
            A: "Only Oswald being arrested at the front",
            B: "A second arrest at the rear while Oswald was taken from the front",
            C: "No arrests at all",
            D: "Multiple shooters entering the theater"
        },
        correct_answer_key: "B",
        value: 15,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House considers claims of dual arrests. If true, who was the second figure, and why was this concealed?"
    },
    {
        type: "mc_question",
        question: "What did Detective Jim Leavelle say about the Tippit case ballistics?",
        options: {
            A: "They were perfectly clear and conclusive",
            B: "They were frankly 'a mess'",
            C: "They definitively proved Oswald's guilt",
            D: "They were never properly analyzed"
        },
        correct_answer_key: "B",
        value: 15,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House notes official acknowledgment of problematic evidence. What does this admission reveal about case quality?"
    },
    {
        type: "mc_question",
        question: "How many police officers responded to the call at the Texas Theater?",
        options: {
            A: "Three officers",
            B: "Eight officers",
            C: "Fifteen officers",
            D: "Over twenty officers"
        },
        correct_answer_key: "C",
        value: 10,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House observes the massive police response. What does this coordination reveal about law enforcement effectiveness?"
    },
    {
        type: "mc_question",
        question: "What films were playing at the Texas Theater when Oswald was arrested?",
        options: {
            A: "Gone with the Wind and Casablanca",
            B: "Cry of Battle and War is Hell",
            C: "Dr. No and Lawrence of Arabia",
            D: "The Longest Day and The Manchurian Candidate"
        },
        correct_answer_key: "B",
        value: 10,
        stance: "neutral",
        is_axiomatic_lg: false,
        is_axiomatic_ct: false,
        house_commentary: "The House notes the ironic programming. War films providing backdrop to the capture of an alleged assassin."
    },
    {
        type: "mc_question",
        question: "According to the HSCA, what was their conclusion about the Kennedy assassination?",
        options: {
            A: "Oswald definitely acted alone",
            B: "President Kennedy was probably assassinated as a result of a conspiracy",
            C: "The evidence was too limited to reach any conclusion",
            D: "Ruby was the real assassin"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House acknowledges the official finding of probable conspiracy. How does this contradict the Warren Commission's conclusions?"
    },

    // --- Video Content ---
    {
        type: "video",
        title: "Jack Ruby Kills Lee Harvey Oswald - Live TV Coverage",
        url: "https://www.history.com/videos/jack-ruby-kills-lee-harvey-oswald",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House examines the moment that silenced the accused. Consider the implications of this act captured on live television."
    },
    {
        type: "video",
        title: "FRONTLINE: Who Was Lee Harvey Oswald?",
        url: "https://www.pbs.org/video/frontline-who-was-lee-harvey-oswald/",
        value: 15,
        stance: "neutral",
        is_axiomatic_lg: false,
        is_axiomatic_ct: false,
        house_commentary: "The House investigates the enigmatic figure at the center of the assassination. What shaped this man?"
    },
    {
        type: "video",
        title: "Living History with Paul Bentley - Texas Theater Arrest",
        url: "https://www.youtube.com/watch?v=Q5zz7dHrJKA",
        value: 10,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House witnesses testimony from the detective who helped arrest Oswald. What details emerge from that crucial moment?"
    },
    {
        type: "video",
        title: "The Tippit Murder: Key Evidence Analysis",
        url: "https://www.youtube.com/watch?v=4BUDwj_mXKE",
        value: 15,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House examines the second crime of November 22nd. How does this tragedy illuminate the truth?"
    },
    {
        type: "video",
        title: "Jack Ruby's Mob Connections Investigated",
        url: "https://www.youtube.com/watch?v=vgHhlPWBujU",
        value: 15,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House investigates the nightclub owner's shadowy past. What hidden alliances shaped the events?"
    },
    {
        type: "video",
        title: "JFK Declassified: Tracking Oswald's Escape Route",
        url: "https://www.youtube.com/watch?v=mvhAUdYKGoo",
        value: 10,
        stance: "neutral",
        is_axiomatic_lg: false,
        is_axiomatic_ct: false,
        house_commentary: "The House chronicles the final movements of the accused. What pattern emerges from the chaos?"
    },
    {
        type: "video",
        title: "Texas Theater: The Final Capture",
        url: "https://www.youtube.com/watch?v=CZnkMf2vJ1A",
        value: 10,
        stance: "lone_gunman",
        is_axiomatic_lg: true,
        is_axiomatic_ct: false,
        house_commentary: "The House witnesses the final capture. What does the manner of arrest reveal about the accused?"
    },
    {
        type: "video",
        title: "The Patsy Defense: Oswald's Claims Examined",
        url: "https://www.youtube.com/watch?v=W6naJ08Tskk",
        value: 15,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House considers the claim of victimhood. Was the accused manipulated by unseen forces?"
    },
    {
        type: "video",
        title: "2025 JFK Files: New Revelations About CIA Surveillance",
        url: "https://www.youtube.com/watch?v=newrevelations2025",
        value: 20,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House examines recently declassified evidence. What did intelligence agencies know, and when did they know it?"
    },
    {
        type: "video",
        title: "The Ballistics Controversy: Tippit Murder Evidence",
        url: "https://www.youtube.com/watch?v=ballisticscontroversy",
        value: 15,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House investigates forensic inconsistencies. Do mismatched bullets tell a different story?"
    },
    {
        type: "video",
        title: "Bernard Haire Interview: Two Arrests at Texas Theater?",
        url: "https://www.youtube.com/watch?v=bernardhaire",
        value: 15,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House hears claims of dual arrests. What secrets might the theater have concealed?"
    },
    {
        type: "video",
        title: "HSCA Conclusion: Probable Conspiracy",
        url: "https://www.youtube.com/watch?v=hscaconspiracy",
        value: 20,
        stance: "conspiracy_theory",
        is_axiomatic_lg: false,
        is_axiomatic_ct: true,
        house_commentary: "The House reviews official findings of probable conspiracy. How do government investigators contradict themselves?"
    }
];
