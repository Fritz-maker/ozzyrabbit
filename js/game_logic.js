
// ===== OZZYRABBIT - ENHANCED GAME LOGIC WITH ADVANCED FEATURES =====
// This is your main game_logic.js file that handles all loops

// --- Enhanced Loop Progression & Unlock Requirements ---
const loopOrder = [
    { 
        titleIncludes: "Motorcade Route", 
        file: "motorcade.html", 
        unlockScore: 25, 
        isFinal: false, 
        description: "The fateful journey begins",
        thematicColor: "hsl(15, 70%, 50%)", // Blood red
        mood: "tension"
    },
    { 
        titleIncludes: "Parkland to Arlington", 
        file: "parkland.html", 
        unlockScore: 50,
        isFinal: false, 
        description: "From trauma to ceremony",
        thematicColor: "hsl(200, 30%, 40%)", // Somber blue
        mood: "sorrow"
    },
    { 
        titleIncludes: "Oswald Escapes", 
        file: "oswald.html", 
        unlockScore: 60, 
        isFinal: false, 
        description: "The flight from Dealey Plaza",
        thematicColor: "hsl(45, 80%, 30%)", // Dark gold
        mood: "chase"
    },
    { 
        titleIncludes: "Who was LHO?", 
        file: "lho.html", 
        unlockScore: 65, 
        isFinal: false, 
        description: "Unraveling the assassin",
        thematicColor: "hsl(280, 60%, 45%)", // Purple mystery
        mood: "investigation"
    },
    { 
        titleIncludes: "Warren Commission", 
        file: "warren.html", 
        unlockScore: 75, 
        isFinal: false, 
        description: "Official truth or cover-up?",
        thematicColor: "hsl(120, 40%, 35%)", // Institutional green
        mood: "authority"
    },
    { 
        titleIncludes: "Aftermath", 
        file: "aftermath.html", 
        unlockScore: Infinity, 
        isFinal: true, 
        description: "The endless questions",
        thematicColor: "hsl(0, 0%, 20%)", // Gray void
        mood: "infinity"
    }
];

// --- Enhanced Global Game Variables ---
let currentContentPool = [];
let userScore = 0;
let loneGunmanBeliefScore = 0;
let conspiracyBeliefScore = 0;
let currentImplicitPreference = 'neutral';
let currentIndex = -1;
let contentShown = 0;
let maxContentToShow = 8; // Increased from 6 to 8 for richer experience
let chosenPerspective = null;
let sessionStartTime = Date.now();
let contentHistory = []; // Track what content has been shown
let streakCount = 0; // Correct answer streak
let perfectAnswers = 0; // Count of perfect answers this session

// Enhanced DOM Elements
const scoreDisplay = document.getElementById('current-score');
const preferenceSelection = document.getElementById('preference-selection');
const chooseLgButton = document.getElementById('choose-lg');
const chooseCtButton = document.getElementById('choose-ct');
const contentDisplayArea = document.getElementById('content-display');
const nextButton = document.getElementById('next-button');
const houseCommentary = document.getElementById('house-commentary');
const progressIndicator = document.getElementById('progress-indicator');
const currentLoopDisplay = document.getElementById('current-loop');
const unlockStatus = document.getElementById('unlock-status');

// New elements for enhanced features (create these in your HTML if desired)
const beliefMeter = document.getElementById('belief-meter');
const streakDisplay = document.getElementById('streak-display');
const moodIndicator = document.getElementById('mood-indicator');

// --- Enhanced Utility Functions ---
function logDebug(message) {
    console.log(`[OZZYRABBIT] ${message}`);
}

function playSound(soundId) {
    // PLACEHOLDER: Audio disabled for testing - replace this function when audio files are ready
    logDebug(`[AUDIO PLACEHOLDER] Would play sound: ${soundId}`);
    // Uncomment below when audio files are ready:
    /*
    const audio = new Audio(`assets/audio/${soundId}.mp3`);
    audio.volume = 0.7;
    audio.play().catch(e => logDebug(`Audio play failed for ${soundId}: ${e.message}`));
    */
}

function playMoodSound(mood) {
    // PLACEHOLDER: Audio disabled for testing - replace this function when audio files are ready
    const moodSounds = {
        tension: 'tension_ambient',
        sorrow: 'somber_tone',
        chase: 'urgency_pulse',
        investigation: 'mystery_theme',
        authority: 'official_tone',
        infinity: 'void_ambient'
    };
    if (moodSounds[mood]) {
        logDebug(`[AUDIO PLACEHOLDER] Would play mood sound: ${moodSounds[mood]} for mood: ${mood}`);
        // Uncomment below when audio files are ready:
        // playSound(moodSounds[mood]);
    }
}

function getCurrentLoopData() {
    return loopOrder.find(loop => document.title.includes(loop.titleIncludes));
}

function getLoopProgress() {
    const currentLoop = getCurrentLoopData();
    if (!currentLoop) return { current: 0, total: loopOrder.length };
    const currentIndex = loopOrder.indexOf(currentLoop);
    return { current: currentIndex + 1, total: loopOrder.length };
}

function updateThematicStyling() {
    const currentLoop = getCurrentLoopData();
    if (currentLoop && document.documentElement) {
        document.documentElement.style.setProperty('--loop-theme-color', currentLoop.thematicColor);
        if (moodIndicator) {
            moodIndicator.textContent = currentLoop.mood.toUpperCase();
            moodIndicator.style.color = currentLoop.thematicColor;
        }
    }
}

// --- Enhanced Content Pool Assignment Logic ---
function assignContentPool() {
    const contentPools = {
        "Motorcade Route": typeof motorcadeContent !== 'undefined' ? motorcadeContent : [],
        "Parkland to Arlington": typeof parklandContent !== 'undefined' ? parklandContent : [],
        "Oswald Escapes": typeof oswaldContent !== 'undefined' ? oswaldContent : [],
        "Who was LHO?": typeof lhoContent !== 'undefined' ? lhoContent : [],
        "Warren Commission": typeof warrenContent !== 'undefined' ? warrenContent : [],
        "Aftermath": typeof aftermathContent !== 'undefined' ? aftermathContent : []
    };

    const currentLoopTitle = Object.keys(contentPools).find(title => document.title.includes(title));
    currentContentPool = currentLoopTitle ? contentPools[currentLoopTitle] : [];

    // Enhanced content balancing based on chosen perspective
    if (chosenPerspective && currentContentPool.length > 0) {
        currentContentPool = balanceContentByPreference(currentContentPool, chosenPerspective);
    }

    maxContentToShow = Math.min(8, Math.max(6, Math.floor(currentContentPool.length * 0.3)));
    logDebug(`Content pool assigned: ${currentContentPool.length} items. Max to show: ${maxContentToShow}`);
}

function balanceContentByPreference(pool, preference) {
    // Create a weighted pool that slightly favors user's chosen perspective
    // but ensures exposure to both sides for educational balance
    const preferredContent = pool.filter(item => item.stance === preference);
    const oppositeContent = pool.filter(item => 
        item.stance !== preference && item.stance !== 'neutral'
    );
    const neutralContent = pool.filter(item => item.stance === 'neutral');

    // Ensure 60% preferred, 30% opposite, 10% neutral for balanced education
    const balancedPool = [
        ...shuffleArray(preferredContent).slice(0, Math.ceil(pool.length * 0.6)),
        ...shuffleArray(oppositeContent).slice(0, Math.ceil(pool.length * 0.3)),
        ...shuffleArray(neutralContent).slice(0, Math.ceil(pool.length * 0.1))
    ];

    return shuffleArray(balancedPool.length > 0 ? balancedPool : pool);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// --- Enhanced Scoring Logic ---
function determineImplicitPreference() {
    const difference = Math.abs(loneGunmanBeliefScore - conspiracyBeliefScore);
    const threshold = 75; // Increased threshold for more nuanced classification

    if (loneGunmanBeliefScore > conspiracyBeliefScore + threshold) {
        return 'lone_gunman';
    } else if (conspiracyBeliefScore > loneGunmanBeliefScore + threshold) {
        return 'conspiracy_theory';
    } else if (difference < 25) {
        return 'balanced';
    } else {
        return 'questioning';
    }
}

function updateScores(itemValue, itemStance, isCorrect = null) {
    const baseScore = itemValue;
    let scoreMultiplier = 1;

    // Streak bonus system
    if (isCorrect === true) {
        streakCount++;
        perfectAnswers++;
        scoreMultiplier = 1 + (streakCount * 0.1); // 10% bonus per streak
    } else if (isCorrect === false) {
        streakCount = 0; // Reset streak on wrong answer
    }

    const finalScore = Math.floor(baseScore * scoreMultiplier);
    userScore += finalScore;

    // Enhanced belief score updates with nuanced weighting
    const beliefMultiplier = isCorrect === true ? 2.0 : isCorrect === false ? 0.3 : 1.0;

    if (itemStance === 'lone_gunman') {
        if (isCorrect === true) {
            loneGunmanBeliefScore += itemValue * 1.8;
        } else if (isCorrect === false) {
            conspiracyBeliefScore += itemValue * 0.4;
        } else {
            loneGunmanBeliefScore += itemValue * 0.9;
        }
    } else if (itemStance === 'conspiracy_theory') {
        if (isCorrect === true) {
            conspiracyBeliefScore += itemValue * 1.8;
        } else if (isCorrect === false) {
            loneGunmanBeliefScore += itemValue * 0.4;
        } else {
            conspiracyBeliefScore += itemValue * 0.9;
        }
    } else {
        // Neutral content slightly boosts both
        loneGunmanBeliefScore += itemValue * 0.3;
        conspiracyBeliefScore += itemValue * 0.3;
    }

    currentImplicitPreference = determineImplicitPreference();
    updateDisplays();
    logDebug(`Score: ${userScore} (+${finalScore}), Streak: ${streakCount}, Preference: ${currentImplicitPreference}`);
}

function updateDisplays() {
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${Math.floor(userScore)}`;
    }
    
    if (streakDisplay) {
        streakDisplay.textContent = streakCount > 1 ? `🔥 ${streakCount}x Streak!` : '';
        streakDisplay.style.display = streakCount > 1 ? 'block' : 'none';
    }

    if (beliefMeter) {
        updateBeliefMeter();
    }
}

function updateBeliefMeter() {
    const total = loneGunmanBeliefScore + conspiracyBeliefScore;
    if (total === 0) return;

    const lgPercentage = (loneGunmanBeliefScore / total) * 100;
    const ctPercentage = (conspiracyBeliefScore / total) * 100;

    beliefMeter.innerHTML = `
        <div class="belief-bar">
            <div class="lg-belief" style="width: ${lgPercentage}%">LG: ${Math.round(lgPercentage)}%</div>
            <div class="ct-belief" style="width: ${ctPercentage}%">CT: ${Math.round(ctPercentage)}%</div>
        </div>
        <div class="preference-label">${getPreferenceDescription()}</div>
    `;
}

function getPreferenceDescription() {
    switch (currentImplicitPreference) {
        case 'lone_gunman': return 'Convinced of the Official Story';
        case 'conspiracy_theory': return 'Suspicious of Hidden Truths';
        case 'balanced': return 'Seeking Balance Between Views';
        case 'questioning': return 'Wrestling with Uncertainty';
        default: return 'Beginning Your Journey';
    }
}

// --- Enhanced Content Display Logic ---
function displayRandomContent() {
    if (contentShown >= maxContentToShow) {
        handleEndOfLoop();
        return;
    }

    if (!currentContentPool || currentContentPool.length === 0) {
        houseCommentary.innerHTML = "<span class='glitch-text'>The House: The void stares back... No content found.</span>";
        return;
    }

    // Smart content selection avoiding recent repeats
    let availableContent = currentContentPool.filter((item, index) => 
        !contentHistory.slice(-3).includes(index) // Avoid last 3 shown items
    );

    if (availableContent.length === 0) {
        availableContent = currentContentPool; // Reset if all filtered out
    }

    const randomIndex = Math.floor(Math.random() * availableContent.length);
    const selectedItem = availableContent[randomIndex];
    const originalIndex = currentContentPool.indexOf(selectedItem);
    
    contentHistory.push(originalIndex);
    currentIndex = originalIndex;
    contentShown++;

    displayContent(selectedItem);
    updateProgressDisplay();
}

function displayContent(item) {
    contentDisplayArea.innerHTML = '';
    houseCommentary.innerHTML = '';

    // Add contextual House commentary before content
    if (item.house_commentary) {
        houseCommentary.innerHTML = `<span class='glitch-text'>${item.house_commentary}</span>`;
    }

    logDebug(`Displaying: ${item.type} (${item.stance}) - ${contentShown}/${maxContentToShow}`);

    const escapeHtml = str => (str || "").replace(/'/g, "\\'").replace(/"/g, "&quot;");

    switch (item.type) {
        case "tf_question":
            displayTrueFalseQuestion(item, escapeHtml);
            break;
        case "mc_question":
            displayMultipleChoiceQuestion(item, escapeHtml);
            break;
        case "video":
            displayVideo(item);
            break;
        case "factoid":
        default:
            displayFactoid(item);
            break;
    }
}

function displayTrueFalseQuestion(item, escapeHtml) {
    const correctFeedback = escapeHtml(item.correct_feedback);
    const incorrectFeedback = escapeHtml(item.incorrect_feedback);
    
    contentDisplayArea.innerHTML = `
        <div class="question-container">
            <h3 class='glitch-text question-text'>${item.question}</h3>
            <div class="options-container tf-options">
                <button class="answer-btn true-btn" onclick="handleAnswer(true, ${item.correct_answer}, ${item.value}, '${item.stance}', ${item.is_axiomatic_lg || false}, '${correctFeedback}', '${incorrectFeedback}')">
                    <span class="btn-icon">✓</span> TRUE
                </button>
                <button class="answer-btn false-btn" onclick="handleAnswer(false, ${item.correct_answer}, ${item.value}, '${item.stance}', ${item.is_axiomatic_lg || false}, '${correctFeedback}', '${incorrectFeedback}')">
                    <span class="btn-icon">✗</span> FALSE
                </button>
            </div>
        </div>
    `;
    
    nextButton.style.display = 'none';
    playSound('reveal_question');
}

function displayMultipleChoiceQuestion(item, escapeHtml) {
    const correctFeedback = escapeHtml(item.correct_feedback || '');
    const incorrectFeedback = escapeHtml(item.incorrect_feedback || '');
    
    let optionsHtml = '';
    for (const key in item.options) {
        const optionText = escapeHtml(item.options[key]);
        optionsHtml += `
            <button class="answer-btn mc-btn" onclick="handleAnswer('${key}', '${item.correct_answer_key}', ${item.value}, '${item.stance}', ${item.is_axiomatic_lg || false}, '${correctFeedback}', '${incorrectFeedback}')">
                <span class="option-letter">${key}</span>
                <span class="option-text">${optionText}</span>
            </button>
        `;
    }
    
    contentDisplayArea.innerHTML = `
        <div class="question-container">
            <h3 class='glitch-text question-text'>${item.question}</h3>
            <div class="options-container mc-options">
                ${optionsHtml}
            </div>
        </div>
    `;
    
    nextButton.style.display = 'none';
    playSound('reveal_question');
}

function displayVideo(item) {
    // Enhanced video display with better embed handling
    let embedUrl = item.url;
    if (item.url.includes('youtube.com/watch')) {
        embedUrl = item.url.replace('watch?v=', 'embed/').split('&')[0];
    }
    
    contentDisplayArea.innerHTML = `
        <div class="video-container">
            <h3 class='glitch-text video-title'>${item.title}</h3>
            <div class="video-wrapper">
                <iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
    
    updateScores(item.value, item.stance);
    nextButton.style.display = 'block';
    playSound('reveal_video');
}

function displayFactoid(item) {
    contentDisplayArea.innerHTML = `
        <div class="factoid-container">
            <div class='glitch-text factoid-text'>${item.text}</div>
        </div>
    `;
    
    updateScores(item.value, item.stance);
    nextButton.style.display = 'block';
    playSound('reveal_factoid');
}

function updateProgressDisplay() {
    if (progressIndicator) {
        const progress = getLoopProgress();
        const percentage = (contentShown / maxContentToShow) * 100;
        progressIndicator.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <div class="progress-text">
                ${contentShown}/${maxContentToShow} • Loop ${progress.current}/${progress.total}
            </div>
        `;
    }
}

// --- Enhanced Answer Handling ---
function handleAnswer(userAnswer, correctAnswer, baseValue, stance, isAxiomaticLg, correctFeedback, incorrectFeedback) {
    const isCorrect = (userAnswer === correctAnswer);
    logDebug(`Answer: ${userAnswer} vs ${correctAnswer} = ${isCorrect ? 'Correct' : 'Incorrect'}`);

    updateScores(baseValue, stance, isCorrect);
    provideEnhancedHouseCommentary(stance, isCorrect, isAxiomaticLg, correctFeedback, incorrectFeedback);

    // Enhanced button feedback
    const buttons = contentDisplayArea.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.onclick.toString().includes(`'${userAnswer}'`) || 
            button.onclick.toString().includes(`${userAnswer},`)) {
            button.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        }
    });

    // Show correct answer if user was wrong
    if (!isCorrect) {
        buttons.forEach(button => {
            if (button.onclick.toString().includes(`'${correctAnswer}'`) || 
                button.onclick.toString().includes(`${correctAnswer},`)) {
                button.classList.add('show-correct');
            }
        });
    }

    nextButton.style.display = 'block';
    playSound(isCorrect ? 'correct_answer' : 'incorrect_answer');
}

// --- Enhanced House Commentary ---
function provideEnhancedHouseCommentary(itemStance, isCorrect, isAxiomaticLg, correctFeedback = "", incorrectFeedback = "") {
    let commentary = "";
    let additionalInsight = "";

    if (isCorrect === true) {
        commentary = correctFeedback || "The House: Truth emerges from shadow. Your path is illuminated.";
        
        if (streakCount >= 3) {
            additionalInsight = ` The House observes: Your streak of insight grows stronger... (${streakCount}x multiplier active)`;
        }
        
        if (isAxiomaticLg && chosenPerspective === 'lone_gunman') {
            commentary = "The House: A foundational truth! Your conviction in the official narrative crystallizes.";
        } else if (itemStance === 'conspiracy_theory' && chosenPerspective === 'conspiracy_theory') {
            commentary = "The House: Another piece falls into place... The web of conspiracy tightens.";
        }
    } else if (isCorrect === false) {
        commentary = incorrectFeedback || "The House: Shadows obscure your vision. The truth demands deeper contemplation.";
        
        if (streakCount === 0) {
            additionalInsight = " The House whispers: Even masters stumble in the labyrinth of truth...";
        }
    } else {
        // For factoids and videos
        const personalizedCommentary = generatePersonalizedCommentary(itemStance);
        commentary = personalizedCommentary;
    }

    houseCommentary.innerHTML = `<span class='glitch-text'>${commentary}${additionalInsight}</span>`;
}

function generatePersonalizedCommentary(itemStance) {
    const preference = currentImplicitPreference;
    const stanceEmoji = {
        'lone_gunman': '🎯',
        'conspiracy_theory': '🕳️',
        'neutral': '⚖️'
    };

    if (preference === 'balanced') {
        return `The House: ${stanceEmoji[itemStance]} You walk the razor's edge between certainty and doubt. Balance is wisdom.`;
    } else if (preference === 'questioning') {
        return `The House: ${stanceEmoji[itemStance]} Your mind wrestles with contradictions. In uncertainty, perhaps, lies the deepest truth.`;
    } else if (preference === itemStance) {
        return `The House: ${stanceEmoji[itemStance]} This aligns with your growing convictions. The pattern strengthens.`;
    } else {
        return `The House: ${stanceEmoji[itemStance]} A perspective that challenges your current path. Will you reconsider?`;
    }
}

// --- Enhanced End of Loop Logic ---
function handleEndOfLoop() {
    const currentLoopData = getCurrentLoopData();
    if (!currentLoopData) {
        displayError("Could not identify current loop for completion processing.");
        return;
    }

    // Calculate session statistics
    const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 1000);
    const averageTimePerContent = Math.floor(sessionDuration / contentShown);
    const accuracyRate = perfectAnswers / Math.max(1, contentShown) * 100;

    // Enhanced loop completion display
    contentDisplayArea.innerHTML = `
        <div class="loop-complete-container">
            <h2 class="loop-title">🎭 Loop Complete</h2>
            <h3 class="loop-name">${currentLoopData.titleIncludes}</h3>
            <p class="loop-description"><em>${currentLoopData.description}</em></p>
            
            <div class="session-stats">
                <div class="stat-box">
                    <div class="stat-value">${Math.floor(userScore)}</div>
                    <div class="stat-label">Final Score</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">${Math.round(accuracyRate)}%</div>
                    <div class="stat-label">Accuracy</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">${contentShown}</div>
                    <div class="stat-label">Items Explored</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">${Math.floor(sessionDuration / 60)}m</div>
                    <div class="stat-label">Time Spent</div>
                </div>
            </div>
            
            <div class="belief-summary">
                <h4>Your Emerging Perspective: ${getPreferenceDescription()}</h4>
                <div class="belief-breakdown">
                    <div class="belief-stat">
                        <span class="belief-label">Official Story Alignment:</span>
                        <span class="belief-value">${Math.round((loneGunmanBeliefScore / (loneGunmanBeliefScore + conspiracyBeliefScore || 1)) * 100)}%</span>
                    </div>
                    <div class="belief-stat">
                        <span class="belief-label">Alternative Theory Alignment:</span>
                        <span class="belief-value">${Math.round((conspiracyBeliefScore / (loneGunmanBeliefScore + conspiracyBeliefScore || 1)) * 100)}%</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    nextButton.style.display = 'none';

    if (currentLoopData.isFinal) {
        handleStrangeLoop(currentLoopData);
    } else {
        handleRegularLoopEnd(currentLoopData);
    }
}

function handleStrangeLoop(currentLoopData) {
    const totalJourneyTime = Math.floor((Date.now() - sessionStartTime) / 60000); // minutes
    
    houseCommentary.innerHTML = `
        <span class='glitch-text'>
            The House observes: After ${totalJourneyTime} minutes of contemplation, you have arrived where all seekers must...
            <br><br>
            At the event horizon of knowability itself.
            <br><br>
            Here, in the aftermath, questions birth questions in an endless recursive loop.
            The assassination becomes a mirror reflecting our deepest fears about truth, power, and the unknowable.
        </span>
        <div style="font-size: 4em; text-align: center; margin: 30px 0; color: var(--color-accent-gold); animation: pulse 2s infinite;" class="infinity-symbol">∞</div>
    `;

    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="strange-loop-container">
                <h3 class="strange-loop-title">∞ THE STRANGE LOOP ∞</h3>
                <div class="philosophical-reflection">
                    <p>You have transcended the need for answers and embraced the beauty of eternal questioning.</p>
                    <p>The Kennedy assassination remains what it has always been: a Rorschach test for our relationship with uncertainty.</p>
                    <p>In seeking truth, you have found something more valuable: the wisdom to question the very nature of truth itself.</p>
                </div>
                
                <div class="final-stats">
                    <h4>Your Journey's End Statistics:</h4>
                    <p>• Total Score Achieved: <strong>${Math.floor(userScore)}</strong></p>
                    <p>• Perspective Developed: <strong>${getPreferenceDescription()}</strong></p>
                    <p>• Questions Contemplated: <strong>${contentShown}</strong></p>
                    <p>• Certainty Level: <strong>Appropriately Uncertain</strong></p>
                </div>
                
                <div class="strange-loop-actions">
                    <button onclick="contemplateInfinity()" class="contemplation-btn">
                        🤔 Contemplate the Infinite
                    </button>
                    <button onclick="returnToBeginning()" class="return-btn">
                        🔄 Begin the Loop Anew
                    </button>
                    <button onclick="shareReflection()" class="share-btn">
                        📝 Share Your Reflection
                    </button>
                </div>
            </div>
        `;
    }
    
    playMoodSound('infinity');
    logDebug("Strange Loop activated - Ultimate wisdom achieved");
}

function handleRegularLoopEnd(currentLoopData) {
    const nextLoopIndex = loopOrder.indexOf(currentLoopData) + 1;
    const nextLoopData = loopOrder[nextLoopIndex];
    const unlockThreshold = currentLoopData.unlockScore;

    if (userScore >= unlockThreshold) {
        handleSuccessfulUnlock(nextLoopData, currentLoopData);
    } else {
        handleFailedUnlock(nextLoopData, currentLoopData, unlockThreshold);
    }
}

function handleSuccessfulUnlock(nextLoopData, currentLoopData) {
    houseCommentary.innerHTML = `
        <span class='glitch-text'>
            The House: Excellent! Your accumulated insight (${Math.floor(userScore)} points) has unlocked the path forward.
            <br><br>
            The mysteries of "${nextLoopData.titleIncludes}" await your exploration...
            <br><br>
            But be warned: each loop reveals deeper truths... and deeper uncertainties.
        </span>
    `;

    nextButton.textContent = `🔓 Enter ${nextLoopData.titleIncludes}`;
    nextButton.style.display = 'block';
    nextButton.className = 'unlock-button pulsing';
    nextButton.onclick = () => {
        playSound('unlock_success');
        setTimeout(() => {
            window.location.href = nextLoopData.file;
        }, 1000);
    };

    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="unlock-success">
                <h3>🔓 PATHWAY ILLUMINATED</h3>
                <div class="next-loop-preview">
                    <h4>${nextLoopData.titleIncludes}</h4>
                    <p class="loop-description">${nextLoopData.description}</p>
                    <div class="thematic-preview" style="border-left: 4px solid ${nextLoopData.thematicColor}">
                        <strong>Mood:</strong> ${nextLoopData.mood.toUpperCase()}
                    </div>
                </div>
                <p class="encouragement">Your journey into the labyrinth of truth continues...</p>
            </div>
        `;
    }
    
    playSound('unlock_success');
}

function handleFailedUnlock(nextLoopData, currentLoopData, unlockThreshold) {
    const pointsNeeded = unlockThreshold - userScore;
    const suggestionText = generatePersonalizedSuggestion();

    houseCommentary.innerHTML = `
        <span class='glitch-text'>
            The House observes: You require ${pointsNeeded} more points of insight to pierce the veil of "${nextLoopData.titleIncludes}".
            <br><br>
            ${suggestionText}
            <br><br>
            Truth rewards those who seek it with genuine curiosity...
        </span>
    `;

    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="unlock-failed">
                <h3>🔒 DEEPER CONTEMPLATION REQUIRED</h3>
                <div class="score-analysis">
                    <p><strong>Current Score:</strong> ${Math.floor(userScore)} / ${unlockThreshold}</p>
                    <p><strong>Additional Points Needed:</strong> ${pointsNeeded}</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(userScore/unlockThreshold)*100}%"></div>
                    </div>
                </div>
                
                <div class="improvement-suggestions">
                    <h4>The House Suggests:</h4>
                    <ul>
                        <li>Engage more deeply with challenging questions</li>
                        <li>Explore perspectives that contradict your current beliefs</li>
                        <li>Watch the video content for additional insights</li>
                        <li>Seek balance between different viewpoints</li>
                    </ul>
                </div>
                
                <div class="retry-actions">
                    <button onclick="restartCurrentLoop()" class="retry-btn">
                        🔄 Explore This Loop Again
                    </button>
                    <button onclick="reviewMissedContent()" class="review-btn">
                        👁️ Review Different Perspectives
                    </button>
                </div>
            </div>
        `;
    }
    
    playSound('unlock_failed');
}

function generatePersonalizedSuggestion() {
    if (currentImplicitPreference === 'lone_gunman') {
        return "Perhaps consider the questions raised by the other side of this mystery...";
    } else if (currentImplicitPreference === 'conspiracy_theory') {
        return "The official narrative may hold truths you have not yet fully explored...";
    } else {
        return "Greater engagement with the material will deepen your understanding...";
    }
}

// --- Enhanced Navigation Functions ---
function contemplateInfinity() {
    const contemplations = [
        "In seeking absolute truth about November 22, 1963, we encounter the limits of human knowledge itself.",
        "The assassination becomes a metaphor for all the certainties we thought we possessed but must now question.",
        "Perhaps the real conspiracy is our inability to accept that some questions transcend simple answers.",
        "In the space between official narrative and alternative theory lies the most honest response: 'I don't know.'",
        "The House observes: Truth is not a destination but a journey that reveals more questions at every turn."
    ];
    
    const randomContemplation = contemplations[Math.floor(Math.random() * contemplations.length)];
    
    houseCommentary.innerHTML = `
        <span class='glitch-text'>
            ${randomContemplation}
            <br><br>
            <em>Click again to contemplate another facet of the infinite...</em>
        </span>
    `;
}

function returnToBeginning() {
    if (confirm("Return to the beginning of your journey through the strange loops?\n\nYou will restart from the Motorcade Route. Your wisdom gained will remain, but your scores will reset for a fresh perspective.")) {
        playSound('reset_journey');
        localStorage.setItem('ozzyrabbit_return_visitor', 'true'); // Mark as returning visitor
        setTimeout(() => {
            window.location.href = 'motorcade.html';
        }, 1000);
    }
}

function shareReflection() {
    const reflection = prompt("Share your reflection on this journey through the JFK assassination mystery:");
    if (reflection) {
        houseCommentary.innerHTML = `
            <span class='glitch-text'>
                The House records your reflection:<br><br>
                <em>"${reflection}"</em><br><br>
                Your words join the eternal conversation about truth, certainty, and the mysteries that define us.
            </span>
        `;
    }
}

function restartCurrentLoop() {
    if (confirm("Restart this loop to explore different paths and gain new insights?")) {
        playSound('restart_loop');
        location.reload();
    }
}

function reviewMissedContent() {
    // This could open a modal or new section showing content they didn't see
    alert("Feature coming soon: Review content from different perspectives to deepen your understanding.");
}

function displayError(message) {
    contentDisplayArea.innerHTML = `<div class="error-container"><h3>Error</h3><p>${message}</p></div>`;
    houseCommentary.innerHTML = "<span class='glitch-text'>The House: An anomaly in the fabric of reality has been detected...</span>";
    nextButton.style.display = 'none';
}

// --- Enhanced Game Initialization ---
function initializeGame() {
    logDebug("Initializing Enhanced Ozzyrabbit Experience...");

    // Enhanced initialization
    sessionStartTime = Date.now();
    contentHistory = [];
    streakCount = 0;
    perfectAnswers = 0;
    
    assignContentPool();
    updateThematicStyling();
    
    // Check if returning visitor
    const isReturningVisitor = localStorage.getItem('ozzyrabbit_return_visitor');
    if (isReturningVisitor) {
        houseCommentary.innerHTML = "<span class='glitch-text'>The House: Welcome back, seeker. The loops remember you...</span>";
    } else {
        houseCommentary.innerHTML = "<span class='glitch-text'>The House awaits your allegiance to begin this strange journey...</span>";
    }

    // Initialize displays
    updateDisplays();
    updateProgressDisplay();
    
    // Setup initial UI state
    setupInitialUIState();
    
    // Play mood-appropriate ambient sound
    const currentLoop = getCurrentLoopData();
    if (currentLoop) {
        setTimeout(() => playMoodSound(currentLoop.mood), 2000);
    }

    logDebug(`Enhanced game initialized for: ${getCurrentLoopData()?.titleIncludes || 'Unknown Loop'}`);
}

function setupInitialUIState() {
    if (preferenceSelection) preferenceSelection.classList.remove('hidden');
    if (contentDisplayArea) contentDisplayArea.innerHTML = '<p class="placeholder-text">Choose your perspective to begin this descent into mystery...</p>';
    if (nextButton) nextButton.style.display = 'none';
    if (unlockStatus) unlockStatus.classList.add('hidden');
    
    // Update loop display
    if (currentLoopDisplay && progressIndicator) {
        const currentLoop = getCurrentLoopData();
        const progress = getLoopProgress();
        currentLoopDisplay.textContent = currentLoop ? currentLoop.titleIncludes : 'Unknown Loop';
        progressIndicator.innerHTML = `
            <div class="progress-text">
                Loop: <span id="current-loop">${currentLoop?.titleIncludes || 'Unknown'}</span> (${progress.current}/${progress.total})
            </div>
        `;
    }
}

function startGameLoop() {
    logDebug(`Starting enhanced game loop with perspective: ${chosenPerspective}`);

    if (preferenceSelection) preferenceSelection.classList.add('hidden');
    if (contentDisplayArea) contentDisplayArea.classList.remove('hidden');
    if (nextButton) nextButton.style.display = 'block';

    // Welcome message based on chosen perspective
    const welcomeMessages = {
        'lone_gunman': "The House: You have chosen the path of official truth. Let us examine the evidence that supports this narrative...",
        'conspiracy_theory': "The House: You have chosen to question the official story. Let us explore the shadows and contradictions..."
    };

    houseCommentary.innerHTML = `<span class='glitch-text'>${welcomeMessages[chosenPerspective] || 'The House: Your journey begins...'}</span>`;
    
    setTimeout(displayRandomContent, 2000); // Slight delay for dramatic effect
}

// --- Enhanced Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    logDebug("DOM Content Loaded - Initializing Enhanced Experience");
    initializeGame();

    if (chooseLgButton) {
        chooseLgButton.addEventListener('click', () => {
            logDebug("Lone Gunman Theory selected");
            chosenPerspective = 'lone_gunman';
            chooseLgButton.classList.add('selected');
            chooseCtButton.classList.add('dimmed');
            playSound('select_perspective');
            setTimeout(startGameLoop, 1500);
        });
    }

    if (chooseCtButton) {
        chooseCtButton.addEventListener('click', () => {
            logDebug("Conspiracy Theory selected");
            chosenPerspective = 'conspiracy_theory';
            chooseCtButton.classList.add('selected');
            chooseLgButton.classList.add('dimmed');
            playSound('select_perspective');
            setTimeout(startGameLoop, 1500);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', displayRandomContent);
    }

    // Keyboard shortcuts for power users
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (nextButton.style.display !== 'none') {
                e.preventDefault();
                displayRandomContent();
            }
        }
    });
});

// --- Enhanced Error Handling ---
window.addEventListener('error', (e) => {
    console.error(`[OZZYRABBIT ERROR] ${e.message} at ${e.filename}:${e.lineno}`);
    if (houseCommentary) {
        houseCommentary.innerHTML = "<span class='glitch-text'>The House: A glitch in the matrix of reality has been detected. The truth becomes more elusive...</span>";
    }
});

// --- Enhanced Debug Interface ---
if (typeof window !== 'undefined') {
    window.ozzyrabbitDebug = {
        // Basic info
        getCurrentLoopData,
        getLoopProgress,
        loopOrder,
        
        // Scores and beliefs
        userScore: () => userScore,
        beliefs: () => ({ lg: loneGunmanBeliefScore, ct: conspiracyBeliefScore }),
        preference: () => currentImplicitPreference,
        
        // Enhanced debugging
        sessionStats: () => ({
            sessionTime: Date.now() - sessionStartTime,
            contentShown,
            maxContentToShow,
            streakCount,
            perfectAnswers,
            contentHistory
        }),
        
        // Admin functions
        addScore: (points) => { userScore += points; updateDisplays(); },
        skipToEnd: () => { contentShown = maxContentToShow; handleEndOfLoop(); },
        revealContent: () => console.table(currentContentPool.map((item, i) => ({
            index: i,
            type: item.type,
            stance: item.stance,
            value: item.value
        }))),
        
        // Fun functions
        setMood: (mood) => playMoodSound(mood),
        triggerGlitch: () => {
            document.body.style.filter = 'hue-rotate(180deg) invert(1)';
            setTimeout(() => document.body.style.filter = '', 1000);
        }
    };
}