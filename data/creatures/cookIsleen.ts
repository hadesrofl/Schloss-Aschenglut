import { Dice } from "../types/Dice";
import { StatblockSW } from "../types/StatblockSW";

export const cookIsleen: StatblockSW = {
    name: "Isleen",
    title: "Küchenchefin des Schlosses",
    hitdie: { numberOfDice: 1, dice: Dice.d8 },
    armorClassAscending: 5,
    armorClassDescending: 14,
    attacks: [{ name: "2 Küchenmesser", damage: [{ dice: Dice.d12, numberOfDice: 1 }] }],
    savingThrow: 17,
    movement: 12,
    alignment: "Neutral",
    challengeRating: 3,
    xp: 60,
    specials: { ["Küchenpersonal"]: "Isleen is immer von einem Koch und W4 Küchenhilfen umgeben, um Sündenböcke zu haben." }
}