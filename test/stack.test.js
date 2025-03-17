class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }
} 

describe("My stack", () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })
    
    it("is created empty", () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    })

    it.todo("Can push items to the top")

    it.todo("Can pop items from the top")
})