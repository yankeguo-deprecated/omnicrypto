export interface Hash {
    update(data: Uint8Array): this;
    digest(): Uint8Array;
}
export interface HashFactory {
    create(name: string): Hash;
}
