# BitBox02 Web HID library

This is a Web HID POC connector for the BitBox02.
Requires WebHID API to work, see [Can i use](https://caniuse.com/webhid) for coverage.

Live test on https://briancraig.github.io/bitbox02-api-web/. 

# install

Requires `rust`, `nodejs` and `yarn` installed.

> make install-deps  

installs `wasm-pack`

> make build

builds wasm package, installs sandbox deps, and build the sandbox 

# try sandbox

> cd packages/sandbox && yarn start
