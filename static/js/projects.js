window.addEventListener("DOMContentLoaded", ()=>{
    const cover = document.querySelector(".cover");

    gsap.from(cover, {
        duration: 0.8,
        ease: "power4.out",
        scaleY: 1,
        delay: 1,
        onUpdate: ()=>{
            const page = document.querySelector(".page");
            page.style.opacity = "1";
        }
    })

    tooltip();
    scrollAnimation();
})

const tooltip = ()=>{
    const container = document.querySelector(".container");
    const returnBtn = document.querySelector("#return-btn");
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    const p3 = document.querySelector(".p3");
    const p4 = document.querySelector(".p4");
    const p5 = document.querySelector(".p5");
    const p6 = document.querySelector(".p6");
    const p7 = document.querySelector(".p7");
    const p8 = document.querySelector(".p8");
    const p9 = document.querySelector(".p9");
    const p10 = document.querySelector(".p10");
    const p11 = document.querySelector(".p11");
    const p12 = document.querySelector(".p12");
    const p13 = document.querySelector(".p13");
    const p14 = document.querySelector(".p14");
    const p15 = document.querySelector(".p15");
    const p16 = document.querySelector(".p16");
    const p17 = document.querySelector(".p17");
    const p18 = document.querySelector(".p18");
    const p19 = document.querySelector(".p19");
    const p20 = document.querySelector(".p20");
    const p21 = document.querySelector(".p21");
    const p22 = document.querySelector(".p22");
    const p23 = document.querySelector(".p23");
    const p24 = document.querySelector(".p24");
    const p25 = document.querySelector(".p25");
    const p26 = document.querySelector(".p26");
    const p27 = document.querySelector(".p27");
    const p28 = document.querySelector(".p28");
    const p29 = document.querySelector(".p29");
    const p30 = document.querySelector(".p30");
    const p31 = document.querySelector(".p31");
    const p32 = document.querySelector(".p32");
    const p33 = document.querySelector(".p33");
    const p34 = document.querySelector(".p34");

    // Create the shape that follows the mouse cursor
    function shape(color="#000000"){
        // Create the div tag
        const div = document.createElement("div");

        // CSS Styling
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.display = "flex";
        div.style.justifyContent = "end";
        div.style.alignItems = "center"
        div.style.position = "absolute";
        div.style.left = 0;
        div.style.top = 0;
        div.style.zIndex = 2;
        div.style.fontSize = "1.2rem"
        div.style.fontWeight = 500
        div.style.backgroundColor = color;

        //Append the div to the body
        document.body.appendChild(div);
        return div;
    }

    const tag = shape();

    // Move the shape together with the mouse cursor
    document.body.addEventListener("mousemove", (e)=>{
        const x = e.pageX;
        const y = e.pageY;
        const gap = 5; // Gap from the cursor

        tag.style.left = `${x + gap}px`;
        tag.style.top = `${y + gap}px`;
    })

    /**
     * @param {string} content - The text content to display.
     * @param {number} width - The width of the tooltip.
     * @param {number} height - The height of the tooltip.
     * @param {number} [duration=1] - The duration of the animation (default: 1).
     * @param {string} [contentColor="#ffffff"] - The content color (default: white).
     * @param {string} [bgColor="#000000"] - The background color (default: black).
     */

    //Callback function when mouse enters to the target
    const toolTipAnim = (content, width, height, duration=1, contentColor="#ffffff", bgColor="#000000")=>{
        gsap.to(tag, {
            duration: duration,
            ease: "back",
            color: contentColor,
            backgroundColor: bgColor,
            width: width,
            height: height,
            onStart: ()=>{
                tag.textContent = content
                tag.style.paddingRight = "8px"
            }
        })
    }

    const sec = 0.5; //duration in seconds
    const root = document.documentElement;
    const contentColor = getComputedStyle(root).getPropertyValue("--secondary-color");
    const bgColor = getComputedStyle(root).getPropertyValue("--primary-color");

    p1.addEventListener("mouseenter", ()=>toolTipAnim("Banners", 130, 30, sec, contentColor, bgColor));
    p2.addEventListener("mouseenter", ()=>toolTipAnim("Brochures", 150, 30, sec, contentColor, bgColor));
    p3.addEventListener("mouseenter", ()=>toolTipAnim("Calling Cards", 200, 30, sec, contentColor, bgColor));
    p4.addEventListener("mouseenter", ()=>toolTipAnim("Certificates", 180, 30, sec, contentColor, bgColor));
    p5.addEventListener("mouseenter", ()=>toolTipAnim("Flyers", 120, 30, sec, contentColor, bgColor));
    p6.addEventListener("mouseenter", ()=>toolTipAnim("Streamers", 160, 30, sec, contentColor, bgColor));
    p7.addEventListener("mouseenter", ()=>toolTipAnim("Identification Cards", 280, 30, sec, contentColor, bgColor));
    p8.addEventListener("mouseenter", ()=>toolTipAnim("Invitations", 180, 30, sec, contentColor, bgColor));
    p9.addEventListener("mouseenter", ()=>toolTipAnim("Invitations", 180, 30, sec, contentColor, bgColor));
    p10.addEventListener("mouseenter", ()=>toolTipAnim("Logos", 120, 30, sec, contentColor, bgColor));
    p11.addEventListener("mouseenter", ()=>toolTipAnim("Logos", 120, 30, sec, contentColor, bgColor));
    p12.addEventListener("mouseenter", ()=>toolTipAnim("Logos", 120, 30, sec, contentColor, bgColor));
    p13.addEventListener("mouseenter", ()=>toolTipAnim("Menus", 120, 30, sec, contentColor, bgColor));
    p14.addEventListener("mouseenter", ()=>toolTipAnim("Product Packaging", 280, 30, sec, contentColor, bgColor));
    p15.addEventListener("mouseenter", ()=>toolTipAnim("Product Packaging", 280, 30, sec, contentColor, bgColor));
    p16.addEventListener("mouseenter", ()=>toolTipAnim("Posters", 140, 30, sec, contentColor, bgColor));
    p17.addEventListener("mouseenter", ()=>toolTipAnim("Posters", 140, 30, sec, contentColor, bgColor));
    p18.addEventListener("mouseenter", ()=>toolTipAnim("Packaging Labels", 260, 30, sec, contentColor, bgColor));
    p19.addEventListener("mouseenter", ()=>toolTipAnim("Packaging Labels", 260, 30, sec, contentColor, bgColor));
    p20.addEventListener("mouseenter", ()=>toolTipAnim("Illustrations", 200, 30, sec, contentColor, bgColor));
    p21.addEventListener("mouseenter", ()=>toolTipAnim("Illustrations", 200, 30, sec, contentColor, bgColor));
    p22.addEventListener("mouseenter", ()=>toolTipAnim("Illustrations", 200, 30, sec, contentColor, bgColor));
    p23.addEventListener("mouseenter", ()=>toolTipAnim("Illustrations", 200, 30, sec, contentColor, bgColor));
    p24.addEventListener("mouseenter", ()=>toolTipAnim("Photo Manipulation", 280, 30, sec, contentColor, bgColor));
    p25.addEventListener("mouseenter", ()=>toolTipAnim("Halloween Tee", 210, 30, sec, contentColor, bgColor));
    p26.addEventListener("mouseenter", ()=>toolTipAnim("Scooby-Doo Tee", 230, 30, sec, contentColor, bgColor));
    p27.addEventListener("mouseenter", ()=>toolTipAnim("Sonic AOP Woven", 250, 30, sec, contentColor, bgColor));
    p28.addEventListener("mouseenter", ()=>toolTipAnim("MHA Tee", 150, 30, sec, contentColor, bgColor));
    p29.addEventListener("mouseenter", ()=>toolTipAnim("Naruto Tee", 180, 30, sec, contentColor, bgColor));
    p30.addEventListener("mouseenter", ()=>toolTipAnim("Minecraft Tee", 210, 30, sec, contentColor, bgColor));
    p31.addEventListener("mouseenter", ()=>toolTipAnim("Landing Pages", 240, 30, sec, contentColor, bgColor));
    p32.addEventListener("mouseenter", ()=>toolTipAnim("Landing Pages", 240, 30, sec, contentColor, bgColor));
    p33.addEventListener("mouseenter", ()=>toolTipAnim("Landing Pages", 240, 30, sec, contentColor, bgColor));
    p34.addEventListener("mouseenter", ()=>toolTipAnim("Landing Pages", 240, 30, sec, contentColor, bgColor));


    // Link creation for the landing pages section

    landingPagesSection = [p33, p34];
    landingPagesSection.forEach(sect => {
        sect.style.cursor = "pointer";
    })

    p33.addEventListener("click", ()=>{
        window.open("https://the-coding-journal.onrender.com/", "_blank")
    })


    p34.addEventListener("click", ()=>{
        window.open("https://snapbuy-mupq.onrender.com/", "_blank")
    })

    // Revert back to its original shape when leaving the container
    container.addEventListener("mouseleave", ()=>toolTipAnim("",10, 10, sec));

    returnBtn.addEventListener("mouseenter", ()=>toolTipAnim("Return", 95, 30, sec, contentColor, bgColor));
}

const scrollAnimation = ()=>{
    // Register ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray(".animate-on-scroll").forEach(el => {

        // Exclude first four elements from animating
        const target = ["p1", "p2", "p3", "p4"];
        if(target.some(className => el.classList.contains(className))){
            return;
        }

        // Animate the rest when scrolled
        gsap.from(el, {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: el,
                //markers: true,
            }

        })
    });
}