<?php
$title = get_post_meta(get_the_ID(), "section2_title", true);
$subTitle = get_post_meta(get_the_ID(), "section2_subTitle", true);
$description = get_post_meta(get_the_ID(), "section2_description", true);
$image = get_post_meta(get_the_ID(), "section2_image", true);
$date = get_post_meta(get_the_ID(), "section2_date", true);
$cta = get_post_meta(get_the_ID(), "section2_cta", true);
?>

<section class="section-with-image py-10 py-md-20 py-xl-30 @@sectionBgColor">
    <div class="container">
        <div class="row @@rowDirection">
            <div class="col-sm-12 col-md-6 d-flex justify-content-end align-items-end">
                <figure>
                    <img src="<?php if (isset($image)) {
                                    echo $image;
                                }
                                ?>" alt="" srcset="">
                </figure>
            </div>
            <div class="col-sm-12 col-md-6 section-with-image__card">
                <article class="card-home-1 card-home-1--@@boxShadow">
                    <div class="card-home-1__title h6 @@mb">
                    <?php if (isset($title)) {
                            echo $title;
                        }
                        ?>
                    </div>
                    <h4 class="card-home-1__subtitle @@subTitleStyle @@mb">
                    <?php if (isset($subTitle)) {
                            echo $subTitle;
                        }
                        ?>
                    </h4>
                    <time class="card-home-1__date date body">
                    <?php if (isset($date)) {
                            echo $date;
                        }
                        ?>
                    </time>
                    <div class="card-home-1__text text body @@mb">
                    <?php if (isset($description)) {
                            echo $description;
                        }
                        ?>
                    </div>
                    <button class="button btn @@color @@bgColor @@borderColor @@state button--@@hoverEffect border border-2 rounded-0">
                        <a href="@@redirectTo" target="_blank" rel="noopener noreferrer">
                            <?php if (isset($cta)) {
                                echo $cta;
                            }
                            ?>
                        </a>
                        <i class="icon-right_arrow button__icon"></i>
                    </button>
                </article>
            </div>
        </div>


    </div>
</section>