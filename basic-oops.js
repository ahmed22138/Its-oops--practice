"use strict";
//Basic oops pratice
class Phone {
    constructor(B, m, r, s, y, p) {
        this.Brand = B,
            this.model = m,
            this.ram = r;
        this.storage = s;
        this.year = y;
        this.price = p;
    }
    getPhoneDetails() {
        console.log(this.Brand, this.model, this.ram, this.storage, this.year, this.price);
    }
}
const America = new Phone("apple", "iphone15promax", 8, 128, 2024, "xxx");
const Bestphone = new Phone("Sumsang", "S24ultra", 24, 512, 2024, "xxx");
const IsPhone = new Phone("Xiaome", "14ultra", 24, 256, 2024, "xxx");
console.log(America);
console.log(Bestphone);
console.log(IsPhone);
console.log("=====================================================================================================");
America.getPhoneDetails();
Bestphone.getPhoneDetails();
IsPhone.getPhoneDetails();
