/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 7.6.0-SNAPSHOT.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



#include "r_200_response.h"

#include <string>
#include <vector>
#include <map>
#include <sstream>
#include <stdexcept>
#include <regex>
#include <boost/lexical_cast.hpp>
#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/json_parser.hpp>
#include "helpers.h"

using boost::property_tree::ptree;
using boost::property_tree::read_json;
using boost::property_tree::write_json;

namespace org {
namespace openapitools {
namespace server {
namespace model {

r_200_response::r_200_response(boost::property_tree::ptree const& pt)
{
        fromPropertyTree(pt);
}


std::string r_200_response::toJsonString(bool prettyJson /* = false */) const
{
	std::stringstream ss;
	write_json(ss, this->toPropertyTree(), prettyJson);
    // workaround inspired by: https://stackoverflow.com/a/56395440
    std::regex reg("\\\"([0-9]+\\.{0,1}[0-9]*)\\\"");
    std::string result = std::regex_replace(ss.str(), reg, "$1");
    return result;
}

void r_200_response::fromJsonString(std::string const& jsonString)
{
	std::stringstream ss(jsonString);
	ptree pt;
	read_json(ss,pt);
	this->fromPropertyTree(pt);
}

ptree r_200_response::toPropertyTree() const
{
	ptree pt;
	ptree tmp_node;
	pt.put("name", m_Name);
	pt.put("class", m_r_class);
	return pt;
}

void r_200_response::fromPropertyTree(ptree const &pt)
{
	ptree tmp_node;
	m_Name = pt.get("name", 0);
	m_r_class = pt.get("class", "");
}

int32_t r_200_response::getName() const
{
    return m_Name;
}

void r_200_response::setName(int32_t value)
{
    m_Name = value;
}


std::string r_200_response::getRClass() const
{
    return m_r_class;
}

void r_200_response::setRClass(std::string value)
{
    m_r_class = value;
}



std::vector<r_200_response> creater_200_responseVectorFromJsonString(const std::string& json)
{
    std::stringstream sstream(json);
    boost::property_tree::ptree pt;
    boost::property_tree::json_parser::read_json(sstream,pt);

    auto vec = std::vector<r_200_response>();
    for (const auto& child: pt) {
        vec.emplace_back(r_200_response(child.second));
    }

    return vec;
}

}
}
}
}

