"use client";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import DiceIcon from "./DiceIcon";
import { Dice, rollDice } from "../data/Dice";
import { useState } from "react";
import { useConfig } from "nextra-theme-docs";

type Alignment = "left" | "center" | "right";

export interface HeaderData {
  name: string;
  alignment?: Alignment;
}

export interface RowData {
  value: string | number;
  alignment?: Alignment;
}

export interface Row {
  name: string;
  diceValues?: number[];
  data: RowData[];
}

interface BasicTableProps {
  headers: HeaderData[];
  rows: Row[];
  dice?: Dice;
}

export default function BasicTable({ headers, rows, dice }: BasicTableProps) {
  const [selectedRow, setSelectedRow] = useState(undefined);
  const handleRoll = () => {
    const result = rollDice(dice);
    const selectedRow = rows.findIndex(
      (row) => row.diceValues !== undefined && row.diceValues.includes(result)
    );
    console.log("Result", result);
    console.log("Selected Row", selectedRow);
    setSelectedRow(selectedRow);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              return (
                <TableCell align={header.alignment}>{header.name}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              selected={index === selectedRow}
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.data.map((data) => {
                return (
                  <TableCell align={data.alignment ?? "left"}>
                    {data.value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
          {dice && (
            <TableRow hover>
              <TableCell
                onClick={handleRoll}
                align="center"
                colSpan={headers.length}
                sx={{ cursor: "pointer" }}
              >
                <DiceIcon />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
