export const getUsers = async (user) => {
    let json;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };


    await fetch(process.env.REACT_APP_URL_USER + user + '+in:user&per_page=1500', requestOptions)
        .then((response) => { return response.json() })
        .then((data) => {
            json = data
        })
        .catch((err) => {
            return err
        })

    return json
}

export const getUserDetail = async (user) => {
    let json;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };


    await fetch(process.env.REACT_APP_URL_USER_DETAIL + user, requestOptions)
        .then((response) => { return response.json() })
        .then((data) => {
            json = data
        })
        .catch((err) => {
            return err
        })

    return json
}

export const getRepositoriesByUser = async (user) => {
    let json;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };


    await fetch(process.env.REACT_APP_URL_REPOSITORIES_BY_USER + user + '/repos', requestOptions)
        .then((response) => { return response.json() })
        .then((data) => {
            json = data
        })
        .catch((err) => {
            return err
        })

    return json
}

export const getRepositoriesByName = async (name) => {
    let json;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };


    await fetch(process.env.REACT_APP_URL_REPOSITORIES_BY_NAME + name + '&sort=stars&order=desc&per_page=1500', requestOptions)
        .then((response) => { return response.json() })
        .then((data) => {
            json = data
        })
        .catch((err) => {
            return err
        })

    return json
}
