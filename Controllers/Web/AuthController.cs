using Microsoft.AspNet.Mvc;

namespace TheWorld.Controllers.Web
{
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                RedirectToAction("Trips", "App");
            }

            return View();
        }
    }
}