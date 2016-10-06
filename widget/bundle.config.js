/*
 <!-- CSS -->
 <link rel="stylesheet" href="../../../scripts/owlCarousel/owlCarousel.css"/>
 <link rel="stylesheet" href="../../../styles/helper.css">
 <link rel="stylesheet" href="../../../styles/siteIcons.css">
 <link rel="stylesheet" href="src/css/style.css">

 <!-- JS -->
 <script src="../../../scripts/jquery/jquery-1.11.2.min.js"></script>
 <script src="../../../scripts/smartcrop.js"></script>
 <script src="../../../scripts/angular/angular.min.js"></script>

 <script src="src/js/angular-owl-carousel.js"></script>

 <script src="../../../scripts/buildfire.js"></script>
 <script src="../../../scripts/owlCarousel/owlCarousel.js"></script> <
 <script src="../../../scripts/buildfire/components/carousel/carousel.js"></script>
 <script src="../../../scripts/buildfire/components/pluginInstance/sortableList.js"></script>
 <script src="../../../scripts/angular/ng-infinite-scroll.custom.js"></script>
 <script src="src/widget.controller.js"></script>
 */

// bundle.config.js
module.exports = {
    bundle: {
        main: {
            scripts: [
                '../../../scripts/buildfire.js',
                '../../../scripts/owlCarousel/owlCarousel.js',
                '../../../scripts/buildfire/components/carousel/carousel.js',
                '../../../scripts/buildfire/components/pluginInstance/sortableList.js',
                '../../../scripts/angular/ng-infinite-scroll.custom.js',
                './src/widget.controller.js'
            ],
            styles: [
                '../../../scripts/owlCarousel/owlCarousel.css',
                '../../../styles/helper.css',
                '../../../styles/siteIcons.css',
                './src/css/style.css'
            ]
        },
        vendor: {
            scripts: [
                '../../../scripts/jquery/jquery-1.11.2.min.js',
                '../../../scripts/smartcrop.js',
                '../../../scripts/angular/angular.min.js',
                './src/js/angular-owl-carousel.js'
            ]
        }
    },
    copy: ''
};