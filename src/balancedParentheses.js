'use strict';

module.exports = ( str ) => {
    let hasParentheses = false;
    let openCount = 0;
    for ( let i = 0; i < str.length; ++i ) {
        if ( str[ i ] === '(' ) {
            ++openCount;
            hasParentheses = true;
        }
        else if ( str[ i ] === ')' ) {
            --openCount;
            hasParentheses = true;
        }

        if ( openCount < 0 ) {
            return false;
        }
    }

    return hasParentheses && openCount === 0;
};