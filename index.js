function findMatching (name, horn) {
return name.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === horn.toLowerCase()
);
}

function fuzzyMatch (name, prefix) {
    return name.filter(
       (possibleMatch) => 
       possibleMatch.toLowerCase().indexOf(prefix.toLowerCase()) === 0
   );
}
function matchName (name, prefix) {
    return name.filter((record) => record.name === prefix);
    }