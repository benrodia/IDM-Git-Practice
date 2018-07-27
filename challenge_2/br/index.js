const uglifycss = require('uglifycss');
const fs = require('fs');
const result = uglifycss.processFiles(['./src/styles.css']);


const destination = 'dist';

if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination);
}
	console.log('Uglifying your CSS...');

	fs.writeFile(`${destination}/style.min.css`, result, function(err){
	if(err){
		console.log(err);
	} else {
		console.log(`The file was saved to ${destination}!`);
	}
});
