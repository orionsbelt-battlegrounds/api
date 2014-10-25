
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

module.exports = {
  success : success,
  result : result
};
