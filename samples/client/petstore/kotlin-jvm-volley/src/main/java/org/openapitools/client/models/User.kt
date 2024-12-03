/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models


import com.google.gson.annotations.SerializedName
import org.openapitools.client.models.room.UserRoomModel
import org.openapitools.client.infrastructure.ITransformForStorage

/**
 * A User who is purchasing from the pet store
 *
 * @param id 
 * @param username 
 * @param firstName 
 * @param lastName 
 * @param email 
 * @param password 
 * @param phone 
 * @param userStatus User Status
 */


data class User (

    @SerializedName("id")
    val id: kotlin.Long? = null,

    @SerializedName("username")
    val username: kotlin.String? = null,

    @SerializedName("firstName")
    val firstName: kotlin.String? = null,

    @SerializedName("lastName")
    val lastName: kotlin.String? = null,

    @SerializedName("email")
    val email: kotlin.String? = null,

    @SerializedName("password")
    val password: kotlin.String? = null,

    @SerializedName("phone")
    val phone: kotlin.String? = null,

    /* User Status */
    @SerializedName("userStatus")
    val userStatus: kotlin.Int? = null

): ITransformForStorage<UserRoomModel> {
    companion object { }
    override fun toRoomModel(): UserRoomModel =
        UserRoomModel(roomTableId = 0,
        id = this.id,
username = this.username,
firstName = this.firstName,
lastName = this.lastName,
email = this.email,
password = this.password,
phone = this.phone,
userStatus = this.userStatus,
        )


}

