<?php

function my_theme_load_styles()
{
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
    wp_enqueue_style('my-theme-style', get_template_directory_uri() . '/style.css', array(), false, 'all');
}

add_action('wp_enqueue_scripts', 'my_theme_load_styles');

function my_theme_load_scripts()
{
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
    wp_enqueue_script('metabox-script', get_template_directory_uri() . '/js/meta-box.js', array('jQuery'), '1.0', true);
    //ajax js
    wp_enqueue_script('post-search', get_template_directory_uri() . '/js/post-search.js', array('jquery'), '1.0', true);
    wp_enqueue_script('my-ajax-form', get_template_directory_uri() . '/js/tabs-onclick.js', array('jquery'), '1.0', true);
    wp_localize_script('my-ajax-form', 'my_ajax_form', array('ajaxurl' => admin_url('admin-ajax.php')));
}
add_action('wp_enqueue_scripts', 'my_theme_load_scripts');

add_action('admin_enqueue_scripts', 'my_theme_load_scripts');

function register_my_menu()
{
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'header' => 'Header_menu',
        'footer' => 'Footer_menu'
    ));
}
add_action('after_setup_theme', 'register_my_menu');

function add_classes_on_li($classes, $item, $args)
{
    if ($args->theme_location == 'header') {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_classes_on_li', 1, 3);

function add_classes_on_a($classes, $item, $args)
{
    if ($args->theme_location == 'header') {
        $classes[] = $args->add_a_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_classes_on_a', 1, 3);


function themename_custom_logo_setup()
{
    $defaults = array(
        'height'               => 100,
        'width'                => 400,
        'flex-height'          => true,
        'flex-width'           => true,
        'header-text'          => array('site-title', 'site-description'),
        'unlink-homepage-logo' => true,
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'themename_custom_logo_setup');


//Teams
function create_team_post_type()
{
    $labels = array(
        'name' => 'Teams',
        'singular_name' => 'Team',
        'menu_name' => 'Teams'
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'rewrite' => array('slug' => 'team'),
        'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
    );

    register_post_type('team', $args);
}

add_action('init', 'create_team_post_type');

function create_team_taxonomies()
{
    $labels = array(
        'name' => 'Team Category',
        'singular_name' => 'Category',
        'menu_name' => 'Category'
    );

    register_taxonomy('team_category', array('team'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'rewrite' => array('slug' => 'team-category'),
    ));
}

add_action('init', 'create_team_taxonomies', 0);

function team_metabox()
{
    add_meta_box(
        'team_metabox',
        'Team Details',
        'team_metabox_callback',
        'team',
        'advanced',
        'default'
    );
}
add_action('add_meta_boxes', 'team_metabox');

function team_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $team_position = get_post_meta($post->ID, "team_position", true);
    $team_name = get_post_meta($post->ID, "team_name", true);
?>
    <p>
        <label for="position" class="team-row-title"><?php _e('Position', 'team') ?></label>
        <input type="text" name="position" id="position" value="<?php if (isset($team_position)) echo $team_position; ?>">
    </p>
    <p>
        <label for="name" class="team-row-title"><?php _e('Name', 'team') ?></label>
        <input type="text" name="name" id="name" value="<?php if (isset($team_name)) echo $team_name; ?>">
    </p>
<?php
}

add_action("save_post", "team_save_metabox_data", 10, 2);

function team_save_metabox_data($post_id, $post)
{
    // we have verified the nonce
    if (!isset($_POST['team_nonce']) || !wp_verify_nonce($_POST['team_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = 'team';
    if ($post_slug != $post->post_type) {
        return;
    }

    // save value to db field
    $team_position = '';
    $team_name = '';

    if (isset($_POST['position'])) {
        $team_position = sanitize_text_field($_POST['position']);
    }

    if (isset($_POST['name'])) {
        $team_name = sanitize_text_field($_POST['name']);
    }

    update_post_meta($post_id, "team_position", $team_position);
    update_post_meta($post_id, "team_name", $team_name);
}

// Hero
function create_homepage()
{
    $labels = array(
        'name' => 'homepage',
        'singular_name' => 'homepage',
        'menu_name' => 'homepage'
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'rewrite' => array('slug' => 'team'),
        'supports' => array('title', 'editor')
    );

    register_post_type('homepage', $args);
}

add_action('init', 'create_homepage');

//importing sections
require get_template_directory() . '/metabox/section-1.php';
require get_template_directory() . '/metabox/section-2.php';
require get_template_directory() . '/metabox/section-3.php';

//ajax
add_action('wp_ajax_my_action_callback', 'my_action_callback');
add_action('wp_ajax_nopriv_my_action_callback', 'my_action_callback');

function my_action_callback()
{
    function renderPost($args) {
        $query = new WP_Query($args);
        ob_start();
        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $img_url = get_the_post_thumbnail_url();
                ?>
                <div class="col-12 col-md-6 col-xl-4">
                    <a href="blog-single.html">
                        <div class="card_a11 @@card_color h-100">
                            <figure class="card-blog__image">
                                <img src="<?php echo  $img_url; ?>" alt="" srcset="" width="400px" height="300px">
                            </figure>
                            <div class="card-blog__text bg-blush">
                                <time class="card-blog__text__date"><?php the_date(); ?></time>
                                <h5 class="h5 card-blog__text__title"><?php the_title(); ?></h5>
                            </div>
                        </div>
                    </a>
                </div>
            <?php
            endwhile;
        endif;

        wp_reset_postdata();
        $result = ob_get_contents();
        ob_end_clean();
        // echo 'Action performed successfully.';
        $return = array('content' => $result);
        wp_send_json($return);
        wp_die();
    }

    // Perform some action here
    $termId = $_POST['term_id'];
    $searchKey = $_POST['term_value'];

    if ($termId) {
        if ($termId == 'all') {
            $args = array(
                'post_type' => 'post',
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => get_option('posts_per_page'),
            );
        } else {
            $args = array(
                'post_type' => 'post',
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => get_option('posts_per_page'),
                'tax_query' => array(
                    array(
                        'taxonomy' => 'category',
                        'field'    => 'term_id',
                        'terms'    => $termId,
                    ),
                ),
            );
        }
        
        renderPost($args);
    }

    if (!$searchKey) {
        $args = array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'orderby' => 'date',
            'order' => 'DESC',
            'posts_per_page' => get_option('posts_per_page'),
        );

        renderPost($args);

        return;
    }

    if ($searchKey) {
        $args = array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'orderby' => 'date',
            'order' => 'DESC',
            'posts_per_page' => get_option('posts_per_page'),
            's' => $searchKey
        );
        
        renderPost($args);
    } 
}
