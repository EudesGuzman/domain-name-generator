var pronouns = ['the','our'];
var adjs = ['great', 'big' ];
var nouns = ['jogger','racoon'];
var extensions = ['.com', '.net', '.us', '.io'];
let lista =[];

for (let pronoun of pronouns) {
    for (let adj of adjs){
        for (let noun of nouns){
            for (let extension of extensions){
              //  console.log(pronoun.concat(adj,noun,extension));
                lista = pronoun.concat(adj,noun,extension);
            }
        }
    }
}
