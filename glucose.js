"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/glucose.git",
			"test": "glucose-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Adds default self, and cache.
		A hidden get and set function for manipulating cache will be
			embedded on this object.
		Bound the glucose to pass the needed context for the self property.
	@end-module-documentation

	@include:
		{
			"called": "called",
			"harden": "harden",
			"zelf": "zelf"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var called = require( "called" );
	var harden = require( "harden" );
	var zelf = require( "zelf" );
}

if( typeof window != "undefined" &&
	!( "called" in window ) )
{
	throw new Error( "called is not defined" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "zelf" in window ) )
{
	throw new Error( "zelf is not defined" );
}

harden( "COATED", "coated" );

var glucose = function glucose( option ){
	/*;
		@meta-configuration:
			{
				"option:required": "object"
			}
		@end-meta-configuration
	*/

	option = option || { };

	if( typeof option != "object" ){
		throw new Error( "invalid option" );
	}

	if( option.COATED === COATED ){
		return option;
	}

	harden( "COATED", COATED, option );

	harden( "cache", option.cache || { }, option );

	harden( "self", option.self || zelf( this ), option );

	if( typeof option.get != "function" ){
		harden( "get", function get( name ){
			return option.cache[ name ];
		}, option );
	}

	if( typeof option.set != "function" ){
		harden( "set", function set( name, value ){
			option.cache[ name ] = value;

			return option;
		}, option );
	}

	if( typeof option.clear != "function" ){
		harden( "clear", function clear( ){
			for( let property in option.cache ){
				delete option.cache[ property ];
			}

			return option;
		}, option );
	}

	if( typeof option.mix != "function" ){
		harden( "mix", function mix( choice ){
			if( typeof choice.cache == "object" ){
				for( let property in choice.cache ){
					option.cache[ property ] = choice.cache[ property ];
				}
			}

			return option;
		}, option );
	}

	//: Prepare some standard conventional properties.
	option.factor = option.factor || [ ];
	option.identity = option.identity || { };

	option.setting = option.setting || { };
	option.query = option.query || { };
	option.pagination = option.pagination || { };

	option.data = option.data || { };
	option.list = option.list || [ ];
	option.element = option.element || { };
	option.array = option.array || { };

	return option;
};

if( typeof module != "undefined" ){
	module.exports = glucose;
}
