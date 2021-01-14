module.exports = ({ env }) => ({  
	defaultConnection: 'default',  
	connections: {    
		default: {      
			connector: 'bookshelf',      
			settings: {        
				client: 'postgres',        
				host: 'ec2-54-155-99-116.eu-west-1.compute.amazonaws.com',        
				port: '5432',        
				database: 'dfuvk902ir26r5',        
				username: 'yllnggcrbddbyd',        
				password: 'a4625fa3d02bfe1c279f233db2afe1fdf4370707df825b9ba091e01e3a78ad75',      
			},      
			options: {        
				ssl: false,      
			},    
		},  
	},
});

