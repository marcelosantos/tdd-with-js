describe ("Calculator", function (){

    describe ("add function", function (){
        it('should have an add function', function() {
            expect(add).toBeDefined();
        });

        it('should be return 3 when passed 1, 2', function() {
            expect(3).toEqual(add(1,2));
        });

        it ("should return 5 when passed 3, 2", function (){
            expect(5).toEqual(add(3,2));
        });

        it('should return 8 when passed 6, 2', function(){
            expect(8).toEqual(add(6,2));
        });
    });

    describe ("sub function", function (){
        it('should have an sub function', function() {
            expect(sub).toBeDefined();
        });

        it ("should return -1 when passed 1, 2", function (){
            expect(-1).toEqual(sub(1,2));
        });

        it ("should return 1 when passed 3, 2", function (){
            expect(1).toEqual(sub(3,2));
        });

        it('should return 160 when passed 300, 140', function(){
            expect(160).toEqual(sub(300,140));
        });
    });

    describe ("div function", function (){
        it('should have an div function', function() {
            expect(div).toBeDefined();
        });

        it ("should return 2 when passed 4, 2", function (){
            expect(2).toEqual(div(4,2));
        });

        it ("should return 5 when passed 25, 5", function (){
            expect(5).toEqual(div(25,5));
        });

        it('should return 7 when passed 49, 7', function(){
            expect(7).toEqual(div(49,7));
        })
    });

    describe("mul function",function(){
        it('should have an mul function', function(){
            expect(mul).toBeDefined();
        });

        it('should return 10 when passed 5, 2', function(){
            expect(10).toEqual(mul(5,2));
        });

        it('should return 81 when passed 9, 9', function(){
            expect(81).toEqual(mul(9,9));
        });

        it('should return 9 when passed 3, 3', function(){
            expect(9).toEqual(mul(3,3));
        });
    });

    describe("exp function",function(){
        it('should have an exp function', function(){
            expect(exp).toBeDefined();
        });

        it('should return 9 when passed 3,2', function(){
            expect(9).toEqual(exp(3,2));
        });

        it('should return 625 when passed 5,4', function(){
            expect(3125).toEqual(exp(5,5));
        });

        it('should return 64 when passed 4,3', function(){
            expect(64).toEqual(exp(4,3));
        });
    });

    describe('sqr function',function(){
        it('should have an sqr function', function(){
            expect(sqr).toBeDefined();
        });

        it('should return 3 when passed 9', function(){
            expect(3).toEqual(sqr(9));
        });

        it('should return 12 when passed 144', function(){
            expect(12).toEqual(sqr(144));
        });

        it('should return 9 when passed 81', function(){
            expect(9).toEqual(sqr(81));
        });
    });

});
