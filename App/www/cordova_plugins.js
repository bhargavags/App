

cordova
		.define(
				'cordova/plugin_list',
				function(require, exports, module) {
					module.exports = [
							
							{
								"file" : "plugins/org.apache.cordova.camera/www/CameraConstants.js",
								"id" : "org.apache.cordova.camera.Camera",
								"clobbers" : [ "Camera" ]
							},
							{
								"file" : "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
								"id" : "org.apache.cordova.camera.CameraPopoverOptions",
								"clobbers" : [ "CameraPopoverOptions" ]
							},
							{
								"file" : "plugins/org.apache.cordova.camera/www/Camera.js",
								"id" : "org.apache.cordova.camera.camera",
								"clobbers" : [ "navigator.camera" ]
							},
							{
								"file" : "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
								"id" : "org.apache.cordova.camera.CameraPopoverHandle",
								"clobbers" : [ "CameraPopoverHandle" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
								"id" : "org.apache.cordova.file.DirectoryEntry",
								"clobbers" : [ "window.DirectoryEntry" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/DirectoryReader.js",
								"id" : "org.apache.cordova.file.DirectoryReader",
								"clobbers" : [ "window.DirectoryReader" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/Entry.js",
								"id" : "org.apache.cordova.file.Entry",
								"clobbers" : [ "window.Entry" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/File.js",
								"id" : "org.apache.cordova.file.File",
								"clobbers" : [ "window.File" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/FileEntry.js",
								"id" : "org.apache.cordova.file.FileEntry",
								"clobbers" : [ "window.FileEntry" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/FileError.js",
								"id" : "org.apache.cordova.file.FileError",
								"clobbers" : [ "window.FileError" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/FileReader.js",
								"id" : "org.apache.cordova.file.FileReader",
								"clobbers" : [ "window.FileReader" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/FileSystem.js",
								"id" : "org.apache.cordova.file.FileSystem",
								"clobbers" : [ "window.FileSystem" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/fileSystemPaths.js",
								"id" : "org.apache.cordova.file.fileSystemPaths",
								"clobbers" : [ "window.fileSystemPaths" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
								"id" : "org.apache.cordova.file.fileSystems-roots",
								"clobbers" : [ "window.fileSystems-roots" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/fileSystems.js",
								"id" : "org.apache.cordova.file.fileSystems",
								"clobbers" : [ "window.fileSystems" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
								"id" : "org.apache.cordova.file.FileUploadOptions",
								"clobbers" : [ "window.FileUploadOptions" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/FileUploadResult.js",
								"id" : "org.apache.cordova.file.FileUploadResult",
								"clobbers" : [ "window.FileUploadResult" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/FileWriter.js",
								"id" : "org.apache.cordova.file.FileWriter",
								"clobbers" : [ "window.FileWriter" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/Flags.js",
								"id" : "org.apache.cordova.file.Flags",
								"clobbers" : [ "window.Flags" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
								"id" : "org.apache.cordova.file.LocalFileSystem",
								"clobbers" : [ "window.LocalFileSystem" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/Metadata.js",
								"id" : "org.apache.cordova.file.Metadata",
								"clobbers" : [ "window.Metadata" ]
							},						
							
							{
								"file" : "plugins/org.apache.cordova.file/www/ProgressEvent.js",
								"id" : "org.apache.cordova.file.ProgressEvent",
								"clobbers" : [ "window.ProgressEvent" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/requestFileSystem.js",
								"id" : "org.apache.cordova.file.requestFileSystem",
								"clobbers" : [ "window.requestFileSystem" ]
							},
							{
								"file" : "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
								"id" : "org.apache.cordova.file.resolveLocalFileSystemURI",
								"clobbers" : [ "window.resolveLocalFileSystemURI" ]
							},
							
							
							{
								"file" : "plugins/org.apache.cordova.mediacapture/www/CaptureError.js",
								"id" : "org.apache.cordova.mediacapture.CaptureError",
								"clobbers" : [ "CaptureError" ]
							},
							{
								"file" : "plugins/org.apache.cordova.mediacapture/www/MediaFile.js",
								"id" : "org.apache.cordova.mediacapture.MediaFile",
								"clobbers" : [ "MediaFile" ]
							},
							{
								"file" : "plugins/org.apache.cordova.mediacapture/www/capture.js",
								"id" : "org.apache.cordova.mediacapture.capture",
								"clobbers" : [ "navigator.device.capture" ]
							},							
							{
								"file":"plugins/org.apache.cordova.networkinformation/www/network.js",
								"id":"org.apache.cordova.networkinformation.network",
								"clobbers":	["navigator.connection","navigator.network.connection"]
							},
							{
								"file":"plugins/org.apache.cordova.networkinformation/www/Connection.js",
								"id":"org.apache.cordova.networkinformation.Connection",
								"clobbers":["Connection"]
							},
						{
							"file" : "plugins/org.apache.cordova.filetransfer/www/FileTransfer.js",
							"id" : "org.apache.cordova.filetransfer.FileTransfer",
							"clobbers" : [ "window.FileTransfer" ]
						},
						{
							"file" : "plugins/org.apache.cordova.filetransfer/www/FileTransferError.js",
							"id" : "org.apache.cordova.filetransfer.FileTransferError",
							"clobbers" : [ "window.FileTransferError" ]
						}
						

					];
				});