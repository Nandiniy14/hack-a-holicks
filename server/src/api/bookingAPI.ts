import { Express, request } from 'express';
import { getBooking, getBookings, getBookingsFromDates, postBooking } from '../requestHandlers/booking';
import { IConfiguration } from '../types/IConfiguration';

export const base = '/api/services/hackoholics';

export const bookingAPI = (app: Express, configuration: IConfiguration) => {
  app.get(`${base}/bookings`, (req, res) => {
    if(req.query.starttime != null && req.query.endtime != null){
      getBookingsFromDates(req, res, configuration);
    } else {
      getBookings(req, res, configuration);
    }
  });

  app.get(`${base}/bookings/:bookinguid`, (req, res) => {
    getBooking(req, res, configuration);
  });

  app.post(`${base}/bookings`, (req, res) => {
    postBooking(req, res, configuration);
  });
};
