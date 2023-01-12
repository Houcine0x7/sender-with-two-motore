radio.setGroup(1)

input.onGesture(Gesture.TiltLeft,function(){
    radio.sendString("Goleft")
})

input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Goright")
})

input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
})

input.onGesture(Gesture.LogoUp,function(){
    radio.sendString("M b")
})

input.onGesture(Gesture.LogoDown,function(){
    radio.sendString("M F")
})