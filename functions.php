<?php

require get_template_directory() . '/classes/wp-react-customizer.php';
new WP_React_Customizer();

require get_template_directory() . '/classes/wp-react-theme-config.php';
new WP_React_Theme_Config();

new Main();
class Main {
  public function __construct() {
    add_action('wp_enqueue_scripts', array($this, 'theme_assets'));
    add_action('after_setup_theme', array($this, 'add_support'));
    add_action('init', array($this, 'register_menus'));
    add_action('init', array($this, 'set_permalink'));
  }
  
  public function theme_assets() {
    wp_enqueue_script('mainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
    wp_enqueue_style('maincss', get_theme_file_uri('/build/index.css'));
  }
  
  public function add_support() {
    add_theme_support('post-thumbnails');
    add_theme_support('widgets');
    add_theme_support('post-formats', array('aside', 'gallery', 'quote', 'image', 'video'));
    add_theme_support('menus');
    remove_filter('template_redirect', 'redirect_canonical');
  }

  public function register_menus() {
    register_nav_menus(
      array(
        'main-menu' => __('Main Menu'),
      )
    );
  }

  public function set_permalink() {
    global $wp_rewrite;
    $wp_rewrite->set_permalink_structure('/post/%postname%/');
  }
}