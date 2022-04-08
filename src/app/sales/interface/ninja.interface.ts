export enum Village {
    hoja, viento, arena, rayo, nube, roca
}

export interface Ninja {
    name: string;
    ninjutsu: boolean;
    village: Village;
}