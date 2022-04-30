<?php

class WP_React_Customizer{
  public function __construct() {
    add_action( 'customize_register', array($this, 'register'), 100);
  }

  public function register($wp_customize) {

    $wp_customize->add_panel(
      MY_THEMESLUG . '_footer_options',
      array(
        'priority' => 1,
        'title' => __( 'Footer Options' , MY_THEME_TEXTDOMAIN ),
        'description' => '',
      )
    );

    $wp_customize->add_section(
      MY_THEMESLUG . '_footer',
      array(
        'title'    => __( 'Footer', MY_THEME_TEXTDOMAIN ),
        'priority' => 10,
        'panel' => MY_THEMESLUG . '_footer_options'
      )
    );

    $wp_customize->add_setting(
      MY_THEMESLUG . '_footer_copyright',
      array(
        'default'           => __( 'Copyright [copyright] [current_year] [site_title]', MY_THEME_TEXTDOMAIN ),
        'sanitize_callback' => array($this, 'sanitize_text')
      )
    );

    $wp_customize->add_control(
      MY_THEMESLUG . '_footer_copyright',
      array(
        'type'     => 'textarea',
        'label'    => __( 'Copyright', MY_THEME_TEXTDOMAIN ),
        'section'  => MY_THEMESLUG . '_footer',
        'settings' => MY_THEMESLUG . '_footer_copyright'
      )
    );
  }

  public function sanitize_text( $text ) {
    return sanitize_text_field( $text );
  }
}