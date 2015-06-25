// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

namespace Microsoft.Rest.Generator.Ruby.Templates
{
#line 1 "MethodTemplate.cshtml"
using System.Linq;

#line default
#line hidden
#line 2 "MethodTemplate.cshtml"
using Microsoft.Rest.Generator.ClientModel

#line default
#line hidden
    ;
#line 3 "MethodTemplate.cshtml"
using Microsoft.Rest.Generator.Ruby.TemplateModels

#line default
#line hidden
    ;
    using System.Threading.Tasks;

    public class MethodTemplate : Microsoft.Rest.Generator.Template<Microsoft.Rest.Generator.Ruby.MethodTemplateModel>
    {
        #line hidden
        public MethodTemplate()
        {
        }

        #pragma warning disable 1998
        public override async Task ExecuteAsync()
        {
            WriteLiteral("#\r\n");
#line 7 "MethodTemplate.cshtml"
Write(WrapComment("# ", Model.Documentation));

#line default
#line hidden
            WriteLiteral("\r\n");
#line 8 "MethodTemplate.cshtml"
 foreach (var parameter in Model.Parameters)
{

#line default
#line hidden

#line 10 "MethodTemplate.cshtml"
Write(WrapComment("# ", string.Format("@param {0} {1}{2}", parameter.Name, parameter.Type.GetYardDocumentation(), parameter.Documentation)));

#line default
#line hidden
            WriteLiteral("\r\n");
#line 11 "MethodTemplate.cshtml"
}

#line default
#line hidden

#line 12 "MethodTemplate.cshtml"
Write(WrapComment("# ", string.Format("@return [{0}] Promise object which allows to get HTTP response.", "Concurrent::Promise")));

#line default
#line hidden
            WriteLiteral("\r\n#\r\ndef ");
#line 14 "MethodTemplate.cshtml"
Write(Model.Name);

#line default
#line hidden
            WriteLiteral("(");
#line 14 "MethodTemplate.cshtml"
              Write(Model.MethodParameterDeclaration);

#line default
#line hidden
            WriteLiteral(")\r\n");
#line 15 "MethodTemplate.cshtml"
  

#line default
#line hidden

#line 15 "MethodTemplate.cshtml"
   foreach (var parameter in Model.LocalParameters)
  {
    if (parameter.IsRequired && parameter.Type.IsNullable())
    {

#line default
#line hidden

            WriteLiteral("  # fail ArgumentError, \'");
#line 19 "MethodTemplate.cshtml"
                      Write(parameter.Name);

#line default
#line hidden
            WriteLiteral(" is nil\' if ");
#line 19 "MethodTemplate.cshtml"
                                                  Write(parameter.Name);

#line default
#line hidden
            WriteLiteral(".nil?\r\n  \r\n");
#line 21 "MethodTemplate.cshtml"
    }

#line default
#line hidden

            WriteLiteral("  ");
#line 22 "MethodTemplate.cshtml"
Write(parameter.Type.ValidateType(Model.Scope, parameter.Name));

#line default
#line hidden
            WriteLiteral("\r\n");
#line 23 "MethodTemplate.cshtml"
  }

#line default
#line hidden

            WriteLiteral("  ");
#line 24 "MethodTemplate.cshtml"
   if (Model.LocalParameters.Any(p => p.IsRequired))
  {
  

#line default
#line hidden

#line 26 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
#line 26 "MethodTemplate.cshtml"
            
  }

#line default
#line hidden

            WriteLiteral("\r\n  # Construct URL\r\n");
#line 30 "MethodTemplate.cshtml"
  

#line default
#line hidden

#line 30 "MethodTemplate.cshtml"
   if (Model.UrlWithPath)
  {

#line default
#line hidden

            WriteLiteral("  path = \'/");
#line 32 "MethodTemplate.cshtml"
         Write(Model.UrlWithoutParameters.TrimStart('/'));

#line default
#line hidden
            WriteLiteral("\'\r\n  ");
#line 33 "MethodTemplate.cshtml"
Write(Model.BuildUrlPath("path"));

#line default
#line hidden
            WriteLiteral("\r\n  url = URI.join(");
#line 34 "MethodTemplate.cshtml"
               Write(Model.UrlReference);

#line default
#line hidden
            WriteLiteral(", path)\r\n");
#line 35 "MethodTemplate.cshtml"
  }
  else
  {

#line default
#line hidden

            WriteLiteral("  url = URI.join(");
#line 38 "MethodTemplate.cshtml"
               Write(Model.UrlReference);

#line default
#line hidden
            WriteLiteral(", \'/");
#line 38 "MethodTemplate.cshtml"
                                        Write(Model.UrlWithoutParameters.TrimStart('/'));

#line default
#line hidden
            WriteLiteral("\')\r\n");
#line 39 "MethodTemplate.cshtml"
  }

#line default
#line hidden

            WriteLiteral("  ");
#line 40 "MethodTemplate.cshtml"
Write(Model.BuildUrlParametres("url"));

#line default
#line hidden
            WriteLiteral("\r\n\r\n  ");
#line 42 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
            WriteLiteral("\r\n  # Create HTTP transport objects\r\n  http_request = Net::HTTP::");
#line 44 "MethodTemplate.cshtml"
                        Write(Model.HttpMethod.ToString());

#line default
#line hidden
            WriteLiteral(".new(url.request_uri)\r\n\r\n");
#line 46 "MethodTemplate.cshtml"
  

#line default
#line hidden

#line 46 "MethodTemplate.cshtml"
   if (Model.Parameters.Any(p => p.Location == ParameterLocation.Header))
  {
  

#line default
#line hidden

#line 48 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
#line 48 "MethodTemplate.cshtml"
            

#line default
#line hidden

            WriteLiteral("  # Set Headers\r\n");
#line 50 "MethodTemplate.cshtml"
    foreach (var parameter in Model.Parameters.Where(p => p.Location == ParameterLocation.Header))
    {

#line default
#line hidden

            WriteLiteral("  http_request.add_field(\"");
#line 52 "MethodTemplate.cshtml"
                        Write(parameter.SerializedName);

#line default
#line hidden
            WriteLiteral("\", ");
#line 52 "MethodTemplate.cshtml"
                                                     Write(parameter.Type.ToString(parameter.Name));

#line default
#line hidden
            WriteLiteral(");\r\n");
#line 53 "MethodTemplate.cshtml"
    }
  }

#line default
#line hidden

            WriteLiteral("\r\n");
#line 56 "MethodTemplate.cshtml"
  

#line default
#line hidden

#line 56 "MethodTemplate.cshtml"
   if (Model.RequestBody != null)
  {
  

#line default
#line hidden

#line 58 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
#line 58 "MethodTemplate.cshtml"
            

#line default
#line hidden

            WriteLiteral("  # Serialize Request\r\n  http_request.add_field(\'Content-Type\', \'application/json" +
"\')\r\n  ");
#line 61 "MethodTemplate.cshtml"
Write(Model.CreateSerializationString(Model.RequestBody.Name, Model.RequestBody.Type, "http_request.body", Settings.Namespace));

#line default
#line hidden
            WriteLiteral("\r\n");
#line 62 "MethodTemplate.cshtml"
  }

#line default
#line hidden

            WriteLiteral("\r\n  ");
#line 64 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
            WriteLiteral("\r\n  # Send Request\r\n  promise = Concurrent::Promise.new { ");
#line 66 "MethodTemplate.cshtml"
                                  Write(Model.MakeRequestMethodReference);

#line default
#line hidden
            WriteLiteral("(http_request, url) }\r\n\r\n  ");
#line 68 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
            WriteLiteral("\r\n  promise = promise.then do |http_response|\r\n    status_code = http_response.co" +
"de.to_i\r\n    response_content = http_response.body\r\n    unless (");
#line 72 "MethodTemplate.cshtml"
       Write(Model.SuccessStatusCodePredicate);

#line default
#line hidden
            WriteLiteral(")\r\n");
#line 73 "MethodTemplate.cshtml"
      

#line default
#line hidden

#line 73 "MethodTemplate.cshtml"
       if (Model.DefaultResponse != null)
      {

#line default
#line hidden

            WriteLiteral("      error_model = JSON.parse(response_content)\r\n      fail ClientRuntime::HttpO" +
"perationException.new(http_request, http_response, error_model)\r\n");
#line 77 "MethodTemplate.cshtml"
      }
      else
      {

#line default
#line hidden

            WriteLiteral("      fail ClientRuntime::HttpOperationException.new(http_request, http_response)" +
"\r\n");
#line 81 "MethodTemplate.cshtml"
      }

#line default
#line hidden

            WriteLiteral("    end\r\n\r\n    ");
#line 84 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
            WriteLiteral("\r\n    # Create Result\r\n    result = ClientRuntime::HttpOperationResponse.new(http" +
"_request, http_response)\r\n\r\n");
#line 88 "MethodTemplate.cshtml"
    

#line default
#line hidden

#line 88 "MethodTemplate.cshtml"
     foreach (var responsePair in Model.Responses.Where(r => r.Value != null && r.Value.IsSerializable()))
    {

#line default
#line hidden

            WriteLiteral("    \r\n    # Deserialize Response\r\n    if status_code == ");
#line 92 "MethodTemplate.cshtml"
                 Write(Model.GetStatusCodeReference(responsePair.Key));

#line default
#line hidden
            WriteLiteral("\r\n      begin\r\n        ");
#line 94 "MethodTemplate.cshtml"
    Write(Model.CreateDeserializationString("response_content", Model.ReturnType, "result.body", Settings.Namespace));

#line default
#line hidden
            WriteLiteral("\r\n      rescue Exception => e\r\n        fail ClientRuntime::DeserializationError.n" +
"ew(\"Error occured in deserializing the response\", e.message, e.backtrace, respon" +
"se_content)\r\n      end\r\n\r\n      result\r\n    end\r\n    \r\n");
#line 102 "MethodTemplate.cshtml"
    }

#line default
#line hidden

            WriteLiteral("\r\n");
#line 104 "MethodTemplate.cshtml"
    

#line default
#line hidden

#line 104 "MethodTemplate.cshtml"
     if (Model.ReturnType != null && Model.DefaultResponse != null && !Model.Responses.Any() && Model.DefaultResponse.IsSerializable())
    {

#line default
#line hidden

            WriteLiteral("    \r\n    begin\r\n      ");
#line 108 "MethodTemplate.cshtml"
  Write(Model.CreateDeserializationString("response_content", Model.ReturnType, "result.body", Settings.Namespace));

#line default
#line hidden
            WriteLiteral("\r\n    rescue Exception => e\r\n      fail ClientRuntime::DeserializationError.new(\"" +
"Error occured in deserializing the response\", e.message, e.backtrace, response_c" +
"ontent)\r\n       end\r\n \r\n    result\r\n    \r\n");
#line 115 "MethodTemplate.cshtml"
    }

#line default
#line hidden

            WriteLiteral("  end\r\n\r\n  ");
#line 118 "MethodTemplate.cshtml"
Write(EmptyLine);

#line default
#line hidden
            WriteLiteral("\r\n  promise.execute\r\nend\r\n");
        }
        #pragma warning restore 1998
    }
}