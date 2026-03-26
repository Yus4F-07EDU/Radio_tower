function getIconForMessage (msg: number) {
    if (msg == 1) {
        basic.pause(200)
        return IconNames.Yes
    }
    if (msg == 2) {
        basic.pause(200)
        return IconNames.House
    }
    if (msg == 3) {
        basic.pause(200)
        return IconNames.Sad
    }
    if (msg == 4) {
        basic.pause(200)
        return IconNames.SmallHeart
    }
    return IconNames.No
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(100)
    if (receivedNumber == 1) {
        basic.showString("Hello!")
        basic.showIcon(IconNames.Silly)
        basic.pause(2000)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        basic.showString("Minecraft")
        basic.showIcon(IconNames.House)
        basic.pause(2000)
        basic.clearScreen()
    } else if (receivedNumber == 3) {
        basic.showString("Message3")
        basic.showIcon(IconNames.Chessboard)
        basic.pause(2000)
        basic.clearScreen()
    } else if (receivedNumber == 4) {
        // HACK SIMULATION (The hacking part isn't real, you can press the reset button to clear it)
        basic.showString("!!! HACKED !!!")
        for (let index = 0; index < 200; index++) {
            for (let y = 0; y <= 4; y++) {
                for (let x = 0; x <= 4; x++) {
                    if (Math.randomBoolean()) {
                        led.plot(x, y)
                    } else {
                        led.unplot(x, y)
                    }
                }
            }
            basic.pause(200)
        }
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            for (let y2 = 0; y2 <= 4; y2++) {
                col = Math.randomRange(0, 4)
                led.plot(col, y2)
            }
            basic.pause(200)
        }
        for (let t = 5; t > 0; t--) {
            basic.showNumber(t)
            basic.pause(500)
        }
basic.showString("Press A+B")
        const tempUnlock = () => unlocked = true
input.onButtonPressed(Button.AB, tempUnlock)
while (!(unlocked)) {
            basic.pause(100)
        }
        input.onButtonPressed(Button.AB, tempUnlock)
basic.showString("UNLOCKED")
        basic.clearScreen()
        showMenuOption()
    }
})
input.onButtonPressed(Button.A, function () {
    message += 0 - 1
    if (message < 1) {
        message = 4
    }
    showMenuOption()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(message)
    basic.showString("Sent" + message)
    basic.showIcon(getIconForMessage(message))
basic.pause(1000)
    showMenuOption()
})
input.onButtonPressed(Button.B, function () {
    message += 1
    if (message > 4) {
        message = 1
    }
    showMenuOption()
})
function showMenuOption () {
    basic.clearScreen()
    basic.showString("" + (message))
    basic.showIcon(getIconForMessage(message))
}
let col = 0
let unlocked = false
let message = 0
message = 1
let Group = 44
radio.setGroup(Group)
basic.showString("Radio Connected")
basic.pause(500)
basic.showNumber(Group)
basic.pause(500)
showMenuOption()
