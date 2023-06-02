import axios from "axios";
export const deleteTour = async(id) => {
    let token = JSON.parse(localStorage.getItem("token_admin"));
    const options = {
        method: "DELETE",
        url: `${import.meta.env.VITE_BASE_URL}/product/${id}`,
        headers: {
          "auth-token": token,
        },
      };
      try {
        let deleted = await axios.request(options);
      
        if (deleted.status != 200) {
           
          throw error("error");
        }
        alert("O produto foi deletado")
      } catch (error) {
        console.log(error);
      }
}

export const patchTour = async(id,data) => {
    let token = JSON.parse(localStorage.getItem("token_admin"));
      const options = {
        method: "PATCH",
        url: `${import.meta.env.VITE_BASE_URL}/product/${id}`,
        headers: {
          "auth-token": token,
        },
        data: data
      };
      try {
        let updated = await axios.request(options);
      
        if (updated.status != 200) {
           
          throw error("error");
        }
        alert("O produto foi atualizado")
      } catch (error) {
        console.log(error);
      }

}

export const updateTour = (id) => {

}

export const createTour = () => {

}