console.log("Working With Ajax And JSON");

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      console.log(typeof customer);

      const output = `
      <ul>
        <li>${customer.name}</li>
      </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
  console.log(e);
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      let output = "";
      customers.forEach(function(customer) {
        output += `
        <ul>
          <li>${customer.name}</li>
        </ul>
        `;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}

document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);
