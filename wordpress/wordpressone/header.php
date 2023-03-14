<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

<nav class="navbar navbar-expand-xl navbar-dark w-100">
  <div class="container-fluid">

    <div class="">
      <a class="d-xl-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <i class="icon-hamburger"></i>
      </a>
      <a href="index.html" class="navbar-brand ">
        <?php 
            if ( function_exists( 'the_custom_logo' ) ) {
                the_custom_logo();
            }
        ?>
      </a>
    </div>
      
    
    <div class="collapse navbar-collapse" id="navmenu">
    <?php
      wp_nav_menu(
        array(
          'theme_location' => 'header',
          'container' => 'ul',
          'depth' => 1,
          'container_class' => 'ms-auto',
          'menu_class' => 'navbar-nav ms-auto collapse__ul',
          'add_li_class'  => 'nav-item',
          'add_a_class' => 'nav-link text-dark'
        )
      )
      ?>
    </div>
  </div>
</nav>
