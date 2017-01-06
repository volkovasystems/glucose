

const diatom = require( "diatom" );
const harden = require( "harden" );
const zelf = require( "zelf" );

harden( "COATED", Symbol.for( "coated" ) );

const Option = diatom( "Option" );

Option.prototype.initialize = function initialize( option ){
	if( clazof( option, Option ) ){
		return this;
	}

	if( option.COATED === COATED ){
		return this;
	}

	harden( "COATED", COATED, option );

	harden( "self", option.self || zelf( this ), this );

	harden( "cache", option.cache || { }, this );

	return this;
};

Option.prototype.get = function get( name ){
	return this.cache[ name ];
};

Option.prototype.set = function set( name, value ){

};

Option.prototype.clear = function clear( ){

};

Option.prototype.mix = function mix( ){

};
