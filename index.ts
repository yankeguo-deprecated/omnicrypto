import {Hash} from './lib/hash/Hash';
import {hashFactories} from "./lib/registry";
import './lib/hash/builtin';
import './lib/hash/crc';

/**
 * get all supported hashes
 */
export function getHashes(): Array<string> {
    return Array.from(hashFactories.keys());
}

/**
 * create a Hash instance
 * @param name name of the Hash algorithm
 */
export function createHash(name: string): Hash {
    const hf = hashFactories.get(name);
    if (hf) {
        return hf.create(name);
    }
    throw new Error(`Unsupported hash algorithm ${name}`)
}

export default {
    getHashes,
    createHash,
}
