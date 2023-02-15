const firstNumber = 323
const secondNumber = 2132
const thirdNumber = 511
const fourthNumber = 432

if (firstNumber > secondNumber && firstNumber > thirdNumber && firstNumber > fourthNumber) {

    console.log("Первое число -", firstNumber)

    if (secondNumber > thirdNumber && secondNumber > fourthNumber) {

        console.log("Второе число -", secondNumber)
        if (thirdNumber > fourthNumber) {

            console.log("Третье число -", thirdNumber)
            console.log("Четвертое число -", fourthNumber)

        } else {

            console.log("Четвертое число -", fourthNumber)
            console.log("Третье число -", thirdNumber)

        }

    } else if (thirdNumber > secondNumber && thirdNumber > fourthNumber) {

        console.log("Третье число -", thirdNumber)
        if (secondNumber < fourthNumber) {

            console.log("Второе число -", secondNumber)
            console.log("Четвертое число -", fourthNumber)

        } else {

            console.log("Четвертое число -", fourthNumber)
            console.log("Второе число -", secondNumber)

        }

    } else if (fourthNumber > secondNumber && fourthNumber > thirdNumber) {

        console.log("Четвертое число -", fourthNumber)
        if (secondNumber > thirdNumber) {

            console.log("Второе число -", secondNumber)
            console.log("Третье число -", thirdNumber)

        } else {

            console.log("Третье число -", thirdNumber)
            console.log("Второе число -", secondNumber)

        }
    }


} else if (secondNumber > firstNumber && secondNumber > thirdNumber && secondNumber > fourthNumber) {

    console.log("Второе число -", secondNumber)

    if (firstNumber > thirdNumber && firstNumber > fourthNumber) {

        console.log("Первое число -", firstNumber)
        if (thirdNumber > fourthNumber) {

            console.log("Третье число -", thirdNumber)
            console.log("Четвертое число -", fourthNumber)

        } else {

            console.log("Четвертое число -", fourthNumber)
            console.log("Третье число -", thirdNumber)

        }

    } else if (thirdNumber > firstNumber && thirdNumber > fourthNumber) {

        console.log("Третье число -", thirdNumber)
        if (firstNumber > fourthNumber) {

            console.log("Первое число -", irstNumber)
            console.log("Четвертое число -", fourthNumber)

        } else {

            console.log("Четвертое число -", fourthNumber)
            console.log("Первое число -", firstNumber)
        }

    } else if (fourthNumber > firstNumber && fourthNumber > thirdNumber) {

        console.log("Четвертое число -", fourthNumber)
        if (firstNumber > thirdNumber) {}

        console.log("Первое число -", firstNumber)
        console.log("Третье число -", thirdNumber)

    } else {

        console.log("Третье число -", thirdNumber)
        console.log("Первое число -", firstNumber)

    }

} else if (thirdNumber > firstNumber && thirdNumber > secondNumber && thirdNumber > fourthNumber) {

    console.log("Третье число -", thirdNumber)

    if (firstNumber > secondNumber && firstNumber > fourthNumber) {

        console.log("Первое число -", firstNumber)
        if (secondNumber > fourthNumber) {

            console.log("Второе число -", secondNumber)
            console.log("Четвертое число -", fourthNumber)

        } else {

            console.log("Четвертое число -", fourthNumber)
            console.log("Второе число -", secondNumber)

        }

    } else if (secondNumber > firstNumber && secondNumber > fourthNumber) {

        console.log("Второе число -", secondNumber)
        if (firstNumber > fourthNumber) {

            console.log("Первое число -", firstNumber)
            console.log("Четвертое число -", fourthNumber)
        } else {

            console.log("Четвертое число -", fourthNumber)
            console.log("Первое число -", firstNumber)
        }

    } else if (fourthNumber > firstNumber && fourthNumber > secondNumber) {

        console.log("Четвертое число -", fourthNumber)
        if (firstNumber > secondNumber) {

            console.log("Первое число -", firstNumber)
            console.log("Второе число -", secondNumber)

        } else {

            console.log("Второе число -", secondNumber)
            console.log("Первое число -", firstNumber)

        }

    }

} else if (fourthNumber > firstNumber && fourthNumber > thirdNumber && fourthNumber > thirdNumber) {

    console.log("Четвертое число -", fourthNumber)

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {

        console.log("Первое число -", firstNumber)
        if (secondNumber > thirdNumber) {

            console.log("Второе число -", secondNumber)
            console.log("Третье число -", thirdNumber)

        } else {

            console.log("Третье число -", thirdNumber)
            console.log("Второе число -", secondNumber)

        }

    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {

        console.log("Второе число -", secondNumber)
        if (firstNumber > thirdNumber) {

            console.log("Первое число -", firstNumber)
            console.log("Третье число -", hirdNumber)

        } else {

            console.log("Третье число -", thirdNumber)
            console.log("Первое число -", firstNumber)

        }

    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {

        console.log("Третье число -", thirdNumber)
        if (firstNumber > secondNumber) {

            console.log("Первое число -", firstNumber)
            console.log("Второе число -", secondNumber)

        } else {
            console.log("Второе число -", secondNumber)
            console.log("Первое число -", firstNumber)
        }

    }

}