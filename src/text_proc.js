//regex to match for strings with ??? in them
const isInquiry = s => /.*\?\?\?*./.test(s)

module.exports = {isInquiry}