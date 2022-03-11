const { trips } = require("../trips.json");
const fs = require("fs");

const getAllTrips = async (req, res) => {
  try {
    let { page } = req.query;
    page = page ? page : 1;
    const allTrips = trips.slice((page - 1) * 9, page * 9);
    const totalPage = Math.ceil(trips.length / 9);
    if (page < totalPage) {
      detailPage = {
        currentPage: Number(page),
        totalPage: totalPage,
        perPage: 9,
        previousPage: page - 1 == 0 ? null : page > 0 ? page - 1 : undefined,
        nextPage: page < totalPage ? Number(page) + 1 : undefined,
      };
    } else
      detailPage = {
        currentPage: Number(page),
        totalPage: totalPage,
        perPage: 9,
        previousPage: page - 1 == 0 ? null : page > 0 ? page - 1 : undefined,
        nextPage: page < totalPage ? Number(page) + 1 : null,
      };
    return res
      .status(200)
      .json({ status: "succes", statusCode: 200, data: allTrips, detailPage });
  } catch (e) {
    return res.status(500).json({
      status: "failed",
      statusCode: 500,
      message: "Internal Server Error !",
    });
  }
};

const createTrips = async (req, res) => {
//   try {
    const { startLandMark, endLandMark, driver, orders } = req.body;
    const newTrips = {
      startLandMark,
      endLandMark,
      driver,
      orders,
    };

    const read = await fs.readFileSync("trips.json");
    let data = JSON.parse(read);
    data.trips.push(newTrips);
    data = JSON.stringify(data);
    fs.writeFileSync("trips.json", data);
    return res
      .status(201)
      .json({ status: "succes", statusCode: 201, data: newTrips });
//   } catch (e) {
//     return res.status(500).json({
//       status: "failed",
//       statusCode: 500,
//       message: "Internal Server Error !",
//     });
//   }
};

module.exports = { getAllTrips, createTrips };
