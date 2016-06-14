'use strict';

module.exports = ( length ) => {
    let result = [];

    for ( let index = 0; index < length; ++index ) {
        let value = index + 1;
        let processed = '';
        if ( value % 3 === 0 ) {
            processed = 'fizz';
        }
        if ( value % 5 === 0 ) {
            processed += 'buzz';
        }
        if ( processed === '' ) {
            processed = value;
        }

        result.push( processed );
    }

    return result;
};