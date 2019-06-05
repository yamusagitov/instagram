export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/'

    }

    getResource = async(URL) => {
        const res = await fetch(`${this._apiBase}${URL}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${URL}, received ${res.status }`)

        }
        return res.json();
    }
    getAllPosts = async () =>{
        const res = await this.getResource(posts/);
        return res;
    }
}