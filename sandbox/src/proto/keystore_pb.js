// source: keystore.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest', null, global);
goog.exportSymbol('proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.repeatedFields_, null);
};
goog.inherits(proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.displayName = 'proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.displayName = 'proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    keypathList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest;
  return proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addKeypath(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeypathList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 keypath = 1;
 * @return {!Array<number>}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.prototype.getKeypathList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest} returns this
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.prototype.setKeypathList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest} returns this
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.prototype.addKeypath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest} returns this
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyRequest.prototype.clearKeypathList = function() {
  return this.setKeypathList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse;
  return proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse} returns this
 */
proto.shiftcrypto.bitbox02.ElectrumEncryptionKeyResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.shiftcrypto.bitbox02);
