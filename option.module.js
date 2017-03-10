"use strict";

/*;
	@submodule-license:
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
	@end-submodule-license

	@submodule-configuration:
		{
			"package": "glucose",
			"path": "glucose/option.js",
			"file": "option.js",
			"module": "glucose",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/glucose.git",
			"test": "glucose-test.js",
			"class": true,
			"global": false
		}
	@end-submodule-configuration

	@submodule-documentation:
		Option class.
	@end-submodule-documentation

	@include:
		{
			"clazof": "clazof",
			"diatom": "diatom",
			"falze": "falze",
			"falzy": "falzy",
			"harden": "harden",
			"protype": "protype",
			"stuffed": "stuffed",
			"transpher": "transpher",
			"truly": "truly",
			"wichevr": "wichevr",
			"wichis": "wichis"
		}
	@end-include
*/

const clazof = require( "clazof" );
const diatom = require( "diatom" );
const falze = require( "falze" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const proplist = require( "proplist" );
const protype = require( "protype" );
const stuffed = require( "stuffed" );
const transpher = require( "transpher" );
const truly = require( "truly" );
const wichevr = require( "wichevr" );
const wichis = require( "wichis" );

harden( "COATED", Symbol( "coated" ) );

const Option = diatom( "Option" );

/*;
	@option;
		{
			"self": "object"
			"factor": Array,
			"identity": "object",
			"setting": "object",
			"query": "object",
			"pagination": "object",
			"data": "object",
			"list": Array,
			"element": "object",
			"array": "object",
			"scope": Array,
			"permission": Array
		}
	@end-option
*/
Option.prototype.initialize = function initialize( option ){
	/*;
		@meta-configuration:
			{
				"option:required": "object"
			}
		@end-meta-configuration
	*/
	if( option.COATED === COATED ){
		transpher( option, this );

		return this;
	}

	harden( "COATED", COATED, this );

	harden( "self", option.self, this );

	harden( "cache", wichevr( option.cache, { } ), this );

	this.transfer( option );

	return this;
};

Option.prototype.get = function get( name ){
	/*;
		@meta-configuration:
			{
				"name:required": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( name ) || !protype( name, STRING ) ){
		throw new Error( "invalid name" );
	}

	return this.cache[ name ];
};

Option.prototype.set = function set( name, value ){
	/*;
		@meta-configuration:
			{
				"name:required": "string",
				"value:required": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( name ) || !protype( name, STRING ) ){
		throw new Error( "invalid name" );
	}

	if( falzy( value ) ){
		throw new Error( "invalid value" );
	}

	this.cache[ name ] = value;

	return this;
};

Option.prototype.clear = function clear( name ){
	/*;
		@meta-configuration:
			{
				"name:required": "string"
			}
		@end-meta-configuration
	*/

	if( truly( name ) && !protype( name, STRING ) ){
		throw new Error( "invalid name" );
	}

	if( truly( name ) ){
		delete this.cache[ name ];

	}else{
		for( let property in this.cache ){
			delete this.cache[ property ];
		}
	}

	return this;
};

Option.prototype.mix = function mix( choice ){
	/*;
		@meta-configuration:
			{
				"choice:required": Option
			}
		@end-meta-configuration
	*/

	if( !clazof( choice, Option ) ){
		choice = Option( choice );
	}

	if( truly( choice ) &&
		protype( choice, OBJECT ) &&
		clazof( choice, Option ) &&
		protype( choice.cache, OBJECT ) &&
		stuffed( choice.cache ) )
	{
		for( let property in choice.cache ){
			this.cache[ property ] = choice.cache[ property ];
		}

		for( let property  in this.cache ){
			choice.cache[ property ] = this.cache[ property ];
		}
	}

	return this;
};

Option.prototype.transfer = function transfer( option ){
	/*;
		@meta-configuration:
			{
				"option:required": Option
			}
		@end-meta-configuration
	*/

	if( truly( option ) && protype( option, OBJECT ) ){
		/*;
			These are standard conventional prooperties.
		*/
		this.factor = wichis( option.factor, [ ] );
		this.identity = wichis( option.identity, { } );

		this.setting = wichis( option.setting, { } );
		this.query = wichis( option.query, { } );
		this.pagination = wichis( option.pagination, { } );

		this.data = wichis( option.data, { } );
		this.list = wichis( option.list, [ ] );
		this.element = wichis( option.element, { } );
		this.array = wichis( option.array, { } );

		this.scope = wichis( option.scope, [ ] );
		this.permission = wichis( option.permission, [ ] );

		transpher( option, this );
	}

	return this;
};

Option.prototype.empty = function empty( property ){
	/*;
		@meta-configuration:
			{
				"property:required": "string"
			}
		@end-meta-configuration
	*/

	if( truly( property ) && !protype( property, STRING ) ){
		throw new Error( "invalid property" );
	}

	if( truly( property ) ){
		return falze( this[ property ] );

	}else{
		return Object.getOwnPropertyNames( this )
			.filter( ( property ) => {
				return ( property != "self" &&
					protype( this[ property ], OBJECT, STRING, NUMBER, BOOLEAN, SYMBOL ) );
			} )
			.every( ( property ) => { return falze( this[ property ] ); } );
	}

	return this;
};

Option.prototype.toJSON = function toJSON( ){
	let object = { };

	proplist( this )
		.filter( ( property ) => { return property.enumerable; } )
		.forEach( ( { property, value } ) => {
			object[ property ] = value;
		} );

	return object;
};

module.exports = Option;
