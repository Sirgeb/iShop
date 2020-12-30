function formatError(error) {
  let errorMessage;
  if (error) {
    error = error.split(":");
      errorMessage = error[1];
  }
  return errorMessage;
}

export default formatError;
