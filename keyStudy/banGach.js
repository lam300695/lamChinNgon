let canvas = document.getElementById("myCanvas");
let text = canvas.getContext('2d');

let Bong = function (x1, y1, bankinh, vx, vy) {
    this.x1 = x1;
    this.y1 = y1;
    this.bankinh = bankinh;
    this.vx = vx;
    this.vy = vy;

    this.draw = function () {
        text.beginPath();
        text.fillStyle = "pink";
        text.arc(this.x1, this.y1, this.bankinh, 0, Math.PI * 2);
        text.fill();
        text.closePath();
    };
    this.dichuyen = function (thanhdo) {
        this.x1 += this.vx;
        this.y1 += this.vy;
        if (this.x1 > canvas.width - this.bankinh || this.x1 < 0) this.vx = -this.vx;
        if (this.y1 < 0) this.vy = -this.vy;
        if (this.x1 < thanhdo.x + (thanhdo.dai) && this.y1 < thanhdo.y + thanhdo.rong &&
            this.x1 > thanhdo.x - (thanhdo.dai) && this.y1 > thanhdo.y - thanhdo.rong) {
            this.vy = -vy
        }
    }
};

let Thanhdo = function (color, x, y, dai, rong, VX) {
    this.VX = VX;
    this.x = x;
    this.y = y;
    this.dai = dai;
    this.rong = rong;
    this.trangthai = "sangphai";
    this.hinh = function () {
        text.fillStyle = color;
        text.fillRect(this.x, this.y, this.dai, this.rong);
        text.closePath();
    };
    this.sangtrai = function () {
        if (this.x <= canvas.width - this.dai)
            this.x += this.VX
    };
    this.sangphai = function () {
        if (this.x >= 0)
            this.x += -this.VX
    };
    this.move = function () {
        switch (this.trangthai) {
            case "sangtrai":
                this.sangtrai();
                break;
            case "sangphai":
                this.sangphai();
                break;
        }
    }
};
let Gach = function (dai, rong) {
    this.doX = 25;
    this.doY = 25;
    this.khoangcach = 25;
    this.daiV = dai;
    this.rongV = rong;
    this.hang1 = 4;
    this.cot1 = 5;

    for (i = 0; i < this.hang1; i++) {

        for (j = 0; j < this.cot1; j++) {
            mang.push({
                cx: this.doX + j * (this.daiV + this.khoangcach),
                cy: this.doY + i * (this.rongV + this.khoangcach),
                trangthaigach: false
            })
        }
    }
    this.taogach = function (gach) {

        mang.forEach(function (b) {
            if (!b.trangthaigach) {
                text.beginPath();
                text.rect(b.cx, b.cy, gach.daiV, gach.rongV);
                text.fillStyle = "red";
                text.fill();
                text.closePath();
            }
        });
    };
    this.vatramgach = function (bong, gach) {
        mang.forEach(function (b) {
            if (!b.trangthaigach) {
                if (bong.x1 >= b.cx && bong.x1 <= b.cx + gach.daiV &&
                    bong.y1 + bong.bankinh >= b.cy && bong.y1 - bong.bankinh <= b.cy + gach.rongV) {
                    bong.vy = -bong.vy;
                    bong.vx = -bong.vy;
                    b.trangthaigach = true;
                    diem += 1;
                }
            }
        })

    };

};
let bong = new Bong(250, 280, 12, 1, 1);
let thanhdo = new Thanhdo("red", 30, 630, 180, 10, 2);
let mang = [];
let diem = 0;
let gach = new Gach(70, 30, "red");
gach.taogach(gach);
bong.draw();
thanhdo.hinh();

function dichuyenThanhdo(e) {
    switch (e.keyCode) {
        case 37:
            thanhdo.trangthai = "sangphai";
            break;
        case 39:
            thanhdo.trangthai = "sangtrai";
            break;
    }
    console.log(thanhdo.trangthai)
}

function chuyendong() {
    window.addEventListener("keydown", dichuyenThanhdo);
}

function GameOver() {
    if (bong.y1 > canvas.height - bong.bankinh) {
        stop();
        alert("game over");
    }
}

function gamewin() {
    document.getElementById("diem").innerHTML = diem;
    if (diem >= 20) {
        stop();
        alert("Win");
    }
}

function Update() {
    setInterval(function () {
        text.clearRect(0, 0, canvas.width, canvas.height);
        bong.draw();
        bong.dichuyen(thanhdo);
        thanhdo.hinh();
        gach.taogach(gach);
        gach.vatramgach(bong, gach);
        thanhdo.move();
        GameOver();
        gamewin();
    }, 1);
}

function play() {
    Update();
}
