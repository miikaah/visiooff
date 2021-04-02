console.log("Removing Visio content");

var allAnchors = document.querySelectorAll("a");
var visioContent = Array.from(allAnchors).filter((a) =>
  (a.href || "").includes("/visio")
);

visioContent.forEach((v) => (v.parentElement || {}).remove());

console.log(`Removed ${visioContent.length} Visio contents`);
