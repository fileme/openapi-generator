/*
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * Generator version: 7.6.0-SNAPSHOT
 */


import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "https://127.0.0.1/no_varaible";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.
let booleanGroup = "TODO_EDIT_THE_BOOLEAN_GROUP";
let header1 = "TODO_EDIT_THE_HEADER_1";
let apiKey = "TODO_EDIT_THE_API_KEY";
let requiredBooleanGroup = "TODO_EDIT_THE_REQUIRED_BOOLEAN_GROUP";
let enumHeaderStringArray = "TODO_EDIT_THE_ENUM_HEADER_STRING_ARRAY";
let enumHeaderString = "TODO_EDIT_THE_ENUM_HEADER_STRING";

export default function() {
    group("/fake", () => {
        let enumQueryInteger = 'TODO_EDIT_THE_ENUM_QUERY_INTEGER'; // specify value as there is no example value for this parameter in OpenAPI spec
        let enumQueryString = 'TODO_EDIT_THE_ENUM_QUERY_STRING'; // specify value as there is no example value for this parameter in OpenAPI spec
        let enumQueryStringArray = 'TODO_EDIT_THE_ENUM_QUERY_STRING_ARRAY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let enumQueryDouble = 'TODO_EDIT_THE_ENUM_QUERY_DOUBLE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let enumQueryModelArray = 'TODO_EDIT_THE_ENUM_QUERY_MODEL_ARRAY'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: testEnumParameters
        {
            let url = BASE_URL + `/fake?enum_query_string_array=${enum_query_string_array}&enum_query_string=${enum_query_string}&enum_query_integer=${enum_query_integer}&enum_query_double=${enum_query_double}&enum_query_model_array=${enum_query_model_array}`;
            // TODO: edit the parameters of the request body.
            let body = {"enumFormStringArray": "list", "enumFormString": "string"};
            let params = {headers: {"Content-Type": "application/x-www-form-urlencoded", "enum_header_string_array": `${enumHeaderStringArray}`, "enum_header_string": `${enumHeaderString}`, "Accept": "application/json"}};
            let request = http.get(url, JSON.stringify(body), params);


            sleep(SLEEP_DURATION);
        }

        // Request No. 2: testClientModel
        {
            let url = BASE_URL + `/fake`;
            // TODO: edit the parameters of the request body.
            let body = {"client": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/outer/boolean", () => {

        // Request No. 1: fakeOuterBooleanSerialize
        {
            let url = BASE_URL + `/fake/outer/boolean`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "*/*"}};
            let request = http.post(url, params);

            check(request, {
                "Output boolean": (r) => r.status === 200
            });
        }
    });

    group("/another-fake/dummy", () => {

        // Request No. 1: 123_test_@#$%_special_tags
        {
            let url = BASE_URL + `/another-fake/dummy`;
            // TODO: edit the parameters of the request body.
            let body = {"client": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/pet", () => {

        // Request No. 1: updatePet
        {
            let url = BASE_URL + `/pet`;
            // TODO: edit the parameters of the request body.
            let body = {"id": "long", "category": {"id": "long", "name": "string"}, "name": "string", "photoUrls": "set", "tags": "list", "status": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.put(url, JSON.stringify(body), params);

            check(request, {
                "Successful operation": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: addPet
        {
            let url = BASE_URL + `/pet`;
            // TODO: edit the parameters of the request body.
            let body = {"id": "long", "category": {"id": "long", "name": "string"}, "name": "string", "photoUrls": "set", "tags": "list", "status": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/inline-freeform-additionalProperties", () => {

        // Request No. 1: testInlineFreeformAdditionalProperties
        {
            let url = BASE_URL + `/fake/inline-freeform-additionalProperties`;
            // TODO: edit the parameters of the request body.
            let body = {"someProperty": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/user/{username}", () => {
        let username = 'TODO_EDIT_THE_USERNAME'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: getUserByName
        {
            let url = BASE_URL + `/user/${username}`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: deleteUser
        {
            let url = BASE_URL + `/user/${username}`;
            let request = http.del(url);

        }
    });

    group("/fake/body-with-binary", () => {

        // Request No. 1: testBodyWithBinary
        {
            let url = BASE_URL + `/fake/body-with-binary`;
            let params = {headers: {"Content-Type": "image/png", "Accept": "application/json"}};
            let request = http.put(url, params);

            check(request, {
                "Success": (r) => r.status === 200
            });
        }
    });

    group("/fake/nullable", () => {

        // Request No. 1: testNullable
        {
            let url = BASE_URL + `/fake/nullable`;
            // TODO: edit the parameters of the request body.
            let body = {"type": "string", "nullableProperty": "string", "otherProperty": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake_classname_test", () => {

        // Request No. 1: testClassname
        {
            let url = BASE_URL + `/fake_classname_test`;
            // TODO: edit the parameters of the request body.
            let body = {"client": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/user/createWithList", () => {

        // Request No. 1: createUsersWithListInput
        {
            let url = BASE_URL + `/user/createWithList`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/inline-additionalProperties", () => {

        // Request No. 1: testInlineAdditionalProperties
        {
            let url = BASE_URL + `/fake/inline-additionalProperties`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/store/inventory", () => {

        // Request No. 1: getInventory
        {
            let url = BASE_URL + `/store/inventory`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/user/login", () => {
        let password = 'TODO_EDIT_THE_PASSWORD'; // specify value as there is no example value for this parameter in OpenAPI spec
        let username = 'TODO_EDIT_THE_USERNAME'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: loginUser
        {
            let url = BASE_URL + `/user/login?username=${username}&password=${password}`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/stringMap-reference", () => {

        // Request No. 1: testStringMapReference
        {
            let url = BASE_URL + `/fake/stringMap-reference`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/outer/composite", () => {

        // Request No. 1: fakeOuterCompositeSerialize
        {
            let url = BASE_URL + `/fake/outer/composite`;
            // TODO: edit the parameters of the request body.
            let body = {"myNumber": "bigdecimal", "myString": "string", "myBoolean": "boolean"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "*/*"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Output composite": (r) => r.status === 200
            });
        }
    });

    group("/fake/jsonFormData", () => {

        // Request No. 1: testJsonFormData
        {
            let url = BASE_URL + `/fake/jsonFormData`;
            // TODO: edit the parameters of the request body.
            let body = {"param": "string", "param2": "string"};
            let params = {headers: {"Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"}};
            let request = http.get(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/{petId}/uploadImageWithRequiredFile", () => {
        let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: uploadFileWithRequiredFile
        {
            let url = BASE_URL + `/fake/${petId}/uploadImageWithRequiredFile`;
            // TODO: edit the parameters of the request body.
            let body = {"additionalMetadata": "string", "requiredFile": http.file(open("/path/to/file.bin", "b"), "test.bin")};
            let params = {headers: {"Content-Type": "multipart/form-data", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/pet/{petId}", () => {
        let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: getPetById
        {
            let url = BASE_URL + `/pet/${petId}`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: deletePet
        {
            let url = BASE_URL + `/pet/${petId}`;
            let params = {headers: {"api_key": `${apiKey}`, "Accept": "application/json"}};
            // this is a DELETE method request - if params are also set, empty body must be passed
            let request = http.del(url, {} , params);

            check(request, {
                "Successful operation": (r) => r.status === 200
            });
        }
    });

    group("/foo", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/foo`;
            let request = http.get(url);

            check(request, {
                "response": (r) => r.status === 200
            });
        }
    });

    group("/fake/outer/string", () => {

        // Request No. 1: fakeOuterStringSerialize
        {
            let url = BASE_URL + `/fake/outer/string`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "*/*"}};
            let request = http.post(url, params);

            check(request, {
                "Output string": (r) => r.status === 200
            });
        }
    });

    group("/fake/test-query-parameters", () => {
        let allowEmpty = 'TODO_EDIT_THE_ALLOWEMPTY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let ioutil = 'TODO_EDIT_THE_IOUTIL'; // specify value as there is no example value for this parameter in OpenAPI spec
        let context = 'TODO_EDIT_THE_CONTEXT'; // specify value as there is no example value for this parameter in OpenAPI spec
        let http = 'TODO_EDIT_THE_HTTP'; // specify value as there is no example value for this parameter in OpenAPI spec
        let pipe = 'TODO_EDIT_THE_PIPE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let language = 'TODO_EDIT_THE_LANGUAGE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = 'TODO_EDIT_THE_URL'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: testQueryParameterCollectionFormat
        {
            let url = BASE_URL + `/fake/test-query-parameters?pipe=${pipe}&ioutil=${ioutil}&http=${http}&url=${url}&context=${context}&language=${language}&allowEmpty=${allowEmpty}`;
            let request = http.put(url);

            check(request, {
                "Success": (r) => r.status === 200
            });
        }
    });

    group("/store/order/{order_id}", () => {
        let orderId = 'TODO_EDIT_THE_ORDER_ID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: getOrderById
        {
            let url = BASE_URL + `/store/order/${order_id}`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: deleteOrder
        {
            let url = BASE_URL + `/store/order/${order_id}`;
            let request = http.del(url);

        }
    });

    group("/fake/additionalProperties-reference", () => {

        // Request No. 1: testAdditionalPropertiesReference
        {
            let url = BASE_URL + `/fake/additionalProperties-reference`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/pet/findByStatus", () => {
        let status = 'TODO_EDIT_THE_STATUS'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: findPetsByStatus
        {
            let url = BASE_URL + `/pet/findByStatus?status=${status}`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/body-with-query-params", () => {
        let query = 'TODO_EDIT_THE_QUERY'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: testBodyWithQueryParams
        {
            let url = BASE_URL + `/fake/body-with-query-params?query=${query}`;
            // TODO: edit the parameters of the request body.
            let body = {"id": "long", "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": "integer"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.put(url, JSON.stringify(body), params);

            check(request, {
                "Success": (r) => r.status === 200
            });
        }
    });

    group("/pet/{petId}/uploadImage", () => {
        let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: uploadFile
        {
            let url = BASE_URL + `/pet/${petId}/uploadImage`;
            // TODO: edit the parameters of the request body.
            let body = {"additionalMetadata": "string", "file": http.file(open("/path/to/file.bin", "b"), "test.bin")};
            let params = {headers: {"Content-Type": "multipart/form-data", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/http-signature-test", () => {
        let query1 = 'TODO_EDIT_THE_QUERY_1'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: fake-http-signature-test
        {
            let url = BASE_URL + `/fake/http-signature-test?query_1=${query_1}`;
            // TODO: edit the parameters of the request body.
            let body = {"id": "long", "category": {"id": "long", "name": "string"}, "name": "string", "photoUrls": "set", "tags": "list", "status": "string"};
            let params = {headers: {"Content-Type": "application/json", "header_1": `${header1}`, "Accept": "application/json"}};
            let request = http.get(url, JSON.stringify(body), params);

            check(request, {
                "The instance started successfully": (r) => r.status === 200
            });
        }
    });

    group("/user", () => {

        // Request No. 1: createUser
        {
            let url = BASE_URL + `/user`;
            // TODO: edit the parameters of the request body.
            let body = {"id": "long", "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": "integer"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/property/enum-int", () => {

        // Request No. 1: fakePropertyEnumIntegerSerialize
        {
            let url = BASE_URL + `/fake/property/enum-int`;
            // TODO: edit the parameters of the request body.
            let body = {"value": "outerenuminteger"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "*/*"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Output enum (int)": (r) => r.status === 200
            });
        }
    });

    group("/user/createWithArray", () => {

        // Request No. 1: createUsersWithArrayInput
        {
            let url = BASE_URL + `/user/createWithArray`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/body-with-file-schema", () => {

        // Request No. 1: testBodyWithFileSchema
        {
            let url = BASE_URL + `/fake/body-with-file-schema`;
            // TODO: edit the parameters of the request body.
            let body = {"file": http.file(open("/path/to/file.bin", "b"), "test.bin"), "files": "list"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.put(url, JSON.stringify(body), params);

            check(request, {
                "Success": (r) => r.status === 200
            });
        }
    });

    group("/pet/findByTags", () => {
        let tags = 'TODO_EDIT_THE_TAGS'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: findPetsByTags
        {
            let url = BASE_URL + `/pet/findByTags?tags=${tags}`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/store/order", () => {

        // Request No. 1: placeOrder
        {
            let url = BASE_URL + `/store/order`;
            // TODO: edit the parameters of the request body.
            let body = {"id": "long", "petId": "long", "quantity": "integer", "shipDate": "date", "status": "string", "complete": "boolean"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/user/logout", () => {

        // Request No. 1: logoutUser
        {
            let url = BASE_URL + `/user/logout`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/BigDecimalMap", () => {

        // Request No. 1: fakeBigDecimalMap
        {
            let url = BASE_URL + `/fake/BigDecimalMap`;
            let request = http.get(url);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }
    });

    group("/fake/health", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/fake/health`;
            let request = http.get(url);

            check(request, {
                "The instance started successfully": (r) => r.status === 200
            });
        }
    });

    group("/fake/outer/number", () => {

        // Request No. 1: fakeOuterNumberSerialize
        {
            let url = BASE_URL + `/fake/outer/number`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "*/*"}};
            let request = http.post(url, params);

            check(request, {
                "Output number": (r) => r.status === 200
            });
        }
    });

}
