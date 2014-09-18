/* Description:
COLOR GHOST:
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of white" or "yellow" or
"purple" or "red" when instantiated

ghost = Ghost()
ghost.color  #=> "white" or "yellow" or "purple" or "red" */


var Ghost = function(){
    colorList = ['white', 'yellow', 'purple', 'red']
    this.color = colorList[Math.floor(Math.random() * (4 - 0) + 0)]
}

ghost = new Ghost();
console.log(ghost.color);
