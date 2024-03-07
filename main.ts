radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == ppt) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # # # # .
            `)
    } else {
        if (receivedNumber == 2 && ppt == 0 || (receivedNumber == 1 && ppt == 2 || receivedNumber == 0 && ppt == 1)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Skull)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    ppt = randint(0, 2)
    if (ppt == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        if (ppt == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                # # . # #
                # . . . #
                `)
        }
    }
    basic.pause(2000)
    radio.sendNumber(ppt)
})
let ppt = 0
let enemigo = 0
radio.setGroup(1)
basic.forever(function () {
	
})
