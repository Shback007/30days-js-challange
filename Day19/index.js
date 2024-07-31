//Activity 1

console.log("\nActivity 1");
console.log("\nTask 1");
let str = `World War I[j] (alternatively the First World War or the Great War) (28 July 1914 – 11 November 1918) was a global conflict between two coalitions: the Allies (or Entente) and the Central Powers. Fighting took place mainly in Europe and the Middle East, as well as parts of Africa and the Asia-Pacific, and was characterised by trench warfare and the use of artillery, machine guns, and chemical weapons (gas). World War I was one of the deadliest conflicts in history, resulting in an estimated 9 million military dead and 23 million wounded, plus up to 8 million civilian deaths from causes including genocide. The movement of large numbers of troops and civilians was a major factor in spreading the Spanish flu pandemic.

The causes of World War I included the rise of Germany and decline of the Ottoman Empire, which disturbed the balance of power in place in Europe for most of the 19th century, as well as increased economic competition between nations triggered by new waves of industrialisation and imperialism. Growing tensions between the great powers and in the Balkans reached a breaking point on 28 June 1914, when a Bosnian Serb named Gavrilo Princip assassinated Archduke Franz Ferdinand, heir to the Austro-Hungarian throne. Austria-Hungary held Serbia responsible, and declared war on 28 July. Russia mobilised in Serbia's defence, and by 4 August, Germany, Russia, France, and the United Kingdom were drawn into the war, with the Ottomans joining in November of the same year. Germany's strategy in 1914 was to quickly defeat France, then to transfer its forces to the Russian front. However, this failed, and by the end of the year the Western Front consisted of a continuous line of trenches stretching from the English Channel to Switzerland. The Eastern Front was more dynamic, but neither side could gain a decisive advantage, despite costly offensives. As the fighting expanded to more fronts, Italy, Bulgaria, Romania, Greece and others joined in from 1915 onward.`;
let pattern = /World/gi;
let matches = str.match(pattern);

console.log(matches);

console.log("\nTask 2");

pattern = /\d+/g;
matches = str.match(pattern);
console.log(matches);

console.log("\nActivity 2");

console.log("\nTask 3");

pattern = /\b[A-Z][a-z]*\b/g;
matches = str.match(pattern);

console.log(matches);

console.log("\nTask 4");
pattern = /\d+/g;
matches = str.match(pattern);
console.log(matches);

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 5");

let phoneNumber = "(123) 456-7890";
pattern= /\((\d{3})\)\s(\d{3})-(\d{4})/;
matches = phoneNumber.match(pattern);
if (matches) {
    console.log("Area Code:", matches[1]);
    console.log("Central Office Code:", matches[2]);
    console.log("Line Number:", matches[3]);
} else {
    console.log("No matches found.");
}

console.log("\nTask 6");

let email = "sagnikhoredht@gmail.com";
pattern = /^([^@]+)@([^@]+)$/;
matches = email.match(pattern);
if (matches) {
    console.log("Username:", matches[1]);
    console.log("Domain:", matches[2]);
} else {
    console.log("No matches found.");
}

//Activity 4

console.log("\nActivity 4");

console.log("\nTask 7");

pattern = /^\w+/;
matches = str.match(pattern);

console.log(matches);

console.log("\nTask 8");
str = "JavaScript is awesome. The final word is end";
pattern = /\b\w+\b$/;
matches = str.match(pattern);

console.log(matches);

//Activity 5

console.log("\nActivity 5");

console.log("\nTask 9");

const PasswordCheck = (password)=>{
    pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = pattern.test(password);

    if(isValid) return 'Valid';
    else return 'Invalid'
}

console.log(PasswordCheck('Shback234@'));
console.log(PasswordCheck('Shback234'));

console.log("\nTask 10");

const urlCheck = (url)=>{
    pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,6}(:[0-9]{1,5})?(\/[a-zA-Z0-9\-._~:\/?#[@!$&'()*+,;=]*)?$/;
    const isValid = pattern.test(url);

    if(isValid) return 'Valid';
    else return 'Invalid'
}

console.log(urlCheck('google.com'));
console.log(urlCheck('google.dom'));
console.log(urlCheck('google.@'));
