<?php
/**
 * metabox for section two.
 */
function section2_metabox()
{
    add_meta_box(
        'section2_metabox',
        'Section 2',
        'section2_metabox_callback',
        'page',
        'advanced',
        'default'
    );
}
add_action('add_meta_boxes', 'section2_metabox');

function section2_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $title = get_post_meta($post->ID, "section2_title", true);
    $subTitle = get_post_meta($post->ID, "section2_subTitle", true);
    $image = get_post_meta($post->ID, "section2_image", true);
    $date = get_post_meta($post->ID, "section2_date", true);
    $description = get_post_meta($post->ID, "section2_description", true);
    $cta = get_post_meta($post->ID, "section2_CTA", true);
?>
    <p>
        <label for="section2_title" class="team-row-title"><?php _e('Title', 'home') ?></label>
        <input type="url" name="section2_title" id="section2_title" value="<?php if (isset($title)) echo $title; ?>">
    </p>
    <p>
        <label for="section2_subTitle" class="team-row-title"><?php _e('Sub title', 'home') ?></label>
        <input type="url" name="section2_subTitle" id="section2_subTitle" value="<?php if (isset($subTitle)) echo $subTitle; ?>">
    </p>
    <p>
        <label for="section2_image" class="team-row-title"><?php _e('Image', 'home') ?></label>
        <input type="url" name="section2_image" id="section2_image" value="<?php if (isset($image)) echo $image; ?>">
        <button type="button" class="button" id="section2_image-btn" data-media-uploader-target="#section2_image"><?php _e( 'Upload Image', 'home' )?></button>
    </p>
    <p>
        <label for="section2_description" class="team-row-title"><?php _e('Description', 'home') ?></label>
        <input type="url" name="section2_description" id="section2_description" value="<?php if (isset($description)) echo $description; ?>">
    </p>
    <p>
        <label for="section2_date" class="team-row-title"><?php _e('Date', 'home') ?></label>
        <input type="date" name="section2_date" id="section2_date" value="<?php if (isset($date)) echo $date; ?>">
    </p>
    <p>
        <label for="section2_CTA" class="team-row-title"><?php _e('Button Text', 'home') ?></label>
        <input type="text" name="section2_CTA" id="section2_CTA" value="<?php if (isset($cta)) echo $cta; ?>">
    </p>
<?php
}

add_action("save_post", "home_save_section2_data", 10, 2);

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
    $page_title = '';
    $page_subTitle = '';
    $page_image = '';
    $page_date = '';
    $page_description = '';
    $page_cta = '';

    if (isset($_POST['section2_title'])) {
        $page_title = sanitize_text_field($_POST['section2_title']);
    }

    if (isset($_POST['section2_subTitle'])) {
        $page_subTitle = sanitize_text_field($_POST['section2_subTitle']);
    }

    if (isset($_POST['section2_image'])) {
        $page_image = sanitize_text_field($_POST['section2_image']);
    }

    if (isset($_POST['section2_date'])) {
        $page_image = sanitize_text_field($_POST['section2_image']);
    }

    if (isset($_POST['section2_description'])) {
        $page_description = sanitize_text_field($_POST['section2_description']);
    }

    if (isset($_POST['section2_CTA'])) {
        $page_cta = sanitize_text_field($_POST['section2_CTA']);
    }

    update_post_meta($post_id, "section2_title", $page_title);
    update_post_meta($post_id, "section2_subTitle", $page_subTitle);
    update_post_meta($post_id, "section2_image", $page_image);
    update_post_meta($post_id, "section2_date", $page_date);
    update_post_meta($post_id, "section2_description", $page_description);
    update_post_meta($post_id, "section2_cta", $page_cta);
}
