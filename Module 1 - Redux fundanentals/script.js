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

// initial State
const initialState = {
    value: 0,
};
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
    counterResult.innerHTML = state?.value.toString();
}

// Initially update ui
render();

store.subscribe(render); 

// Create Actions
incrementEl.addEventListener('click', () => {
    store.dispatch(increment(5));
})
decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(3));
})

