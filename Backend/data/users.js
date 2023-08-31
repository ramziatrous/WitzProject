import bcrypt from "bcryptjs";

const users = [
  {
    username: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    image: "image.jpg",
  },
  //  {
  //   username: "John Doe",
  //   email: "john@example.com",
  //   password: bcrypt.hashSync("123456", 10),
  //   isAdmin: false,
  // },
  // {
  //   username: "Jane Smith",
  //   email: "jane@example.com",
  //   password: bcrypt.hashSync("123456", 10),
  //   isAdmin: false,
  // },
  // {
  //   username: "Alice Johnson",
  //   email: "alice@example.com",
  //   password: bcrypt.hashSync("123456", 10),
  //   isAdmin: false,
  // },
];

export { users };
