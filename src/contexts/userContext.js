import { createContext } from 'react'


const UserContext = createContext({
    Title: null,
    ImageNoRepo: null,
    TextNoRepo: null,
    ButtonSearch: null
})

export default UserContext