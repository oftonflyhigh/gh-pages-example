function goToStart() {
    // ページをリロードして最初の画面に戻る
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    //ホーム画面で質問と結果の画面を非表示
    document.getElementById('question-container2').style.display = 'none';
    document.getElementById('result-container2').style.display = 'none';
});

const questions2 = [//動物診断
    "Q1. 織田信長が命を絶った事件とは、次のどれですか？",
    "Q2. 風林火山を旗に書いていた戦国武将は誰か？",
    "Q3. 火縄銃が最初に伝わった島の名前は何島",
    "Q4. 戦国時代は何年間続いた？",
    "Q5. 江戸幕府を開いたのは誰ですか？",
    // ここに質問を追加してください
];
let currentQuestionIndex2 = 0;
let scores2 = Array(questions2.length).fill(0);
let cnt = 0;

function startDiagnosis2() {
    document.getElementById('start-container').style.display = 'none';
    showQuestion2();
}
function showQuestion2() { // 動物診断
    console.log(currentQuestionIndex2);
    console.log(scores2);

    const questionContainer = document.getElementById('question-container2');
    const questionText = document.getElementById('question-text2');
    questionText.textContent = questions2[currentQuestionIndex2];
    questionContainer.style.display = 'block';

    const answerContainer0 = document.getElementById('answer-form2-0');
    answerContainer0.style.display = 'none';
    const answerContainer1 = document.getElementById('answer-form2-1');
    answerContainer1.style.display = 'none';
    const answerContainer2 = document.getElementById('answer-form2-2');
    answerContainer2.style.display = 'none';
    const answerContainer3 = document.getElementById('answer-form2-3');
    answerContainer3.style.display = 'none';
    const answerContainer4 = document.getElementById('answer-form2-4');
    answerContainer4.style.display = 'none';
    const answerIndex = currentQuestionIndex2;
    let answer_radio = document.getElementById('answer-form2-' + currentQuestionIndex2);

    if (scores2[answerIndex] === 1) {
        radioNodeList = answer_radio.elements[0].checked = true;
    } else if (scores2[answerIndex] === 2) {
        radioNodeList = answer_radio.elements[1].checked = true;
    } else {
        const answerForm = document.getElementById('answer-form2-' + currentQuestionIndex2);
        answerForm.reset();
    }
    if (currentQuestionIndex2 === 0) { //1問目の時だけ戻るボタンを非表示にする
        answerContainer0.style.display = 'block';
    } else if (currentQuestionIndex2 === 1) {
        answerContainer1.style.display = 'block';
    } else if (currentQuestionIndex2 === 2) {
        answerContainer2.style.display = 'block';
    } else if (currentQuestionIndex2 === 3) {
        answerContainer3.style.display = 'block';
    } else if (currentQuestionIndex2 === 4) {
        answerContainer4.style.display = 'block';
    } else {

    }
}

function nextQuestion2() {
            //「次へ」ボタンが押されたときの処理
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const selectedAnswer1 = document.querySelector('input[name="answer1"]:checked');
    const selectedAnswer2 = document.querySelector('input[name="answer2"]:checked');
    const selectedAnswer3 = document.querySelector('input[name="answer3"]:checked');
    const selectedAnswer4 = document.querySelector('input[name="answer4"]:checked');

    switch (currentQuestionIndex2) {
        case 0:
            if (selectedAnswer) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer.value === "1") { //「はい」を選択で+3点
                    scores2[answerIndex] = 20;
                    cnt += 1;
                } else if (selectedAnswer.value === "2") { //「いいえ」を選択で+1点
                    scores2[answerIndex] = 0;
                }

                currentQuestionIndex2++;

                if (currentQuestionIndex2 < questions2.length) { //次へボタンの処理
                    showQuestion2();
                } else {
                    showResult2();
                }
            } else {
                alert("回答を選択してください");
            }
            break;
        case 1:
            if (selectedAnswer1) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer1.value === "1") { //「はい」を選択で+3点
                    scores2[answerIndex] = 0;
                } else if (selectedAnswer1.value === "2") { //「いいえ」を選択で+1点
                    scores2[answerIndex] = 20;
                    cnt += 1;
                }

                currentQuestionIndex2++;

                if (currentQuestionIndex2 < questions2.length) { //次へボタンの処理
                    showQuestion2();
                } else {
                    showResult2();
                }
            } else {
                alert("回答を選択してください");
            }
            break;
        case 2:
            if (selectedAnswer2) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer2.value === "1") { //「はい」を選択で+3点
                    scores2[answerIndex] = 20;
                    cnt += 1;
                } else if (selectedAnswer2.value === "2") { //「いいえ」を選択で+1点
                    scores2[answerIndex] = 0;
                }

                currentQuestionIndex2++;

                if (currentQuestionIndex2 < questions2.length) { //次へボタンの処理
                    showQuestion2();
                } else {
                    showResult2();
                }
            } else {
                alert("回答を選択してください");
            }
            break;
            case 3:
                if (selectedAnswer3) {
                    // ここで選択された回答に対する処理を追加
                    const answerIndex = currentQuestionIndex2;
                    if (selectedAnswer3.value === "1") { //「はい」を選択で+3点
    
                        scores2[answerIndex] = 0;
                    } else if (selectedAnswer3.value === "2") { //「いいえ」を選択で+1点
                        scores2[answerIndex] = 20;
                        cnt += 1;
                    }
    
                    currentQuestionIndex2++;
    
                    if (currentQuestionIndex2 < questions2.length) { //次へボタンの処理
                        showQuestion2();
                    } else {
                        showResult2();
                    }
                } else {
                    alert("回答を選択してください");
                }
                break;
            case 4:
                if (selectedAnswer4) {
                    // ここで選択された回答に対する処理を追加
                    const answerIndex = currentQuestionIndex2;
                    if (selectedAnswer4.value === "1") { //「はい」を選択で+3点
                        scores2[answerIndex] = 20;
                        cnt += 1;
                    } else if (selectedAnswer4.value === "2") { //「いいえ」を選択で+1点
                        scores2[answerIndex] = 0;
                    }
    
                    currentQuestionIndex2++;
    
                    if (currentQuestionIndex2 < questions2.length) { //次へボタンの処理
                        showQuestion2();
                    } else {
                        showResult2();
                    }
                } else {
                    alert("回答を選択してください");
                }
                break;
        }
    }
    function goBack2() {
        // 「戻る」ボタンが押されたときの処理
        if (currentQuestionIndex2 > 0) {
            currentQuestionIndex2--;
            showQuestion2();
        }
    }
    
    function showResult2() {
        // 結果画面の表示
     
        const totalScore = calculateTotalScore2();  // calculateTotalScore の結果を変数に代入
        console.log(scores2);
        console.log("結果" + totalScore);
    
        const resultContainer = document.getElementById('result-container2');
        const resultTextElement = document.getElementById('result-text2');
        resultContainer.style.display = 'block';
    let resultText3 = "";
    
    if (totalScore == 20) {
        resultText3 = "1問正解";
        resultTextElement.style.color = "blue";
    }else if (totalScore == 40) {
        resultText3 = "2問正解";
        resultTextElement.style.color = "purple";
    }else if(totalScore == 60){
        resultText3 = "3問正解";
        resultTextElement.style.color = "green";
    }else if(totalScore == 80){
        resultText3 = "4問正解";
        resultTextElement.style.color = "yellow";
    }else if(totalScore == 100){
        resultText3 = "5問正解";
        resultTextElement.style.color = "orange";
    }else{
        resultText3 = "0問正解";
    }
    
    
    resultTextElement.textContent = resultText3;
    
    // 質問画面を非表示
    document.getElementById('question-container2').style.display = 'none';
    document.getElementById('answer-form2').style.display = 'none';
    resultContainer.style.display = 'block';
    }
    
    
    function calculateTotalScore2() {
    // 各質問の得点を合算する
    return scores2.reduce((total, scores2) => total + scores2, 0);
    }