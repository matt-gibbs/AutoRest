/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.resourceflattening;

import com.microsoft.rest.credentials.ServiceClientCredentials;
import java.math.BigDecimal;
import com.microsoft.rest.ServiceCallback;
import com.microsoft.rest.ServiceException;
import com.microsoft.rest.ServiceResponseCallback;
import com.squareup.okhttp.ResponseBody;
import retrofit.Call;
import java.util.List;
import java.util.Map;
import fixtures.resourceflattening.models.ResourceCollection;
import fixtures.resourceflattening.models.Resource;
import fixtures.resourceflattening.models.FlattenedProduct;
import retrofit.http.PUT;
import retrofit.http.Body;
import retrofit.http.Header;
import retrofit.http.GET;

/**
 * The interface for AutoRestResourceFlatteningTestService class.
 */
public interface AutoRestResourceFlatteningTestService {
    /**
     * Gets the URI used as the base for all cloud service requests.
     * @return The BaseUri value.
     */
    String getBaseUri();

    /**
     * Gets The management credentials for Azure..
     *
     * @return the credentials value.
     */
    ServiceClientCredentials getCredentials();

    /**
     * Gets Gets or sets the preferred language for the response..
     *
     * @return the acceptLanguage value.
     */
    String getAcceptLanguage();

    /**
     * Sets Gets or sets the preferred language for the response..
     *
     * @param acceptLanguage the acceptLanguage value.
     */
    void setAcceptLanguage(String acceptLanguage);

    /**
     * Gets The retry timeout for Long Running Operations..
     *
     * @return the longRunningOperationRetryTimeout value.
     */
    int getLongRunningOperationRetryTimeout();

    /**
     * Sets The retry timeout for Long Running Operations..
     *
     * @param longRunningOperationRetryTimeout the longRunningOperationRetryTimeout value.
     */
    void setLongRunningOperationRetryTimeout(int longRunningOperationRetryTimeout);

    /**
     * The interface defining all the services for AutoRestResourceFlatteningTestService to be
     * used by Retrofit to perform actually REST calls.
     */
    interface AutoRestResourceFlatteningTestServiceService {
        @PUT("/azure/resource-flatten/array")
        Call<ResponseBody> putArray(@Body List<Resource> resourceArray, @Header("accept-language") String acceptLanguage);

        @GET("/azure/resource-flatten/array")
        Call<ResponseBody> getArray(@Header("accept-language") String acceptLanguage);

        @PUT("/azure/resource-flatten/dictionary")
        Call<ResponseBody> putDictionary(@Body Map<String, FlattenedProduct> resourceDictionary, @Header("accept-language") String acceptLanguage);

        @GET("/azure/resource-flatten/dictionary")
        Call<ResponseBody> getDictionary(@Header("accept-language") String acceptLanguage);

        @PUT("/azure/resource-flatten/resourcecollection")
        Call<ResponseBody> putResourceCollection(@Body ResourceCollection resourceComplexObject, @Header("accept-language") String acceptLanguage);

        @GET("/azure/resource-flatten/resourcecollection")
        Call<ResponseBody> getResourceCollection(@Header("accept-language") String acceptLanguage);

    }

    /**
     * Put External Resource as an Array
     *
     * @param resourceArray External Resource as an Array to put
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    void putArray(List<Resource> resourceArray) throws ServiceException;

    /**
     * Put External Resource as an Array
     *
     * @param resourceArray External Resource as an Array to put
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> putArrayAsync(List<Resource> resourceArray, final ServiceCallback<Void> serviceCallback);
    /**
     * Get External Resource as an Array
     *
     * @return the List&lt;FlattenedProduct&gt; object if successful.
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    List<FlattenedProduct> getArray() throws ServiceException;

    /**
     * Get External Resource as an Array
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> getArrayAsync(final ServiceCallback<List<FlattenedProduct>> serviceCallback);
    /**
     * Put External Resource as a Dictionary
     *
     * @param resourceDictionary External Resource as a Dictionary to put
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    void putDictionary(Map<String, FlattenedProduct> resourceDictionary) throws ServiceException;

    /**
     * Put External Resource as a Dictionary
     *
     * @param resourceDictionary External Resource as a Dictionary to put
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> putDictionaryAsync(Map<String, FlattenedProduct> resourceDictionary, final ServiceCallback<Void> serviceCallback);
    /**
     * Get External Resource as a Dictionary
     *
     * @return the Map&lt;String, FlattenedProduct&gt; object if successful.
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    Map<String, FlattenedProduct> getDictionary() throws ServiceException;

    /**
     * Get External Resource as a Dictionary
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> getDictionaryAsync(final ServiceCallback<Map<String, FlattenedProduct>> serviceCallback);
    /**
     * Put External Resource as a ResourceCollection
     *
     * @param resourceComplexObject External Resource as a ResourceCollection to put
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    void putResourceCollection(ResourceCollection resourceComplexObject) throws ServiceException;

    /**
     * Put External Resource as a ResourceCollection
     *
     * @param resourceComplexObject External Resource as a ResourceCollection to put
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> putResourceCollectionAsync(ResourceCollection resourceComplexObject, final ServiceCallback<Void> serviceCallback);
    /**
     * Get External Resource as a ResourceCollection
     *
     * @return the ResourceCollection object if successful.
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    ResourceCollection getResourceCollection() throws ServiceException;

    /**
     * Get External Resource as a ResourceCollection
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> getResourceCollectionAsync(final ServiceCallback<ResourceCollection> serviceCallback);

}
