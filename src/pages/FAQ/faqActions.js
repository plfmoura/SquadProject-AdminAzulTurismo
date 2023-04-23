import axios from "axios";

let token = JSON.parse(localStorage.getItem("token_admin"));

export const patchDuvida = async(id,data) => {
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
        alert("A resposta foi conclúida")
      } catch (error) {
        console.log(error);
      }
}

export const deleteDuvida = async (id) => {
  const options = {
    method: "DELETE",
    url: `https://tourismapi.herokuapp.com/duvida/${id}`,
    headers: {
      "admin-token": token,
    },
  };
  try {
    let deleted = await axios.request(options);
  
    if (deleted.status != 200) {
      throw error("error");
    }
    alert("A resposta foi apagada")
  } catch (error) {
    console.log(error);
  }
}
