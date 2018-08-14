function run() {
  var loc = document.getElementById("location").value;
  var serv = document.getElementById("services").value;
  var link = document.getElementById("results");
  var path = "https://karla-ravin.github.io/gwcfinal/"
  link.href = path+"results.html"+"?"+"location="+loc+"&services="+serv;
}
