// Add this at the very beginning of your aftermath_content.js file
function getLoopContent() {
    return aftermathContent;
}
// This file contains the content pool for the "Aftermath" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const aftermathContent = [
    // --- True/False Questions: Lone Gunman Perspective (35 questions) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Vincent Bugliosi's Reclaiming History is a monumental work spanning 1,632 pages.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Its sheer volume reflects the exhaustive nature of Bugliosi's defense of the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. The scale of this work is a key detail in understanding its authoritative stance."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi spent over two decades researching and writing Reclaiming History.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This extensive dedication underscores the depth of his commitment to the official narrative.",
        incorrect_feedback: "The House: Incorrect. The duration of Bugliosi's research highlights his meticulous approach to the assassination."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi devoted 80 to 100 hours per week for seven years to the book.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Such intense dedication reflects the formidable effort to reassert the lone gunman conclusion.",
        incorrect_feedback: "The House: Incorrect. The sheer volume of work involved in 'Reclaiming History' is a notable detail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi's central aim is to establish Oswald's guilt 'beyond all reasonable doubt.'",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This legal standard of proof underscores Bugliosi's methodical approach to proving Oswald's sole culpability.",
        incorrect_feedback: "The House: Incorrect. Bugliosi's ambitious goal for his work aligns with a legal, rather than purely historical, argument."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi argues that no 'top-level conspirators would ever employ someone as unstable and unreliable as Oswald.'",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This argument dismisses the plausibility of Oswald as a conspiratorial agent, strengthening the lone gunman theory.",
        incorrect_feedback: "The House: Incorrect. Oswald's known personality traits are used to argue against his involvement in a complex plot."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The National Academy of Sciences concluded the HSCA's acoustic evidence was 'hooey' and some sounds occurred a minute after the assassination.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This refutation of acoustic evidence by a scientific body further strengthens the lone gunman argument.",
        incorrect_feedback: "The House: Incorrect. Scientific panel reviews often play a role in validating or refuting key pieces of evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: No major revelations have been found in declassified document dumps in the 60 years since the President was killed.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite widespread anticipation, declassified documents have not yielded definitive evidence of a major conspiracy, supporting the lone gunman view.",
        incorrect_feedback: "The House: Incorrect. The outcome of declassification efforts is a significant point in the ongoing debate."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi questions why conspirators would provide a hitman with a 'twelve-dollar rifle' or allow him to escape on buses and cabs.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This highlights perceived inconsistencies in conspiracy narratives regarding Oswald's supposed handlers.",
        incorrect_feedback: "The House: Incorrect. Bugliosi's critiques often target the internal logic of conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The sheer number of people purportedly involved in a cover-up makes it 'almost impossible' to keep anything 'earth-shattering under wraps.'",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This 'difficulty of conspiracy' argument is a core tenet of Bugliosi's case against large-scale plots.",
        incorrect_feedback: "The House: Incorrect. The logistical challenges of maintaining secrecy in large conspiracies are often debated."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi points to historical precedents like Watergate as evidence that major government conspiracies eventually come to light.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This argument suggests that truly vast conspiracies are difficult to conceal indefinitely, supporting the lone gunman view.",
        incorrect_feedback: "The House: Incorrect. Historical parallels are often used to argue for or against the feasibility of complex, long-term cover-ups."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi addresses the 'fallacy whereby people think great events must have great causes.'",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This logical fallacy is presented as a fundamental driver of conspiracy belief, leading people to reject simple explanations for monumental events.",
        incorrect_feedback: "The House: Incorrect. The 'great event, great cause' fallacy is a key psychological concept in Bugliosi's critique of conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: This fallacy leads to a reluctance to accept that a 'miserable nobody like Oswald' could be solely responsible.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This concept highlights the human desire for a perceived 'just world' where a great tragedy must have a great, proportional cause.",
        incorrect_feedback: "The House: Incorrect. The idea of a 'nonentity' being responsible for a monumental event challenges common human psychological frameworks."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi systematically dismantles 'every one of the conspiracy theories.'",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi's methodical approach to debunking alternative theories is a hallmark of his writing.",
        incorrect_feedback: "The House: Incorrect. The systematic refutation of conspiracy theories is a primary goal of Bugliosi's work."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi's work provides a 'legally sound verdict' on the assassination.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This suggests Bugliosi aimed to provide a definitive legal judgment on the assassination.",
        incorrect_feedback: "The House: Incorrect. Bugliosi's ambition to provide a legally robust conclusion is a defining characteristic of his work."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The first half of Reclaiming History is described as 'informative, impeccably sourced, and delivered in a clear, straightforward manner.'",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This positive assessment highlights the scholarly rigor Bugliosi applied to presenting the factual case.",
        incorrect_feedback: "The House: Incorrect. The perceived quality and presentation of Bugliosi's arguments are central to his defense of the official narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi's work is considered the 'most exhaustive of the countless narratives that have been written about that fateful day in Dallas.'",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Its unmatched depth of research is a key attribute cited by its proponents.",
        incorrect_feedback: "The House: Incorrect. The sheer volume and detail of Bugliosi's work distinguish it among assassination narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In the mock trial, Bugliosi acted as the prosecutor and obtained a 'guilty' verdict against Oswald.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This successful mock prosecution reinforces the strength of his case against Oswald.",
        incorrect_feedback: "The House: Incorrect. The outcome of the mock trial is a significant point in Bugliosi's personal narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi's work is seen as providing 'irresistible logic, command of the evidence, and ability to draw startling inferences.'",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This positive assessment reflects the perceived strength of his arguments for the lone gunman conclusion.",
        incorrect_feedback: "The House: Incorrect. The persuasive power of Bugliosi's arguments is a key aspect of his work's reception."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The persistence of conspiracy theories is partly driven by financial incentives for those who promote them.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi asserts that financial gain is a motive for some conspiracy theorists, muddying the waters of truth.",
        incorrect_feedback: "The House: Incorrect. The motivations behind the promotion of conspiracy theories are often scrutinized."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi suggests conspiracy theorizing offers a form of closure to an otherwise inexplicable tragedy.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This psychological perspective posits that conspiracy theories can fulfill a human need for meaning in chaos.",
        incorrect_feedback: "The House: Incorrect. The psychological appeal of conspiracy theories is sometimes analyzed as a coping mechanism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi argues that the persistence of conspiracy theories is partly due to people projecting current sinister motives back onto the Kennedy years.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This psychological explanation suggests a modern bias influencing historical interpretation.",
        incorrect_feedback: "The House: Incorrect. Bugliosi explores the psychological aspects of conspiracy belief in his work."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's findings have been repeatedly validated by subsequent serious investigations.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite criticism, the core conclusions about Oswald acting alone have withstood decades of scrutiny.",
        incorrect_feedback: "The House: Incorrect. The Warren Commission's fundamental findings remain the official conclusion after extensive review."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Modern forensic science has supported rather than undermined the single bullet theory.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Advanced ballistics and computer modeling have strengthened rather than weakened the official trajectory analysis.",
        incorrect_feedback: "The House: Incorrect. Scientific advances have generally corroborated the Warren Commission's ballistic conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Zapruder film, when properly analyzed, supports the official timeline of events.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Frame-by-frame analysis confirms the timing and sequence described in the Warren Report.",
        incorrect_feedback: "The House: Incorrect. The most famous piece of assassination evidence actually supports the official narrative when properly examined."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Eyewitness testimony from Dealey Plaza overwhelmingly points to shots from the sixth floor of the Texas School Book Depository.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The majority of witnesses who could identify a source pointed to the Depository, not the grassy knoll.",
        incorrect_feedback: "The House: Incorrect. Witness testimony, while varied, predominantly supports the official location of the shooter."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's palm print was found on the rifle discovered on the sixth floor.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This physical evidence directly links Oswald to the murder weapon found at the scene.",
        incorrect_feedback: "The House: Incorrect. Forensic evidence provides a clear connection between the accused and the weapon."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The rifle found in the Depository was traced to a mail-order purchase by Oswald using the alias 'A. Hidell.'",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The paper trail clearly establishes Oswald's ownership of the murder weapon through documented purchases.",
        incorrect_feedback: "The House: Incorrect. The chain of ownership from purchase to crime scene is well-documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's behavior immediately after the assassination - fleeing the scene, killing Officer Tippit, resisting arrest - is consistent with guilt.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His actions in the aftermath are those of a guilty man attempting to escape justice, not an innocent patsy.",
        incorrect_feedback: "The House: Incorrect. Oswald's post-assassination conduct strongly suggests consciousness of guilt."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: No credible evidence has ever emerged linking any other individual or organization to the actual shooting.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Despite decades of investigation and speculation, no concrete evidence of co-conspirators has been established.",
        incorrect_feedback: "The House: Incorrect. The absence of evidence for additional shooters or conspirators remains a fundamental fact."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Conspiracy theories often rely on speculation and innuendo rather than hard evidence.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Many alternative theories depend on connecting dots that may not actually be connected, rather than proven facts.",
        incorrect_feedback: "The House: Incorrect. The distinction between speculation and evidence is crucial in evaluating assassination theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The medical evidence from President Kennedy's autopsy supports the shots coming from behind and above.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The wound patterns and trajectories documented in the autopsy are consistent with shots from the sixth floor of the Depository.",
        incorrect_feedback: "The House: Incorrect. The forensic medical evidence provides crucial support for the official version of events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald had both the means and opportunity to commit the assassination from his position in the Depository.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. His workplace location provided an ideal vantage point, and he possessed the necessary skills and weapon.",
        incorrect_feedback: "The House: Incorrect. The convergence of opportunity, means, and motive in Oswald's case is a key element of the official conclusion."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The public's fascination with conspiracy theories reflects a natural human tendency to seek complex explanations for traumatic events.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The psychological appeal of conspiracy theories often overshadows the sometimes mundane reality of tragic events.",
        incorrect_feedback: "The House: Incorrect. Understanding the psychology behind conspiracy belief is crucial to evaluating their merit."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The burden of proof should rest on those claiming a conspiracy, not on defenders of the official account.",
        correct_answer: true,
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Extraordinary claims require extraordinary evidence, and the official investigation represents the baseline of established fact.",
        incorrect_feedback: "The House: Incorrect. The principle of burden of proof is fundamental to evaluating competing theories about historical events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The reliability of the HSCA's acoustic evidence and its conclusions came under broad criticism after its report.",
        correct_answer: true,
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The later debunking of this key evidence by scientific panels undermined the HSCA's conspiracy conclusion.",
        incorrect_feedback: "The House: Incorrect. The subsequent scrutiny of the HSCA's acoustic evidence is crucial for understanding the debate."
    },

    // --- True/False Questions: Conspiracy Theory Perspective (35 questions) ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Public opinion polls consistently indicate that a significant majority of Americans doubt the lone gunman theory.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This widespread public doubt is a major factor in the persistence of conspiracy theories.",
        incorrect_feedback: "The House: Incorrect. Public sentiment is a significant sociological aspect of the assassination's legacy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The murder of Oswald before he could stand trial has led to a myriad of conspiracy theories.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald's silencing is viewed as a pivotal event that prevented a full legal inquiry, fueling suspicion.",
        incorrect_feedback: "The House: Incorrect. Oswald's death is a central event in the proliferation of conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee on Assassinations (HSCA) in 1979 concluded there was a 'high probability' that two gunmen fired at President Kennedy.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This official conclusion provides significant backing for the multiple-shooter theory.",
        incorrect_feedback: "The House: Incorrect. The HSCA's findings introduced a significant challenge to the lone gunman narrative."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA and FBI's reluctance to release information has fueled conspiracy theories.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Perceived secrecy from government agencies often creates fertile ground for suspicion and speculation.",
        incorrect_feedback: "The House: Incorrect. The withholding of information by intelligence agencies is a significant factor in public distrust."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Thousands of pages of documents remain classified, and it's unclear why, which 'feeds the conspiracies even more.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The continued secrecy surrounding remaining documents is a major source of fuel for conspiracy theories, regardless of content.",
        incorrect_feedback: "The House: Incorrect. The lingering classified information is a potent symbol for those who suspect a cover-up."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oliver Stone's controversial 1991 film JFK sparked a new round of conspiracy speculation.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The film's impact on public perception and renewed interest in conspiracy theories is undeniable.",
        incorrect_feedback: "The House: Incorrect. The cultural influence of films like 'JFK' is significant in the assassination's legacy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Stone's film suggested the CIA wanted Kennedy dead because he planned to de-escalate the conflict in Vietnam.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This specific alleged motive is a central claim of Stone's film and a prominent theory.",
        incorrect_feedback: "The House: Incorrect. The motives attributed to intelligence agencies in popular culture often reflect widespread theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission's legacy has been marked by skepticism towards official narratives.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Commission's report did not ultimately quell public distrust, and its legacy is one of lingering doubt.",
        incorrect_feedback: "The House: Incorrect. The long-term impact of the Warren Report on public trust is a significant historical observation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The belief in a conspiracy is 'so well entrenched now, in all likelihood it will stay that way forever.'",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This reflects the deep societal impact and enduring nature of the conspiracy narrative, suggesting the truth may never fully emerge for many Americans.",
        incorrect_feedback: "The House: Incorrect. The longevity and pervasiveness of conspiracy belief are significant sociological phenomena."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The HSCA stated that the Warren Commission had 'failed to investigate adequately the possibility of a conspiracy.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This official criticism of the Warren Commission provides significant backing for critics' claims.",
        incorrect_feedback: "The House: Incorrect. The HSCA's assessment of the Warren Commission's methodology is a key point in the debate."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Some researchers allege that various items of physical evidence have been tampered with, including the 'single bullet.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Allegations of evidence tampering are central to theories of a deliberate cover-up.",
        incorrect_feedback: "The House: Incorrect. The integrity of physical evidence is a fundamental point of contention for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Robert F. Kennedy Jr. believes his uncle was killed in a conspiracy, endorsing a book that claims Kennedy was killed by his own security apparatus.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This high-profile endorsement of a conspiracy theory from within the Kennedy family itself lends significant weight for many.",
        incorrect_feedback: "The House: Incorrect. The beliefs of public figures, especially family members, are often influential in shaping conspiracy narratives."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Critics argue Bugliosi is 'equally guilty of cooking the facts to make his case.'",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This counter-accusation directly challenges the objectivity and integrity of Bugliosi's own exhaustive work.",
        incorrect_feedback: "The House: Incorrect. Accusations of bias or selective evidence use are common in historical debates."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Bugliosi devotes twice as many pages to critiquing Oliver Stone's movie JFK as to organized crime, identified by HSCA as likely conspirators.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue Bugliosi's focus on a film over a potentially real conspiratorial element misdirects his extensive effort.",
        incorrect_feedback: "The House: Incorrect. The allocation of investigative focus is often a point of scrutiny for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission failed to adequately investigate Oswald's possible connections to intelligence agencies.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue the Commission avoided probing potential intelligence connections that might have revealed uncomfortable truths.",
        incorrect_feedback: "The House: Incorrect. The scope and depth of the Warren Commission's investigation remains a point of significant controversy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple witnesses reported hearing shots from the grassy knoll area, not just the book depository.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Eyewitness accounts of shots from multiple directions challenge the single shooter narrative.",
        incorrect_feedback: "The House: Incorrect. Witness testimony about shot origins remains a contested element of the evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The 'magic bullet' theory requires an implausibly tortuous path to account for all of President Kennedy's and Governor Connally's wounds.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue the single bullet theory defies physics and common sense to maintain the three-shot scenario.",
        incorrect_feedback: "The House: Incorrect. The trajectory and condition of Commission Exhibit 399 remains highly controversial among researchers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Kennedy's head movement in the Zapruder film appears to show him being struck from the front, not the back.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The violent backward head snap seen in frame 313 suggests a shot from the front, contradicting the official narrative.",
        incorrect_feedback: "The House: Incorrect. The Zapruder film's most dramatic moment continues to fuel debate about shot directions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Several key witnesses died under suspicious circumstances in the years following the assassination.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The pattern of deaths among witnesses and those connected to the case has fueled suspicions of silencing operations.",
        incorrect_feedback: "The House: Incorrect. The mortality rate among assassination witnesses has been a subject of statistical analysis and concern."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Jack Ruby had extensive connections to organized crime figures, contradicting claims he acted alone.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Ruby's documented ties to the underworld suggest his killing of Oswald was not a spontaneous act of grief.",
        incorrect_feedback: "The House: Incorrect. Ruby's background and associations remain a crucial element in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The original autopsy photographs and X-rays have never been made fully available to independent researchers.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The restricted access to crucial medical evidence has hindered independent verification of official conclusions.",
        incorrect_feedback: "The House: Incorrect. The handling and availability of autopsy materials remains controversial among researchers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Lee Harvey Oswald proclaimed his innocence and claimed to be a 'patsy' before his death.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald's public declarations of innocence and claims of being framed are central to conspiracy narratives.",
        incorrect_feedback: "The House: Incorrect. Oswald's final statements continue to be analyzed for insight into his role and knowledge."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission failed to interview several key witnesses who could have provided crucial testimony.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics point to numerous potential witnesses who were never contacted or properly interviewed by the Commission.",
        incorrect_feedback: "The House: Incorrect. The thoroughness of the Warren Commission's witness interviews remains a point of criticism."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Parkland Hospital doctors initially described President Kennedy's throat wound as an entrance wound, not an exit wound.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The initial medical assessment contradicted the later official conclusion about the wound's nature and direction.",
        incorrect_feedback: "The House: Incorrect. The discrepancy between initial and final medical conclusions remains significant for critics."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The timing of the shots according to the Warren Commission allows insufficient time for a single shooter to fire accurately.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue the compressed timeline makes accurate shooting by one person with a bolt-action rifle nearly impossible.",
        incorrect_feedback: "The House: Incorrect. The shooting sequence timeline remains a fundamental challenge to the lone gunman theory."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald's alleged shooting of Officer Tippit has been questioned due to ballistic inconsistencies.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Forensic questions about the bullets and witness testimony have raised doubts about this crucial link in the official case.",
        incorrect_feedback: "The House: Incorrect. The Tippit murder evidence has been scrutinized and challenged by various researchers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The chain of custody for key pieces of evidence, including bullets and bullet fragments, has been questioned.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Gaps and irregularities in evidence handling have raised questions about tampering or substitution.",
        incorrect_feedback: "The House: Incorrect. Proper chain of custody is crucial for evidence integrity, and violations undermine official conclusions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Several police officers and officials reported finding additional bullets and fragments that don't appear in the official evidence.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Reports of 'missing' evidence suggest either poor record-keeping or deliberate suppression of inconvenient findings.",
        incorrect_feedback: "The House: Incorrect. Discrepancies in the evidence inventory remain a source of suspicion for conspiracy researchers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA's MKULTRA mind control program was operational during the time of the assassination.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The existence of this program, later revealed, demonstrates the CIA's capability for extraordinary covert operations.",
        incorrect_feedback: "The House: Incorrect. Documented CIA programs of the era provide context for theories about the agency's potential involvement."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: President Kennedy had made enemies within the military-industrial complex due to his policies on Vietnam and nuclear testing.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Kennedy's policy positions created powerful adversaries who had both motive and means for elimination.",
        incorrect_feedback: "The House: Incorrect. The political context of Kennedy's presidency provides crucial background for understanding potential conspiracies."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The motorcade route was changed at the last minute, creating the opportunity for assassination at Dealey Plaza.",
        correct_answer: true,
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The route change, while officially for logistical reasons, created the perfect ambush scenario that conspiracy theorists find suspicious.",
        incorrect_feedback: "The House: Incorrect. The timing and circumstances of the route change remain a point of investigation for researchers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Secret Service protocols were violated in multiple ways during the Dallas trip, reducing Kennedy's protection.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The departure from standard security procedures enabled the assassination and raises questions about whether this was deliberate.",
        incorrect_feedback: "The House: Incorrect. Security failures, whether through incompetence or design, were crucial to the assassination's success."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee concluded that organized crime had the means, motive, and opportunity to assassinate President Kennedy.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This official finding legitimized theories about Mafia involvement in the assassination plot.",
        incorrect_feedback: "The House: Incorrect. The HSCA's conclusions about organized crime provide official support for conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Key figures in anti-Castro Cuban exile groups had both the skills and motivation to participate in an assassination plot.",
        correct_answer: true,
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. These groups, trained by the CIA and embittered by the Bay of Pigs, possessed the means and motive for such an operation.",
        incorrect_feedback: "The House: Incorrect. The Cuban exile community's capabilities and grievances make them credible suspects in conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The destruction of potentially crucial evidence, including Oswald's note to the FBI, suggests a cover-up.",
        correct_answer: true,
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The deliberate destruction of evidence that might have shed light on Oswald's activities is deeply suspicious.",
        incorrect_feedback: "The House: Incorrect. Evidence destruction, particularly when it might contradict official narratives, is a hallmark of cover-up operations."
    },

    // --- Multiple Choice Questions (15 questions) ---
    {
        type: "mc_question",
        question: "Why did Mafia boss Carlos Marcello allegedly organize the assassination of Kennedy?",
        options: {
            A: "The Mafia was angry at both John F. Kennedy and Robert Kennedy for their attempts to destroy organized crime.",
            B: "To settle a bet with fellow Mob boss Santos Trafficante.",
            C: "To placate Teamster boss Jimmy Hoffa who wanted both Kennedy brothers dead.",
            D: "Marcello had nothing to do with the assassination. All claims regarding Mafia involvement are baseless conspiracy theories."
        },
        correct_answer_key: "A",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This motive is central to theories implicating the Mafia in the assassination, driven by alleged retaliation against the Kennedy administration's crackdown on organized crime.",
        incorrect_feedback: "The House: Incorrect. The alleged motives for Mafia involvement center on retaliation against the Kennedy administration's aggressive pursuit of organized crime."
    },
    {
        type: "mc_question",
        question: "What prescient comment did President Kennedy make on the day of the assassination to his appointment secretary Kenneth O'Donnell?",
        options: {
            A: "That they had the best ribs in America in Texas",
            B: "That the Redskins were going to beat the Cowboys this year",
            C: "That the Texas women were really attractive",
            D: "That 'if anybody really wanted to shoot the President of the United States, it was not a very difficult job- all one had to do was get a high building somewhere with a telescopic rifle, and there was nothing anybody could do to defend against such an attempt.'"
        },
        correct_answer_key: "D",
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. This chilling premonition suggests the President was aware of the inherent vulnerability of his position - supporting the idea that the assassination was tragically simple, not requiring elaborate conspiracy.",
        incorrect_feedback: "The House: Incorrect. Kennedy's prescient observation about presidential vulnerability is a haunting detail from that fateful day."
    },
    {
        type: "mc_question",
        question: "What was the incident that angered both Fidel Castro AND the anti-Castro Cuban exiles?",
        options: {
            A: "Miami being passed over as an MLB expansion franchise in 1962",
            B: "Jackie Kennedy's disparaging comments about Cuban cuisine",
            C: "The Bay of Pigs invasion",
            D: "The way JFK parted his hair"
        },
        correct_answer_key: "C",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The Bay of Pigs invasion created enemies on both sides - Castro felt betrayed by the attack, while anti-Castro forces felt betrayed by Kennedy's failure to provide adequate support.",
        incorrect_feedback: "The House: Incorrect. The Bay of Pigs invasion is cited as a pivotal event that created potential motives for multiple groups in conspiracy theories."
    },
    {
        type: "mc_question",
        question: "According to Vincent Bugliosi, what is the primary reason people believe in JFK assassination conspiracy theories?",
        options: {
            A: "The evidence clearly supports multiple shooters",
            B: "The government has been deliberately hiding the truth",
            C: "People cannot accept that a 'miserable nobody' like Oswald could kill a president",
            D: "The Warren Commission was incompetent and corrupt"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi argues this psychological need for proportionality - that great events must have great causes - drives conspiracy belief.",
        incorrect_feedback: "The House: Incorrect. The 'great events must have great causes' fallacy is central to Bugliosi's explanation of conspiracy thinking."
    },
    {
        type: "mc_question",
        question: "What major conclusion did the House Select Committee on Assassinations reach that contradicted the Warren Commission?",
        options: {
            A: "Oswald was completely innocent",
            B: "There was probably a conspiracy involving a second gunman",
            C: "The CIA definitely killed Kennedy",
            D: "Jack Ruby was part of a Mafia plot"
        },
        correct_answer_key: "B",
        value: 20, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA's acoustic evidence led them to conclude there was a high probability of conspiracy, directly challenging the Warren Commission's lone gunman finding.",
        incorrect_feedback: "The House: Incorrect. The HSCA's conspiracy conclusion, though later disputed, was their most significant departure from the Warren Report."
    },
    {
        type: "mc_question",
        question: "Why do conspiracy theorists find Jack Ruby's killing of Oswald suspicious?",
        options: {
            A: "Ruby had no connection to organized crime",
            B: "Ruby killed Oswald to silence him before he could reveal the conspiracy",
            C: "Ruby was known to be mentally unstable",
            D: "Ruby had a documented history of patriotic acts"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The timing and effect of Ruby's act - preventing Oswald from standing trial and potentially revealing co-conspirators - is seen as highly convenient for those wanting to cover up the truth.",
        incorrect_feedback: "The House: Incorrect. The silencing aspect of Ruby's act is central to conspiracy theories about a cover-up."
    },
    {
        type: "mc_question",
        question: "What does the 'magic bullet' theory propose?",
        options: {
            A: "That Oswald used special ammunition",
            B: "That one bullet caused seven wounds in two men",
            C: "That bullets can change direction in mid-air",
            D: "That some bullets were never recovered"
        },
        correct_answer_key: "B",
        value: 15, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Commission Exhibit 399, the 'pristine bullet,' is alleged to have caused multiple wounds in both Kennedy and Connally.",
        incorrect_feedback: "The House: Incorrect. The single bullet theory is crucial to maintaining the three-shot scenario with one shooter."
    },
    {
        type: "mc_question",
        question: "What aspect of the Zapruder film do conspiracy theorists find most compelling?",
        options: {
            A: "It shows Oswald in the window",
            B: "Kennedy's head snaps backward, suggesting a frontal shot",
            C: "It proves there were multiple shooters",
            D: "It shows Secret Service agents acting suspiciously"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The dramatic backward head movement in the fatal shot appears to contradict the official conclusion of shots from behind.",
        incorrect_feedback: "The House: Incorrect. Frame 313 and its aftermath remain the most cited visual evidence for conspiracy theorists."
    },
    {
        type: "mc_question",
        question: "How does Bugliosi respond to claims about the 'magic bullet'?",
        options: {
            A: "He admits it's impossible",
            B: "He argues the trajectory is actually quite straightforward when proper positioning is considered",
            C: "He claims the bullet was planted",
            D: "He ignores the issue completely"
        },
        correct_answer_key: "B",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi uses computer modeling and proper positioning to demonstrate the single bullet theory is feasible, not magical.",
        incorrect_feedback: "The House: Incorrect. Bugliosi directly addresses this central criticism with detailed ballistic analysis."
    },
    {
        type: "mc_question",
        question: "What do conspiracy theorists say about the number of shots fired?",
        options: {
            A: "Only two shots were fired",
            B: "More than three shots were fired, indicating multiple shooters",
            C: "Exactly three shots were fired",
            D: "The number of shots is irrelevant"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Many witnesses reported hearing more than three shots, and the HSCA initially concluded four shots were fired based on acoustic evidence.",
        incorrect_feedback: "The House: Incorrect. The shot count is crucial to determining whether multiple shooters were involved."
    },
    {
        type: "mc_question",
        question: "Why was the Warren Commission's investigation time frame significant?",
        options: {
            A: "They took too long to complete their work",
            B: "They were given only 10 months to investigate",
            C: "They had unlimited time and resources",
            D: "The time frame was never specified"
        },
        correct_answer_key: "B",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Critics argue the compressed timeline prevented thorough investigation of conspiracy possibilities.",
        incorrect_feedback: "The House: Incorrect. The pressure to complete the investigation quickly is seen as compromising its thoroughness."
    },
    {
        type: "mc_question",
        question: "What was Lee Harvey Oswald's final public statement?",
        options: {
            A: "I killed the President",
            B: "I'm just a patsy",
            C: "I acted alone",
            D: "I regret nothing"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Oswald's claim to be a 'patsy' is central to conspiracy theories suggesting he was framed.",
        incorrect_feedback: "The House: Incorrect. Oswald's declaration of being set up remains a key element in conspiracy narratives."
    },
    {
        type: "mc_question",
        question: "How do defenders of the Warren Commission explain apparent witness contradictions?",
        options: {
            A: "All witnesses are lying",
            B: "Witnesses were intimidated into silence",
            C: "Trauma and chaos naturally lead to conflicting accounts",
            D: "The witnesses were all CIA plants"
        },
        correct_answer_key: "C",
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Official defenders argue that eyewitness unreliability in traumatic situations is well-documented and expected.",
        incorrect_feedback: "The House: Incorrect. The psychology of eyewitness testimony in crisis situations is often cited to explain discrepancies."
    },
    {
        type: "mc_question",
        question: "What is the significance of the pristine condition of the 'magic bullet'?",
        options: {
            A: "It proves the quality of 1960s ammunition",
            B: "Conspiracy theorists argue it's too undamaged to have caused so many wounds",
            C: "It shows Oswald was a good shot",
            D: "It's irrelevant to the case"
        },
        correct_answer_key: "B",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The nearly pristine condition of CE 399 seems inconsistent with causing multiple wounds and bone damage.",
        incorrect_feedback: "The House: Incorrect. The bullet's condition is a major point of contention in the single bullet theory debate."
    },
    {
        type: "mc_question",
        question: "According to Bugliosi, what ultimately proves Oswald's guilt?",
        options: {
            A: "His confession",
            B: "Eyewitness testimony",
            C: "The overwhelming convergence of evidence",
            D: "His Communist beliefs"
        },
        correct_answer_key: "C",
        value: 15, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Bugliosi argues that while individual pieces of evidence might be questioned, their convergence creates an overwhelming case.",
        incorrect_feedback: "The House: Incorrect. The cumulative weight of evidence is central to Bugliosi's argument for Oswald's sole guilt."
    },

    // --- Video Content (8 videos) ---
    {
        type: "video",
        title: "JFK CONSPIRACY: Government Plot? (The Kennedy Files)",
        url: "https://www.youtube.com/watch?v=w9RvCrc8Jto",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "video",
        title: "Cold Case JFK (NOVA)",
        url: "https://www.youtube.com/watch?v=QfL2NfkSQkU",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false
    },
    {
        type: "video",
        title: "JFK Files: House Task Force on Declassification",
        url: "https://www.youtube.com/watch?v=EqH1fiq7Qv0",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false
    },
    {
        type: "video",
        title: "The Assassination of JFK | BBC Select",
        url: "https://www.youtube.com/watch?v=9k5LmCi1iWw",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false
    },
    {
        type: "video",
        title: "JFK Files Hearing: Oliver Stone's Testimony",
        url: "https://www.youtube.com/watch?v=PqF-m3dVMMM",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "video",
        title: "Witnesses Remember JFK Assassination 60 Years Later",
        url: "https://www.youtube.com/watch?v=ehaItIR7ReA",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false
    },
    {
        type: "video",
        title: "JFK Secret Service Agent Reflects on Assassination",
        url: "https://www.youtube.com/watch?v=ioxfGFcw20k",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false
    },
    {
        type: "video",
        title: "Manhunt: The Search for JFK's Killer (Full Episode)",
        url: "https://www.youtube.com/watch?v=6GFiqLzeKJ4",
        value: 10, stance: "neutral", is_axiomatic_lg: false, is_axiomatic_ct: false
    },

    // --- Factoids (7 factoids) ---
    {
        type: "factoid",
        text: "The news of President Kennedy's assassination sent shockwaves across the globe. Initial reports from Dallas were confusing, but the world quickly plunged into grief and uncertainty.",
        value: 5, stance: "neutral", is_axiomatic_lg: true, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Within hours, Lee Harvey Oswald was arrested. His prior defection to the Soviet Union and his connection to the Texas School Book Depository swiftly made him the prime suspect.",
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Just two days later, Oswald was fatally shot by Jack Ruby in the basement of the Dallas Police Headquarters, broadcast live on national television.",
        value: 15, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "The Warren Commission, established by President Lyndon B. Johnson, concluded that Lee Harvey Oswald acted alone in the assassination.",
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    },
    {
        type: "factoid",
        text: "Despite the official report, public skepticism persisted. Polls consistently showed a significant portion of Americans believed in a conspiracy, citing inconsistencies and unanswered questions.",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Public opinion polls consistently indicate that a significant majority of Americans doubt the lone gunman theory. This persistent skepticism fuels the search for alternative explanations. <a href='https://sc.edu/about/offices_and_divisions/research/news_and_pubs/caravel/archive/2019/2019_doubt.php' target='_blank' style='color: var(--color-accent-gold);'>Read more about public opinion on the Warren Report</a>",
        value: 10, stance: "conspiracy_theory", is_axiomatic_lg: false, is_axiomatic_ct: true
    },
    {
        type: "factoid",
        text: "Vincent Bugliosi's 'Reclaiming History' stands as the most comprehensive defense of the Warren Commission's conclusions, attempting to address every conspiracy theory and restore faith in the official narrative of November 22, 1963.",
        value: 10, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false
    }
];
