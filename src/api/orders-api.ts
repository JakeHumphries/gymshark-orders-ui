import axios from 'axios';

export const getPackBreakdown = async (
  orderQuantity: string,
): Promise<Record<string, unknown>> => {
  try {
    const result = await axios.get(
      `https://gymshark-orders-api-gklowydjeq-nw.a.run.app/get-pack-breakdown/${orderQuantity}`,
    );
    return result.data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(
      `Whoops Looks like there was an Error${
        err.response.data.split(`<br>`)[0].split(`Error`)[2]
      }`,
    );
    return {
      250: 0,
      500: 0,
      1000: 0,
      2000: 0,
      5000: 0,
    };
  }
};

export const addPackSize = async (packSize: string): Promise<boolean> => {
  try {
    const result = await axios.post(
      `https://gymshark-orders-api-gklowydjeq-nw.a.run.app/add-pack-size`,
      { packSize },
    );
    return result.data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(
      `Whoops Looks like there was an Error${
        err.response.data.split(`<br>`)[0].split(`Error`)[2]
      }`,
    );
    return false;
  }
  return true;
};

export const deletePackSize = async (packSize: string): Promise<boolean> => {
  try {
    console.log(`in api`, packSize);
    const result = await axios.post(
      `https://gymshark-orders-api-gklowydjeq-nw.a.run.app/delete-pack-size`,
      { packSize },
    );
    return result.data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(
      `Whoops Looks like there was an Error${
        err.response.data.split(`<br>`)[0].split(`Error`)[2]
      }`,
    );
  }
  return true;
};
