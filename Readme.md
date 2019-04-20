# Rust and WebAssembly project

Within this repository there are three main parts
1. Rust application code
2. Webassembly npm package
3. An example web application

To experiment on your own you can clone this repository and update the Cargo.toml config file with your repo details.

You will need two to have also installed Rust --> [HERE](https://www.rust-lang.org/tools/install)

Be sure to have npm installed and run the following commands
```
npm adduser
```
Install the build toolchain
```
cargo install wasm-pack
```
Build the npm package
```
wasm-pack build --scope
```
Publish your own package
```
cd pkg
npm publish --access=public
```

### For next steps open the `wasm-site` Readme.md. 