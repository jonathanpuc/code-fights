/* Task: Given two strings, find the number of common characters between them. */

/* Example: For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3. */

function commonCharacterCount(s1, s2){
  debugger;
  // turn string into array to use as an index to check for common chars
  var s2Arr = s2.split(''); 
  // keep track of number of common hits
  var result = 0;  
   
  for(var i=0; i<s1.length; i++){
    // element exists
   if(s2Arr.indexOf(s1[i]) !== -1){
     s2Arr.splice(s2Arr.indexOf(s1[i]),1); 
      result++;  
    }
  } 
  
 return result;
}