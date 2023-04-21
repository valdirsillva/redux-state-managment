import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state) => {
            // Redux Toolkit nos permite escrever lógica "mutante" em redutores. Isto
            // na verdade não altera o estado porque usa a biblioteca immer,
            // que detecta alterações em um "estado de rascunho" e produz um novo
            // estado imutável baseado nessas mudanças

            state.value += 1

        },

        decrement: (state) => {
            state.value -= 1
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

// A função abaixo é chamada de thunk e nos permite executar a lógica assíncrona. Isto
// pode ser despachado como uma ação regular: `dispatch(incrementAsync(10))`. Esse
// chamará o thunk com a função `dispatch` como primeiro argumento. assíncrono
// o código pode então ser executado e outras ações podem ser despachadas

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer