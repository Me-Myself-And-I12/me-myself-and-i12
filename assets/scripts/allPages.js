const searchParams = new URLSearchParams(location.search);

function maketopbar(active) {
    const barItems = [
        {href: "/index.html", name: "Home"},
        {href: "/about.html", name: "About"},
        {href: "/randomImage.html", name: "Random image"},
        {href: "/links.html", name: "Stuff I used"},
    ];
    const bar = document.querySelector("ul.topbar");
    for (let item of barItems) {
        let barItem = document.createElement("li");
        let link = document.createElement("a");
        link.href = item.href;
        link.innerHTML = item.name;
        if (active === item.href.replace("/", "").replace(".html", ""))
            link.classList.add("active");
        barItem.appendChild(link);
        bar.appendChild(barItem);
    }
}