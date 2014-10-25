
function result(succeeded, data, msg) {
  return {
    success : succeeded == true,
    data : data,
    message : msg
  };
}

function success(data) {
  return result(true, data);
}

function fail(msg) {
  return result(false, {}, msg)
}

module.exports = {
  success : success,
  fail : fail,
  result : result
};
