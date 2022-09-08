import bcyrpt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcyrpt.hashSync('admin123', 10),
        isAdmin: true
    },
    {
        name: 'John Joe',
        email: 'john@example.com',
        password: bcyrpt.hashSync('john123', 10)
    },
    {
        name: 'Jane Jick',
        email: 'jane@example.com',
        password: bcyrpt.hashSync('jane123', 10)
    },
]

export default users