export const getData = async (query2) => {
  /*** Fetching data -> refactor into module later ***/
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const query1 = 'voeding en';
  const key = '5435f79af84de7a653b629959402ca2a';
  const secret = '4289fec4e962a33118340c888699438d';
  const detail = 'Default';

  const url = `${cors}${endpoint}${query1} ${query2} &authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`
  };

  try{
    const response = await fetch(url, config)
    const data = await response.json()
    return await data
  }
  catch (err){
    console.log(err)
  }


  // fetch(url, config)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data)
  //     return data;
  //   })
  //   .catch(err => {
  //     console.log(err);
  // });
}