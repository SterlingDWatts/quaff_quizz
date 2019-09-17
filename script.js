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