input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showString("RESET")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    if (steps == 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.setVolume(130)
    }
    if (steps == 20) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.setVolume(130)
    }
    if (steps == 30) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.setVolume(130)
    }
    if (steps == 40) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.setVolume(130)
    }
    if (steps == 50) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.setVolume(130)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showNumber(0.03 * steps)
    basic.showString("cal")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0.7 * steps)
    basic.showString("M")
    for (let index = 0; index < 2; index++) {
        basic.showString("Cheer up!")
    }
})
let steps = 0
music.playMelody("A B C5 B A A A B ", 120)
music.playMelody("B B A A A A B C5 ", 120)
steps = 0
basic.showString("Ready?")
