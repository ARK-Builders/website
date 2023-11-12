// Set darkmode
document.getElementById('mode').addEventListener('click', () => {

    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    
});
  
// enforce local storage setting but also fallback to user-agent preferences
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  
  document.body.classList.add('dark');
  
}

function copyWalletAddress(){
  var wallet_address = document.getElementById('wallet_address')
  wallet_address.select()
  wallet_address.setSelectionRange(0,99999)
  navigator.clipboard.writeText(wallet_address.value)
}

function openPopup(data) {
  console.log(data)
  document.getElementById("myPopup").style.display = "block";
  const popupContent = document.getElementById("popupContent");

  // Clear any previous content
  popupContent.innerHTML = "";

  // Populate the popup content with data from the loop
  const content = `
    <div class="row justify-content-center text-center">
      <div class="col-sm-12 pt-4">
        <article>
          <div>
            <p class="m-0">${ data.title }</p>
          </div>
          <div class="pt-4">
            <img src="/${ data.qr_code }" alt="{{ page.extra.alt }}" />
          </div>
          <div class="input-group mb-3 pt-4">
            <input type="text" class="form-control p-3" type="text" disabled  id="wallet_address" value="${data.wallet_address}" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary px-3" type="button" id="button-addon2"  onclick="copyWalletAddress()">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#dfe2e7}</style><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
            </button>
          </div>
          <div>
            <p class="m-0" style="font-size:12px">${ data.description }</p>
          </div>
        </article>
      </div>
    </div>
  `;

  // Set the content inside the popup
  popupContent.innerHTML = content;

  // Display the popup
  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

var bugData = [];
var featureData = [];
var enhancementData = [];
var goodFirstIssueData = [];

async function fetchAllIssues() {
  
  var loader = document.getElementById("loader");
  const apiUrl = `https://raw.githubusercontent.com/ARK-Builders/cache-project-issues/main/issues.json`;

  try {
    const response = await fetch(apiUrl, {
    });
    const issuesData = await response.json();
      let data = issuesData;
      
      function fillTableWithData(dataList) {
        dataList.sort(function(a, b){return a.date - b.date})
        bugData = dataList.filter(element=> element.labels.find(item => item == 'bug'));
        enhancementData = dataList.filter(element=> element.labels.find(item => item == 'enhancement'));
        featureData = dataList.filter(element=> element.labels.find(item => item == 'feature'));
        goodFirstIssueData = dataList.filter(element=> element.labels.find(item => item == 'good first issue'));
        sortGoodFirstTable('date', 'asc');
        sortBugTable('date', 'asc');
        sortFeatureTable('date', 'asc');
        sortEnhancementTable('date', 'asc');
        loader.style.display = 'none'; // Hide the loader
      }
      
      fillTableWithData(data);
  } catch (error) {
      console.error('Error fetching repositories:', error);
  }
}

function sortGoodFirstTable(column, direction){
  let tempData = [];
  if(direction == 'asc'){
    if(column == 'date')
      tempData = goodFirstIssueData.sort((a, b) => new Date(a.date) - new Date(b.date));
    else
      tempData = goodFirstIssueData.sort((a, b) => a[column].localeCompare(b[column]));
  }
  else if(direction == 'desc'){
    if(column == 'date')
      tempData = goodFirstIssueData.sort((a, b) => new Date(b.date) - new Date(a.date));
    else
      tempData = goodFirstIssueData.sort((a, b) => b[column].localeCompare(a[column]));
  }
  else{
    tempData =goodFirstIssueData;
  }
  

  const table = document.getElementById("goodFirstIssueTable");
  const tbody = table.getElementsByTagName("tbody")[0];
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  populateTable(tempData, 'good first issue');
}

function sortBugTable(column, direction){
  let tempData = [];
  if(direction == 'asc'){
    if(column == 'date')
      tempData = bugData.sort((a, b) => new Date(a.date) - new Date(b.date));
    else
      tempData = bugData.sort((a, b) => a[column].localeCompare(b[column]));
  }
  else if(direction == 'desc'){
    if(column == 'date')
      tempData = bugData.sort((a, b) => new Date(b.date) - new Date(a.date));
    else
      tempData = bugData.sort((a, b) => b[column].localeCompare(a[column]));
  }
  

  const table = document.getElementById("bugTable");
  const tbody = table.getElementsByTagName("tbody")[0];
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  populateTable(tempData, 'bug');
}

function sortFeatureTable(column, direction){
  let tempData = [];
  if(direction == 'asc'){
    if(column == 'date')
      tempData = featureData.sort((a, b) => new Date(a.date) - new Date(b.date));
    else
      tempData = featureData.sort((a, b) => a[column].localeCompare(b[column]));
  }
  else if(direction == 'desc'){
    if(column == 'date')
      tempData = featureData.sort((a, b) => new Date(b.date) - new Date(a.date));
    else
      tempData = featureData.sort((a, b) => b[column].localeCompare(a[column]));
  }
  
  const table = document.getElementById("featureTable");
  const tbody = table.getElementsByTagName("tbody")[0];
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  populateTable(tempData, 'feature');
}

function sortEnhancementTable(column,direction){
  let tempData = [];
  if(direction == 'asc'){
    if(column == 'date')
      tempData = enhancementData.sort((a, b) => new Date(a.date) - new Date(b.date));
    else
      tempData = enhancementData.sort((a, b) => a[column].localeCompare(b[column]));
  }
  else if(direction == 'desc'){
    if(column == 'date')
      tempData = enhancementData.sort((a, b) => new Date(b.date) - new Date(a.date));
    else
      tempData = enhancementData.sort((a, b) => b[column].localeCompare(a[column]));
  }
  
  const table = document.getElementById("enhancementTable");
  const tbody = table.getElementsByTagName("tbody")[0];
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  populateTable(tempData, 'enhancement');
}

function populateTable(data, type){
  let table, tableBody;
  if(type == 'good first issue'){
    table = document.getElementById("goodFirstIssueTable");
    tableBody = table.getElementsByTagName("tbody")[0];
  }
  else if(type == 'bug'){
    table = document.getElementById("bugTable");
    tableBody = table.getElementsByTagName("tbody")[0];
  }
  else if(type == 'feature'){
    table = document.getElementById("featureTable");
    tableBody = table.getElementsByTagName("tbody")[0];
  }
  else if(type == 'enhancement'){
    table = document.getElementById("enhancementTable");
    tableBody = table.getElementsByTagName("tbody")[0];
  }

  data.forEach(function (data) {
    let repoUrl = data.repo.split('/');
    let repo = repoUrl[repoUrl.length - 1] + ' #'+data.number;
    let issue = 'https://github.com/'+repoUrl[repoUrl.length - 2]+ '/'+ repoUrl[repoUrl.length - 1] +'/issues/'+data.number;
    data.issue = issue;
    let avatar = document.createElement("img");
    avatar.src = data.user_avatar;
    avatar.width = 40; // Set the width of the image
    avatar.height = 40;
    avatar.style.borderRadius = "50%";
    let labels = '', languages = '';
    let date = new Date(data.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    data.date = date.toLocaleDateString(undefined, options);
    
    data.labels.forEach((item)=>{
      labels = labels + item + ' ';
    })
    data.language.forEach((item)=>{
      languages = languages + item + ' ';
    })
    
    let newRow = tableBody.insertRow(tableBody.rows.length);
    newRow.setAttribute("data-href", issue);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    cell1.innerHTML = repo;
    cell2.innerHTML = data.title;
    cell3.appendChild(avatar);
    cell3.title = data.user;
    cell4.innerHTML = data.date
    cell5.innerHTML = data.language;
    cell6.innerHTML = data.platform
  })
  var rows = document.querySelectorAll("tbody tr");
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.cursor = "pointer";
    rows[i].addEventListener("click", function() {
      var url = this.getAttribute("data-href");
      window.open(url, "_blank");
    });
  }
}

// Call the function to fetch issues from all your repositories.
fetchAllIssues();
const goodTable = document.getElementById("goodFirstIssueTable");
const issueTableButtons = goodTable.querySelectorAll("th");
const bugTable = document.getElementById("bugTable");
const bugTableButtons = bugTable.querySelectorAll("th");
const featureTable = document.getElementById("featureTable");
const featureTableButtons = featureTable.querySelectorAll("th");
const enhancementTable = document.getElementById("enhancementTable");
const enhancementTableButtons = enhancementTable.querySelectorAll("th");
let bugArrow;
window.addEventListener("load", () => {
  [...issueTableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-dir") == "desc"){
        sortGoodFirstTable(e.target.id, "asc");
        e.target.setAttribute("data-dir", "asc");
      }
      else {
        sortGoodFirstTable(e.target.id, "desc");
        e.target.setAttribute("data-dir", 'desc');
      }
      [...issueTableButtons].map((el) => 
      {
        if(el != e.target)
          el.removeAttribute('data-dir');
      })
    });
  });
  
  [...bugTableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-dir") == "desc"){
        sortBugTable(e.target.id, "asc");
        e.target.setAttribute("data-dir", "asc");
      }
      else {
        sortBugTable(e.target.id, "desc");
        e.target.setAttribute("data-dir", 'desc');
      }
      [...bugTableButtons].map((el) => 
      {
        if(el != e.target)
          el.removeAttribute('data-dir');
      })
    });
  });
  [...featureTableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-dir") == "desc"){
        sortFeatureTable(e.target.id, "asc");
        e.target.setAttribute("data-dir", "asc");
      }
      else {
        sortFeatureTable(e.target.id, "desc");
        e.target.setAttribute("data-dir", 'desc');
      }

      [...featureTableButtons].map((el) => 
      {
        if(el != e.target)
          el.removeAttribute('data-dir');
      })
    });
  });
  [...enhancementTableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-dir") == "desc"){
        sortEnhancementTable(e.target.id, "asc");
        e.target.setAttribute("data-dir", "asc");
      }
      else {
        sortEnhancementTable(e.target.id, "desc");
        e.target.setAttribute("data-dir", 'desc');
      }
    
      [...enhancementTableButtons].map((el) => 
      {
        if(el != e.target)
          el.removeAttribute('data-dir');
      })
    });
  });
});

