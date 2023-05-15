const form = document.querySelector("form");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const countryInput = document.querySelector("#country");
  const country = countryInput.value.toLowerCase();
  const url = `http://universities.hipolabs.com/search?country=${country}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        let tableHtml =
          "<table><tr><th>#</th><th>Name</th><th>Country</th><th>Website</th></tr>";
        data.forEach((university, index) => {
          tableHtml += `<tr><td>${index + 1}</td><td>${
            university.name
          }</td><td>${university.country}</td><td><a href="${
            university.web_pages[0]
          }">${university.web_pages[0]}</a></td></tr>`;
        });
        tableHtml += "</table>";
        resultDiv.innerHTML = tableHtml;
      } else {
        resultDiv.innerHTML = "No universities found";
      }
    })
    .catch((error) => {
      resultDiv.innerHTML = `Error: ${error.message}`;
    });
});

form.addEventListener("reset", (event) => {
  resultDiv.innerHTML = "";
});
