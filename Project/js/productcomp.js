Vue.component('products',{
    data(){
        return{
            products:[],
            filtered:[],
            catalogSrc:"goods.json",
        }
    },
    methods:{
        filter(search){
            let regexp = new RegExp(search, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
    },
    mounted(){
        this.getJson(this.catalogSrc)
            .then(data => {
                for (let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
	template:`
		<div class="content-product">
            <product v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
	`
});
Vue.component('product',{
    props:['product'],
    template:`
    <div class="product-flex">
        <a :href="product.stringSrc" class="product">
            <img class="product-img" :src="product.imgSrc" alt="product">
            <div class="product-text">
                <p class="product-name">{{ product.product_name }}</p>    
                <p class="product-price">$ {{ product.price }}</p>
            </div>
        </a>
        <div class="add-position">
          <p class="add" @click="$parent.$refs.cart.addProduct(product)">
          <i class="fas fa-cart-arrow-down"></i>Add to card</p>
        </div>
    </div>
    `
})
/*Vue.component('product', {
    props: ['product'],
    template: `
    	<div class="product-flex product-float">
	        <a href="womanproduct.html" class="product">
	            <img class="product-img" :src="product.img" alt="product">
	            <div class="product-text">
	                <p class="product-name">{{product.product_name}}</p>    
	                <p class="product-price">{{product.price}} $</p>
	            </div>
	        </a>
	        <div class="add-position">
              <p class="add" @click="$root.$refs.cart.addProduct(product)">
              <i class="fas fa-cart-arrow-down"></i>Add to card</p>
            </div>
	    </div>
  <div class="content-product">
			<product v-for="item of products" :key="item.id_product" :product="item"></product>
		</div>  `
})*/


