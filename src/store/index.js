import {createStore} from "vuex";


const store = createStore({
    state() {
        return {
            num:1
        }
    },
    mutations:{
        add(state){
            state.num++
        },
        reduce(state){
            state.num-=2
        }
    },
    actions:{
        increment({commit}){
            commit("add")
        },
        decrement({commit}){
            commit("reduce")
        }
    }
})

export default store