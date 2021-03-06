/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.azureparametergrouping;

import com.microsoft.rest.ServiceCallback;
import com.microsoft.rest.ServiceResponse;
import com.squareup.okhttp.ResponseBody;
import fixtures.azureparametergrouping.models.ErrorException;
import fixtures.azureparametergrouping.models.FirstParameterGroup;
import fixtures.azureparametergrouping.models.ParameterGroupingPostMultipleParameterGroupsSecondParameterGroup;
import fixtures.azureparametergrouping.models.ParameterGroupingPostOptionalParameters;
import fixtures.azureparametergrouping.models.ParameterGroupingPostRequiredParameters;
import java.io.IOException;
import retrofit.Call;
import retrofit.http.Body;
import retrofit.http.Header;
import retrofit.http.Path;
import retrofit.http.POST;
import retrofit.http.Query;

/**
 * An instance of this class provides access to all the operations defined
 * in ParameterGroupingOperations.
 */
public interface ParameterGroupingOperations {
    /**
     * The interface defining all the services for ParameterGroupingOperations to be
     * used by Retrofit to perform actually REST calls.
     */
    interface ParameterGroupingService {
        @POST("/parameterGrouping/postRequired/{path}")
        Call<ResponseBody> postRequired(@Path("path") String path, @Header("accept-language") String acceptLanguage, @Body int body, @Header("customHeader") String customHeader, @Query("query") int query);

        @POST("/parameterGrouping/postOptional")
        Call<ResponseBody> postOptional(@Header("accept-language") String acceptLanguage, @Header("customHeader") String customHeader, @Query("query") int query);

        @POST("/parameterGrouping/postMultipleParameterGroups")
        Call<ResponseBody> postMultipleParameterGroups(@Header("accept-language") String acceptLanguage, @Header("header-one") String headerOne, @Query("query-one") int queryOne, @Header("header-two") String headerTwo, @Query("query-two") int queryTwo);

        @POST("/parameterGrouping/sharedParameterGroupObject")
        Call<ResponseBody> postSharedParameterGroupObject(@Header("accept-language") String acceptLanguage, @Header("header-one") String headerOne, @Query("query-one") int queryOne);

    }
    /**
     * Post a bunch of required parameters grouped.
     *
     * @param parameterGroupingPostRequiredParameters Additional parameters for the operation
     * @throws ErrorException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     * @throws IllegalArgumentException exception thrown from invalid parameters
     * @return the ServiceResponse object if successful.
     */
    ServiceResponse<Void> postRequired(ParameterGroupingPostRequiredParameters parameterGroupingPostRequiredParameters) throws ErrorException, IOException, IllegalArgumentException;

    /**
     * Post a bunch of required parameters grouped.
     *
     * @param parameterGroupingPostRequiredParameters Additional parameters for the operation
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> postRequiredAsync(ParameterGroupingPostRequiredParameters parameterGroupingPostRequiredParameters, final ServiceCallback<Void> serviceCallback);

    /**
     * Post a bunch of optional parameters grouped.
     *
     * @param parameterGroupingPostOptionalParameters Additional parameters for the operation
     * @throws ErrorException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     * @return the ServiceResponse object if successful.
     */
    ServiceResponse<Void> postOptional(ParameterGroupingPostOptionalParameters parameterGroupingPostOptionalParameters) throws ErrorException, IOException;

    /**
     * Post a bunch of optional parameters grouped.
     *
     * @param parameterGroupingPostOptionalParameters Additional parameters for the operation
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> postOptionalAsync(ParameterGroupingPostOptionalParameters parameterGroupingPostOptionalParameters, final ServiceCallback<Void> serviceCallback);

    /**
     * Post parameters from multiple different parameter groups.
     *
     * @param firstParameterGroup Additional parameters for the operation
     * @param parameterGroupingPostMultipleParameterGroupsSecondParameterGroup Additional parameters for the operation
     * @throws ErrorException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     * @return the ServiceResponse object if successful.
     */
    ServiceResponse<Void> postMultipleParameterGroups(FirstParameterGroup firstParameterGroup, ParameterGroupingPostMultipleParameterGroupsSecondParameterGroup parameterGroupingPostMultipleParameterGroupsSecondParameterGroup) throws ErrorException, IOException;

    /**
     * Post parameters from multiple different parameter groups.
     *
     * @param firstParameterGroup Additional parameters for the operation
     * @param parameterGroupingPostMultipleParameterGroupsSecondParameterGroup Additional parameters for the operation
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> postMultipleParameterGroupsAsync(FirstParameterGroup firstParameterGroup, ParameterGroupingPostMultipleParameterGroupsSecondParameterGroup parameterGroupingPostMultipleParameterGroupsSecondParameterGroup, final ServiceCallback<Void> serviceCallback);

    /**
     * Post parameters with a shared parameter group object.
     *
     * @param firstParameterGroup Additional parameters for the operation
     * @throws ErrorException exception thrown from REST call
     * @throws IOException exception thrown from serialization/deserialization
     * @return the ServiceResponse object if successful.
     */
    ServiceResponse<Void> postSharedParameterGroupObject(FirstParameterGroup firstParameterGroup) throws ErrorException, IOException;

    /**
     * Post parameters with a shared parameter group object.
     *
     * @param firstParameterGroup Additional parameters for the operation
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @return the {@link Call} object
     */
    Call<ResponseBody> postSharedParameterGroupObjectAsync(FirstParameterGroup firstParameterGroup, final ServiceCallback<Void> serviceCallback);

}
