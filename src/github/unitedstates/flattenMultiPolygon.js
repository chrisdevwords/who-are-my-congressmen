
import { INVALID_COORDINATES } from '../../geolib/GeolibError';

export default function flattenMultiPolygon(multiPolygon) {
    if (!multiPolygon.length) {
        throw new Error(INVALID_COORDINATES);
    }
    return multiPolygon.map(polygon => polygon[0]);
}
