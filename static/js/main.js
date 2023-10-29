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

async function fetchAllIssues() {
  
  var loader = document.getElementById("loader");
  const apiUrl = `https://raw.githubusercontent.com/ARK-Builders/cache-project-issues/main/issues.json`;

  try {
    const response = await fetch(apiUrl, {
    });
    const issuesData = await response.json();
      let data = issuesData;
      
      function fillTableWithData(dataList) {
        var goodFirstIssueTable = document.getElementById("goodFirstIssueTable");
        var bugTable = document.getElementById("bugTable");
        var enhancementTable = document.getElementById("enhancementTable");
        var featureTable = document.getElementById("featureTable");
        var goodFirstIssuebody = goodFirstIssueTable.getElementsByTagName("tbody")[0];
        var bugbody = bugTable.getElementsByTagName("tbody")[0];
        var enhancementbody = enhancementTable.getElementsByTagName("tbody")[0];
        var featurebody = featureTable.getElementsByTagName("tbody")[0];
        dataList.sort(function(a, b){return a.date - b.date})
        dataList.forEach(function (data) {
          var repoUrl = data.repo.split('/');

          // Get the last component, which is the repository name in this case
          var repo = repoUrl[repoUrl.length - 1];
          var issue = 'https://github.com/'+repoUrl[repoUrl.length - 2]+ '/'+ repoUrl[repoUrl.length - 1] +'/issues/'+data.number;
          var link = document.createElement("a");
          link.href = issue; 
          link.textContent = issue;

          var labels = '';
          var assignees = '';
          var date = new Date(data.date);
          var day = date.getDate(); //Date of the month: 2 in our example
          var month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
          var year = date.getFullYear()
          data.labels.forEach((item)=>{
            labels = labels + item + ' ';
          })
          data.assignees.forEach((item)=>{
            assignees = assignees + item + ' ';
          })

          if(data.labels.find(item => item == 'good first issue')){
            var newRow = goodFirstIssuebody.insertRow(goodFirstIssuebody.rows.length);
  
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);
            var cell7 = newRow.insertCell(6);
            var cell8 = newRow.insertCell(7);
            var cell9 = newRow.insertCell(8);

            cell1.innerHTML = data.title;
            cell2.innerHTML = data.state;
            cell3.innerHTML = data.user;
            cell4.innerHTML = '';
            cell5.innerHTML = '';
            cell6.innerHTML = assignees;
            cell7.innerHTML = year+ '-' + month + '-'+ day;
            cell8.appendChild(link);
            cell9.innerHTML = repo+ ' #'+data.number;
          }

          if(data.labels.find(item => item == 'enhancement')){
            var enhancementRow = enhancementbody.insertRow(enhancementbody.rows.length);
            var enhancementcell1 = enhancementRow.insertCell(0);
            var enhancementcell2 = enhancementRow.insertCell(1);
            var enhancementcell3 = enhancementRow.insertCell(2);
            var enhancementcell4 = enhancementRow.insertCell(3);
            var enhancementcell5 = enhancementRow.insertCell(4);
            var enhancementcell6 = enhancementRow.insertCell(5);
            var enhancementcell7 = enhancementRow.insertCell(6);
            var enhancementcell8 = enhancementRow.insertCell(7);
            var enhancementcell9 = enhancementRow.insertCell(8);

            enhancementcell1.innerHTML = data.title;
            enhancementcell2.innerHTML = data.state;
            enhancementcell3.innerHTML = data.user;
            enhancementcell4.innerHTML = '';
            enhancementcell5.innerHTML = '';
            enhancementcell6.innerHTML = assignees;
            enhancementcell7.innerHTML = year+ '-' + month + '-'+ day;
            enhancementcell8.appendChild(link);
            enhancementcell9.innerHTML = repo+ ' #'+data.number;

          }
          if(data.labels.find(item => item == 'bug')){
            var bugRow = bugbody.insertRow(bugbody.rows.length);
            var bugcell1 = bugRow.insertCell(0);
            var bugcell2 = bugRow.insertCell(1);
            var bugcell3 = bugRow.insertCell(2);
            var bugcell4 = bugRow.insertCell(3);
            var bugcell5 = bugRow.insertCell(4);
            var bugcell6 = bugRow.insertCell(5);
            var bugcell7 = bugRow.insertCell(6);
            var bugcell8 = bugRow.insertCell(7);
            var bugcell9 = bugRow.insertCell(8);

            bugcell1.innerHTML = data.title;
            bugcell2.innerHTML = data.state;
            bugcell3.innerHTML = data.user;
            bugcell4.innerHTML = '';
            bugcell5.innerHTML = '';
            bugcell6.innerHTML = assignees;
            bugcell7.innerHTML = year+ '-' + month + '-'+ day;
            bugcell8.appendChild(link);
            bugcell9.innerHTML = repo+ ' #'+data.number;
          }
          if(data.labels.find(item => item == 'feature')){
            var featureRow = featurebody.insertRow(featurebody.rows.length);
            var featurecell1 = featureRow.insertCell(0);
            var featurecell2 = featureRow.insertCell(1);
            var featurecell3 = featureRow.insertCell(2);
            var featurecell4 = featureRow.insertCell(3);
            var featurecell5 = featureRow.insertCell(4);
            var featurecell6 = featureRow.insertCell(5);
            var featurecell7 = featureRow.insertCell(6);
            var featurecell8 = featureRow.insertCell(7);
            var featurecell9 = featureRow.insertCell(8);

            featurecell1.innerHTML = data.title;
            featurecell2.innerHTML = data.state;
            featurecell3.innerHTML = data.user;
            featurecell4.innerHTML = '';
            featurecell5.innerHTML = '';
            featurecell6.innerHTML = assignees;
            featurecell7.innerHTML = year+ '-' + month + '-'+ day;
            featurecell8.appendChild(link);
            featurecell9.innerHTML = repo+ ' #'+data.number;
          }
          
        });
        
        loader.style.display = 'none'; // Hide the loader
      }
      
      fillTableWithData(data);
      console.log( data);
  } catch (error) {
      console.error('Error fetching repositories:', error);
  }
}

// Call the function to fetch issues from all your repositories.
fetchAllIssues();

