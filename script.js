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


function selectMood()
{
  if(document.getElementById("happy").checked){
    return "happy";
  }
  else{
    return "angry";
  }
}

function buildSentence() {
  if (selectMood() == "happy"){
    middle = middleHappy;
  } else {
    middle = middleAngry;
  }
  console.log(middle);

  var a = start;
  var b = Math.floor(Math.random() * (middle.length + 1) - 1);
  var c = Math.floor(Math.random() * (end.length + 1) - 1);
    if (
      middle[b].charAt(0) ==  "a" ||
      middle[b].charAt(0) ==  "e" ||
      middle[b].charAt(0) ==  "i" ||
      middle[b].charAt(0) ==  "o" ||
      middle[b].charAt(0) ==  "u"
    ) {
      a += "n";
    }
    var sentence = a + " " + middle[b] + " " + end[c];
      console.log(sentence)
    document.getElementById("compliment").innerHTML = sentence;
}

window.onload = function(){
    buildSentence();
  // document.getElementById("button").onclick = function(){
  //   buildSentence();
  // }
    document.getElementById("button").addEventListener("click", buildSentence);
  }
