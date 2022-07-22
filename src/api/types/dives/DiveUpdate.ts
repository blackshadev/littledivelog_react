import type { DiveTank } from '../tanks/DiveTank';
import { DiveBuddy } from './DiveBuddy';
import { DiveTag } from './DiveTag';

export type DiveUpdate = {
    divetime: number;
    max_depth: number;
    computer_id?: number;
    date: Date;
    tags: DiveTag[];
    buddies: DiveBuddy[];
    tanks: DiveTank[];
    place?: { place_id: number } | { name: string; country_code: string } | null;
};
