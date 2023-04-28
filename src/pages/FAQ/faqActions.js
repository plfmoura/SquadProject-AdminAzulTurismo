import axios from "axios";

export const patchDuvida = async (id, data) => {
  let token = JSON.parse(localStorage.getItem("token_admin"));
  const options = {
    method: "PATCH",
    url: `https://tourismapi.herokuapp.com/duvida/${id}`,
    headers: {
      "admin-token": token,
    },
    data: data
  };
  try {
    let updated = await axios.request(options);

    if (updated.status != 200) {
      throw error("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export const deleteDuvida = async (id) => {
  let token = JSON.parse(localStorage.getItem("token_admin"));
  let status = false
  const options = {
    method: "DELETE",
    url: `https://tourismapi.herokuapp.com/duvida/${id}`,
    headers: {
      "admin-token": token,
    },
  };

  let deleted = await axios.request(options);
  console.log(deleted)
  if (deleted.statusText !== "OK") {
    throw error(deleted);
  }
  status = true
  return status
}
