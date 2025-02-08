export const users = [
    {
        id: 1,
        username: 'harry1992',
        password: 'harrypotter1992',
        email: 'harrypotter1992@gmail.com',
        isAdmin: true
    },
    {
        id: 2,
        username: 'ron1993',
        password: 'ronweasley1993',
        email: 'ron1993@gmail.com',
        isAdmin: false
    },

]

localStorage.setItem('users', JSON.stringify(users))