<?php
$terms = get_terms('category', array(
    'hide_empty' => false
));
?>
<section class="blogs-moreblogs py-10 py-md-20 py-xl-30">
    <div class="container">
        <div class="h6 blogs-moreblogs__eyebrow">
            MORE BLOG NOTES
        </div>
        <div class="blogs-moreblogs__categories">
            <div class="body">
                Category:
            </div>
            <ul id="terms" class="terms h6 tab-layout">
                <?php
                if (isset($terms) && is_array($terms)) :
                    foreach ($terms as $term) : ?>
                        <li class="category" id="<?php echo $term->term_id; ?>"><?php echo $term->name; ?></li>
                <?php
                    endforeach;
                endif;
                ?>
            </ul>
        </div>
        <div class="blogs-moreblogs__searchDropdown row">
            <div class="col-12 col-md-7 col-xl-5 blogs-moreblogs__searchDropdown__searchbar ">
                <input type="text" id="post-search" class="border border-sky border-2 blogs-moreblogs__searchDropdown__searchbar--rounded-input">
            </div>
            <div class="col-12 col-md-5 col-xl-7 blogs-moreblogs__searchDropdown__dropdown">
                <div class="dropdown">
                    Latest
                    <i class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul class="dropdown-menu bg-mint rounded-0 border border-peach h6" style="position: relative;" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">alphabetical order</a></li>
                        <li><a class="dropdown-item" href="#">featured</a></li>
                        <li><a class="dropdown-item" href="#">latest</a></li>
                        <li><a class="dropdown-item" href="#">oldest</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="blogs-moreblogs__items">
            <div class="row">
                <div class="container-wrapper row">
                    <?php
                    $args = array(
                        'post_type' => 'post',
                        'post_status' => 'publish',
                        'orderby' => 'date',
                        'order' => 'DESC',
                        'posts_per_page' => get_option('posts_per_page'),
                    );
                    $query = new WP_Query($args);
                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                            $img_url = get_the_post_thumbnail_url();
                            $date = get_the_date();
                    ?>
                            <div class="col-12 col-md-6 col-xl-4">
                                <a href="blog-single.html">
                                    <div class="card_a11 @@card_color h-100">
                                        <figure class="card-blog__image">
                                            <img src="<?php echo  $img_url; ?>" alt="" srcset="" width="400px" height="300px">
                                        </figure>
                                        <div class="card-blog__text bg-blush">
                                            <time class="card-blog__text__date"><?php echo $date; ?></time>
                                            <h5 class="h5 card-blog__text__title"><?php the_title(); ?></h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                    <?php
                        endwhile;
                    endif;
                    wp_reset_postdata();
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
