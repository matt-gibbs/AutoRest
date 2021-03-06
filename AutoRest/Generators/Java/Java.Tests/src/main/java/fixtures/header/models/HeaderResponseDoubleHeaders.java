/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.header.models;


/**
 * Defines headers for responseDouble operation.
 */
public class HeaderResponseDoubleHeaders {
    /**
     * response with header value "value": 7e120 or -3.0.
     */
    private Double value;

    /**
     * Get the value value.
     *
     * @return the value value
     */
    public Double getValue() {
        return this.value;
    }

    /**
     * Set the value value.
     *
     * @param value the value value to set
     */
    public void setValue(Double value) {
        this.value = value;
    }

}
