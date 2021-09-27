class Github{
    constructor() {
        this.client_id = "fe643ca8cbad113a5757";
        this.client_secret = "ef387e029c64087f03821e13b559cadebccdee6d";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`${profile.repos_url}?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();

        // console.log('repos', repos);
        console.log('profile', {profile});
        return {
            profile,
            repos
        }; // same as {profile: profile, repos: repos}
    }
}