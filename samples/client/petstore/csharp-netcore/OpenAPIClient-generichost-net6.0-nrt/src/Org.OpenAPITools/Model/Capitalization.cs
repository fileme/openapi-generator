// <auto-generated>
/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

#nullable enable

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// Capitalization
    /// </summary>
    public partial class Capitalization : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Capitalization" /> class.
        /// </summary>
        /// <param name="aTTNAME">Name of the pet </param>
        /// <param name="capitalCamel">capitalCamel</param>
        /// <param name="capitalSnake">capitalSnake</param>
        /// <param name="sCAETHFlowPoints">sCAETHFlowPoints</param>
        /// <param name="smallCamel">smallCamel</param>
        /// <param name="smallSnake">smallSnake</param>
        [JsonConstructor]
        public Capitalization(string aTTNAME, string capitalCamel, string capitalSnake, string sCAETHFlowPoints, string smallCamel, string smallSnake)
        {
#pragma warning disable CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
#pragma warning disable CS8073 // The result of the expression is always the same since a value of this type is never equal to 'null'

            if (smallCamel == null)
                throw new ArgumentNullException("smallCamel is a required property for Capitalization and cannot be null.");

            if (capitalCamel == null)
                throw new ArgumentNullException("capitalCamel is a required property for Capitalization and cannot be null.");

            if (smallSnake == null)
                throw new ArgumentNullException("smallSnake is a required property for Capitalization and cannot be null.");

            if (capitalSnake == null)
                throw new ArgumentNullException("capitalSnake is a required property for Capitalization and cannot be null.");

            if (sCAETHFlowPoints == null)
                throw new ArgumentNullException("sCAETHFlowPoints is a required property for Capitalization and cannot be null.");

            if (aTTNAME == null)
                throw new ArgumentNullException("aTTNAME is a required property for Capitalization and cannot be null.");

#pragma warning restore CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
#pragma warning restore CS8073 // The result of the expression is always the same since a value of this type is never equal to 'null'

            ATT_NAME = aTTNAME;
            CapitalCamel = capitalCamel;
            CapitalSnake = capitalSnake;
            SCAETHFlowPoints = sCAETHFlowPoints;
            SmallCamel = smallCamel;
            SmallSnake = smallSnake;
        }

        /// <summary>
        /// Name of the pet 
        /// </summary>
        /// <value>Name of the pet </value>
        [JsonPropertyName("ATT_NAME")]
        public string ATT_NAME { get; set; }

        /// <summary>
        /// Gets or Sets CapitalCamel
        /// </summary>
        [JsonPropertyName("CapitalCamel")]
        public string CapitalCamel { get; set; }

        /// <summary>
        /// Gets or Sets CapitalSnake
        /// </summary>
        [JsonPropertyName("Capital_Snake")]
        public string CapitalSnake { get; set; }

        /// <summary>
        /// Gets or Sets SCAETHFlowPoints
        /// </summary>
        [JsonPropertyName("SCA_ETH_Flow_Points")]
        public string SCAETHFlowPoints { get; set; }

        /// <summary>
        /// Gets or Sets SmallCamel
        /// </summary>
        [JsonPropertyName("smallCamel")]
        public string SmallCamel { get; set; }

        /// <summary>
        /// Gets or Sets SmallSnake
        /// </summary>
        [JsonPropertyName("small_Snake")]
        public string SmallSnake { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public Dictionary<string, JsonElement> AdditionalProperties { get; } = new Dictionary<string, JsonElement>();

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Capitalization {\n");
            sb.Append("  ATT_NAME: ").Append(ATT_NAME).Append("\n");
            sb.Append("  CapitalCamel: ").Append(CapitalCamel).Append("\n");
            sb.Append("  CapitalSnake: ").Append(CapitalSnake).Append("\n");
            sb.Append("  SCAETHFlowPoints: ").Append(SCAETHFlowPoints).Append("\n");
            sb.Append("  SmallCamel: ").Append(SmallCamel).Append("\n");
            sb.Append("  SmallSnake: ").Append(SmallSnake).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

    /// <summary>
    /// A Json converter for type Capitalization
    /// </summary>
    public class CapitalizationJsonConverter : JsonConverter<Capitalization>
    {
        /// <summary>
        /// A Json reader.
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override Capitalization Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            string aTTNAME = default;
            string capitalCamel = default;
            string capitalSnake = default;
            string sCAETHFlowPoints = default;
            string smallCamel = default;
            string smallSnake = default;

            while (utf8JsonReader.Read())
            {
                if (startingTokenType == JsonTokenType.StartObject && utf8JsonReader.TokenType == JsonTokenType.EndObject && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (startingTokenType == JsonTokenType.StartArray && utf8JsonReader.TokenType == JsonTokenType.EndArray && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (utf8JsonReader.TokenType == JsonTokenType.PropertyName && currentDepth == utf8JsonReader.CurrentDepth - 1)
                {
                    string? propertyName = utf8JsonReader.GetString();
                    utf8JsonReader.Read();

                    switch (propertyName)
                    {
                        case "ATT_NAME":
                            aTTNAME = utf8JsonReader.GetString();
                            break;
                        case "CapitalCamel":
                            capitalCamel = utf8JsonReader.GetString();
                            break;
                        case "Capital_Snake":
                            capitalSnake = utf8JsonReader.GetString();
                            break;
                        case "SCA_ETH_Flow_Points":
                            sCAETHFlowPoints = utf8JsonReader.GetString();
                            break;
                        case "smallCamel":
                            smallCamel = utf8JsonReader.GetString();
                            break;
                        case "small_Snake":
                            smallSnake = utf8JsonReader.GetString();
                            break;
                        default:
                            break;
                    }
                }
            }

            return new Capitalization(aTTNAME, capitalCamel, capitalSnake, sCAETHFlowPoints, smallCamel, smallSnake);
        }

        /// <summary>
        /// A Json writer
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="capitalization"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, Capitalization capitalization, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            writer.WriteString("ATT_NAME", capitalization.ATT_NAME);
            writer.WriteString("CapitalCamel", capitalization.CapitalCamel);
            writer.WriteString("Capital_Snake", capitalization.CapitalSnake);
            writer.WriteString("SCA_ETH_Flow_Points", capitalization.SCAETHFlowPoints);
            writer.WriteString("smallCamel", capitalization.SmallCamel);
            writer.WriteString("small_Snake", capitalization.SmallSnake);

            writer.WriteEndObject();
        }
    }
}
