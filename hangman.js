window.onload = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var categories; // Array of topics
    var chosenCategory; // Selected catagory
    var getHint; // Word getHint
    var word; // Selected word
    var guess; // guess
    var guesses = []; // Stored guesses
    var lives; // Lives
    var counter; // Count correct guesses
    var space; // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");



    // create alphabet ul
    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Catagory
    var selectCat = function() {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML = "The Chosen Category Is.. Video Games!";
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "The Chosen Category Is.. Movies!";
        } else if (chosenCategory === categories[2]) {
            catagoryName.innerHTML = "The Chosen Category Is.. Food!";
        }
    }

    // Create guesses ul
    result = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function() {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }

    // Animate man
    var animate = function() {
        var drawMe = lives;
        drawArray[drawMe]();
    }


    // Hangman
    canvas = function() {

        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    head = function() {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI * 2, true);
        context.stroke();
    }

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }

    frame1 = function() {
        draw(0, 150, 150, 150);
    };

    frame2 = function() {
        draw(10, 0, 10, 600);
    };

    frame3 = function() {
        draw(0, 5, 70, 5);
    };

    frame4 = function() {
        draw(60, 5, 60, 15);
    };

    torso = function() {
        draw(60, 36, 60, 70);
    };

    rightArm = function() {
        draw(60, 46, 100, 50);
    };

    leftArm = function() {
        draw(60, 46, 20, 50);
    };

    rightLeg = function() {
        draw(60, 70, 100, 100);
    };

    leftLeg = function() {
        draw(60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


    // OnClick Function
    check = function() {
        list.onclick = function() {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
                if (lives === 0) {
                    $("#pic1").delay(1000).fadeIn(1000);
                }
            } else {
                comments();
            }
        }
    }


    // Play
    play = function() {
        categories = [
            ["leauge-of-legends", "witcher", "bloodborne", "counter-strike", "playerunkown-battlegrounds", "path-of-exile", "mana", "pokemon", "the-walking-dead"],
            ["the-burbs", "the-godfather", "gladiator", "the-matrix", "toy-story", "oceans-eleven"],
            ["ramen", "poke", "pizza", "key-lime-pie", "spaghetti", "creme-brulee", "gumbo", "sherbet", "caesar-salad"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    }

    play();

    // User Hints

    hint.onclick = function() {

        hints = [
            ["Welcome to summoners rift", "White Haired and cat eyed", "A hunter is a hunter, even in a dream", "a popular FPS that was developed by valve and nexon", "Outrunning a circle simulator", "a popular free to play ARPG developed by Grinding Gear Games", "In some games this determines how many spells you can cast", "Gotta catchem all!", "A popular Telltale game series, as well as comic and tv drama!"],
            ["1989 thriller/comedy", "Revenge is a dish best served cold", "Are you not entertained?!", "A sci-fi film created by the Wachowski Brothers", "A 1995 fantasy/adventure, had actors such as Tom Hanks and Tim Allen doing voice acting.", "A 2001 crime film directed by Steven Soderbergh, starring acors such as Andy Garcia, Casey Affleck, Elliot Gould."],
            ["A classic Japanese dish", "a word for a raw fish meal", "Something round served in something square", "A tart tasting pie!", "If you are Italian you will like these Al Dente", "Otherwise known as a burnt cream!", "Identified by it's dark roux, that has things such as seafood, sausage, and spices.", "A frozen dessert made with fruit juice with milk or cream.", "Romain Lettuce dressed with croutons and parmesan cheese."]
        ];

        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];
    };

   // Reset
  function resetGame() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();    
  }

  document.getElementById('reset').onclick = function() {
    resetGame();
  }

  $( "#pic1" ).click(function() {
    $('#pic1').fadeOut(0).delay(0);
    resetGame();
  });

}
