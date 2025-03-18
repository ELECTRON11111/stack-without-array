class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }

    get peek() {
        return this.items[this.top]
    }

    push(value) {
        this.top += 1
        this.items[this.top] = value
    }

    pop() {
        const value = this.items[this.top]
        delete this.items[this.top]
        this.top = this.top - 1
        return value
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

    // it.todo("Can push items to the top")
    it("Can push items to the top", () => {
        stack.push("🍉");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("🍉");
    })

    // it.todo("Can pop items from the top")
    it("Can pop items from the top", () => {
        stack.push("🍉");
        expect(stack.pop()).toBe("🍉");
        expect(stack.top).toBe(-1);
    })
})