var Mood = {

    setArray: function () {
        return this.set() === HAPPY ? Model.middleHappy : Model.middleAngry;
    },

    set: function() {
        return document.getElementById("happy").checked ? HAPPY : ANGRY;
    }
};

