<?php
/**
 * metabox for section three.
 */
function section3_metabox()
{
    add_meta_box(
        'section3_metabox',
        'Section 3',
        'section3_metabox_callback',
        'page',
        'advanced',
        'default'
    );
}
add_action('add_meta_boxes', 'section3_metabox');

function section3_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $title = get_post_meta($post->ID, "section3_name", true);
    $subTitle = get_post_meta($post->ID, "section3_position", true);
    $image = get_post_meta($post->ID, "section3_image", true);
    $description = get_post_meta($post->ID, "section3_description", true);
?>
    <p>
        <label for="section3_name" class="team-row-title"><?php _e('Name', 'home') ?></label>
        <input type="url" name="section3_name" id="section3_name" value="<?php if (isset($title)) echo $title; ?>">
    </p>
    <p>
        <label for="section3_position" class="team-row-title"><?php _e('Position', 'home') ?></label>
        <input type="url" name="section3_position" id="section3_position" value="<?php if (isset($subTitle)) echo $subTitle; ?>">
    </p>
    <p>
        <label for="section3_image" class="team-row-title"><?php _e('Image', 'home') ?></label>
        <input type="url" name="section3_image" id="section3_image" value="<?php if (isset($image)) echo $image; ?>">
        <button type="button" class="button" id="section1_image1-btn" data-media-uploader-target="#section3_image"><?php _e( 'Upload Image', 'home' )?></button>
    </p>
    <p>
        <label for="section3_description" class="team-row-title"><?php _e('Description', 'home') ?></label>
        <input type="url" name="section3_description" id="section3_description" value="<?php if (isset($description)) echo $description; ?>">
    </p>
<?php
}

add_action("save_post", "home_save_section3_data", 10, 2);

function home_save_section3_data($post_id, $post)
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
    $position = '';
    $name = '';
    $image = '';
    $description = '';

    if (isset($_POST['section3_position'])) {
        $position = sanitize_text_field($_POST['section3_position']);
    }

    if (isset($_POST['section3_name'])) {
        $name = sanitize_text_field($_POST['section3_name']);
    }

    if (isset($_POST['section3_image'])) {
        $image = sanitize_text_field($_POST['section3_image']);
    }

    if (isset($_POST['section3_description'])) {
        $description = sanitize_text_field($_POST['section3_description']);
    }

    update_post_meta($post_id, "section3_position", $position);
    update_post_meta($post_id, "section3_name", $name);
    update_post_meta($post_id, "section3_image", $image);
    update_post_meta($post_id, "section3_description", $description);
}