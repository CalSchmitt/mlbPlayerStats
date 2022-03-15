class UI{
    showProfile(playerProfile){
        const node = document.createElement('div');
        node.innerHTML=`
        <div class="card bg-secondary mb-3">
          <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" width="195" height="270" style="padding-left:50px" src="${playerProfile.PhotoUrl}">
                <span class = "badge bg-warning">Injury Status: ${playerProfile.InjuryStatus}</span>
            </div>
                <div class="col-md-9">
                    <h1 style="padding-top:10px">${playerProfile.FirstName} ${playerProfile.LastName}</h1><h1>#</h1>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>College:</strong> ${playerProfile.College}</li>
                        <li class="list-group-item"><strong>Height:</strong> ${playerProfile.Height}IN</li>
                        <li class="list-group-item"><strong>Weight:</strong> ${playerProfile.Weight}LB</li>
                        <li class="list-group-item"><strong>Bat Side:</strong> ${playerProfile.BatHand}</li>
                        <li class="list-group-item"><strong>Primary Position:</strong> ${playerProfile.Position}</li>
                    </ul>
                </div>
          </div>
        </div>
    `;
        document.getElementById('listOfPlayers').appendChild(node);
    }
    clearProfile(){
        document.getElementById('listOfPlayers').innerHTML = '';
    }
    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        }, 3000);
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}

