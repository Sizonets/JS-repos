const app = new Vue({
    el: '#app',
    data:{
        navigationHome: false,
        navigationMan: false,
        navigationWomen: false,
        navigationKids: false,
        navigationAccoseriese: false,
        navigationFeatured: false,
        navigationHotDeals: false,
        showBrowse: false,
    },
    methods:{
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    /*this.$refs.error.setError(error);*/
                })
        },
    },
})
