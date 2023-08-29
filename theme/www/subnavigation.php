<?php $body_class = "productlist" ?>
<?php $page_description = "This is the list" ?>
<?php $page_title = "HTML5 Demo" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div id="content" class="subnavigation">
	
	<div class="subnavigation">
		<h3>Patients and products:</h3>
		<ul>
			<li class="button"><a href="product.php">Open positions</a></li>
			<li class="button"><a href="product.php">Diabetes Care</a></li>
			<li class="button"><a href="product.php">Products</a></li>
			<li class="button"><a href="product.php">Novo Nordisk in brief</a></li>
		</ul>
	</div>

	<ul class="references">
		<li><a href="#">Read more on Novonordisk.com</a></li>
	</ul>

	<div class="back">
		<a href="index.php">Home</a>
	</div>
	
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>