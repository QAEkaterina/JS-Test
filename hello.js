function Hello(name = "") {
    if (typeof name !== "string") {
        return undefined;
    }

   /* if (name.trim() === "") {
        return "Hello!";
    }
    */
    return "Hello " + name + "!";
}
module.exports = Hello