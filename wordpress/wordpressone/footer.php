    <footer class="theme-footer bg-sky text-white py-20">
        <div class="container">
            <div class="row logo">
                <div class="col-3">
                    <?php 
                        if ( function_exists( 'the_custom_logo' ) ) {
                            the_custom_logo();
                        }
                    ?>
                </div>
            </div>



            <div class="row pt-10 pt-xl-20 ">
            <?php
                wp_nav_menu(
                    array(
                    'theme_location' => 'footer',
                    'container' => 'ul',
                    'depth' => 2,
                    'container_class' => 'ms-auto',
                    'menu_class' => 'navbar-nav ms-auto collapse__ul footer-menus ',
                    'add_li_class'  => 'nav-item',
                    'add_a_class' => 'nav-link text-dark'
                    )
                )
            ?>

            <div class="row pt-10 pt-xl-20">
                <div class="col-sm-12 ">
                    <p>Site content copyright &#169; 2021 Allowded Text Terms & Privacy</p>
                </div>
            </div>
        </div>
    </footer>



    <?php wp_footer(); ?>

</body>
</html>
