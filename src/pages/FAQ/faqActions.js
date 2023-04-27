import axios from "axios";

let token = JSON.parse(localStorage.getItem("token_admin"));

export const patchDuvida = async (id, data) => {
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
  let status = false
  const options = {
    method: "DELETE",
    url: `https://tourismapi.herokuapp.com/duvida/${id}`,
    headers: {
      "admin-token": token,
    },
  };
  try {
    let deleted = await axios.request(options);
    console.log(deleted)
    if (deleted.status != 200) {
      throw error("error");
    }
    status = true
  } catch (error) {
    console.log(error);
  }
  return status
}
