import { Cashfree } from "cashfree-pg";

export const createOrder = async (req, res) => {
  try {
    var request = {
      order_amount: 101.0,
      order_currency: "INR",
      order_id: `order_${Date.now()}`,
      customer_details: {
        customer_id: "walterwNrcMi",
        customer_phone: "7903255468",
      },
    };
    Cashfree.PGCreateOrder("2023-08-01", request)
      .then((response) => {
        console.log("Order Created successfully:", response.data);
        res.status(200).json({
          message: "Order Created successfully",
          data: response.data,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Error",
          data: error.response.data,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const verfiyOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    Cashfree.PGOrderFetchPayments("2023-08-01", orderId)
      .then((response) => {
        res.status(200).json({
          message: "Order fetched successfully",
          data: response.data,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Error",
          data: error,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
