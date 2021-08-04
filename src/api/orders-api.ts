import axios from 'axios';

export const getPackBreakdown = async (
  orderQuantity: string,
): Promise<Record<string, unknown>> => {
  try {
    const result = await axios.get(
      `https://gymshark-orders-api-go-gklowydjeq-nw.a.run.app/getPackBreakdown/${orderQuantity}`,
    );
    return result.data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(`Whoops Looks like there was an Error: ${err.response.data}`);
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
    const packSizeNum = parseInt(packSize, 10);
    const result = await axios.post(
      `https://gymshark-orders-api-go-gklowydjeq-nw.a.run.app/addPackSize`,
      { packSize: packSizeNum || packSize },
    );
    return result.data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(`Whoops Looks like there was an Error: ${err.response.data}`);
    return false;
  }
};

export const deletePackSize = async (packSize: string): Promise<boolean> => {
  try {
    const packSizeNum = parseInt(packSize, 10);
    const result = await axios.post(
      `https://gymshark-orders-api-go-gklowydjeq-nw.a.run.app/removePackSize`,
      { packSize: packSizeNum || packSize },
    );
    return result.data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(`Whoops Looks like there was an Error: ${err.response.data}`);
    return false;
  }
};
