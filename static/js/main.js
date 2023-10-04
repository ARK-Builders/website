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