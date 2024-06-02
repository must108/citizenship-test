const mainwrap = document.getElementById("mainwrap")!;
const OGTransformMain = mainwrap.style.transform;

mainwrap.style.transform = OGTransformMain;
setTimeout(() => {
    mainheader.style.opacity = '1';
    mainheader.style.transform = 'translateY(0px)';
    setTimeout(() => {
        mainbutton.style.opacity = '1';
        mainbutton.style.transform = 'translateY(0px)';
    }, 1000);
    setTimeout(() => {
        builtBy.style.opacity = '1';
    }, 1700);
}, 1000);

function StartGame(){
    mainwrap.style.transform = 'translateY(70px)';
    setTimeout(() => {
        mainwrap.style.transform = 'translateY(-600px)';
        setTimeout(() => {
            mainwrap.style.opacity = '0';
        }, 2500);
        setTimeout(() => {
            mainwrap.style.transform = OGTransformMain;
        }, 3000);
    }, 800);
    setTimeout(() => {
        mainwrap.style.zIndex = '-2';
        showMenu();
    }, 2000);
}

window.StartGame = StartGame;

function showMenu(){
    menuwrap.style.opacity = '1';
    setTimeout(() => {
        starting.style.opacity = '1';
        starting.style.transform = 'translateY(0)';
    }, 1000);
}

function startQuiz(){
    menuwrap.style.transform = 'translateX(300px)';
    setTimeout(() => {
        menuwrap.style.transform = 'translateX(-2000px)';
        setTimeout(() => {
            menuwrap.style.opacity = '0'; 
        }, 1000);
        setTimeout(() => {
            menuwrap.style.transform = OGTransformMenu;
        }, 3000);
    }, 800);
    setTimeout(() => {
        menuwrap.style.zIndex = '-3';
        game_EndElem.style.zIndex = '-1';
        game_EndElem.style.opacity = '0';
        quizWrap.style.opacity = '1';
        document.dispatchEvent(questEvent);
    }, 1000);
}

window.startQuiz = startQuiz;

const mainheader = document.getElementById("mainhead")!;
const mainbutton = document.getElementById("mainbutton")!;
const builtBy = document.getElementById("built")!;
const menuwrap = document.getElementById("menuwrap")!;
const infomenu = document.getElementById("infomenu")!;
const starting = document.getElementById("realstart")!;
const quizWrap = document.getElementById("quizwrapper")!;
const quiz_Elem = document.getElementById("quizcol")!;
const game_EndElem = document.getElementById("gameend")!
const questEvent = new Event('questEvent');
const OGTransformMenu = menuwrap.style.transform;
const OGTransformEnd = game_EndElem.style.transform;
