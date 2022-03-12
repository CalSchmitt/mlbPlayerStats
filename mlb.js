class MLB{
    async getPlayer(player){
        const playerResponse = await fetch(`https://statsapi.mlb.com/api/v1/people/${player}`);

        const responseData = await playerResponse.json();

        return responseData
    }
}