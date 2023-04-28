export const checkError = (error) => {
    // console.log(error.response.status)
    if(error.response === undefined){
        return "Verifique sua internet!"
    }
    return error.response.data.error
  }