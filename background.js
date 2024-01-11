var petState= false

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
    if (request.message === "switch"){
        petState= !petState
        console.log(petState)

        chrome.tabs.query({}, (tabs) => {
            for (const tab of tabs) {
                chrome.tabs.sendMessage(tab.id, { message: 'switch'})
            }
        })
    }
})
