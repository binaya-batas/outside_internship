<?php
/**
 * metabox for section 4
 */
function section4_metabox()
{
    add_meta_box(
        'section4_metabox',
        'Section 4',
        'section4_metabox_callback',
        'homepage',
        'advanced',
        'default'
    );
}
add_action('add_meta_boxes', 'section4_metabox');

function section4_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $title = get_post_meta($post->ID, "section4_name", true);
    $subTitle = get_post_meta($post->ID, "section4_position", true);
    $image = get_post_meta($post->ID, "section4_image", true);
    $firstParagraph = get_post_meta($post->ID, "section4_firstParagraph", true);
    $cta = get_post_meta($post->ID, "section4_CTA", true);
?>
    <p>
        <label for="section4_title" class="team-row-title"><?php _e('Section Name', 'home') ?></label>
        <input type="url" name="section4_title" id="section4_title" value="<?php if (isset($title)) echo $title; ?>">
    </p>
    <p>
        <label for="section4_sub-title" class="team-row-title"><?php _e('Sub title', 'home') ?></label>
        <input type="url" name="section4_sub-title" id="section4_sub-title" value="<?php if (isset($subTitle)) echo $subTitle; ?>">
    </p>
    <p>
        <label for="section4_image" class="team-row-title"><?php _e('Image', 'home') ?></label>
        <input type="url" name="section4_image" id="section4_image" value="<?php if (isset($image)) echo $image; ?>">
    </p>
    <p>
        <label for="section4_firstParagraph" class="team-row-title"><?php _e('First Paragraph', 'home') ?></label>
        <input type="text" name="section4_firstParagraph" id="section4_firstParagraph" value="<?php if (isset($firstParagraph)) echo $firstParagraph; ?>">
    </p>
    <p>
        <label for="section4_secondParagraph" class="team-row-title"><?php _e('Second Paragraph', 'home') ?></label>
        <input type="text" name="section4_secondParagraph" id="section4_secondParagraph" value="<?php if (isset($secondParagraph)) echo $secondParagraph; ?>">
    </p>
    <p>
        <label for="section4_CTA" class="team-row-title"><?php _e('Button Text', 'home') ?></label>
        <input type="text" name="section4_CTA" id="section4_CTA" value="<?php if (isset($cta)) echo $cta; ?>">
    </p>
<?php
}


/**
 * metabox for section 5.
 */
function section5_metabox()
{
    add_meta_box(
        'section5_metabox',
        'Section 5',
        'section5_metabox_callback',
        'homepage',
        'advanced',
        'default'
    );
}
add_action('add_meta_boxes', 'section5_metabox');

function section5_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $title = get_post_meta($post->ID, "section5_name", true);
    $subTitle = get_post_meta($post->ID, "section5_subTitle", true);
    $image = get_post_meta($post->ID, "section5_image", true);
    $date = get_post_meta($post->ID, "section5_date", true);
    $firstParagraph = get_post_meta($post->ID, "section5_firstParagraph", true);
    $cta = get_post_meta($post->ID, "section5_CTA", true);
?>
    <p>
        <label for="section5_title" class="team-row-title"><?php _e('Section Name', 'home') ?></label>
        <input type="url" name="section5_title" id="section5_title" value="<?php if (isset($title)) echo $title; ?>">
    </p>
    <p>
        <label for="section5_subTitle" class="team-row-title"><?php _e('Title', 'home') ?></label>
        <input type="url" name="section5_subTitle" id="section5_subTitle" value="<?php if (isset($subTitle)) echo $subTitle; ?>">
    </p>
    <p>
        <label for="section5_image" class="team-row-title"><?php _e('Image', 'home') ?></label>
        <input type="url" name="section5_image" id="section5_image" value="<?php if (isset($image)) echo $image; ?>">
    </p>
    <p>
        <label for="section5_date" class="team-row-title"><?php _e('Date', 'home') ?></label>
        <input type="date" name="section5_date" id="section5_date" value="<?php if (isset($date)) echo $date; ?>">
    </p>
    <p>
        <label for="section5_firstParagraph" class="team-row-title"><?php _e('First Paragraph', 'home') ?></label>
        <input type="text" name="section5_firstParagraph" id="section5_firstParagraph" value="<?php if (isset($firstParagraph)) echo $firstParagraph; ?>">
    </p>
    <p>
        <label for="section5_CTA" class="team-row-title"><?php _e('Button Text', 'home') ?></label>
        <input type="text" name="section5_CTA" id="section5_CTA" value="<?php if (isset($cta)) echo $cta; ?>">
    </p>
<?php
}
