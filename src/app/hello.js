// import d3plus from 'd3plus';

export class HomeController {
	constructor() {
	    this.hello = "hey";
	    this.rawData = "";
	    this.data = {};
	}

  	submitData() {
  		this.data = this.parse(this.rawData);
  		console.log(this.data);
    	this.draw();
  	}

	draw() {
		// d3plus.viz()
		// 	.container("#viz")     // container DIV to hold the visualization
		// 	.data(this.data)     // data to use with the visualization
		// 	.type("bubbles")       // visualization type
		// 	.id(["group", "name"]) // nesting keys
		// 	.depth(10)              // 0-based depth
		// 	.size("friends")         // key name to size bubbles
		// 	.color("friends")        // color by each group
		// 	.draw();                // finally,  draw the visualization!
  	}

  	parse(data) {
  		const dataList = data.split(/\r?\n/);
  		let prevLine = "";
  		const self = this;
  		const obj = [];

  		for (const line of dataList) {
  			if (line.includes("mutual friend")) {
  				obj.push({
  					name: prevLine.trim(),
  					friends: self.getMutualFriendsCount(line.trim()),
  					group: 'group1'
  				});
  			}
  			prevLine = line;
  		}
  		return obj;
  	}

  	getMutualFriendsCount(line) {
  		const words = line.split(' ');
  		try {
			return parseInt(words[0], 10);  			
  		} catch (e) {
  			console.log(`error: ${e}`);
  		}
  	}
}



export const hello = {
  template: require('./hello.html'),
  controller: HomeController
};
