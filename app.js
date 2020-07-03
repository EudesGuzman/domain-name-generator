var pronouns = ['the','our'];
var adjs = ['great', 'big' ];
var nouns = ['jogger','racoon', 'acom' ];
var extensions = ['.com', '.net', '.us', '.io'];
//var extensions = ['.com', '.net', '.us', '.io', '.vip', '.app', '.xyz', '.online', '.club', '.site', '.space', '.live', '.shop', '.store'];
let lista =[];

for (let pronoun of pronouns) {
    for (let adj of adjs){
        for (let noun of nouns){
            for (let extension of extensions){
               //console.log(pronoun.concat(adj,noun,extension));
                lista = pronoun.concat(adj,noun,extension);
               // console.log(lista);

/*
                if(noun.slice(-3) == extension.slice(1)){
                    console.log(pronoun.concat(adj,noun.slice(0,-3).concat(extension)));  
                }
                else{
                    console.log(pronoun.concat(adj,noun,extension));
                }
*/         

                //console.log(noun.slice(extension.length-1));
                console.log("noun --> " + noun);
                console.log("extension.length-1  --> " + parseInt(extension.length-1)  );
                console.log("noun.slice(extension.length-1) --> " + noun.slice(extension.length-1));
                 console.log("*****************");
                           
                


                if(noun.slice(extension.length-1) == extension.slice(1)){
                    console.log("hola");
                }


         
            }
        }
    }
}





