// import {createStore} from 'redux'
// const ADD_ACTION ='ADD'
// const add =(num)=>{
//     return {
//         type:ADD_ACTION,
//         num,
//     }
// }

// const initialState ={
//     count :0,
// }
// const reducers =(state=initialState,actions)=>{
//     switch(action.type){
//         case ADD_ACTION:
//         return Object.assign({},state,{
//             conut :state.conut+action.num
//         })
//         default:
//         return state
//     }
// }
//  const reduxStore =createStore(reducers)


// function add(state) {
//     return { text: state.num }
// }
 
// //映射Redux actions到组件的属性
// function mapDispatchToProps(dispatch){
//     return{
//         onButtonClick:()=>dispatch(buttonClickAction),
//         onChangeText:()=>dispatch(changeTextAction)
//     }
// }
// export default reduxStore
