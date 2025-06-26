const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name || 'Não possui nome cadastrado 🤦‍♂️'
        this.bio = gitHubUser.bio || 'Não possui bio cadastrada 🤷‍♀️'
        this.userName = gitHubUser.login
    },
    setRepositories(repositories){
        this.repositories = repositories || []
    },
}

export { user }