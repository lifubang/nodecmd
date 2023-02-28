declare module 'node-stdio' {
    /**
     * Read an int number from the standard input console
     * @returns int
     */
    export function readInt() : number

    /**
     * Read a float number from the standard input console
     * @returns double
     */
    export function readDouble() : number

    /**
     * Read a line from the standard input console, the maxium length is 1024.
     * @returns String -- Not more than 1024 characters.
     */
    export function read_line() : string

    /**
     * Read a line from the standard input console, the maxium length is 1024.
     * @returns String -- Not more than 1024 characters.
     */
    export function readline() : string

    /**
     * Read a line from the standard input console, the maxium length is 1024.
     * @returns String -- Not more than 1024 characters.
     */
    export function readLine() : string


    /**
     * Read n chars from the standard input console, the maxium length is n unless meets the enter key.
     * @param Number n 
     * @returns String
     */
    export function gets(n : Number) : string

    /**
     * Ouput some text to the standard out device without an enter key.
     * @param sth 
     * @param args 
     */
    export function printsth(sth : any, ...args) : void

    /**
     * Ouput some text to the standard out device without an enter key, like `console.log`.
     * @param sth 
     * @param args 
     */
    export function print(sth : any, ...args) : void
}
