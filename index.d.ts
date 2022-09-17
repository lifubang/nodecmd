declare namespace index {
    interface stdio {
        /**
         * @returns {Number}
         */
        readInt() : Number

        /**
         * @returns {Number}
         */
        readDouble() : Number

        /**
         * @returns {String}
         */
        read_line() : string

        /**
         * @returns {String}
         */
        readline() : string

        /**
         * @returns {String}
         */
        readLine() : string


        /**
         * @param {Number} n 
         */
        gets(n : Number) : string

        printsth(sth : any, ...args) : void

        print(sth : any, ...args) : void
    }
}
export = index;