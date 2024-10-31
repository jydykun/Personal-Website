
btnOne()

btntwo("#gsapBtn")

function btntwo(target, debug=false){

    const btn = document.querySelector(target);
    const a = btn.children[0]; //Get the a element
    const svg = btn.children[1]; //Get the svg element
    const rect = svg.children[0]; //Get the rect element
    const svgHeight = btn.clientHeight; 
    const svgWidth = btn.clientWidth;
    const rectHeight = svgHeight - 10
    const rectWidth = svgWidth - 10
    const rectStrokeWidth = getComputedStyle(rect).strokeWidth
    const rectStrokeDash = (rectWidth + rectHeight) * 2

    //Set the SVG Attributes
    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);

    gsap.set(rect, {
        x: 5.5,
        y: 5.5,
        width: rectWidth,
        height: rectHeight,
        strokeDasharray: rectStrokeDash
    })

    gsap.defaults({
        duration: 1,
        ease: "expo.out",
    })

    btn.addEventListener("mouseenter", (e)=>{
        e.stopPropagation();
        gsap.to(a, {
            fontWeight: 900,
        })
        gsap.to(rect, {
            strokeWidth: 4,
            strokeDasharray: "50 226", //Adjust this if needed "size offset"
            strokeDashoffset: 122 //Adjust this if needed, offset starting point
        })
    })

    btn.addEventListener("mouseleave", (e)=>{
        e.stopPropagation();
        gsap.to(a, {
            fontWeight: 400,
        })
        gsap.to(rect, {
            strokeWidth: rectStrokeWidth,
            strokeDasharray: rectStrokeDash,
            strokeDashoffset: 0
        })
    })

    if(debug){
        a.style.border = "1px solid red";
    }
}

function btnOne(){
    const btn = document.querySelector(".button");
    const btnStyle = getComputedStyle(btn);

    const btnWidth = parseInt(btnStyle.width);
    const hoverSize = 20;

    gsap.defaults({
        duration: 0.3
    });

    gsap.set(".circle", {
        height: hoverSize,
        width: hoverSize,
        borderRadius: "100%",
        backgroundColor: "orange",
        x: (btnWidth/2) - 10,
        opacity: 0,
        position: "absolute",
        zIndex: -1
    });

    btn.addEventListener("mouseenter", ()=>{
        gsap.to(".circle", {
            scale: hoverSize / 1.5,
            opacity: 1
        });
    });

    btn.addEventListener("mouseleave", ()=>{
        gsap.to(".circle", {
            scale: 0,
            opacity: 0
        });
    });
}