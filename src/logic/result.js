
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

function nodeCallback(cb) {
  return function(result) {
    if(result.success) {
      cb(null, result);
    } else {
      cb(result);
    }
  };
}

module.exports = {
  success : success,
  fail : fail,
  result : result,
  nodeCallback : nodeCallback
};
