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
    });

});
