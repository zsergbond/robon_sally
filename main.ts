function getMotionSensor () {
    alarmMotion = pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    1
    )
}
function getDistance () {
    for (let index = 0; index < countDist; index++) {
        Distance = Distance + sonar.ping(
        DigitalPin.P13,
        DigitalPin.P14,
        PingUnit.Centimeters
        )
    }
    Distance = Distance / countDist
}
function getMic () {
    alarmMic = pins.digitalReadPin(DigitalPin.P8)
}
let Distance = 0
let alarmMotion = 0
let alarmMic = 0
let countDist = 0
countDist = 5
alarmMic = 0
alarmMotion = 0
let Mode2 = 0
let ServoStart = 0
let ServoEnd = 160
magicbit.Servo(magicbit.Servos.S1, (ServoEnd - ServoStart) / 2 + ServoStart)
basic.forever(function () {
	
})
