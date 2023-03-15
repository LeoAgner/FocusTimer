import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set') 
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()


buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
})
    


buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
})

//som

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')  
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
    sound.bgAudio.play()
})

//som

buttonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
    if(!newMinutes) {
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})