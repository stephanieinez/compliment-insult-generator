var App = {

    start: function() {
        var moodArray = Mood.setArray();
        var middleWord = moodArray[Sentence.setWordIndex(moodArray)];
        var firstWord = Sentence.correctGrammer(middleWord, Model.start);
        var finalWord = Model.end[Sentence.setWordIndex(Model.end)];
        var sentence = Sentence.build(firstWord, middleWord, finalWord);
        Sentence.render(sentence);
    },

    init: function () {
        window.onload = function(){
            this.start();
            document.getElementById("button").addEventListener("click", this.start.bind(this));
        }.bind(this);
    }
};

App.init();
