const assert = require( "assert" )
const glucose = require( "./glucose.js" );

assert.equal( JSON.stringify( glucose( { "hello": "world" } ) ),
	JSON.stringify( {
		"factor": [ ],
		"identity": { },
		"setting": { },
		"query": { },
		"pagination": { },
		"data": { },
		"list": [ ],
		"element": { },
		"array": { },
		"scope": [ ],
		"permission": [ ],
		"hello": "world"
	} ),
	"{'factor':[],'identity':{},'setting':{},'query':{},'pagination':{},'data':{},'list':[],'element':{},'array':{},'scope':[],'permission':[],'hello':'world'}" );

assert.equal( typeof glucose( { "hello": "world" } ) == "object", true, "should be of object data type" );

console.log( "ok" );
