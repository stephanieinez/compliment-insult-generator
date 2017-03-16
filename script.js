var start = "you're a";

var middleHappy = ["adaptable", "adventurous", "affable", "affectionate", "agreeable", "ambitious", "amiable", "amicable", "amusing", "brave", "bright", "broad-minded", "calm", "careful", "charming", "communicative", "compassionate" , "conscientious", "considerate",
  "convivial", "courageous", "courteous", "creative", "decisive", "determined", "diligent", "diplomatic", "discreet", "dynamic", "easygoing", "emotional", "energetic", "enthusiastic", "exuberant", "fair-minded", "faithful", "fearless", "forceful", "frank",
  "friendly", "funny", "generous", "gentle", "good", "gregarious", "hard-working", "helpful", "honest", "humorous", "imaginative", "impartial", "independent", "intellectual", "intelligent", "intuitive", "inventive",
  "kind", "loving", "loyal", "modest", "neat", "nice", "optimistic", "passionate", "patient", "persistent", "pioneering", "philosophical", "placid", "plucky", "polite", "powerful", "practical", "pro-active", "quick-witted", "quiet",
  "rational", "reliable", "reserved", "resourceful", "romantic", "self-confident", "self-disciplined", "sensible", "sensitive", "shy", "sincere", "sociable", "straightforward", "sympathetic", "thoughtful", "tidy", "tough", "unassuming", "understanding", "versatile",
  "warmhearted", "willing", "witty"];

var middleAngry = ["aggressive", "aloof", "arrogant", "belligerent", "big-headed", "bitchy", "boastful", "bone-idle", "boring", "bossy", "callous", "cantankerous", "careless", "changeable", "clinging", "compulsive", "conservative", "cowardly", "cruel",
  "cunning", "cynical", "deceitful", "detached", "dishonest", "dogmatic", "domineering", "finicky", "foolish", "foolhardy", "fussy", "greedy", "grumpy", "gullible", "harsh", "impatient", "impolite", "impulsive", "inconsiderate", "inconsistent",
  "indecisive", "indiscreet", "inflexible", "interfering", "intolerant", "irresponsible", "jealous", "lazy", "Machiavellian", "materialistic", "mean", "miserly", "moody", "narrow-minded", "nasty", "naughty", "nervous", "obsessive", "obstinate", "overcritical",
  "overemotional", "parsimonious", "patronising", "perverse", "pessimistic", "pompous", "possessive", "pusillanimous", "quarrelsome", "quick-tempered", "resentful", "rude", "ruthless", "sarcastic", "secretive", "selfish", "self-centred", "self-indulgent", "silly", "smelly",
  "stinky", "sneaky", "stingy", "stubborn", "stupid", "superficial", "tactless", "timid", "touchy", "thoughtless", "truculent", "unkind", "unpredictable", "unreliable", "untidy", "untrustworthy", "vague", "vain", "vengeful", "vulgar",
  "weak-willed"];

var end = ["human being", "person", "duck", "lady", "warrior", "friend", "angel", "hottie", "princess", "queen", "king", "idol", "genius", "star", "superstar", "winner", "god", "inspiration", "superhero",
"success", "example", "leader", "team player", "thinker", "companion", "learner", "soul", "human", "role model", "achiever", "asset", "human", "being", "wizard", "sausage"];

var middle;

var HAPPY = "happy";
var ANGRY = "angry";

var App = {
    setWordIndex: function (array) {
        return Math.floor(Math.random() * (array.length + 1) - 1);
    },

    setMoodArray: function () {
       return this.setMood() === HAPPY ? middleHappy : middleAngry;
    },

    setMood: function() {
        return document.getElementById("happy").checked ? HAPPY : ANGRY;
    },

    buildSentence: function (firstWord, middleWord, finalWord) {
        return firstWord + " " + middleWord + " " + finalWord;
    },

    renderSentence: function (sentence) {
        document.getElementById("compliment").innerHTML = sentence
    },

    setCorrectGrammer: function (middleWord, firstWord) {
      var vowels = ["a", "e", "i", "o", "u"];
      for (i = 0; i < vowels.length; i++) {
          if (middleWord.charAt(0) == vowels[i]) {
             return firstWord + "n";
          }
      }
      return firstWord
    },

    start: function() {
        var moodArray = this.setMoodArray();
        var middleWord = moodArray[this.setWordIndex(moodArray)];
        var firstWord = this.setCorrectGrammer(middleWord, start);
        var finalWord = end[this.setWordIndex(end)];
        var sentence = this.buildSentence(firstWord, middleWord, finalWord);
        this.renderSentence(sentence);
    }
};

window.onload = function(){
    App.start();
    document.getElementById("button").addEventListener("click", App.start.bind(App));
};
