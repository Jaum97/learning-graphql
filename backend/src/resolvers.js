const users = [
	{ id: 1, name: 'João', email: 'joao.vitor@buildbox.com.br' },
	{ id: 2, name: 'Fabio', email: 'fabio@buildbox.com.br'},
]

const User = require('./User')

module.exports = {
	Query: {
		users: () => User.find(),
		user: (_, { id }) => User.findById(id)
	},

	Mutation: {
		createUser: () => users[0],
	}
}