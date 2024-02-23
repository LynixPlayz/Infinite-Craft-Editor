function add()
{
    console.log("aaa1")
    var name = document.getElementById("eleName").value;
    var emoji = document.getElementById("eleEmoji").value;
    var discovered = document.getElementById("eleDiscovered").value;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { name, emoji, discovered });
    });
    addCustomElement(document.getElementById("eleName").value, document.getElementById("eleEmoji").value, document.getElementById("eleDiscovered").value)
    
}

document.getElementById("add").onclick = function(){add()}