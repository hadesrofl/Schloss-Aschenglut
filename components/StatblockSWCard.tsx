"use client";
import { CardContent, Typography, Button, Grid, useTheme, Divider, Card, IconButton, Stack, Chip } from "@mui/material";
import { attacksToString, hitdieToString, rollDie, StatblockSW } from "../data/types/StatblockSW";
import { useState } from "react";
import DiceIcon from "./DiceIcon";
import { Dice } from "../data/types/Dice";

export interface StatblockSWCardProps {
    statblock: StatblockSW;
}

function StatblockEntry({ label, value }: { label: string, value: string }) {
    return <Typography variant="body2">
        <strong>{label}</strong> {value}
    </Typography>
}

export default function StatblockSWCard({ statblock }: StatblockSWCardProps) {
    const theme = useTheme();
    const [rolledHitPoints, setRolledHitPoints] = useState<number>(0);
    const [rolledDamage, setRolledDamage] = useState<Record<string, { hit: number, damage: number }>>({});
    const { name, title, hitdie, armorClassAscending, armorClassDescending, attacks, savingThrow, movement, alignment, challengeRating, xp, specials } = statblock;
    return <>
        <Card variant="outlined" component="h1">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} alignContent="center">
                        <Typography variant="h5" component="h2">
                            {name}
                        </Typography>
                        {title && <Typography variant="subtitle2" component="div" color={theme.palette.grey[600]}>
                            {title}
                        </Typography>}
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="row" alignItems="center">
                            <StatblockEntry label="Trefferwürfel:" value={`${hitdieToString(hitdie)} (Gewürfelt: ${rolledHitPoints})`} />
                            <IconButton sx={{}} onClick={() => setRolledHitPoints(rollDie([hitdie]))}>
                                <DiceIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} alignContent="center">
                        <StatblockEntry label="Rüstungsklasse:" value={`${armorClassAscending} [${armorClassDescending}]`} />
                    </Grid>
                    <Grid item xs={12} alignContent="center">
                        <StatblockEntry label="Angriffe:" value={attacksToString(attacks)} />
                    </Grid>
                    <Grid item xs={6} alignContent="center">
                        <StatblockEntry label="Rettungwurf:" value={savingThrow.toFixed()} />
                    </Grid>
                    <Grid item xs={6} alignContent="center">
                        <StatblockEntry label="Bewegung:" value={movement.toFixed()} />
                    </Grid>
                    <Grid item xs={6} alignContent="center">
                        <StatblockEntry label="Gesinnung:" value={alignment} />
                    </Grid>
                    <Grid item xs={6} alignContent="center">
                        <StatblockEntry label="HG/EP:" value={`${challengeRating}/${xp}`} />
                    </Grid>
                    {Object.keys(specials).length > 0 && (
                        <>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="div">Besonderheiten</Typography>
                                <Divider sx={{ marginTop: 1 }} />
                            </Grid>
                        </>)
                    }
                    {Object.entries(specials).map(([special, description]) => {
                        return <Grid item xs={12}>
                            <StatblockEntry label={`${special}:`} value={description} />
                        </Grid>
                    })}
                    <Grid item xs={12}>
                        <Typography variant="h6" component="div">Angriffswürfe</Typography>
                        <Divider sx={{ marginTop: 1 }} />
                    </Grid>
                    {attacks.map(attack => {
                        return <Grid item xs={4} spacing={4}>
                            <Button
                                variant="outlined"
                                endIcon={<DiceIcon />}
                                onClick={() =>
                                    setRolledDamage({ ...rolledDamage, [attack.name]: { hit: rollDie([{ numberOfDice: 1, dice: Dice.d20, constant: hitdie.numberOfDice }]), damage: rollDie(attack.damage) } })
                                }
                            >
                                {attack.name} <br />(Treffer: {rolledDamage[attack.name]?.hit ?? 0} Schaden: {rolledDamage[attack.name]?.damage ?? 0})
                            </Button>
                        </Grid>
                    })}
                </Grid>
            </CardContent >
        </Card >
    </>

}