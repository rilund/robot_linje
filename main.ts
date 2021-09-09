bitbot.select_model(BBModel.XL)
basic.pause(1000)
bitbot.ledRainbow()
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.rotate(BBRobotDirection.Left, 20)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 20)
    } else {
        bitbot.go(BBDirection.Forward, 38)
    }
})
