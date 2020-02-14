export var print = function (val, error) {
    if (error) {
        var node = document.createElement("h3");
        var textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("error").appendChild(node);
        var errNode = document.createElement('h5');
        var textErrNode = document.createTextNode(error);
        errNode.appendChild(textErrNode);
        document.getElementById("error").appendChild(errNode);
    }
    else {
        var node = document.createElement("li");
        var textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }
};
//# sourceMappingURL=print.js.map