<script>
    export let productId = 100;
</script>

<h1>products list</h1>
<ul>
    <a href="/products/1">product 1</a>
    
    <a href="/products/2">product 2</a>
    <a href={`/products/${productId}`}>product {productId}</a>
</ul>

<a href="/">HOME</a>