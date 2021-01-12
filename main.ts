let Pointing = 0
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    Pointing = input.compassHeading()
    if (Pointing == -1003) {
        basic.showIcon(IconNames.No)
    } else if (Pointing >= 0 && Pointing < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (Pointing >= 23 && Pointing < 68) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (Pointing >= 68 && Pointing < 113) {
        basic.showArrow(ArrowNames.East)
    } else if (Pointing >= 113 && Pointing < 158) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (Pointing >= 158 && Pointing < 203) {
        basic.showArrow(ArrowNames.South)
    } else if (Pointing >= 203 && Pointing < 248) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (Pointing >= 248 && Pointing < 293) {
        basic.showArrow(ArrowNames.West)
    } else if (Pointing >= 293 && Pointing < 338) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (Pointing >= 338 && Pointing < 360) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
