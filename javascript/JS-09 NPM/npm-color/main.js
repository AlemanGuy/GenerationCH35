const colors = requiere("colors");

console.log("hello".green);
console.log("hello".underline.red);
console.log("hello".inverse);
console.log("hello".rainbow);
console.log("hello".trap);

colors.serTheme({
    silly: `rainbow`,
    input: `cyan`,
    verbose: `cyan`,
    prompt: `cyan`,
    info: `cyan`,
    data: `cyan`,
    help: `cyan`,
    warn: `yellow`,
    debug: `blue`,
    error: `red`

}
); 

console.log("nuevo estilo".verbose);
console.log("nuevo estilo".debug);