/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: function(compareval){
            if(val === compareval){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(compareval){
            if(val !== compareval){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    };    
};
