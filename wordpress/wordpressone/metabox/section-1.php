<?php
/**
 * metabox for section one.
 */
function section1_metabox()
{
    add_meta_box(
        'section1_metabox',
        'Section 1',
        'section1_metabox_callback',
        'page',
        'advanced',
        'default'
    );
}
add_action('add_meta_boxes', 'section1_metabox');

function section1_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $title = get_post_meta($post->ID, "section1_title", true);
    $subTitle = get_post_meta($post->ID, "section1_subTitle", true);
    $image = get_post_meta($post->ID, "section1_image", true);
    $cta = get_post_meta($post->ID, "section1_cta", true);
?>
    <p>
        <label for="section1_title" class="team-row-title"><?php _e('Title', 'testtheme') ?></label>
        <input type="text" name="section1_title" id="section1_title" value="<?php if (isset($title)) echo $title; ?>">
    </p>
    <p>
        <label for="section1_subTitle" class="team-row-title"><?php _e('Sub title', 'testtheme') ?></label>
        <input type="text" name="section1_subTitle" id="section1_subTitle" value="<?php if (isset($subTitle)) echo $subTitle; ?>">
    </p>
    <p>
        <label for="section1_image" class="team-row-title"><?php _e('Image', 'testtheme') ?></label>
        <input type="url" name="section1_image" id="section1_image" value="<?php if (isset($image)) echo $image; ?>">
        <button type="button" class="button" id="section1_image1-btn" data-media-uploader-target="#section1_image"><?php _e( 'Upload Image', 'home' )?></button>
    </p>
    <p>
        <label for="section1_CTA" class="team-row-title"><?php _e('Button Text', 'testtheme') ?></label>
        <input type="text" name="section1_CTA" id="section1_CTA" value="<?php if (isset($cta)) echo $cta; ?>"/>
    </p>
<?php
}

add_action("save_post", "home_save_section1_data", 10, 2);

function home_save_section1_data($post_id, $post)
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
    $page_cta = '';

    if (isset($_POST['section1_title'])) {
        $page_title = sanitize_text_field($_POST['section1_title']);
    }

    if (isset($_POST['section1_subTitle'])) {
        $page_subTitle = sanitize_text_field($_POST['section1_subTitle']);
    }

    if (isset($_POST['section1_image'])) {
        $page_image = sanitize_text_field($_POST['section1_image']);
    }

    if (isset($_POST['section1_CTA'])) {
        $page_cta = sanitize_text_field($_POST['section1_CTA']);
    }

    update_post_meta($post_id, "section1_title", $page_title);
    update_post_meta($post_id, "section1_subTitle", $page_subTitle);
    update_post_meta($post_id, "section1_image", $page_image);
    update_post_meta($post_id, "section1_cta", $page_cta);
}
