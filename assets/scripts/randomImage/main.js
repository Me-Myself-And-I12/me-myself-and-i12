let seed = Number(searchParams.get("seed"));
if (!searchParams.has("seed"))
    seed = Math.random();
document.getElementById("seed").innerText = "The seed Is " + seed.toString();

var rng = new RNG(seed);

const canvas = document.querySelector("canvas.full");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ctx = canvas.getContext("2d");

let width = Number(searchParams.get("width"))
if (!searchParams.has("width")) {
    let maxWidth = Number(searchParams.get("maxWidth"));
    if (!searchParams.has("maxWidth"))
        maxWidth = canvas.clientWidth;

    width = rng.nextRange(0, maxWidth);
} else
    rng.nextInt();

let height = Number(searchParams.get("height"))

if (!searchParams.has("height")) {
    let maxHeight = Number(searchParams.get("maxHeight"));
    if (!searchParams.has("maxHeight"))
        maxHeight = canvas.clientHeight;
    height = rng.nextRange(0, maxHeight);
} else
    rng.nextInt()

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        ctx.lineWidth = 0;
        ctx.fillStyle = "rgb(" + rng.nextRange(0, 256) + ", " + rng.nextRange(0, 256) + ", " + rng.nextRange(0, 256) + ")";
        ctx.fillRect(x * canvas.clientWidth / width, y * canvas.clientHeight / height, canvas.clientWidth / width, canvas.clientHeight / height);
    }
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