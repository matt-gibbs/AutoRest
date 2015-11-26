/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.http;

import com.google.common.reflect.TypeToken;
import com.microsoft.rest.ServiceCallback;
import com.microsoft.rest.ServiceException;
import com.microsoft.rest.ServiceResponse;
import com.microsoft.rest.ServiceResponseBuilder;
import com.microsoft.rest.ServiceResponseCallback;
import com.microsoft.rest.ServiceResponseEmptyCallback;
import com.squareup.okhttp.ResponseBody;
import fixtures.http.models.Error;
import java.io.IOException;
import java.util.List;
import retrofit.Call;
import retrofit.Response;
import retrofit.Retrofit;

public class HttpRedirectsImpl implements HttpRedirects {
    private HttpRedirectsService service;
    AutoRestHttpInfrastructureTestService client;

    public HttpRedirectsImpl(Retrofit retrofit, AutoRestHttpInfrastructureTestService client) {
        this.service = retrofit.create(HttpRedirectsService.class);
        this.client = client;
    }

    /**
     * Return 300 status code and redirect to /http/success/200
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> head300() throws ServiceException, IOException {
        Call<Void> call = service.head300();
        return head300Delegate(call.execute(), null);
    }

    /**
     * Return 300 status code and redirect to /http/success/200
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<Void> head300Async(final ServiceCallback<Void> serviceCallback) {
        Call<Void> call = service.head300();
        call.enqueue(new ServiceResponseEmptyCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<Void> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(head300Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> head300Delegate(Response<Void> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(300, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .buildEmpty(response, retrofit);
    }

    /**
     * Return 300 status code and redirect to /http/success/200
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     * @return the List&lt;String&gt; object if successful.
     */
    public ServiceResponse<List<String>> get300() throws ServiceException, IOException {
        Call<ResponseBody> call = service.get300();
        return get300Delegate(call.execute(), null);
    }

    /**
     * Return 300 status code and redirect to /http/success/200
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> get300Async(final ServiceCallback<List<String>> serviceCallback) {
        Call<ResponseBody> call = service.get300();
        call.enqueue(new ServiceResponseCallback<List<String>>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(get300Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<List<String>> get300Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<List<String>>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(300, new TypeToken<List<String>>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Return 301 status code and redirect to /http/success/200
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> head301() throws ServiceException, IOException {
        Call<Void> call = service.head301();
        return head301Delegate(call.execute(), null);
    }

    /**
     * Return 301 status code and redirect to /http/success/200
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<Void> head301Async(final ServiceCallback<Void> serviceCallback) {
        Call<Void> call = service.head301();
        call.enqueue(new ServiceResponseEmptyCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<Void> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(head301Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> head301Delegate(Response<Void> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(301, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .buildEmpty(response, retrofit);
    }

    /**
     * Return 301 status code and redirect to /http/success/200
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> get301() throws ServiceException, IOException {
        Call<ResponseBody> call = service.get301();
        return get301Delegate(call.execute(), null);
    }

    /**
     * Return 301 status code and redirect to /http/success/200
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> get301Async(final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.get301();
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(get301Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> get301Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(301, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Put true Boolean value in request returns 301.  This request should not be automatically redirected, but should return the received 301 to the caller for evaluation
     *
     * @param booleanValue Simple boolean value true
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> put301(Boolean booleanValue) throws ServiceException, IOException {
        Call<ResponseBody> call = service.put301(booleanValue);
        return put301Delegate(call.execute(), null);
    }

    /**
     * Put true Boolean value in request returns 301.  This request should not be automatically redirected, but should return the received 301 to the caller for evaluation
     *
     * @param booleanValue Simple boolean value true
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> put301Async(Boolean booleanValue, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.put301(booleanValue);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(put301Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> put301Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(301, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Return 302 status code and redirect to /http/success/200
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> head302() throws ServiceException, IOException {
        Call<Void> call = service.head302();
        return head302Delegate(call.execute(), null);
    }

    /**
     * Return 302 status code and redirect to /http/success/200
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<Void> head302Async(final ServiceCallback<Void> serviceCallback) {
        Call<Void> call = service.head302();
        call.enqueue(new ServiceResponseEmptyCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<Void> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(head302Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> head302Delegate(Response<Void> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(302, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .buildEmpty(response, retrofit);
    }

    /**
     * Return 302 status code and redirect to /http/success/200
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> get302() throws ServiceException, IOException {
        Call<ResponseBody> call = service.get302();
        return get302Delegate(call.execute(), null);
    }

    /**
     * Return 302 status code and redirect to /http/success/200
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> get302Async(final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.get302();
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(get302Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> get302Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(302, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Patch true Boolean value in request returns 302.  This request should not be automatically redirected, but should return the received 302 to the caller for evaluation
     *
     * @param booleanValue Simple boolean value true
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> patch302(Boolean booleanValue) throws ServiceException, IOException {
        Call<ResponseBody> call = service.patch302(booleanValue);
        return patch302Delegate(call.execute(), null);
    }

    /**
     * Patch true Boolean value in request returns 302.  This request should not be automatically redirected, but should return the received 302 to the caller for evaluation
     *
     * @param booleanValue Simple boolean value true
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> patch302Async(Boolean booleanValue, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.patch302(booleanValue);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(patch302Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> patch302Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(302, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code
     *
     * @param booleanValue Simple boolean value true
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> post303(Boolean booleanValue) throws ServiceException, IOException {
        Call<ResponseBody> call = service.post303(booleanValue);
        return post303Delegate(call.execute(), null);
    }

    /**
     * Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code
     *
     * @param booleanValue Simple boolean value true
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> post303Async(Boolean booleanValue, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.post303(booleanValue);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(post303Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> post303Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(303, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Redirect with 307, resulting in a 200 success
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> head307() throws ServiceException, IOException {
        Call<Void> call = service.head307();
        return head307Delegate(call.execute(), null);
    }

    /**
     * Redirect with 307, resulting in a 200 success
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<Void> head307Async(final ServiceCallback<Void> serviceCallback) {
        Call<Void> call = service.head307();
        call.enqueue(new ServiceResponseEmptyCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<Void> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(head307Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> head307Delegate(Response<Void> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(307, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .buildEmpty(response, retrofit);
    }

    /**
     * Redirect get with 307, resulting in a 200 success
     *
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> get307() throws ServiceException, IOException {
        Call<ResponseBody> call = service.get307();
        return get307Delegate(call.execute(), null);
    }

    /**
     * Redirect get with 307, resulting in a 200 success
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> get307Async(final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.get307();
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(get307Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> get307Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(307, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Put redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> put307(Boolean booleanValue) throws ServiceException, IOException {
        Call<ResponseBody> call = service.put307(booleanValue);
        return put307Delegate(call.execute(), null);
    }

    /**
     * Put redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> put307Async(Boolean booleanValue, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.put307(booleanValue);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(put307Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> put307Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(307, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Patch redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> patch307(Boolean booleanValue) throws ServiceException, IOException {
        Call<ResponseBody> call = service.patch307(booleanValue);
        return patch307Delegate(call.execute(), null);
    }

    /**
     * Patch redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> patch307Async(Boolean booleanValue, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.patch307(booleanValue);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(patch307Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> patch307Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(307, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Post redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> post307(Boolean booleanValue) throws ServiceException, IOException {
        Call<ResponseBody> call = service.post307(booleanValue);
        return post307Delegate(call.execute(), null);
    }

    /**
     * Post redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> post307Async(Boolean booleanValue, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.post307(booleanValue);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(post307Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> post307Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(307, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Delete redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @throws ServiceException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     */
    public ServiceResponse<Void> delete307(Boolean booleanValue) throws ServiceException, IOException {
        Call<ResponseBody> call = service.delete307(booleanValue);
        return delete307Delegate(call.execute(), null);
    }

    /**
     * Delete redirected with 307, resulting in a 200 after redirect
     *
     * @param booleanValue Simple boolean value true
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> delete307Async(Boolean booleanValue, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.delete307(booleanValue);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(delete307Delegate(response, retrofit));
                } catch (ServiceException | IOException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> delete307Delegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException, IOException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .register(307, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

}
