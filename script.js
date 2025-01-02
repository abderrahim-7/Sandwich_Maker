const screen = document.getElementById('screen');

const cheeseButton = document.getElementById('cheeseButton');
const onionButton = document.getElementById('onionButton');
const meatButton = document.getElementById('meatButton');
const tomatoButton = document.getElementById('tomatoButton');
const lettuceButton = document.getElementById('lettuceButton');
const cucumberButton = document.getElementById('cucumberButton');

const finishButton = document.getElementById('FinishButton');
const retryButton = document.getElementById('RetryButton');
const UndoButton = document.getElementById('UndoButton');

var finish = false;
var ingredients = []

cheeseButton.addEventListener('click',function(){
    if (finish == false && ingredients.length != 15){
        const cheese = document.createElement('div');
        cheese.id = 'CHEESE';
        screen.appendChild(cheese);
        ingredients.push(cheese);
    }
});

onionButton.addEventListener('click',function(){
    if (finish == false && ingredients.length != 15){
        const onion = document.createElement('div')
        const onion1 = document.createElement('div')
        const onion2 = document.createElement('div')
        onion.id = 'ONION'
        onion1.id = 'ONION1'
        onion2.id = 'ONION2'
        onion.appendChild(onion1)
        onion.appendChild(onion2)
        screen.appendChild(onion)
        ingredients.push(onion)
    }
})

meatButton.addEventListener('click',function(){
    if (finish == false && ingredients.length != 15){
        const meat = document.createElement('div')
        meat.id = 'MEAT'
        screen.appendChild(meat)
        ingredients.push(meat)
    }
})

tomatoButton.addEventListener('click',function(){
    if (finish == false && ingredients.length != 15){
        const tomato = document.createElement('div')
        tomato.id = 'TOMATO'
        screen.appendChild(tomato)
        ingredients.push(tomato)
    }
})

lettuceButton.addEventListener('click',function(){
    if (finish == false && ingredients.length != 15){
        const lettuce = document.createElement('div')
        lettuce.id = 'LETTUCE'
        screen.appendChild(lettuce)
        ingredients.push(lettuce)
    }
})

cucumberButton.addEventListener('click',function(){
    if (finish == false && ingredients.length != 15){
        const cucumber = document.createElement('div')
        const cucumber1 = document.createElement('div')
        const cucumber2 = document.createElement('div')
        const cucumber11 = document.createElement('div')
        cucumber.id = 'CUCUMBER'
        cucumber1.id = 'CUCUMBER1'
        cucumber11.id = 'CUCUMBER1'
        cucumber2.id = 'CUCUMBER2'
        cucumber.append(cucumber1,cucumber2,cucumber11)
        screen.appendChild(cucumber)
        ingredients.push(cucumber)
    }
})

finishButton.addEventListener('click',function(){
    if (finish == false){
        const top_bread = document.createElement('div')
        top_bread.id = 'Top_bread'
        screen.appendChild(top_bread)
        setTimeout(() => {
            top_bread.style.transform = "translate(0px, 60px)";
        }, 10)
        finish = true
    }
})

retryButton.addEventListener('click',function(){
    screen.innerHTML = '<div id="plate"><div id="plateCenter"></div></div><div id="Bottom_bread"></div>'
    finish = false
    ingredients = []
})

UndoButton.addEventListener('click',function(){
    if(finish == false){
        screen.removeChild(ingredients.pop())
    }
})