function getTheMeaningOfLife() {
  // amúgy ezt nem kellene ennyire "elbonyolítani"
  return new Promise((resolve) => {
    fetch("/api/v1/theMeaningOfLife")
      .then((response) => response.text())
      .then((value) => resolve(value))
      .catch(() => resolve("currently not available"));
  });
}

(async () => {
  document.getElementById("result").innerText = await getTheMeaningOfLife();
})();

// egyszerűbb AJAX-hívás
// fetch API-t minden modern böngésző implementálja, de van 3rd party package rá, pl. axios
fetch("/api/v1/random")
  .then((response) => response.text())
  .then((value) => {
    document.getElementById("random").innerText = value;
  })
  .catch((err) => console.log(err));
