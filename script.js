let img=[

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


let index=0;



function openImage(i){

index=i;

document.getElementById("big").src=img[index];

document.getElementById("lightbox").style.display="flex";

}



function next(){

index++;

if(index >= img.length){

index=0;

}

document.getElementById("big").src=img[index];

}



function prev(){

index--;

if(index < 0){

index=img.length-1;

}

document.getElementById("big").src=img[index];

}



// คลิกพื้นหลังเพื่อปิด

document.getElementById("lightbox").onclick=function(e){

if(e.target.id=="lightbox"){

document.getElementById("lightbox").style.display="none";

}

}
