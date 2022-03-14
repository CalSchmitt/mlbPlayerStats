const player = new MLB;
const ui = new UI;
const searchPlayer = document.getElementById('searchPlayer');

searchPlayer.addEventListener('keyup', (e) => {
    const playerText = e.target.value;
    if(playerText !== ''){
        player.getPlayer(playerText)
        .then(data=>{
            if(data.player.message === 'Object not found'){
                //Show alert
            }else{
                //Show player profile
                for(var i = 0; i < data.player.length; i++){
                    ui.showProfile(data.player[i])
                }
            }
        })
    }else{
        //Clear player profile
    }

})