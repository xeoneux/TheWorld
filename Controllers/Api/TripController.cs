using System;
using Microsoft.AspNet.Mvc;
using TheWorld.Models;

namespace TheWorld.Controllers.Api
{
    public class TripController : Controller
    {
        private IWorldRepository _repository;

        public TripController(IWorldRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("api/trips")]
        public JsonResult Get()
        {
            var results = _repository.GetAllTripsWithStops();

            return Json(results);
        }

        [HttpPost("api/trips")]
        public JsonResult Post([FromBody]Trip newTrip)
        {
            return Json(true);
        }
    }
}