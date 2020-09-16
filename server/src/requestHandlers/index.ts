import { getBooking, getBookings, getBookingsFromDates, postBooking } from './booking';
import { getDesk, getDesks, getDesksFromFloor, postDesk } from './desk';
import ping from './ping';
import { getUser, getUsers, postUser } from './user';
import { getBuilding, getBuildings, getLocation, getLocations, postLocation } from './workspace';

export default {
  getBooking,
  getBookings,
  getBookingsFromDates,
  getBuilding,
  getBuildings,
  getDesk,
  getDesks,
  getDesksFromFloor,
  getLocation,
  getLocations,
  getUser,
  getUsers,
  ping,
  postBooking,
  postDesk,
  postLocation,
  postUser,
};