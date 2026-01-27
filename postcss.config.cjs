// import autoprefixer from 'autoprefixer';
// import tailwindcss from 'tailwindcss';

// export default {
//   plugins: [tailwindcss, autoprefixer],
// };

// module.exports = {
// 	plugins: ['tailwindcss', 'postcss-nesting', 'autoprefixer'],
// };

module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		'postcss-nesting': {},
		// postcssnesting: {},
	},
};

// For Testing to generate the "main_browser.css"

// module.exports = {
// 	plugins: [require('tailwindcss')],
// };
