window.addEventListener('load', () => {
    range_track.style.width=`${recent_volume.value}%` 
    audioelement.addEventListener('timeupdate', () => {
        audioelement.volume = recent_volume.value / 100      
        // console.log(audioelement.volume)
    })
})
console.log(range_track.style.width)
window.addEventListener('scroll', () => {
    let thead_top = thead.getBoundingClientRect().top
    let nav_left = navbar.getBoundingClientRect().left
    let nav_bottom = navbar.getBoundingClientRect().bottom
    // console.log(nav_loc)
    if (thead_top <= nav_bottom) {
        navbar.style.background = "rgb(82, 82, 82)"
    }
    else {
        navbar.style.background = ''
    }
})
audioelement.addEventListener("timeupdate", () => {
    const currentTimeOfSong = audioelement.currentTime
    const durationOfSong = audioelement.duration
    let progresswidth = (currentTimeOfSong / durationOfSong) * 100
    progressbar.style.width = `${progresswidth}%`
    audiocurrent = audioelement.currentTime
    audioduration = audioelement.duration
    totalmin = Math.floor(audioduration / 60)
    totalsec = Math.floor(audioduration % 60)
    currentmin = Math.floor(audiocurrent / 60)
    currentsec = Math.floor(audiocurrent % 60)
    if (currentsec < 10) {
        currentsec = `0${currentsec}`
    }
    if (totalsec < 10) {
        totalsec = `0${totalsec}`
    }
    currenttime.innerText = `${currentmin}:${currentsec}`
    durationtime.innerText = `${totalmin}:${totalsec}`
    change()
})
accountToggle.addEventListener('click', () => {
    if (profilebox.style.opacity === "0") {
        profilebox.style.opacity = "1";
        accountToggle.classList.remove('fa-caret-down')
        accountToggle.classList.add('fa-caret-up')
    }
    else {
        profilebox.style.opacity = "0";
        accountToggle.classList.remove('fa-caret-up')
        accountToggle.classList.add('fa-caret-down')
    }
})

masterplay_arrey.forEach(element =>{
    element.addEventListener('click', () => {
        if (audioelement.paused && audioelement.src != '') {
            audioelement.play()
            toggle_Play()
        }
        else {
            audioelement.pause();
            toggle_Pause()
        }
    })
})
masterplay_arrey[0].addEventListener('click', () => {
    if (songindex === songArray.length) {
        songindex = 0
        loadmusic(songindex)
        active()
        audioelement.play()
        toggle_Play()
    }
})

progressArea.addEventListener('click', (e) => {
    let proogresswidth = progressArea.clientWidth
    let clickedOffsetX = e.offsetX
    let songduration = audioelement.duration
    audioelement.currentTime = (clickedOffsetX / proogresswidth) * songduration
})
next.addEventListener('click', () => {
    if (shuffle.innerText == "shuffle_on") {
        shuffle_audio()
        audioelement.play()
        toggle_Play()
    }
    else {
        nextmusic()
    }
})
previous.addEventListener('click', () => {
    if (shuffle.innerText == "shuffle_on") {
        shuffle_audio()
        audioelement.play()
        toggle_Play()
    }
    else {
        previousmusic()
    }
})
recent_volume.addEventListener('change', () => {
    range_track.style.width=`${recent_volume.value}%`
    audioelement.addEventListener('timeupdate', () => {
        audioelement.volume = recent_volume.value / 100
        console.log(audioelement.volume)
       
    })
    if (recent_volume.value == 0) {
        volumekey.innerText = 'volume_off'
    }
    else if (recent_volume.value <= 50) {
        volumekey.innerText = "volume_down"
    }
    else {
        volumekey.innerText = "volume_up"
    }
})
shuffle.addEventListener("click", () => {
    if (shuffle.innerText == "shuffle") {
        shuffle.innerText = "shuffle_on"
    }
    else {
        shuffle.innerText = "shuffle"
    }
})
repeat.addEventListener("click", () => {
    if (repeat.innerText == "repeat") {
        repeat.innerText = "repeat_one"
    }
    else {
        repeat.innerText = "repeat"
    }
})
volumekey.addEventListener('click', () => {
    if (volumekey.innerText == 'volume_up' || volumekey.innerText == 'volume_down') {
        volumebar = recent_volume.value
        recent_volume.value = 0
        volumekey.innerText = "volume_off"
        audioelement.volume = recent_volume.value
        range_track.style.width=`${recent_volume.value}%`
    }
    else {
        if (volumebar >= 50) {
            volumekey.innerText = 'volume_up'
            recent_volume.value = volumebar
            audioelement.volume = recent_volume.value / 100
            range_track.style.width=`${recent_volume.value}%`
        }
        else{
            volumekey.innerText = 'volume_down'
            recent_volume.value = volumebar
            audioelement.volume = recent_volume.value / 100
            range_track.style.width=`${recent_volume.value}%`
        }
    }
})
songlist.forEach(element => {
    element.addEventListener('click', () => {
        if (songlist.indexOf(element) === songindex) {
            if (audioelement.paused || audioelement.currentTime < 0) {
                audioelement.play()
                toggle_Play()
            }
            else {
                audioelement.pause()
                toggle_Pause()
            }
        }
        else {
            songindex = songlist.indexOf(element)
            loadmusic(songindex)
            active()
            audioelement.play()
            toggle_Play()
        }
    })
})