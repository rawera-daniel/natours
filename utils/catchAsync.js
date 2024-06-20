module.exports = (fn) => (req, res, next) => {
  // fn(req, res, next).catch((err) => next(err)); it's the same as below
  fn(req, res, next).catch(next);
};

// function catchAsync(fn) {
//   return function (req, res, next) {
//     fn(req, res, next).catch(next);
//   };
// }
