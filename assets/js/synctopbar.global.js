async function getip() {
    try {
        let res = await fetch("https://api.ipify.org?format=json");
        let data = await res.json();
        return data.ip;
    } catch (err) {
        console.error(err);
    }
}

const ascii = `
  /$$$$$$            /$$                            /$$$$$$            /$$ /$$
 /$$__  $$          | $$                           /$$__  $$          | $$|__/
| $$  \\__/ /$$   /$$| $$$$$$$   /$$$$$$   /$$$$$$ | $$  \\__/  /$$$$$$ | $$ /$$ /$$$$$$$
| $$      | $$  | $$| $$__  $$ /$$__  $$ /$$__  $$| $$       /$$__  $$| $$| $$| $$__  $$
| $$      | $$  | $$| $$  \\ $$| $$$$$$$$| $$  \\__/| $$      | $$  \\ $$| $$| $$| $$  \\ $$
| $$    $$| $$  | $$| $$  | $$| $$_____/| $$      | $$    $$| $$  | $$| $$| $$| $$  | $$
|  $$$$$$/|  $$$$$$$| $$$$$$$/|  $$$$$$$| $$      |  $$$$$$/|  $$$$$$/| $$| $$| $$  | $$
 \\______/  \\____  $$|_______/  \\_______/|__/       \\______/  \\______/ |__/|__/|__/  |__/
           /$$  | $$
          |  $$$$$$/
           \\______/
`;

const navData = [
    {
        label: "Home",
        href: "/",
        className: "cat"
    },
    {
        label: "About Me",
        href: "/pages/aboutme/",
        className: "cat",
        items: [
            {label: "Interests", href: "/pages/aboutme/p/interests", className: "nbiitem"},
            {label: "My links", href: "/pages/aboutme/p/mylinks", className: "nbiitem"}
        ]
    },
    {
        label: "Projects",
        href: "/pages/projects/",
        className: "cat",
        items: [
            {label: "Python", href: "/pages/projects/python/", className: "nbiitem"},
            {label: "HTML", href: "/pages/projects/html/", className: "nbiitem"}
        ]
    },
    {
        label: "Other",
        href: "#",
        className: "cat",
        items: [
            {label: "Guides", href: "https://guides.cybercolin.org/", className: "nbiitem"},
            {label: "Blog", href: "https://blog.cybercolin.org/", className: "nbiitem"},
            {label: "Apps", href: "https://apps.cybercolin.org/", className: "nbiitem"}
        ]
    }
];

let userip;
getip().then(ip => {
    userip = ip;
    marqueeMessages.push(`Ur public ip is ${userip} btw`);
});

let marqueeMessages = [
    "Welcome to my website!",
    "HTML is a pain in the ass to use",
    "I use arch btw",
    "SGFoYSB3YXN0ZWQgdXIgdGltZQ==", // "Haha wasted ur time" in base64 encoding
    "That freakin' snipers a spy!",
    "33.5 x 2 = ?",
    "00110110 00110111"
];

function getCurrentPage() {
    return window.location.pathname || "/index.html";
}

function findCurrentLabel(navItems, currentPage) {
    for (let cat of navItems) {
        if (cat.href === currentPage) {
            return cat.label;
        }
        if (cat.items) {
            for (let item of cat.items) {
                if (item.href === currentPage) {
                    return cat.label;
                }
            }
        }
    }
    return "Home";
}

function buildNav(navItems) {
    const currentPage = getCurrentPage();
    const ul = document.createElement("ul");
    navItems.forEach(cat => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        let isCurrent = cat.href === currentPage;
        let isInCategory = cat.items && cat.items.some(item => item.href === currentPage);
        if (isCurrent) {
            a.className = "curcat";
        } else if (isInCategory) {
            a.className = "curparent";
        } else {
            a.className = cat.className || "";
        }
        a.textContent = cat.label;
        a.href = cat.href || "#";
        li.appendChild(a);
        if (cat.items && cat.items.length > 0) {
            const subUl = document.createElement("ul");
            cat.items.forEach(item => {
                const subLi = document.createElement("li");
                const subA = document.createElement("a");
                subA.textContent = item.label;
                subA.href = item.href || "#";
                subA.className = (item.href === currentPage) ? "curcat" : (item.className || "");
                subLi.appendChild(subA);
                subUl.appendChild(subLi);
            });
            li.appendChild(subUl);
        }
        ul.appendChild(li);
    });
    return ul.outerHTML;
}

function pickRandomMessage() {
    return marqueeMessages[Math.floor(Math.random() * marqueeMessages.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPage();
    const currentLabel = findCurrentLabel(navData, currentPage);

    const headercode = `
        <h1 class="header-title">${currentLabel} | <a class="nav-title-a" href="https://cybercolin.org/">cybercolin.org</a></h1>
        <div class="marquee-container">
            <div class="marquee-text" id="marquee">
                ${pickRandomMessage()}
            </div>
        </div>
        <nav>
            ${buildNav(navData)}
        </nav>
    `;
    document.getElementById('header.insert').innerHTML = headercode;
    document.getElementById('header.insert').removeAttribute('id');
    console.log('<header> sync complete!');
    console.log(ascii);
    console.log("+=--------------------------------------=+")
    console.log("Why are you here?");
    console.log("Get out of the console you snoopy little guy/gal/human/being/organism");
    const marqueeDiv = document.getElementById("marquee");
    marqueeDiv.addEventListener("animationiteration", () => {
        marqueeDiv.textContent = pickRandomMessage();
    });
});