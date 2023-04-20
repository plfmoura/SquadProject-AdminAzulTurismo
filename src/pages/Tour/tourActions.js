import axios from "axios";
export const deleteTour = async(id) => {
    let token = JSON.parse(localStorage.getItem("token_admin"));
    const options = {
        method: "DELETE",
        url: `https://tourismapi.herokuapp.com/products/${id}`,
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

export const updateTour = (id) => {

}

export const createTour = () => {

}