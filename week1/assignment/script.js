// Action Identifiers
const Increment = "increment";
const Decrement = "decrement"

// Action creators
const increment = (value) => {
    return {
        type: Increment,
        payload: value
    }
}

const decrement = (value) => {
    return {
        type: Decrement,
        payload: value
    }
}
// Select Element
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterResult = document.getElementById("counter");
const add = document.getElementById("add");
const reset = document.getElementById("reset");

// initial State
let initialState = [
    {
        id:1,
        value: 0,
    }
];
// Create Reducer
const counterReducer = (state = initialState, action) => {
    if (action.type == "increment") {
        return {
            ...state,
            value: state.value + action.payload,
            
        };
    }

    else if (action.type == "decrement") {
        return {
            ...state,
            value: state.value - action.payload,
            
        };
    }
    else {
        return state;
    }
    
}

// Create Store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    console.log("savvir",state);
}

// Initially update ui
render();

store.subscribe(render); 



const addMatch = (state) => {
    let newState = [...state];
    let length = newState.length;
    newState.push({
        id: length + 1,
        value: 0
    })
    console.log(newState);
    initialState = newState;
    console.log(state);
    return initialState
}

// Create Actions
add.addEventListener('click', () => {
    addMatch(initialState);
    render();
    console.log(initialState);
})
