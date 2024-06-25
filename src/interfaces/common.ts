export interface PokemonItf {
    name: string;
    url: string;
}

export interface PokemonRespItf {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonItf[];
}

export interface PokemonDetailsItf {
    sprites: Record<string, string | Record<string, string>>
    moves: { move: { name: string; url: string; } }[]
}

export interface FormattedPokemon {
    url: string;
    move: string;
    name: string;
}
