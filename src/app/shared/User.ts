export class  User {
    id?: number;
    username: string;
    email: string;
    address = new Address();
    phone: string;
    website: string;
    company = new Company();
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo = new Position();

}

export class Position {
    lat: number;
    long: number;
}
