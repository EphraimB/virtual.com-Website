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
alert("Coming soon...");
};

hub.onclick = function VirtualHub()
{
alert("In development");
};

settings.onclick = function Settings()
{
document.title = "Virtual-Settings";

clearPage();

var personalizationHeaderHolder = document.createElement("h2");

var personalizationHeader = document.createTextNode("Personalization");
personalizationHeaderHolder.appendChild(personalizationHeader);
document.body.appendChild(personalizationHeaderHolder);
personalizationHeaderHolder.setAttribute("class", "PersonalizationHeader");
};