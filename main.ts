input.onButtonPressed(Button.A, function () {
    pietion = 1
})
function circulation () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(3500)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function clingnotement_orange () {
    basic.pause(4900)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Temps_pieton () {
    basic.pause(500)
    basic.showNumber(5)
    basic.pause(710)
    basic.showNumber(4)
    basic.pause(710)
    basic.showNumber(3)
    basic.pause(710)
    basic.showNumber(2)
    basic.pause(710)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(500)
}
function pieton () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(6600)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let pietion = 0
pietion = 0
let temp_pieton = 0
basic.forever(function () {
    while (pietion != 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        circulation()
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    temp_pieton = 1
    pieton()
    pietion = 0
})
basic.forever(function () {
    while (temp_pieton != 0) {
        Temps_pieton()
        temp_pieton = 0
    }
})
basic.forever(function () {
    while (temp_pieton != 0) {
        clingnotement_orange()
    }
})
