class Shop{
    constructor(){
        
    }
    display(){
        var button1 = createButton("Buy")
        button1.position(50,windowHeight-50)
        fill("green")
        textSize(20)
        text("$50 -- +1 MPC",button1.x-40,button1.y-40)
        button1.mousePressed(()=>{
            if(money>=50){
                moneyPerClick = moneyPerClick+1
                money = money-50
            }
        })
        var button2 = createButton("Buy");
        button2.position(250,windowHeight-50)
         fill("blue")
         textSize(20);
         text("$50000 -- +1000 MPS",button2.x-50,button2.y-40);   
         button2.mousePressed(()=>{
             if(money>=50000){
                 moneyPerSecond = moneyPerSecond + 1000;
                 money = money - 50000;
             }
         })
        var button3 = createButton("Buy")  
        button3.position(510,windowHeight-50);
        fill("red")
        textSize(20);
        text("10M -- +50000 MPS",button3.x-50,button3.y-40)
        button3.mousePressed(()=>{
            if(money>=10000000){
                moneyPerSecond = moneyPerSecond + 50000
                money = money - 10000000
            }
        })
        

    }
}