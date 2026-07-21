let img = [

"SWU_10090110702501A-0-D0101_1749800445651_page-0001.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0002.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0003.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0004.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0005.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0006.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0007.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0008.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-0009.jpg",
"SWU_10090110702501A-0-D0101_1749800445651_page-00010.jpg"

];


let index = 0;


// เปิดรูปใหญ่

function openImage(i){

index = i;

document.getElementById("big").src = img[index];

document.getElementById("lightbox").style.display = "flex";

}


// เลื่อนไปข้างหน้า

function next(){

index++;

if(index >= img.length){

index = 0;

}

document.getElementById("big").src = img[index];

}


// เลื่อนย้อนกลับ

function prev(){

index--;

if(index < 0){

index = img.length-1;

}

document.getElementById("big").src = img[index];

}


// ปิดรูป

document.getElementById("lightbox").onclick = function(e){

if(e.target.id == "lightbox"){

this.style.display = "none";

}

}
