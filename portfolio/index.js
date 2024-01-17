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
  let contentToShow = document.getElementById("home-content");
  let hash = getHash();
  if (hash) {
    // console.log(hash);
    // console.log("hash-content: ", `${hash}-content`);
    contentToShow = document.getElementById(`${hash}-content`);
    console.log("content to show: ", contentToShow);
  }

  mainContent.innerHTML = contentToShow
    ? contentToShow.outerHTML
    : "content not found";

  // mainContent.replaceChildren = contentToShow;
}

window.addEventListener("hashchange", showContent);

showContent();
