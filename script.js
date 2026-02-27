/**
 * Converter Bahasa Alay (Bidirectional)
 * Normal → Alay dan Alay → Normal
 * Pendekatan: mapping karakter per karakter
 */

// Mode saat ini: 'toAlay' atau 'toNormal'
let currentMode = 'toAlay';

// Mapping huruf ke variasi alay
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
    'h': ['h', 'H'],
    'j': ['j', 'J'],
    'k': ['k', 'K'],
    'l': ['l', 'L'],
    'm': ['m', 'M'],
    'n': ['n', 'N'],
    'p': ['p', 'P'],
    'q': ['q', 'Q'],
    'r': ['r', 'R'],
    's': ['5'],
    't': ['t', 'T'],
    'v': ['v', 'V'],
    'w': ['VV'],
    'x': ['x', 'X'],
    'y': ['y', 'Y'],
    'z': ['z', 'Z'],
};

// Buat reverse map: alay char/string → huruf normal
// Multi-char mappings (seperti 'VV' → 'w') diproses terlebih dahulu
const reverseMap = {};
const reverseMultiChar = []; // untuk mapping lebih dari 1 karakter

for (const [normal, alayVariants] of Object.entries(alayCharMap)) {
    for (const alay of alayVariants) {
        const alayLower = alay.toLowerCase();
        // Jangan map jika alay sama dengan huruf aslinya (tidak perlu di-reverse)
        if (alayLower === normal) continue;
        if (alay.length > 1) {
            reverseMultiChar.push({ from: alayLower, to: normal });
        } else {
            reverseMap[alayLower] = normal;
        }
    }
}
// Urutkan multi-char dari yang terpanjang agar greedy match
reverseMultiChar.sort((a, b) => b.from.length - a.from.length);

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Normal → Alay
function toAlay(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const lower = ch.toLowerCase();
        if (alayCharMap[lower]) {
            result += pickRandom(alayCharMap[lower]);
        } else {
            if (Math.random() > 0.65) {
                result += ch.toUpperCase();
            } else {
                result += ch.toLowerCase();
            }
        }
    }
    return result;
}

// Alay → Normal
function toNormal(text) {
    let result = '';
    let i = 0;
    while (i < text.length) {
        let matched = false;
        // Cek multi-char mappings terlebih dahulu (greedy)
        for (const { from, to } of reverseMultiChar) {
            const slice = text.substring(i, i + from.length).toLowerCase();
            if (slice === from) {
                result += to;
                i += from.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            const ch = text[i];
            const lower = ch.toLowerCase();
            if (reverseMap[lower]) {
                result += reverseMap[lower];
            } else {
                result += lower;
            }
            i++;
        }
    }
    return result;
}

// Toggle mode
const btnToAlay = document.getElementById('modeNormalToAlay');
const btnToNormal = document.getElementById('modeAlayToNormal');
const convertBtn = document.getElementById('convertBtn');
const inputText = document.getElementById('inputText');

btnToAlay.addEventListener('click', function () {
    currentMode = 'toAlay';
    btnToAlay.classList.add('active');
    btnToNormal.classList.remove('active');
    convertBtn.textContent = 'Convert ke Alay';
    inputText.placeholder = 'Tulis kalimat normal di sini...';
});

btnToNormal.addEventListener('click', function () {
    currentMode = 'toNormal';
    btnToNormal.classList.add('active');
    btnToAlay.classList.remove('active');
    convertBtn.textContent = 'Convert ke Normal';
    inputText.placeholder = 'Tulis kalimat alay di sini...';
});

// Tombol convert
convertBtn.addEventListener('click', function () {
    const input = inputText.value;
    const output = currentMode === 'toAlay' ? toAlay(input) : toNormal(input);
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