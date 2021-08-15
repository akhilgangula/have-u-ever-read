class DataStore {
    constructor() {
        this.data = {};
    }
    getData(id) {
        return this.data[id];
    }
    getAllData() {
        return this.data;
    }
    addData(id, data) {
        if(!this.data[id]) {
            this.data[id] = [];
        }
        this.data[id]= data;
        console.log(this.data);
        return this.data[id];
    }
    clearData() {
        this.data = {};
    }
}
const store = new DataStore();
export default store;

/**
 * data = {
 *      id: [
 *          {
 *          userId:
 *          commentId:
 *          comment:
 *          rating
 *       },
 *        {
 * 
 *          }
 *      ]
 * }
 */