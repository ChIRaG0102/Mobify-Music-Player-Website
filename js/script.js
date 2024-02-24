// Ganpati Bappa Morya 
var arr = [
    {
        img: "img/Deva-Deva.jpg",
        sname: "Deva Deva",
        mname: "Brahmastra",
        url:"audio/Deva Deva - Brahmastra.mp3",
        duration: 4.39
    },
    {
        img: "img/hacked.jpg",
        sname: "Hacked Theme song",
        mname: "Hacked",
        url:"audio/Hacked Theme - Hacked 192 kbps.mp3",
        duration: 1.22
    },
    {
        img: "img/Kesariya.jpg",
        sname: "Kesariya",
        mname: "Brahmastra",
        url:"audio/Kesariya - Brahmastra.mp3",
        duration: 4.28
    },
    {
        img: "img/Bekhayali.jpg",
        sname: "Bekhayali Mai Bhi Tera",
        mname: "Kabir Singh",
        url:"audio/Bekhayali - Kabir Singh.mp3",
        duration: 6.02
    },
    {
        img: "img/Ram-Siya-Ram.jpg",
        sname: "Ram Siya Ram",
        mname: "Brahmastra",
        url:"audio/Ram Siya Ram - Adipurush.mp3",
        duration: 3.50
    },
    {
        img: "img/sunn_raha.jpg",
        sname: "Sunn Raha Hai na Tu",
        mname: "Ashiqui 2",
        url:"audio/Sunn Raha Hai - PagalSongs.com.mp3",
        duration: 6.30
    },
    {
        img: "img/Arjan-Vailly.jpg",
        sname: "Arjan Vailly",
        mname: "Animal",
        url:"audio/Arjan Vailly - ANIMAL.mp3",
        duration: 3.03
    },
    {
        img: "img/humrah.jpg",
        sname: "Humraah",
        mname: "Malang",
        url:"audio/Humraah - Malang.mp3",
        duration: 5.01
    },
    {
        img: "img/AbrarEntry.jpg",
        sname: "Abrar Entry Song",
        mname: "Animal",
        url:"audio/Abrars Entry Jamal Kudu - ANIMAL.mp3",
        duration: 2.15
    },
    {
        img: "img/Satranga.jpg",
        sname: "Satranga",
        mname: "Animal",
        url:"audio/Satranga - Animal.mp3",
        duration: 4.33
    },
    {
        img: "img/yehTuneKya.jpg",
        sname: "Yeh Tune Kya Kiya",
        mname: "Once upon Time in Mumbai",
        url:"audio/ye Tune Kya Kiya (Once Upon A Time Mumbaai Dobara).mp3",
        duration: 5.07
    },
    {
        img: "img/Shiv.jpg",
        sname: "Shiv Tandav Stotram",
        mname: "Shiv Stotra",
        url:"audio/Shiva-Tandava-Stotram_192(PagalWorldl).mp3",
        duration: 9.13
    },
    {
        img: "img/sach.jpg",
        sname: "Sach Keh Raha Hai Deewana",
        mname: "RHTDM",
        url:"audio/old_RHTDM - Sach Keh Raha Hai.mp3",
        duration: 5.49
    },
    {
        img: "img/Shayad.jpg",
        sname: "Shayad",
        mname: "Love Aaj Kal",
        url:"audio/Shayad - Love Aaj Kal.mp3",
        duration: 3.11
    },
    {
        img: "img/KaunTujhe.jpg",
        sname: "Kaun Tujhe Yuu",
        mname: "Ms Dhoni The Untold Story",
        url:"audio/02 Kaun Tujhe (MS Dhoni) Palak 320Kbps.mp3",
        duration: 4.01
    }
];

var songList = document.querySelector("#songList");
var selectedSong = 0;

audio = new Audio();

function main(){
    var clutter = "";
arr.forEach(function (obj,id) {
    clutter += `<div class="songs" id=${id}>
    <div class="songLeft">
        <img src="${obj.img}" alt="songImg">
    </div>
    <div class="songRight">
        <div class="Songname">
           <h3>${obj.sname}</h3>
           <h4>Movie: ${obj.mname}</h4>
        </div>
        <div class="time">
            <h5>${obj.duration}s</h5>
        </div>
    </div>
</div>`;
});
songList.innerHTML = clutter;
}
main();


songList.addEventListener("click",function(e){
    selectedSong = parseInt(e.target.closest('.songs').id); 
    clone = "";
    clone +=`<div class="imgBox" id="imgBox">
    <img src="${arr[selectedSong].img}" alt="" id="img1">
</div>`;
document.querySelector("#left").innerHTML = clone;
audio.src = arr[selectedSong].url; 
audio.play();
flag = 0;
center = `<div class="center">
<i class="fa-solid fa-pause fa-lg"></i>
</div>`;
play.innerHTML = center;
flag = 1;
});

var flag = 0;
var play  = document.querySelector(".center");
var backward = document.querySelector(".back");
play.addEventListener("click",function(){
    if(flag == 0){
        audio.play();
        main();
        center = `<div class="center">
        <i class="fa-solid fa-pause fa-lg"></i>
      </div>`
      play.innerHTML = center;
      flag = 1;
    }
    else{
        main()
        audio.pause();
        center = `<div class="center">
        <i class="fa-solid fa-play fa-lg"></i>
      </div>`
      play.innerHTML = center;
      flag = 0;
    }
})


var next = document.querySelector("#forward");
next.addEventListener("click",function(){
    if(selectedSong < arr.length - 1){
        selectedSong ++;
        audio.src = arr[selectedSong].url; 
        audio.play(); 
        main();
        clone = "";
        clone +=`<div class="imgBox" id="imgBox">
        <img src="${arr[selectedSong].img}" alt="" id="img1">
        </div>`;
        document.querySelector("#left").innerHTML = clone;
        center = `<div class="center">
        <i class="fa-solid fa-pause fa-lg"></i>
         </div>`
        play.innerHTML = center;
        flag = 1;
        next.style.opacity = "0.8";
    } 
});

backward.addEventListener("click",function(){
    if(selectedSong >= 0){
        selectedSong--;
        audio.src = arr[selectedSong].url; 
        audio.play(); 
        main();
        clone = "";
        clone +=`<div class="imgBox" id="imgBox">
        <img src="${arr[selectedSong].img}" alt="" id="img1">
        </div>`;
        document.querySelector("#left").innerHTML = clone;
        center = `<div class="center">
        <i class="fa-solid fa-pause fa-lg"></i>
        </div>`
        play.innerHTML = center;
        flag = 1;
    }
});






