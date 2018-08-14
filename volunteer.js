function run() {
  var loc = document.getElementById("location").value;
  var serv = document.getElementById("services").value;
  var link = document.getElementById("results");
  var path = "C:/Users/SYFGWC29/Desktop/karla-ravin.github.io/GWC%20Final/"
  link.href = path+"results.html"+"?"+"location="+loc+"&services="+serv;
}
