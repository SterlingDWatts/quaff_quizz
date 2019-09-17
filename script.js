// setTimeout() call a function in x 
// setInterval() call a function every x seconds
// use lambda for one line, doesn't need {}
// look into promises
// Create variables for your Jquery objects that you use alot
//   e.g. const header = $('h1')

const QUIZ = [
    {
        id: cuid(), 
        question: "When does pressing typically occur during red wine production?", 
        answers: [
            {id: cuid(), answer: "At or near the end of fermentation.", correct: true},
            {id: cuid(), answer: "As soon as they arrive.", correct: false},
            {id: cuid(), answer: "After a brief maceration on the skins.", correct: false},
            {id: cuid(), answer: "After fermentation.", correct: false}
        ],
        explanation: "Pressing occurs in red wine at or near the end of fermentation. The pressed juice may be blended immediately with the free-run juice, aged separately for blending later, or bottled on its own. Some wineries may not use press wine at all because it differs from free-run juice in terms of tannins, acidity, and flavor due to its extended contact with skins, seeds, and/or stems.",
        seenCount: 0,
        correctCount: 0,
        category: "winemaking"
    },
    {
        id: cuid(), 
        question: "Besides ethyl alcohol, what are two byproducts of primary fermentation?", 
        answers: [
            {id: cuid(), answer: "Carbon Dioxide and heat.", correct: true},
            {id: cuid(), answer: "Sulfur Dioxide and Lactic Acid.", correct: false},
            {id: cuid(), answer: "Lactic Acid and Carbon Dioxide.", correct: false},
            {id: cuid(), answer: "Malic Acid and heat.", correct: false}
        ],
        explanation: "When there is little to no sugar left to convert, fermentation is over and the resulting wine is considered dry. Fermentation may also be stopped prematurely. Other byproducts to fermentation are carbon dioxide (CO2) and heat.",
        seenCount: 0,
        correctCount: 0,
        category: "winemaking"
    },
    {
        id: cuid(), 
        question: "What is malolactic fermentation?", 
        answers: [
            {id: cuid(), answer: "Converts Malic acid into Lactic Acid.", correct: true},
            {id: cuid(), answer: "Converts Malic acid into Tartaric Acid.", correct: false},
            {id: cuid(), answer: "Converts Malic acid into Amino Acid.", correct: false},
            {id: cuid(), answer: "Converts Malic acid into Citric Acid.", correct: false}
        ],
        explanation: "Most red and some white wines will also go through a second process called malolactic fermentation (MLF or malo), either during or after the primary fermentation. Caused by a lactic acid bacteria, malolactic fermentation converts the tart, natural malic acid in grapes (present in green apples) to a softer, rounder lactic acid (present in dairy). This can happen naturally but is often initiated through the inoculation of bacteria. The amount of conversion of malic to lactic acid can be anywhere from 1 to 100 percent. In white wines, malolactic fermentation is most common in Chardonnay, but the process can be used with any grape. Its effect, noted in mouthfeel, texture, and weight, ranges from subtle to dramatic, depending on how the technique is employed.",
        seenCount: 0,
        correctCount: 0,
        category: "winemaking"
    },
    {
        id: cuid(), 
        question: "Name the two most common types of oak used for barrels.", 
        answers: [
            {id: cuid(), answer: "French and American oak.", correct: true},
            {id: cuid(), answer: "French and Hungarian oak.", correct: false},
            {id: cuid(), answer: "American and Hungarian oak.", correct: false},
            {id: cuid(), answer: "Slovenian and Hungarian oak.", correct: false}
        ],
        explanation: "France and the United States are key sources for oak barrels, but barrels also come from Hungary, Slovenia, and other European countries. France and the US rely on different oak species and production techniques, and the resulting barrels can impart distinct aromas. Winemakers may also opt for other aging vessels for less flavor impact, including stainless steel, concrete, and glass.",
        seenCount: 0,
        correctCount: 0,
        category: "winemaking"
    },
    {
        id: cuid(), 
        question: "What is the primary role of sulfur dioxide in winemaking?", 
        answers: [
            {id: cuid(), answer: "To protect wine from oxygen.", correct: true},
            {id: cuid(), answer: "To kill unwanted bacteria.", correct: false},
            {id: cuid(), answer: "To precipitate out solids.", correct: false},
            {id: cuid(), answer: "To prevent malolactic fermentation.", correct: false}
        ],
        explanation: "Sulfur dioxide is added at various points during the winemaking process, most often during fermentation and maturation, and before bottling. Sulfur has the preservative qualities needed to protect wine from oxygen. But too much SO2 may result in excess hydrogen sulfide, which leads to a rotten egg aroma. This can be so intense in a young wine that decanting is warranted. Avoiding sulfur usage entirely, however, which is common among natural wine proponents, can lead to premature spoilage.",
        seenCount: 0,
        correctCount: 0,
        category: "winemaking"
    },



    {
        id: cuid(), 
        question: "How many AVAs are there in Sonoma County?", 
        answers: [
            {id: cuid(), answer: "18", correct: true},
            {id: cuid(), answer: "17", correct: false},
            {id: cuid(), answer: "16", correct: false},
            {id: cuid(), answer: "13", correct: false}
        ],
        explanation: "Situated within the broader North Coast AVA, Sonoma County is divided into 18 sub-AVAs, several overlapping and a handful extending beyond county lines.",
        seenCount: 0,
        correctCount: 0,
        category: "california"
    },
    {
        id: cuid(), 
        question: "Which northern Sonoma appellation is famous for old-vine Zinfandel?", 
        answers: [
            {id: cuid(), answer: "Dry Creek Valley", correct: true},
            {id: cuid(), answer: "Rockpile", correct: false},
            {id: cuid(), answer: "Knights Valley", correct: false},
            {id: cuid(), answer: "Alexander Valley", correct: false}
        ],
        explanation: "Dry Creek Valley has been associated with old-vine Zinfandel as far back as the late 19th century, and many head-trained vines planted during that era continue producing fruit.",
        seenCount: 0,
        correctCount: 0,
        category: "california"
    },
    {
        id: cuid(), 
        question: "Which AVA was the first in Sonoma County?", 
        answers: [
            {id: cuid(), answer: "Sonoma Valley", correct: true},
            {id: cuid(), answer: "Sonoma Mountain", correct: false},
            {id: cuid(), answer: "Northern Sonoma", correct: false},
            {id: cuid(), answer: "Sonoma Coast", correct: false}
        ],
        explanation: "Sonoma Valley AVA was the first appellation in the county. Since it was established in 1981, the Bennett Valley, Sonoma Mountain, Moon Mountain District, and a portion of Carneros have been carved out from within its boundaries. In this valley, formed by the Sonoma and Mayacamas Mountains, breezes from the Pacific and the San Pablo Bay unite to cool vineyards on either end. Chardonnay is the Sonoma Valley’s most planted grape, and the appellation also boasts old Cabernet Sauvignon and Zinfandel vines.",
        seenCount: 0,
        correctCount: 0,
        category: "california"
    },
    {
        id: cuid(), 
        question: "Name the oldest continuously operating winery in California.", 
        answers: [
            {id: cuid(), answer: "Buena Vista", correct: true},
            {id: cuid(), answer: "Albini", correct: false},
            {id: cuid(), answer: "Moshin", correct: false},
            {id: cuid(), answer: "De La Montanya", correct: false}
        ],
        explanation: "Buena Vista, California’s oldest continuously operating winery, was established in 1857.",
        seenCount: 0,
        correctCount: 0,
        category: "california"
    },
    {
        id: cuid(), 
        question: "What is the most planted grape in Sonoma?", 
        answers: [
            {id: cuid(), answer: "Pinot Noir", correct: true},
            {id: cuid(), answer: "Chardonnay", correct: false},
            {id: cuid(), answer: "Cabernet", correct: false},
            {id: cuid(), answer: "Zinfandel", correct: false}
        ],
        explanation: "Pinot Noir is Sonoma’s most planted red grape, its history in the area beginning as early as the 1880s. The Russian River Valley helped make the grape one of California’s most popular and continues to bottle juicy, round examples. In the far west vineyards of the Sonoma Coast, Pinot Noir can achieve leaner expressions with lower levels of alcohol, characterized by floral aromas and pure berry flavors. Along with Chardonnay, Pinot Noir forms the backbone of Sonoma’s sparkling wines.",
        seenCount: 0,
        correctCount: 0,
        category: "california"
    },


    {
        id: cuid(), 
        question: "What is the primary role of sulfur dioxide in winemaking?", 
        answers: [
            {id: cuid(), answer: "To protect wine from oxygen.", correct: true},
            {id: cuid(), answer: "To kill unwanted bacteria.", correct: false},
            {id: cuid(), answer: "To precipitate out solids.", correct: false},
            {id: cuid(), answer: "To prevent malolactic fermentation.", correct: false}
        ],
        explanation: "Sulfur dioxide is added at various points during the winemaking process, most often during fermentation and maturation, and before bottling. Sulfur has the preservative qualities needed to protect wine from oxygen. But too much SO2 may result in excess hydrogen sulfide, which leads to a rotten egg aroma. This can be so intense in a young wine that decanting is warranted. Avoiding sulfur usage entirely, however, which is common among natural wine proponents, can lead to premature spoilage.",
        seenCount: 0,
        correctCount: 0,
        category: "winemaking"
    },
    {
        id: cuid(), 
        question: "Name the three most important red grape varieties in Bordeaux.", 
        answers: [
            {id: cuid(), answer: "Cabernet Sauvignon, Merlot, and Cabernet Franc.", correct: true},
            {id: cuid(), answer: "Merlot, Malbec, and Petite Verdot.", correct: false},
            {id: cuid(), answer: "Cabernet Sauvignon, Carmenere, and Cabernet Franc.", correct: false},
            {id: cuid(), answer: "Malbec, Petite Verdot, and Cabernet Franc", correct: false}
        ],
        explanation: "The traditional recipe for Left Bank wines calls for a Cabernet Sauvignon-dominant blend, with lesser amounts of Merlot and/or Cabernet Franc. A small percentage of Petit Verdot may be added for exotic seasoning. On the Right Bank, Merlot and Cabernet Franc are the dominant grapes, as growers historically had diculty ripening Cabernet Sauvignon in its colder clay soils. Malbec and Carmenère are rare in modern Bordeaux.",
        seenCount: 0,
        correctCount: 0,
        category: "france"
    },
    {
        id: cuid(), 
        question: "What soil in Bordeaux is most suitable for Cabernet Sauvignon?", 
        answers: [
            {id: cuid(), answer: "Gravel", correct: true},
            {id: cuid(), answer: "Clay", correct: false},
            {id: cuid(), answer: "Sand", correct: false},
            {id: cuid(), answer: "Silt", correct: false}
        ],
        explanation: "In the early 17th century, Dutch tradesmen and engineers arrived to drain the marshes, revealing great beds of gravel that would become the preeminent home for Cabernet Sauvignon in France, and the world.",
        seenCount: 0,
        correctCount: 0,
        category: "france"
    },
    {
        id: cuid(), 
        question: "What is Botrytis cinerea?", 
        answers: [
            {id: cuid(), answer: "A mold that attacks grapes and dehydrates them.", correct: true},
            {id: cuid(), answer: "A mildew that creates puntures which allows moisture to escape.", correct: false},
            {id: cuid(), answer: "A fungus that feeds on the sugar of grapes", correct: false},
            {id: cuid(), answer: "A mushroom that adds earthy charectoristics to nearby grapes.", correct: false}
        ],
        explanation: "In warm, humid, late summer afternoons the Botrytis cinerea (“noble rot”) mold attacks the thin-skinned grapes, dehydrating them.",
        seenCount: 0,
        correctCount: 0,
        category: "france"
    },
    {
        id: cuid(), 
        question: "In what year were the wines of the Medoc first classied?", 
        answers: [
            {id: cuid(), answer: "1855", correct: true},
            {id: cuid(), answer: "1937", correct: false},
            {id: cuid(), answer: "1782", correct: false},
            {id: cuid(), answer: "1812", correct: false}
        ],
        explanation: "Bordeaux’s most famous, enduring, and debated classication dates to 1855. Napoléon III commissioned a ranking of Bordeaux’s top châteaux in advance of the Universal Exposition in Paris, a cultural celebration that would draw tourists from across Europe and the globe.",
        seenCount: 0,
        correctCount: 0,
        category: "france"
    },
    {
        id: cuid(), 
        question: "What is the primary grape in Sauternes?", 
        answers: [
            {id: cuid(), answer: "Semillon", correct: true},
            {id: cuid(), answer: "Sauvignon Blanc", correct: false},
            {id: cuid(), answer: "Cabernet Sauvignon", correct: false},
            {id: cuid(), answer: "Merlot", correct: false}
        ],
        explanation: "Sémillon is the dominant grape in the sweet wines of these regions, supported by Sauvignon Blanc and Muscadelle.",
        seenCount: 0,
        correctCount: 0,
        category: "france"
    }, 
    {
        id: cuid(), 
        question: "Where in Bordeaux is Pauillac located?", 
        answers: [
            {id: cuid(), answer: "Haut-Medoc", correct: true},
            {id: cuid(), answer: "Graves", correct: false},
            {id: cuid(), answer: "The Right Bank", correct: false},
            {id: cuid(), answer: "Entre-Deux-Mers", correct: false}
        ],
        explanation: "Saint-Estephe, Saint-Julien, Pauillac, and Margaux are within the Haut-Médoc and are benchmark appellations for Cabernet Sauvignon-based blends in Bordeaux.",
        seenCount: 0,
        correctCount: 0,
        category: "france"
    }, 



    {
        id: cuid(), 
        question: "What are the two main categories of vine-training methods?", 
        answers: [
            {id: cuid(), answer: "Head-Training and Cordon-Training.", correct: true},
            {id: cuid(), answer: "Vertical Shoot Positioning and Geneva.", correct: false},
            {id: cuid(), answer: "Geneva Double Curtain and Biliteral Cordon-training.", correct: false},
            {id: cuid(), answer: "Guyot and Spur pruned", correct: false}
        ],
        explanation: "Vine-training methods can be broken down into two major categories: head-training and cordon-training. Vines within the latter category require some form of support (tree, stake, pole, trellis, etc.) to brace them when they bear the additional weight of fruit",
        seenCount: 0,
        correctCount: 0,
        category: "viticulture"
    },
    {
        id: cuid(), 
        question: "What is the primary purpose of vine training and pruning?", 
        answers: [
            {id: cuid(), answer: "To prevent canes from growing new roots and protect grapes.", correct: true},
            {id: cuid(), answer: "To reduce canopy density to avoid underripe fruits.", correct: false},
            {id: cuid(), answer: "To protect grapes from birds.", correct: false},
            {id: cuid(), answer: "To aid in rot prevention.", correct: false}
        ],
        explanation: "To prevent canes from touching the ground and growing new roots while encouraging the canopy to develop and protect the grapes.",
        seenCount: 0,
        correctCount: 0,
        category: "viticulture"
    },
    {
        id: cuid(), 
        question: "What is veraison?", 
        answers: [
            {id: cuid(), answer: "Grapes begin ripening.", correct: true},
            {id: cuid(), answer: "Bud grows into green foliage.", correct: false},
            {id: cuid(), answer: "When the vine begins pushing energy up the vine after winter.", correct: false},
            {id: cuid(), answer: "When the bud makes it first push out of the vine.", correct: false}
        ],
        explanation: "Approximately 100 days after budbreak, grapes begin ripening as the vine transfers sugar from the leaves and shoot tips to the green, unripe clusters.",
        seenCount: 0,
        correctCount: 0,
        category: "viticulture"
    },
    {
        id: cuid(), 
        question: "Place the following events in order: fruit set, harvest, budbreak, weeping, and veraison.", 
        answers: [
            {id: cuid(), answer: "weeping, budbreak, fruit set, veraison, and harvest.", correct: true},
            {id: cuid(), answer: "fruit set, weeping, harvest, veraison, and budbreak.", correct: false},
            {id: cuid(), answer: "budbreak, weeping, veraison, fruit set, and harvest.", correct: false},
            {id: cuid(), answer: "budbreak, fruit set, veraison, harvest, and weeping.", correct: false}
        ],
        explanation: "The growing season can be broken down into several phases: weeping, budbreak, bloom, fruit set, veraison, and harvest. This season runs from April through October in the Northern Hemisphere and October through April in the Southern Hemisphere, with dormancy in the remaining months.",
        seenCount: 0,
        correctCount: 0,
        category: "viticulture"
    }, 
    {
        id: cuid(), 
        question: "What is a mesoclimate?", 
        answers: [
            {id: cuid(), answer: "The climate of an overarching region.", correct: true},
            {id: cuid(), answer: "Zooms in to focus on the vineyard itself.", correct: false},
            {id: cuid(), answer: "Looks at the vine's canopy.", correct: false},
            {id: cuid(), answer: "The climate of the winery.", correct: false}
        ],
        explanation: "Mesoclimate zooms in to focus on the vineyard itself. Elevation, aspect, and shelter from the sun are key considerations. For example, vineyards with an east-facing exposure will receive more gentle morning sunlight and less intense afternoon sunlight than west-facing vineyards.",
        seenCount: 0,
        correctCount: 0,
        category: "viticulture"
    },
]


const questionOrder = []
const answerOrder = [0, 1, 2, 3]

let progress = 0
let correct = 0


// funtions for starting the quiz on the button press

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function shuffleAnswers() {
    // shuffle the answers
    const correctAnswerId = questionOrder[progress].answers[0].id;
    shuffle(answerOrder);
    return correctAnswerId
}

function shuffleQuestions(quizArray) {
    // shuffle the questions
    questionOrder.length = 0;
    const quizCopy = quizArray.slice();
    shuffle(quizCopy);
    let count = 0;
    quizCopy.forEach(questionObj => {
        if (count < 5) {
            questionOrder.push(questionObj);
        }
        count += 1;
    });
    progress = 0;
    correct = 0;
    const correctId = shuffleAnswers();
    $('.numOfQuestions').text('/' + questionOrder.length);
    return correctId
}

function hideStartElements() {
    // hide the starting elements
    $('h1').fadeOut(200);
    $('.start').fadeOut(200)
    $('.topics-box').fadeOut(600)
}

function showQuestionElements() {
    // show the question elements
    $('form, .check-answer').fadeIn(600);
    $('.progress').fadeIn(400);
}

function insertQuestion(id) {
    // fill in the text for the questions and answers
    
    $('.question').text(questionOrder[progress].question);
    $('.answer blockquote').text(questionOrder[progress].explanation);
    $('.materialCovered').text(progress);
    $('.correctCount').text(correct);


    // for loop to fill in the possible answers and mark the correct one
    const answerClass = ['.ans-1', '.ans-2', '.ans-3', '.ans-4']
    for (let i = 0; i < answerOrder.length; i++) {
        const answerObj = questionOrder[progress].answers[answerOrder[i]]
        $(answerClass[i]).text(answerObj.answer);
        if (answerObj.id === id) {
            $(answerClass[i]).addClass('correctAnswer');
        }
    }
}

function handleStartClick() {
    // listens to see if the start button is clicked
    // runs the functions to start the quiz
    $('.start').on('click', function(event) {
        const id = shuffleQuestions(QUIZ);
        insertQuestion(id);
        hideStartElements();
        showQuestionElements();
    });
}


// functions for handling the check answer button to show results

function addWrong(chosenAnswer) {
    $('.correctOrNot h2').text('Incorrect');
    $(chosenAnswer).siblings('.fa-times').fadeIn(200);
    $(chosenAnswer).addClass('.strikeThrough');
}

function incrementProgress(num) {
    progress += 1;
    $('.materialCovered').text(progress);
    correct += num;
    $('.correctCount').text(correct);
}

function isRightOrWrong(chosenAnswer) {
    $('.correctAnswer').siblings('.fa-check').fadeIn(200);
    if ($(chosenAnswer).hasClass('correctAnswer') === true) {
        incrementProgress(1);
        $('.correctOrNot h2').text('Correct!');
    } else {
        incrementProgress(0);
        addWrong(chosenAnswer);
    }
}

function showAnswer() {
    $('input:radio').prop('checked', false);
    $('.make-a-choice').hide();
    $('form button').fadeOut(200);
    $('.answerOne, .answer').fadeIn(400);

}

function checkIfClicked(chosenAnswer) {
    if (typeof chosenAnswer === typeof 'yes') {
        isRightOrWrong(chosenAnswer);
        showAnswer();
    } else {
        $('.make-a-choice h2').text('Please make a choice!')
        $('.make-a-choice').fadeIn(200)
    }
}

function handleCheckClick() {
    $('.check-answer').on('click', function(event) {
        event.preventDefault();
        const answerClass = ['.ans-1', '.ans-2', '.ans-3', '.ans-4'];
        const chosenAnswer = answerClass[$('input:checked').val()];
        checkIfClicked(chosenAnswer);
    })
}


// functions to handle the next question/see results button

function hideAnswer() {
    // hides the correct/incorrect elements
    $('.answer, .answerOne, .fa-check, .fa-times').fadeOut(200);
    $('.correctAnswer').removeClass('correctAnswer');
}

function hideQuestion() {
    // hide question and answer elements
    hideAnswer();
    $('form').fadeOut(200);
}

function showNext() {
    // displays the next question
    hideAnswer();
    const id = shuffleAnswers();
    insertQuestion(id);
    showQuestionElements();
}

function showResults() {
    // goes to results
    hideQuestion();
    $('.results, .topics-box').fadeIn(200);
}

function showNextOrShowResults() {
    // checks if progress is equal to length of quiz (or 10)
    // runs functions to see next question or to go to results

    if (progress === questionOrder.length || progress === 5) {
        showResults();
    } else {
        showNext();
    }
}

function handleNextClick() {
    $('.next').on('click', function(event) {
        event.preventDefault();
        showNextOrShowResults();
    });
}


// functions to retake the quiz

function hideResults() {
    // hides the results
    $('.results, .topics-box').fadeOut(200);
}

function handleRetakeQuiz() {
    // listens for the button click and runs the necassary functions
    $('.newQuiz').on('click', function(event) {
        let id = shuffleQuestions(QUIZ);
        insertQuestion(id);
        hideResults();
        showQuestionElements();
    });
}


// functions to allow you to select a topic

function prepareQuiz(topic) {
    // takes in a topic and returns a quiz object 
    const topicQuiz = QUIZ.filter(question => question.category === topic)
    return topicQuiz
}

function handleTopicClick() {
    // listens for click and runs functions
    $('.topic').on('click', function(event) {
        const topic = $(this).text().toLowerCase().trim();
        const topicQuiz = prepareQuiz(topic);
        let id = shuffleQuestions(topicQuiz);
        insertQuestion(id);
        hideResults();
        hideStartElements();
        showQuestionElements();
    });
}

// functions to initialize necessary functions to listen for clicks

function handleQuiz() {
    // run the functions needed to start 
    
    handleStartClick();
    handleCheckClick();
    handleNextClick();
    handleRetakeQuiz();
    handleTopicClick();
}

$(handleQuiz);