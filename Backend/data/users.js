import bcrypt from "bcryptjs";

const users = [
  {
    username: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    image: "image.jpg",
  },
];

export { users };
