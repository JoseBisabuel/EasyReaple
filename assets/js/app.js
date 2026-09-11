"use strict";

if (document.getElementById("particles-js")) {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#0A84FF"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 2
            },

            line_linked: {
                enable: true,
                distance: 170,
                color: "#3A9EFF",
                opacity: 0.35,
                width: 1
            },

            move: {
                enable: true,
                speed: 1.5
            }

        },

        interactivity: {

    detect_on: "canvas",

    events: {

        onhover: {
            enable: true,
            mode: "grab"
        },

        onclick: {
            enable: false
        },

        resize: true

    },

    modes: {

        grab: {

            distance: 280,

            line_linked: {

                opacity: 1

            }

        }

    }

},
        

        retina_detect: true

    });

}