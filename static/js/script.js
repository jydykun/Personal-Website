window.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})

async function fetchData(){
    try {
        const response = await fetch("/api", {
            method: "GET",
            headers : {
                "Accept": "application/json"
            }
        })

        // Check the response
        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}. Failed to fetch data from the server.`)
        }
        
        const data = await response.json()
        console.log(data)
        const h = document.querySelector("h1")
        for (i of data){
            const p = document.createElement("p")
            p.textContent = i.name
            h.appendChild(p)
        }

    } catch (error) {
        console.error("Fetch Error: ", error.message);
    }
}