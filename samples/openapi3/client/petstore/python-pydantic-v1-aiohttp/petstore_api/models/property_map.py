# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import Dict, Optional
from pydantic import BaseModel
from petstore_api.models.tag import Tag

class PropertyMap(BaseModel):
    """
    PropertyMap
    """
    some_data: Optional[Dict[str, Tag]] = None
    __properties = ["some_data"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> PropertyMap:
        """Create an instance of PropertyMap from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each value in some_data (dict)
        _field_dict = {}
        if self.some_data:
            for _key in self.some_data:
                if self.some_data[_key]:
                    _field_dict[_key] = self.some_data[_key].to_dict()
            _dict['some_data'] = _field_dict
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PropertyMap:
        """Create an instance of PropertyMap from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PropertyMap.parse_obj(obj)

        _obj = PropertyMap.parse_obj({
            "some_data": dict(
                (_k, Tag.from_dict(_v))
                for _k, _v in obj.get("some_data").items()
            )
            if obj.get("some_data") is not None
            else None
        })
        return _obj


