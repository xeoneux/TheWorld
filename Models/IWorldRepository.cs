using System.Collections.Generic;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();

        IEnumerable<Trip> GetAllTripsWithStops();
        void AddTrip(Trip newTrip);
        bool SaveAll();
        Trip GetTripWithName(string tripName);
        void AddStop(string tripName, Stop newStop);
        IEnumerable<Trip> GetUserTripsWithStops(string name);
    }
}