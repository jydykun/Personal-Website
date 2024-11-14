window.addEventListener("DOMContentLoaded", ()=>{
    //Call the functions here
    nav_anim()
    title_anim(3)
    name_hover()
})

function nav_anim(){
    const container = document.querySelector(".nav-hover");
    const links = document.querySelectorAll("a");
    const rootSize = 10;

    function setText(str){
        const para = container.children[0];
        para.textContent = str;
        return para
    }

    function animate(str, animStart = true){
        const text = setText(str)

        if(animStart){
            gsap.to(text, {
                duration: 1,
                ease: "power4.out",
                y: 40,
                opacity: 1
            })
        }
        else{
            gsap.to(text, {
                duration: 1,
                ease: "power4.out",
                y: 200,
                opacity: 0
            })
        }
    }


    links.forEach(link => {
        link.addEventListener("mouseenter", (e)=>{
            
            const appearText = setText(e.target.textContent)

            gsap.set(appearText, {
                y: 200,
                fontSize: rootSize * 10,
                fontWeight: 700,
                opacity: 0
            })


            if(e.target.dataset.text === "welcome"){
                animate(e.target.textContent)
            }
            else if(e.target.dataset.text === "projects"){
                animate(e.target.textContent)
            }
            else {
                animate(e.target.textContent)
            }
        })

        link.addEventListener("mouseleave", (e)=>{


            if(e.target.dataset.text === "welcome"){
                animate(e.target.textContent, false)
            }
            else if(e.target.dataset.text === "projects"){
                animate(e.target.textContent, false)
            }
            else {
                animate(e.target.textContent, false)
            }
        })

        link.addEventListener("click", (e)=>{
            e.preventDefault() // Remove the default function of <a> element

            if(e.target.dataset.text == "welcome"){
                return;
            }

            const cover = document.querySelector(".cover");
            const p = document.createElement("p");
            p.textContent = e.target.textContent;
            cover.appendChild(p)

            gsap.set(p, {
                opacity: 0
            })

            const tl = gsap.timeline()

            tl.to(cover, {
                duration: 0.8,
                ease: "power4.out",
                scaleY: 1,
                onComplete: ()=>{
                    if(e.target.dataset.text == "welcome"){
                        return;
                    }
                    else if(e.target.dataset.text == "projects"){
                        setTimeout(()=>{
                            window.location.href = "/projects"
                        }, 2000)
                    }
                    else {
                        setTimeout(()=>{
                            console.log("ReachOut Page")
                            window.location.href = "/reachout"
                        }, 1000)
                    }
                }
            })
            tl.to(p, {
                duration: 0.5,
                opacity: 1,
            })
            tl.to(p, {
                duration: 0.5,
                opacity: 0,
                delay: 1
            })
            tl.to(cover, {
                opacity: 0,
                delay: 2
            })
        })

    });
}

function title_anim(delay=5){
    const container = document.querySelector(".title");
    const p1 = container.children[0];
    const p2 = container.children[1];
    container.style.height = "40px"

    const tl = gsap.timeline({
        delay: 2,
        repeat: -1, //-1 for infinite loop
        repeatDelay: delay
    });

    tl.to(p1,{
        duration: 1,
        ease: "power1.out",
        scaleY: 0,
        transformOrigin: "top"
    })
    .to(p2,{
        duration: 1,
        ease: "power1.out",
        y: -36
    },"<")
    .call(() => {
        // Swap content and reset transformations
        const tempText = p1.textContent;
        p1.textContent = p2.textContent;
        p2.textContent = tempText;

        gsap.set(p1, { scaleY: 1 });
        gsap.set(p2, { y: 0 });
    });

}

function name_hover(){
    const circle = document.querySelector("#circle");
    const mask = document.querySelector("svg");
    const rect = mask.getBoundingClientRect();

    gsap.set(circle, {
        opacity: 0
    })

    document.addEventListener("mousemove", (e)=>{
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;

        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);

    })

    mask.addEventListener("mouseenter", ()=>{
        gsap.to(circle, {
            duration: 0.5,
            opacity: 1,
        })
    })
}







