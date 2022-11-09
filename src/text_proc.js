const R = require("rambda");

//regex to match for strings with ??? in them
const isInquiry = (s) => R.test(/.*\?\?\?*./, s);

//function to get options from inquiry
const parseOpts = (s) => R.match(/(?<=\s-)\w+/g, s);
module.exports = { isInquiry, parseOpts };
