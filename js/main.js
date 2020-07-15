// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

// var solution2 = scores[0];

// var flavors = ['Vanilla', 'Mint', 'Chocholate', 'Mango'];

// document.write(flavors[2]);
// flavors[1] = 'true';

// var numFlavors = flavors.length;
// alert(numFlavors);




// function makePhrases() {

//     var words1 = ['Всегда', 'Каждый день', 'Сегодня', 'Постоянно'];
//     var words2 = ['мы', 'команда', 'сотрудники', 'компании'];
//     var words3 = ['работают не покладая рук', 'отдыхают на работе', 'создаем чудеса', 'делаем красиво'];

//     var rand1 = Math.floor(Math.random() * words1.length);
//     var rand2 = Math.floor(Math.random() * words2.length);
//     var rand3 = Math.floor(Math.random() * words3.length);

//     var phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
//     document.write(phrase);
// }

// makePhrases();



// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum", "Mac Ice Cream"];
// var last = products.pop();

// var recent = last;

// document.write(recent);

function makePhrases() {

    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker", "Porshe", "Mersedes"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo", "SLR", "SLK"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "black", "yellow", "white"];
    let condition = ["(in a good condition)", "(crashed)", "(in a bad condition)", "(like new)", "(restored)"];

    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * condition.length);

    let phrase = makes[rand1] + ' ' + models[rand2] + ' ' + years[rand3] + ' ' + colors[rand4] + ' ' + condition[rand5];

    document.write(phrase);
}

makePhrases();