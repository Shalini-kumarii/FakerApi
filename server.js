const faker = require("@faker-js/faker");
const express = require("express");

const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.findName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class company {
    constructor() {


        this._id =faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}




app.get("/api/users/new", (req, res) => {
    res.json(new User());
});


app.get("/api/companys/new", (req, res) => {
    res.json(new company());
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
server = app.listen(port, () => console.log(`Listening faker on port ${port}`));