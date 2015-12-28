module.exports = function( grunt ){
    grunt.registerTask( "prepare", "Prepare directory structure for anything necessary", function(){
        grunt.task.run( [ "clean" ] );
        grunt.file.mkdir( "./build" );
    } );
};
