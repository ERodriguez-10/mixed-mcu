let randomSelector = Math.floor(Math.random() * 9999);

let user = 'user' + randomSelector;

let greetings = `Hello ${user}! Everything is about random numbers, also your nickname. Click the button below and you will get a random character and a quote. Also, this message is random (joke).`

document.getElementById('user').innerHTML = greetings;

let discover = document.getElementById('testing');

function changeText(){
    let randomNumber = Math.floor(Math.random() * 11);

    let mcu = ['Iron Man', 'Spiderman', 'Black Widow', 'Hulk', 'Thor', 'Happy', 'Loki', 'Thanos', 'Wanda', 'Captain America', 'You <3']

    let result = mcu[randomNumber];

    document.getElementById('avenger').innerHTML = "Your character is " + result;

    function ironMan() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ['JARVIS, make a note. Remind me not to wake up in the morning ever again.', 
        "United? Unity isn’t about being the same. It’s about working together. What you can’t calculate, Ultron, is that our differences are our greatest strength.", 
        "We need to be put in check. Whatever form that takes, I’m game.", 
        'I love you 3000.', 
        'I am Iron Man.', 
        'Big man in his suit of armor. Take off and what are you? "Genius, Billionaire, Playboy, Philanthropist."'];
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function spiderman() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["I'm Spider-Man. Weird Things Happen To Me All The Time.", 
        "I Don't Want To Know, Cap. I Need To Know.", 
        "But No Matter How Hard I Try...People...Die!", 
        "You Killed The Woman I Love, And For That, You're Going To Die.", 
        "Typical Parker Luck", 
        'With Great Power, There Must Also Come...Great Responsibility?'];
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function blackWidow() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["I’m in the middle of an interrogation. This moron is giving me everything.", 
        'I only act like I know everything, Rogers.', 
        "Hey, big guy. Sun’s getting real low.", 
        "We don’t want to kill you, but we will.", 
        'Scott, I get emails from a raccoon. So, nothing sounds crazy anymore.', 
        'Pain only makes us stronger.'];
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function hulk() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["That's My Secret, Captain. I'm Always Angry.", 
        "Everything's Going To Be All Right Now. I Got This.", 
        "Hey, Have A Little Compassion, Pal. First, They Lost Asgard, Then Half Their People. They're Probably Just Happy To Have A Home.", 
        "The Radiation's Mostly Gamma. It's Like I Was Made For This.", 
        "Stay safe. Welcome to the circus.", 
        "There's An Ant-Man And A Spider-Man?"];
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function thor() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["This drink, I like it! ANOTHER!", 
        "You’re big. I’ve fought bigger.", 
        "Jane’s better.", 
        "Fortunately, I am mighty!", 
        "You should know that when you betray me, I will kill you.", 
        "You people are so petty, and tiny."];
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function happy() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["I'm in love with Spider-Man's aunt!", 
        "How does Cap do that?", 
        "No-one dies on my watch.", 
        "Stay sticky!", 
        "Nobody could live up to Tony, not even Tony. Tony was my best friend, and he was a mess. He second-guessed everything he did. He was all over the place.", 
        'I got it, I got it']
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function loki() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["The Time-Keepers Have Built Quite The Circus And I See The Clowns Are Playing Their Parts To Perfection.", 
        'You Can Trust One Thing. I Love To Be Right.', 
        'Love Is A Dagger.', 
        "We May Lose. Sometimes Painfully. But We Don't Die. We Survive.", 
        "So I Am No More Than Another Stolen Relic, Locked Up Here Until You Might Have Use Of Me.", 
        "I Could Have Done It, Father! I Could Have Done It! For You! For All Of Us!"]
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function thanos() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["What I'm About To Do To Your Stubborn, Annoying Little Planet, I'm Gonna Enjoy It, Very, Very Much.", 
        'Reality Is Often Disappointing. Now, Reality Can Be Whatever I Want.', 
        "Fine. I'll Do It Myself.", 
        "Perfectly Balanced, As All Things Should Be.", 
        "You Could Not Live With Your Own Failure, And Where Did That Bring You? Back To Me.", 
        "I'm A Survivor."]
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function wanda() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["We Wait For Two Days For Tony Stark To Kill Us.", 
        "I Don’t Need You To Tell Me Who I Am.", 
        "We Will Say Hello Again.", 
        "Do You Know How It Felt? It Felt Like That.", 
        'You Took Everything From Me.', 
        'I Remember Everything.']
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function captain() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["I don’t like bullies; I don’t care where they’re from.", 
        'I can do this all day.', 
        'Avengers! Assemble.', 
        "Compromise where you can. Where you can’t, don’t. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say, ‘No, you move’.", 
        "I’m with you ’til the end of the line.", 
        "That is America’s ass."];
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    function you() {
        let randomIndex = Math.floor(Math.random() * 5);
        let quotes = ["When you have a dream, you've got to grab it and never let go.", 
        'Nothing is impossible', 
        "There is nothing impossible to they who will try.", 
        "Keep your face always toward the sunshine, and shadows will fall behind you.", 
        "Nobody built like you, you design yourself.", 
        'Wake up determined, go to bed satisfied.']
        document.getElementById('quote').innerHTML = "One iconic quote is: " + quotes[randomIndex];
    }
    
    switch(result) {
        case 'Iron Man':
            ironMan();
            break;
        case 'Spiderman':
            spiderman();
            break;
        case 'Black Widow':
            blackWidow();
            break;
        case 'Hulk':
            hulk();
            break;
        case 'Thor':
            thor();
            break;
        case 'Happy':
            happy();
            break;
        case 'Loki':
            loki();
            break;
        case 'Thanos':
            thanos();
            break;
        case 'Wanda':
            wanda();
            break; 
        case 'Captain America':
            captain();
            break; 
        case 'You <3':
            you();
            break; 
        default:
            console.log('KAA BOOM');
            break;  
    }
}

discover.addEventListener('click', changeText);