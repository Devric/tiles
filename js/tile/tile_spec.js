describe("TILE", function(){ 

    describe('test utility', function(){
        var V = 'someString'
        var V1 = 'somethingElse'
        var V2 = function() {}

        var r = U(V)
        var r1 = U(V1)

        it('should return a value of V for val()', function(){
            expect(U(V).val()).toBe(V)
        });

        it('should create new object for each U())', function(){
            expect(r1.val()).toBe(V1)
            expect(r.val()).toBe(V)
        });

        it('should check value and return boolean', function(){
            expect( r1.is('string').val() ).toBeTruthy()
        })

        it('should add localStorage', function(){
            U().setStore('key', {a:'a'})
            expect(localStorage.key).toBe("{a:'a'}")
        })

    });

    describe('TILE scripts', function(){
        it('should be a function', function(){
            TILE.builder({
                
            })
        });
    });

    /*
    var tb;
    var fakeBlock = {
        id : 'two'
        , "class" : 'GREEN quad'
        , content : 'some content'
    }
    var fakeBlocks = [
          { id : 'three' , "class" : 'GREEN quad' , content : 'some content' }
        , { id : 'four'  , "class" : 'GREEN quad' , content : 'some content' }
        , { id : 'five'  , "class" : 'GREEN quad' , content : 'some content' }
    ]

    // fake jquery dom manipulation
    var DOMobj = {
        obj : document.querySelector('body')
        , prepend : function(){
            
        }
        , append : function() {
            
        }
        , replace : function() {
            
        }
    }

    beforeEach(function(){
        tb = new TileBuilder(DOMobj)
    })

    afterEach(function(){
        tb = null
    })

    describe("tag builder should build tags", function(){
        it('should build tags with property', function(){
            expect(tb.build({
                tag: 'div'
                , prop : {
                    "id" : 'divone'
                    , "class" : 'GREEN'
                }
                , content : 'some content'
            })).toBe('<div id="divone" class="GREEN" >some content</div>')
        })

        it('should build tags without properties', function(){
            expect(tb.build({
                tag: 'div'
                , content : 'some content'
            })).toBe('<div >some content</div>')
            
        });
    })

    describe('should add new blocks', function(){
        it('should append new blocks', function(){
            expect(tb.populate('append', fakeBlocks))
        })

        it('should prepend new blocks', function(){
            expect(tb.populate('prepend', fakeBlock))
        })

        it('should replace new blocks', function(){
            expect(tb.populate('replace', fakeBlocks))
        })
    })
    */

});
