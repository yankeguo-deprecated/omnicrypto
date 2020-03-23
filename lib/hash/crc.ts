import {hashFactories} from "../registry";
import {Hash} from "./Hash";
import crc from 'crc';

type CRCFunc = (buf: string | Buffer, previous?: number) => number;

class CRCHash implements Hash {

    private readonly func: CRCFunc;
    private value: number | undefined;

    constructor(func: CRCFunc) {
        this.func = func;
    }

    digest(): Uint8Array {
        const value = this.value || 0;
        return new Uint8Array([value >> 24, (value >> 16) & 255, (value >> 8) & 255, value & 255]);
    }

    update(data: Uint8Array): this {
        this.value = this.func(Buffer.from(data), this.value);
        return this;
    }
}

Object.keys(crc).forEach((name) => {
    hashFactories.set(name, {
        create(name: string): Hash {
            return new CRCHash((crc as any)[name]);
        }
    });
});
