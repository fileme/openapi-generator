/*
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import java.io.File;
import org.openapitools.client.model.ModelApiResponse;
import org.openapitools.client.model.Pet;
import java.util.Set;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.web.client.RestClientException;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PetApi
 */
@Disabled
class PetApiTest {

    private final PetApi api = new PetApi();

    
    /**
     * Add a new pet to the store
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void addPetTest() {
        Pet pet = null;

        api.addPet(pet);

        // TODO: test validations
    }
    
    /**
     * Deletes a pet
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void deletePetTest() {
        Long petId = null;
        String apiKey = null;

        api.deletePet(petId, apiKey);

        // TODO: test validations
    }
    
    /**
     * Finds Pets by status
     *
     * Multiple status values can be provided with comma separated strings
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void findPetsByStatusTest() {
        List<String> status = null;

        List<Pet> response = api.findPetsByStatus(status);

        // TODO: test validations
    }
    
    /**
     * Finds Pets by tags
     *
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void findPetsByTagsTest() {
        Set<String> tags = null;

        Set<Pet> response = api.findPetsByTags(tags);

        // TODO: test validations
    }
    
    /**
     * Find pet by ID
     *
     * Returns a single pet
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void getPetByIdTest() {
        Long petId = null;

        Pet response = api.getPetById(petId);

        // TODO: test validations
    }
    
    /**
     * Update an existing pet
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void updatePetTest() {
        Pet pet = null;

        api.updatePet(pet);

        // TODO: test validations
    }
    
    /**
     * Updates a pet in the store with form data
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void updatePetWithFormTest() {
        Long petId = null;
        String name = null;
        String status = null;

        api.updatePetWithForm(petId, name, status);

        // TODO: test validations
    }
    
    /**
     * uploads an image
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void uploadFileTest() {
        Long petId = null;
        String additionalMetadata = null;
        File _file = null;

        ModelApiResponse response = api.uploadFile(petId, additionalMetadata, _file);

        // TODO: test validations
    }
    
    /**
     * uploads an image (required)
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void uploadFileWithRequiredFileTest() {
        Long petId = null;
        File requiredFile = null;
        String additionalMetadata = null;

        ModelApiResponse response = api.uploadFileWithRequiredFile(petId, requiredFile, additionalMetadata);

        // TODO: test validations
    }
    
}
