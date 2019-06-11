Vue.component("filter-el",{
    data(){
      return{
          userSearch: '',
      }
    },
    template:`
    <form action="#" @submit.prevent="$parent.$refs.products.filter(userSearch)">
      <input type="text" class="form-field" v-model="userSearch" placeholder="Search for Item...">
      <button type="submit" class="form-search"><i  class="fas fa-search"></i></button>
    </form>
    `
})