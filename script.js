let captchachecked = false;

function captchasuccess() {
  captchachecked = true;
}

function beforeHandler(event) {
  if (!captchachecked) {
    alert("Please check the captcha to submit the lead");
    event.preventDefault();
    return false;
  }

  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");

  outputdate.value = inputdate.value;

  console.log(outputdate.value);

  return true;
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");

  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value,
    );

    elems["ts"] = JSON.stringify(new Date().getTime());

    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}

setInterval(timestamp, 500);
