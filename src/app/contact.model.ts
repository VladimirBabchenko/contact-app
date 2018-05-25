export class Contact {
    constructor(
        public id: number,
        public name: string,
        public phone: number | string,
        public surname?: string,
        public description?: string,
        public email?: string,
        public birthday?: string | number,
        public info?: string | number,
        public instagram?: string | number,
        public facebook?: string | number,
    ) { }
}