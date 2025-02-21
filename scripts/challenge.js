
let username = document.getElementById('username').value;
// 开始闯关函数
function startChallenge() {
    let username = document.getElementById('username-input').value.trim();
    if (username) {
        localStorage.setItem('username', username);  // 保存用户名
        document.getElementById('username-container').style.display = 'none';  // 隐藏用户名输入部分
        document.getElementById('level-container').style.display = 'flex';  // 显示关卡按钮
    } else {
        alert("请输入你的名字！");
    }
}

// 返回主页
function goToHome() {
    window.location.href = 'index.html';  // 假设主页是 index.html
}

let score = 0;

function checkAnswer(questionNumber, selectedOption) {
    let correctAnswer = 'b'; // 这里设置正确答案
    if (selectedOption === correctAnswer) {
        score++;
    }
    // 显示下一题
    loadNextQuestion(questionNumber);
}

function loadNextQuestion(questionNumber) {
    // 根据题目编号显示下一个问题或进入下一个模块
}

function checkDialectLine(audioId, dialectId, meaningId) {
    // 验证是否连线正确
}
function chopVegetables() {
    // 触发切菜动画
}
function dragModule(moduleId) {
    // 允许用户拖动模块到正确位置
}
localStorage.setItem('score', score);
document.getElementById('score-display').innerText = "你的分数是: " + localStorage.getItem('score');
function submitScore() {
    let scores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    scores.push({ username: username, score: score });
    localStorage.setItem('leaderboard', JSON.stringify(scores));
}

//排行榜
let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
leaderboard.forEach(player => {
    // 显示每个玩家的分数
});
