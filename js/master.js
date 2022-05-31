////responsive menu
let hamb = document.querySelector(".hamburgers");
let links = document.querySelector(".links");

hamb.addEventListener("click", () => {
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
});

////change career content
// select span
let jobChange = document.querySelector(".job");
// Array of words
let jobPosition = [
    "web designer",
    "web developer",
    "photographer",
    "freelancer",
];

setInterval(() => {
    // get random number
    let randomNum = Math.floor(Math.random() * jobPosition.length);
    jobChange.innerHTML = jobPosition[randomNum];
}, 2000);

// select the icon
let gearBox = document.querySelector(".setting-box .fa-gear");
let iconBox = document.querySelector(".setting-box .iconBox ");
//select the setting box
let settingBox = document.querySelector(".setting-box");

gearBox.addEventListener("click", () => {
    // toggle class for rotate icon
    gearBox.classList.toggle("fa-spin");
    //toggle class for apear setting box
    settingBox.classList.toggle("apear");
});

//// change website color
// get color from localStorage
let mainColor = localStorage.getItem("color-option");

if (mainColor != null) {
    //set color to website
    document.documentElement.style.setProperty("--main-color", mainColor);
}
//select the color list
let colorList = document.querySelectorAll(".setting-box .colorList li");
for (let i = 0; i < colorList.length; i++) {
    colorList[i].addEventListener("click", function(e) {
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );
        //set color in localstorage
        localStorage.setItem("color-option", e.target.dataset.color);
        //remove active from colors on click
        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        });
        //add active to color we choose
        e.target.classList.add("active");
    });
}
// set color in local storage

/// change background image

//select imgs
let backgroundList = document.querySelectorAll(
    ".setting-box .backgroundlist img"
);
//select landing background
let bgchange = document.querySelector(".landing-page");

// get value from localStorage
let bgOption = localStorage.getItem("background-option");

if (bgOption !== null) {
    //set value in background image
    bgchange.style.backgroundImage = `url(${bgOption}) `;
}
for (let i = 0; i < backgroundList.length; i++) {
    backgroundList[i].addEventListener("click", function() {
        //get the source of img clicked
        let backgroundImg = backgroundList[i].getAttribute("src");
        //set the source img in the background
        bgchange.style.backgroundImage = `url(${backgroundImg})`;
        //set value to local storage
        localStorage.setItem("background-option", backgroundImg);
    });
}

// start scroll code
let scrollUp = document.querySelector(".scrollUp");

//display the button
window.onscroll = function() {
    if (window.scrollY >= 400) {
        scrollUp.style.display = "block";
        iconBox.style.backgroundColor = "black";
        gearBox.style.color = "#fff";
    } else {
        scrollUp.style.display = "none";
        iconBox.style.backgroundColor = "#fff";
        gearBox.style.color = "black";
    }
    skillAnimate();
};
//event up to top
scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
// end scroll code



let mySkills = document.querySelector(".my-skills");

function skillAnimate() {
    let skillsOffset = mySkills.offsetTop;
    let skillsOuterHeight = mySkills.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrolltTop = window.pageYOffset;

    if (scrolltTop > skillsOffset + skillsOuterHeight - windowHeight) {
        let progressAnimation = document.querySelectorAll(".progress-details span");

        progressAnimation.forEach((skill) => {
            skill.style.width = skill.dataset.progress;
        });
    }
}

//gallary section
let gallaryImages = Array.from(document.querySelectorAll(".gallary-imgs img"));
let overlayBox = document.querySelector(".gallary .img-overlay");
let overlayBoxImage = document.querySelector(".gallary .img-overlay img");
let arrowRight = document.querySelector("#moveBack");
let arrowLeft = document.querySelector("#moveNext");
let closeButton = document.querySelector("#closed");
let currentIndex;

gallaryImages.forEach((img) => {
    img.onclick = function() {
        overlayBox.style.visibility = "visible";
        let imgSrc = img.getAttribute("src");
        overlayBoxImage.setAttribute("src", imgSrc);
    };
});

for (let i = 0; i < gallaryImages.length; i++) {
    gallaryImages[i].addEventListener("click", function(e) {
        currentIndex = gallaryImages.indexOf(e.target);
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex == gallaryImages.length) {
        currentIndex = 0;
    }

    imgSrc = gallaryImages[currentIndex].getAttribute("src");
    overlayBoxImage.setAttribute("src", imgSrc);
}

function backSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = gallaryImages.length - 1;
    }

    imgSrc = gallaryImages[currentIndex].getAttribute("src");
    overlayBoxImage.setAttribute("src", imgSrc);
}

function closeAction() {
    overlayBox.style.visibility = "hidden";
}
arrowRight.onclick = function() {
    nextSlide();
};
arrowLeft.onclick = function() {
    backSlide();
};

closeButton.onclick = function() {
    closeAction();
};
document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") {
        nextSlide();
    } else if (e.key == "ArrowLeft") {
        backSlide();
    } else if ((e.key = "Escape")) {
        closeAction();
    }
});
// end gallary section

// start bullets script 
let allBullets = document.querySelectorAll(" .nav-bullet .bullet")

allBullets.forEach(bullet => {
    bullet.addEventListener("click", function(e) {
        let sectionTarget = document.querySelector(e.target.dataset.section)
        sectionTarget.scrollIntoView({
            behavior: `smooth`
        })

    })
})

let onButton = document.querySelector("#on");
let offButton = document.querySelector("#off");
let navBullets = document.querySelector(".nav-bullet")
onButton.onclick = function() {
    navBullets.style.display = "block"
}
offButton.onclick = function() {
        navBullets.style.display = "none"
    }
    //end bullets script