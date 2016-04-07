using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace TheWorld.Services
{
    public class CoordService
    {
        private ILogger<CoordService> _logger;

        public CoordService(ILogger<CoordService> logger)
        {
            _logger = logger;
        }

        public async Task<CoordServiceResult> Lookup(string Location)
        {
            var result = new CoordServiceResult()
            {
                Success = false,
                Message = "Undetermined failure while looking up coordinates"
            };

            var encodedName = WebUtility.UrlEncode(Location);
            var bingMapsKey = Startup.Configuration["AppSettings:BingMapsKey"];
            var url = $"http://dev.virtualearth.net/REST/v1/Locations?q={encodedName}&key={bingMapsKey}";

            var client = new HttpClient();
            var json = await client.GetStringAsync(url);
            return result;
        }
    }
}