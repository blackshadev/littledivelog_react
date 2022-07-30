export enum SearchOptions {
    Keyword = 'keyword',
    Tag = 'tag',
    Buddy = 'buddy',
    Before = 'before',
    After = 'after',
    Place = 'place',
}

export const searchOptionLabels: { [key in SearchOptions]: string } = {
    [SearchOptions.Keyword]: 'With keyword',
    [SearchOptions.After]: 'Date after',
    [SearchOptions.Before]: 'Date before',
    [SearchOptions.Buddy]: 'With buddy',
    [SearchOptions.Place]: 'On place',
    [SearchOptions.Tag]: 'With tag',
};
