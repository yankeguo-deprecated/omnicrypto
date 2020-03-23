import { Hash } from './lib/hash/Hash';
import './lib/hash/builtin';
import './lib/hash/crc';
/**
 * get all supported hashes
 */
export declare function getHashes(): Array<string>;
/**
 * create a Hash instance
 * @param name name of the Hash algorithm
 */
export declare function createHash(name: string): Hash;
declare const _default: {
    getHashes: typeof getHashes;
    createHash: typeof createHash;
};
export default _default;
