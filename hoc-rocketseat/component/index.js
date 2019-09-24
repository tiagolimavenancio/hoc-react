import React from './node_modules/react'
import { withRepoData } from './hocs/withRepoData'

const RepoList = ({ repoData }) => {
    console.log(repoData)

    if (repoData.loading) return <p>Carregando...</p>

    return repoData.data.map(repo => <p key={repo.id}>{repo.full_name}</p>)
}

export default withRepoData(RepoList, 'diego3g')