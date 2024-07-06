export function formatNumber(num: number) {
    const suffixes = ['', 'K', 'M', 'B', 'T']; // for Thousand, Million, Billion, Trillion, etc.
    let suffixIndex = 0;

    while (num >= 1000 && suffixIndex < suffixes.length - 1) {
        num /= 1000;
        suffixIndex++;
    }

    return num.toFixed(2) + suffixes[suffixIndex];
}

export function timeAgo(date: string) {
    const now = new Date();
    const secondsPast = (now.getTime() - new Date(date).getTime()) / 1000;
    
    if (secondsPast < 60) {
        return `${Math.floor(secondsPast)} seconds ago`;
    }
    if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)} minutes ago`;
    }
    if (secondsPast < 86400) {
        return `${Math.floor(secondsPast / 3600)} hours ago`;
    }
    if (secondsPast < 2592000) {
        return `${Math.floor(secondsPast / 86400)} days ago`;
    }
    if (secondsPast < 31104000) {
        return `${Math.floor(secondsPast / 2592000)} months ago`;
    }
    return `${Math.floor(secondsPast / 31104000)} years ago`;
}