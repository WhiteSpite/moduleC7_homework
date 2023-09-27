export function isPrime(num) {
    let result = 'error'
    if (num <= 1000 && num > 1) {
        let isPrime = true
        let numForIter = num
        for (let i = 2; i < numForIter; i++) {
            if (num % i === 0) {
                isPrime = false
                break
            } else numForIter = num / i
        }
        if (isPrime) result = 'prime'
        else result = 'composite'
    } else result = 'incorrect arg'
    return result
}
