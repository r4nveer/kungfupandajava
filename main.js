// KF Panda Search

// HTML Variables
let charnameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

// RGB


// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked)

function btnClicked() {
    // Input
    let name = document.getElementById("char-in").value.toLowerCase();
   name = name.toLowerCase();

    // If Statement - Test the Input
    if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
        charnameEl.innerHTML = "Po"; 
        charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
        document.getElementById("char-img").src = "img/po.png";
    } else if (name === "tigress" || name === "master tigress") {
        charnameEl.innerHTML = "Tigress"; 
        charQuoteEl.innerHTML = "That was hardcore!";
        document.getElementById("char-img").src = "img/tigress.png";
   
    } else if (name === "mantis") {
        charnameEl.innerHTML = "Mantis" 
        charQuoteEl.innerHTML = "Fear the bug!";
        document.getElementById("char-img").src = "img/mantis.png";
    } else if (name === "monkey") {
        charnameEl.innerHTML = "Monkey" 
        charQuoteEl.innerHTML = "We should hang out!";
        document.getElementById("char-img").src = "img/monkey.png";

    }  else if (name === "viper") {
        charnameEl.innerHTML = "Viper" 
        charQuoteEl.innerHTML = "I don't need to bite to fight!";
        document.getElementById("char-img").src = "img/viper.png";
    } else if (name === "crane") {
        charnameEl.innerHTML = "Crane" 
        charQuoteEl .innerHTML = "Wings of Justice!";
        document.getElementById("char-img").src = "img/crane.png";
    } else if (name === "boss wolf") {
        charnameEl.innerHTML = "Boss Wolf" 
        charQuoteEl .innerHTML = "Guess nobody told you: If you mess with the wolf, you get the fangs";
        document.getElementById("char-img").src = "img/boss-wolf.png"
    } else if (name === "mr.ping") {
        charnameEl.innerHTML = "Mr.Ping" 
        charQuoteEl .innerHTML = "To make something special, you just have to believe it's special.";
        document.getElementById("char-img").src = "img/mr-ping.png"
    } else if (name === "shen") {
        charnameEl.innerHTML = "Shen" 
        charQuoteEl .innerHTML = "Nothing stands in my way.";
        document.getElementById("char-img").src = "img/shen.png"
    } else if (name === "shifu") {
        charnameEl.innerHTML = "Shifu" 
        charQuoteEl.innerHTML = "If you are truly at peace, you can do anything."
        document.getElementById("char-img").src = "img/shifu.png"
    } else if (name === "soothsayer") {
        charnameEl.innerHTML = "Soothsayer" 
        charQuoteEl.innerHTML = "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
        document.getElementById("char-img").src = "img/soothsayer.png"
    } else if (name === "tai lung") {
        charnameEl.innerHTML = "Tai Lung" 
        charQuoteEl.innerHTML = "I don't want your apology, I want my scroll!"
        document.getElementById("char-img").src = "img/tai-lung.png"
    } else if (name === "oogway") {
        charnameEl.innerHTML = "Oogway" 
        charQuoteEl.innerHTML = "Well done. I see you found a battle worth fighting for."
        document.getElementById("char-img").src = "img/oogway.png"
    }
    else {
        document.getElementById("char-name").innerHTML = "???????"; 
        document.getElementById("char-quote").innerHTML = "---------";
        document.getElementById("char-img").src = "img/question-mark.png";
    }
    }


   
    document.getElementById("theme-btn").addEventListener("click", changeTheme);

    function changeTheme() {
        const theme = document.getElementById("theme-in").value.toLowerCase();
    
        // Select the elements to be styled
        const h1 = document.querySelector("h1");
        const h2 = document.getElementById("char-name");
        const p1 = document.querySelector("p");
        const quote = document.getElementById("char-quote");
    
        if (theme === "dark" || theme === "black") {
            // Apply dark theme
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            h1.style.color = "white";
            h2.style.color = "white";
            p1.style.color = "white";
            quote.style.color = "white";
        } else if (theme === "light" || theme === "white") {
            // Apply light theme
            document.body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            h1.style.color = "black";
            h2.style.color = "black";
            p1.style.color = "black";
            quote.style.color = "black";
        } else {
            alert("Please enter a valid theme (dark or light).");
        }
    }
    
    
    