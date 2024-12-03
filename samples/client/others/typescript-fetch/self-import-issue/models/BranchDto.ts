/* tslint:disable */
/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BranchDto
 */
export interface BranchDto {
    /**
     * 
     * @type {string}
     * @memberof BranchDto
     */
    name?: string;
}

/**
 * Check if a given object implements the BranchDto interface.
 */
export function instanceOfBranchDto(value: object): value is BranchDto {
    return true;
}

export function BranchDtoFromJSON(json: any): BranchDto {
    return BranchDtoFromJSONTyped(json, false);
}

export function BranchDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BranchDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function BranchDtoToJSON(json: any): BranchDto {
    return BranchDtoToJSONTyped(json, false);
}

export function BranchDtoToJSONTyped(value?: BranchDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

