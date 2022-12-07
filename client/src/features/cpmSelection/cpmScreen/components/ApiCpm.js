const CpmUrl = "http://localhost:8000/cpms";

export function getCpms() {
  return fetch(CpmUrl)
    .then((res) => res.json())
    .then(
      (result) => {
        return result.result;
      },
      (error) => {
        return error;
      }
    );
}
