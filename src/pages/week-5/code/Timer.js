$$.async();

console.log("Hello, World!");

var action = {
    $$: $$,
    console: console,
};

setTimeout(function() {
    $$.clear(0);    // clear output cell
    action.$$.sendResult("Goodbye!");
}, 2000);  // 2 second timer