let seed = Number(searchParams.get("seed"));
if (!searchParams.has("seed"))
    seed = Math.random();
document.getElementById("seed").innerText = "The seed Is " + seed.toString();

var rng = new RNG(seed);

let length = Number(searchParams.get("length"))
if (!searchParams.has("length")) {
    let maxLength = Number(searchParams.get("maxLength"));
    if (!searchParams.has("maxLength"))
        maxLength = 10^100;

    length = rng.nextRange(1, maxLength);
} else
    rng.nextInt();

const text = document.createElement("div");
document.querySelector("div.body").appendChild(text);

let maxChar = Number(searchParams.get("maxChar"))
if (!searchParams.has("maxChar"))
    maxChar = 1114111;

let minChar = Number(searchParams.get("minChar"))
if (!searchParams.has("minChar"))
    minChar = 0;

for (let letter = 0; letter < length; letter++) {
    text.innerHTML += "&#" + rng.nextRange(minChar, maxChar) + ";";
}

async function copy() {
    let url = new URL(window.location.href);
    url.searchParams.set("seed", seed.toString());
    // Source - https://stackoverflow.com/questions/49618618/copy-current-url-to-clipboard
    // Posted by ppajer
    // Retrieved 04/11/2025, License - CC-BY-SA 4.0
    var dummy = document.createElement('input');

    document.body.appendChild(dummy);
    dummy.value = url.toString();
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}  