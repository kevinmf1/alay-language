/**
 * Converter Bahasa Normal ke Bahasa Alay
 * Pendekatan: mapping karakter per karakter dengan variasi acak
 * Referensi gaya alay: forum Kaskus, Facebook era 2009-2012, SMS alay
 */

// Mapping huruf ke variasi alay (lebih dari 1 pilihan per huruf agar hasil bervariasi)
const alayCharMap = {
    // Vokal
    'a': ['4'],
    'e': ['3'],
    'i': ['1'],
    'o': ['o'],
    'u': ['u', 'U'],

    // Konsonan
    'b': ['8'],
    'c': ['c', 'C'],
    'd': ['d', 'D'],
    'f': ['f', 'F'],
    'g': ['9', '6'],
    'h': ['h', 'H',], // |-|
    'j': ['j', 'J'],
    'k': ['k', 'K'], // |< 
    'l': ['l', 'L'],
    'm': ['m', 'M'],
    'n': ['n', 'N'],
    'p': ['p', 'P'],
    'q': ['q', 'Q'],
    'r': ['r', 'R'], // 12 untuk 'r' karena bentuknya mirip
    's': ['5'],
    't': ['t', 'T'],
    'v': ['v', 'V'],
    'w': ['VV'],
    'x': ['x', 'X'],
    'y': ['y', 'Y'],
    'z': ['z', 'Z'],
};

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function toAlay(text) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const lower = ch.toLowerCase();

        if (alayCharMap[lower]) {
            result += pickRandom(alayCharMap[lower]);
        } else {
            // Spasi, tanda baca, angka, dsb. — beri efek random besar-kecil
            if (Math.random() > 0.65) {
                result += ch.toUpperCase();
            } else {
                result += ch.toLowerCase();
            }
        }
    }

    return result;
}

document.getElementById('convertBtn').addEventListener('click', function () {
    const input = document.getElementById('inputText').value;
    const output = toAlay(input);
    document.getElementById('outputText').value = output;
});

// Tombol copy hasil
document.getElementById('copyBtn').addEventListener('click', function () {
    const output = document.getElementById('outputText').value;
    if (!output) return;
    navigator.clipboard.writeText(output).then(function () {
        const btn = document.getElementById('copyBtn');
        btn.textContent = 'Tersalin!';
        setTimeout(function () {
            btn.textContent = 'Copy Hasil';
        }, 1500);
    });
});

// Support tekan Enter di textarea (Shift+Enter untuk new line)
document.getElementById('inputText').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('convertBtn').click();
    }
});