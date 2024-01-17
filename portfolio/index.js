function render() {
  getHash();
  showContent();
}

function getHash() {
  const hash = window.location.hash.slice(1);
  return hash;
}

function showContent() {
  const mainContent = document.getElementById("main-content");

  let hash = getHash();
  console.log(hash);
  console.log("hash-content: ", `${hash}-content`);
  const contentToShow = document.querySelector(`.${hash}-content`);
  console.log("content to show: ", contentToShow);

  mainContent.innerHTML = contentToShow
    ? contentToShow.innerHTML
    : "content not found";

  // mainContent.replaceChildren = contentToShow;
}

window.addEventListener("hashchange", showContent);

render();
