import { generateUser } from '../static-data';

export default function user(state = generateUser()) {
    return state;
}