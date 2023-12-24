var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var questDisplay = document.getElementById("question");
var questInput = document.getElementById("input");
var stat1 = document.getElementById("status");
var paginationItems = document.querySelectorAll('#pagination div');
var endGameBox = document.getElementById("gameendbox");
var gameEndElem = document.getElementById("gameend");
var quizElem = document.getElementById("quizcol");
var quizWrapper = document.getElementById("quizwrapper");
var main_wrap = document.getElementById("mainwrap");
var menu_wrap = document.getElementById("menuwrap");
var main_header = document.getElementById("mainhead");
var p1 = document.getElementById("p-1");
var p2 = document.getElementById("p-2");
var main_button = document.getElementById("mainbutton");
var OG_TransformMain = main_wrap.style.transform;
var OG_TransformEnd = gameEndElem.style.transform;
var getURL = 'http://localhost:3000/getting';
var questionID;
var questCounter = 0;
var correctAns = 0;
var questionArray = [];
function Questioning() {
    return __awaiter(this, void 0, void 0, function () {
        var random, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quizElem.style.opacity = '1';
                    quizWrapper.style.opacity = '1';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    random = randNum(100);
                    if (questionArray.indexOf(random) !== -1) {
                        random = randNum(100);
                    }
                    else {
                        questionArray.push(random);
                    }
                    getURL = "http://localhost:3000/getting?questionId=" + random;
                    questionID = random;
                    return [4 /*yield*/, fetchData(getURL)];
                case 2:
                    data = _a.sent();
                    displayQuestion(data);
                    questCounter += 1;
                    if (questCounter > 10) {
                        p1.textContent = "you scored ".concat(correctAns, "/10!");
                        if (correctAns >= 6) {
                            p2.style.color = '#afd47b';
                            p2.textContent = "you passed!";
                        }
                        else {
                            p2.style.color = '#c7555f';
                            p2.textContent = "you almost had it!";
                        }
                        endGame();
                    }
                    else {
                        pagChecking(questCounter);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log('error during questioning: ' + err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function pagChecking(num) {
    paginationItems.forEach(function (item) {
        var itemNum = parseInt(item.getAttribute('data-question'));
        if (itemNum === num) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    });
}
function startMenu() {
    menu_wrap.style.zIndex = '4';
    main_wrap.style.zIndex = '5';
    main_wrap.style.transform = OG_TransformMain;
    gameEndElem.style.transform = 'translateX(-300px)';
    setTimeout(function () {
        gameEndElem.style.transform = 'translateX(2000px)';
        quizWrapper.style.zIndex = '2';
        quizElem.style.zIndex = '2';
        gameEndElem.style.zIndex = '-1';
    }, 800);
    setTimeout(function () {
        quizElem.style.opacity = '0';
    });
    setTimeout(function () {
        gameEndElem.style.opacity = '0';
    }, 1900);
    setTimeout(function () {
        gameEndElem.style.transform = OG_TransformEnd;
    }, 2900);
    setTimeout(function () {
        main_wrap.style.opacity = '1';
        main_header.style.opacity = '1';
        main_header.style.transform = 'translateY(0px)';
        setTimeout(function () {
            main_button.style.opacity = '1';
            main_button.style.transform = 'translateY(0px)';
        }, 1000);
    }, 1000);
}
function checkAns() {
    var val = questInput.value;
    getAnswer(val.toLowerCase());
}
function endGame() {
    quizWrapper.style.zIndex = '0';
    quizElem.style.zIndex = '0';
    quizElem.style.opacity = '0';
    gameEndElem.style.zIndex = '7';
    endGameBox.style.transform = 'translateY(0)';
    gameEndElem.style.opacity = '1';
    questInput.disabled = true;
    questionArray = [];
}
function goAgain() {
    gameEndElem.style.transform = 'translateX(300px)';
    setTimeout(function () {
        gameEndElem.style.transform = 'translateX(-2000px)';
    }, 800);
    setTimeout(function () {
        gameEndElem.style.opacity = '0';
    }, 1900);
    setTimeout(function () {
        quizWrapper.style.zIndex = '2';
        quizElem.style.zIndex = '2';
        gameEndElem.style.zIndex = '-1';
    }, 2000);
    setTimeout(function () {
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
function getAnswer(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var counter, url, data, i, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    counter = 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    url = "http://localhost:3000/getans?questionId=" + questionID;
                    return [4 /*yield*/, fetchData(url)];
                case 2:
                    data = _a.sent();
                    for (i = 0; i < data.length; i++) {
                        if (answer === data[i].answer) {
                            Questioning();
                            displayStat('correct');
                            correctAns += 1;
                            setTimeout(function () {
                                stat1.style.backgroundColor = 'transparent';
                                stat1.style.opacity = '0';
                            }, 1200);
                            questInput.value = "";
                            counter = 1;
                        }
                    }
                    if (counter === 0) {
                        displayStat('wrong');
                        setTimeout(function () {
                            stat1.style.backgroundColor = 'transparent';
                            stat1.style.opacity = '0';
                        }, 1200);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.log('error during check answer: ' + err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var fetchData = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var response, data, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('response not ok');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log('data fetched');
                return [2 /*return*/, data];
            case 3:
                err_3 = _a.sent();
                console.log('error fetching data ' + err_3);
                throw err_3;
            case 4: return [2 /*return*/];
        }
    });
}); };
function displayQuestion(data) {
    var question = (data[0].question).toLowerCase();
    questDisplay.textContent = question;
    questDisplay.style.opacity = '1';
}
function randNum(max) {
    return Math.floor(Math.random() * max) + 1;
}
function displayStat(ans) {
    if (ans === 'correct') {
        stat1.style.backgroundColor = '#7bd4a0';
        stat1.textContent = '✅ correct!';
    }
    else if (ans === 'wrong') {
        stat1.style.backgroundColor = '#d47b83';
        stat1.textContent = '❌ wrong!';
    }
    stat1.style.opacity = "1";
}
document.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkAns();
    }
});
document.addEventListener("submit", function (e) {
    e.preventDefault();
    checkAns();
});
document.addEventListener('questEvent', function (e) {
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
