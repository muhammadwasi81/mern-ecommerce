import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Muhammad Wasi',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Abdul Moiz',
    email: 'abdulmoiz@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'haseeb Alam',
    email: 'haseebalam@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
