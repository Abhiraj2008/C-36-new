class Form {
    constructor(){
        
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(100,50);
        
        var button = createButton("play");
        button.position(200,200);

        var input = createInput("name");
        input.position(200,100);

        button.mousePressed(()=>{
            input.hide();
            button.hide();
            var name = input.value();

            var greeting = createElement("h3");
            greeting.html("Hello"+ name);
            greeting.position(130,160);
        })
    }
}