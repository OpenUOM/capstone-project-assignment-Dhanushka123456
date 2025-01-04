import server from "./server.js";

if(process.env.NODE_ENV === "test"){
  server.listen(8080, function () {
    console.log(
      "Capstone Project Backend is running on http://localhost:8080"
    );
  });
}else{
  server.listen(3000, function () {
    console.log(
      "Capstone Project Backend is running on http://localhost:3000"
    );
  });
}

