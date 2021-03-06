// source: common.proto
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

goog.exportSymbol('proto.shiftcrypto.bitbox02.Keypath', null, global);
goog.exportSymbol('proto.shiftcrypto.bitbox02.PubResponse', null, global);
goog.exportSymbol('proto.shiftcrypto.bitbox02.RootFingerprintRequest', null, global);
goog.exportSymbol('proto.shiftcrypto.bitbox02.RootFingerprintResponse', null, global);
goog.exportSymbol('proto.shiftcrypto.bitbox02.XPub', null, global);
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
proto.shiftcrypto.bitbox02.PubResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shiftcrypto.bitbox02.PubResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shiftcrypto.bitbox02.PubResponse.displayName = 'proto.shiftcrypto.bitbox02.PubResponse';
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
proto.shiftcrypto.bitbox02.RootFingerprintRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shiftcrypto.bitbox02.RootFingerprintRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shiftcrypto.bitbox02.RootFingerprintRequest.displayName = 'proto.shiftcrypto.bitbox02.RootFingerprintRequest';
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
proto.shiftcrypto.bitbox02.RootFingerprintResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shiftcrypto.bitbox02.RootFingerprintResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shiftcrypto.bitbox02.RootFingerprintResponse.displayName = 'proto.shiftcrypto.bitbox02.RootFingerprintResponse';
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
proto.shiftcrypto.bitbox02.XPub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shiftcrypto.bitbox02.XPub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shiftcrypto.bitbox02.XPub.displayName = 'proto.shiftcrypto.bitbox02.XPub';
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
proto.shiftcrypto.bitbox02.Keypath = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.shiftcrypto.bitbox02.Keypath.repeatedFields_, null);
};
goog.inherits(proto.shiftcrypto.bitbox02.Keypath, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shiftcrypto.bitbox02.Keypath.displayName = 'proto.shiftcrypto.bitbox02.Keypath';
}



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
proto.shiftcrypto.bitbox02.PubResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.shiftcrypto.bitbox02.PubResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shiftcrypto.bitbox02.PubResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.PubResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pub: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.shiftcrypto.bitbox02.PubResponse}
 */
proto.shiftcrypto.bitbox02.PubResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shiftcrypto.bitbox02.PubResponse;
  return proto.shiftcrypto.bitbox02.PubResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shiftcrypto.bitbox02.PubResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shiftcrypto.bitbox02.PubResponse}
 */
proto.shiftcrypto.bitbox02.PubResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPub(value);
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
proto.shiftcrypto.bitbox02.PubResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shiftcrypto.bitbox02.PubResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shiftcrypto.bitbox02.PubResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.PubResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPub();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pub = 1;
 * @return {string}
 */
proto.shiftcrypto.bitbox02.PubResponse.prototype.getPub = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.shiftcrypto.bitbox02.PubResponse} returns this
 */
proto.shiftcrypto.bitbox02.PubResponse.prototype.setPub = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.shiftcrypto.bitbox02.RootFingerprintRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.shiftcrypto.bitbox02.RootFingerprintRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shiftcrypto.bitbox02.RootFingerprintRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.RootFingerprintRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.shiftcrypto.bitbox02.RootFingerprintRequest}
 */
proto.shiftcrypto.bitbox02.RootFingerprintRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shiftcrypto.bitbox02.RootFingerprintRequest;
  return proto.shiftcrypto.bitbox02.RootFingerprintRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shiftcrypto.bitbox02.RootFingerprintRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shiftcrypto.bitbox02.RootFingerprintRequest}
 */
proto.shiftcrypto.bitbox02.RootFingerprintRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.shiftcrypto.bitbox02.RootFingerprintRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shiftcrypto.bitbox02.RootFingerprintRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shiftcrypto.bitbox02.RootFingerprintRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.RootFingerprintRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.shiftcrypto.bitbox02.RootFingerprintResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.shiftcrypto.bitbox02.RootFingerprintResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shiftcrypto.bitbox02.RootFingerprintResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fingerprint: msg.getFingerprint_asB64()
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
 * @return {!proto.shiftcrypto.bitbox02.RootFingerprintResponse}
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shiftcrypto.bitbox02.RootFingerprintResponse;
  return proto.shiftcrypto.bitbox02.RootFingerprintResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shiftcrypto.bitbox02.RootFingerprintResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shiftcrypto.bitbox02.RootFingerprintResponse}
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFingerprint(value);
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
proto.shiftcrypto.bitbox02.RootFingerprintResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shiftcrypto.bitbox02.RootFingerprintResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shiftcrypto.bitbox02.RootFingerprintResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFingerprint_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes fingerprint = 1;
 * @return {string}
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.prototype.getFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes fingerprint = 1;
 * This is a type-conversion wrapper around `getFingerprint()`
 * @return {string}
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.prototype.getFingerprint_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFingerprint()));
};


/**
 * optional bytes fingerprint = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFingerprint()`
 * @return {!Uint8Array}
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.prototype.getFingerprint_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFingerprint()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shiftcrypto.bitbox02.RootFingerprintResponse} returns this
 */
proto.shiftcrypto.bitbox02.RootFingerprintResponse.prototype.setFingerprint = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.shiftcrypto.bitbox02.XPub.prototype.toObject = function(opt_includeInstance) {
  return proto.shiftcrypto.bitbox02.XPub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shiftcrypto.bitbox02.XPub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.XPub.toObject = function(includeInstance, msg) {
  var f, obj = {
    depth: msg.getDepth_asB64(),
    parentFingerprint: msg.getParentFingerprint_asB64(),
    childNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    chainCode: msg.getChainCode_asB64(),
    publicKey: msg.getPublicKey_asB64()
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
 * @return {!proto.shiftcrypto.bitbox02.XPub}
 */
proto.shiftcrypto.bitbox02.XPub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shiftcrypto.bitbox02.XPub;
  return proto.shiftcrypto.bitbox02.XPub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shiftcrypto.bitbox02.XPub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shiftcrypto.bitbox02.XPub}
 */
proto.shiftcrypto.bitbox02.XPub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDepth(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setParentFingerprint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChildNum(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChainCode(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
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
proto.shiftcrypto.bitbox02.XPub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shiftcrypto.bitbox02.XPub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shiftcrypto.bitbox02.XPub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.XPub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepth_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getParentFingerprint_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getChildNum();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getChainCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional bytes depth = 1;
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getDepth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes depth = 1;
 * This is a type-conversion wrapper around `getDepth()`
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getDepth_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDepth()));
};


/**
 * optional bytes depth = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDepth()`
 * @return {!Uint8Array}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getDepth_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDepth()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shiftcrypto.bitbox02.XPub} returns this
 */
proto.shiftcrypto.bitbox02.XPub.prototype.setDepth = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes parent_fingerprint = 2;
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getParentFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes parent_fingerprint = 2;
 * This is a type-conversion wrapper around `getParentFingerprint()`
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getParentFingerprint_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getParentFingerprint()));
};


/**
 * optional bytes parent_fingerprint = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getParentFingerprint()`
 * @return {!Uint8Array}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getParentFingerprint_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getParentFingerprint()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shiftcrypto.bitbox02.XPub} returns this
 */
proto.shiftcrypto.bitbox02.XPub.prototype.setParentFingerprint = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 child_num = 3;
 * @return {number}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getChildNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.shiftcrypto.bitbox02.XPub} returns this
 */
proto.shiftcrypto.bitbox02.XPub.prototype.setChildNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes chain_code = 4;
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getChainCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes chain_code = 4;
 * This is a type-conversion wrapper around `getChainCode()`
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getChainCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChainCode()));
};


/**
 * optional bytes chain_code = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChainCode()`
 * @return {!Uint8Array}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getChainCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChainCode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shiftcrypto.bitbox02.XPub} returns this
 */
proto.shiftcrypto.bitbox02.XPub.prototype.setChainCode = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes public_key = 5;
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes public_key = 5;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.shiftcrypto.bitbox02.XPub.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shiftcrypto.bitbox02.XPub} returns this
 */
proto.shiftcrypto.bitbox02.XPub.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.shiftcrypto.bitbox02.Keypath.repeatedFields_ = [1];



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
proto.shiftcrypto.bitbox02.Keypath.prototype.toObject = function(opt_includeInstance) {
  return proto.shiftcrypto.bitbox02.Keypath.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shiftcrypto.bitbox02.Keypath} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.Keypath.toObject = function(includeInstance, msg) {
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
 * @return {!proto.shiftcrypto.bitbox02.Keypath}
 */
proto.shiftcrypto.bitbox02.Keypath.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shiftcrypto.bitbox02.Keypath;
  return proto.shiftcrypto.bitbox02.Keypath.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shiftcrypto.bitbox02.Keypath} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shiftcrypto.bitbox02.Keypath}
 */
proto.shiftcrypto.bitbox02.Keypath.deserializeBinaryFromReader = function(msg, reader) {
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
proto.shiftcrypto.bitbox02.Keypath.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shiftcrypto.bitbox02.Keypath.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shiftcrypto.bitbox02.Keypath} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shiftcrypto.bitbox02.Keypath.serializeBinaryToWriter = function(message, writer) {
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
proto.shiftcrypto.bitbox02.Keypath.prototype.getKeypathList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.shiftcrypto.bitbox02.Keypath} returns this
 */
proto.shiftcrypto.bitbox02.Keypath.prototype.setKeypathList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.shiftcrypto.bitbox02.Keypath} returns this
 */
proto.shiftcrypto.bitbox02.Keypath.prototype.addKeypath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.shiftcrypto.bitbox02.Keypath} returns this
 */
proto.shiftcrypto.bitbox02.Keypath.prototype.clearKeypathList = function() {
  return this.setKeypathList([]);
};


goog.object.extend(exports, proto.shiftcrypto.bitbox02);
