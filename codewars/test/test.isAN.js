var assert = require('assert')
, isAN = require('./../isAN.js').isAN;

suite('isAN', function(){
    test('Others', function(done){
	assert.equal(isAN(null), false);
	assert.equal(isAN(undefined), false);
	assert.equal(isAN([]), false);
	assert.equal(isAN([1]), false);
	assert.equal(isAN([[1]]), false);

	done();
    });
    test('Booleans', function(done){
	assert.equal(isAN(true), false);
	assert.equal(isAN(false), false);

	done();
    });
    test('new Number()s', function(done){
	assert.equal(isAN(new Number(1)), true);
	assert.equal(isAN(new Number(2)), true);
	assert.equal(isAN(new Number(3)), true);
	assert.equal(isAN(new Number(4)), true);
	
	done();
    });
    test('NaN Number()s', function(done){
	assert.equal(isAN(new Number("a")), false);
	assert.equal(isAN(new Number("b")), false);
	
	done();
    });
    test('Strings', function(done){
	assert.equal(isAN("1"), false);
	assert.equal(isAN("2"), false);
	assert.equal(isAN("3"), false);
	assert.equal(isAN("4"), false);
	done();
    });
    test('Numbers', function(done){
	assert.equal(isAN(1), true);
	assert.equal(isAN(2), true);
	assert.equal(isAN(3), true);
	assert.equal(isAN(4), true);
	assert.equal(isAN(-1), true);
	assert.equal(isAN(-2), true);
	assert.equal(isAN(-3), true);
	assert.equal(isAN(-4), true);
	assert.equal(isAN(0), true);
	
	done();
    });
});


