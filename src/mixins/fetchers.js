export default{
    methods:{
        getData: async function(route){
            let response = await fetch(route);
            let data = await response.json()
            return data;
        },

        post: function () {
            console.log('je post')
        }
    }
    
}