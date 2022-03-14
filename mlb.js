class MLB{
    constructor(){
        this.client_id = '3160d027ac4c4e488e503fc35e41bebd';
    }
    async getPlayer(position){
        const playerResponse = await fetch(`https://api.sportsdata.io/v3/mlb/scores/json/FreeAgents?key=3160d027ac4c4e488e503fc35e41bebd`);
        const returnedPlayer = await playerResponse.json();
        const entries = Object.values(returnedPlayer);
        
        return{
            player: entries.filter(
                function(entries){ return entries.Position == position })
        }
    }
}