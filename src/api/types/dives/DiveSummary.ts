import type { TagSummary } from '../tags/TagSummary';

export type DiveSummary = {
    dive_id: number;
    divetime: number;
    date: Date;
    tags: TagSummary[];
    place: { place_id: number; name: string; country_code: string } | null;
};
