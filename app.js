const site = window.location.hostname
const url= chrome.runtime.getURL('cat.gif')
const avatar= document.createElement("div")

function injectPet(pet)
{
    console.log("Injector- JS jas been injected to: " + site )
    const image= document.createElement("img")
    avatar.id= "pet"
    //avatar.innerHTML = "<img src= '" + url + "'>"
    image.src= url
    avatar.style.position= "fixed"
    avatar.style.height= "80px"
    avatar.style.width= "80px"
    avatar.style.left= "90vw"
    avatar.style.top= "80vh"
    image.style.width= "100%"
    image.style.height= "100%"
    avatar.style.zIndex= "99999"
    avatar.appendChild(image)
    document.body.appendChild(avatar)
}

document.addEventListener("DOMContentLoaded", ()=> {
    //injectPet("cat")
    console.log("Injector- JS jas been injected to: " + site )
    
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.message== "switch")
        {
            alert("works")
            avatar.style.zIndex= "0"
        }
    })
})
injectPet("cat") // works, dom apparently loaded already, so domcontentloaded event no working

//remove on fullscreen