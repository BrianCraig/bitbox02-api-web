import { Info, infoDigest } from "./messages";

describe("messages", () => {
    describe("info", () => {
        test("digest original", () => {
            let message = Uint8Array.from([6, 118, 57, 46, 56, 46, 48, 0, 0, 1])
            let resp: Info = {
                version: {
                    major: 9,
                    minor: 8,
                    patch: 0
                },
                platformId: 0,
                editionId: 0,
                unlocked: true
            }
            expect(infoDigest(message)).toEqual(resp);
        })

        test("digest complex msg", () => {
            let v = new TextEncoder().encode("version17.0.2555")
            let message = Uint8Array.from([v.length, ...(v as unknown as number[]), 12, 24, 0]);
            let resp: Info = {
                version: {
                    major: 17,
                    minor: 0,
                    patch: 2555
                },
                platformId: 12,
                editionId: 24,
                unlocked: false
            }
            expect(infoDigest(message)).toEqual(resp);
        })
    });

})
