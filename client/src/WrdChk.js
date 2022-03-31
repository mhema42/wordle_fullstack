function WrdChk() {
    return (
        <>
            <input type="text" />
            <button>OK</button>
        </>
    );
}


// get string from input and change to lowercase
function get_str () {
    const response = document.getElementById("response");
    const wordle_word = document.getElementById("wordle_word").value.toLowerCase();
    const guess_word = document.getElementById("guess_word").value.toLowerCase();
    response.innerHTML = ("");
    const result = word_check (wordle_word, guess_word);
    return response.innerHTML = result;
};

// check if guess is correct on first try
function word_check (wordle_word, guess_word) {
    //check if guessed word is correct
    if (guess_word === wordle_word) {
        return "Your guess is correct, congratulation!";
    }
    else {   
        const result = word_to_array (wordle_word, guess_word)
        return result;
    };
};

// split input to arrays and compare array.length
function word_to_array (wordle_word, guess_word) {
    const wordle_array = wordle_word.split("");
    let guess_array = guess_word.split("");
    //check if guessed word contains correct amount of letters
    if (guess_array.length == wordle_array.length) {
        const result = properties_to_array (wordle_array, guess_array);
        return result;
    }
    else {
        const result = "Your guess must contain " + wordle_array.length + " letters"
        return result;
    };
};

// add obj "status:" and change obj.name to each letter in guess_array
function properties_to_array (wordle_array, guess_array) {
    guess_array = guess_array.map((element) => ({
        ...element,
        status: "incorrect"
    }));
    guess_array = guess_array.map( item => {
        const { [0]: letter, ...rest } = item;
        return { letter, ...rest }
    });
    const result = array_check (wordle_array, guess_array)
    return result;
}

// compare input array to wordle array
function array_check (wordle_array, guess_array) {
    for (let i=0; i < guess_array.length; i++) {
        if (guess_array[i].letter == wordle_array[i]) {
            guess_array[i].status = "correct"
            wordle_array[i] = "check"
        };
    };
    guess_array.forEach(element => {    
        for (let j=0; j < guess_array.length; j++) {
            if (element.status == "incorrect") {
                if (element.letter == wordle_array[j]) {
                    element.status = "missplaced"
                    wordle_array[j] = "check"
                };
            };
        };
    });
    const result = JSON.stringify(guess_array).replace(/{/g,"").replace(/}/g,"").replace(/"/g,"").replace(/letter:/g," ").replace(/status:/g," ")
    return result;
};

export default WrdChk;