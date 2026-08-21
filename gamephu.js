let password = ("Vast-universe")
let game;
while (true) {
  let nhap = prompt("nhập mật khẩu để tiếp tục")
  if (nhap === password){
    alert ("Mật khẩu đã đúng")
    break
  } else {
    alert ("Mật khẩu chưa đúng")
  }}
while (true) { 
   game = prompt("Nhập trò chơi bạn muốn chơi lúc này:Oẳn tù tì,Đoán số. ")
  if (game == ("Oẳn tù tì")|| game == ("oẳn tù tì") ){
     game= ("ott");
  break;
  }if (game== ("Đoán số") || game == ("đoán số")){
     game = ("ds");
    break;
  } else{
    alert("sai kí tự")
}}
if (game == "ds"){
  let b = (Math.floor(Math.random()*1000)+1)
while (true){
  let doan = Number(prompt("Nhập số bạn đoán "));
  if (doan == b){
    alert("Chúc mừng bạn đã phí thời gian vào trò chơi này");
    break;
    } else if (doan < b){
    alert("số của bạn nhỏ hơn");
    } else if (doan > b){
      alert("số của bạn lớn hơn ");
    }}}
 else{
let ott = ["búa", "kéo", "bao"];
let lever;
let leverchon;

while (true) {
    leverchon = Number(prompt("Chọn level:\n1 = 2 lượt\n2 = 4 lượt\n3 = 5 lượt"));

    if (leverchon === 1 || leverchon === 2 || leverchon === 3) {
        break;
    } else {
        alert("Số chưa đúng");
    }
}

if (leverchon === 1) {
    lever = 2;
}

if (leverchon === 2) {
    lever = 4;
}

if (leverchon === 3) {
    lever = 5;
}

// Chơi game
while (true) {

    let sansang = prompt("Bạn đã sẵn sàng chưa? (Yes hoặc No)");

    if (sansang === "No") {
        break;
    }

    for (let i = lever; i > 0; i--) {

        let oan = prompt("Kéo, Búa hay Bao");
        let may = Math.floor(Math.random() * 3);

        if (may === 0) {
            may = "búa";
        }

        if (may === 1) {
            may = "kéo";
        }

        if (may === 2) {
            may = "bao";
        }

        alert("Máy chọn: " + may);

        if (oan === may) {
            alert("Hòa");
        } else if (
            (oan === "búa" && may === "kéo") ||
            (oan === "kéo" && may === "bao") ||
            (oan === "bao" && may === "búa")
        ) {
            alert("Bạn thắng");
        } else {
            alert("Bạn thua");
        }
    }

    break;
}

alert("Kết thúc trò chơi!");
}