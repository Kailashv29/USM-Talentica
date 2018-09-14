export function GET(url) {
  const request = new Request(url, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return baseFetch(request);
}
export function POST(url, body) {
  const request = new Request(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: body
  });
  return baseFetch(request);
}
export function PUT(url, body) {
  const request = new Request(url, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: body
  });
  return baseFetch(request);
}
export function DELETE(url) {
  const request = new Request(url, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return baseFetch(request);
}

export function baseFetch(request) {
  return new Promise(function(resolve, reject) {
    fetch(request)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
