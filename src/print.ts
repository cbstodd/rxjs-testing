export const print = (val: any, error?: any): void => {
    if (error) {
        const node = document.createElement("h3");
        const textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("error").appendChild(node);

        const errNode = document.createElement('h5');
        const textErrNode = document.createTextNode(error);
        errNode.appendChild(textErrNode);
        document.getElementById("error").appendChild(errNode);
    } else {
        const node = document.createElement("li");
        const textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }
};
