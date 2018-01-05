<? include_once($_SERVER['LOCAL_PATH']."/includes/segment.php") ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Novo Nordisk</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=1.0;" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<? if($_SESSION["dev"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>
</head>
<body class="i:validdevice">

<div id="page" class="i:page">

	<div id="header">
		<ul class="servicenavigation">
			<li class="keynav front"><a href="index.php">Novo Nordisk</a></li>
			<li class="keynav navigation nofollow"><a href="#navigation" rel="nofollow">Menu</a></li>
		</ul>
	</div>
