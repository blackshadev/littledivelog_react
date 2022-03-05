export default function formatPlace(place: null | { name: string; country_code: string }): string {
    return place ? `${place.name}, ${place.country_code}` : '';
}
