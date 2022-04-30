<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
  </head>
<body>
    <div id="root"></div>
    <?php wp_footer(); ?>
</body>
</html>