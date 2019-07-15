import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bundesland :  "",
        year: "",
        markt: ""
    },
    getters : {
        bundesland : state => {
            return state.bundesland;
        },
        year : state => {
            return state.year;
        },
        markt : state => {
            return state.markt;
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
        set_markt : (state,key) => {
            switch (key) {
                case 0 :
                    state.markt = ""
                    break;
                case 1 :
                    state.markt = "Buchmarkt"
                    break;
                case 2 :
                    state.markt = "Clubwirtschaft"
                    break;
                case 3 :
                    state.markt = "Designwirtschaft"
                    break;
                case 4 :
                    state.markt = "Film"
                    break;
                case 5 :
                    state.markt = "Musikwirtschaft"
                    break;
                case 6 :
                    state.markt = "Pressemarkt"
                    break;
                case 7 :
                    state.markt = "Rundfunk"
                    break;
                case 8 :
                    state.markt = "Software/Games"
                    break;
                case 9 :
                    state.markt = "Telekommunikation"
                    break;
                case 10 :
                    state.markt = "Unterhaltungselektronik"
                    break;
                case 11 :
                    state.markt = "Werbemarkt"
                    break;
                default: state.markt = "Alle"
            }
        },

    set_year : (state,key) => {
    switch (key) {
        case 0 :
            state.year = ""
            break;
        case 1 :
            state.year = "2013"
            break;
        case 2 :
            state.year = "2014"
            break;
        case 3 :
            state.year = "2015"
            break;
        case 4 :
            state.year = "2016"
            break;
        case 5 :
            state.year = "2017"
            break;

        default: state.year = "2017"
    }
},
    },
    actions:{
    },
})