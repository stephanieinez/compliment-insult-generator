var App = {

    start: function() {
        var moodArray = Mood.setArray();
        var middleWord = moodArray[Compliment.setWordIndex(moodArray)];
        var firstWord = Compliment.correctGrammer(middleWord, Model.start);
        var finalWord = Model.end[Compliment.setWordIndex(Model.end)];
        var sentence = Compliment.build(firstWord, middleWord, finalWord);
        Compliment.render(sentence);
    },

    init: function () {
        window.onload = function(){
            this.start();
            document.getElementById("button").addEventListener("click", this.start.bind(this));
        }.bind(this);
    }
};

App.init();
