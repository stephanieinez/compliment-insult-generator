var Compliment = {

    build: function (firstWord, middleWord, finalWord) {
        return firstWord + " " + middleWord + " " + finalWord;
    },

    render: function (sentence) {
        document.getElementById("compliment").innerHTML = sentence
    },

    correctGrammer: function (middleWord, firstWord) {
        var vowels = ["a", "e", "i", "o", "u"];
        for (i = 0; i < vowels.length; i++) {
            if (middleWord.charAt(0) === vowels[i]) {
                return firstWord + "n";
            }
        }
        return firstWord
    },

    setWordIndex: function (array) {
        return Math.floor(Math.random() * (array.length + 1) - 1);
    }
};