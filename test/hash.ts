import omnicrypto from '../'
import assert from 'assert'
import {crc32} from "crc";

describe('hash', function () {
    const data = Uint8Array.from(Buffer.from('hello', 'utf-8'));
    const vals = {
        'md4': '85854a82660b720ad29e9c6a9cbc1f89',
        'md5': '99fb31087791f6317ad7c6da1433f172',
        'sha1': 'dde562786e7ee87cb21ecd0273094b78b8d59d70',
        'sha256': 'ee989411b1cb1087161b46501562588be3430d6fd110115c66bdd644b76e0779',
        'ripemd160': '4c562e7903e00bd7eaf7e255e34b6baff847cc49',
        'crc32': '3e21b40b',
    };

    it('should work with raw crc32', function () {
        const val = crc32('hellohellohello')
        assert.equal('3e21b40b', val.toString(16))
    });

    Object.entries(vals).forEach(([name, value]) => {
        it(`should work with ${name}`, function () {
            const hash = omnicrypto.createHash(name);
            hash.update(data);
            hash.update(data);
            hash.update(data);
            assert.equal(Buffer.from(hash.digest()).toString('hex'), value);
        });
    });

});