// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
let dog ={
    name: "Blue",
    numLegs: 4,
};
dog.sayLegs = function(){
    return "This dog has " + dog.numLegs + " legs.";
};