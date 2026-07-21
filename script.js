<script>

// เปิดรูปใหญ่
function openImage(src){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("showImage").src = src;

}


// ปิดรูปใหญ่
function closeImage(){

    document.getElementById("lightbox").style.display = "none";

}


// กดปุ่ม ESC เพื่อปิดรูป
document.addEventListener("keydown",function(event){

    if(event.key === "Escape"){

        closeImage();

    }

});


// เลื่อนรูปพื้นหลังหน้าแรกอัตโนมัติ

let bg = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg"
];


let i = 0;


setInterval(function(){

    i++;

    if(i >= bg.length){
        i = 0;
    }


    document.getElementById("home").style.backgroundImage =
    "linear-gradient(rgba(0,60,25,.7),rgba(0,0,0,.8)),url('" 
    + bg[i] + "')";


},5000);


</script>
