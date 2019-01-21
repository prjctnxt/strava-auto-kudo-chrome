kudoButtons = [
  ...document.querySelectorAll(".activity .feed-entry-actions .btn-kudo:not(.kudoed)")
];

displayProgressPopup = (kudoed = 0, totalToKudo = 0) => {
  const messageStyles =
    "background: #ff3500; color: white; position: fixed; top: 15px; right: 15px; z-index:99999; padding: 0 8px";

  let message = document.createElement("div");
  message.id = "kudoed-progresssss";
  message.innerText = `${kudoed}/${totalToKudo}`;
  message.setAttribute("style", messageStyles);

  if (document.getElementById("kudoed-progresssss")) {
    const instantiatedMessage = document.getElementById("kudoed-progresssss");
    instantiatedMessage.parentNode.replaceChild(message, instantiatedMessage);
  } else {
    document.body.appendChild(message);
  }

  // Last loop
  if (kudoed === totalToKudo) {
    setTimeout(() => {
      hideProgressPopup();
    }, 2000);
  }
};

hideProgressPopup = () => {
  if (document.getElementById("kudoed-progresssss")) {
    document.getElementById("kudoed-progresssss").remove();
  }
};

clickButton = (btn, i) => {
  if (btn.classList.contains("kudoed")) return;
  setTimeout(() => {
    displayProgressPopup(i + 1, kudoButtons.length);
    btn.click();
  }, i * 500);
};

kudoButtons.forEach(clickButton);
