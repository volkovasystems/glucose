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
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
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

const clazof = require( "clazof" );
const kein = require( "kein" );
const protype = require( "protype" );
const zelf = require( "zelf" );

const Option = require( "./option.js" );

const glucose = function glucose( option ){
	/*;
		@meta-configuration:
			{
				"option:required": "object"
			}
		@end-meta-configuration
	*/

	option = option || { };

	if( !protype( option, OBJECT ) ){
		throw new Error( "invalid option" );
	}

	if( clazof( option, Option ) ){
		return option;
	}

	if( !kein( "self", option ) ){
		option.self = zelf( this );
	}

	return Option( option );
};

module.exports = glucose;
