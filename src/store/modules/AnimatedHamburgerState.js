import axios from 'axios';

const state = {
    animatedForms: null,
    currentForm: null,
    formIndex: 0,

};

const getters = {
    getAnimatedForms: (state) => state.animatedForms,
    getCurrentForm: (state) => state.currentForm,
};

const actions = {
    async requestAnimatedFormsList(){
        //Make call to db
        let response = {
            data: {
                forms: ['choose-theme', 'populate-theme']
            }
        }
        state.animatedForms = response.data.forms;
    }
    // async getWebpageFromDB(holder, uriString){
    //     // const loginFormFields = formStates.state.loginFormFields;
    //     let payload = {
    //         uriString: uriString
    //     }
    //     const response = await axios.post('http://localhost:4000/api/get-client-webpage', payload);
    //     state.clientWebpageData = response.data;
    //     // state.user = response.data;
    //     // state.tokenState = 'valid'; 
    //     // state.route = '/'
    // },
};

const mutations = {
    incrementForms(){
        state.currentForm = state.animatedForms[state.formIndex];
        state.formIndex++;
    }
    // setRoute(holder, route){
    //     state.route = route
    // },
};

export default {
    state,
    getters,
    actions,
    mutations
}
