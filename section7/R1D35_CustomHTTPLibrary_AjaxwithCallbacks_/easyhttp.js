function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an http get request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };
  this.http.send();
};

// Make an http post request
// Make an http put request
// Make an http delete request
