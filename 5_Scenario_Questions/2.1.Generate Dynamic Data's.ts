function generatrandomdata() {
    const randomData = Math.floor(Math.random() * 100);

    const username = `user${randomData}`;
    const email = `${username}@example.com`;
    return { username, email };

}

const data = generatrandomdata();
console.log(data);
/********* Output *********
{
    username: 'user42',
    email: 'user42@example.com'
}
*/
