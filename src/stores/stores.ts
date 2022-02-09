import SETTINGS from "./settings.js";
import { writable } from "svelte/store";

const makeGrid = () => "c".repeat(Number(SETTINGS.SIZE) ** 2);

export const size = writable(SETTINGS.SIZE);

export const grid = writable(makeGrid());

export const currentColorHex = writable<string>("0");

export const cursor = writable<number>(0);
