<?php
?>

<section class="home-hero @@sectionbgColor">
    <div class="container">
        <div class="row home-hero__row-one @@rowModifier">
            <div class="col-md-5 col-12">
                <figure class="home-hero__image home-hero__image--one ratio ratio-327x233 h-100">
                    <img src=@@img2 alt="nature" srcset="">
                </figure>
            </div>
            <div class="col-md-7 d-none d-md-inline">
                <figure class="home-hero__image home-hero__image--two ratio ratio-287x509 h-100">
                    <img src=@@img1 alt="nature" srcset="">
                </figure>
            </div>
        </div>
        <div class="row @@rowModifier">
            <div class="col-12 col-xl-8 home-hero__description">
                <?php
                $args = array(
                    'post_type' => 'post',
                    'post_status' => 'publish',
                    'orderby' => 'date',
                    'order' => 'DESC',
                    'posts_per_page' => 1,
                );
                $query = new WP_Query($args);
                if ($query->have_posts()) :
                    while ($query->have_posts()) : $query->the_post();
                ?>
                        <article class="card-hero @@cardBgColor">
                            <div class="card-hero__eyebrow h2">
                                <?php echo the_title(); ?>
                            </div>
                            <div class="card-hero__description body-xl">
                                <?php echo the_content(); ?>
                            </div>
                            <button class="button btn @@color @@bgColor @@borderColor @@state button--@@hoverEffect border border-2 rounded-0">
                                <a href="<?php the_permalink(); ?>" target="_blank" rel="noopener noreferrer">Contact Us</a>
                                <i class="icon-right_arrow button__icon"></i>
                            </button>
                        </article>
                <?php
                    endwhile;
                endif;
                wp_reset_postdata();
                ?>
            </div>
            <div class="col-xl-4 d-none d-xl-block">
                <figure class="home-hero__image home-hero__image--three ratio ratio-1x1">
                    <img class="" src=@@img3 alt="mountain" srcset="">
                </figure>
            </div>
        </div>
    </div>
</section>