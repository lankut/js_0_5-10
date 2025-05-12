// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c,) {
    let max = 0;
    if (a > b) {
        max = a
        if (max > c) {
            return max
        }
        else {
            return c
        }
    } else if (b > a) {
        max = b
        if (max > c) {
            return max
        }
            else {
                return c
            }
    }
    return max
}