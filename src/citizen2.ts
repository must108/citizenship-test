async function Questioning2(){
    quizElem.style.opacity = '1';
    quizWrapper.style.opacity = '1';
    try {
        let random = randNum(100);
        if(questionArray.indexOf(random) !== -1){
            random = randNum(100);
        } else {
            questionArray.push(random);
        }
        getURL = `http://localhost:3000/getting?questionId=` + random;
        questionID = random;
        let data = await fetchData(getURL);
        displayQuestion(data);
        questCounter += 1;
        if(questCounter > 10){
            p1.textContent = `you scored ${correctAns}/10!`;
            if(correctAns >= 6){
                p2.style.color = '#afd47b';
                p2.textContent = `you passed!`;
            } else {
                p2.style.color = '#c7555f';
                p2.textContent = `you almost had it!`;
            }
            endGame();
        } else {
            pagChecking(questCounter);
        }
    } catch (err) {
        console.log('error during questioning: ' + err);
    }
}

function pagChecking2(num: number){
    paginationItems.forEach(item => {
        const itemNum = parseInt(item.getAttribute('data-question')!);
        if(itemNum === num){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function startMenu2(){
    menu_wrap.style.zIndex = '4';
    main_wrap.style.zIndex = '5';
    main_wrap.style.transform = OG_TransformMain;
    gameEndElem.style.transform = 'translateX(-300px)';

    setTimeout(() => {
        gameEndElem.style.transform = 'translateX(2000px)';
        quizWrapper.style.zIndex = '2';
        quizElem.style.zIndex = '2';
        gameEndElem.style.zIndex = '-1';
    }, 800);

    setTimeout(() => {
        quizElem.style.opacity = '0';
    });

    setTimeout(() => {
        gameEndElem.style.opacity = '0';
    }, 1900);

    setTimeout(() => {
        gameEndElem.style.transform = OG_TransformEnd;
    }, 2900);

    setTimeout(() => {
        main_wrap.style.opacity = '1';
        main_header.style.opacity = '1';
        main_header.style.transform = 'translateY(0px)';
        setTimeout(() => {
            main_button.style.opacity = '1';
            main_button.style.transform = 'translateY(0px)';
        }, 1000);
    }, 1000);
}

function checkAns2(){
    let val = questInput.value;
    getAnswer(val.toLowerCase());
}

function endGame2(){
    quizWrapper.style.zIndex = '0';
    quizElem.style.zIndex = '0';
    quizElem.style.opacity = '0';
    gameEndElem.style.zIndex = '7';
    endGameBox.style.transform = 'translateY(0)';
    gameEndElem.style.opacity = '1';
    questInput.disabled = true;
    questionArray = [];
}

function goAgain2(){
    gameEndElem.style.transform = 'translateX(300px)';
    setTimeout(() => {
        gameEndElem.style.transform = 'translateX(-2000px)';
    }, 800);
    setTimeout(() => {
        gameEndElem.style.opacity = '0';
    }, 1900);
    setTimeout(() => {
        quizWrapper.style.zIndex = '2';
        quizElem.style.zIndex = '2';
        gameEndElem.style.zIndex = '-1';
    }, 2000);
    setTimeout(() => {
        gameEndElem.style.transform = OG_TransformEnd;
        endGameBox.style.transform = 'translateY(-10px)';
    }, 3000);
    quizWrapper.style.opacity = '1';
    quizElem.style.opacity = '1';
    questInput.disabled = false;
    questCounter = 0;
    correctAns = 0;
    Questioning();
}

async function getAnswer2(answer: string){
    let counter = 0;
    try {
        let url = `http://localhost:3000/getans?questionId=` + questionID;

        let data = await fetchData(url);

        for(let i = 0; i < data.length; i++){
            if(answer === data[i].answer){
                Questioning();
                displayStat('correct');
                correctAns += 1;
                setTimeout(() => {
                    stat1.style.backgroundColor = 'transparent';
                    stat1.style.opacity = '0';
                }, 1200);
                questInput.value = "";
                counter = 1;
            } 
        }
        if(counter === 0){
            displayStat('wrong');
            setTimeout(() => {
                stat1.style.backgroundColor = 'transparent';
                stat1.style.opacity = '0';
            }, 1200);
        }
    } catch (err) {
        console.log('error during check answer: ' + err);
    }
}

const fetchData2 = async (url: any) => {
    try {
        let response = await fetch(url);
        
        if(!response.ok){
            throw new Error('response not ok');
        }

        let data = await response.json();
        console.log('data fetched');
        return data;
    } catch (err) {
        console.log('error fetching data ' + err);
        throw err;
    }
};

function displayQuestion2(data: any){
    const question = (data[0].question).toLowerCase();
    questDisplay.textContent = question;
    questDisplay.style.opacity = '1';
}

function randNum2(max: number): number {
    return Math.floor(Math.random() * max) + 1;
}

function displayStat2(ans: string){
    if(ans === 'correct'){
        stat1.style.backgroundColor = '#7bd4a0';
        stat1.textContent = '✅ correct!';
    } else if (ans === 'wrong'){
        stat1.style.backgroundColor = '#d47b83';
        stat1.textContent = '❌ wrong!';
    }
    stat1.style.opacity = "1";
}

document.addEventListener("keydown", e => {
    if(e.key === 'Enter'){
        e.preventDefault()
        checkAns();
    }
});

document.addEventListener("submit", e => {
    e.preventDefault();
    checkAns();
});

document.addEventListener('questEvent', e => {
    e.preventDefault();
    questCounter = 0;
    correctAns = 0;
    gameEndElem.style.opacity = '0';
    quizWrapper.style.zIndex = '2';
    quizElem.style.zIndex = '2';
    gameEndElem.style.zIndex = '-1';
    quizElem.style.opacity = '1';
    gameEndElem.style.transform = OG_TransformEnd;
    endGameBox.style.transform = 'translateY(-10px)';
    questInput.disabled = false;
    Questioning();
});

const questDisplay2 = document.getElementById("question")!;
const questInput2 = document.getElementById("input")! as HTMLInputElement;
const stat12 = document.getElementById("status")!;
const paginationItems2 = document.querySelectorAll('#pagination div')!;
const endGameBox2 = document.getElementById("gameendbox")!;
const gameEndElem2 = document.getElementById("gameend")!
const quizElem2 = document.getElementById("quizcol")!;
const quizWrapper2 = document.getElementById("quizwrapper")!;
const main_wrap2 = document.getElementById("mainwrap")!;
const menu_wrap2 = document.getElementById("menuwrap")!;
const main_header2 = document.getElementById("mainhead")!;
const p12 = document.getElementById("p-1")!;
const p22 = document.getElementById("p-2")!;
const main_button2 = document.getElementById("mainbutton")!;
const OG_TransformMain2 = main_wrap.style.transform;
const OG_TransformEnd2 = gameEndElem.style.transform;
let getURL2 = 'http://localhost:3000/getting';
let questionID2: number;
let questCounter2 = 0;
let correctAns2 = 0;
let questionArray2: number[] = [];
