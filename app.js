const request=require("request")
const dotenv=require("dotenv").config()
var http= require('http');

const address=process.argv[2]

const url=`http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`

if (!address){
    return console.log("Enter City Name: ")
}

request(url, (error,response, body)=>{
const data=JSON.parse(body)
//console.log(data.main.temp)
console.log("CITY: "+data.name+" \n"+"WEATHER: "+data.weather[0].description+" \n"+"TEMPERATURE: "+data.main.temp+" Celcius")
console.log(`It's ${data.main.temp} C with ${data.weather[0].description} in ${data.name}`)
})

var server=http.createServer(function(request, response){
    
    var request=require('request');
    request(url, function(err, res, body){
        if(res.statusCode==200){
            console.log('Logging');
        var data=JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>" +'City Name :'+data['name']+'<br>'+"</h1>");
        response.write("<h2>"+'Temp :'+data.main['temp']+" C"+'<br>'+"</h2>");
        response.write("<h2>"+'Weather :'+data.weather[0]['description']+'<br>'+"</h2>");
        response.write("</div></body></html>");
        response.end();
        }
    });
}).listen(3000);


