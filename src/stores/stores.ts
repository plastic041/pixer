import type { Hex } from "~/typings/colors.js";
import SETTINGS from "./settings.js";
import { writable } from "svelte/store";

export const grid = writable("c".repeat(SETTINGS.WIDTH * SETTINGS.HEIGHT));

export const currentColorHex = writable<string>("0");

export const cursor = writable<number>(0);
