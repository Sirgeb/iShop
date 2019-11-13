export default function(error) {
  let errorMessage;
  if (error) {
    error = error.split(":");
      errorMessage = error[1];
  }
  return errorMessage;
}
