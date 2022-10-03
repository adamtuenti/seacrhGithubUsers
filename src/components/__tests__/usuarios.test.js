import UsuariosHook from "../pages/usuarios/usuarios"
import { fireEvent, render, screen } from '@testing-library/react'


const json = [
    {
        "login": "adam",
        "id": 181,
        "node_id": "MDQ6VXNlcjE4MQ==",
        "avatar_url": "https://avatars.githubusercontent.com/u/181?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/adam",
        "html_url": "https://github.com/adam",
        "followers_url": "https://api.github.com/users/adam/followers",
        "following_url": "https://api.github.com/users/adam/following{/other_user}",
        "gists_url": "https://api.github.com/users/adam/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/adam/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/adam/subscriptions",
        "organizations_url": "https://api.github.com/users/adam/orgs",
        "repos_url": "https://api.github.com/users/adam/repos",
        "events_url": "https://api.github.com/users/adam/events{/privacy}",
        "received_events_url": "https://api.github.com/users/adam/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    },
    {
        "login": "adamwathan",
        "id": 4323180,
        "node_id": "MDQ6VXNlcjQzMjMxODA=",
        "avatar_url": "https://avatars.githubusercontent.com/u/4323180?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/adamwathan",
        "html_url": "https://github.com/adamwathan",
        "followers_url": "https://api.github.com/users/adamwathan/followers",
        "following_url": "https://api.github.com/users/adamwathan/following{/other_user}",
        "gists_url": "https://api.github.com/users/adamwathan/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/adamwathan/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/adamwathan/subscriptions",
        "organizations_url": "https://api.github.com/users/adamwathan/orgs",
        "repos_url": "https://api.github.com/users/adamwathan/repos",
        "events_url": "https://api.github.com/users/adamwathan/events{/privacy}",
        "received_events_url": "https://api.github.com/users/adamwathan/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    }
]

test('Users result', () => {
    render(<UsuariosHook {...json}/>);
    screen.debug()
})