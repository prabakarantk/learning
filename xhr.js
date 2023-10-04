var url = "https://jsonplaceholder.typicode.com/photos";

var xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function () {
    console.log("coming");
    console.log(xhr.status, xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
        var value = xhr.response;
        console.log(typeof value, typeof xhr.responseText, "nfdndf");
        var value_1 = JSON.parse(value);
        console.log(value_1);
        show(value_1);
    } else {
        console.log("No Data");
    }
}

var dummy = document.getElementById('demo');

console.log(dummy, "sds");

function show(data) {
    for (let i = 0; i < data.length; i++) {
        var ab = document.createElement('h3');
        ab.innerText = data[i]['title'];
        console.log(ab);
        dummy.append(ab);
    }
}