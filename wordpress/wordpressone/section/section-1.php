<?php
$title = get_post_meta(get_the_ID(), "section1_title", true);
$description = get_post_meta(get_the_ID(), "section1_subTitle", true);
$image = get_post_meta(get_the_ID(), "section1_image", true);
$cta = get_post_meta(get_the_ID(), "section1_cta", true);
?>

<section class="section-with-video py-10 py-md-20 py-xl-30">
    <div class="container">
        <div class="row flex-row-reverse">
            <div class="col-sm-12 col-md-6 order-sm-2">
                <div class="section-with-video__video">
                    <p>HOW ABOUT US?</p>
                    <img src="<?php if (isset($image)) {
                                    echo $image;
                                }
                                ?>" alt="" srcset="">
                </div>
            </div>
            <div class="col-sm-12 col-md-6 section-with-video__card">
                <article class="card-home-1 card-home-1--@@boxShadow">
                    <div class="card-home-1__title h6 @@mb">
                        <?php if (isset($title)) {
                            echo $title;
                        }
                        ?>
                    </div>
                    <h4 class="card-home-1__subtitle @@subTitleStyle @@mb">
                        <?php if (isset($description)) {
                            echo $description;
                        }
                        ?>
                    </h4>
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
