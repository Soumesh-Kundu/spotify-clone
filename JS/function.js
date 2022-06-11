function toggle_Pause() {
   
   masterplay_arrey.forEach(element => {
      element.classList.remove("fa-circle-pause")
      element.classList.add("fa-circle-play")
   })
}
function toggle_Play() {
   masterplay_arrey.forEach(element => {
      element.classList.remove("fa-circle-play")
      element.classList.add("fa-circle-pause")
   })
}
function loadmusic(index) {
   songname.innerText = songArray[index].songname
   songartist.innerText = songArray[index].artist
   audioelement.src = songArray[index].src
   songcover.src = songArray[index].cover
}
function nextmusic() {
   songindex = (songindex + 1) % songArray.length
   loadmusic(songindex)
   active()
   audioelement.currentTime = 0
   audioelement.play()
   toggle_Play()
}
function previousmusic() {indexs
   songindex = (songindex + (songArray.length - 1)) % songArray.length
   loadmusic(songindex)
   active()
   audioelement.currentTime = 0
   audioelement.play()
   toggle_Play()
}
function change() {
   if (audioelement.currentTime >= audioelement.duration) {
      if (repeat.innerText == "repeat_one" && shuffle.innerText == "shuffle_on") {
         audioelement.currentTime = 0;
         audioelement.play()
         toggle_Play()
      }
      else if (repeat.innerText == "repeat_one" && shuffle.innerText!="shuffle_on") {
         audioelement.currentTime = 0
         loadmusic(songindex)
         audioelement.play()
         toggle_Play()
      }
      else if (shuffle.innerText == "shuffle_on") {
         shuffle_audio()
         audioelement.play()
         toggle_Play()
      }
      else {
         nextmusic()
      }
   }
}
function shuffle_audio() {
   let randindex = Math.floor((Math.random() * songArray.length))
   // console.log(randindex)
   while (randindex == songindex) {
      randindex = Math.floor((Math.random() * songArray.length))
   }
   songindex = randindex
   loadmusic(songindex)
   active(  )
}
function active(){
   names.forEach(element=>{
      element.style.color='white'
   })   
   indexs.forEach(element=>{
      element.style.color='white'
   })   
   names[songindex].style.color='rgb(65, 197, 72)'
   indexs[songindex].style.color='rgb(65, 197, 72)'
}


