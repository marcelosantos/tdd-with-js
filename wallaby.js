module.exports = function (wallaby) {
  return {
    files: [
      'app/*.js'
    ],

    tests: [
      'tests/*.spec.js'
    ],
    debug: true
  };
};
