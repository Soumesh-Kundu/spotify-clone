const accountToggle = document.getElementById("account-toggle")//taking the account toogle icon as button
const profilebox = document.getElementById("profilebox")//taking the profile box for manupulations
const masterplay = document.querySelectorAll("[data-masterplay]")
const masterplay_arrey=Array.from(masterplay)
let audioelement = new Audio()
const progressbar = document.querySelector(".currentprogress")
const durationtime = document.querySelector(".duration")
const progressArea= document.getElementById("progressbar")
const currenttime = document.querySelector(".currenttime")
const songname=document.getElementById("songname")
const songartist=document.getElementById("songartist")
const previous=document.getElementById("previous")
const next=document.getElementById("next")
const songcover=document.getElementById("songcover")
const recent_volume=document.getElementById("volume")
const volumekey=document.getElementById("volumekey")
const repeat=document.getElementById("repeat")
const shuffle=document.getElementById("shuffle")
const songlist=Array.from(document.querySelectorAll("[data-song]"))
const names=Array.from(document.querySelectorAll(".name"))
const indexs=Array.from(document.querySelectorAll('[data-index]'))
const thead=document.querySelector("section")
const navbar=document.querySelector('header')
const range_track=document.getElementById('range-track')
// console.log(navbar.get)
let progressWidth
let audiocurrent
let audioduration
let totalmin
let totalsec
let currentmin
let currentsec
let songindex=songArray.length
let volumebar