//regex to match for strings with ??? in them
const isInquiry = (s) => /.*\?\?\?*./.test(s);

//function to get options from inquiry
const parseOpts = (s) => s.match(/\s-\w+/g);
module.exports = { isInquiry, parseOpts};
