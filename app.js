const player = new MLB;
const ui = new UI;
const searchPlayer = document.getElementById('searchPlayer');

searchPlayer.addEventListener('keyup', (e) => {
    const playerText = e.target.value;
    if(playerText !== ''){
        player.getPlayer(playerText)
            .then(data=>{
                if(data.player.message === 'Not Found'){
                    ui.showAlert('User not found', 'alert alert-danger');
                }else{
                    ui.showProfile(data.responseData);
                }
            })
    }else{
        ui.clearProfile();
    }

})