module.exports = function toReadable(number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['hundred'];

    if (number < 10) {
        return ones[number];
    }

    if (number < 20 && number > 10) {
        return teens[number-11];
    }

    if (number < 100) {
        const ten = Math.floor(number/10);
        const one = number % 10;
        return one === 0 ? tens[ten-1] : `${tens[ten-1]} ${ones[one]}`;
    }

    if (number < 1000) {
        const hundred = Math.floor(number/100);
        const mod = number % 100;

        if (mod === 0) {
            return `${ones[hundred]} ${hundreds[0]}`;
        } else if (mod < 10) {
            return `${ones[hundred]} ${hundreds[0]} ${ones[mod]}`;
        } else if (mod < 20 && mod>10) {
            return `${ones[hundred]} ${hundreds[0]} ${teens[mod-11]}`;
        } else {
            const ten = Math.floor(mod/10);
            const one = mod % 10;
            return one === 0 ? `${ones[hundred]} ${hundreds[0]} ${tens[ten - 1]}` : `${ones[hundred]} ${hundreds[0]} ${tens[ten - 1]} ${ones[one]}`;
        }
    }

    return '';
}
