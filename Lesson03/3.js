function rank(n) {
    if (n == 1) return parseInt(1);
    else return parseInt(n) + parseInt(rank(n - 1));
}

function sorted(banners, length) {
    let n;
    for (let i = 0; i < length; i++) {
        for (let j = 1; j < length - i; j++) {
            if (banners[j] > banners[j - 1]) {
                n = banners[j - 1];
                banners[j - 1] = banners[j];
                banners[j] = n;
            }
        }
    }
    return banners;
}

function selectBanners(banners, count) {
    const len = banners.length;
    const size = rank(len);
    let sortBanners = [size];
    let weight = [len];
    for (let i = 0; i < len; i++) {
        weight[i] = parseInt(banners[i].weight)
    }
    weight = sorted(weight, len);
    let k = 0;
    for (let i = 0; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            sortBanners[k++] = weight[j];
        }
    }
    const randomBanners = [];
    let l = 0
    for (let i = 0; i < count; i++) {
        while (l == 0) {
            l = Math.round(Math.random() * (size-1));
            for (let j = 0; j <= i; j++) {
                if (l == sortBanners[j]) {
                    l = 0;
                }
            }
        }
        randomBanners[i] = sortBanners[l];
        l = 0;
    }
    return randomBanners;
}

const banners = [
    { id: 2, weight: 10 },
    { id: 4, weight: 5 },
    { id: 8, weight: 15 },
    { id: 22, weight: 18 },
    { id: 41, weight: 41 },
    { id: 53, weight: 1 },
    { id: 69, weight: 9 },
];

console.log(selectBanners(banners, 3));