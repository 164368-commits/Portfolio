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

document.getElementById("showImage").src=img[index];

document.getElementById("lightbox").style.display="flex";

}



function nextImage(){

index++;

if(index>=img.length){

index=0;

}

document.getElementById("showImage").src=img[index];

}



function prevImage(){

index--;

if(index<0){

index=img.length-1;

}

document.getElementById("showImage").src=img[index];

}



function closeImage(){

document.getElementById("lightbox").style.display="none";

}
