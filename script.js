const suggestions = ["Exam Results", "Course Finder", "Scholarship Info", "Student Services", "Campus Life"];
        let index = 0;

        // Change button text every 4 seconds
        setInterval(() => {
            const button = document.getElementById('search-button');
            // Only change text if the input is empty
            if (document.getElementById('search-input').value === "") {
                button.textContent = suggestions[index];
                index = (index + 1) % suggestions.length; // Loop back to the first suggestion
            }
        }, 4000);






function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })


    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

}

function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

locomotiveAnimation()

navAnimation()

page2Animation()

page3VideoAnimation()

page6Animations()

loadingAnimation()


const savedLinks = [
    { name: "Bihar 4 Year BED Entrance Exam Result 2024", url: "https://www.sarkariresult.com/2024/bihar-4yr-bed/" },
    { name: "RBI Officer Grade B Phase I Marks, Cutoff 2024", url: "https://www.sarkariresult.com/bank/rbi-officer-gradeb-july24/" },
    { name: "IBPS Clerk 14th Pre Result 2024", url: "https://www.sarkariresult.com/bank/ibps-clerk-14th-2024/" },
    { name: "UP Ayush NEET UG Merit List 2024", url: "https://www.sarkariresult.com/2024/up-ayush-neet-ug/" },
    // ... add more saved links as necessary
];

// Show suggestions based on user input
function showSuggestions() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions-container');
    
    // Clear any previous suggestions
    suggestionsContainer.innerHTML = '';
    
    // Filter saved links based on the input
    const filteredLinks = savedLinks.filter(link => link.name.toLowerCase().includes(input));
    
    if (input.length > 0 && filteredLinks.length > 0) {
        // Show filtered saved links
        filteredLinks.forEach(link => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
            suggestionsContainer.appendChild(suggestionItem);
        });
    } else {
        // Add Google search option if no saved results match
        const googleSuggestion = document.createElement('div');
        googleSuggestion.className = 'suggestion-item';
        googleSuggestion.innerHTML = `<a href="https://www.google.com/search?q=${input}" target="_blank">Search Google for "${input}"</a>`;
        suggestionsContainer.appendChild(googleSuggestion);
    }

    // Display the suggestions container if there are suggestions
    suggestionsContainer.style.display = filteredLinks.length > 0 || input.length > 0 ? 'block' : 'none';
}

// Handle the search button click
document.getElementById('search-button').addEventListener('click', function() {
    const input = document.getElementById('search-input').value.toLowerCase();
    
    // Check if any saved link matches the input exactly
    const match = savedLinks.find(link => link.name.toLowerCase() === input);
    
    if (match) {
        // Redirect to the matched link
        window.open(match.url, '_blank');
    } else {
        // Redirect to Google search if no exact match
        window.open(`https://www.google.com/search?q=${input}`, '_blank');
    }
});
