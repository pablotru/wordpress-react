<?php

class WP_React_Theme_Config {
  public function __construct() {
    add_action('wp_enqueue_scripts', array($this, 'theme_config'));
    add_shortcode('site_title', array($this, 'site_title_shortcode'));
    add_shortcode('copyright', array($this, 'copyright_shortcode'));
    add_shortcode('current_year', array($this, 'current_year_shortcode'));
  }

  public function site_title_shortcode() {
    $protocols = array(
      'http://', 'http://www.', 'www.', 'https://', 'https://www.'
    );
    $site_url = get_bloginfo('wpurl');
    $site_title = str_replace($protocols, '', $site_url);
    return $site_title;
  }
  
  public function copyright_shortcode() {
    return '&copy;';
  }
  
  public function current_year_shortcode() {
    $year = date('Y');
    return $year;
  }
  
  public function get_page_list() {
    $pages = get_pages();
    $page_list = array();
    foreach ($pages as $page) {
      array_push($page_list, array(
        'ID' => $page->ID,
        'slug' => $page->post_name,
        'parent' => $page->post_parent
      ));
    }
    return $page_list;
  }
  
  public function get_front_page() {
    $front_page = get_option('page_on_front');
    $post = $front_page ? get_post($front_page)->post_name : false;
    return $post;
  }

  public function get_post_count() {
    $post_count = wp_count_posts();
    return $post_count->publish;
  }
  
  public function get_filter_list($list) {
    $filter_list = array();
    foreach ($list as $item) {
      $filter_list[$item->term_id] = array(
        'name' => $item->name,
        'slug' => $item->slug
      );
    }
    return $filter_list;
  }
  
  public function get_footer_text() {
    $footer = get_theme_mod('wp_react_footer_copyright', __('Copyright [copyright] [current_year] [site_title]'));
    return do_shortcode($footer);
  }
  
  public function get_menu_list($menu_name) {
    $menu_by_name = wp_get_nav_menu_name($menu_name);
    $menu = wp_get_nav_menu_items($menu_by_name);
    $menu_list = array();
    if ($menu) {
      foreach ($menu as $item) {
        array_push($menu_list, array(
          'ID' => (int)$item->object_id,
          'parent' => $item->post_parent,
          'order' => $item->menu_order,
          'url' => str_replace(get_bloginfo('wpurl'), '', $item->url),
          'title' => $item->title
        ));
      }
    }
    return $menu_list;
  }

  public function get_images() {
    $query_images_args = array(
      'post_type'      => 'attachment',
      'post_mime_type' => 'image',
      'post_status'    => 'inherit',
      'posts_per_page' => - 1,
    );
    
    $query_images = new WP_Query($query_images_args);
    
    $images = array();
    foreach ( $query_images->posts as $image ) {
        $images[$image->ID] = $image;
    }
    return $images;
  }
  
  public function theme_config() {
    wp_enqueue_script('configjs', get_theme_file_uri('config.js'));
  
    $config = array(
      'title' => get_bloginfo('name'),
      'tagline' => get_bloginfo('description'),
      'menu' => $this->get_menu_list('main-menu'),
      'pages' => $this->get_page_list(),
      'postsPerPage' => get_option('posts_per_page'),
      'postCount' => $this->get_post_count(),
      'images' => $this->get_images(),
      'taxonomies' => array(
        'categories' => $this->get_filter_list(get_categories()),
        'tags' => $this->get_filter_list(get_tags())
      ),
      'frontPage' => $this->get_front_page(),
      'footer' => $this->get_footer_text()
    );
    wp_localize_script('configjs', 'WPConfig', $config);
  }
}
