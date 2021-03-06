<?php

class WP_React_Customizer {
  public function __construct() {
    add_action('customize_register', array($this, 'register'), 100);
  }

  public function register($wp_customize) {
    $wp_customize->add_panel(
      'wp_react_footer_options',
      array(
        'priority' => 1,
        'title' => __('Footer Options'),
        'description' => 'Footer copyright textarea',
      )
    );

    $wp_customize->add_section(
      'wp_react_footer',
      array(
        'title'    => __('Footer'),
        'priority' => 10,
        'panel' => 'wp_react_footer_options'
      )
    );

    $wp_customize->add_setting(
      'wp_react_footer_copyright',
      array(
        'default' => __('Copyright [copyright] [current_year] [site_title]'),
        'sanitize_callback' => array($this, 'sanitize_text')
      )
    );

    $wp_customize->add_control(
      'wp_react_footer_copyright',
      array(
        'type'     => 'textarea',
        'label'    => __('Copyright'),
        'section'  => 'wp_react_footer',
        'settings' => 'wp_react_footer_copyright'
      )
    );
  }

  public function sanitize_text($text) {
    return sanitize_text_field($text);
  }
}