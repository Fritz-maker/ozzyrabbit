// Enhanced OzzyRabbit Game Logic with Fixed FRONTIER Navigation
// FIXED: FRONTIER hub navigation only appears after final loop (6/6)

// Enhanced debugging with console prefixes
function logDebug(message) {
    console.log(`[OZZYRABBIT] ${message}`);
}

function playSound(soundName) {
    logDebug(`[AUDIO PLACEHOLDER] Would play sound: ${soundName}`);
}

function playMoodSound(mood) {
    logDebug(`[AUDIO PLACEHOLDER] Would play mood sound: ${mood}_ambient for mood: ${mood}`);
}

// --- Enhanced Loop Configuration ---
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
let currentStreak = 0;
let contentShown = 0;
let sessionStartTime = Date.now();
let chosenPerspective = null;

// Enhanced DOM element references
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

// Enhanced initialization when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    logDebug('DOM Content Loaded - Initializing Enhanced Experience');
    initializeEnhancedOzzyrabbit();
});

// --- Enhanced Utility Functions ---
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
function initializeEnhancedOzzyrabbit() {
    logDebug('Initializing Enhanced Ozzyrabbit Experience...');
    
    // Assign appropriate content pool based on current page
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

    logDebug(`Content pool assigned: ${currentContentPool.length} items. Max to show: ${Math.min(8, currentContentPool.length)}`);
    
    // Apply thematic styling
    updateThematicStyling();
    
    // Setup button event listeners with enhanced feedback
    if (chooseLgButton) {
        chooseLgButton.addEventListener('click', function() {
            chosenPerspective = 'lone_gunman';
            logDebug('Lone Gunman perspective selected');
            playSound('select_perspective');
            startEnhancedGameLoop('lone_gunman');
        });
    }

    if (chooseCtButton) {
        chooseCtButton.addEventListener('click', function() {
            chosenPerspective = 'conspiracy_theory';
            logDebug('Conspiracy Theory selected');
            playSound('select_perspective');
            startEnhancedGameLoop('conspiracy_theory');
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', continueEnhancedGame);
    }
    
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
    // Initialize displays
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

// --- Enhanced Content Balancing ---
function balanceContentByPreference(pool, preference) {
    const balanced = [...pool];
    const preferenceWeight = preference === 'lone_gunman' ? 'lg' : 'ct';
    
    // Shuffle and ensure good distribution
    for (let i = balanced.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [balanced[i], balanced[j]] = [balanced[j], balanced[i]];
    }
    
    return balanced;
}

// --- Enhanced Game Loop ---
function startEnhancedGameLoop(perspective) {
    logDebug(`Starting enhanced game loop with perspective: ${perspective}`);
    
    // Reset game state
    userScore = 0;
    loneGunmanBeliefScore = 0;
    conspiracyBeliefScore = 0;
    currentStreak = 0;
    contentShown = 0;
    sessionStartTime = Date.now();
    
    // Hide perspective buttons
    if (chooseLgButton) chooseLgButton.style.display = 'none';
    if (chooseCtButton) chooseCtButton.style.display = 'none';
    
    // Start the content flow
    continueEnhancedGame();
}

function continueEnhancedGame() {
    const maxItems = Math.min(8, currentContentPool.length);
    
    if (contentShown >= maxItems) {
        handleEndOfLoop();
        return;
    }

    // Select and display next content item
    const contentItem = getNextBalancedContent();
    if (contentItem) {
        displayEnhancedContent(contentItem);
        contentShown++;
        
        logDebug(`Displaying: ${contentItem.type} (${contentItem.perspective || 'neutral'}) - ${contentShown}/${maxItems}`);
    } else {
        handleEndOfLoop();
    }
}

function getNextBalancedContent() {
    if (currentContentPool.length === 0) return null;
    
    // Enhanced selection logic for better content flow
    const index = Math.floor(Math.random() * currentContentPool.length);
    return currentContentPool.splice(index, 1)[0];
}

function displayEnhancedContent(contentItem) {
    if (!contentItem) return;
    
    const contentHtml = generateContentHtml(contentItem);
    contentDisplayArea.innerHTML = contentHtml;
    
    if (contentItem.type === 'tf_question') {
        setupQuestionInteraction(contentItem);
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
        // Auto-score factoids
        if (contentItem.type === 'factoid') {
            setTimeout(() => {
                updateScore(15, 'factoid_reveal');
                playSound('reveal_factoid');
            }, 1000);
        }
    }
}

function generateContentHtml(contentItem) {
    const typeClass = `content-${contentItem.type}`;
    const perspectiveClass = contentItem.perspective ? `perspective-${contentItem.perspective}` : '';
    
    if (contentItem.type === 'tf_question') {
        return `
            <div class="content-item ${typeClass} ${perspectiveClass}">
                <h3>${contentItem.text}</h3>
                <div class="tf-buttons">
                    <button class="tf-btn" data-answer="true">TRUE</button>
                    <button class="tf-btn" data-answer="false">FALSE</button>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="content-item ${typeClass} ${perspectiveClass}">
                <h3>${contentItem.text}</h3>
                ${contentItem.details ? `<p class="content-details">${contentItem.details}</p>` : ''}
            </div>
        `;
    }
}

function setupQuestionInteraction(contentItem) {
    const tfButtons = document.querySelectorAll('.tf-btn');
    tfButtons.forEach(button => {
        button.addEventListener('click', function() {
            const userAnswer = this.dataset.answer === 'true';
            handleAnswer(userAnswer, contentItem.correct_answer, contentItem.perspective);
            
            // Disable buttons after answer
            tfButtons.forEach(btn => btn.disabled = true);
            this.classList.add('selected');
            
            // Show next button after brief delay
            setTimeout(() => {
                nextButton.style.display = 'block';
            }, 1500);
        });
    });
}

function handleAnswer(userAnswer, correctAnswer, perspective) {
    const isCorrect = userAnswer === correctAnswer;
    const points = calculatePoints(isCorrect);
    
    logDebug(`Answer: ${userAnswer} vs ${correctAnswer} = ${isCorrect ? 'Correct' : 'Incorrect'}`);
    
    updateScore(points, isCorrect ? 'correct_answer' : 'incorrect_answer');
    updateBeliefScores(perspective, isCorrect);
    updateStreak(isCorrect);
    
    // Enhanced visual feedback
    showAnswerFeedback(isCorrect, points);
    playSound(isCorrect ? 'correct_answer' : 'incorrect_answer');
}

function calculatePoints(isCorrect) {
    const basePoints = isCorrect ? 15 : 10;
    const streakBonus = Math.min(currentStreak * 2, 10);
    return basePoints + streakBonus;
}

function updateScore(points, reason) {
    userScore += points;
    logDebug(`Score: ${Math.floor(userScore)} (+${points}), Streak: ${currentStreak}, Preference: ${getImplicitPreference()}`);
}

function updateBeliefScores(perspective, isCorrect) {
    if (perspective === 'lone_gunman' && isCorrect) {
        loneGunmanBeliefScore += 10;
    } else if (perspective === 'conspiracy_theory' && isCorrect) {
        conspiracyBeliefScore += 10;
    }
}

function updateStreak(isCorrect) {
    if (isCorrect) {
        currentStreak++;
    } else {
        currentStreak = 0;
    }
}

function showAnswerFeedback(isCorrect, points) {
    const feedback = document.createElement('div');
    feedback.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = `${isCorrect ? 'Correct!' : 'Incorrect'} +${points} points`;
    
    contentDisplayArea.appendChild(feedback);
    
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.remove();
        }
    }, 2000);
}

function getImplicitPreference() {
    if (loneGunmanBeliefScore > conspiracyBeliefScore) return 'trusting';
    if (conspiracyBeliefScore > loneGunmanBeliefScore) return 'questioning';
    return 'balanced';
}

function getPreferenceDescription() {
    const preference = getImplicitPreference();
    const descriptions = {
        'trusting': 'Seeking Balance Between Views',
        'questioning': 'Questioning Official Narratives', 
        'balanced': 'Seeking Balance Between Views'
    };
    return descriptions[preference] || 'Exploring Multiple Perspectives';
}

// --- Enhanced End of Loop Logic ---
function handleEndOfLoop() {
    const currentLoopData = getCurrentLoopData();
    if (!currentLoopData) {
        displayError("Could not identify current loop for completion processing.");
        return;
    }

    // Calculate session statistics
    const sessionDuration = Date.now() - sessionStartTime;
    const perfectAnswers = Math.floor(userScore / 15); // Rough estimate
    const accuracyRate = perfectAnswers / Math.max(1, contentShown) * 100;

    // FIXED: Basic completion screen WITHOUT FRONTIER navigation
    // FRONTIER navigation only appears when isFinal is true
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
                    <div class="stat-value">${Math.floor(sessionDuration / 60000)}m</div>
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
                    <p>In this space beyond certainty, consciousness observes itself observing, and truth becomes a horizon that recedes infinitely.</p>
                </div>
                
                <div class="completion-actions">
                    <button onclick="returnToBeginning()" class="begin-again-btn">🔄 Investigate Again</button>
                    <a href="https://unity-loops.com/hub" class="explore-all-loops">
                        🏛️ Explore All 6 Consciousness Loops
                    </a>
                </div>
                
                <div class="frontier-motto">
                    <p>"It\'s Loops All the Way Down"</p>
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
            Are you prepared to descend deeper into the labyrinth of truth?
        </span>
    `;

    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="unlock-success">
                <h3>🔓 PATHWAY ILLUMINATED</h3>
                <p class="unlock-message">${nextLoopData.titleIncludes}</p>
                <p class="unlock-description">${nextLoopData.description}</p>
                
                <p><strong>Mood:</strong> ${nextLoopData.mood.toUpperCase()}</p>
                <p>Your journey into the labyrinth of truth continues...</p>
                
                <a href="${nextLoopData.file}" class="next-loop-btn">🚪 ENTER ${nextLoopData.titleIncludes.toUpperCase()}</a>
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
            The House: Your insight level (${Math.floor(userScore)} points) falls short of the threshold required for "${nextLoopData.titleIncludes}" (${unlockThreshold} needed).
            <br><br>
            You need ${Math.ceil(pointsNeeded)} more points to unlock the next mystery.
            <br><br>
            ${suggestionText}
        </span>
    `;

    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="unlock-failed">
                <h3>🔒 PATH REMAINS SEALED</h3>
                <p class="failure-message">Insufficient insight to access "${nextLoopData.titleIncludes}"</p>
                <p class="points-needed">Need ${Math.ceil(pointsNeeded)} more points</p>
                
                <button onclick="returnToBeginning()" class="retry-btn">🔄 Try Again</button>
            </div>
        `;
    }
    
    playSound('unlock_failed');
}

function generatePersonalizedSuggestion() {
    const preference = getImplicitPreference();
    const suggestions = {
        'trusting': "Consider questioning some official narratives more deeply.",
        'questioning': "Try engaging more seriously with the official evidence.",
        'balanced': "Continue your balanced approach, but dig deeper into the nuances."
    };
    return suggestions[preference] || "Approach each piece of evidence with fresh eyes.";
}

// --- Utility Functions ---
function returnToBeginning() {
    location.reload();
}

function displayError(message) {
    contentDisplayArea.innerHTML = `<div class="error-message">Error: ${message}</div>`;
    logDebug(`Error: ${message}`);
}
