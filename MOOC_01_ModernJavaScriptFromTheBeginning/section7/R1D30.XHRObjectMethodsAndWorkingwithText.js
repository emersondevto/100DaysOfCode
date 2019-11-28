console.log("section 7");
document.getElementById("button").addEventListener("click", loadData);

function loadData(e) {
  console.log("Create an XHR");
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", "data.txt", true);

  // Optional - used for spinners / loaders
  xhr.onprogress = function() {
    console.log("IT IS READY", this.readyState);
  };

  xhr.onload = function() {
    console.log("READYSTATE xhr", this.readyState);
    console.log("STATUS xhr", this.status);

    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById("output").textContent = this.responseText;
    }
  };

  // handling error
  xhr.onerror = function() {
    console.log(this.status);
    console.log(this.readyState);
  };

  xhr.send();

  const xhr2 = new XMLHttpRequest();

  console.log("READYSTATE xhr2", xhr2.readyState);
  xhr2.open("GET", "data.txt", true);
  console.log("READYSTATE xhr2", xhr2.readyState);
  xhr2.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.status === 200 && this.readyState === 4) {
    }
  };

  xhr2.send();

  // readyState values
  // 0: request not inicialized
  // 1: server connection established
  // 2: resquest received
  // 3: processing request
  // 4: request finished and respone is ready
}

// HTTP Status
// 200 : "OK"
// 403 : "Forbidden"
// 404 : "Not found"
