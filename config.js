exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://ladyjem:bestrong9@ds141185.mlab.com:41185/blog-app';
exports.PORT = process.env.PORT || 8080;