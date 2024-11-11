// myLeads array stores the leads that have been input
myLeads = [];
// Save the input, button and list document objects
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

//this function renders the leads
function renderLeads() {
  //clear the list items on every render
  ulEl.innerHTML = "";

  for (let i = 0; i < myLeads.length; i++) {
    //Create a new <li> element
    const li = document.createElement("li");

    // Create a new <a> element
    const a = document.createElement("a");
    a.href = myLeads[i];
    a.target = "_blank";
    a.textContent = myLeads[i]; //Sets the tect content, avoiding HTML parsing (symbols => to characters)
    li.appendChild(a);
    ulEl.appendChild(li);
  }
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});
