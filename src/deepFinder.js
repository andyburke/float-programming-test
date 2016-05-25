'use strict';

module.exports = ( input, test ) => {
    if ( typeof input !== 'object' ) {
        return test( input ) ? [ input ] : null;
    }

    let result = null;

    Object.keys( input ).forEach( key => {
        const value = input[ key ];
        if ( typeof value !== 'object' && test( value ) ) {
            result = result ? result.concat( [ value ] ) : [ value ];
        }
        else {
            const _result = module.exports( value, test );
            if ( _result ) {
                result = result ? result.concat( _result ) : _result;
            }
        }
    } );

    return result;
};