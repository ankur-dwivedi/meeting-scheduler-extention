
let url = ""
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url) {
    console.log("url", tabId, {
      message: 'hello!',
      url: changeInfo.url,
      status: changeInfo.status
    })
    url = changeInfo.url
  }
  if (changeInfo.status == 'complete') {

    if (url) {
      console.log("url", tabId, {
        message: 'hello!',
        url: url
      })
      chrome.tabs.sendMessage(tabId, { message: 'hello!', url: url }, function (response) {
        console.log("Response: ", response);
      })
    }

  }

})