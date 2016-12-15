# CodeWars

Just an area where I can work on CodeWars problems in my own enviroment.

___________________________ Current problem _______________
# Paste problem text below.
___________________________________________________________
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


******** Best Answer ***********


function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}
