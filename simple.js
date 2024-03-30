function smokeTest() {
    return 1;
};
function addTwo(p1, p2) {
    return p1 + p2;
};
function multTwo(p1, p2) {  
    return p1 * p2;
};
function subTwo(p1, p2) {
    return p1 - p2;
};
function divTwo(p1, p2) {
    if(p2 == 0) {
        return 0;
        }
    else{
        return p1 / p2;
    }
}

  module.exports = {smokeTest, addTwo, multTwo, subTwo, divTwo};