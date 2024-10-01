        const data = [
            {
                backgroundImage: "linear-gradient(#009ea1, #44c4a3)",
            },
            {
                backgroundImage: "linear-gradient(#24b490, #89eda4)",
            },
            {
                backgroundImage: "linear-gradient(#9897e5, #76b6e2)",
            },
            {
                backgroundImage: "linear-gradient(#b2bf3b, #e3e46c)",
            },
        ];
    
        const backgroundContainer = document.getElementById("ws-main-background");
    
        const backgrounds = [];
        for (let i = 0; i < data.length; i++) {
            let background = document.createElement("div");
            background.className = "ws-swiper-background";
            background.style.backgroundImage = data[i].backgroundImage;
            background.style.opacity = i > 0 ? 0 : 1;
            backgroundContainer.appendChild(background);
            backgrounds.push(background);
        }
    
        const swiper = new Swiper(".ws-swiper", {
            // Optional parameters
            direction: "horizontal",
            loop: true,
            speed: 700,
    
            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            on: {
                progress: function(swiper, progress) {
                    const endIndex = Math.floor(progress * (data.length + 1) + 0.01 + data.length) % data.length;
                    const startIndex = (endIndex - 1 + data.length) % data.length;
                    const percent = ((progress * (data.length + 1) * 100) % 100) / 100;
    
                    backgrounds[endIndex].style.opacity = percent;
                    backgrounds[startIndex].style.opacity = 1 - percent;
                },
                slideChange: function(swiper) {
                    const index = (swiper.activeIndex - 1 + data.length) % data.length;
                    for (let i = 0; i < data.length; i++) {
                        backgrounds[i].style.opacity = i === index ? 1 : 0;
                    }
                },
                touchStart: function(swiper, event) {
                    for (let i = 0; i < data.length; i++) {
                        backgrounds[i].style.transitionDuration = "100ms";
                    }
                },
                touchEnd: function(swiper, event) {
                    for (let i = 0; i < data.length; i++) {
                        backgrounds[i].style.transitionDuration = "1000ms";
                    }
                },
            },
            autoplay: {
                delay: 6500,
            },
        });