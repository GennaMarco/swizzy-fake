
import {loadQuote} from "../api/quote";


export const QUOTE_LOADING = 'QUOTE_LOADING';

export const QUOTE_COMPLETE = 'QUOTE_COMPLETE';

export const QUOTE_ERROR = 'QUOTE_ERROR';


export const loadNewQuote = () => {
    return async (dispatch) => {
        dispatch({type: QUOTE_LOADING});
        try{
            const quote = await loadQuote(); // PRIMA DI ASSEGNARE IL RISULTATO ASPETTA CHE LA FUNZIONE SIA ANDATA A BUON FINE
            dispatch({type: QUOTE_COMPLETE, result: quote});
            // api
        } catch (error){
            dispatch({type: QUOTE_ERROR, error});
        }
    }
};
