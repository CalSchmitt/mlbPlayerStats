class UI{
    constructor(){
        this.stats = document.getElementById('stats');
    }
    showProfile(playerProfile){
        this.stats.innerHTML = `
            <div class="card card-body mb-3"
                <div class = "row">
                    <div class = "col-mid-9">
                        <span class = "badge badge-primary">Public Repos: ${playerProfile.fullName}</span>
                        <span class = "badge badge-secondary">Public Gists: ${playerProfile.primaryNumber}</span>
                        <span class = "badge badge-success">Followers: ${playerProfile.currentAge}</span>
                        <span class = "badge badge-info">Following: ${playerProfile}</span>
                        <br><br>
                    </div>
                </div>
            </div>
        `
    }
    clearProfile(){
        this.stats.innerHTML = '';
    }
}

