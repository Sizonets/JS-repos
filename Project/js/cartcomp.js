Vue.component('cart',{
	data(){
		return {
			cartItems: [],
            cartSrc:"cartgoods.json",
            showCart: false,
		}
	},
    methods:{
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.cartItems.push(prod)
            }
        },
        remove(item) {
            if(item.quantity > 1){
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1)
            }
        },
        sumCart(arr){
            let sumEl = 0;
            for (let element of arr){
                sumEl += (element.price * element.quantity)
            };
            return sumEl
        },
        quantityGoods(arr){
            let quantity = 0;
            arr.forEach(el => {
                quantity += el.quantity
            });
            return quantity
        }
    },
    mounted(){
        this.$parent.getJson(this.cartSrc)
            .then(data => {
                for (let el of data){
                    this.cartItems.push(el);
                }
            });
    },
	template:`
        <div class="header-right">
          <div class="right-hover">
            <div class="storoller-img" @click="showCart = !showCart">
              <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
              <p class="cartQuantity" v-if="cartItems.length">{{ quantityGoods(cartItems) }}</p>
            </div>
            <div class="drop-box-column" v-show="showCart">
               <p class="text-cart" v-if="!cartItems.length">No products</p>
               <div class="drop-caret">
                  <cart-item class="caret-product" 
                  v-for="item of cartItems" 
                  :key="item.id_product"
                  :cart-item="item" 
                  @remove="remove">
                  </cart-item>
               </div>
               <div class="drop-caret total-prise">
                   <div class="total">TOTAL</div>
                   <div class="total">$ {{sumCart(cartItems)}}</div>
               </div>
               <div class="drop-caret">
                 <a href="#" class='checkoutcart'>Checkout</a>
                 <a href="#" class='checkoutcart'>Go to cart</a>
               </div>
            </div>
          </div>   
            <a href="#" class="button">My account<i id="caret-right" class="fas fa-caret-down"></i></a>
        </div>
	`
});
Vue.component('cart-item',{
    props:['cartItem'],//:cart-item="item"
    template:`
       <div >
          <img class="caret-product-img" :src="cartItem.imgSrc" alt="siz">
          <div class="caret-product-discription">
              <div class="name-discription">{{ cartItem.product_name }}</div>
              <div class="stars-discription"><img src="img/stars.jpg" alt=""></div>
              <div class="prise-discription">{{ cartItem.quantity }}   x   {{ cartItem.price }}</div>
          </div>
          <button class="close-botton" @click="$emit( 'remove', cartItem)">&times;</button>
       </div>
    `
});
