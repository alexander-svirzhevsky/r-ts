interface RepositoriesState { 
    loading: boolean,
    error: string | null,
    data: string[]
}

interface Action {
    type: string,
    payload?: any
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
    const {type, payload} = action
    switch (type) {
        case "search_repositories":
            return{
                loading: true,
                error: null,
                data: []
            }
        case "search_repositories_success":
            return{
                loading: false,
                error:null,
                data: payload
            }
        case "search_repositories_error":
            return{
                loading:false,
                error: payload,
                data: []
            }
        default: return state
    }
}

export default reducer;