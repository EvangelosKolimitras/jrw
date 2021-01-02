const js = import("./node_modules/wasm101/wasm101.js");
js.then(js => {
	js.greet("WebAssembly");
});