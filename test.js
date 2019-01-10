const Keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

$(document).keydown((press) => {
  const click = press.keyCode
  press.preventDefault()

  if (click === 37) {Keys.left=true}
  else if (click === 38) {Keys.up=true}
  else if (click === 39) {Keys.right=true}
  else if (click === 40) {Keys.down=true}
})

$(document).keyup((press) => {
  const click = press.keyCode
  press.preventDefault()

  if (click === 37) {Keys.left=false}
  else if (click === 38) {Keys.up=false}
  else if (click === 39) {Keys.right=false}
  else if (click === 40) {Keys.down=false}

  console.log(click);
})



if (Keys.down === false) {
  $('.character').x = 5
}
