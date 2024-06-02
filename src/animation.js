var mainwrap = document.getElementById("mainwrap");
var OGTransformMain = mainwrap.style.transform;
mainwrap.style.transform = OGTransformMain;
setTimeout(function () {
    mainheader.style.opacity = '1';
    mainheader.style.transform = 'translateY(0px)';
    setTimeout(function () {
        mainbutton.style.opacity = '1';
        mainbutton.style.transform = 'translateY(0px)';
    }, 1000);
    setTimeout(function () {
        builtBy.style.opacity = '1';
    }, 1700);
}, 1000);
function StartGame() {
    mainwrap.style.transform = 'translateY(70px)';
    setTimeout(function () {
        mainwrap.style.transform = 'translateY(-600px)';
        setTimeout(function () {
            mainwrap.style.opacity = '0';
        }, 2500);
        setTimeout(function () {
            mainwrap.style.transform = OGTransformMain;
        }, 3000);
    }, 800);
    setTimeout(function () {
        mainwrap.style.zIndex = '-2';
        showMenu();
    }, 2000);
}
window.StartGame = StartGame;
function showMenu() {
    menuwrap.style.opacity = '1';
    setTimeout(function () {
        starting.style.opacity = '1';
        starting.style.transform = 'translateY(0)';
    }, 1000);
}
function startQuiz() {
    menuwrap.style.transform = 'translateX(300px)';
    setTimeout(function () {
        menuwrap.style.transform = 'translateX(-2000px)';
        setTimeout(function () {
            menuwrap.style.opacity = '0';
        }, 1000);
        setTimeout(function () {
            menuwrap.style.transform = OGTransformMenu;
        }, 3000);
    }, 800);
    setTimeout(function () {
        menuwrap.style.zIndex = '-3';
        game_EndElem.style.zIndex = '-1';
        game_EndElem.style.opacity = '0';
        quizWrap.style.opacity = '1';
        document.dispatchEvent(questEvent);
    }, 1000);
}
window.startQuiz = startQuiz;
var mainheader = document.getElementById("mainhead");
var mainbutton = document.getElementById("mainbutton");
var builtBy = document.getElementById("built");
var menuwrap = document.getElementById("menuwrap");
var infomenu = document.getElementById("infomenu");
var starting = document.getElementById("realstart");
var quizWrap = document.getElementById("quizwrapper");
var quiz_Elem = document.getElementById("quizcol");
var game_EndElem = document.getElementById("gameend");
var questEvent = new Event('questEvent');
var OGTransformMenu = menuwrap.style.transform;
var OGTransformEnd = game_EndElem.style.transform;
