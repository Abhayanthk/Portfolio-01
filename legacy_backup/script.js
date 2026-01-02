const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const vidieoList = [video1, video2, video3];
vidieoList.forEach((video)=>{
        video.addEventListener("mouseover", ()=>{
                video.play()
        })
        video.addEventListener("mouseout", ()=>{
                video.pause()
        })
})