import { Dice, rollDice } from "./Dice";

const constantNumberToString = (constant?: number) => {
    return constant !== undefined && constant !== 0 ? `${constant > 0 ? '+' : '-'}${constant}` : '';
}

interface RollableDice {
    numberOfDice: number;
    dice: Dice;
    constant?: number;
}

interface Hitdie extends RollableDice {
}

export const rollDie = (dice: RollableDice[]) => {
    const rolledValues = [];
    return dice.map(die => {
        for (let i = 0; i < die.numberOfDice; i += 1) {
            rolledValues.push(rollDice(die.dice));
        }
        return rolledValues.reduce((prev, curr) => prev + curr) + (die.constant ?? 0);
    }).reduce((prev, curr) => prev + curr);
}

export const hitdieToString = (hitdie: Hitdie) => {
    const constant = constantNumberToString(hitdie.constant);
    const diceAbbr = "W";
    return `${hitdie.numberOfDice}${diceAbbr}${hitdie.dice} ${constant}`
}

interface Attack {
    name: string;
    damage: RollableDice[];
}

const attackToString = ({ name, damage }: Attack) => {
    const diceAbbr = "W";
    return `${name} ${damage.map(dmg => {
        const constantDamage = constantNumberToString(dmg.constant);
        return `(${dmg.numberOfDice}${diceAbbr}${dmg.dice} ${constantDamage})`;
    })}`;
};

export const attacksToString = (attacks: Attack[]) => {
    return attacks.map(attack => attackToString(attack)).join(", ");
}

export interface StatblockSW {
    name: string;
    title?: string;
    hitdie: Hitdie;
    armorClassDescending: number;
    armorClassAscending: number;
    attacks: Attack[];
    savingThrow: number;
    movement: number;
    alignment: string;
    challengeRating: number;
    xp: number;
    specials: Record<string, string>;
}