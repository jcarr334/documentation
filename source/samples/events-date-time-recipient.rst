.. code-block:: bash

  curl -s --user 'api:YOUR_API_KEY' -G \
        https://api.mailgun.net/v2/YOUR_DOMAIN_NAME/events \
        --data-urlencode begin='Fri, 3 May 2013 09:00:00 -0000' \
        --data-urlencode ascending=yes \
        --data-urlencode limit=25 \
        --data-urlencode pretty=yes \
        --data-urlencode recipient=joe@example.com

.. code-block:: java

 public static ClientResponse GetLogs() {
  Client client = new Client();
  client.addFilter(new HTTPBasicAuthFilter("api",
      "YOUR_API_KEY"));
  WebResource webResource =
      client.resource("
          https://api.mailgun.net/v2/YOUR_DOMAIN_NAME/events");
  MultivaluedMapImpl queryParams = new MultivaluedMapImpl();
  queryParams.add("begin", 50);
  queryParams.add("ascending", "yes");
  queryParams.add("limit", 1);
  queryParams.add("pretty", "yes");
  queryParams.add("recipient", "joe@example.com");
  return webResource.queryParams(queryParams).get(ClientResponse.class);
 }

.. code-block:: php


  # Include the Autoloader (see "Libraries" for install instructions)
  require 'vendor/autoload.php';
  use Mailgun\Mailgun;

  # Instantiate the client.
  $mgClient = new Mailgun('YOUR_API_KEY');
  $domain = 'YOUR_DOMAIN_NAME';
  $queryString = array(
      'begin'        => 'Fri, 3 May 2013 09:00:00 -0000',
      'ascending'    => 'yes',
      'limit'        =>  25,
      'pretty'       => 'yes',
      'subject'      => 'test'
  );

  # Make the call to the client.
  $result = $mgClient->get("$domain/events", $queryString);

.. code-block:: py

 def get_logs():
     return requests.get(
         "https://api.mailgun.net/v2/YOUR_DOMAIN_NAME/events",
         auth=("api", "YOUR_API_KEY"),
         params={"begin"       : "Fri, 3 May 2013 09:00:00 -0000",
                 "ascending"   : "yes",
                 "limit"       :  25,
                 "pretty"      : "yes",
                 "recipient" : "joe@example.com"})

.. code-block:: rb

 def get_logs
   RestClient.get "https://api:YOUR_API_KEY"\
   "@api.mailgun.net/v2/YOUR_DOMAIN_NAME/events", 
    :params => {
     :'begin'       => 'Fri, 3 May 2013 09:00:00 -0000',
     :'ascending'   => 'yes',
     :'limit'       =>  25,
     :'pretty'      => 'yes',
     :'recipient' => 'joe@example.com'
    }
 end

.. code-block:: csharp

  public static IRestResponse GetLogs() {
    RestClient client = new RestClient();
    client.BaseUrl = new Uri("https://api.mailgun.net/v2");
    client.Authenticator =
        new HttpBasicAuthenticator("api",
            "YOUR_API_KEY");
    RestRequest request = new RestRequest();
    request.AddParameter("domain",
        "YOUR_DOMAIN_NAME", ParameterType.UrlSegment);
    request.Resource = "{domain}/events";
    request.AddParameter("begin", "Fri, 3 May 2013 09:00:00 -0000");
    request.AddParameter("ascending", "yes");
    request.AddParameter("limit", 25);
    request.AddParameter("pretty", "yes");
    request.AddParameter("recipient", "joe@example.com");
    return client.Execute(request);
  }

.. code-block:: go

 func GetLog(domain, apiKey string) ([]mailgun.Event, error) {
   mg := mailgun.NewMailgun(domain, apiKey, "")
   ei := mg.NewEventIterator()
   err := ei.GetFirstPage(mailgun.GetEventsOptions{
     Begin:          time.Now().Add(-50 * Time.Minute),
     ForceAscending: true,
     Limit:          1,
     Filter:         map[string]string{
       "recipient": "joe@example.com",
     }
   })
   if err != nil {
     return nil, err
   }
   return ei.Events(), nil
 }
