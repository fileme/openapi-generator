/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

#include "PFXTestAnyType.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "PFXHelpers.h"

namespace test_namespace {

PFXTestAnyType::PFXTestAnyType(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

PFXTestAnyType::PFXTestAnyType() {
    this->initializeModel();
}

PFXTestAnyType::~PFXTestAnyType() {}

void PFXTestAnyType::initializeModel() {

    m_code_isSet = false;
    m_code_isValid = false;

    m_message_isSet = false;
    m_message_isValid = false;
}

void PFXTestAnyType::fromJson(QString jsonString) {
    QByteArray array(jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void PFXTestAnyType::fromJsonObject(QJsonObject json) {

    m_code_isValid = ::test_namespace::fromJsonValue(m_code, json[QString("code")]);
    m_code_isSet = !json[QString("code")].isNull() && m_code_isValid;

    m_message_isValid = ::test_namespace::fromJsonValue(m_message, json[QString("message")]);
    m_message_isSet = !json[QString("message")].isNull() && m_message_isValid;
}

QString PFXTestAnyType::asJson() const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject PFXTestAnyType::asJsonObject() const {
    QJsonObject obj;
    if (m_code_isSet) {
        obj.insert(QString("code"), ::test_namespace::toJsonValue(m_code));
    }
    if (m_message_isSet) {
        obj.insert(QString("message"), ::test_namespace::toJsonValue(m_message));
    }
    return obj;
}

QJsonValue PFXTestAnyType::getCode() const {
    return m_code;
}
void PFXTestAnyType::setCode(const QJsonValue &code) {
    m_code = code;
    m_code_isSet = true;
}

bool PFXTestAnyType::is_code_Set() const{
    return m_code_isSet;
}

bool PFXTestAnyType::is_code_Valid() const{
    return m_code_isValid;
}

QString PFXTestAnyType::getMessage() const {
    return m_message;
}
void PFXTestAnyType::setMessage(const QString &message) {
    m_message = message;
    m_message_isSet = true;
}

bool PFXTestAnyType::is_message_Set() const{
    return m_message_isSet;
}

bool PFXTestAnyType::is_message_Valid() const{
    return m_message_isValid;
}

bool PFXTestAnyType::isSet() const {
    bool isObjectUpdated = false;
    do {
        if (m_code_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_message_isSet) {
            isObjectUpdated = true;
            break;
        }
    } while (false);
    return isObjectUpdated;
}

bool PFXTestAnyType::isValid() const {
    // only required properties are required for the object to be considered valid
    return true;
}

} // namespace test_namespace
