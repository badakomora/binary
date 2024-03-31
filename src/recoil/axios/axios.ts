import axios from "axios";

  const startDate = "2023-02-23 8:30";
  const endDate = "2023-02-23 9:00";
  //
  axios
    .get(
      ` https://marketdata.tradermade.com/api/v1/tick_historical_sample/GBPUSD/${startDate}/${endDate}`,
      {
        baseURL: "",
        params: {
          api_key: "Ec3bLNFP--RjcNxY9wyy",
          format: "json",
        },
      }
    ).then(response => {console.log(response.data)})
