export const MONTH_NAME = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

/**
 * Формат числа
 * @param number
 * @param length
 */
export const formatNumber = (number: number, length: number): string => {

    let string = number.toString()

    while (string.length < length) string = '0' + string

    return string

}

/**
 * Формат даты
 * @param date
 * @param format
 */
export const formatDate = (date: Date | string | undefined, format: string): string => {

    if (typeof date === 'undefined') {
        date = new Date()
    }

    if (typeof date === 'string') {
        date = new Date(date)
    }

    if (format.indexOf('Y') !== -1) {
        format = format.split('Y').join(date.getFullYear().toString())
    }

    if (format.indexOf('m') !== -1) {
        format = format.split('m').join(formatNumber(date.getMonth() + 1, 2))
    }

    if (format.indexOf('d') !== -1) {
        format = format.split('d').join(formatNumber(date.getDate(), 2))
    }

    if (format.indexOf('H') !== -1) {
        format = format.split('H').join(formatNumber(date.getHours(), 2))
    }

    if (format.indexOf('i') !== -1) {
        format = format.split('i').join(formatNumber(date.getMinutes(), 2))
    }

    if (format.indexOf('s') !== -1) {
        format = format.split('s').join(formatNumber(date.getSeconds(), 2))
    }

    return format

}
