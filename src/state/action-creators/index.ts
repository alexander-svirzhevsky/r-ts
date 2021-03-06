import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions"

export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => { 
    dispatch({
        type: ActionType.SEARCH_REPOSITORIES,
        payload: []
    })		
		
    try {   
        const {data} =  await axios.get("https://registry.npmjs.org/-/v1/search", {
            params: {     
                text: term
            }
        })

        const names = data.objects.map((result: any) => {
            return result.package.name
        })
        

        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: names
        })
        
    } catch (error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_ERROR,
            payload: message
        });
    }
}