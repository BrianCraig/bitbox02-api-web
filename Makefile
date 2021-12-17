install-deps:
	curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

build:
	cd packages/noise-wasm && wasm-pack build
	cd packages/sandbox && yarn
	cd packages/sandbox && yarn build
