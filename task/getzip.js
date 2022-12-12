const { mPush } = require('./servicemethods')


function getZip(...args) {
    let result = [];
    let len = args[0].length;
    for (let i=0;i<len;i++) {
       let presult = [];
       for (let y=0;y<args.length;y++) {
         mPush(presult, args[y][i]);
       }
      mPush(result, presult);
    }
    return result;
}

module.exports = getZip;