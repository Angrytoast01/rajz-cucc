input.onGesture(Gesture.LogoDown, function () {
    y += -1
    led.plot(x, y)
})
input.onGesture(Gesture.LogoUp, function () {
    y += 1
    led.plot(x, y)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    y = 2
    x = 2
    led.plot(x, y)
})
input.onGesture(Gesture.TiltRight, function () {
    x += 1
    led.plot(x, y)
})
input.onGesture(Gesture.TiltLeft, function () {
    x += -1
    led.plot(x, y)
})
let x = 0
let y = 0
y = 2
x = 2
led.plot(x, y)
