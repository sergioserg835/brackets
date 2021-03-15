module.exports = function check(str, bracketsConfig) {
  let allowBrackets = [];
            for (let i = 0; i < bracketsConfig.length; i++) {
                allowBrackets.push(bracketsConfig[i][0]+bracketsConfig[i][1]);
            }
            
            let newStr = '';
            for (let j = 0; j < 10; j++) {
                for (i = 0; i < allowBrackets.length; i++) {    
                    while (str.indexOf(allowBrackets[i]) > -1) {
                        newStr = str.replace(allowBrackets[i], '');
                        str = newStr;
                        newStr = '';    
                    }
                    if (str.length == 0) break;
                }
                if (str.length == 0) break;
            }
            if (str.length > 0) 
                return false;
            else
                return true;
}
