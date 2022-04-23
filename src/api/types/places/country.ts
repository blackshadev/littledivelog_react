export type Country = {
    name: string;
    iso2: string;
};

export type Place = {
    place_id?: number;
    name: string;
    country_code: string;
};
