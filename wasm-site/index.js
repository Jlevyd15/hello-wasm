const js = import("./node_modules/@jlevyd15/hello-wasm/hello_wasm.js")
js.then(js => {
	js.greet("Webassembly");
});