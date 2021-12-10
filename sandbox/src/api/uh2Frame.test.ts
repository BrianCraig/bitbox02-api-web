import { bytesToPackages, packagesToBytes } from "./uh2Frame"

describe("UH2 module", () => {
    describe("one packet", () => {
        test("serialization", () => {
            let message = Uint8Array.from([105])
            let resp = Uint8Array.from([255, 0, 0, 0, 193, 0, 1, 105, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238])
            expect(bytesToPackages(message)).toEqual([resp]);
        })

        test("deserialization", () => {
            let message = Uint8Array.from([255, 0, 0, 0, 193, 0, 10, 6, 118, 57, 46, 56, 46, 48, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            let resp = Uint8Array.from([6, 118, 57, 46, 56, 46, 48, 0, 0, 1]);
            expect(packagesToBytes([message])).toEqual(resp);
        })
    });

})
