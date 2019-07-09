import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bundesland :  ""
    },
    getters : {
        bundesland : state => {
            return state.bundesland;
        }
    },
    mutations: {
        set_bundesland : (state,key) => {
            switch (key) {
                case 0 :
                    state.bundesland = ""
                    break;
                case 1 :
                    state.bundesland = "Baden-Württemberg"
                    break;
                case 2 :
                    state.bundesland = "Bayern"
                    break;
                case 3 :
                    state.bundesland = "Berlin"
                    break;
                case 4 :
                    state.bundesland = "Brandenburg"
                    break;
                case 5 :
                    state.bundesland = "Bremen"
                    break;
                case 6 :
                    state.bundesland = "Hamburg"
                    break;
                case 7 :
                    state.bundesland = "Hessen"
                    break;
                case 8 :
                    state.bundesland = "Mecklenburg-Vorpommern"
                    break;
                case 9 :
                    state.bundesland = "Niedersachsen"
                    break;
                case 10 :
                    state.bundesland = "Nordrhein-Westfalen"
                    break;
                case 11 :
                    state.bundesland = "Rheinland-Pfalz"
                    break;
                case 12 :
                    state.bundesland = "Saarland"
                    break;
                case 13 :
                    state.bundesland = "Sachsen"
                    break;
                case 14 :
                    state.bundesland = "Sachsen-Anhalt"
                    break;
                case 15 :
                    state.bundesland = "Schleswig-Holstein"
                    break;
                case 16 :
                    state.bundesland = "Thüringen"
                    break;
                default: state.bundesland = "Alle"
            }
        },
        ADD_TODO : (state,payload) => {
            state.todos.push(payload)
        },
    },
    actions:{
        GET_TODO : async (context,payload) => {
            let { data } = await Axios.get('http://yourwebsite.com/api/todo')
            context.commit('SET_TODO',data)
        },
        SAVE_TODO : async (context,payload) => {
            let { data } = await Axios.post('http://yourwebsite.com/api/todo')
            context.commit('ADD_TODO',payload)
        },
    },
})