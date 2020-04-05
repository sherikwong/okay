const seed = async ({ User, Task }) => {
  console.log('Seeding');
  try {
    const user = await User.create({
      "firstName": "Sheri",
      "googleId": "115655759419999823636",
      "email": "kwongsheri@gmail.com",
      "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14GhpbgkQMwQgQXIcpV8dfmX4ylqYaNXc_ByyCLkv=s96-c",
      "lastName": "Kwong"
    })
    // console.log('Created user', user);
    const task = await Task.create({
      name: 'Random task'
    })
    // console.log('Created task', task);
  } catch (error) {
    console.error(error);
  }
}

module.exports = seed;
