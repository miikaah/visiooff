console.log("Activating Visio content remover");

function removeVisioContent() {
  var allAnchors = document.querySelectorAll("a");
  var visioContent = Array.from(allAnchors).filter((a) =>
    (a.href || "").includes("/visio")
  );

  visioContent.forEach((v) => (v.parentElement || {}).remove());

  if (visioContent.length > 0) {
    console.log(`Removed ${visioContent.length} Visio contents`);
  }
}

setInterval(removeVisioContent, 1000);
