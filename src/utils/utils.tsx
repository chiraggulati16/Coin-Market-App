export function formatNumber(num: number) {
    const suffixes = ['', 'K', 'M', 'B', 'T']; // for Thousand, Million, Billion, Trillion, etc.
    let suffixIndex = 0;

    while (num >= 1000 && suffixIndex < suffixes.length - 1) {
        num /= 1000;
        suffixIndex++;
    }

    return num.toFixed(2) + suffixes[suffixIndex];
}