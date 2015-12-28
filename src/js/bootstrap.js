require(
    [
        'person'
    ],
    function( Person ){
        if( Person.__esModule ){
            Person = Person.default;
        }
        
        var me = new Person( "Tom Randolph" );

        console.log( me.getName() );
    }
);
