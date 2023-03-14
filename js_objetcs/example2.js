//OBJETO ORIGINAL
let user = {
  name: "Thiago",
  number: 10,
  address: {
    street: "Rua 1",
    number: 20,
  },
  color: function () {
    console.log("Green");
  },
  date: new Date(),
};
//CLONE DO OBJETO
let userClone = Object.assign({}, user);

//ALTERAÇÃO DO NOME DA RUA DO OBJETO ORIGINAL
user.address.street = "Rua Arlindo Cruz";
console.log(userClone, user);
