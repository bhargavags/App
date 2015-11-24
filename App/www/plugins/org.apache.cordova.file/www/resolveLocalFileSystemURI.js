/*
   2  *
   3  * Licensed to the Apache Software Foundation (ASF) under one
   4  * or more contributor license agreements.  See the NOTICE file
   5  * distributed with this work for additional information
   6  * regarding copyright ownership.  The ASF licenses this file
   7  * to you under the Apache License, Version 2.0 (the
   8  * "License"); you may not use this file except in compliance
   9  * with the License.  You may obtain a copy of the License at
  10  *
  11  *   http://www.apache.org/licenses/LICENSE-2.0
  12  *
  13  * Unless required by applicable law or agreed to in writing,
  14  * software distributed under the License is distributed on an
  15  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  16  * KIND, either express or implied.  See the License for the
  17  * specific language governing permissions and limitations
  18  * under the License.
  19  *
  20 */
cordova.define("org.apache.cordova.file.resolveLocalFileSystemURI", function(require, exports, module) {
	
var argscheck = require('cordova/argscheck'), DirectoryEntry = require('./DirectoryEntry'), FileEntry = require('./FileEntry'), FileError = require('./FileError'), exec = require('cordova/exec');
var fileSystems = require('./fileSystems');

/**
 * Look up file system Entry referred to by local URI.
 * 
 * @param {DOMString}
 *            uri URI referring to a local file or directory
 * @param successCallback
 *            invoked with Entry object corresponding to URI
 * @param errorCallback
 *            invoked if error occurs retrieving file system entry
 */
module.exports.resolveLocalFileSystemURL = function(uri, successCallback,
		errorCallback) {
	argscheck.checkArgs('sFF', 'resolveLocalFileSystemURI', arguments);
	// error callback
	var fail = function(error) {
		errorCallback && errorCallback(new FileError(error));
	};
	// sanity check for 'not:valid:filename' or '/not:valid:filename'
	// file.spec.12 window.resolveLocalFileSystemURI should error (ENCODING_ERR)
	// when resolving invalid URI with leading /.
	if (!uri || uri.split(":").length > 2 || uri.indexOf('/') == 0) {
		setTimeout(function() {
			fail(FileError.ENCODING_ERR);
		}, 0);
		return;
	}
	// if successful, return either a file or directory entry
	var success = function(entry) {
		if (entry) {
			if (successCallback) {
				// create appropriate Entry object
				var fsName = (entry.filesystem && entry.filesystem.name)
						|| (entry.filesystem == window.PERSISTENT ? 'persistent'
								: 'temporary');
				fileSystems.getFs(fsName, function(fs) {
					if (!fs) {
						fs = new FileSystem(fsName, {
							name : "",
							fullPath : "/"
						});
					}
					var result = (entry.isDirectory) ? new DirectoryEntry(
							entry.name, entry.fullPath, fs, entry.nativeURL)
							: new FileEntry(entry.name, entry.fullPath, fs,
									entry.nativeURL);
					successCallback(result);
				});
			}
		} else {
			// no Entry object returned
			fail(FileError.NOT_FOUND_ERR);
		}
	};

	exec(success, fail, "File", "resolveLocalFileSystemURI", [ uri ]);
};
module.exports.resolveLocalFileSystemURI = function() {
	console
			.log("resolveLocalFileSystemURI is deprecated. Please call resolveLocalFileSystemURL instead.");
	module.exports.resolveLocalFileSystemURL.apply(this, arguments);
};
});