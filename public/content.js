let flag = 0;
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request.message)
    if (request.message === 'hello!') {
      console.log(request.url)
      if (request.url.indexOf("https://calendar.google.com/calendar/u/0/r/eventedit?dates=") !== -1 && flag === 0) {
        // flag = 1;
        console.log(request.url, "gotchya")

        setTimeout(() => {
          $("#xSaveBu").click(function () {
            submitData()
          });
          $("#customButton").html('')
          $("#tabEventDetails").prepend("<button id='customButton' style='background-color: #2473e8;color: #fff;border-radius: 4px;border: 0;margin-left: 4rem;width: 20rem;padding: 0.6rem;font-size: 15px;'>Add Ankur dwivedi's video conferencing</button> <br/><div class='DN1TJ fX8Pqc' id='infoContent' style='display:none;margin-left: 4rem;'>ankur.dwivedi.com/cyz-fkyc-jbm </div> ")
          $("#customButton").click(function () {
            $("#infoContent").css('display', '')
            $("#xDescIn > div.iSSROb.snByac").html("")
            $("#T2Ybvb0").html("Join Ankur dwivedi's video Meeting<br/>https://ankur.dwivedi.com/cyz-fkyc-jbm<br/>Meeting ID: 782 5080 2682<br/>Passcode: 714370")
          });
        }, 100)
        if (!$("#customButton").length) {
          load()
        }
      }

    }
    sendResponse("Gotcha!");

  });

function submitData() {
  let _data = {
    title: $("#xTiIn").val(),
    meetingLink: $("#infoContent").text(),
    startingTime: $("#xStTiIn").val(),
    endingTIme: $("#xEnTiIn").val(),
    startingDate: $("#xStDaIn").val(),
    endingDate: $("#xEnDaIn").val(),
    createdBy: ""
  }

  return fetch('https://rocky-shelf-48844.herokuapp.com/api/v1/meeting', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

function load() {
  for (let x = 0; x < 10; x++) {
    setTimeout(() => {
      if (!$("#customButton").length) {
        $("#xSaveBu").click(function () {
          submitData()
        });
        $("#customButton").html('')
        $("#tabEventDetails").prepend("<button id='customButton'  style='background-color: #2473e8;color: #fff;border-radius: 4px;border: 0;margin-left: 4rem;width: 20rem;padding: 0.6rem;font-size: 15px;'>Add Ankur dwivedi's video conferencing</button> <br/><div class='DN1TJ fX8Pqc' id='infoContent' style='display:none;margin-left: 4rem;'>ankur.dwivedi.com/cyz-fkyc-jbm</div> ")
        $("#customButton").click(function () {
          $("#infoContent").css('display', '')
          $("#xDescIn > div.iSSROb.snByac").html("")
          $("#T2Ybvb0").html("Join Ankur dwivedi's video Meeting<br/>https://ankur.dwivedi.com/cyz-fkyc-jbm<br/>Meeting ID: 782 5080 2682<br/>Passcode: 714370")
        });
      }

    }, 1000)
  }

}

window.addEventListener("message", function (event) {
  if (event.source !== window) return;
  onDidReceiveMessage(event);
});

async function onDidReceiveMessage(event) {
  if (event.data.type && (event.data.type === "GET_EXTENSION_ID")) {
    window.postMessage({ type: "EXTENSION_ID_RESULT", extensionId: chrome.runtime.id }, "*");
  }
}


