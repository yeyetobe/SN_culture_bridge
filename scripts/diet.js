const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 游戏变量
let basketX = canvas.width / 2 - 50;
let basketWidth = 100;
let basketSpeed = 7;
let foodX = Math.random() * (canvas.width - 50);
let foodY = 0;
let foodSpeed = 5;
let score = 0;

// 食物图片和篮子图片
const basketImage = new Image();
basketImage.src = 'assets/water.png';  // 替换为你的篮子图片路径
const foodImage = new Image();
foodImage.src = 'assets/ham.png';  // 替换为你的食物图片路径

// 更新游戏
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // 清空画布

    // 画篮子
    ctx.drawImage(basketImage, basketX, canvas.height - 50, basketWidth, 50);

    // 画食物
    foodY += foodSpeed;
    ctx.drawImage(foodImage, foodX, foodY, 50, 50);

    // 检测食物是否被篮子接住
    if (foodY + 50 > canvas.height - 50 && foodX + 50 > basketX && foodX < basketX + basketWidth) {
        score += 10;  // 增加分数
        foodY = 0;  // 重置食物
        foodX = Math.random() * (canvas.width - 50);
    }

    // 检测食物是否掉落
    if (foodY > canvas.height) {
        foodY = 0;  // 重置食物
        foodX = Math.random() * (canvas.width - 50);
        score -= 5;  // 扣分
    }

    // 显示分数
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 30);

    requestAnimationFrame(updateGame);  // 循环更新游戏
}

// 控制篮子
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft' && basketX > 0) {
        basketX -= basketSpeed;
    } else if (event.key === 'ArrowRight' && basketX < canvas.width - basketWidth) {
        basketX += basketSpeed;
    }
});

// 开始游戏
updateGame();
