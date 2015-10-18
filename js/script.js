var earpads = document.getElementById("earpads");
var hub = document.getElementById("hub");
var settings = document.getElementById("settings");

function clearPage()
{
earpads.style.display = "none";
hub.style.display = "none";
settings.style.display = "none";
};

earpads.onclick = function VirtualEarpads()
{
document.title = "Virtual-Earpads";

clearPage()

var location = document.getElementById("location");

var locationText = document.createTextNode(" Earpads");
location.appendChild(locationText);

var summaryHolder = document.createElement("p");
summaryHolder.setAttribute("class", "Summary");

var summary = document.createTextNode("The Virtual Earpads is an innovative product");
summaryHolder.appendChild(summary);
document.body.appendChild(summaryHolder);


};

hub.onclick = function VirtualHub()
{

};

settings.onclick = function Settings()
{
document.title = "Virtual-Settings";

clearPage();

var personalizationHeaderHolder = document.createElement("h2");

var personalizationHeader = document.createTextNode("---Personalization---");
personalizationHeaderHolder.appendChild(personalizationHeader);
document.body.appendChild(personalizationHeaderHolder);
personalizationHeaderHolder.setAttribute("class", "PersonalizationHeader");

var green = document.createElement("div");

document.body.appendChild(green);
green.setAttribute("class", "Green");

green.onclick = function Green()
{
document.body.style.backgroundColor = "green";
};

var red = document.createElement("div");

document.body.appendChild(red);
red.setAttribute("class", "Red");

red.onclick = function Red()
{
document.body.style.backgroundColor = "red";
};

};