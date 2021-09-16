window.onload = () => {

    let getList = localStorage.getItem("items");
    let items = document.getElementById("items");
    if (getList == null) {
        listObj = [];
    }

    else {
        listObj = JSON.parse(getList);
    }

    let li = "";

    listObj.forEach(function (element, index) {

        li += `<li class="list-group-item">${element}<button class="btn-danger btn btn-sm float-right delete">Delete</button><button class="btn-success btn btn-sm float-right edit">Edit</button </li>`;
    });

    items.innerHTML = li;

    const form1 = document.querySelector("#addForm");

    let submit = document.getElementById("submit");

    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);


    items.innerHTML = li;
};

function addItem(e) {

    e.preventDefault();

    if (submit.value != "Submit") {
        console.log("Hello");

        editItem.target.parentNode.childNodes[0].data =
            document.getElementById("item").value;

        submit.value = "Submit";
        document.getElementById("item").value = "";

        document.getElementById("lblsuccess").innerHTML =
            "Text edited successfully";

        document.getElementById("lblsuccess").style.display = "block";

        setTimeout(function () {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);

        return false;
    }

    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null) return false;
    else document.getElementById("item").value = "";


    let deleteButton = document.createElement("button");

    deleteButton.className = "btn-danger btn btn-sm float-right delete";

    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");

    editButton.className = "btn-success btn btn-sm float-right edit";

    editButton.appendChild(document.createTextNode("Edit"));

    let getItem = localStorage.getItem("items");
    if (getItem == null) {
        itemObj = [];
    }

    else {
        itemObj = JSON.parse(getItem);
    }

    itemObj.push(newItem)
    localStorage.setItem("items", JSON.stringify(itemObj));

    let li = "";

    itemObj.forEach(function (element, index) {
        li += `<li class="list-group-item">${element}<button class="btn-danger btn btn-sm float-right delete">Delete</button><button class="btn-success btn btn-sm float-right edit">Edit</button </li>`;
    });

    items.innerHTML = li;


}

function removeItem(e) {

    e.preventDefault();

    if (e.target.classList.contains("delete")) {

        if (confirm("Are you Sure?")) {

            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML =
                "Text deleted successfully";

            document.getElementById("lblsuccess").style.display = "block";

            setTimeout(function () {
                document.getElementById("lblsuccess").style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {

        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}


