import type { BuddySummary } from '../buddies/BuddySummary';
import type { TagSummary } from '../tags/TagSummary';
import type { DiveTank } from '../tanks/DiveTank';

export type DiveUpdate = {
    divetime: number;
    max_depth: number;
    date: Date;
    tags: TagSummary[];
    buddies: BuddySummary[];
    tanks: DiveTank[];
    place?:
        | { place_id: number }
        | { name: string; country_code: string }
        | null;
};
