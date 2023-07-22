export default function injectionRoutes(api) {

api.get('/signUp', constrollers.signUp());
api.get('/signIn', constrollers.signIn());

api.get('/api/shoes', constrollers.getShoes); // return all shoes
api.get('/api/shoes:id', controllers.getShoe); // after clique on a shoes

api.get(`/api/shoes/${shoeId}/comments`, controllers.getComments()); //
api.put(`/api/shoes/${shoeId}/comments`, controllers.addComment());
api.update(`/api/shoes/${shoeId}/comments`, controllers.updateComment());
api.delete(`/api/shoes/${shoeId}/comments`, controllers.deleteComment());

api.get('/api/Cart', constrollers.getCart()); // when you clique on Cart Icon
api.get('/api/Cart/:id', constrollers.getCartItem()); // by clique on One Itmen in the cart
api.put('/api/Cart/:id', constrollers.putCart()); // By the Button add to Cart
api.update(`/api/Cart/${id}`, constrollers.getCart()); // When you update a product who was in Cart (exemple increase a quqtity of a Item)
api.delete('/api/Cart/:id', constrollers.deleteShoeFromCart()); // by clique on button  To delete cart Item
}