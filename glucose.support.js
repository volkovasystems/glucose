"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "glucose",
			"path": "glucose/glucose.js",
			"file": "glucose.js",
			"module": "glucose",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/glucose.git",
			"test": "glucose-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Sugar coat option.

		Wraps the option object with an Option based instance.
	@end-module-documentation

	@include:
		{
			"clazof": "clazof",
			"kein": "kein",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

var clazof = require("clazof");
var kein = require("kein");
var protype = require("protype");
var zelf = require("zelf");

var Option = require("./option.js");

var glucose = function glucose(option) {
	/*;
 	@meta-configuration:
 		{
 			"option:required": "object"
 		}
 	@end-meta-configuration
 */

	option = option || {};

	if (!protype(option, OBJECT)) {
		throw new Error("invalid option");
	}

	if (clazof(option, Option)) {
		return option;
	}

	if (!kein(option, "self")) {
		option.self = zelf(this);
	}

	return Option(option);
};

module.exports = glucose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsdWNvc2UuanMiXSwibmFtZXMiOlsiY2xhem9mIiwicmVxdWlyZSIsImtlaW4iLCJwcm90eXBlIiwiemVsZiIsIk9wdGlvbiIsImdsdWNvc2UiLCJvcHRpb24iLCJPQkpFQ1QiLCJFcnJvciIsInNlbGYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRyxPQUFPSCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSSxTQUFTSixRQUFTLGFBQVQsQ0FBZjs7QUFFQSxJQUFNSyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDOzs7Ozs7OztBQVFBQSxVQUFTQSxVQUFVLEVBQW5COztBQUVBLEtBQUksQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQkMsTUFBakIsQ0FBTCxFQUFnQztBQUMvQixRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVQsT0FBUU8sTUFBUixFQUFnQkYsTUFBaEIsQ0FBSixFQUE4QjtBQUM3QixTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBSSxDQUFDTCxLQUFNSyxNQUFOLEVBQWMsTUFBZCxDQUFMLEVBQTZCO0FBQzVCQSxTQUFPRyxJQUFQLEdBQWNOLEtBQU0sSUFBTixDQUFkO0FBQ0E7O0FBRUQsUUFBT0MsT0FBUUUsTUFBUixDQUFQO0FBQ0EsQ0F4QkQ7O0FBMEJBSSxPQUFPQyxPQUFQLEdBQWlCTixPQUFqQiIsImZpbGUiOiJnbHVjb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJnbHVjb3NlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJnbHVjb3NlL2dsdWNvc2UuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImdsdWNvc2UuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZ2x1Y29zZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2dsdWNvc2UuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJnbHVjb3NlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0U3VnYXIgY29hdCBvcHRpb24uXG5cblx0XHRXcmFwcyB0aGUgb3B0aW9uIG9iamVjdCB3aXRoIGFuIE9wdGlvbiBiYXNlZCBpbnN0YW5jZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBPcHRpb24gPSByZXF1aXJlKCBcIi4vb3B0aW9uLmpzXCIgKTtcblxuY29uc3QgZ2x1Y29zZSA9IGZ1bmN0aW9uIGdsdWNvc2UoIG9wdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm9wdGlvbjpyZXF1aXJlZFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRvcHRpb24gPSBvcHRpb24gfHwgeyB9O1xuXG5cdGlmKCAhcHJvdHlwZSggb3B0aW9uLCBPQkpFQ1QgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG9wdGlvblwiICk7XG5cdH1cblxuXHRpZiggY2xhem9mKCBvcHRpb24sIE9wdGlvbiApICl7XG5cdFx0cmV0dXJuIG9wdGlvbjtcblx0fVxuXG5cdGlmKCAha2Vpbiggb3B0aW9uLCBcInNlbGZcIiApICl7XG5cdFx0b3B0aW9uLnNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cdH1cblxuXHRyZXR1cm4gT3B0aW9uKCBvcHRpb24gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2x1Y29zZTtcbiJdfQ==
