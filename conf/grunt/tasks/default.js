module.exports = function( grunt ){
    grunt.registerTask( "default", [
        "babel",
        "requirejs",
        "uglify"
    ] );
};
