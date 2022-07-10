export type Profile = {
    name: string;
    email: string;
    inserted: Date;
    dive_count: number;
    buddy_count: number;
    tag_count: number;
    computer_count: number;
};

export type UpdateProfileData = {
    name: string;
    email: string;
};
