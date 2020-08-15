// Create Github class
class Github {
    // Create constructors
    constructor() {
        this.client_id = config.CLIENT_ID;
        this.client_secret = config.CLIENT_SECRET;
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    // Retrieve data from GitHub API
    async getUser(userText) {
        // Fetch profile information
        const ProfileResponse = await fetch(`https://api.github.com/users/${userText}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // Fetch repos
        const ReposResponse = await fetch(`https://api.github.com/users/${userText}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // Profile JSON
        const profile = await ProfileResponse.json();
        // Repos JSON
        const repos = await ReposResponse.json();

        return {
            profile,
            repos
        }
    }
}