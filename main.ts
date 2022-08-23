let gameover = 0
let index = 0
let start = 0
let x = 0
let y = 0
let map_x_list: number[] = []
let map_y_list: number[] = []
input.onButtonPressed(Button.AB, function () {
    basic.showString("GAME START!!")
    gameover = 0
    index = 0
    start = 0
    x = 0
    y = 0
    map_x_list = [
    1,
    1,
    1,
    1,
    3,
    3,
    3,
    3
    ]
    map_y_list = [
    0,
    1,
    2,
    3,
    1,
    2,
    3,
    4
    ]
    basic.showLeds(`
        . # . . .
        . # . # .
        . # . # .
        . # . # .
        . . . # .
        `)
    led.plot(0, 0)
    basic.pause(200)
    start = 1
})
basic.forever(function () {
    if (start == 1) {
        if (gameover == 0) {
            for (let index = 0; index <= 7; index++) {
                if (map_x_list[index] == x && map_y_list[index] == y) {
                    gameover = 1
                    basic.pause(100)
                } else {
                	
                }
            }
            if (input.isGesture(Gesture.TiltRight)) {
                if (0 <= x && 4 > x) {
                    basic.pause(200)
                    led.unplot(x, y)
                    x += 1
                    led.plot(x, y)
                    basic.pause(200)
                }
            } else if (input.isGesture(Gesture.TiltLeft)) {
                if (0 < x && 4 >= x) {
                    basic.pause(200)
                    led.unplot(x, y)
                    x += -1
                    led.plot(x, y)
                    basic.pause(200)
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (0 <= y && 4 > y) {
                    basic.pause(200)
                    led.unplot(x, y)
                    y += 1
                    led.plot(x, y)
                    basic.pause(200)
                }
            } else if (input.buttonIsPressed(Button.A)) {
                if (0 < y && 4 >= y) {
                    basic.pause(200)
                    led.unplot(x, y)
                    y += -1
                    led.plot(x, y)
                    basic.pause(200)
                }
            } else if (y == 4 && x == 4) {
                basic.showString("COMPLETE!!")
            } else {
            	
            }
        } else {
            basic.showString("GAME OVER")
        }
    }
})
