console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Night Changes",filePath:"1.mp3", coverPath:"nightchanges.jpeg"},
    {songName:"Born To Shine",filePath:"2.mp3", coverPath:"bornroshine.jpg"},
    {songName:"7 Rings",filePath:"3.mp3", coverPath:"7 rings.jpg"},
    {songName:"treat you better",filePath:"4.mp3", coverPath:"treat you better.jpg"},
    {songName:"Who Says",filePath:"5.mp3", coverPath:"who says.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;

})
//Handle Play
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//listen events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
//seek progressbar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       console.log(e.target); 
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
    })
})

//const makeAllPlays=()=>{
    
//}