//
// PrefixPetSuffix.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PrefixPetSuffix: Codable, JSONEncodable, Hashable {

    public var testProperty: String

    public init(testProperty: String) {
        self.testProperty = testProperty
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case testProperty
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(testProperty, forKey: .testProperty)
    }
}

