module.exports = function( grunt ){
    grunt.registerTask( "clean", "Wipe the build directory", function(){
        grunt.file.delete( "./build" );
    } );
};
