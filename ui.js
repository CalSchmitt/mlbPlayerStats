class UI{
    showProfile(playerProfile){
        const node = document.createElement('div');
        node.innerHTML=`
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-9">
                <ul class="list-group">
                    <li class="list-group-item">Full Name: ${playerProfile.DraftKingsName}</li>
                    <li class="list-group-item">Height: ${playerProfile.Height}</li>
                    <li class="list-group-item">Bat Side: ${playerProfile.BatHand}</li>
                    <li class="list-group-item">Primary Position: ${playerProfile.Position}</li>
                </ul>
            </div>
          </div>
        </div>
    `;
        document.getElementById('listOfPlayers').appendChild(node);
    }
}

