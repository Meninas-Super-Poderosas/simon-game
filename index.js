let colors = ["red", "blue", "green", "yellow"];

for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    $("." + color).click(function(){
        let audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
    })
}
