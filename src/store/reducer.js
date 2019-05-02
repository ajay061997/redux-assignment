import * as actionTypes from './action'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON :
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age
        }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }

        case actionTypes.REMOVE_PERSON :
            const updatePerson = state.persons.filter(person => person.id !== action.personID)
            return {
                ...state,
                persons: updatePerson
            }
    }
    return state;
}

export default reducer