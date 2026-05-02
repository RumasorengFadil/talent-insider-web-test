export function formatIDRShort(value: number): string {
    if (value >= 1_000_000_000) {
        const milyar = value / 1_000_000_000;
        return `${formatNumber(milyar)} milyar`;
    }

    if (value >= 100_000_000) {
        const juta = value / 1_000_000;
        return `${formatNumber(juta)} juta`;
    }

    // fallback ke format biasa
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value);
}

function formatNumber(num: number) {
    // biar gak panjang (1.5, 2.3, dst)
    return Number.isInteger(num) ? num : num.toFixed(1);
}