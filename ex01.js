function tinhTienDien(kWh) {
  let bac = [50, 50, 100, 100, 100]; // giới hạn bậc
  let gia = [1678, 1734, 2014, 2536, 2834, 2927]; // giá từng bậc
  let tongTien = 0;

  for (let i = 0; i < bac.length && kWh > 0; i++) {
    let dung = Math.min(kWh, bac[i]);
    tongTien += dung * gia[i];
    kWh -= dung;
  }
  if (kWh > 0) tongTien += kWh * gia[5]; // bậc 6
  return tongTien;
}

console.log("Tiền điện phải trả:", tinhTienDien(350), "đồng");

function laSoNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(laSoNguyenTo(7));
console.log(laSoNguyenTo(10));

function hienThiChanLe(n) {
  let chan = [],
    le = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) chan.push(i);
    else le.push(i);
  }
  console.log("Số lẻ:", le.join(", "));
  console.log("Số chẵn:", chan.join(", "));
}

hienThiChanLe(10);

function tinhS(n) {
  let S = 0;
  for (let i = 1; i <= n; i++) {
    S += i * (i + 1);
  }
  return S;
}

console.log("Giá trị S =", tinhS(5));

function tongChanLe(a, b) {
  let tongChan = 0,
    tongLe = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) tongChan += i;
    else tongLe += i;
  }
  console.log("Tổng số lẻ:", tongLe);
  console.log("Tổng số chẵn:", tongChan);
}

tongChanLe(5, 9);

const board = document.getElementById("board");
const rows = 8,
  cols = 8;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    if ((i + j) % 2 === 0) {
      cell.classList.add("white");
    } else {
      cell.classList.add("black");
    }
    board.appendChild(cell);
  }
}

function veTamGiacSo(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let dong = "";
    for (let j = 1; j <= i; j++) {
      dong += count++ + " ";
    }
    console.log(dong);
  }
}

veTamGiacSo(5);
