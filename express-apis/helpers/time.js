export async function sleep(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms))
}

export function addDays(date, days) {
    var result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

export function getAMorPM(theDate) {
    if (theDate.getHours() >= 12) return 'PM'
    else return 'AM'
}

export function dateDiffInDays(d1, d2) {
    var t2 = d2.getTime()
    var t1 = d1.getTime()

    return Math.abs(Math.floor((t2 - t1) / (24 * 3600 * 1000)))
}

export function getSeason(checkDate) {
    var dateToCheck = new Date(Date.parse(checkDate))
    // the season run 1 july -> 30 June
    if (dateToCheck.getMonth() > 6) {
        return dateToCheck.getFullYear()
    } else return dateToCheck.getFullYear() - 1
}
