function addCustomElement(name, emoji, discovered)
{
    output = JSON.parse(localStorage.getItem("infinite-craft-data"))
    if(output == null)
    {
        output = JSON.parse(`{"elements":[{"text":"Water","emoji":"💧","discovered":false},{"text":"Fire","emoji":"🔥","discovered":false},{"text":"Wind","emoji":"🌬️","discovered":false},{"text":"Earth","emoji":"🌍","discovered":false}]}`)
    }
    output["elements"][output["elements"].length] = {
        text: name,
        emoji: emoji,
        discovered: discovered
    }
    console.log(JSON.stringify(output))
    localStorage.setItem("infinite-craft-data", JSON.stringify(output))
    location.reload()
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("aaa2")
      addCustomElement(request.name, request.emoji, request.discovered)
      sendResponse({ success: true });
    }
  );