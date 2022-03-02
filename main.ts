let distancia = 0
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    basic.pause(3000)
    basic.clearScreen()
})
