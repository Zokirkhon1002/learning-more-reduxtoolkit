// import { createAction, createReducer} from '@reduxjs/toolkit';

// export const Increment =  createAction("Increment/counter");
// export const Decrement =  createAction("Decrement/counter");
// export const IncreaseByAmount =  createAction("IncreaseByAmount/counter");
// export const DecrementByAmount =  createAction("DecrementByAmount/counter");

// // let action = Increment(10);
// // console.log(action)

// // reducer
// // 1. using builder notation

// const initialState = {
//     value:0
// }

// // 1-way
// // export const counterSlices = createReducer(initialState, (builder)=> {
// //     builder.addCase(Increment, (state,action)=> {
// //         state.value++;
// //     });
// //     builder.addCase(Decrement,(state,action)=> {
// //         state.value--;
// //     })
// //     builder.addCase(IncreaseByAmount, (state,action)=> {
// //         state.value += action.payload
// //     })
// //     builder.addCase(DecrementByAmount, (state,action)=> {
// //         state.value -= action.payload
// //     })
// // })

// // 2-way Map Notaion
// export const counterSlices = createReducer(initialState, {
//     [Increment]: (state,action)=> {state.value++},
//     [Decrement]: (state,action)=> {state.value--},
//     [IncreaseByAmount]: (state,action)=> {
//         state.value += action.payload
//     },
//     [DecrementByAmount]: (state,action)=> {
//         state.value -= action.payload
//     }
// })
