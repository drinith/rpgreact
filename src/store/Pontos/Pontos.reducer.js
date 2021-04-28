export default function(state={},action){


    switch(action.type){
        case 'ADD':
            return action.payload
        case 'SUB':
            return action.payload

        case 'FILL':
            return action.payload
            
        default:
            return state
    }
} 