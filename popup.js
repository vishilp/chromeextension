
var isHeld= null //set to true if touched so it turns off other animations
var requestID //id of animation frame

//wait for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    var pet = document.getElementById("pet") 
    if (pet.value == "select"){
        alert("Please select a Pet")
    }
    pet.addEventListener("change", renderImage)
    var avatar= document.getElementById("avatar")


    randomMove() //MOVE THIS TO SOMEWHERE AFTER MAIN WINDOW IS CLOSED
    randomDir()
    setInterval(stop, 3000)
} )

window.addEventListener("load", () => {
    document.getElementById("submit").addEventListener("click", submitPet)
})

async function submitPet()
{
    alert("wow")
    //const tab= await chrome.tabs.query({active: true, lastFocusedWindow: true})
    console.log("before") // doesnt show up on console because html popup is closed, and console u see is for website
    //chrome.tabs.sendMessage(tab.id, {message: "switch"})
    chrome.runtime.sendMessage({message: "switch"})
    alert("after")
}


//avatar.addEventListener("animationiteration")
{
    //var random= Math.random() //random decimal value
    //setTimeout(() => { //clearTimeout to cancel timeouts

    //}, random*5)  //random number from 1-5s
    //setTimeout(this, random*5)
}
function randomDir()
{
    //find where cat is on page and choose based on that
    
    
    //setInterval
}

function randomMove(dir)
{
    if (dir=="left"){
        requestID= requestAnimationFrame(randomMove)
        var currentRight= parseFloat(window.getComputedStyle(avatar).right)
        avatar.style.right = (currentRight +0.2) + "px"
    }
    
}

function stop()
{
    cancelAnimationFrame(requestID)
    requestID= undefined
}

//avatar.addEventListener("onclick", )

function renderImage()
{
    let selection= document.getElementById("render")
    let Url= ""
    if (pet.value == "Cat")
    {
        Url= "https://miro.medium.com/v2/resize:fit:200/format:webp/1*TxQeilWhJIVCemtG856ZUg.gif"
    }
    if (pet.value == "Plant")
    {
        Url= "cat.gif"
    }
    selection.src= Url
}

//window.addEventListener("resize", UpdateSize)

function UpdateSize()
{

}


const api_key= ""
const api_url= ""

//.then and .catch for api failed calls
//make background transparent for cat to roam a webpage?

