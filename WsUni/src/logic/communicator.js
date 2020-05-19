const req = require("request-promise");
const Promise = require("bluebird");


//Class for calling other WS 
class Communicator {
	getItems() {
		console.log("getItems()");
		return Promise.try(() => {
			return req({
				//cia buvo shop vietoj localhost
				uri: "http://localhost:3001/shop",
				json: true
			});
		})
			.then(body => {
				console.log("received resp");
				console.dir(body);
				if (body.error) throw new Error(body.message);
				return body;
			})
			.catch(function(resp) {
				throw resp.error;
			});
	}

	getItem(id) {
		console.log("getItem()");
		return Promise.try(() => {
			return req({
				//cia buvo shop vietoj localhost
				uri: `http://localhost:3001/shop/${id}`,
				json: true
			});
		})
			.then(body => {
				console.log("received resp");
				console.dir(body);
				if (body.error) throw new Error(body.message);
				return body;
			})
			.catch(function(resp) {
				throw resp.error;
			});
	}

	buyItem(id) {
		console.log("buyItem()");
		return Promise.try(() => {
			return req({
				//cia buvo shop vietoj localhost
				uri: `http://localhost:3001/shop/${id}`,
				json: true
			});
		})
			.then(async body => {
				console.log("received resp");
				console.dir(body);
				if (body.error) throw new Error(body.message);
				await req({
					method: "DELETE",
					//cia buvo shop vietoj localhost
					uri: `http://localhost:3001/shop/${id}`,
					json: true
                });
                console.log('body return')
				return body;
			})
			.catch(function(resp) {
				throw new Error(resp.error.message);
			});
	}
}

module.exports = new Communicator();
