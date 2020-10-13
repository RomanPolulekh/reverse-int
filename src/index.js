module.exports = function reverse (n) {
  let str=String(n);
  let a=0; 
  let boom='';
  if(str[0]==='-'){
boom=str[3]+str[2]+str[1];
  } else
 boom=str[2]+str[1]+str[0];
    
a=Number(boom);
  return a;
}
