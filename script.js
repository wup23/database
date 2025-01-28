fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ action: "yourAction", data: "yourData" }),
})
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("There was an error!", error));
