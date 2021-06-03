async function fetchDataJSON() {
    function append(parent, element) {
        return parent.appendChild(element)
    }

    function createUser(element) {
        return document.createElement(element)
    }

    const { Observable } = rxjs;
    const obs$ = Observable.create(async function (observer) {
        try {
            let data = await fetch("https://randomuser.me/api/?results=10")//asyncronous it returns promise
            let objec = await data.json()//asyncronous it returns promise
            let arrOfObject = objec.results
            observer.next(arrOfObject);
        } catch (err) {
            document.getElementById("err").innerHTML = err
        }

    });

    obs$.subscribe(function (arr) {// it works Asyncronously(we need to wait until we get the obs$ value)
        arr.map(obj => {

            let { location: { street: { number, name }, city, state, country, postcode } } = obj
            let li = createUser("li");
            let fullName = createUser("p");
            let adress = createUser("p");

            fullName.innerHTML = (`${obj.name.first} ${obj.name.last}`).bold();
            adress.innerHTML = `street: ${number}, ${name}, </p>\n 
                                city: ${city} </p>\n 
                                state: ${state} </p>\n 
                                country: ${country} </p>\n 
                                postcode: ${postcode}`

            append(li, fullName);
            append(li, adress);
            append(document.getElementById("users"), li);
        })
    }
    )
}

function refreshPage() {
    window.location.reload();
}
window.onload = fetchDataJSON




