let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// Why? In JavaScript, objects are passed by reference.
// Thus, Spot's demoObject starts off pointing to the munsters object.
// His program could replace that with some other object,
// and the family's data would be safe.
// However, in this case, the program doesn't reassign demoObject;
// it just uses it, as-is.
// Thus, the object that gets changed by the function is the munsters object.