
/// this just got annoyingly long and I didn't want to put it in my main JS file

function getSquare(){
  if (mouseX < width/3 && mouseY < height / 3){
    return [0,0]
  } else if(mouseX > width/3 && mouseX < 2 * width / 3 && mouseY < height/3){
    return [0,1]
  } else if(mouseX > 2 * width/3 && mouseY < height/3){
    return [0,2]
  } else if(mouseX < width/3 && mouseY > height/3 && mouseY < 2 * height / 3){
    return [1,0]
  } else if(mouseX > width/3 && mouseX < 2 * width / 3 && mouseY >  height/3 && mouseY < 2 * height/3){
    return [1,1]
  }else if(mouseX > 2 * width/3 && mouseY > height/3 && mouseY < 2 * height/3){
    return [1,2]
  }else if(mouseX < width/3 && mouseY > 2 * height/3){
    return [2,0]
  }else if(mouseX > width/3 && mouseX < 2 * width/3 && mouseY > 2 * height/3){
    return [2,1]
  }else if(mouseX > 2 * width/3 && mouseY > 2 * height/3){
    return [2,2]
  }
}