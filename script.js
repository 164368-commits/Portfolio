<script>

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
"SWU_10090110702501A-0-D0101_1749800445651_page-0010.jpg"

];


let index = 0;


// เปิดรูปใหญ่

function openImage(i){

    index = i;

    document.getElementById("big").src = img[index];

    document.getElementById("lightbox").style.display = "flex";

}



// รูปถัดไป

function next(){

    index++;

    if(index >= img.length){

        index = 0;

    }

    document.getElementById("big").src = img[index];

}



// รูปก่อนหน้า

function prev(){

    index--;

    if(index < 0){

        index = img.length - 1;

    }

    document.getElementById("big").src = img[index];

}



// กดพื้นหลังเพื่อปิด

document.getElementById("lightbox").onclick = function(e){

    if(e.target.id == "lightbox"){

        this.style.display = "none";

    }

}



// ใช้ปุ่มคีย์บอร์ด ← →

document.addEventListener("keydown",function(e){

    if(e.key === "ArrowRight"){

        next();

    }


    if(e.key === "ArrowLeft"){

        prev();

    }


    if(e.key === "Escape"){

        document.getElementById("lightbox").style.display="none";

    }

});


</script>
