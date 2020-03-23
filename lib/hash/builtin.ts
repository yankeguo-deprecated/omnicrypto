import crypto from 'crypto';
import {hashFactories} from "../registry";
import {Hash} from "./Hash";

crypto.getHashes().forEach((name) => {
    hashFactories.set(name, {
        create(name: string): Hash {
            return crypto.createHash(name);
        }
    })
});
