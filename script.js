function beforeHandler() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formatteddate;
  console.log("Input value is mentioned in the side", inputdate.value);

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
}
