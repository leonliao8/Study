function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}
function countBoduChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert (body_element.childNodes.length);
    window.onload = countBodyChildren;
}



function sort(elements) {
    for(var i = 0; i < elements.length - 1; i++) {
        for( var j = 0; j< elements.length -i - 1; j++){
            if (elements[j] > elements[j+1]) {
                var temp = elements[j];
                elements[j] = elements[j+1];
                elements[j+1] = temp;
            }
        }
    }
    return elements;
}
var elements = [1,24,34,5,6]
document.writeln(elements);

document.write(" \n ")
sort(elements);
document.write(elements);