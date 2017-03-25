function smash (words) {

  var string = ''

    for (var i = 0; i < words.length; i++) {
      string += words[i];
      string += " ";
    }

    return string;
};
