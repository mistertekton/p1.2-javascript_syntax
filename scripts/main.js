// init variables
var visible = true;
var styled = false;
var domesticated = false;

function load()
{
    // this is a log to the console, we use this for debug information
    console.log('Loading body content..');
}

// Change text
function changeText()
{
    document.getElementById("foo").innerText = "Hey!";
}

// this hides an element and unhides it
function changeVisibility()
{
    if(visible)
    {
        document.getElementById("bzz").style.display = "none";
        visible = false
    }else
    {
        document.getElementById("bzz").style.display = "block";
        visible = true
    }
}

// this changes the style of an element
function changeStyle()
{
    console.log('Changing the style')

    if(!styled)
    {
        document.getElementById("grr").style.backgroundColor = "red";
        document.getElementById("grr").style.color = "white";
        styled = true;
    }else
    {
        document.getElementById("grr").style.backgroundColor = "blue";
        document.getElementById("grr").style.color = "black";
        styled = false;
    }
}

// this changes a image
function changeImage()
{
    if(!domesticated)
    {
        document.getElementById("img1").src = "images/dog.jpg";
        
    }else{
        document.getElementById("img1").src = "images/cat.jpg";
    }

    domesticated = !domesticated;
    
}
