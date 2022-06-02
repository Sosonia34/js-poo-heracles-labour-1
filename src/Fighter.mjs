/* Fighter class definition */
let MAX_LIFE = 100;
export class Fighter {
    constructor(name, strength, dexterity, life) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    
}
let fight = 1;
while (heracles.isAlive() && nemean.isAlive()) {
   /* console.log(`fight #${fight}`);*/
    console.log(heracles.fight(nemean));
    console.log(nemean.fight(heracles));

    fight++;
}

const deadFighter = (heracles.isAlive()) ? nemean : heracles;
const winningFighter = (deadFighter === heros) ? nemean : heracles;

console.log(` ${deadFighter.name}`);
console.log(` ${winningFighter.name}`);

       
