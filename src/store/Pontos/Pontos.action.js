export function add (id){

    return {
        type:'ADD',
        payload:id
    }
}

export function sub (id){

    return {
        type:'SUB',
        payload:id
    }
}

export function fill (ficha){

    return {
        type:'FILL',
        payload:ficha
    }
}