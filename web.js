let ketqua = document.getElementById("ketqua");
let time = document.getElementById("time");
let cal = document.getElementById("Calculator");
let ans = document.getElementById("ans");
let clock = document.getElementById("clock");
let dark = document.getElementById("darkMode");
let grey= document.getElementById("greyMode");
let bright = document.getElementById("brightMode");
let back=document.getElementById("back");
let a=document.getElementById("n1");
let b=document.getElementById("n2");
let game=document.getElementById("game");
let phu=document.getElementById("phu");
let nhan=document.getElementById("nhan");
let chia=document.getElementById("chia");
let cong=document.getElementById("cong");
let tru=document.getElementById("tru");
let nhapa=document.getElementById("nhapa");
let nhapb=document.getElementById("nhapb");
let kq=document.getElementById("kq");
let chon=document.getElementById("chon");
cal.style.display = "inline-block";
clock.style.display = "inline-block";
back.style.display = "none";
time.style.display = "none";
ans.style.display = "none";
ans.style.display = "none";
nhapa.style.display = "none";
nhapb.style.display = "none";
a.style.display = "none";
b.style.display = "none";
nhan.style.display = "none";
chia.style.display = "none";
cong.style.display = "none";
tru.style.display = "none";
phu.style.display = "block"
dark.style.display ="block"



game.style.position = "absolute";
let gameX = 1000;
let gameY = 0;

game.style.left = gameX + "px";
game.style.top = gameY + "px";
phu.style.position = "absolute";
let X = 900;
let Y = 25;

phu.style.left = X + "px";
phu.style.top = Y + "px";
dark.style.position = "absolute";
let darkX = 200;
let darkY = 0;

dark.style.right = darkX + "px";
dark.style.bottom= darkY + "px";

grey.style.position = "absolute";
let greyX = 200;
let greyY = 40;

grey.style.right = greyX + "px";
grey.style.bottom = greyY + "px";

bright.style.position = "absolute";
let brightX = 200;
let brightY = 80;

bright.style.right = brightX + "px";
bright.style.bottom = brightY + "px";

game.onclick = function () {
      window.open("phu.html", "_blank");;
};
	clock.onclick = function () {
if (back.style.display === "none") {
    time.style.display = "block";
time.style.fontSize = "30px";
time.style.border = "2px solid red";
time.style.padding = "10px";
time.style.position = "absolute";
let timeX = 200;
let timeY = 100;

time.style.left = timeX + "px";
time.style.top = timeY + "px";
time.style.display = "block"
clock.style.display = "none"
cal.style.display = "inline-block";
back.style.display = "inline-block"
setInterval(function () {
    let now = new Date();

    let gio = now.getHours();
    let phut = now.getMinutes();
    let giay = now.getSeconds();
let giomy = gio + (-12)
if (giomy < 0){
	giomy = 24 + giomy;
}
	

    time.innerText = "Giờ Việt Nam : " + gio + ":" + phut + ":" + giay+" \n"+
		"Giờ Hoa Kỳ : " +giomy + ":" + phut + ":" + giay  ;
}, 1000);
}

};
cal.onclick = function () {
    a.style.display = "block";
    ketqua.style.display = "block";
    chon.style.display = "block";
kq.style.display = "block";
b.style.display = "block";
    nhapa.style.display = "block";
cal.style.display = "none";
time.style.display = "none";
clock.style.display = "inline-block";
back.style.display = "inline-block";
nhapb.style.display = "block";
nhan.style.display = "inline-block";
chia.style.display = "inline-block";
cong.style.display = "inline-block";
tru.style.display = "inline-block";
ans.style.display = "inline-block";

};
    nhan.onclick = function(){
	ketqua.innerText=Number(a.value) * Number(b.value)
	}

chia.onclick = function(){
	ketqua.innerText=Number(a.value )/ Number(b.value)
	}

cong.onclick = function(){
	ketqua.innerText = Number(a.value) + Number(b.value);
	}

tru.onclick = function(){
	ketqua.innerText=Number(a.value) - Number(b.value)
	}
ans.onclick = function(){

    if (a.value === "") {
        a.value = ketqua.innerText;
    } else if (b.value === "") {
        b.value = ketqua.innerText;
    }
}
	
back.onclick = function () {
kq.style.display = "none";
ketqua.style.display = "none";
ans.style.display = "none";
    a.style.display = "none";
    chon.style.display = "none";
kq.style.display = "none";
b.style.display = "none";
    nhapa.style.display = "none";
cal.style.display = "inline-block";
clock.style.display = "inline-block"
back.style.display = "none";
nhapb.style.display = "none";
nhan.style.display = "none";
chia.style.display = "none";
cong.style.display = "none";
tru.style.display = "none";
time.style.display = "none"


};
dark.onclick = function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
};
grey.onclick = function() {
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "black";
};
bright.onclick = function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
};


