import produce from 'immer';

//reducer reserve que por padrao tem uma state com array vazio e uma action.
//o produce (biblioteca immer) serve para fazer uma copia do state e preservar a imutabilidade da state
export default function reserve(state = [], action){
    switch(action.type){
        case 'ADD_RESERVE':
            return produce( state, draft => {
                //eh armazenado em tripIndex se os ids clicado e existentes existirem
                const tripIndex = draft.findIndex( trip => trip.id === action.trip.id );

                //se esse id verificado existir entao draft nessa posicao do id .amount incrementa a qtde
                if(tripIndex >= 0){
                    draft[tripIndex].amount += 1
                // senao de um push no que ja existe na state e amount eh 1    
                }else {
                    draft.push({
                        ...action.trip,
                        amount: 1
                    });
                }
            });
        case 'REMOVE_RESERVE': 
            return produce( state, draft => {
                const tripIndex = draft.findIndex( trip => trip.id === action.id );

                if(tripIndex >= 0){
                    draft.splice(tripIndex, 1)
                }
            })

        case 'UPDATE_RESERVE': {

            if(action.amount <= 0){
                return state
            }
            return produce(state, draft => {
                const tripIndex = draft.findIndex( trip => trip.id === action.id );

                if(tripIndex >= 0){
                    draft[tripIndex].amount = Number(action.amount)
                }

            });
        }
        default:
            return state;
        
    }
}