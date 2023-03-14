<?php
/**
 * creating metabox for hero section of home page.
 */
function home_metabox()
{
    add_meta_box(
        'home_metabox',
        'Home hero images',
        'home_metabox_callback',
        'page',
        'advanced',
        'default'
    );
}
add_action('add_meta_boxes', 'home_metabox');

function home_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $image_one = get_post_meta($post->ID, "image_one", true);
    $image_two = get_post_meta($post->ID, "image_two", true);
    $image_three = get_post_meta($post->ID, "image_three", true);
?>
    <p>
        <label for="image_one" class="team-row-title"><?php _e('Image one', 'home') ?></label>
        <input type="url" name="image_one" id="image_one" value="<?php if (isset($image_one)) echo $image_one; ?>">
        <button type="button" class="button" id="section2_image-btn" data-media-uploader-target="#section2_image"><?php _e( 'Upload Image', 'home' )?></button>
    </p>
    <p>
        <label for="image_two" class="team-row-title"><?php _e('Image two', 'home') ?></label>
        <input type="url" name="image_two" id="image_two" value="<?php if (isset($image_two)) echo $image_two; ?>">
        <button type="button" class="button" id="section2_image-btn" data-media-uploader-target="#section2_image"><?php _e( 'Upload Image', 'home' )?></button>
    </p>
    <p>
        <label for="image_three" class="team-row-title"><?php _e('Image three', 'home') ?></label>
        <input type="url" name="image_three" id="image_three" value="<?php if (isset($image_three)) echo $image_three; ?>">
        <button type="button" class="button" id="section2_image-btn" data-media-uploader-target="#section2_image"><?php _e( 'Upload Image', 'home' )?></button>
    </p>
    <?php
}

function home_save_section2_data($post_id, $post)
{
    // we have verified the nonce
    if (!isset($_POST['team_nonce']) || !wp_verify_nonce($_POST['team_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = 'page';
    if ($post_slug != $post->post_type) {
        return;
    }

    // save value to db field
    $image_one = '';
    $image_two = '';
    $image_three = '';

    if (isset($_POST['image_one'])) {
        $image_one = sanitize_text_field($_POST['image_one']);
    }

    if (isset($_POST['image_two'])) {
        $image_two = sanitize_text_field($_POST['image_two']);
    }

    if (isset($_POST['image_three'])) {
        $image_three = sanitize_text_field($_POST['image_three']);
    }

    update_post_meta($post_id, "image_one", $image_one);
    update_post_meta($post_id, "image_two", $image_two);
    update_post_meta($post_id, "image_three", $image_three);
}
