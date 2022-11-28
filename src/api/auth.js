export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
    name: user.name,
    photo: user.photo,
    role: user.role,
    status: user.status,
  };

  fetch(`https://dream-watch-server.vercel.app/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("watch-token", data.token);
    });
};
