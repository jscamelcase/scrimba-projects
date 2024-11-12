// myLeads array stores the leads that have been input
myLeads = [];
// Save the input, button and list document objects
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) myLeads = leadsFromLocalStorage;
render(myLeads);

//grabing the tab from the browser
tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

//this function renders the leads
function render(leads) {
  //clear the list items on every render
  ulEl.innerHTML = "";

  for (let i = 0; i < leads.length; i++) {
    //Create a new <li> element
    const li = document.createElement("li");

    //Create a deleonte button for individual leads
    const leadDltBtn = document.createElement("button");
    leadDltBtn.textCtent = "❌";
    leadDltBtn.classList.add("dlt-btn");
    leadDltBtn.addEventListener("click", () => {
      leads.splice(i, 1);
      render(leads);
    });

    // Create a new <a> element
    const a = document.createElement("a");
    a.href = leads[i];
    a.target = "_blank";
    a.textContent = leads[i]; //Sets the text content, avoiding HTML parsi ng (symbols => to characters)
    li.appendChild(a);
    li.appendChild(leadDltBtn);
    ulEl.appendChild(li);
  }
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
