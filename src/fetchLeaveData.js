import axios from 'axios';



const fetchLeavePolicies = async (localToken, setLeavePolicies) => {
  const response = await axios.get("https://tiider-hr-tiidelab.herokuapp.com/v1/leavePolicy",
    {
      headers: {
        Authorization: `Bearer ${localToken[0].access}`,
      },
    }
  )

  try {
    let { data } = response;
    setLeavePolicies(data)
    console.log(data)
  } catch (error) {

  }
  // if(response.data.length > 0) {

  //   let {data} = response;
  //   setLeavePolicies(...data)
  //   console.log(data)
  //   console.log(response)

  // } else {
  //   setLeavePolicies(null)
  // }

  return response;
}



export default fetchLeavePolicies;