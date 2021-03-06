##2015.12.14 Version 0.13.0
* Added support for flattening body parameters when the number of properties is small (controlled via -ft parameter)
* Implemented support for strongly typed response headers
* Updated Microsoft.Rest.Azure.Authentication to support CoreClr
* Updated autorest.exe with aliases (e.g. -i for input, -o for output, -g for code generation)
* Added custom exception support in C# generator
* Added custom polymorphic discriminator support (x-ms-discriminator-value)
* Added method parameter grouping via x-ms-parameter-grouping extension (#381)
* Added support for decimal type (#83)
* Changed generated C# code does not depend on JsonConvert (#372)
* Changed generated C# code to make variables not clash with parameters (#309)
* Changed service interface in C# to implement IDisposable (#278)
* Added TypeScript support to NodeJS generator
* Added support for default values in methods parameters and model properties for NodeJS
* Added support for validation of method parameters and model properties for NodeJS
* Improved Parameter documentation for methods in NodeJS
* Updated Azure NodeJS and C# code generator with odata support and Resource Flattening
* Bug fixes and to all code generators (#415, #419, #426, #447, #463, #491, #493, #497)
  
##2015.10.23 Version 0.12.0
* Added Ruby language support
* Implemented validation in C#
* Added support for duration and decimal data types
* Added support for dotnet (CoreClr) to Microsoft.Rest.ClientRuntime and Microsoft.Rest.ClientRuntime.Azure
* Bug fixes and improvements to all code generators (#255, #282, #291, #293, #294, #336, #348, #349, #350, #352, #363, #373, #374, #375, #377, #390, #395, #398, #399, #402)

##2015.08.05 Version 0.11.0
* Added Azure C# and Azure NodeJS client runtimes and code generators
* Bug fixes for C# and NodeJS code generators (#272, #260, #229, #246, #245, #239, #237, #230, #229, #217, #209, #206, #195, #194)

##2015.07.10 Version 0.10.0
* Improved C# Client Runtime and Code Generator
    * Changed serialization implementation to use Newtonsoft.Json.Net library
    * Fixed bugs
* Added NodeJS Client Runtime and Code Generator

##2015.03.27 Version 0.9.7
* Initial release of the C# Client Runtime 
* Initial release of the code generator with support for C# 
