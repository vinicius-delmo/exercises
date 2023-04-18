const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const t = Promise.reject(new Error("Reason for rejection..."));
p.catch((error) => console.log(error.message));
