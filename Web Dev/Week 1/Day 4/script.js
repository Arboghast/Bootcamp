function one()
{
    let container = document.getElementById("container");
}
function two()
{
    let container = document.querySelector("section");
}
function three()
{
    let second = document.getElementsByClassName("second");
}
function four()
{
    let third = document.querySelector("ol li:last-child");
}
function five()
{
    document.getElementById("container").innerText = "Hello!";
}
function six(){
    document.querySelector("body:last-child").classList.add("main");
}
function seven()
{
    document.querySelector("body:last-child").classList.remove("main");
}
function eight()
{
    let el = document.createElement("li");
    return el;
}
function nine()
{
    let el = eight();
    el.innerText = "four";
    return el;
}
function ten()
{
    let el = nine();
    document.querySelector("ul").append(el);
}
function twelve() //type in problem set, 11 skipped
{
    let el = document.getElementsByTagName("ol");
    for(i = 0; i < el.length; i++)
    {
        el[i].style.backgroundColor = "green";
    }
}
function thirteen()
{
    let el = document.querySelector(".footer");
    el.remove();
}