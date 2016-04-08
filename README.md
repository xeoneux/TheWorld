# The World

Welcome to The World!

This application allows you to plan for trips around the world.

Feel free to clone this repository and modify it in any way you'd like.

### Tools/Frameworks
* Visual Studio 2015 (IDE)
* ASP.NET 5 (.NET Framework RC1)
* MVC 6 (Lastest version of Microsoft's port of the MVC Design Pattern)
* Web API (Now merged with MVC 6, uses HTTP verbs for HTTP Requests/Responses)
* Entity Framework 7 (Latest pre-release version of EF from Microsoft)
* Bootstrap (Version 3.3.6, for page layout)
* Font Awesome (Version 4.5, for page icons)
* Bing Maps API (To determine longitude and latitude values based on location entered)
* AngularJS (Version 1.5, for communicating with the Web API and displaying results)
* JSON (Format for transmitting and receiving data)

### Installation Instructions

In order to successfully run this web application, you must install the following:
* [Visual Studio](https://www.visualstudio.com)
* [ASP.NET Core](https://get.asp.net)

#### Check Runtime via .NET Version Manager

Once the ASP.NET 5 Framework is installed, open your command prompt and run the command `dnvm list`.

If you do not have at least Version `1.0.0-rc1-update1` with the Runtime `coreclr` and Architecture `x64`, you will need to install that version for this application to function.  You may install that version of the runtime with the following command:

`dnvm install 1.0.0-rc1-update1 -r coreclr -arch x64 -p`

(`-p` signifies to keep the version active and persistent even after the command prompt window is closed)

### Configuration Instructions

#### Bing Maps Key Creation
Once you have successfully installed the required IDE and Framework, the last requirement will be to obtain a Bing Maps Key, for use with their geolocation API.

You may create your Bing Maps Key [here](https://www.bingmapsportal.com).

#### Bing Maps Key Configuration
The Bing Maps key must be added as an environment variable on your Windows system, by performing the following steps:

1. Depending on your version of the Windows OS, search for `Environment Variables`.
2. Once the `System Properties` dialog box opens, click the `Environment Variables` button.
3. In the top section, click the `New...` button.
4. For the `Variable name` enter `AppSettings:BingMapsKey` and for the `Variable value` enter the Bing Maps Key that you created with your Bing Maps account.

### Running the application

Once everything is setup, open your command prompt and run the command `dnx web`.

When the application loads in your browser, login with the following credentials:
* Username: `johndoe`
* Password: `P@ssw0rd!`

Learn to build it using this [Pluralsight tutorial](https://www.pluralsight.com/courses/aspdotnet-5-ef7-bootstrap-angular-web-app).

