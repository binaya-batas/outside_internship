<?php
$name = get_post_meta(get_the_ID(), "section3_name", true);
$position = get_post_meta(get_the_ID(), "section3_position", true);
$description = get_post_meta(get_the_ID(), "section3_description", true);
?>

<section class="home-ourteam py-10 py-md-20 py-xl-30 bg-blush">
    <div class="container home-ourteam__container">
        <p class="h6">our team</p>
        <div class="home-ourteam__wrapper bg-white">
            <div class="row">
                    <div class="col-12 col-md-6 home-ourteam__card__img" style="padding-left: 0; padding-right: 0;" >
                        <img src="images/home/home-potrait.jpg" alt="potrait" srcset="">
                    </div>
                
                <div class="col-12 col-md-6 home-ourteam__card__description bg-white d-flex justify-content-center align-items-center">
                    <div class="">
                        <h3 class="home-ourteam__card__name h3">
                            <?php
                                echo $name . "-" . $position;
                            ?>
                        </h3>
                        <div class="body-xl">
                            <p>
                                <?php
                                    if (isset($description)) {
                                        echo $description;
                                    }
                                ?>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home-ourteam__slider d-flex justify-content-between">
            <div class="left-arrow arrow">
                <i class="icon-left_arrow"></i>
            </div>
            <div class="home-ourteam__slider__indicators">
                <div class="circle fill"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="right-arrow arrow">
                <i class="icon-right_arrow"></i>
            </div>
        </div>
        
    </div>
</section>