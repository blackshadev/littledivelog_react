import type { BuddySummary } from '../buddies/BuddySummary';
import type { TagSummary } from '../tags/TagSummary';
import type { DiveTank } from '../tanks/DiveTank';
import { DiveComputer } from './DiveComputer';

export type DiveDetail = {
    dive_id: number;
    is_imported: boolean;
    updated: Date;
    divetime: number;
    max_depth: number;
    date: Date;
    computer?: DiveComputer;
    tags: TagSummary[];
    buddies: BuddySummary[];
    tanks: DiveTank[];
    place: { place_id: number; name: string; country_code: string } | null;
};
