const names = ["Kalle", "Pelle", "Olle", "Nisse"];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    console.log(i);
}

// forEch är en highOrder-funktion, rekommenderas att använda
names.forEach(function(name, index) {
    console.log(index + ' ' + name);
    console.log(index);
});