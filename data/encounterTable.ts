import { HeaderData, Row } from "../components/BasicTable";
import { Dice } from "./Dice";

export const dice = Dice.d10;
export const headers: HeaderData[] = [
  {
    name: "1W10",
    alignment: "center",
  },
  {
    name: "Begegnung",
  },
  {
    name: "Mögliches Omen",
  },
];

export const rows: Row[] = [
  {
    name: "1-2",
    diceValues: [1, 2],
    data: [
      {
        value: "1 - 2",
        alignment: "center",
      },
      {
        value:
          "W3 seelenlose Diener:innen (Werte wie normaler Mensch, S&W-Grundregelwerk S. 171), gehen ihren Pflichten nach. Schlagen Alarm bei Eindringlingen. Können überzeugt werden, dass man Gast ist.",
      },
      {
        value:
          "Hastige Schritte, Tratschen untereinander, Beleidigen sich wegen ihrer schlechten Arbeit",
      },
    ],
  },
  {
    name: "3",
    diceValues: [3],
    data: [
      {
        value: "3",
        alignment: "center",
      },
      {
        value:
          "W2 seelenlose Küchenhilfen (Werte wie normaler Mensch, S&W-Grundregelwerk S. 171), tragen Tabletts mit Essen zum Herbstturm, dem Ballsaal oder stationierten Wachen.",
      },
      {
        value:
          'Schepperndes Geschirr, "Schnell, schnell, wir haben doch keine Zeit."',
      },
    ],
  },
  {
    name: "4",
    diceValues: [4],
    data: [
      {
        value: "4",
        alignment: "center",
      },
      {
        value: "W4 seelenlose Wachen, gehen ihren Lastern nach.",
      },
      {
        value:
          "Geräusche über ihr Laster (z.B. Trinken, Glücksspiel, Affäre mit anderem Wachpersonal)",
      },
    ],
  },
  {
    name: "5-6",
    diceValues: [5, 6],
    data: [
      {
        value: "5 - 6",
        alignment: "center",
      },
      {
        value: "W4 seelenlose Wachen, patrouillieren achtsam.",
      },
      {
        value: "Leise Gespräche, scheppernde Rüstung",
      },
    ],
  },
  {
    name: "7",
    diceValues: [7],
    data: [
      {
        value: "7",
        alignment: "center",
      },
      {
        value: "Theo, Warg des Königs, auf der Suche nach Essen.",
      },
      {
        value: "Schnüffeln, Knurren, Geräusche der Pfoten auf dem Boden",
      },
    ],
  },
  {
    name: "8",
    diceValues: [8],
    data: [
      {
        value: "8",
        alignment: "center",
      },
      {
        value: "Zwei Ritter, im Duell über eine Kleinigkeit.",
      },
      {
        value:
          "Klingen kreuzen sich, hastige Bewegungen in Rüstungen, noble aber spöttische Worte",
      },
    ],
  },
  {
    name: "9",
    diceValues: [9],
    data: [
      {
        value: "9",
        alignment: "center",
      },
      {
        value: "Bartun, der Mutige, auf Beutezug.",
      },
      {
        value: "Voller Beutel mit Besteck, Münzen oder Essen ",
      },
    ],
  },
  {
    name: "10",
    diceValues: [10],
    data: [
      {
        value: "10",
        alignment: "center",
      },
      {
        value:
          "Gräfin Cliodhna mit W4 seelenlosen Wachen, geht den Pflichten als Vertretung des Königs nach.",
      },
      {
        value:
          "Die Luft wirkt kälter, scharfe Befehle an Bedienstete oder Wachen",
      },
    ],
  },
];
