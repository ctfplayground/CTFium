// services/network/public/mojom/content_security_policy.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/content_security_policy.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }
  var source_location$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/source_location.mojom', 'source_location.mojom.js');
  }
  var web_sandbox_flags$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/web_sandbox_flags.mojom', 'web_sandbox_flags.mojom.js');
  }


  var ContentSecurityPolicyType = {};
  ContentSecurityPolicyType.kReport = 0;
  ContentSecurityPolicyType.kEnforce = 1;
  ContentSecurityPolicyType.MIN_VALUE = 0,
  ContentSecurityPolicyType.MAX_VALUE = 1,

  ContentSecurityPolicyType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  ContentSecurityPolicyType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ContentSecurityPolicySource = {};
  ContentSecurityPolicySource.kHTTP = 0;
  ContentSecurityPolicySource.kMeta = 1;
  ContentSecurityPolicySource.kOriginPolicy = 2;
  ContentSecurityPolicySource.MIN_VALUE = 0,
  ContentSecurityPolicySource.MAX_VALUE = 2,

  ContentSecurityPolicySource.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ContentSecurityPolicySource.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CSPDisposition = {};
  CSPDisposition.CHECK = 0;
  CSPDisposition.DO_NOT_CHECK = 1;
  CSPDisposition.MIN_VALUE = 0,
  CSPDisposition.MAX_VALUE = 1,

  CSPDisposition.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CSPDisposition.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CSPHashAlgorithm = {};
  CSPHashAlgorithm.None = 0;
  CSPHashAlgorithm.SHA256 = 1;
  CSPHashAlgorithm.SHA384 = 2;
  CSPHashAlgorithm.SHA512 = 4;
  CSPHashAlgorithm.MIN_VALUE = 0,
  CSPHashAlgorithm.MAX_VALUE = 4,

  CSPHashAlgorithm.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 4:
      return true;
    }
    return false;
  };

  CSPHashAlgorithm.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CSPDirectiveName = {};
  CSPDirectiveName.Unknown = 0;
  CSPDirectiveName.BaseURI = 1;
  CSPDirectiveName.BlockAllMixedContent = 2;
  CSPDirectiveName.ChildSrc = 3;
  CSPDirectiveName.ConnectSrc = 4;
  CSPDirectiveName.DefaultSrc = 5;
  CSPDirectiveName.FontSrc = 6;
  CSPDirectiveName.FormAction = 7;
  CSPDirectiveName.FrameAncestors = 8;
  CSPDirectiveName.FrameSrc = 9;
  CSPDirectiveName.ImgSrc = 10;
  CSPDirectiveName.ManifestSrc = 11;
  CSPDirectiveName.MediaSrc = 12;
  CSPDirectiveName.NavigateTo = 13;
  CSPDirectiveName.ObjectSrc = 14;
  CSPDirectiveName.PluginTypes = 15;
  CSPDirectiveName.PrefetchSrc = 16;
  CSPDirectiveName.ReportTo = 17;
  CSPDirectiveName.ReportURI = 18;
  CSPDirectiveName.RequireTrustedTypesFor = 19;
  CSPDirectiveName.Sandbox = 20;
  CSPDirectiveName.ScriptSrc = 21;
  CSPDirectiveName.ScriptSrcAttr = 22;
  CSPDirectiveName.ScriptSrcElem = 23;
  CSPDirectiveName.StyleSrc = 24;
  CSPDirectiveName.StyleSrcAttr = 25;
  CSPDirectiveName.StyleSrcElem = 26;
  CSPDirectiveName.TreatAsPublicAddress = 27;
  CSPDirectiveName.TrustedTypes = 28;
  CSPDirectiveName.UpgradeInsecureRequests = 29;
  CSPDirectiveName.WorkerSrc = 30;
  CSPDirectiveName.MIN_VALUE = 0,
  CSPDirectiveName.MAX_VALUE = 30,

  CSPDirectiveName.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
      return true;
    }
    return false;
  };

  CSPDirectiveName.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CSPRequireTrustedTypesFor = {};
  CSPRequireTrustedTypesFor.None = 0;
  CSPRequireTrustedTypesFor.Script = 1;
  CSPRequireTrustedTypesFor.MIN_VALUE = 0,
  CSPRequireTrustedTypesFor.MAX_VALUE = 1,

  CSPRequireTrustedTypesFor.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CSPRequireTrustedTypesFor.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ContentSecurityPolicyHeader(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentSecurityPolicyHeader.prototype.initDefaults_ = function() {
    this.headerValue = null;
    this.type = ContentSecurityPolicyType.kEnforce;
    this.source = ContentSecurityPolicySource.kHTTP;
  };
  ContentSecurityPolicyHeader.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentSecurityPolicyHeader.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicyHeader.headerValue
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicyHeader.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ContentSecurityPolicyType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicyHeader.source
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ContentSecurityPolicySource);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentSecurityPolicyHeader.encodedSize = codec.kStructHeaderSize + 16;

  ContentSecurityPolicyHeader.decode = function(decoder) {
    var packed;
    var val = new ContentSecurityPolicyHeader();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.headerValue =
        decoder.decodeStruct(codec.String);
    val.type =
        decoder.decodeStruct(codec.Int32);
    val.source =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  ContentSecurityPolicyHeader.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentSecurityPolicyHeader.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.headerValue);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.source);
  };
  function CSPSource(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPSource.prototype.initDefaults_ = function() {
    this.scheme = null;
    this.host = null;
    this.port = -1;
    this.isHostWildcard = false;
    this.isPortWildcard = false;
    this.path = null;
  };
  CSPSource.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPSource.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPSource.scheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPSource.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate CSPSource.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CSPSource.encodedSize = codec.kStructHeaderSize + 32;

  CSPSource.decode = function(decoder) {
    var packed;
    var val = new CSPSource();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scheme =
        decoder.decodeStruct(codec.String);
    val.host =
        decoder.decodeStruct(codec.String);
    val.port =
        decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isHostWildcard = (packed >> 0) & 1 ? true : false;
    val.isPortWildcard = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.path =
        decoder.decodeStruct(codec.String);
    return val;
  };

  CSPSource.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPSource.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.scheme);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.Int32, val.port);
    packed = 0;
    packed |= (val.isHostWildcard & 1) << 0
    packed |= (val.isPortWildcard & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.path);
  };
  function CSPHashSource(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPHashSource.prototype.initDefaults_ = function() {
    this.algorithm = 0;
    this.value = null;
  };
  CSPHashSource.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPHashSource.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPHashSource.algorithm
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CSPHashAlgorithm);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPHashSource.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CSPHashSource.encodedSize = codec.kStructHeaderSize + 16;

  CSPHashSource.decode = function(decoder) {
    var packed;
    var val = new CSPHashSource();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.algorithm =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.value =
        decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CSPHashSource.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPHashSource.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.algorithm);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.value);
  };
  function CSPSourceList(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPSourceList.prototype.initDefaults_ = function() {
    this.sources = null;
    this.nonces = null;
    this.hashes = null;
    this.allowSelf = false;
    this.allowStar = false;
    this.allowResponseRedirects = false;
    this.allowInline = false;
    this.allowEval = false;
    this.allowWasmEval = false;
    this.allowDynamic = false;
    this.allowUnsafeHashes = false;
    this.reportSample = false;
  };
  CSPSourceList.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPSourceList.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPSourceList.sources
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(CSPSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPSourceList.nonces
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPSourceList.hashes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(CSPHashSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;










    return validator.validationError.NONE;
  };

  CSPSourceList.encodedSize = codec.kStructHeaderSize + 32;

  CSPSourceList.decode = function(decoder) {
    var packed;
    var val = new CSPSourceList();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sources =
        decoder.decodeArrayPointer(new codec.PointerTo(CSPSource));
    val.nonces =
        decoder.decodeArrayPointer(codec.String);
    val.hashes =
        decoder.decodeArrayPointer(new codec.PointerTo(CSPHashSource));
    packed = decoder.readUint8();
    val.allowSelf = (packed >> 0) & 1 ? true : false;
    val.allowStar = (packed >> 1) & 1 ? true : false;
    val.allowResponseRedirects = (packed >> 2) & 1 ? true : false;
    val.allowInline = (packed >> 3) & 1 ? true : false;
    val.allowEval = (packed >> 4) & 1 ? true : false;
    val.allowWasmEval = (packed >> 5) & 1 ? true : false;
    val.allowDynamic = (packed >> 6) & 1 ? true : false;
    val.allowUnsafeHashes = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.reportSample = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CSPSourceList.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPSourceList.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(CSPSource), val.sources);
    encoder.encodeArrayPointer(codec.String, val.nonces);
    encoder.encodeArrayPointer(new codec.PointerTo(CSPHashSource), val.hashes);
    packed = 0;
    packed |= (val.allowSelf & 1) << 0
    packed |= (val.allowStar & 1) << 1
    packed |= (val.allowResponseRedirects & 1) << 2
    packed |= (val.allowInline & 1) << 3
    packed |= (val.allowEval & 1) << 4
    packed |= (val.allowWasmEval & 1) << 5
    packed |= (val.allowDynamic & 1) << 6
    packed |= (val.allowUnsafeHashes & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.reportSample & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CSPTrustedTypes(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPTrustedTypes.prototype.initDefaults_ = function() {
    this.list = null;
    this.allowAny = false;
    this.allowDuplicates = false;
  };
  CSPTrustedTypes.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPTrustedTypes.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPTrustedTypes.list
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CSPTrustedTypes.encodedSize = codec.kStructHeaderSize + 16;

  CSPTrustedTypes.decode = function(decoder) {
    var packed;
    var val = new CSPTrustedTypes();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.list =
        decoder.decodeArrayPointer(codec.String);
    packed = decoder.readUint8();
    val.allowAny = (packed >> 0) & 1 ? true : false;
    val.allowDuplicates = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CSPTrustedTypes.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPTrustedTypes.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.list);
    packed = 0;
    packed |= (val.allowAny & 1) << 0
    packed |= (val.allowDuplicates & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ContentSecurityPolicy(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentSecurityPolicy.prototype.initDefaults_ = function() {
    this.selfOrigin = null;
    this.rawDirectives = null;
    this.directives = null;
    this.upgradeInsecureRequests = false;
    this.treatAsPublicAddress = false;
    this.blockAllMixedContent = false;
    this.useReportingApi = false;
    this.sandbox = web_sandbox_flags$.WebSandboxFlags.kNone;
    this.header = null;
    this.reportEndpoints = null;
    this.pluginTypes = null;
    this.requireTrustedTypesFor = CSPRequireTrustedTypesFor.None;
    this.trustedTypes = null;
    this.parsingErrors = null;
  };
  ContentSecurityPolicy.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentSecurityPolicy.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.selfOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CSPSource, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.rawDirectives
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, new codec.Enum(CSPDirectiveName), codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.directives
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, false, new codec.Enum(CSPDirectiveName), new codec.PointerTo(CSPSourceList), false);
    if (err !== validator.validationError.NONE)
        return err;





    // validate ContentSecurityPolicy.sandbox
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, web_sandbox_flags$.WebSandboxFlags);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.header
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, ContentSecurityPolicyHeader, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate ContentSecurityPolicy.reportEndpoints
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.pluginTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.requireTrustedTypesFor
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 56, CSPRequireTrustedTypesFor);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.trustedTypes
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, CSPTrustedTypes, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentSecurityPolicy.parsingErrors
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 72, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentSecurityPolicy.encodedSize = codec.kStructHeaderSize + 80;

  ContentSecurityPolicy.decode = function(decoder) {
    var packed;
    var val = new ContentSecurityPolicy();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.selfOrigin =
        decoder.decodeStructPointer(CSPSource);
    val.rawDirectives =
        decoder.decodeMapPointer(new codec.Enum(CSPDirectiveName), codec.String);
    val.directives =
        decoder.decodeMapPointer(new codec.Enum(CSPDirectiveName), new codec.PointerTo(CSPSourceList));
    packed = decoder.readUint8();
    val.upgradeInsecureRequests = (packed >> 0) & 1 ? true : false;
    val.treatAsPublicAddress = (packed >> 1) & 1 ? true : false;
    val.blockAllMixedContent = (packed >> 2) & 1 ? true : false;
    val.useReportingApi = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sandbox =
        decoder.decodeStruct(codec.Int32);
    val.header =
        decoder.decodeStructPointer(ContentSecurityPolicyHeader);
    val.reportEndpoints =
        decoder.decodeArrayPointer(codec.String);
    val.pluginTypes =
        decoder.decodeArrayPointer(codec.String);
    val.requireTrustedTypesFor =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.trustedTypes =
        decoder.decodeStructPointer(CSPTrustedTypes);
    val.parsingErrors =
        decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ContentSecurityPolicy.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentSecurityPolicy.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CSPSource, val.selfOrigin);
    encoder.encodeMapPointer(new codec.Enum(CSPDirectiveName), codec.String, val.rawDirectives);
    encoder.encodeMapPointer(new codec.Enum(CSPDirectiveName), new codec.PointerTo(CSPSourceList), val.directives);
    packed = 0;
    packed |= (val.upgradeInsecureRequests & 1) << 0
    packed |= (val.treatAsPublicAddress & 1) << 1
    packed |= (val.blockAllMixedContent & 1) << 2
    packed |= (val.useReportingApi & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.sandbox);
    encoder.encodeStructPointer(ContentSecurityPolicyHeader, val.header);
    encoder.encodeArrayPointer(codec.String, val.reportEndpoints);
    encoder.encodeArrayPointer(codec.String, val.pluginTypes);
    encoder.encodeStruct(codec.Int32, val.requireTrustedTypesFor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(CSPTrustedTypes, val.trustedTypes);
    encoder.encodeArrayPointer(codec.String, val.parsingErrors);
  };
  function CSPViolation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPViolation.prototype.initDefaults_ = function() {
    this.directive = null;
    this.effectiveDirective = null;
    this.consoleMessage = null;
    this.blockedUrl = null;
    this.reportEndpoints = null;
    this.useReportingApi = false;
    this.afterRedirect = false;
    this.type = 0;
    this.header = null;
    this.sourceLocation = null;
  };
  CSPViolation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPViolation.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolation.directive
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolation.effectiveDirective
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolation.consoleMessage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolation.blockedUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolation.reportEndpoints
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CSPViolation.header
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPViolation.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, ContentSecurityPolicyType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CSPViolation.sourceLocation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, source_location$.SourceLocation, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CSPViolation.encodedSize = codec.kStructHeaderSize + 64;

  CSPViolation.decode = function(decoder) {
    var packed;
    var val = new CSPViolation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.directive =
        decoder.decodeStruct(codec.String);
    val.effectiveDirective =
        decoder.decodeStruct(codec.String);
    val.consoleMessage =
        decoder.decodeStruct(codec.String);
    val.blockedUrl =
        decoder.decodeStructPointer(url$.Url);
    val.reportEndpoints =
        decoder.decodeArrayPointer(codec.String);
    packed = decoder.readUint8();
    val.useReportingApi = (packed >> 0) & 1 ? true : false;
    val.afterRedirect = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.type =
        decoder.decodeStruct(codec.Int32);
    val.header =
        decoder.decodeStruct(codec.String);
    val.sourceLocation =
        decoder.decodeStructPointer(source_location$.SourceLocation);
    return val;
  };

  CSPViolation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPViolation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.directive);
    encoder.encodeStruct(codec.String, val.effectiveDirective);
    encoder.encodeStruct(codec.String, val.consoleMessage);
    encoder.encodeStructPointer(url$.Url, val.blockedUrl);
    encoder.encodeArrayPointer(codec.String, val.reportEndpoints);
    packed = 0;
    packed |= (val.useReportingApi & 1) << 0
    packed |= (val.afterRedirect & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.String, val.header);
    encoder.encodeStructPointer(source_location$.SourceLocation, val.sourceLocation);
  };

  function AllowCSPFromHeaderValue(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  AllowCSPFromHeaderValue.Tags = {
    allowStar: 0,
    origin: 1,
    errorMessage: 2,
  };

  AllowCSPFromHeaderValue.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  AllowCSPFromHeaderValue.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "allowStar",
        "origin",
        "errorMessage",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a AllowCSPFromHeaderValue member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(AllowCSPFromHeaderValue.prototype, "allowStar", {
    get: function() {
      if (this.$tag != AllowCSPFromHeaderValue.Tags.allowStar) {
        throw new ReferenceError(
            "AllowCSPFromHeaderValue.allowStar is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = AllowCSPFromHeaderValue.Tags.allowStar;
      this.$data = value;
    }
  });
  Object.defineProperty(AllowCSPFromHeaderValue.prototype, "origin", {
    get: function() {
      if (this.$tag != AllowCSPFromHeaderValue.Tags.origin) {
        throw new ReferenceError(
            "AllowCSPFromHeaderValue.origin is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = AllowCSPFromHeaderValue.Tags.origin;
      this.$data = value;
    }
  });
  Object.defineProperty(AllowCSPFromHeaderValue.prototype, "errorMessage", {
    get: function() {
      if (this.$tag != AllowCSPFromHeaderValue.Tags.errorMessage) {
        throw new ReferenceError(
            "AllowCSPFromHeaderValue.errorMessage is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = AllowCSPFromHeaderValue.Tags.errorMessage;
      this.$data = value;
    }
  });


    AllowCSPFromHeaderValue.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case AllowCSPFromHeaderValue.Tags.allowStar:
          encoder.writeUint8(val.allowStar ? 1 : 0);
          break;
        case AllowCSPFromHeaderValue.Tags.origin:
          encoder.encodeStructPointer(origin$.Origin, val.origin);
          break;
        case AllowCSPFromHeaderValue.Tags.errorMessage:
          encoder.encodeStruct(codec.String, val.errorMessage);
          break;
      }
      encoder.align();
    };


    AllowCSPFromHeaderValue.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new AllowCSPFromHeaderValue();
      var tag = decoder.readUint32();
      switch (tag) {
        case AllowCSPFromHeaderValue.Tags.allowStar:
          result.allowStar = decoder.readUint8() ? true : false;
          break;
        case AllowCSPFromHeaderValue.Tags.origin:
          result.origin = decoder.decodeStructPointer(origin$.Origin);
          break;
        case AllowCSPFromHeaderValue.Tags.errorMessage:
          result.errorMessage = decoder.decodeStruct(codec.String);
          break;
      }
      decoder.align();

      return result;
    };


    AllowCSPFromHeaderValue.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case AllowCSPFromHeaderValue.Tags.allowStar:
          

          break;
        case AllowCSPFromHeaderValue.Tags.origin:
          

    // validate AllowCSPFromHeaderValue.origin
    err = messageValidator.validateStructPointer(data_offset, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case AllowCSPFromHeaderValue.Tags.errorMessage:
          

    // validate AllowCSPFromHeaderValue.errorMessage
    err = messageValidator.validateStringPointer(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  AllowCSPFromHeaderValue.encodedSize = 16;
  exports.ContentSecurityPolicyType = ContentSecurityPolicyType;
  exports.ContentSecurityPolicySource = ContentSecurityPolicySource;
  exports.CSPDisposition = CSPDisposition;
  exports.CSPHashAlgorithm = CSPHashAlgorithm;
  exports.CSPDirectiveName = CSPDirectiveName;
  exports.CSPRequireTrustedTypesFor = CSPRequireTrustedTypesFor;
  exports.ContentSecurityPolicyHeader = ContentSecurityPolicyHeader;
  exports.CSPSource = CSPSource;
  exports.CSPHashSource = CSPHashSource;
  exports.CSPSourceList = CSPSourceList;
  exports.CSPTrustedTypes = CSPTrustedTypes;
  exports.ContentSecurityPolicy = ContentSecurityPolicy;
  exports.CSPViolation = CSPViolation;
  exports.AllowCSPFromHeaderValue = AllowCSPFromHeaderValue;
})();