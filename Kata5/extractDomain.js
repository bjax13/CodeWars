function domainName(url){
  //your code here

  var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    //find & remove www. and get domain
    if (domain.indexOf("www.") > -1) {
      domain = domain.split('.')[1]
    }else {
      domain = domain.split('.')[0]
    }

    return domain;
}


console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
