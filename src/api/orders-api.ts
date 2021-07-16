import axios from 'axios';

export const getPackBreakdown = async (
  orderQuantity: number,
): Promise<Record<string, unknown>> => {
  try {
    const result = await axios.get(
      `https://gymshark-orders-api-gklowydjeq-nw.a.run.app/get-pack-breakdown/${orderQuantity}`,
    );
    return result.data;
  } catch (err) {
    throw new Error(err);
  }
};
