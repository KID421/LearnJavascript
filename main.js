// 變數 變數名稱 = 值
var text = "我是標題";       // 字串
var number = 7;             // 整數
var time = 1.5;             // 浮點數
var check = true;           // 布林值 true / false

// 網頁文件.透過 ID 取得元素.插入 HTML = 值;
document.getElementById("title").innerHTML = text;

// 運算子
var a = 10;
var b = 5;
var c = 0;
// 等號右邊先運算再指定到左邊
c = a + b;  
c = a - b;
c = a * b;
c = a / b;
c = a % b;

document.getElementById("box1").innerHTML = c;

var d = 1;
var e = 1;
var f = 0;

// 加法與減法
f = d++;    // 先給值再遞增
f = ++e;    // 先遞增再給值

document.getElementById("box2").innerHTML = f;

var g = 10;

g -= 5;     // 適用於 +-*/%

document.getElementById("box3").innerHTML = g;

// 判斷式
var score = 100;
var box4 = document.getElementById("box4");

// if 可搭配一個 else 與多個 else if
if (score >= 60) {
    box4.innerHTML = "及格";
}
else if (score >= 50) {
    box4.innerHTML = "可以補考";
}
else {
    box4.innerHTML = "當掉!";
}

// 函式、方法 - PUG、Sass Mixin

// 匿名函式
// function (){}

// 定義：函式 函式名稱(參數) { 內容 }
function test1(text) {
    document.getElementById("box5").innerHTML = text;
}

// 使用函式
test1("123456789");

test1("測試文字");

// 陣列
var number1 = 10;
var number2 = 20;
var number3 = 30;

// 定義陣列
var numbers = [10, 20, 30];  
var names = ["KID", "BOB", "TOM"]   

// 取得陣列資料 - 陣列資料從 0 開始
document.getElementById("box6").innerHTML = names[2];

// 取得陣列數量
// document.getElementById("box6").innerHTML = names.length;