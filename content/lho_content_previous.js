// This file contains the enhanced content pool for the "Who was LHO?" loop.
// BALANCED VERSION: ~33% false answers, no videos for testing
// It must be loaded BEFORE game_logic.js in your HTML.

function getLoopContent() {
    return lhoContent;
}

const lhoContent = [
    // --- True/False Questions: Lone Gunman Perspective ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Lee Harvey Oswald was born in New Orleans in 1939.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald was born in New Orleans on October 18, 1939.",
        incorrect_feedback: "The House: Incorrect. Historical records confirm he was born in New Orleans in 1939."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald father died two months before Lee was born.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Robert Edward Lee Oswald Sr. died of a heart attack in August 1939.",
        incorrect_feedback: "The House: Incorrect. His father died before Lee birth in October 1939."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was raised primarily by his grandmother.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald was raised by his mother, Marguerite, who moved frequently.",
        incorrect_feedback: "The House: Incorrect. He was raised by his mother Marguerite, not his grandmother."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attended over 10 different schools during his childhood.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Due to his mother frequent moves, Oswald attended numerous schools.",
        incorrect_feedback: "The House: Incorrect. The family mobility resulted in frequent school changes."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was an excellent student who graduated valedictorian.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald was a poor student who dropped out of high school.",
        incorrect_feedback: "The House: Incorrect. Oswald struggled academically and never graduated high school."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald joined the Marines at age 17 in 1956.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Oswald enlisted in the Marine Corps on October 24, 1956.",
        incorrect_feedback: "The House: Incorrect. He joined the Marines in 1956 at age 17."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was trained as a radar operator in the Marines.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He worked as a radar operator at several bases including Atsugi, Japan.",
        incorrect_feedback: "The House: Incorrect. Military records confirm his radar operator training and assignments."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald received two court-martials during his Marine service.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was court-martialed twice for incidents including attacking an officer.",
        incorrect_feedback: "The House: Incorrect. Military records document two court-martial proceedings."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was promoted to sergeant during his Marine service.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was demoted from Private First Class to Private due to disciplinary issues.",
        incorrect_feedback: "The House: Incorrect. Oswald was actually demoted, not promoted, during his service."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald began studying Russian while in the Marines.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Fellow Marines reported he studied Russian and read Russian literature.",
        incorrect_feedback: "The House: Incorrect. Multiple witnesses confirmed his Russian language studies."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald received an honorable discharge from the Marines.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He received an undesirable discharge due to his defection to the USSR.",
        incorrect_feedback: "The House: Incorrect. His discharge was changed to undesirable after his defection."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald defected to the Soviet Union in October 1959.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He arrived in Moscow on October 16, 1959, and renounced his citizenship.",
        incorrect_feedback: "The House: Incorrect. Embassy records confirm his October 1959 defection."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was immediately welcomed by Soviet intelligence upon arrival.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Soviets were initially suspicious and uninterested in him.",
        incorrect_feedback: "The House: Incorrect. Soviet documents show they were wary of Oswald initially."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attempted suicide when told he could not stay in the USSR.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He slashed his wrist in his hotel room when denied permanent residency.",
        incorrect_feedback: "The House: Incorrect. Medical records document his suicide attempt in Moscow."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was sent to work in a radio factory in Kiev.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was sent to Minsk, not Kiev, to work in a radio factory.",
        incorrect_feedback: "The House: Incorrect. Soviet records show he was assigned to Minsk, not Kiev."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald worked at the Gorizont Electronics Factory in Minsk.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was employed as a metal worker at this factory from 1960-1962.",
        incorrect_feedback: "The House: Incorrect. Factory records confirm his employment at Gorizont."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was given a luxurious apartment by Soviet authorities.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He lived in a modest one-room apartment, though better than typical Soviet housing.",
        incorrect_feedback: "The House: Incorrect. His apartment was comfortable but not luxurious by Western standards."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald met Marina Prusakova at a dance in Minsk.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. They met at a trade union dance in March 1961.",
        incorrect_feedback: "The House: Incorrect. Multiple sources confirm they met at a dance in Minsk."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Marina was a medical student when she met Oswald.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Marina worked as a pharmacist, not as a medical student.",
        incorrect_feedback: "The House: Incorrect. Marina was employed as a pharmacist when they met."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald and Marina married within two months of meeting.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. They married on April 30, 1961, just six weeks after meeting.",
        incorrect_feedback: "The House: Incorrect. They had a very brief courtship before marrying."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald began trying to return to the US immediately after arriving in the USSR.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He lived in the USSR for over two years before seeking to return.",
        incorrect_feedback: "The House: Incorrect. He spent considerable time in the USSR before wanting to return."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The US Embassy initially refused to help Oswald return to America.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Embassy assisted with his repatriation despite his defection.",
        incorrect_feedback: "The House: Incorrect. Embassy records show they helped facilitate his return."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald had to repay the US government for Marina travel expenses.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He borrowed money from the State Department for their return travel.",
        incorrect_feedback: "The House: Incorrect. Government records show he owed money for repatriation costs."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Oswalds returned to the US with their daughter June in 1962.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. They arrived in New York on June 13, 1962, with baby June.",
        incorrect_feedback: "The House: Incorrect. Immigration records confirm their June 1962 arrival."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Upon return, Oswald was immediately arrested by the FBI.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was questioned but not arrested upon his return.",
        incorrect_feedback: "The House: Incorrect. While monitored, he was not arrested upon reentry."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Oswalds initially stayed with Lee brother Robert in Texas.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. They stayed with Robert Oswald in Fort Worth initially.",
        incorrect_feedback: "The House: Incorrect. Robert Oswald confirmed they stayed with his family."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: George de Mohrenschildt was a wealthy Russian émigré who befriended Oswald.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. De Mohrenschildt was a geologist from a prominent Russian family.",
        incorrect_feedback: "The House: Incorrect. He was indeed a Russian émigré who became close to the Oswalds."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: De Mohrenschildt introduced Oswald to the Russian-speaking community in Dallas.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He helped integrate the Oswalds into the émigré community.",
        incorrect_feedback: "The House: Incorrect. De Mohrenschildt served as their social connection to other Russians."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald found steady employment immediately upon returning to Dallas.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He struggled to find and keep steady employment throughout 1962-1963.",
        incorrect_feedback: "The House: Incorrect. Employment records show he had difficulty maintaining jobs."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald worked briefly at a photography company in Dallas.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He worked at Jaggars-Chiles-Stovall, a graphic arts company.",
        incorrect_feedback: "The House: Incorrect. Employment records confirm his work at this photography firm."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: At Jaggars-Chiles-Stovall, Oswald had access to classified U-2 spy plane photographs.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The company processed classified military photographs including U-2 images.",
        incorrect_feedback: "The House: Incorrect. The Warren Commission confirmed his access to classified materials."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was fired from Jaggars-Chiles-Stovall for poor performance.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was terminated in April 1963 for unsatisfactory work.",
        incorrect_feedback: "The House: Incorrect. Company records document his termination for poor performance."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Marina spoke fluent English when she arrived in America.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Marina spoke very little English and required translation assistance.",
        incorrect_feedback: "The House: Incorrect. Language barriers were a significant issue for Marina initially."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruth Paine helped Marina learn English and provided housing.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Ruth Paine became Marina closest American friend and supporter.",
        incorrect_feedback: "The House: Incorrect. Ruth Paine was instrumental in helping Marina adapt to life in America."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was physically abusive toward Marina during their marriage.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Marina testified about domestic violence throughout their relationship.",
        incorrect_feedback: "The House: Incorrect. Multiple witnesses and Marina herself testified about abuse."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald ordered the rifle using the alias A.J. Hidell.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He used this alias to order the Mannlicher-Carcano from Klein Sporting Goods.",
        incorrect_feedback: "The House: Incorrect. Documentary evidence shows he used the Hidell alias for the purchase."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The rifle was delivered to a P.O. Box registered under Oswald real name.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The P.O. Box was registered to both Oswald and his Hidell alias.",
        incorrect_feedback: "The House: Incorrect. The box was registered to allow mail for both names."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald also ordered a .38 revolver through the mail.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He ordered a Smith & Wesson .38 revolver using the Hidell alias.",
        incorrect_feedback: "The House: Incorrect. Records show he purchased both the rifle and revolver by mail."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Marina photographed Oswald holding the rifle in their backyard.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. She took the famous backyard photos in March 1963.",
        incorrect_feedback: "The House: Incorrect. Marina testified she took the photographs at Oswald request."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The backyard photos were taken at Ruth Paine house.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The photos were taken at the Oswalds apartment on Neely Street.",
        incorrect_feedback: "The House: Incorrect. The location was their own backyard, not Ruth Paine property."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald gave copies of the backyard photos to de Mohrenschildt.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. De Mohrenschildt had a copy with an inscription from Oswald.",
        incorrect_feedback: "The House: Incorrect. De Mohrenschildt possessed an inscribed copy of the photograph."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attempted to assassinate General Edwin Walker in March 1963.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The Walker shooting attempt occurred on April 10, 1963, not March.",
        incorrect_feedback: "The House: Incorrect. The assassination attempt happened in April, not March."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Walker was a controversial right-wing general who had been relieved of command.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Walker was fired for distributing right-wing literature to troops.",
        incorrect_feedback: "The House: Incorrect. Walker extremist views led to his military dismissal."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The bullet that missed Walker was never found.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. The bullet was recovered and later linked to Oswald rifle.",
        incorrect_feedback: "The House: Incorrect. Police found the bullet and forensics linked it to the Mannlicher-Carcano."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Marina knew about the Walker shooting attempt beforehand.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Marina testified she only learned about it afterward.",
        incorrect_feedback: "The House: Incorrect. Marina said Oswald told her about it after the fact."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald left a note for Marina before the Walker attempt.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He left detailed instructions in case he was captured or killed.",
        incorrect_feedback: "The House: Incorrect. Marina preserved the note, which was entered into evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: After the Walker incident, Oswald moved to Chicago.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He moved to New Orleans in April 1963, not Chicago.",
        incorrect_feedback: "The House: Incorrect. Oswald relocated to New Orleans after the Walker shooting."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: In New Orleans, Oswald founded a chapter of Fair Play for Cuba Committee.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He created a one-man FPCC chapter and distributed leaflets.",
        incorrect_feedback: "The House: Incorrect. FBI records document his FPCC activities in New Orleans."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was arrested for fighting with anti-Castro Cubans while leafleting.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was arrested on August 9, 1963, after a confrontation.",
        incorrect_feedback: "The House: Incorrect. Police records confirm his arrest during the leafleting incident."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald appeared on local radio and TV to debate his pro-Castro views.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He appeared on radio programs to defend his political positions.",
        incorrect_feedback: "The House: Incorrect. Audio recordings exist of his radio appearances in New Orleans."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: While in New Orleans, Oswald worked for his uncle construction company.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He worked for the Reily Coffee Company, not a construction company.",
        incorrect_feedback: "The House: Incorrect. Employment records show he worked at Reily Coffee Company."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was fired from the Reily Coffee Company for poor attendance.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was terminated in July 1963 for excessive absences.",
        incorrect_feedback: "The House: Incorrect. Company records document his termination for attendance issues."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald attempted to travel to Cuba via Mexico City in September 1963.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He visited the Cuban and Soviet embassies seeking travel documents.",
        incorrect_feedback: "The House: Incorrect. Intelligence agencies documented his Mexico City trip."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Cuban embassy immediately approved Oswald visa application.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Both Cuban and Soviet officials were suspicious and denied his requests.",
        incorrect_feedback: "The House: Incorrect. Embassy personnel found Oswald unstable and refused his applications."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald spent two weeks in Mexico City trying to get visas.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He spent less than a week in Mexico City before returning frustrated.",
        incorrect_feedback: "The House: Incorrect. His stay was brief, lasting only a few days."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: After Mexico City, Oswald returned to Dallas to find work.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He returned to Dallas in early October 1963 seeking employment.",
        incorrect_feedback: "The House: Incorrect. He came back to Dallas and began job hunting."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruth Paine helped Oswald get the job at the Texas School Book Depository.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Ruth Paine learned of the opening and informed Marina.",
        incorrect_feedback: "The House: Incorrect. Ruth Paine was instrumental in Oswald getting this job."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald started working at the Book Depository in September 1963.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He began working there on October 16, 1963, not September.",
        incorrect_feedback: "The House: Incorrect. Employment records show he started in mid-October."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald lived with Marina at Ruth Paine house in Irving.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Marina lived with Ruth Paine while Oswald rented a room in Dallas.",
        incorrect_feedback: "The House: Incorrect. Oswald lived separately in a Dallas rooming house."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald rented a room on Beckley Avenue under his real name.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He used the alias O.H. Lee when renting the room.",
        incorrect_feedback: "The House: Incorrect. Rooming house records show he used a false name."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald visited Marina and his daughters on weekends.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He regularly visited Irving on weekends to see his family.",
        incorrect_feedback: "The House: Incorrect. Multiple witnesses confirmed his weekend visits to Ruth Paine house."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Marina gave birth to their second daughter in October 1963.",
        correct_answer: true,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. Audrey Marina Rachel Oswald was born on October 20, 1963.",
        incorrect_feedback: "The House: Incorrect. Hospital records confirm the birth of their second daughter."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was present for his second daughter birth.",
        correct_answer: false,
        value: 20, stance: "lone_gunman", is_axiomatic_lg: true, is_axiomatic_ct: false,
        correct_feedback: "The House: Correct. He was working and did not attend the birth at Parkland Hospital.",
        incorrect_feedback: "The House: Incorrect. Oswald was not present when Audrey was born."
    },
    // --- True/False Questions: Conspiracy Theory Perspective ---
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was recruited by intelligence agencies while serving in the Marines.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No credible evidence supports intelligence recruitment during military service.",
        incorrect_feedback: "The House: Incorrect. Conspiracy theories about recruitment lack substantial evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald Marine unit at Atsugi had connections to CIA U-2 operations.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Atsugi was indeed a U-2 base, though this does not prove Oswald was recruited.",
        incorrect_feedback: "The House: Incorrect. Atsugi Air Base was a known CIA U-2 facility."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald defection to the USSR was unusually easy for a former Marine.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His smooth defection has raised questions among some researchers.",
        incorrect_feedback: "The House: Incorrect. The ease of his defection seemed unusual to some observers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Soviets immediately welcomed Oswald as a valuable defector.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Soviet files show they were initially suspicious and uninterested.",
        incorrect_feedback: "The House: Incorrect. Released KGB documents reveal their wariness of Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald return to the US was facilitated by unusual State Department assistance.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Some find the ease of his repatriation suspicious given his defection.",
        incorrect_feedback: "The House: Incorrect. The State Department help despite his defection raises questions."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: George de Mohrenschildt had documented CIA connections.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. CIA files confirm de Mohrenschildt had intelligence contacts.",
        incorrect_feedback: "The House: Incorrect. Released documents show his CIA associations."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: De Mohrenschildt contacted the CIA about his relationship with Oswald.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. CIA documents show he reported on his contacts with Oswald.",
        incorrect_feedback: "The House: Incorrect. CIA files document his reports about Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald met with Soviet intelligence officer Valeriy Kostikov in Mexico City.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Intelligence agencies confirmed this meeting at the Soviet Embassy.",
        incorrect_feedback: "The House: Incorrect. CIA surveillance documented this contact."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The CIA initially claimed they had no photographs of Oswald in Mexico City.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This claim was later proven false when photos surfaced.",
        incorrect_feedback: "The House: Incorrect. The CIA denial was contradicted by later evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: FBI agent James Hosty was monitoring Oswald before the assassination.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Hosty had an active file on Oswald and visited Marina.",
        incorrect_feedback: "The House: Incorrect. FBI records confirm Hosty surveillance of Oswald."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald destroyed a note he had written to the FBI shortly before November 22.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Agent Hosty destroyed the note after Oswald death, not Oswald himself.",
        incorrect_feedback: "The House: Incorrect. The note was destroyed by FBI agent Hosty, raising questions about its contents."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The FBI had advance knowledge of threats against Kennedy in Dallas.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The FBI was aware of potential threats but deemed security adequate.",
        incorrect_feedback: "The House: Incorrect. FBI files document awareness of potential dangers."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald told acquaintances he worked for the government.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No credible witnesses reported Oswald claiming government employment.",
        incorrect_feedback: "The House: Incorrect. This claim lacks credible witness testimony."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The 201 file opened on Oswald is typical for routine security cases.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The 201 file type was typically used for CIA operational interests.",
        incorrect_feedback: "The House: Incorrect. This file type suggests more than routine security monitoring."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Clay Bertrand was a real person connected to Oswald in New Orleans.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No evidence confirms Clay Bertrand as a real associate of Oswald.",
        incorrect_feedback: "The House: Incorrect. The Clay Bertrand connection remains unsubstantiated."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Guy Banister detective agency was located near Oswald FPCC office.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Banister office was at 544 Camp Street, same building as Oswald operation.",
        incorrect_feedback: "The House: Incorrect. The proximity is documented and has fueled conspiracy theories."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: David Ferrie knew Oswald from their time in the Civil Air Patrol.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Both were members of the New Orleans Civil Air Patrol.",
        incorrect_feedback: "The House: Incorrect. Civil Air Patrol records confirm their overlap."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Carlos Marcello was overheard threatening President Kennedy.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. FBI informants reported Marcello making threats against JFK.",
        incorrect_feedback: "The House: Incorrect. FBI files document informant reports of Marcello threats."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Jack Ruby had extensive connections to organized crime figures.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. FBI files document Ruby numerous underworld associations.",
        incorrect_feedback: "The House: Incorrect. Ruby criminal connections are well-documented."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Ruby met with Santos Trafficante Jr. shortly before the assassination.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. No credible evidence places Ruby with Trafficante before November 22.",
        incorrect_feedback: "The House: Incorrect. This meeting claim lacks substantiated evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was seen with unidentified companions in Dallas before the assassination.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Several witnesses reported seeing Oswald with unknown individuals.",
        incorrect_feedback: "The House: Incorrect. Multiple witness accounts describe Oswald with others."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Mannlicher-Carcano rifle was an excellent assassination weapon.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Military experts consider it a poor choice for accurate shooting.",
        incorrect_feedback: "The House: Incorrect. The weapon is generally regarded as unreliable and inaccurate."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald demonstrated exceptional marksmanship skills in the Marines.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. His Marine scores were mediocre, rating as a marksman - the lowest category.",
        incorrect_feedback: "The House: Incorrect. Military records show poor to average shooting ability."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The backyard photos show signs of photographic manipulation.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Modern analysis confirms the photos are authentic despite conspiracy claims.",
        incorrect_feedback: "The House: Incorrect. Scientific analysis has validated the photographs authenticity."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Multiple Oswald imposters were reported before the assassination.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Various witnesses reported Oswald-like individuals in suspicious circumstances.",
        incorrect_feedback: "The House: Incorrect. FBI files contain numerous reports of possible Oswald imposters."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald was fluent in Russian when he defected.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. He had limited Russian skills despite his studies.",
        incorrect_feedback: "The House: Incorrect. Soviet records indicate his Russian was poor initially."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The House Select Committee concluded Oswald probably acted alone.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA concluded there was probably a conspiracy involving multiple shooters.",
        incorrect_feedback: "The House: Incorrect. The HSCA found evidence of a probable conspiracy."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Acoustic evidence suggested shots were fired from the grassy knoll.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. The HSCA relied on acoustic analysis suggesting additional shots.",
        incorrect_feedback: "The House: Incorrect. Acoustic analysis was central to the HSCA conspiracy conclusion."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The acoustic evidence has been thoroughly discredited by later analysis.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Subsequent studies found serious flaws in the acoustic analysis.",
        incorrect_feedback: "The House: Incorrect. Later investigations severely undermined the acoustic evidence."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Oswald carried a package to work containing a disassembled rifle.",
        correct_answer: true,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. This is the most plausible explanation for the long package he carried.",
        incorrect_feedback: "The House: Incorrect. The package dimensions match a disassembled Mannlicher-Carcano."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The Warren Commission interviewed all relevant witnesses thoroughly.",
        correct_answer: false,
        value: 20, stance: "conspiracy", is_axiomatic_lg: false, is_axiomatic_ct: true,
        correct_feedback: "The House: Correct. Many potential witnesses were never interviewed or inadequately questioned.",
        incorrect_feedback: "The House: Incorrect. The Commission witness list had significant gaps."
    }
];

// Additional metadata
const loopMetadata = {
    title: "Who was LHO?",
    description: "Unraveling the assassin.",
    totalItems: lhoContent.length,
    stances: ["lone_gunman", "conspiracy"]
};
