// เปิดรูปใหญ่

function openImage(src){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("showImage").src = src;

}



// ปิดรูปใหญ่

function closeImage(){

    document.getElementById("lightbox").style.display = "none";

}



// กด ESC เพื่อปิดรูป

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        closeImage();

    }

});
