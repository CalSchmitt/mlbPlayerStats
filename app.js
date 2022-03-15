const player = new MLB;
const ui = new UI;
const searchPlayer = document.getElementById('searchPlayer');

searchPlayer.addEventListener('keyup', (e) => {
    ui.clearProfile();
    const playerText = e.target.value;
    if(playerText !== ''){
        player.getPlayer(playerText)
        .then(data=>{
            if(data.player.length == 0){
                //Show alert
                ui.showAlert('Position not found', 'alert alert-dismissible alert-danger');
            }else{
                //Show player profile
                for(var i = 0; i < data.player.length; i++){
                    ui.showProfile(data.player[i])
                }
            }
        })
    }else{
        //Clear player profile
        ui.clearProfile();
    }

})