import request from 'request';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../', '.env')});

const createJsonController = endpoint => async (req, res) => {
  const lastChar = endpoint.slice(-1);
  if (lastChar !== '/') {
    endpoint = endpoint + '/';
  }
  const { id } = req.params;
  const options = {
    'method': 'GET',
    'uri': `${endpoint}${id}`,
  };
  request(options, (error, res2, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return error;
    }
    res.json(JSON.parse(body));
  });
};

const workspace = createJsonController(process.env.WORKSPACE);
const amenities = createJsonController(process.env.AMENITIES);
const transit = createJsonController(process.env.TRANSIT);
const address = createJsonController(process.env.ADDRESS);
const nearbyBuildings = createJsonController(process.env.NEARBY_BUILDINGS);
const reviews = createJsonController(process.env.REVIEWS);
const reviewInfo = createJsonController(process.env.REVIEW_INFO);
const description = createJsonController(process.env.DESCRIPTION);
const photos = createJsonController(process.env.PHOTOS);
const photosByWorkspace = createJsonController(process.env.PHOTOS_BY_WORKSPACE);

const availability = async (req, res) => {
  const { id } = req.query;
  const options = {
    'method': 'GET',
    'uri': `${process.env.AVAILABILITY}/?id=${id}`,
  };
  request(options, (error, res2, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return error;
    }
    res.json(JSON.parse(body));
  });
};

export default {
  address,
  amenities,
  availability,
  description,
  nearbyBuildings,
  photos,
  photosByWorkspace,
  reviews,
  reviewInfo,
  transit,
  workspace,
};

