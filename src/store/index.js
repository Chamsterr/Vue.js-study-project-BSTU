import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'


export default new Vuex.Store({
    mutations: {
        setLangIndex(state, index) {
            state.langIndex = index;
        },
        addServices(state, listOfNamings) {
            state.services[parseInt(listOfNamings[3])].map(x => x.push(listOfNamings.shift()))
        }
    },
    state: {
        langIndex: 1,
        services: [
            [["Беларусь", "Украина"], ["Belarus", "Ukraine"], ["Bélarus", "Ukraine"]],
            [["Москва", "Екатеринбург", "Новосибирск", "Красноярск"], ["Moscow", "Yekaterinburg", "Novosibirsk", "Krasnoyarsk"], ["Moscou", "Ekaterinbourg", "Novossibirsk", "Krasnoïarsk"]],
            [["Китай", "Япония", "Южная Корея"], ["China", "Japan", "South Korea"], ["Chine", "Japon", "Corée du Sud"]]
        ]
    },
    getters: {
        getLangIndex(state) {
            return state.langIndex
        },
        getServices(state) {
            return state.services
        }
    },
    plugins: [
        createPersistedState()
    ]
})