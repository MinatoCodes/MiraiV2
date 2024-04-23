const chalk = require('chalk');
const colors = ['red', 'yellow', 'blue', 'magenta', 'cyan'];
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk[colors[Math.floor(Math.random() * colors.length)]](`${option} » `) + chalk[colors[Math.floor(Math.random() * colors.length)]](data));
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ NhuNgoc] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Lỗi ] » ') + data);
			break;
		default:
			console.log(chalk[colors[Math.floor(Math.random() * colors.length)]](`[ Súc Vật Đại Đế ] » `) + chalk[colors[Math.floor(Math.random() * colors.length)]](data));
			break;
	}
}
ors.length)]](data));
			break;
	}
}
