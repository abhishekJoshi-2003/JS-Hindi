const ele = document.querySelector('.container');
window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (ele.children.length) { // We could not use here ele.hasChildNodes() as it also counts new lines or spaces as Nodes
        const element = document.createElement('tr');
        element.innerHTML = `
        <td class='theEntry'>${e.key == " " ? "Space" : e.key}</td>
        <td class='theEntry'>${e.keyCode}</td>
        <td class='theEntry'>${e.code}</td>
        `
        element.className = "theRow";
        document.querySelector('table').appendChild(element);
    }
    else {
        const element = document.createElement('table');
        element.className = "theTable";
        element.innerHTML = `<tr>
        <th class='theEntry'>Key Name</th>
        <th class='theEntry'>Key Code</th>
        <th class='theEntry'>Code</th>
        </tr>
        <tr>
        <td class='theEntry'>${e.key == " " ? "Space" : e.key}</td>
        <td class='theEntry'>${e.keyCode}</td>
        <td class='theEntry'>${e.code}</td>
        </tr>        
        `
        ele.appendChild(element);
    }
});