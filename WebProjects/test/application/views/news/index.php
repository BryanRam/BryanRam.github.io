
<h2><?php echo $title; ?> </h2>

<?php foreach ($news as $news_item): ?>

		<h3><?php echo $news_item['title']; ?></h3>
		<div class="main">
			<?php echo $news_item['text']; ?>
		</div>
		<p><a href="<?php echo 'news/'.$news_item['slug']; ?>"> View article </a></p>
		
<?php endforeach; ?>

<!--Here, each news item is looped and displayed to the user.
-The news overview page is now done, but a page to display individual news 
-items is still absent. The model created earlier is made in such way that 
-it can easily be used for this functionality. You only need to add some 
-code to the controller and create a new view. Go back to the News controller 
-and update view() with the following:
-->

