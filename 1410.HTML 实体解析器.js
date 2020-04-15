/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    return text.replace(/&[a-z]+;/g, (a) => {
        const code = a.slice(1, a.length - 1);
        switch (code) {
            case 'quot': return '"';
            case 'apos': return "'";
            case 'amp': return '&';
            case 'gt': return '>';
            case 'lt': return '<';
            case 'frasl': return '/';
            default: return a;
        }
    })
};