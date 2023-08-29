<?php $body_class = "productlist" ?>
<?php $page_description = "This is the list" ?>
<?php $page_title = "HTML5 Demo" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div id="content" class="front">
	
	<div class="image">
		<img src="img/bg_front.jpg" alt="Novo Nordisk" />
	</div>
	
	<div class="shortcuts">
		<h3>Shortcuts:</h3>
		<ul>
			<li class="button"><a href="product.php">Open positions</a></li>
			<li class="button"><a href="product.php">Diabetes Care</a></li>
			<li class="button"><a href="product.php">Products</a></li>
			<li class="button"><a href="product.php">Novo Nordisk in brief</a></li>
		</ul>
	</div>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>