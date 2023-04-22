import axios from "axios";

export const patchDuvida = async(id,data) => {
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
        alert("A resposta foi conclúida")
      } catch (error) {
        console.log(error);
      }
}
