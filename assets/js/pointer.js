/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/

const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
            pointerColor: "#750c7e",
            ringColor: "white",
            ringSize: 20,
            ringClickSize: (options["ringSize"] || 20) - 5,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.2)
        ringY = trace(ringY, mouseY, 0.2)

        // if (document.querySelector(".action-hover:hover")) {
        //     ring.style.padding = getOption("ringSize") + 5 + "px"
        //     ring.style.opacity = "0"
        //     isHover = true 
        // } else {
        //     ring.style.padding = getOption("ringSize") + "px"
        //     ring.style.opacity = "1"
        //     isHover = false
        // }

        if (document.querySelector(".btn-action-hover:hover")) {
            pointer.style.borderColor = getOption("ringColor")
            ring.style.borderColor = getOption("pointerColor")
            ring.style.opacity = "0"
            isHover = true
        } else if (document.querySelector(".nav-action-hover:hover")) {
            pointer.style.borderColor = getOption("pointerColor")
            ring.style.borderColor = "black"
            ring.style.opacity = "0"
            isHover = true
        } else  if (document.querySelector(".footer-action-hover:hover")) {
            pointer.style.borderColor = "black"
            ring.style.borderColor = getOption("pointerColor")
            ring.style.opacity = "0"
            isHover = true
        } else if (document.querySelector("footer:hover")) {
            pointer.style.borderColor = "white"
            ring.style.borderColor = "black"
            ring.style.opacity = "1"
            isHover = true
        } else if (document.querySelector("p:hover")) {
            pointer.style.borderColor = getOption("pointerColor")
            ring.style.opacity = "0"
            isHover = true
        } 
        else if (document.querySelector(".title:hover")) {
            ring.style.opacity = "0"
            isHover = true
        } 
        else if (document.querySelector(".ywait:hover")) {
            pointer.style.borderColor = "#1C1C1C"
            ring.style.borderColor = "#1C1C1C"
            ring.style.opacity = "1"
            isHover = true
        }
        else if (document.querySelector(".tagline:hover")) {
            pointer.style.borderColor = "#1C1C1C"
            ring.style.borderColor = "#1C1C1C"
            ring.style.opacity = "1"
            isHover = true
        }
        else {
            pointer.style.borderColor = getOption("ringColor")
            ring.style.borderColor = getOption("pointerColor")
            ring.style.opacity = "1"
            isHover = false
        }

        // ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.style.padding = getOption("ringSize") + "px"
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}