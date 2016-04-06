using System;
using System.Collections.Generic;
using System.Linq;

namespace TheWorld.Models
{
    public class WorldContextSeedData
    {
        private WorldContext _context;

        public WorldContextSeedData(WorldContext context)
        {
            _context = context;
        }

        public void EnsureSeedData()
        {
            if (!_context.Trips.Any())
            {
                var indiaTrip = new Trip()
                {
                    Name = "India Trip",
                    Created = DateTime.UtcNow,
                    UserName = "",
                    Stops = new List<Stop>()
                    {
                        new Stop() { Name = "Pune", Arrival = new DateTime(2016, 6, 3), Latitude = 18.52522, Longitude = 73.84863, Order = 0 },
                        new Stop() { Name = "Delhi", Arrival = new DateTime(2016, 6, 4), Latitude = 28.64321, Longitude = 77.11578, Order = 1 },
                        new Stop() { Name = "Mumbai", Arrival = new DateTime(2016, 6, 5), Latitude = 18.94880, Longitude = 72.83056, Order = 2 }
                    }
                };

                _context.Trips.Add(indiaTrip);
                _context.Stops.AddRange(indiaTrip.Stops);

                var worldTrip = new Trip()
                {
                    Name = "World Trip",
                    Created = DateTime.UtcNow,
                    UserName = "",
                    Stops = new List<Stop>()
                    {
                        new Stop() { Name = "Paris", Arrival = new DateTime(2016, 7, 4), Latitude = 48.856614, Longitude = 02.352222, Order = 1 },
                        new Stop() { Name = "London", Arrival = new DateTime(2016, 8, 5), Latitude = 51.507351, Longitude = -0.127758, Order = 2 },
                        new Stop() { Name = "Bahamas", Arrival = new DateTime(2016, 9, 6), Latitude = 25.034280, Longitude = -77.396280, Order = 2 }
                    }
                };

                _context.Trips.Add(indiaTrip);
                _context.Stops.AddRange(indiaTrip.Stops);

                _context.SaveChanges();
            }
        }
    }
}